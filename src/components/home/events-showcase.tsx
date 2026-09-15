"use client";

import Image from "@/components/ui/image-load";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { VideoLightbox } from "@/components/ui/video-lightbox";
import type { ReelCardData } from "@/data/cards";
import { FLIP_DESKTOP_MQ, FLIP_REVEAL_VH } from "@/lib/flip";
import { onScrollFrame, ScrollOrder } from "@/lib/scroll-ticker";

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

/**
 * Fraction of the reveal after which the track starts travelling sideways.
 *
 * The card group slides in on an ease-out, so its final stretch barely moves;
 * waiting for it to finish before travelling leaves a beat where scrolling
 * does nothing. Overlapping the two keeps it one continuous movement.
 */
const TRAVEL_START = 0.72;

/** A card's contents, apart from the box they sit in. */
function CardFace({ project }: { project: ReelCardData }) {
  return (
    <>
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 1024px) 86vw, 900px"
        className="object-cover"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent"
      />

      {project.video ? <VideoLightbox video={project.video} /> : null}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-6 md:p-10">
        <span className="mb-2 inline-block font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-gold md:text-[14px]">
          Previous event
        </span>
        <h3 className="font-display text-[22px] font-bold uppercase leading-[0.95] text-text md:text-[40px]">
          {project.title}
        </h3>
      </div>
    </>
  );
}

function Card({ project, index }: { project: ReelCardData; index: number }) {
  return (
    <div
      data-stack-item=""
      style={{ "--stack-index": index } as React.CSSProperties}
      className="relative aspect-4/3 w-[min(86vw,900px)] shrink-0 overflow-hidden rounded-3xl bg-surface md:rounded-[40px]"
    >
      <CardFace project={project} />
    </div>
  );
}

/**
 * End cap on the track. Narrower than the project cards and carrying no
 * footage, so reaching it reads as the end of the reel rather than one more
 * event — its 3:4 ratio is sized to stand exactly as tall as the 4:3 cards.
 */
function MoreCard({ index }: { index: number }) {
  return (
    <Link
      href="/portfolio"
      data-stack-item=""
      style={{ "--stack-index": index } as React.CSSProperties}
      className="group relative flex aspect-4/3 w-[min(86vw,900px)] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-gold/25 bg-surface p-7 transition-colors duration-500 hover:border-gold/60 md:rounded-[40px] md:p-12 lg:aspect-3/4 lg:w-[min(52vw,506px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-96 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at center, rgba(224,194,110,0.18) 0%, transparent 70%)",
        }}
      />

      <span className="relative flex items-center gap-3 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold md:text-[13px]">
        <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold/70" />
        More of our work
      </span>

      <div className="relative">
        <h3 className="font-display text-[26px] font-bold uppercase leading-[0.95] tracking-[-0.015em] md:text-[40px]">
          See the full <span className="text-gold">portfolio</span>
        </h3>
        <p className="mt-4 max-w-[30ch] font-sans text-[14px] leading-[1.7] text-text-muted md:text-[15px]">
          Four hundred events across the UAE — corporate stages, award nights,
          festivals and launches.
        </p>

        <span className="mt-8 flex items-center gap-4">
          <span
            aria-hidden="true"
            className="flex size-13 shrink-0 items-center justify-center rounded-full border border-gold/40 text-[18px] text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-bg"
          >
            →
          </span>
          <span className="font-sans text-[13px] font-bold uppercase tracking-[0.06em] text-text transition-colors duration-300 group-hover:text-gold">
            See more projects
          </span>
        </span>
      </div>
    </Link>
  );
}

/**
 * The projects arrive as props rather than an import: this is a client
 * component, so importing `@/data/projects` would ship the whole portfolio to
 * the browser for six stills. See `@/data/cards`.
 */
