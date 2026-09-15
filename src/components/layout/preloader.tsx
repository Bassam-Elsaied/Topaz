"use client";

import Image from "@/components/ui/image-load";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * First-load curtain. It is rendered in the server HTML so it covers the page
 * from the very first paint, then steps through a set of show-call cues while
 * the document finishes loading and finally splits apart like stage drapes.
 *
 * It is deliberately limited to arriving on the home page. A five-second drape
 * is a brand moment on the front door; in front of a service page someone
 * reached from a search result it is just five seconds of held-back content.
 */

const CUES = [
  "Drafting the run sheet",
  "Rigging the truss",
  "Focusing the lights",
  "Ringing out the sound",
  "Curtain up",
];

/** Total duration the preloader displays before opening the site (5 seconds). */
const PRELOADER_DURATION = 5000;
/** Brief pause at 100% so the completed counter registers before curtains split. */
const HOLD_AT_100 = 400;
/** Duration over which the percentage progresses from 0 to 100. */
const COUNT_DURATION = PRELOADER_DURATION - HOLD_AT_100;
/** Must match the panel transition in globals.css. */
const CURTAIN_MS = 1000;

function cueFor(value: number) {
  if (value < 25) return 0;
  if (value < 50) return 1;
  if (value < 75) return 2;
  if (value < 95) return 3;
  return 4;
}

/**
 * Module scope, so it survives the component unmounting but not a new document.
 * That is precisely the distinction we want: the curtain runs once when the tab
 * loads the site, and navigating back to the home page later does not replay it.
 */
let alreadyPlayed = false;

export function Preloader() {
  const [cue, setCue] = useState(0);
  const [open, setOpen] = useState(false);
  const [gone, setGone] = useState(false);

  const active = usePathname() === "/" && !alreadyPlayed;

  const fillRef = useRef<HTMLSpanElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const cueRef = useRef(0);

  useEffect(() => {
    if (!active) return;
    alreadyPlayed = true;

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
    let frame = 0;
    let doneTimer = 0;
    let lastRounded = -1;

    const onLoad = () => {
      loaded = true;
    };
    if (!loaded) window.addEventListener("load", onLoad, { once: true });

    const release = () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };

    const step = () => {
      const elapsed = performance.now() - started;
      const isLoaded = loaded || document.readyState === "complete";

      // Progress steadily toward 100 over COUNT_DURATION (5.6s).
      // If the document is somehow still loading, hold at 98% until loaded.
      const maxAllowed = isLoaded ? 100 : 98;
      const progress = Math.min(1, elapsed / COUNT_DURATION);
      const value = Math.min(maxAllowed, progress * 100);

      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${value / 100})`;
      }
      if (markerRef.current) {
        markerRef.current.style.transform = `translate3d(${value}%, 0, 0)`;
      }
      const rounded = Math.round(value);
      if (rounded !== lastRounded) {
        lastRounded = rounded;
        if (countRef.current) {
          countRef.current.textContent = String(rounded).padStart(2, "0");
        }
      }

      const nextCue = cueFor(value);
      if (nextCue !== cueRef.current) {
        cueRef.current = nextCue;
        setCue(nextCue);
      }

      // After 5 seconds have passed and the page is loaded, open the curtains.
      if (elapsed >= PRELOADER_DURATION && isLoaded) {
        if (fillRef.current) {
          fillRef.current.style.transform = "scaleX(1)";
        }
        if (markerRef.current) {
          markerRef.current.style.transform = "translate3d(100%, 0, 0)";
        }
        if (countRef.current) {
          countRef.current.textContent = "100";
        }

        setOpen(true);
        doneTimer = window.setTimeout(() => {
          release();
          window.scrollTo(0, 0);
          setGone(true);
        }, CURTAIN_MS);
        return;
      }

      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(doneTimer);
      window.removeEventListener("load", onLoad);
      release();
    };
  }, [active]);

  if (!active || gone) return null;

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
              className="absolute inset-y-0 left-0 w-full origin-left bg-gold will-change-transform"
            />
            {/* Full-width rail translated by the percentage, so the diamond
                rides the leading edge without being stretched by the fill. */}
            <span
              ref={markerRef}
              style={{ transform: "translate3d(0, 0, 0)" }}
              className="absolute inset-y-0 left-0 w-full will-change-transform"
            >
              <span className="absolute left-0 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gold shadow-[0_0_14px_rgba(224,194,110,0.9)]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
