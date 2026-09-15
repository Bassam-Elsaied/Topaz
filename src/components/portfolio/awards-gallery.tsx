"use client";

import Image from "@/components/ui/image-load";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { ALL_AWARDS, AWARDS, FEATURED_AWARD } from "@/data/awards";
import { setScrollLocked } from "@/lib/scroll-ticker";

/**
 * The certificates as a wall of framed recognitions that opens into a viewer.
 *
 * A headline award leads, the rest sit in a ruled grid, and any one opens full
 * size so the certificate itself — signatures, seals and all — can actually be
 * read. Thumbnails crop to a uniform frame (`object-cover`); the viewer shows
 * the whole document (`object-contain`). Stills go through ImageLoad.
 *
 * The lightbox indexes ALL_AWARDS (featured first), so the featured card and
 * every grid tile step through one continuous set.
 */
export function AwardsGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggersRef = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);

  const open = openIndex !== null;
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((index) =>
        index === null
          ? index
          : (index + delta + ALL_AWARDS.length) % ALL_AWARDS.length,
      ),
    [],
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
    if (index !== null) triggersRef.current[index]?.focus();
  };

  const current = openIndex === null ? null : ALL_AWARDS[openIndex];

  return (
    <section
      id="recognitions"
      aria-labelledby="recognitions-heading"
      className="relative w-full border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
            <div className="reveal max-w-[34ch]">
              <SectionLabel>The record</SectionLabel>
              <h2
                id="recognitions-heading"
                className="mt-6 font-display text-[clamp(30px,4vw,52px)] font-bold uppercase leading-[0.95] tracking-[-0.015em]"
              >
                Achievements &
                <span className="block text-gold">recognitions</span>
              </h2>
            </div>
            <span
              aria-hidden="true"
              className="reveal font-display text-[clamp(56px,9vw,130px)] font-bold leading-[0.8] tabular-nums text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.16)]"
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {ALL_AWARDS.length}
            </span>
          </div>
        </Reveal>

        {/* Featured recognition. */}
        <Reveal>
          <button
            ref={(node) => {
              triggersRef.current[0] = node;
            }}
            type="button"
            onClick={() => setOpenIndex(0)}
            className="reveal group relative mt-12 block w-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 text-left transition-colors duration-500 hover:border-gold/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            <span className="relative block aspect-video w-full overflow-hidden md:aspect-21/9">
              <Image
                src={FEATURED_AWARD.image}
                alt={`${FEATURED_AWARD.title} certificate awarded to Topaz Events`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1440px"
                className="z-0 object-cover transition-transform duration-1100 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
              {/* z-10 keeps the scrim above the scaled image — transform creates a
                  stacking context that would otherwise paint over later siblings. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/40 to-black/10"
              />
            </span>
            <span className="absolute inset-x-0 bottom-0 z-20 flex flex-col gap-3 p-7 md:p-12">
              <span className="flex items-center gap-3 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-gold">
                <span
                  aria-hidden="true"
                  className="size-1.5 rotate-45 bg-gold"
                />
                Latest recognition
              </span>
              <span className="max-w-[20ch] font-display text-[clamp(24px,3.6vw,46px)] font-bold uppercase leading-[0.98] tracking-[-0.02em] transition-colors duration-300 group-hover:text-gold">
                {FEATURED_AWARD.title}
              </span>
              {FEATURED_AWARD.org && (
                <span className="font-sans text-[13px] uppercase tracking-widest text-text-muted">
                  {FEATURED_AWARD.org}
                </span>
              )}
            </span>
          </button>
        </Reveal>

        {/* The rest, as a framed grid. */}
        <Reveal>
          <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-5">
            {AWARDS.map((award, i) => {
              const index = i + 1; // ALL_AWARDS is featured-first
              return (
                <li
                  key={award.image}
                  className="reveal"
                  style={
                    {
                      "--reveal-delay": `${Math.min(i, 7) * 45}ms`,
                    } as React.CSSProperties
                  }
                >
                  <button
                    ref={(node) => {
                      triggersRef.current[index] = node;
                    }}
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    aria-label={`View the ${award.title} certificate`}
                    className="group relative block w-full cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-surface/40 text-left transition-colors duration-500 hover:border-gold/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    <span className="relative block aspect-4/3 overflow-hidden">
                      <Image
                        src={award.image}
                        alt={`${award.title} certificate awarded to Topaz Events`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 46vw, (max-width: 1024px) 31vw, 320px"
                        className="z-0 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Even dim on hover — not a bottom gradient. Certificates are
                          light documents; a heavy foot-scrim read as a black bar, and
                          the image scale was painting over any overlay without z-index. */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 z-10 bg-black/0 transition-colors duration-300 group-hover:bg-black/35"
                      />
                      <span className="pointer-events-none absolute bottom-3 right-3 z-20 flex size-8 items-center justify-center rounded-full border border-gold/50 bg-black/55 text-gold opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="size-4"
                        >
                          <path d="M15 3h6v6M14 10l7-7M10 21H3v-6M3 21l7-7" />
                        </svg>
                      </span>
                    </span>
                    <span className="relative z-10 flex min-h-16 items-center gap-3 border-t border-white/5 bg-bg px-4 py-3.5">
                      <span className="font-sans text-[11px] font-bold tabular-nums tracking-[0.12em] text-gold">
                        {String(index).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[12px] font-bold uppercase leading-[1.3] tracking-[0.02em] transition-colors duration-300 group-hover:text-gold md:text-[13px]">
                        {award.title}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>

      {current
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${current.title} — certificate`}
              onClick={close}
              className="fixed inset-0 z-100 flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm md:p-10"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close certificate viewer"
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

              <AwardArrow
                direction="previous"
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
              />
              <AwardArrow
                direction="next"
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
              />

              <figure
                onClick={(event) => event.stopPropagation()}
                className="w-full max-w-[min(94vw,1180px)]"
              >
                <span className="relative block h-[74svh] w-full">
                  <Image
                    src={current.image}
                    alt={`${current.title} certificate awarded to Topaz Events`}
                    fill
                    sizes="(max-width: 1180px) 94vw, 1180px"
                    className="object-contain"
                  />
                </span>
                <figcaption className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-sans text-[13px] text-text-muted">
                  <span className="font-bold uppercase tracking-[0.08em] text-text">
                    {openIndex! + 1} / {ALL_AWARDS.length}
                  </span>
                  <span className="max-w-[70ch]">
                    {current.title}
                    {current.org && ` — ${current.org}`}
                  </span>
                </figcaption>
              </figure>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}

function AwardArrow({
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
      aria-label={`${next ? "Next" : "Previous"} certificate`}
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
