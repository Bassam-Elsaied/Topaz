"use client";

import Image from "@/components/ui/image-load";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { onScrollFrame, ScrollOrder } from "@/lib/scroll-ticker";

/** Peak vertical drift, in pixels, of each photo in the stack. */
const DRIFT = 34;

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);

  // The two photos drift in opposite directions as the section crosses the
  // viewport, which separates them in depth without a second scroll listener:
  // geometry is cached on resize so the frame loop only writes transforms.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const desktop = window.matchMedia("(min-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let top = 0;
    let span = 1;
    let enabled = false;
    let lastScroll = -1;
    let stop: (() => void) | null = null;

    const reset = () => {
      if (backRef.current) backRef.current.style.transform = "";
      if (frontRef.current) frontRef.current.style.transform = "";
    };

    const measure = () => {
      enabled = desktop.matches && !reduced.matches;
      if (!enabled) {
        reset();
        return;
      }
      lastScroll = -1;
      const rect = section.getBoundingClientRect();
      top = rect.top + window.scrollY;
      span = rect.height + window.innerHeight;
      update(window.scrollY);
    };

    const update = (scroll: number) => {
      if (!enabled) return;
      if (scroll === lastScroll) return;
      lastScroll = scroll;
      // -1 as the section enters from below, +1 as it leaves past the top.
      const progress = ((scroll + window.innerHeight - top) / span) * 2 - 1;
      const offset = Math.max(-1, Math.min(1, progress)) * DRIFT;
      if (backRef.current) {
        backRef.current.style.transform = `translate3d(0, ${(-offset).toFixed(1)}px, 0)`;
      }
      if (frontRef.current) {
        frontRef.current.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      }
    };

    const visibility = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !stop) {
          measure();
          stop = onScrollFrame(update, ScrollOrder.Effect);
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
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full border-t border-white/5 py-20 md:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-125 w-250 -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse farthest-side at center, rgba(224,194,110,0.07) 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-(--container-max) grid-cols-1 items-center gap-14 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionLabel>Who we are</SectionLabel>

          <h2
            id="about-heading"
            className="mt-6 max-w-[16ch] font-display text-[clamp(30px,4.4vw,56px)] font-bold uppercase leading-[0.95] tracking-[-0.015em] reveal"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            A 360° event company under{" "}
            <span className="font-script text-gold italic normal-case">
              one roof
            </span>
          </h2>

          <div
            className="mt-7 max-w-[54ch] space-y-5 font-sans text-[15px] leading-[1.75] text-text-muted md:text-[16px] reveal"
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            <p>
              Topaz handles ideation, strategy, planning and execution as one
              piece of work. Ten years and four hundred events in, we deliver
              for government departments, universities and brands across
              Sharjah, Dubai and Abu Dhabi.
            </p>
            <p>
              Our creative team and our technical crew sit in the same building,
              and the AV inventory is ours. So the room you were shown in the
              pitch is the room your guests walk into — whether that is a
              conference, an award ceremony, a festival or an exhibition build.
            </p>
          </div>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 reveal"
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          >
            <Link
              href="/event-management"
              className="rounded-xs bg-gold px-7 py-3.5 font-sans text-[13px] font-bold uppercase leading-none tracking-[0.06em] text-bg transition-colors duration-300 hover:bg-gold-deep"
            >
              Explore our services
            </Link>
            <Link
              href="#contact"
              className="rounded-xs border border-white/20 px-7 py-3.5 font-sans text-[13px] font-semibold uppercase leading-none tracking-[0.06em] text-text transition-colors duration-300 hover:border-gold/50 hover:text-gold"
            >
              Talk to our team
            </Link>
          </div>
        </Reveal>

        <Reveal className="relative">
          <div className="relative mx-auto w-full max-w-140 lg:ml-auto lg:mr-0">
            {/* Offset outline that the photography sits inside of. */}
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 bottom-8 left-8 rounded-lg border border-gold/25 md:-right-6 md:-top-6"
            />

            <div
              ref={backRef}
              className="reveal relative z-10 overflow-hidden rounded-lg md:will-change-transform"
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <Image
                src="/projects/district-11-launch.webp"
                alt="Guests at the District 11 property launch staged by Topaz"
                width={900}
                height={600}
                sizes="(max-width: 1024px) 90vw, 520px"
                className="h-auto w-full object-cover"
              />
            </div>

            <div
              ref={frontRef}
              className="reveal relative z-20 -mt-16 ml-auto w-[58%] overflow-hidden rounded-lg border border-white/10 md:-mt-24 md:will-change-transform"
              style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
            >
              <Image
                src="/projects/binghatti-mercedes.webp"
                alt="Drone show above the Binghatti and Mercedes launch"
                width={900}
                height={600}
                sizes="(max-width: 1024px) 50vw, 300px"
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Badge anchored to the stack rather than the grid cell, so it
                stays put while the photos drift. */}
            <div
              className="reveal absolute -left-2 bottom-10 z-30 rounded-xs border border-gold/30 bg-bg/85 px-5 py-4 backdrop-blur-sm md:left-0"
              style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
            >
              <p className="font-display text-[28px] font-bold leading-none text-gold md:text-[34px]">
                10<span className="text-[18px] md:text-[22px]">+</span>
              </p>
              <p className="mt-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted md:text-[11px]">
                Years in the UAE
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
