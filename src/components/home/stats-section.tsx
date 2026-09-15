"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { STATS, type Stat } from "@/data/services";

const DURATION = 1600;
const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

const format = (value: number, pad?: boolean) =>
  pad ? String(value).padStart(2, "0") : String(value);

/**
 * Counts up the first time it is seen. The final figure is what renders on the
 * server, so the number is in the markup for crawlers and for anyone who never
 * runs the animation.
 */
function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        let lastVal = -1;
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION);
          const currentVal = Math.round(easeOutCubic(t) * stat.value);
          if (currentVal !== lastVal) {
            lastVal = currentVal;
            el.textContent = format(currentVal, stat.pad);
          }
          if (t < 1) frame = window.requestAnimationFrame(step);
        };
        frame = window.requestAnimationFrame(step);
      },
      { rootMargin: "0px 0px -15%" },
    );

    observer.observe(el);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [stat.value, stat.pad]);

  return <span ref={ref}>{format(stat.value, stat.pad)}</span>;
}

export function StatsSection() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="relative w-full border-t border-white/5 py-20 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-100 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at center, rgba(224,194,110,0.07) 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col gap-8 border-b border-white/10 pb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>By the numbers</SectionLabel>
              <h2
                id="stats-heading"
                className="reveal mt-6 max-w-[22ch] font-display text-[clamp(28px,3.6vw,46px)] font-bold uppercase leading-[0.98] tracking-[-0.015em]"
                style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              >
                Complete AV production for{" "}
                <span className="text-gold">large-scale events</span>
              </h2>
            </div>
            <Link
              href="#contact"
              className="reveal shrink-0 self-start rounded-xs border border-gold/40 px-7 py-3.5 font-sans text-[13px] font-bold uppercase leading-none tracking-[0.06em] text-gold transition-colors duration-300 hover:bg-gold hover:text-bg md:self-auto"
              style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            >
              Request a proposal
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-12 pt-14 lg:grid-cols-4 lg:gap-x-10">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className="reveal relative lg:not-first:border-l lg:not-first:border-white/10 lg:not-first:pl-10"
                style={
                  { "--reveal-delay": `${index * 90}ms` } as React.CSSProperties
                }
              >
                <dd className="font-display text-[clamp(44px,6vw,76px)] font-bold leading-[0.85] tabular-nums text-gold">
                  <Counter stat={stat} />
                  {stat.suffix && (
                    <span className="align-top text-[0.45em] text-gold-deep">
                      {stat.suffix}
                    </span>
                  )}
                </dd>
                <dt className="mt-4 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-text-muted md:text-[12px]">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
