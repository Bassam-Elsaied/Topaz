"use client";

import Image from "@/components/ui/image-load";
import Link from "next/link";
import type { ProjectCardData } from "@/data/cards";

/**
 * One event in the portfolio grid, styled as a cinematic tile: the photograph
 * fills the card, the meta is laid over it, and a "view" cue slides up on hover
 * so a card reads as a poster rather than a boxed thumbnail with a caption.
 *
 * The whole tile is the link — the play glyph is a hint that footage waits on
 * the other side, not a second control, so a card never asks the reader to aim
 * at the right half of itself.
 *
 * Stills are already WebP from the build pipeline; ImageLoad serves them
 * with a blur-up lazy load so grids stay light until tiles enter view.
 */
export function ProjectCard({
  project,
  index,
  priority = false,
  aspect = "aspect-4/5",
  sizes = "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 420px",
}: {
  project: ProjectCardData;
  /** 1-based position, shown as an editorial index numeral. */
  index?: number;
  priority?: boolean;
  aspect?: string;
  sizes?: string;
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group relative block h-full overflow-hidden rounded-xl border border-white/10 transition-colors duration-500 hover:border-gold/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      <figure className={`relative ${aspect} w-full overflow-hidden bg-surface`}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
        />

        {/* Reads the photo for the type: a heavy foot fading to clear at the
            top, deepened a touch more on hover as the caption lifts. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black"
        />

        {/* Gold frame that draws itself on hover — the creative accent. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-3 rounded-lg border border-gold/0 transition-all duration-500 group-hover:inset-4 group-hover:border-gold/40"
        />

        <span className="absolute left-4 top-4 rounded-xs bg-black/50 px-2.5 py-1 font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-gold backdrop-blur-[2px]">
          {project.year}
        </span>

        {typeof index === "number" && (
          <span
            aria-hidden="true"
            className="absolute right-4 top-3 font-display text-[26px] font-bold leading-none tabular-nums text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.28)] transition-colors duration-500 group-hover:[-webkit-text-stroke:1px_var(--color-gold)]"
          >
            {String(index).padStart(2, "0")}
          </span>
        )}

        {project.video && (
          <span
            aria-hidden="true"
            className="absolute right-4 top-14 flex size-10 items-center justify-center rounded-full border border-gold/50 bg-black/45 text-gold backdrop-blur-[2px] transition duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-bg"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 size-4">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        )}

        <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-2.5 p-5">
          <span className="flex items-center gap-2.5 font-sans text-[11px] uppercase tracking-[0.12em] text-gold">
            {project.city}
            {project.eventType && (
              <>
                <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
                <span className="text-text-muted">{project.eventType}</span>
              </>
            )}
          </span>

          <h3 className="font-display text-[16px] font-bold uppercase leading-[1.18] tracking-[0.01em] transition-colors duration-300 group-hover:text-gold md:text-[18px]">
            {project.title}
          </h3>

          {/* Collapsed until hover, so the resting card stays a clean poster. */}
          <span className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100">
            <span className="overflow-hidden">
              <span className="flex items-center gap-2 pt-1 font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-text">
                View case study
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="size-3.5 text-gold"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </span>
          </span>
        </figcaption>
      </figure>
    </Link>
  );
}
