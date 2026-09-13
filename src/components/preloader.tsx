"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * First-load curtain. It is rendered in the server HTML so it covers the page
 * from the very first paint, then steps through a set of show-call cues while
 * the document finishes loading and finally splits apart like stage drapes.
 *
 * Progress eases toward STALL_AT until `load` has fired and MIN_VISIBLE has
 * elapsed, so the bar keeps moving on a slow connection and still reads as a
 * deliberate beat on a fast one.
 */

const CUES = [
  "Drafting the run sheet",
  "Rigging the truss",
  "Focusing the lights",
  "Ringing out the sound",
  "Curtain up",
];

/** How far the bar creeps while the document is still loading. */
const STALL_AT = 88;
/** Floor on how long the curtain stays up, so it never flickers. */
const MIN_VISIBLE = 1600;
/** Must match the panel transition in globals.css. */
const CURTAIN_MS = 1000;

/**
 * The cues before the last one are spread across the stalled range, since that
 * is where the bar spends its time; the final call is held back for the
 * hand-off so it lands with the drapes rather than partway up the bar.
 */
function cueFor(value: number) {
  const upfront = CUES.length - 1;
  if (value >= 97) return upfront;
  return Math.min(upfront - 1, Math.floor((value / STALL_AT) * upfront));
}

export function Preloader() {
  const [cue, setCue] = useState(0);
  const [open, setOpen] = useState(false);
  const [gone, setGone] = useState(false);

  const fillRef = useRef<HTMLSpanElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const { body } = document;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    // Lenis is already live behind the curtain; clamping the document is what
    // actually stops a wheel gesture from scrolling the hidden page.
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const started = performance.now();
    let loaded = document.readyState === "complete";
    let value = 0;
    let frame = 0;
    let openTimer = 0;
    let doneTimer = 0;

    const onLoad = () => {
      loaded = true;
    };
    if (!loaded) window.addEventListener("load", onLoad, { once: true });

    const release = () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };

    const step = () => {
      const held = performance.now() - started < MIN_VISIBLE;
      const target = loaded && !held ? 100 : STALL_AT;

      // Eased approach with a small floor, so the last few percent still tick
      // over instead of stalling asymptotically.
      value = Math.min(target, value + Math.max((target - value) * 0.07, 0.35));

      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${value / 100})`;
      }
      if (markerRef.current) {
        markerRef.current.style.transform = `translate3d(${value}%, 0, 0)`;
      }
      if (countRef.current) {
        countRef.current.textContent = String(Math.round(value)).padStart(
          2,
          "0",
        );
      }
      setCue(cueFor(value));

      if (value >= 99.9) {
        // A held frame at 100 before the drapes move, so the number lands.
        openTimer = window.setTimeout(() => {
          setOpen(true);
          doneTimer = window.setTimeout(() => {
            release();
            window.scrollTo(0, 0);
            setGone(true);
          }, CURTAIN_MS);
        }, 260);
        return;
      }

      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(openTimer);
      window.clearTimeout(doneTimer);
      window.removeEventListener("load", onLoad);
      release();
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`preloader ${open ? "pointer-events-none" : ""}`}
      data-open={open}
    >
      <p role="status" className="sr-only">
        Loading Topaz Events
      </p>

      <span
        aria-hidden="true"
        className="preloader-panel preloader-panel--left"
      />
      <span
        aria-hidden="true"
        className="preloader-panel preloader-panel--right"
      />

      <div
        aria-hidden="true"
        className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="preloader-beam" />
        <span className="preloader-beam preloader-beam--b" />
        <span className="preloader-pool" />
        <span className="noise-overlay" />

        <div className="relative flex size-full flex-col items-center justify-center px-6">
          <Image
            src="/Topaz_logo.webp"
            alt=""
            width={300}
            height={131}
            priority
            className="h-14 w-auto md:h-20"
          />
          {/* Each term is its own flex item so a narrow screen never breaks
              one in half; the third is desktop-only to keep this to one line. */}
          <p className="mt-5 flex items-center justify-center gap-x-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted md:text-[11px] md:tracking-[0.22em]">
            <span>Event Management</span>
            <span className="text-gold/60">/</span>
            <span>AV Production</span>
            <span className="hidden text-gold/60 md:inline">/</span>
            <span className="hidden md:inline">Interactive Technology</span>
          </p>
          <p className="mt-3 font-script text-lg italic text-gold/75 md:text-xl">
            the show starts here
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-10 md:pb-12">
          <div className="mx-auto flex max-w-[1800px] items-end justify-between gap-6">
            {/* Cues are keyed so each one re-runs its own fade-in. */}
            <p
              key={cue}
              className="preloader-cue flex items-center gap-2.5 text-[12px] uppercase tracking-[0.14em] text-text-muted md:text-[13px]"
            >
              <span className="size-1.5 shrink-0 rotate-45 bg-gold/70" />
              {CUES[cue]}
            </p>
            <p className="shrink-0 text-[12px] uppercase tracking-[0.14em] text-text-muted">
              <span
                ref={countRef}
                className="text-2xl font-medium tabular-nums text-text md:text-3xl"
              >
                00
              </span>
              <span className="ml-1 text-gold">%</span>
            </p>
          </div>

          <div className="relative mx-auto mt-4 h-0.5 max-w-[1800px] bg-white/12">
            {/* These two carry their transform inline rather than as utilities:
                Tailwind's scale/translate classes set the standalone `scale`
                and `translate` properties, which would compose with — not be
                replaced by — the per-frame `transform` written above. */}
            <span
              ref={fillRef}
              style={{ transform: "scaleX(0)" }}
              className="absolute inset-y-0 left-0 w-full origin-left bg-gold"
            />
            {/* Full-width rail translated by the percentage, so the diamond
                rides the leading edge without being stretched by the fill. */}
            <span
              ref={markerRef}
              style={{ transform: "translate3d(0, 0, 0)" }}
              className="absolute inset-y-0 left-0 w-full"
            >
              <span className="absolute left-0 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gold shadow-[0_0_14px_rgba(224,194,110,0.9)]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
