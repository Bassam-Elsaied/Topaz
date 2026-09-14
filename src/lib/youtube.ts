/**
 * URLs for the project players. Nothing here loads a script or an SDK: the
 * embeds are plain iframes, created only once a clip is actually asked for, so
 * a page full of project cards costs its poster images and nothing else.
 */

/** The cookie-free host. Same player, no tracking cookie until playback. */
const EMBED_ORIGIN = "https://www.youtube-nocookie.com";

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

export function embedUrl(
  youtubeId: string,
  {
    autoplay = false,
    mute = false,
    loop = false,
    start,
    controls = true,
    quality,
  }: {
    autoplay?: boolean;
    mute?: boolean;
    loop?: boolean;
    start?: number;
    controls?: boolean;
    /** Suggested playback quality, e.g. `hd1080`. YouTube treats it as a hint. */
    quality?: string;
  } = {},
) {
  const params = new URLSearchParams({
    // Keeps the end-of-video grid on this channel instead of offering
    // competitors' events.
    rel: "0",
    // iOS otherwise takes the video fullscreen the moment it starts.
    playsinline: "1",
  });

  if (autoplay) params.set("autoplay", "1");
  // Browsers only honour autoplay when the player starts muted.
  if (mute) params.set("mute", "1");
  if (loop) {
    // YouTube only loops a single video when it is also given as a one-item
    // playlist, so the player has something to loop back to.
    params.set("loop", "1");
    params.set("playlist", youtubeId);
  }
  if (typeof start === "number" && start > 0) {
    params.set("start", String(Math.floor(start)));
  }
  if (!controls) params.set("controls", "0");
  if (quality) {
    // `vq` is a hint the modern player mostly ignores in favour of picking
    // quality from the frame size and bandwidth, so we also enable the JS API
    // (see the component) to request the quality once the player is ready.
    params.set("vq", quality);
    params.set("hd", "1");
    params.set("enablejsapi", "1");
  }

  return `${EMBED_ORIGIN}/embed/${youtubeId}?${params}`;
}

/** Permissions the player needs. Anything omitted here is denied to the frame. */
export const EMBED_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
