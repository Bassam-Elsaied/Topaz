import Image from "@/components/ui/image-load";
import Link from "next/link";
import type { ProjectCardData } from "@/data/cards";

/**
 * The lead card of the visible set, blown up to a cinematic full-width panel.
 * It gives the grid a focal point and a size rhythm rather than opening on a
 * flat wall of equal tiles — the Dick Clark "hero moment, then the index" beat.
 *
 * The whole panel is one link, so the CTA is a visual cue rather than a nested
 * anchor. The still is the page's largest paint here, so it is `priority`.
 */
export function FeaturedProject({
  project,
  eyebrow,
}: {
  project: ProjectCardData;
  eyebrow: string;
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 transition-colors duration-500 hover:border-gold/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      <div className="relative min-h-[68svh] w-full lg:min-h-[76svh]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1440px"
          className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-black/92 via-black/45 to-black/20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-black/80 via-transparent to-transparent"
        />

        {/* Gold frame that tightens on hover, echoing the smaller tiles. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-4 rounded-xl border border-gold/0 transition-all duration-500 group-hover:inset-6 group-hover:border-gold/40"
        />

        <span className="absolute right-5 top-5 rounded-xs bg-black/45 px-3 py-1.5 font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-gold backdrop-blur-[2px]">
          {project.year}
        </span>

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-7 md:p-12 lg:max-w-[68%] lg:p-16">
          <span className="flex items-center gap-3 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-gold">
            <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold" />
            {eyebrow}
          </span>

          <h3 className="max-w-[18ch] font-display text-[clamp(30px,5vw,64px)] font-bold uppercase leading-[0.95] tracking-[-0.02em] transition-colors duration-300 group-hover:text-gold">
            {project.title}
          </h3>

          <div className="flex flex-wrap items-center gap-2.5">
            {[project.city, project.eventType]
              .filter(Boolean)
              .map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/20 px-3.5 py-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-text-accent"
                >
                  {chip}
                </span>
              ))}
          </div>

          <p className="max-w-[58ch] font-sans text-[14px] leading-[1.75] text-text-muted md:text-[16px]">
            {project.summary}
          </p>

          <span className="mt-1 flex items-center gap-3 font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-text">
            <span className="flex items-center gap-2.5 rounded-xs bg-gold px-6 py-3 text-bg transition-colors duration-300 group-hover:bg-gold-deep">
              {project.video ? "Watch the story" : "View case study"}
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
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
