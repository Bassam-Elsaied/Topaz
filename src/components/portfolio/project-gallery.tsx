"use client";

import Image from "@/components/ui/image-load";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { ProjectShot } from "@/data/projects";
import { setScrollLocked } from "@/lib/scroll-ticker";

/**
 * Photography from the night, as a grid that opens into a viewer.
 *
 * Thumbnails are served at grid size and the full frame is only requested when
 * someone opens one, so a page with six photographs on it costs six small
 * images rather than six large ones.
 */
export function ProjectGallery({
  shots,
  title,
}: {
  shots: ProjectShot[];
  title: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggersRef = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);

  const open = openIndex !== null;
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((index) =>
        index === null ? index : (index + delta + shots.length) % shots.length,
      ),
    [shots.length],
  );

  useEffect(() => {
    if (!open) return;

    setScrollLocked(true);
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      setScrollLocked(false);
    };
  }, [open, step]);

  const close = () => {
    const index = openIndex;
    setOpenIndex(null);
    // Focus goes back to the thumbnail that was opened, not to the top of the
    // document, so keyboard readers keep their place in the grid.
    if (index !== null) triggersRef.current[index]?.focus();
  };

  if (shots.length === 0) return null;
  const current = openIndex === null ? null : shots[openIndex];

  return (
    <section
      aria-labelledby="gallery-heading"
      className="relative w-full border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <SectionLabel>On the night</SectionLabel>
          <h2
            id="gallery-heading"
            className="reveal mt-6 max-w-[16ch] font-display text-[clamp(28px,3.8vw,48px)] font-bold uppercase leading-[0.98] tracking-[-0.015em]"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            Event <span className="text-gold">highlights</span>
          </h2>
        </Reveal>

        <Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
            {shots.map((shot, index) => (
              <li
                key={shot.src}
                className="reveal"
                style={
                  { "--reveal-delay": `${Math.min(index, 5) * 70}ms` } as React.CSSProperties
                }
              >
                <button
                  ref={(node) => {
                    triggersRef.current[index] = node;
                  }}
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`Open photograph ${index + 1} of ${shots.length}`}
                  className="group relative block w-full cursor-pointer overflow-hidden rounded-lg border border-white/10 transition-colors duration-500 hover:border-gold/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <span className="relative block aspect-4/3">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 768px) 46vw, 31vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {current
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${title} — photographs`}
              onClick={close}
              className="fixed inset-0 z-100 flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm md:p-10"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close gallery"
                className="absolute right-4 top-4 flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/20 text-text transition-colors duration-300 hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:right-8 md:top-8"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="size-5"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>

              {shots.length > 1 && (
                <>
                  <GalleryArrow
                    direction="previous"
                    onClick={(event) => {
                      event.stopPropagation();
                      step(-1);
                    }}
                  />
                  <GalleryArrow
                    direction="next"
                    onClick={(event) => {
                      event.stopPropagation();
                      step(1);
                    }}
                  />
                </>
              )}

              <figure
                onClick={(event) => event.stopPropagation()}
                className="w-full max-w-[min(92vw,1180px)]"
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={current.width}
                  height={current.height}
                  sizes="(max-width: 1180px) 92vw, 1180px"
                  className="h-auto max-h-[76svh] w-full rounded-xl object-contain md:rounded-2xl"
                />
                <figcaption className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-sans text-[13px] text-text-muted">
                  <span className="font-bold uppercase tracking-[0.08em] text-text">
                    {openIndex! + 1} / {shots.length}
                  </span>
                  <span className="max-w-[70ch]">{current.alt}</span>
                </figcaption>
              </figure>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}

function GalleryArrow({
  direction,
  onClick,
}: {
  direction: "previous" | "next";
  onClick: (event: React.MouseEvent) => void;
}) {
  const next = direction === "next";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${next ? "Next" : "Previous"} photograph`}
      className={`absolute top-1/2 z-10 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 text-text transition-colors duration-300 hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:size-13 ${
        next ? "right-3 md:right-8" : "left-3 md:left-8"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-5"
      >
        <path d={next ? "m9 5 7 7-7 7" : "m15 5-7 7 7 7"} />
      </svg>
    </button>
  );
}
