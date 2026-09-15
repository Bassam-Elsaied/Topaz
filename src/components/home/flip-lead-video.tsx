"use client";

import Image from "@/components/ui/image-load";
import { useEffect, useRef } from "react";
import { VideoLightbox } from "@/components/ui/video-lightbox";
import type { ReelCardData } from "@/data/cards";
import {
  FLIP_DESKTOP_MQ,
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
 * collage and `[data-flip-target]` in the events track. The target is read
 * while the card is moving so it keeps tracking the sideways track, with a
 * single card rather than one per section. Below desktop the JS does not run.
 *
 * The project arrives as a prop rather than an import: this is a client
 * component, so importing `@/data/projects` would ship the whole portfolio to
 * the browser for one still. See `@/data/cards`.
 */

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;

export function FlipLeadVideo({ project }: { project: ReelCardData }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const overlay = overlayRef.current;
    if (!card || !overlay) return;

    const source = document.querySelector<HTMLElement>(`[${FLIP_SOURCE_ATTR}]`);
    const target = document.querySelector<HTMLElement>(`[${FLIP_TARGET_ATTR}]`);
    const section = target?.closest("section");
    if (!source || !target || !section) return;

    const desktop = window.matchMedia(FLIP_DESKTOP_MQ);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Static page-space geometry, refreshed only on resize. The source never
    // moves relative to the document, so the frame loop needs no layout read
    // for it; the target does move (its track scrolls sideways) and is the one
    // rect still measured per frame — and only once the card has left the
    // collage, so the long approach costs no layout.
    let sourceTop = 0;
    let sourceLeft = 0;
    let sourceWidth = 0;
    let sourceHeight = 0;
    let sectionTop = 0;
    let baseWidth = 1;
    let baseHeight = 1;
    let lastScroll = -1;
    let lastP = -1;
    let enabled = false;

    const park = () => {
      card.style.pointerEvents = "none";
      card.style.visibility = "hidden";
      card.style.willChange = "auto";
    };

    const measure = () => {
      lastScroll = -1;
      lastP = -1;
      enabled = desktop.matches;
      if (!enabled) {
        park();
        return;
      }

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

    const update = (scroll: number) => {
      if (!enabled) return;
      if (scroll === lastScroll) return;
      lastScroll = scroll;

      const vh = window.innerHeight;

      // Progress is measured off the section, not the target: the target sits
      // inside a sticky track and stops moving down the page once it pins.
      const scrolled = scroll - sectionTop;
      const span = vh * (FLIP_LEAD_VH + FLIP_TRAIL_VH);
      const raw = (scrolled + vh * FLIP_LEAD_VH) / span;

      const collapsed = sourceWidth === 0 || reduced.matches;
      const p = collapsed ? 1 : easeInOutCubic(clamp(raw));

      let width = sourceWidth;
      let height = sourceHeight;
      let x = sourceLeft;
      let y = sourceTop - scroll;

      // Still sitting in the collage: cached source box is enough. The target
      // is only read once the card is in flight or riding the travelling track.
      if (p > 0) {
        const t = target.getBoundingClientRect();
        width = lerp(sourceWidth, t.width, p);
        height = lerp(sourceHeight, t.height, p);
        x = lerp(sourceLeft, t.left, p);
        y = lerp(sourceTop - scroll, t.top, p);
      }

      card.style.transform =
        `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) ` +
        `scale(${(width / baseWidth).toFixed(5)}, ${(height / baseHeight).toFixed(5)})`;
      card.style.visibility = "visible";

      if (p !== lastP) {
        lastP = p;
        // The caption would overflow the small collage card, so it only arrives
        // as the flip lands.
        overlay.style.opacity = clamp((p - 0.65) / 0.3).toFixed(3);

        // The card is fixed and full size, so its play button would otherwise
        // be a click target laid over whatever is behind it for the whole
        // flight. It is only ever over its own slot once it has arrived.
        card.style.pointerEvents = p > 0.98 ? "auto" : "none";
        card.style.willChange = p > 0 && p < 1 ? "transform" : "auto";
      }
    };

    let stop: (() => void) | null = null;

    // The loop still costs one layout read per frame once the card is moving,
    // so it only runs while one of the two sections is near the viewport —
    // and never below the desktop breakpoint, where the track owns the lead.
    const near = new Set<Element>();
    const visibility = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) near.add(entry.target);
          else near.delete(entry.target);
        }
        if (!enabled) return;
        if (near.size > 0 && !stop) {
          measure();
          // Runs after the track so the card lands on this frame's card
          // position, not the previous one, while the track scrolls sideways.
          stop = onScrollFrame(update, ScrollOrder.Follower);
        } else if (near.size === 0 && stop) {
          stop();
          stop = null;
          park();
        }
      },
      { rootMargin: "20%" },
    );

    const collage = source.closest("section");

    const syncDesktop = () => {
      visibility.disconnect();
      near.clear();
      stop?.();
      stop = null;
      measure();
      if (!desktop.matches) return;
      if (collage) visibility.observe(collage);
      visibility.observe(section);
    };

    syncDesktop();
    window.addEventListener("resize", measure);
    desktop.addEventListener("change", syncDesktop);

    return () => {
      visibility.disconnect();
      window.removeEventListener("resize", measure);
      desktop.removeEventListener("change", syncDesktop);
      stop?.();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      // Below `lg` the events track stacks its cards instead of travelling,
      // and this card is fixed: it could neither stick with them nor let the
      // ones after it paint over it. The track carries the lead event itself
      // there, so there is nothing for this to fly to.
      className="pointer-events-none fixed left-0 top-0 z-20 origin-top-left overflow-hidden rounded-[40px] bg-surface max-lg:hidden"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="900px"
        className="object-cover"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent"
      />

      {project.video ? (
        <VideoLightbox video={project.video} />
      ) : null}

      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-6 opacity-0 md:p-10"
      >
        <span className="mb-2 inline-block font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-gold md:text-[14px]">
          Previous event
        </span>
        <h3 className="font-display text-[22px] font-bold uppercase leading-[0.95] text-text md:text-[40px]">
          {project.title}
        </h3>
      </div>
    </div>
  );
}
