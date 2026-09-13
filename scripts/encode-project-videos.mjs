/**
 * Turns the raw event footage in `media/project-videos` into the web-sized
 * loops the project cards play from `public/projects`.
 *
 * The masters are camera/YouTube downloads at 720p with sound, tens of
 * megabytes each. The cards play them muted, cropped and at most ~900px wide,
 * so the audio is dropped, the picture is capped at 960px and the moov atom is
 * moved to the front to let playback start before the file has finished
 * arriving.
 *
 * Run with `node scripts/encode-project-videos.mjs`. The masters stay where
 * they are — `media/` is gitignored — so this is safe to re-run.
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, statSync } from "node:fs";
import path from "node:path";
import ffmpeg from "ffmpeg-static";

const SOURCE_DIR = "media/project-videos";
const OUT_DIR = "public/projects";

/** Which master belongs to which project slug in src/data/projects.ts. */
const SOURCES = {
  "sharjah-judicial-forum":
    "Sharjah Judicial Department Forum _ Topaz Events.mp4",
  "aus-alumni-reunion":
    "AUS Alumni Event 2026 _ Full Event Setup with Distinguished Guests _ Topaz Events.mp4",
  "sheikh-sultan-awards":
    "YTDown.com_YouTube_Sheikh-Sultan-Awards-Celebrating-The-Spi_Media_fAX2cs6isPU_002_720p.mp4",
  "district-11-launch":
    "YTDown.com_YouTube_District-11-Grand-Launch-by-Al-Marwan-De_Media_0OdGlI-bVI4_002_720p.mp4",
  "binghatti-mercedes":
    "YTDown.com_YouTube_Binghatti-X-Mercedes-with-TOPAZ_Media_wCdgguL3n4k_002_720p.mp4",
  "ifbb-asia":
    "YTDown.com_YouTube_IFBB-Asia-2025-Highlights-Powered-by-Top_Media_QNWHkjL94_002_720p.mp4",
};

const mb = (file) => (statSync(file).size / 1024 / 1024).toFixed(1);

mkdirSync(OUT_DIR, { recursive: true });

for (const [slug, filename] of Object.entries(SOURCES)) {
  const input = path.join(SOURCE_DIR, filename);
  const output = path.join(OUT_DIR, `${slug}.mp4`);

  if (!existsSync(input)) {
    console.warn(`skip  ${slug} — no master at ${input}`);
    continue;
  }

  execFileSync(
    ffmpeg,
    [
      "-y",
      "-i", input,
      // Audio is never unmuted on the cards, so none of it is worth shipping.
      "-an",
      // `-2` keeps the height even, which H.264 requires; `min` leaves masters
      // narrower than the cap alone rather than upscaling them.
      "-vf", "scale='min(960,iw)':-2:flags=lanczos",
      "-c:v", "libx264",
      "-profile:v", "high",
      "-preset", "slow",
      "-crf", "28",
      "-pix_fmt", "yuv420p",
      "-movflags", "+faststart",
      output,
    ],
    { stdio: ["ignore", "ignore", "ignore"] },
  );

  console.log(`ok    ${slug}.mp4  ${mb(input)}MB -> ${mb(output)}MB`);
}
