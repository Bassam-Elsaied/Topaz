"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type SyntheticEvent,
} from "react";

export type ImageLoadProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  /** Stretch to a `relative` parent the way next/image `fill` does. */
  fill?: boolean;
  /** Skip lazy-load — use for LCP / above-the-fold stills. */
  priority?: boolean;
  disableLazy?: boolean;
  cover?: boolean;
  wrapperClassName?: string;
  /** Accepted for next/image drop-in compatibility; unused (files are pre-sized WebP). */
  sizes?: string;
  /** Accepted for drop-in compatibility; unused. */
  unoptimized?: boolean;
  loading?: "lazy" | "eager";
};

function splitStacking(className: string) {
  const tokens = className.split(/\s+/).filter(Boolean);
  const stacking: string[] = [];
  const rest: string[] = [];
  for (const token of tokens) {
    if (/^-?z-/.test(token)) stacking.push(token);
    else rest.push(token);
  }
  return { stacking: stacking.join(" "), rest: rest.join(" ") };
}

/**
 * Site image primitive: fade-in lazy load against pre-built WebP in `/public`.
 *
 * Cached images can finish before React attaches `onLoad`; the complete-check
 * effect covers that so they do not stay at opacity 0 on reload.
 */
export default function ImageLoad({
  src,
  alt,
  className = "",
  width,
  height,
  fill = false,
  priority = false,
  disableLazy = false,
  cover = false,
  wrapperClassName = "",
  loading,
}: ImageLoadProps): ReactNode {
  const eager = disableLazy || priority || loading === "eager";
  const [inView, setInView] = useState(eager);
  // Keyed on the src so a new one starts blurred without resetting in an effect.
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const loaded = loadedSrc === src;
  const rootRef = useRef<HTMLSpanElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (eager || inView) return;
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eager, inView]);

  // Cached images can finish before React attaches onLoad — mark them loaded.
  useEffect(() => {
    if (!inView) return;
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) setLoadedSrc(src);
  }, [inView, src]);

  const onLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    if (event.currentTarget.naturalWidth > 0) setLoadedSrc(src);
  };

  const { stacking, rest } = splitStacking(className);
  const coverClass =
    cover || (fill && !rest.includes("object-")) ? "object-cover" : "";

  const image = inView ? (
    // Pre-built WebP in /public, so the Next optimizer is deliberately skipped.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      onLoad={onLoad}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
      // Unloaded fade is an inline style so it cannot fight a consumer's
      // opacity utilities. Once loaded, no opacity is set here — stacked
      // previews can hide a layer without ImageLoad forcing it back to 100.
      // Filter blur is skipped: it is a full-image GPU pass on every still.
      className={[
        fill ? "absolute inset-0 h-full w-full" : "",
        coverClass,
        rest,
        "transition-opacity duration-500 ease-out",
      ]
        .filter(Boolean)
        .join(" ")}
      style={loaded ? undefined : { opacity: 0 }}
    />
  ) : null;

  if (fill) {
    return (
      <span
        ref={rootRef}
        className={[
          "absolute inset-0 block h-full w-full overflow-hidden bg-[#111]",
          stacking,
          wrapperClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {image}
      </span>
    );
  }

  return (
    <span
      ref={rootRef}
      className={["relative inline-block max-w-full", wrapperClassName]
        .filter(Boolean)
        .join(" ")}
    >
      {image}
    </span>
  );
}
