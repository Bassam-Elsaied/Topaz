"use client";

import { useEffect, useRef, useState } from "react";
import { FeaturedProject } from "@/components/portfolio/featured-project";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { ProjectCardData } from "@/data/cards";

type Filter = number | "all";

/** Tiles revealed per scroll step (on top of the always-shown lead + strip). */
const GRID_BATCH = 9;

/**
 * The full portfolio, as an editorial index: a cinematic lead, a two-up
 * highlights strip, then a numbered tile grid — filtered by year.
 *
 * Every project is in the markup on first paint and the filter only re-slices
 * what is already there, so the page a crawler reads is the page with all of
 * the work on it, switching years costs no request, and the entrance animation
 * fires once rather than replaying on each filter.
 *
 * Infinite scroll is a display cap, not a fetch: the tiles past the cap are
 * still in the HTML (their links stay crawlable) but hidden until a sentinel
 * near the foot of the grid scrolls into range and lifts the cap a batch at a
 * time. Hidden tiles are `display:none`, so their lazy stills never download
 * until they are revealed — the scroll pays for the work, not the first paint.
 *
 * The projects arrive as props rather than an import: this is a client
 * component, so importing `@/data/projects` would ship every case study's
 * copy and gallery to the browser to paint tiles that only need a still and
 * a title. See `@/data/cards`.
 */
export function ProjectGrid({
  projects,
  years,
}: {
  projects: ProjectCardData[];
  /** Descending, for the filter bar. */
  years: number[];
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const [shown, setShown] = useState(GRID_BATCH);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const visible =
    filter === "all"
      ? projects
      : projects.filter((project) => project.year === filter);

  const filters: { label: string; value: Filter; count: number }[] = [
    { label: "All events", value: "all", count: projects.length },
    ...years.map((year) => ({
      label: String(year),
      value: year as Filter,
      count: projects.filter((project) => project.year === year).length,
    })),
  ];

  const [featured, ...others] = visible;
  const highlights = others.slice(0, 2);
  const grid = others.slice(2);
  const featuredEyebrow =
    filter === "all" ? "Latest project" : `Latest in ${filter}`;

  const hasMore = shown < grid.length;

  // A new filter is a new list, so it drops back to the first batch. Done here
  // rather than in an effect on `filter` so the two land in one render.
  const choose = (value: Filter) => {
    setFilter(value);
    setShown(GRID_BATCH);
  };

  // Reveal a batch whenever the sentinel is in range. The observer is torn
  // down and rebuilt each time the cap moves, so if the sentinel is still on
  // screen after a batch (a short tail, or a fast scroll) it fires straight
  // away and keeps filling until the sentinel finally clears the viewport.
  useEffect(() => {
    if (!hasMore) return;
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown((current) => Math.min(current + GRID_BATCH, grid.length));
        }
      },
      { rootMargin: "0px 0px 500px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, shown, grid.length]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative w-full border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        {/* Header: the archive framed by its own size, Dick Clark bold. */}
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
            <div className="reveal max-w-[34ch]">
              <SectionLabel>The archive</SectionLabel>
              <h2
                id="projects-heading"
                className="mt-5 font-display text-[clamp(30px,4.4vw,58px)] font-bold uppercase leading-[0.95] tracking-[-0.02em]"
              >
                Selected <span className="text-gold">work</span>
              </h2>
            </div>

            <span
              aria-hidden="true"
              className="reveal font-display text-[clamp(64px,10vw,150px)] font-bold leading-[0.8] tabular-nums text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.16)]"
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {projects.length}
            </span>
          </div>
        </Reveal>

        {/* Filter rail. */}
        <div className="mt-12 flex flex-col gap-5 border-y border-white/10 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2.5">
            {filters.map((option) => {
              const active = option.value === filter;
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => choose(option.value)}
                  aria-pressed={active}
                  className={`group flex cursor-pointer items-center gap-2 rounded-full border px-5 py-2.5 font-sans text-[12px] font-bold uppercase leading-none tracking-[0.1em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:text-[13px] ${
                    active
                      ? "border-gold bg-gold text-bg"
                      : "border-white/15 text-text-muted hover:border-gold/50 hover:text-gold"
                  }`}
                >
                  {option.label}
                  <span
                    className={`text-[10px] tabular-nums ${
                      active ? "text-bg/70" : "text-text-muted/60"
                    }`}
                  >
                    {option.count}
                  </span>
                </button>
              );
            })}
          </div>

          <p
            aria-live="polite"
            className="font-sans text-[12px] uppercase tracking-[0.14em] text-text-muted"
          >
            Showing {visible.length} {visible.length === 1 ? "event" : "events"}
            {filter !== "all" && ` — ${filter}`}
          </p>
        </div>

        {/* The work. A single Reveal so the strip and grid stagger together and
            filtering never replays the entrance. */}
        <Reveal>
          {featured && (
            <div className="reveal mt-10">
              <FeaturedProject project={featured} eyebrow={featuredEyebrow} />
            </div>
          )}

          {highlights.length > 0 && (
            <ul className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
              {highlights.map((project, i) => (
                <li
                  key={project.slug}
                  className="reveal"
                  style={
                    { "--reveal-delay": `${i * 90}ms` } as React.CSSProperties
                  }
                >
                  <ProjectCard
                    project={project}
                    index={i + 1}
                    aspect="aspect-16/10"
                    sizes="(max-width: 768px) 92vw, (max-width: 1024px) 92vw, 700px"
                  />
                </li>
              ))}
            </ul>
          )}

          {grid.length > 0 && (
            <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {grid.map((project, i) => (
                <li
                  key={project.slug}
                  hidden={i >= shown}
                  className="reveal"
                  style={
                    {
                      "--reveal-delay": `${Math.min(i, 5) * 70}ms`,
                    } as React.CSSProperties
                  }
                >
                  <ProjectCard project={project} index={i + 3} />
                </li>
              ))}
            </ul>
          )}
        </Reveal>

        {/* Foot of the grid: the trip-wire that lifts the cap, plus its spinner.
            Both leave once every tile is on the page. */}
        {hasMore && (
          <div
            ref={sentinelRef}
            className="mt-12 flex flex-col items-center gap-4"
            aria-hidden="true"
          >
            <span className="size-6 animate-spin rounded-full border-2 border-white/15 border-t-gold" />
            <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-text-muted">
              Loading more work
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
