"use client";

import { useEffect, useRef } from "react";
import { onScrollFrame } from "@/lib/scroll-ticker";

/**
 * A hairline gold bar across the very top of the viewport that fills with how
 * far the reader has moved through the target element. It measures the article
 * itself, not the hero and footer wrapped around it.
 *
 * The article's geometry only changes when the page is resized or reflows, so
 * it is cached there and the frame loop does nothing but write a transform —
 * no layout read, and no React render, per scroll event. It also rides the
 * shared ticker, so the bar moves with the eased scroll position the rest of
 * the page animates against rather than the raw one.
 */
export function ReadingProgress({ targetId }: { targetId: string }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = document.getElementById(targetId);
    const bar = barRef.current;
    if (!el || !bar) return;

    let top = 0;
    let total = 0;
    let last = -1;

    const update = (scroll: number) => {
      const progress =
        total > 0 ? Math.min(Math.max((scroll - top) / total, 0), 1) : 0;
      if (progress === last) return;
      last = progress;
      bar.style.transform = `scaleX(${progress})`;
    };

    const measure = () => {
      top = el.getBoundingClientRect().top + window.scrollY;
      total = el.offsetHeight - window.innerHeight;
      last = -1;
      update(window.scrollY);
    };

    measure();

    // Catches the article reflowing — a late image, a font swap — as well as
    // the viewport changing height under it.
    const resize = new ResizeObserver(measure);
    resize.observe(el);
    window.addEventListener("resize", measure);
    const stop = onScrollFrame(update);

    return () => {
      stop();
      resize.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [targetId]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-60 h-0.5 bg-transparent"
    >
      <div
        ref={barRef}
        className="h-full origin-left bg-gold"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
