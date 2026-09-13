"use client";

import { useEffect, useRef } from "react";

/**
 * Looping background clip that only decodes when it is worth decoding.
 *
 * Buffering and playback are split: a wide margin warms the file up as it
 * approaches, while playback is tied to the clip actually being on screen, so
 * a tile that has scrolled past is not still costing a decode.
 */
export function LazyVideo({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let warmed = false;
    const warm = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || warmed) return;
        warmed = true;
        video.preload = "auto";
        video.load();
      },
      { rootMargin: "40%" },
    );

    const playback = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) void video.play().catch(() => {});
      else video.pause();
    });

    warm.observe(video);
    playback.observe(video);
    return () => {
      warm.disconnect();
      playback.disconnect();
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      loop
      muted
      playsInline
      preload="none"
      aria-label={label}
    />
  );
}
