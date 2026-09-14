import type { BlogBlock } from "@/data/blog";

/** URL/anchor-safe slug from arbitrary heading text. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export type Heading = { id: string; text: string };

/**
 * Guards against scrape residue: a block whose text is raw markup (a stray
 * `<img>` or `srcset` dump) rather than prose. Rendering it verbatim leaks tags
 * onto the page and poisons the table of contents with a tag-string anchor.
 */
export const isRawHtml = (text: string) =>
  /^\s*</.test(text) || /<img|srcset=|wp-image-|decoding=/i.test(text);

type TextBlock = Extract<BlogBlock, { tag: "h2" | "h3" | "p" | "li" | "blockquote" }>;

const isTextHeading = (
  block: BlogBlock,
  tag: "h2" | "h3",
): block is TextBlock & { tag: "h2" | "h3" } =>
  block.tag === tag && !isRawHtml(block.text);

/**
 * Which heading level drives the TOC for this post. Prefer real `h2` sections;
 * when a post was authored with tip/list `h3`s instead (common on the source
 * site), fall back to those so every article still gets an "On this page" rail.
 */
export type TocMode = "h2" | "h3";

export function blogTocMode(body: BlogBlock[]): TocMode {
  let h2 = 0;
  for (const block of body) {
    if (isTextHeading(block, "h2")) h2 += 1;
  }
  return h2 >= 2 ? "h2" : "h3";
}

/**
 * TOC entries for a post. Ids are `${slugify(text)}-${n}` where `n` counts only
 * the heading level used for the TOC, so they line up with the anchors
 * `BlogArticle` renders.
 */
export function blogHeadings(body: BlogBlock[]): Heading[] {
  const mode = blogTocMode(body);
  const out: Heading[] = [];
  let count = 0;

  for (const block of body) {
    if (!isTextHeading(block, mode)) continue;
    count += 1;
    out.push({ id: `${slugify(block.text)}-${count}`, text: block.text });
  }

  // Ultra-thin posts (no real section headings) still get a single anchor so
  // the sidebar layout matches every other article.
  if (out.length === 0) {
    out.push({ id: "overview-1", text: "Overview" });
  }

  return out;
}
