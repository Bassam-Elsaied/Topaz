// One-off: slices the Topaz client-logo sprite into individual transparent
// white-silhouette WebPs for the marquee. Run with `node scripts/slice-logos.mjs`.
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";

const SRC = "scripts/assets/logos-sprite.jpg";
const OUT = "public/logos";

// A pixel counts as background when every channel is this bright or brighter.
const WHITE = 238;
const PAD = 8;

// The sprite is a fixed 5-row grid; splitting on gap size alone is ambiguous
// because several logos pair Arabic and English lockups with wide inner
// spacing, so the logo count per row is pinned here.
const ROW_COUNTS = [8, 5, 5, 7, 9];

const NAMES = [
  "dubai-tourism", "dubai-police", "government-of-dubai", "government-of-abu-dhabi",
  "government-of-sharjah", "sharjah-commerce-tourism", "sharjah-sports-council", "sharjah-emblem",
  "government-of-ajman", "ajman-tourism-culture-media", "ajman-chamber",
  "sharjah-chamber-of-commerce", "ajman-economic-development",
  "american-university-of-sharjah", "university-of-sharjah", "sharjah-private-education",
  "sharjah-investment-development", "shurooq",
  "snoc", "emirates-auction", "sharjah-asset-management", "abu-dhabi-media-network",
  "shams", "sharjah-media-city", "sharjah-broadcasting-authority",
  "mercedes-benz", "rubu-garn", "nakheel", "alef", "binghatti",
  "sharjah-self-defence", "sharjah-club", "dubai-equestrian-club", "ifbb-federation",
];

const { data, info } = await sharp(SRC)
  .flatten({ background: "#ffffff" })
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;

const isInk = (x, y) => {
  const i = (y * W + x) * C;
  return data[i] < WHITE || data[i + 1] < WHITE || data[i + 2] < WHITE;
};

/** Runs of consecutive lines whose ink count clears `minInk`. */
function runs(counts, minInk) {
  const out = [];
  let start = null;
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] >= minInk) {
      if (start === null) start = i;
    } else if (start !== null) {
      out.push([start, i]);
      start = null;
    }
  }
  if (start !== null) out.push([start, counts.length]);
  return out;
}

/**
 * Drops hairline runs (JPEG edge noise and the sprite's thin divider rules).
 * Without this they consume a slot and force two real logos to be merged.
 */
function dropSlivers(segments, counts, minWidth, minInk) {
  return segments.filter(([a, b]) => {
    if (b - a < minWidth) return false;
    let total = 0;
    for (let i = a; i < b; i++) total += counts[i];
    return total >= minInk;
  });
}

/** Merges adjacent runs across the narrowest gaps until `target` remain. */
function mergeToCount(segments, target) {
  const segs = segments.map((s) => [...s]);
  while (segs.length > target) {
    let best = 0;
    let bestGap = Infinity;
    for (let i = 0; i < segs.length - 1; i++) {
      const gap = segs[i + 1][0] - segs[i][1];
      if (gap < bestGap) {
        bestGap = gap;
        best = i;
      }
    }
    segs[best] = [segs[best][0], segs[best + 1][1]];
    segs.splice(best + 1, 1);
  }
  return segs;
}

const rowInk = new Array(H).fill(0);
for (let y = 0; y < H; y++) {
  let n = 0;
  for (let x = 0; x < W; x++) if (isInk(x, y)) n++;
  rowInk[y] = n;
}
const rowBands = mergeToCount(
  dropSlivers(runs(rowInk, 3), rowInk, 6, 400),
  ROW_COUNTS.length,
);
if (rowBands.length !== ROW_COUNTS.length) {
  throw new Error(`expected ${ROW_COUNTS.length} rows, found ${rowBands.length}`);
}

const boxes = [];
for (const [ri, [y0, y1]] of rowBands.entries()) {
  const colInk = new Array(W).fill(0);
  for (let x = 0; x < W; x++) {
    let n = 0;
    for (let y = y0; y < y1; y++) if (isInk(x, y)) n++;
    colInk[x] = n;
  }
  const cols = mergeToCount(
    dropSlivers(runs(colInk, 2), colInk, 8, 200),
    ROW_COUNTS[ri],
  );
  for (const [x0, x1] of cols) {
    // Tighten vertically to this logo's own extent within the row band.
    let top = y1;
    let bottom = y0;
    for (let y = y0; y < y1; y++) {
      for (let x = x0; x < x1; x++) {
        if (isInk(x, y)) {
          if (y < top) top = y;
          if (y > bottom) bottom = y;
          break;
        }
      }
    }
    boxes.push({ x: x0, y: top, w: x1 - x0, h: bottom - top + 1 });
  }
}

await mkdir(OUT, { recursive: true });
const manifest = [];

for (const [i, b] of boxes.entries()) {
  const left = Math.max(0, b.x - PAD);
  const top = Math.max(0, b.y - PAD);
  const width = Math.min(W - left, b.w + PAD * 2);
  const height = Math.min(H - top, b.h + PAD * 2);

  const crop = await sharp(SRC)
    .flatten({ background: "#ffffff" })
    .extract({ left, top, width, height })
    .raw()
    .toBuffer();

  // Repaint as a pure-white silhouette whose alpha tracks the original ink
  // density, so the logos read cleanly on the dark section.
  const rgba = Buffer.alloc(width * height * 4);
  for (let p = 0; p < width * height; p++) {
    const s = p * 3;
    const lum = 0.299 * crop[s] + 0.587 * crop[s + 1] + 0.114 * crop[s + 2];
    rgba[p * 4] = 255;
    rgba[p * 4 + 1] = 255;
    rgba[p * 4 + 2] = 255;
    rgba[p * 4 + 3] = Math.max(0, Math.min(255, Math.round((255 - lum) * 1.35)));
  }

  const name = `${NAMES[i] ?? `logo-${i + 1}`}.webp`;
  const out = await sharp(rgba, { raw: { width, height, channels: 4 } })
    .webp({ quality: 92, alphaQuality: 100 })
    .toBuffer();
  await writeFile(`${OUT}/${name}`, out);
  manifest.push({ src: `/logos/${name}`, width, height, alt: NAMES[i] ?? "" });
}

await mkdir("src/data", { recursive: true });
await writeFile(
  "src/data/client-logos.json",
  `${JSON.stringify(manifest, null, 2)}\n`,
);
console.log(`wrote ${manifest.length} logos`);
