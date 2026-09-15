"use client";

import { useEffect, useRef } from "react";
import { onScrollFrame, ScrollOrder } from "@/lib/scroll-ticker";

/**
 * Wireframe brilliant-cut diamond that spins about its vertical axis and
 * accelerates while the page is scrolling — the Topaz stand-in for the
 * reference site's accelerating globe.
 */

const SEGMENTS = 8;
const TABLE_RADIUS = 0.46;
const TABLE_Y = 0.36;
const GIRDLE_Y = 0.06;
const CULET_Y = -1.02;

// Viewing transform: a slight downward tilt plus mild perspective so the
// pavilion reads as depth rather than a flat star.
const TILT = -0.22;
const DISTANCE = 3.6;

const BASE_SPEED = 0.0022;
const MAX_SPEED = 0.05;
const SCROLL_GAIN = 0.00018;
const DECAY = 0.94;

const SCALE_FACTOR = 0.4;
const BUCKETS = 7;

type Vec3 = [number, number, number];

function buildGeometry() {
  const table: Vec3[] = [];
  const girdle: Vec3[] = [];
  const girdleMid: Vec3[] = [];

  for (let i = 0; i < SEGMENTS; i++) {
    const a = (i / SEGMENTS) * Math.PI * 2;
    const am = a + Math.PI / SEGMENTS;
    table.push([Math.cos(a) * TABLE_RADIUS, TABLE_Y, Math.sin(a) * TABLE_RADIUS]);
    girdle.push([Math.cos(a), GIRDLE_Y, Math.sin(a)]);
    girdleMid.push([Math.cos(am) * 0.98, GIRDLE_Y, Math.sin(am) * 0.98]);
  }

  const verts: Vec3[] = [...table, ...girdle, ...girdleMid, [0, CULET_Y, 0]];
  const tableAt = (i: number) => i;
  const girdleAt = (i: number) => SEGMENTS + i;
  const midAt = (i: number) => SEGMENTS * 2 + i;
  const culet = SEGMENTS * 3;

  const edges: [number, number][] = [];
  for (let i = 0; i < SEGMENTS; i++) {
    const n = (i + 1) % SEGMENTS;
    edges.push([tableAt(i), tableAt(n)]);
    edges.push([girdleAt(i), midAt(i)], [midAt(i), girdleAt(n)]);
    edges.push([tableAt(i), girdleAt(i)]);
    edges.push([tableAt(i), midAt(i)], [tableAt(n), midAt(i)]);
    edges.push([girdleAt(i), culet]);
    edges.push([midAt(i), culet]);
  }

  return { verts, edges };
}

const { verts, edges } = buildGeometry();

export function Diamond({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let angle = 0.4;
    let speed = BASE_SPEED;
    let lastScroll = window.scrollY;
    let stop: (() => void) | null = null;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const projected = verts.map(() => [0, 0, 0]);
    const buckets: number[][] = Array.from({ length: BUCKETS }, () => []);

    const draw = () => {
      const scale = Math.min(width, height) * SCALE_FACTOR;
      const cx = width / 2;
      const cy = height / 2;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const cosT = Math.cos(TILT);
      const sinT = Math.sin(TILT);

      const transform = (v: Vec3, out: number[]) => {
        const [x0, y0, z0] = v;
        const x = x0 * cosA + z0 * sinA;
        const zr = -x0 * sinA + z0 * cosA;
        const y = y0 * cosT - zr * sinT;
        const z = y0 * sinT + zr * cosT;
        const p = DISTANCE / (DISTANCE - z);
        out[0] = cx + x * p * scale;
        out[1] = cy - y * p * scale;
        out[2] = z;
      };

      for (let i = 0; i < verts.length; i++) transform(verts[i], projected[i]);

      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#E0C26E";

      // Segments are bucketed by depth and stroked as a handful of batched
      // paths. Per-segment strokes with a canvas shadow were the dominant cost
      // here; a wide low-alpha pass under a thin bright one fakes the same glow
      // for a fraction of the work.
      for (const bucket of buckets) bucket.length = 0;

      const push = (
        ax: number,
        ay: number,
        bx: number,
        by: number,
        depth: number,
        spread: number,
      ) => {
        const t = Math.min(1, Math.max(0, (depth + spread) / (spread * 2)));
        const bucket = buckets[Math.min(BUCKETS - 1, (t * BUCKETS) | 0)];
        bucket.push(ax, ay, bx, by);
      };

      for (const [ai, bi] of edges) {
        const a = projected[ai];
        const b = projected[bi];
        push(a[0], a[1], b[0], b[1], (a[2] + b[2]) / 2, 1);
      }

      for (let bi = 0; bi < BUCKETS; bi++) {
        const bucket = buckets[bi];
        if (bucket.length === 0) continue;

        const t = (bi + 0.5) / BUCKETS;
        ctx.beginPath();
        for (let i = 0; i < bucket.length; i += 4) {
          ctx.moveTo(bucket[i], bucket[i + 1]);
          ctx.lineTo(bucket[i + 2], bucket[i + 3]);
        }

        const alpha = 0.16 + t * 0.74;
        const lineWidth = 0.7 + t * 0.9;
        ctx.globalAlpha = alpha * 0.16;
        ctx.lineWidth = lineWidth * 5;
        ctx.stroke();
        ctx.globalAlpha = alpha;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
    };

    // Spin rate is driven by how far the eased scroll moved this frame, so it
    // shares the ticker instead of racing a `scroll` listener against it.
    const tick = (scroll: number) => {
      const delta = Math.abs(scroll - lastScroll);
      lastScroll = scroll;
      speed = Math.min(MAX_SPEED, speed + delta * SCROLL_GAIN);

      angle += speed;
      speed = BASE_SPEED + (speed - BASE_SPEED) * DECAY;
      draw();
    };

    resize();
    draw();

    // Nothing is visible once the section scrolls away, so stop burning frames.
    const visibility = new IntersectionObserver(
      ([entry]) => {
        const shouldRun = entry.isIntersecting && !reduced;
        if (shouldRun && !stop) {
          lastScroll = window.scrollY;
          stop = onScrollFrame(tick, ScrollOrder.Effect);
        } else if (!shouldRun && stop) {
          stop();
          stop = null;
        }
      },
      { rootMargin: "200px" },
    );
    visibility.observe(canvas);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw();
    });
    resizeObserver.observe(canvas);

    return () => {
      stop?.();
      visibility.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`block size-full ${className}`}
    />
  );
}
