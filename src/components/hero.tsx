"use client";

import { useEffect, useRef } from "react";

/**
 * Full-viewport hero. It is fixed behind the page so the sections below scroll
 * up over a video that never moves. The clip carries its own titles, so nothing
 * is laid over it beyond the gradients that keep the header readable and blend
 * the bottom edge into the next section.
 */
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Being fixed, the hero stays "on screen" as far as the compositor is
  // concerned even once it is fully covered. Pausing it then frees a
  // full-screen 1080p decode for the rest of the page.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let frame = 0;
    let covered: boolean | null = null;

    const check = () => {
      frame = 0;
      const next = window.scrollY > window.innerHeight * 0.9;
      if (next === covered) return;
      covered = next;
      if (next) video.pause();
      else void video.play().catch(() => {});
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(check);
    };

    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="fixed inset-x-0 top-0 z-0 min-h-140 overflow-hidden bg-bg landscape:min-h-svh md:min-h-180 will-change-transform"
      style={{ height: "100svh" }}
    >
      {/* The showreel carries its own titles, so the page's heading is rendered
          for crawlers and screen readers rather than drawn a second time over
          footage that already says it. */}
      <h1 id="hero-heading" className="sr-only">
        Bring your events to life with Topaz — a leading event management
        company in Sharjah, Dubai and Abu Dhabi
      </h1>

      <video
        ref={videoRef}
        className="pointer-events-none size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/home.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-bg/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(224,194,110,0.10) 0%, rgba(224,194,110,0) 45%)",
        }}
      />
    </section>
  );
}
