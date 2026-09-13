// Dev helper: captures the page at a few scroll offsets for visual review.
import { chromium } from "playwright";

const URL = process.env.SHOOT_URL ?? "http://localhost:3000/";
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1600, height: 900 },
  deviceScaleFactor: 1,
});

const errors = [];
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
page.on("pageerror", (e) => errors.push(String(e)));

await page.goto(URL, { waitUntil: "networkidle" });
await page.waitForTimeout(2500);

const max = await page.evaluate(
  () => document.documentElement.scrollHeight - window.innerHeight,
);
console.log("max scroll:", max);

for (const y of [0, 900, 1400, 1900, max]) {
  await page.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), y);
  await page.waitForTimeout(900);
  await page.screenshot({ path: `.tmp/shot-${y}.png` });
}

await page.setViewportSize({ width: 420, height: 860 });
await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
await page.waitForTimeout(900);
await page.screenshot({ path: ".tmp/shot-mobile.png" });
await page.evaluate(() => window.scrollTo({ top: 1200, behavior: "instant" }));
await page.waitForTimeout(900);
await page.screenshot({ path: ".tmp/shot-mobile-2.png" });

console.log(errors.length ? `ERRORS:\n${errors.join("\n")}` : "no console errors");
await browser.close();
