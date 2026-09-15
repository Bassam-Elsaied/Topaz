"use client";

import Image from "@/components/ui/image-load";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { EVENT_SERVICES } from "@/data/services";

const PREVIEW_W = 340;
const PREVIEW_H = 230;
/** How much of the gap to the cursor is closed per frame, so the card trails. */
const EASE = 0.14;

export function ServicesSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);

  // The preview only exists for pointer users on a wide screen; everywhere else
  // each row shows its own thumbnail and none of this runs.
  useEffect(() => {
    const list = listRef.current;
    const preview = previewRef.current;
    if (!list || !preview) return;

    // Checked per move rather than once, so a window resized up into desktop
    // width does not leave the preview parked in the top-left corner.
    const fine = window.matchMedia("(hover: hover) and (min-width: 1024px)");

    let pointerX = 0;
    let pointerY = 0;
    let x = 0;
    let y = 0;
    let placed = false;
    let frame = 0;
    let idle = 0;
    let rect: DOMRect | null = null;

    const updateRect = () => {
      if (placed) rect = list.getBoundingClientRect();
    };

    const onEnter = () => {
      if (fine.matches) rect = list.getBoundingClientRect();
    };

    const onMove = (event: PointerEvent) => {
      if (!fine.matches) return;
      if (!rect) rect = list.getBoundingClientRect();

      pointerX = event.clientX - rect.left - PREVIEW_W / 2;
      pointerY = event.clientY - rect.top - PREVIEW_H / 2;

      if (!placed) {
        // First move after entering: drop the card on the cursor instead of
        // flying it in from the last row that was hovered.
        placed = true;
        x = pointerX;
        y = pointerY;
      }
      if (!frame) frame = window.requestAnimationFrame(tick);
    };

    const tick = () => {
      x += (pointerX - x) * EASE;
      y += (pointerY - y) * EASE;
      preview.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;

      // Park the loop once the card has caught up and the cursor has settled.
      const settled = Math.abs(pointerX - x) < 0.3 && Math.abs(pointerY - y) < 0.3;
      idle = settled ? idle + 1 : 0;
      frame = idle > 2 ? 0 : window.requestAnimationFrame(tick);
    };

    const onLeave = () => {
      placed = false;
      rect = null;
    };

    list.addEventListener("pointerenter", onEnter);
    list.addEventListener("pointermove", onMove);
    list.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", updateRect, { passive: true });
    window.addEventListener("resize", updateRect);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      list.removeEventListener("pointerenter", onEnter);
      list.removeEventListener("pointermove", onMove);
      list.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", updateRect);
      window.removeEventListener("resize", updateRect);
    };
  }, []);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <SectionLabel>What we do</SectionLabel>
              <h2
                id="services-heading"
                className="mt-6 font-display text-[clamp(30px,4vw,52px)] font-bold uppercase leading-[0.95] tracking-[-0.015em] reveal"
                style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              >
                Event services
                <span className="block text-gold">for every scale</span>
              </h2>
              <p
                className="mt-6 max-w-[42ch] font-sans text-[15px] leading-[1.75] text-text-muted reveal"
                style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
              >
                Six things we are asked for most across Dubai, Sharjah and Abu
                Dhabi. Each one comes with the same planning team, the same
                crew and the same kit.
              </p>
              <Link
                href="/event-management"
                className="reveal group mt-8 inline-flex items-center gap-3 font-sans text-[13px] font-bold uppercase tracking-[0.06em] text-gold"
                style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
              >
                View all services
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div
              ref={listRef}
              className="relative"
              onPointerEnter={() => setHovering(true)}
              onPointerLeave={() => setHovering(false)}
            >
              {/* Trails the cursor across the whole list; rows only change
                  which still is on top. */}
              <div
                ref={previewRef}
                aria-hidden="true"
                className={`pointer-events-none absolute left-0 top-0 z-20 hidden overflow-hidden rounded-lg border border-white/10 transition-opacity duration-300 will-change-transform lg:block ${
                  hovering ? "opacity-100" : "opacity-0"
                }`}
                style={{ width: PREVIEW_W, height: PREVIEW_H }}
              >
                {EVENT_SERVICES.map((service, index) => (
                  <Image
                    key={service.slug}
                    src={service.image}
                    alt=""
                    fill
                    sizes="340px"
                    className="object-cover"
                    // Crossfade lives on the fill wrapper so inactive layers
                    // stay hidden independently of each still's own fade-in.
                    wrapperClassName={`transition-opacity duration-500 ${
                      index === active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(7,7,7,0.55), rgba(7,7,7,0))",
                  }}
                />
              </div>

              <ul>
                {EVENT_SERVICES.map((service, index) => (
                  <li
                    key={service.slug}
                    className="reveal border-b border-white/10 first:border-t"
                    style={
                      {
                        "--reveal-delay": `${index * 70}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <Link
                      href={service.href}
                      onPointerEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      className="group relative flex items-start gap-5 py-7 outline-none md:gap-8 md:py-9"
                    >
                      {/* Gold wash that wipes in from the left on hover. */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 -inset-x-4 origin-left scale-x-0 bg-linear-to-r from-gold/10 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 md:-inset-x-6"
                      />

                      <span className="relative mt-1 shrink-0 font-sans text-[11px] font-bold tabular-nums tracking-[0.12em] text-text-muted transition-colors duration-300 group-hover:text-gold md:text-[12px]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="relative min-w-0 flex-1">
                        <span className="block font-display text-[22px] font-bold uppercase leading-[1.05] tracking-[-0.01em] transition-colors duration-300 group-hover:text-gold md:text-[30px]">
                          {service.title}
                        </span>
                        <span className="mt-2.5 block max-w-[46ch] font-sans text-[14px] leading-[1.7] text-text-muted md:text-[15px]">
                          {service.summary}
                        </span>
                      </span>

                      {/* Stands in for the floating preview on touch screens. */}
                      <span className="relative block size-20 shrink-0 overflow-hidden rounded-xs lg:hidden">
                        <Image
                          src={service.image}
                          alt=""
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </span>

                      <span
                        aria-hidden="true"
                        className="relative mt-1 hidden shrink-0 text-[18px] text-text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold lg:block"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
