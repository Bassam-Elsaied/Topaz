"use client";

import { useEffect, useRef, useState } from "react";
import Image from "@/components/ui/image-load";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import {
  EMBED_ALLOW,
  embedUrl,
  warmYoutubeConnection,
  watchUrl,
} from "@/lib/youtube";
import type { Film } from "@/types";

/** Best playback quality we ask the player to serve. */
const PREFERRED_QUALITY = "hd1080";

/**
 * The showreel, set to run the moment the page opens with sound on and at the
 * highest quality the connection allows.
 *
 * Two browser realities shape this. Unmuted autoplay is only granted when the
 * visitor has enough engagement with the site; when it is blocked the player
 * simply waits on the poster for the first click, which then plays with sound.
 * And the modern YouTube player picks quality from the frame size and
 * bandwidth, so as well as the `vq` hint we drive the JS API on load to request
 * 1080p explicitly. A reader who prefers reduced motion gets the poster and a
 * play button instead of a clip that moves on arrival.
 */
export function AutoplayFilm({
  youtubeId,
  title,
  poster,
  posterAlt,
  start,
  label = "Watch it in motion",
  heading,
  accent,
  description,
}: Film) {
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;
    startedRef.current = true;
    warmYoutubeConnection();
    setPlaying(true);
  }, []);

  // Once the player is up, drive its JS API: request the best quality and, in
  // case unmuted autoplay was allowed but paused, nudge it to play.
  const command = (func: string, args: unknown[] = []) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*",
    );
  };

  const onPlayerReady = () => {
    command("setPlaybackQuality", [PREFERRED_QUALITY]);
    command("setPlaybackQualityRange", [PREFERRED_QUALITY, PREFERRED_QUALITY]);
    command("unMute");
    command("playVideo");
  };

  const play = () => {
    warmYoutubeConnection();
    setPlaying(true);
  };

  return (
    <section
      aria-labelledby="film-heading"
      className="relative w-full border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>{label}</SectionLabel>
              <h2
                id="film-heading"
                className="reveal mt-6 max-w-[18ch] font-display text-[clamp(28px,3.8vw,48px)] font-bold uppercase leading-[0.98] tracking-[-0.015em]"
                style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              >
                {heading}
                {accent && <span className="text-gold"> {accent}</span>}
              </h2>
            </div>
            {description && (
              <p
                className="reveal max-w-[44ch] font-sans text-[15px] leading-[1.75] text-text-muted"
                style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
              >
                {description}
              </p>
            )}
          </div>
        </Reveal>

        <Reveal>
          <div
            className="reveal group relative mt-12 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black ring-1 ring-gold/20 md:rounded-2xl"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            {/* Poster sits underneath: it is the first paint, the reduced-motion
                state, and the backdrop while the player loads its first frame. */}
            <Image
              src={poster}
              alt={posterAlt ?? title}
              fill
              sizes="(max-width: 1024px) 94vw, 1200px"
              className="object-cover"
            />

            {playing ? (
              <iframe
                ref={iframeRef}
                onLoad={onPlayerReady}
                src={embedUrl(youtubeId, {
                  autoplay: true,
                  // Sound on by default; the browser may still gate unmuted
                  // autoplay until the first interaction.
                  mute: false,
                  loop: true,
                  start,
                  controls: true,
                  quality: PREFERRED_QUALITY,
                })}
                title={title}
                allow={EMBED_ALLOW}
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 size-full border-0"
              />
            ) : (
              // Reduced-motion (or pre-mount) affordance: a play button that
              // starts the clip with sound on demand.
              <button
                type="button"
                onClick={play}
                onPointerEnter={warmYoutubeConnection}
                onFocus={warmYoutubeConnection}
                aria-label={`Play ${title}`}
                className="group/play absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/30 focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-gold"
              >
                <span
                  aria-hidden="true"
                  className="flex size-16 items-center justify-center rounded-full border border-gold/50 bg-black/40 text-gold backdrop-blur-[2px] transition duration-300 group-hover/play:scale-105 group-hover/play:border-gold group-hover/play:bg-gold group-hover/play:text-bg md:size-20"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 size-6 md:size-7"
                  >
                    <path d="M8 5.5v13l11-6.5z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </Reveal>

        <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-[13px] text-text-muted">
          <span className="font-bold uppercase tracking-[0.08em] text-text">
            {title}
          </span>
          <a
            href={watchUrl(youtubeId)}
            target="_blank"
            rel="noopener"
            className="text-gold underline-offset-4 hover:underline"
          >
            Watch on YouTube
          </a>
        </p>
      </div>
    </section>
  );
}
