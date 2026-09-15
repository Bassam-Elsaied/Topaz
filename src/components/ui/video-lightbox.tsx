"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ProjectVideo } from "@/data/projects";
import { setScrollLocked } from "@/lib/scroll-ticker";
import {
  EMBED_ALLOW,
  embedUrl,
  warmYoutubeConnection,
  watchUrl,
} from "@/lib/youtube";

/**
 * Play affordance laid over a project still, and the player it opens.
 *
 * The point of the split is cost: a card is an image and a button until it is
 * asked for, so a page carrying the whole reel downloads one player at most —
 * the one someone chose to watch — instead of six that autoplay past the
 * reader on mute. Opening one full size also means it arrives with sound and
 * controls, which a background loop never had.
 */
export function VideoLightbox({ video }: { video: ProjectVideo }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    setScrollLocked(true);
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      setScrollLocked(false);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    // The card can be mid-flight in the flip, so focus goes back to the button
    // rather than to wherever the document happens to start.
    triggerRef.current?.focus();
  };

  return (
    <>
      {/* Covers the card: the still is the target, not a small badge on it.
          Pointer events are left to the card, because the flip card is a fixed
          element that is only over its own slot once it has landed. */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        // Reaching for the button is the first reliable sign the page will
        // need YouTube at all, and it buys the handshake back from the click.
        onPointerEnter={warmYoutubeConnection}
        onFocus={warmYoutubeConnection}
        aria-label={`Play ${video.title}`}
        className="group/play absolute inset-0 z-10 flex cursor-pointer items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-gold"
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

      {open
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={video.title}
              onClick={close}
              className="fixed inset-0 z-100 flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm md:p-10"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close video"
                className="absolute right-4 top-4 flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/20 text-text transition-colors duration-300 hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:right-8 md:top-8"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="size-5"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>

              <div
                // The backdrop closes on click; the player is not the backdrop.
                onClick={(event) => event.stopPropagation()}
                className="w-full max-w-[min(92vw,1180px)]"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl bg-black md:rounded-2xl">
                  <iframe
                    src={embedUrl(video.youtubeId, { autoplay: true })}
                    title={video.title}
                    allow={EMBED_ALLOW}
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute inset-0 size-full border-0"
                  />
                </div>

                <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-[13px] text-text-muted">
                  <span className="font-bold uppercase tracking-[0.08em] text-text">
                    {video.title}
                  </span>
                  <a
                    href={watchUrl(video.youtubeId)}
                    target="_blank"
                    rel="noopener"
                    className="text-gold underline-offset-4 hover:underline"
                  >
                    Watch on YouTube
                  </a>
                </p>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
