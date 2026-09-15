import Image from "@/components/ui/image-load";
import Link from "next/link";
import { InView } from "@/components/ui/in-view";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import {
  CAPABILITIES,
  PRODUCTION_SERVICES,
  type ProductionService,
} from "@/data/services";

/**
 * Line-art glyphs for the tiles that have no photography behind them. Drawn at
 * 48×48 on a single stroke weight so they read as one set.
 */
function ServiceIcon({ icon }: { icon: ProductionService["icon"] }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-11 text-gold"
    >
      {icon === "av" && (
        <>
          <rect x="4" y="8" width="40" height="25" rx="1.5" />
          <path d="M18 39h12M24 33v6" />
          <path d="M12 26V15M18 26v-6M24 26v-9M30 26v-4M36 26v-8" />
        </>
      )}
      {icon === "interactive" && (
        <>
          <circle cx="24" cy="24" r="5" />
          <path d="M24 5v7M24 36v7M5 24h7M36 24h7" />
          <path d="M10.6 10.6l5 5M32.4 32.4l5 5M37.4 10.6l-5 5M15.6 32.4l-5 5" />
          <circle cx="24" cy="24" r="15" strokeDasharray="3 5" />
        </>
      )}
      {icon === "projection" && (
        <>
          <rect x="4" y="20" width="13" height="9" rx="1.5" />
          <path d="M17 21.5L44 8v33L17 27.5z" />
          <path d="M31 14.5v22" />
        </>
      )}
      {icon === "dome" && (
        <>
          <path d="M4 34a20 20 0 0 1 40 0" />
          <path d="M4 34h40" />
          <path d="M24 14v20M14.5 16.4C12 21.4 11 27.4 11 34M33.5 16.4C36 21.4 37 27.4 37 34" />
        </>
      )}
    </svg>
  );
}

const [AV, INTERACTIVE, PROJECTION, DOME] = PRODUCTION_SERVICES;

const TILE =
  "group relative flex flex-col justify-end overflow-hidden rounded-lg border border-white/10 p-7 transition-colors duration-500 hover:border-gold/40 md:p-8";

function TileTitle({ service }: { service: ProductionService }) {
  return (
    <>
      <h3 className="font-display text-[20px] font-bold uppercase leading-[1.05] tracking-[-0.01em] transition-colors duration-300 group-hover:text-gold md:text-[24px]">
        {service.title}
      </h3>
      <p className="mt-3 max-w-[38ch] font-sans text-[14px] leading-[1.7] text-text-muted">
        {service.summary}
      </p>
      <span className="mt-5 inline-flex items-center gap-2.5 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-gold">
        Learn more
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </>
  );
}

export function ProductionSection() {
  return (
    <section
      id="production"
      aria-labelledby="production-heading"
      className="relative w-full border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Event production</SectionLabel>
              <h2
                id="production-heading"
                className="reveal mt-6 max-w-[20ch] font-display text-[clamp(30px,4vw,52px)] font-bold uppercase leading-[0.95] tracking-[-0.015em]"
                style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              >
                The kit is <span className="text-gold">ours</span>, so is the
                crew
              </h2>
            </div>
            <p
              className="reveal max-w-[40ch] font-sans text-[15px] leading-[1.75] text-text-muted"
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            >
              Screens, sound, lighting, projection and interactive builds come
              out of our own warehouses and are run by our own technicians —
              nothing is subcontracted on show day.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(0,268px)]">
            {/* Lead tile: the only photograph at this size in the grid, so it
                carries the section on its own. */}
            <Link
              href={AV.href}
              className={`${TILE} reveal min-h-90 sm:col-span-2 lg:row-span-2`}
            >
              <Image
                src="/projects/district-11-launch.webp"
                alt=""
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 90vw, 50vw"
                className="scale-105 object-cover transition-transform duration-700 group-hover:scale-100"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/15"
              />
              {/* Tiles backed by footage carry no glyph — the picture is the
                  icon, and a line drawing over it only competes. */}
              <div className="relative">
                <TileTitle service={AV} />
              </div>
            </Link>

            <Link
              href={INTERACTIVE.href}
              className={`${TILE} reveal min-h-64 bg-surface sm:col-span-2`}
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(224,194,110,0.16) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <ServiceIcon icon={INTERACTIVE.icon} />
                <div className="mt-6">
                  <TileTitle service={INTERACTIVE} />
                </div>
              </div>
            </Link>

            <Link
              href={PROJECTION.href}
              className={`${TILE} reveal min-h-64`}
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            >
              <Image
                src="/projects/binghatti-mercedes.webp"
                alt=""
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-black/95 via-black/75 to-black/40"
              />
              <div className="relative">
                <TileTitle service={PROJECTION} />
              </div>
            </Link>

            <Link
              href={DOME.href}
              className={`${TILE} reveal min-h-64 bg-surface`}
              style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            >
              <div className="relative">
                <ServiceIcon icon={DOME.icon} />
                <div className="mt-6">
                  <TileTitle service={DOME} />
                </div>
              </div>
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Inventory strip. Two rows travelling opposite ways read as one piece
          of machinery rather than a single stray line of text. */}
      <InView className="ticker mt-16 overflow-x-clip border-y border-white/10 py-6 md:mt-20">
        <h3 className="sr-only">In-house inventory</h3>
        <ul className="sr-only">
          {CAPABILITIES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {[false, true].map((reverse) => (
          <div
            key={String(reverse)}
            aria-hidden="true"
            className={`ticker-track flex w-max items-center ${
              reverse ? "ticker-track--reverse mt-4" : ""
            }`}
            style={
              { "--ticker-duration": reverse ? "56s" : "44s" } as React.CSSProperties
            }
          >
            {[...CAPABILITIES, ...CAPABILITIES].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="flex shrink-0 items-center gap-8 pr-8 font-display text-[15px] font-bold uppercase tracking-[0.04em] text-text-accent md:text-[19px]"
              >
                {item}
                <span
                  aria-hidden="true"
                  className="size-1.5 rotate-45 bg-gold/60"
                />
              </span>
            ))}
          </div>
        ))}
      </InView>
    </section>
  );
}
