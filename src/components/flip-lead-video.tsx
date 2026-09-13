"use client";

import { useEffect, useRef } from "react";
import { LEAD_PROJECT } from "@/data/projects";
import {
  FLIP_LEAD_VH,
  FLIP_SOURCE_ATTR,
  FLIP_TARGET_ATTR,
  FLIP_TRAIL_VH,
} from "@/lib/flip";
import { onScrollFrame, ScrollOrder } from "@/lib/scroll-ticker";

/**
 * The first event video, sitting in the diamond collage until it travels down
 * into the leading panel of the events track the way the reference site FLIPs
 * its scattered video into place.
 *
 * Rather than reparenting the element, one fixed card interpolates between the
 * live bounding boxes of two empty placeholders — `[data-flip-source]` in the
 * collage and `[data-flip-target]` in the events track. Reading both rects every
 * frame means it keeps tracking the target while the events track scrolls
 * sideways, with no second video element and no duplicate decode.
 */

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;

export function FlipLeadVideo() {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const overlay = overlayRef.current;
    const video = videoRef.current;
    if (!card || !overlay || !video) return;

    const source = document.querySelector<HTMLElement>(`[${FLIP_SOURCE_ATTR}]`);
    const target = document.querySelector<HTMLElement>(`[${FLIP_TARGET_ATTR}]`);
    const section = target?.closest("section");
    if (!source || !target || !section) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Static page-space geometry, refreshed only on resize. The source never
    // moves relative to the document, so the frame loop needs no layout read
    // for it; the target does move (its track scrolls sideways) and is the one
    // rect still measured per frame.
    let sourceTop = 0;
    let sourceLeft = 0;
    let sourceWidth = 0;
    let sourceHeight = 0;
    let sectionTop = 0;
    let baseWidth = 1;
    let baseHeight = 1;

    const measure = () => {
      const s = source.getBoundingClientRect();
      sourceTop = s.top + window.scrollY;
      sourceLeft = s.left;
      sourceWidth = s.width;
      sourceHeight = s.height;
      sectionTop = section.getBoundingClientRect().top + window.scrollY;

      // The card is laid out once at full size and only ever scaled, so the
      // browser never re-lays-out the video mid-flight.
      const t = target.getBoundingClientRect();
      baseWidth = t.width || 1;
      baseHeight = t.height || 1;
      card.style.width = `${baseWidth}px`;
      card.style.height = `${baseHeight}px`;
    };

    let playing = false;

    const update = (scroll: number) => {
      const t = target.getBoundingClientRect();
      const vh = window.innerHeight;

      // Progress is measured off the section, not the target: the target sits
      // inside a sticky track and stops moving down the page once it pins.
      const scrolled = scroll - sectionTop;
      const span = vh * (FLIP_LEAD_VH + FLIP_TRAIL_VH);
      const raw = (scrolled + vh * FLIP_LEAD_VH) / span;

      // Below the pin breakpoint the collage is hidden, so there is nothing to
      // fly out of and the card simply rides its slot in the stacked layout.
      const collapsed = sourceWidth === 0 || reduced.matches;
      const p = collapsed ? 1 : easeInOutCubic(clamp(raw));

      const width = lerp(sourceWidth, t.width, p);
      const height = lerp(sourceHeight, t.height, p);
      const x = lerp(sourceLeft, t.left, p);
      const y = lerp(sourceTop - scroll, t.top, p);

      card.style.transform =
        `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) ` +
        `scale(${(width / baseWidth).toFixed(5)}, ${(height / baseHeight).toFixed(5)})`;

      // The caption would overflow the small collage card, so it only arrives
      // as the flip lands.
      overlay.style.opacity = clamp((p - 0.65) / 0.3).toFixed(3);

      // Decode only while some part of the card is on screen.
      const visible = y + height > -200 && y < vh + 200;
      if (visible !== playing) {
        playing = visible;
        if (visible) void video.play().catch(() => {});
        else video.pause();
      }
    };

    let stop: (() => void) | null = null;

    // The loop still costs one layout read per frame, so it only runs while one
    // of the two sections the card travels between is near the viewport.
    const near = new Set<Element>();
    const visibility = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) near.add(entry.target);
          else near.delete(entry.target);
        }
        if (near.size > 0 && !stop) {
          measure();
          // Runs after the track so the card lands on this frame's card
          // position, not the previous one, while the track scrolls sideways.
          stop = onScrollFrame(update, ScrollOrder.Follower);
        } else if (near.size === 0 && stop) {
          stop();
          stop = null;
          video.pause();
          playing = false;
        }
      },
      { rootMargin: "20%" },
    );

    const collage = source.closest("section");
    if (collage) visibility.observe(collage);
    visibility.observe(section);
    window.addEventListener("resize", measure);

    return () => {
      visibility.disconnect();
      window.removeEventListener("resize", measure);
      stop?.();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="pointer-events-none fixed left-0 top-0 z-20 origin-top-left overflow-hidden rounded-[40px] bg-surface will-change-transform"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        src={LEAD_PROJECT.video}
        poster={LEAD_PROJECT.image}
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={LEAD_PROJECT.title}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent"
      />

      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-x-0 bottom-0 p-6 opacity-0 md:p-10"
      >
        <span className="mb-2 inline-block font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-gold md:text-[14px]">
          Previous event
        </span>
        <h3 className="font-display text-[22px] font-bold uppercase leading-[0.95] text-text md:text-[40px]">
          {LEAD_PROJECT.title}
        </h3>
      </div>
    </div>
  );
}