export function EventsShowcase({
  lead,
  projects,
}: {
  lead: ReelCardData;
  projects: ReelCardData[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const restRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const rest = restRef.current;
    if (!section || !track) return;

    const desktop = window.matchMedia(FLIP_DESKTOP_MQ);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let distance = 0;
    let revealPx = 0;
    let sectionTop = 0;
    let enabled = false;
    let lastScroll = -1;
    let stop: (() => void) | null = null;

    const reset = () => {
      section.style.height = "";
      track.style.transform = "";
      if (rest) rest.style.transform = "";
    };

    // Everything the frame loop needs is cached here so that scrolling only
    // ever writes transforms — no layout reads in the hot path.
    const measure = () => {
      enabled = desktop.matches && !reduced.matches;
      if (!enabled) {
        reset();
        return;
      }
      lastScroll = -1;
      // The cards are parked a viewport to the right until the flip lands, and
      // a transform still counts towards its parent's scrollable overflow — so
      // the park has to be cleared before measuring or the track is handed a
      // travel distance longer than its own content and overshoots the end.
      // `update` below puts it back in the same frame.
      if (rest) rest.style.transform = "";
      distance = Math.max(0, track.scrollWidth - window.innerWidth);
      revealPx = window.innerHeight * FLIP_REVEAL_VH;
      // Hold while the lead video flips in, then travel the track one-to-one.
      section.style.height = `${Math.round(window.innerHeight + revealPx * TRAVEL_START + distance)}px`;
      sectionTop = section.getBoundingClientRect().top + window.scrollY;
      update(window.scrollY);
    };

    const update = (scroll: number) => {
      if (!enabled) return;
      if (scroll === lastScroll) return;
      lastScroll = scroll;

      const scrolled = scroll - sectionTop;
      const reveal = easeOutCubic(clamp(scrolled / revealPx));

      // The project cards wait off to the right while the lead video flies in,
      // then settle into the track as the flip lands.
      if (rest) {
        rest.style.transform = `translate3d(${((1 - reveal) * 100).toFixed(2)}vw, 0, 0)`;
      }

      const slide = clamp((scrolled - revealPx * TRAVEL_START) / distance);
      track.style.transform = `translate3d(${(-slide * distance).toFixed(2)}px, 0, 0)`;
    };

    const visibility = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !stop) {
          measure();
          stop = onScrollFrame(update, ScrollOrder.Layout);
        } else if (!entry.isIntersecting && stop) {
          stop();
          stop = null;
        }
      },
      { rootMargin: "10%" },
    );

    measure();
    visibility.observe(section);
    window.addEventListener("resize", measure);
    desktop.addEventListener("change", measure);
    reduced.addEventListener("change", measure);

    return () => {
      stop?.();
      visibility.disconnect();
      window.removeEventListener("resize", measure);
      desktop.removeEventListener("change", measure);
      reduced.removeEventListener("change", measure);
      reset();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="previous-events"
      aria-labelledby="previous-events-heading"
      className="relative w-full"
    >
      <h2 id="previous-events-heading" className="sr-only">
        Previous Topaz events
      </h2>

      {/* Overflow only below `lg`, where the stacked cards have to be able to
          stick to the viewport — an overflow container of their own would pin
          them to a box that never scrolls. */}
      <div className="flex min-h-screen items-center overflow-visible lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
        {/* The leading gutter centres the 900px slot the flip lands in, so it
            has to stay half a viewport wide. The trailing one only decides
            where travel stops — matching it would park the last card in half a
            screen of nothing and charge the reader scroll for it. */}
        <div
          ref={trackRef}
          data-card-stack=""
          className="flex flex-col items-center gap-6 px-6 py-16 lg:flex-row lg:gap-16 lg:py-0 lg:pl-[max(1.5rem,calc(50vw-450px))] lg:pr-16 lg:will-change-transform"
        >
          {/* Empty box the flying lead video lands on and then tracks. */}
          <div
            data-flip-target=""
            data-stack-item=""
            style={{ "--stack-index": 0 } as React.CSSProperties}
            className="relative aspect-4/3 w-[min(86vw,900px)] shrink-0"
          >
            {/* The lead event is a card of its own below `lg`. The flying card
                is fixed, and a fixed element can neither stick to the stack nor
                let the cards after it paint over it — so it is the one card the
                stack has to own rather than borrow. It hands the box back at
                `lg`, where the flying card takes over again. */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl bg-surface lg:hidden">
              <CardFace project={lead} />
            </div>
          </div>
          <div
            ref={restRef}
            className="flex flex-col items-center gap-6 lg:flex-row lg:gap-16 lg:will-change-transform"
          >
            {projects.map((project, index) => (
              <Card key={project.slug} project={project} index={index + 1} />
            ))}
            {/* `measure` reads the track's scrollWidth, so the pinned section
                lengthens itself to cover this card without further wiring. */}
            <MoreCard index={projects.length + 1} />
          </div>
        </div>
      </div>
    </section>
  );
}
