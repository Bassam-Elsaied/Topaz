"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { registerScroller } from "@/lib/scroll-ticker";

/**
 * Interpolated scrolling for the whole page. Lenis is handed to the shared
 * ticker rather than driving its own rAF, so every scroll-linked section reads
 * the eased position in the same frame it is written.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    const unregister = registerScroller(lenis);

    return () => {
      unregister();
      lenis.destroy();
    };
  }, []);

  return null;
}
