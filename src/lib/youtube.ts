/**
 * URLs for the project players. Nothing here loads a script or an SDK: the
 * embeds are plain iframes, created only once a clip is actually asked for, so
 * a page full of project cards costs its poster images and nothing else.
 */

/** The cookie-free host. Same player, no tracking cookie until playback. */
export const EMBED_ORIGIN = "https://www.youtube-nocookie.com";

/**
 * Warmed up when a reader reaches for a play button rather than on load. The
 * page itself never talks to YouTube, so opening these up front would be two
 * handshakes spent on a video nobody may watch.
 */
const PRECONNECT_ORIGINS = [EMBED_ORIGIN, "https://i.ytimg.com"];

let warmed = false;

export function warmYoutubeConnection() {
  if (warmed) return;
  warmed = true;

  for (const origin of PRECONNECT_ORIGINS) {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = origin;
    link.crossOrigin = "";
    document.head.append(link);
  }
}

export function watchUrl(youtubeId: string) {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

export function embedUrl(youtubeId: string, { autoplay = false } = {}) {
  const params = new URLSearchParams({
    // Keeps the end-of-video grid on this channel instead of offering
    // competitors' events.
    rel: "0",
    // iOS otherwise takes the video fullscreen the moment it starts.
    playsinline: "1",
  });

  if (autoplay) params.set("autoplay", "1");

  return `${EMBED_ORIGIN}/embed/${youtubeId}?${params}`;
}

/** Permissions the player needs. Anything omitted here is denied to the frame. */
export const EMBED_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
