import Image from "@/components/ui/image-load";
import type { BlogBlock } from "@/data/blog";
import { blogTocMode, isRawHtml, slugify } from "@/lib/slug";

/**
 * Renders a post body from the scraped block list. Consecutive `li` blocks are
 * folded back into a single `<ul>` so the source's flat run of list items reads
 * as an actual list. Section headings (h2, or h3 when a post has no real h2
 * structure) carry the same anchor ids the table of contents links to. The
 * first paragraph is set as a drop-capped lede, and inline images/tables come
 * from the scrape.
 */
type Group =
  | { type: "list"; items: string[] }
  | { type: "block"; block: BlogBlock };

function group(body: BlogBlock[]): Group[] {
  const out: Group[] = [];
  for (const block of body) {
    if (block.tag === "li") {
      const last = out[out.length - 1];
      if (last && last.type === "list") last.items.push(block.text);
      else out.push({ type: "list", items: [block.text] });
    } else {
      out.push({ type: "block", block });
    }
  }
  return out;
}

export function BlogArticle({ body }: { body: BlogBlock[] }) {
  const blocks = body.filter(
    (block) =>
      block.tag === "img" || block.tag === "table" || !isRawHtml(block.text),
  );
  const groups = group(blocks);
  const firstParaIndex = blocks.findIndex((block) => block.tag === "p");
  const tocMode = blogTocMode(blocks);
  const hasTocSections = blocks.some(
    (block) => block.tag === tocMode && !isRawHtml(block.text),
  );
  // Section numbers, resolved up front rather than by a counter ticked inside
  // the render callback below: these ids are what the table of contents links
  // to, so they have to agree with `blogHeadings` exactly, and a `let` mutated
  // mid-render is the one thing that could quietly put them out of step.
  const sectionNumbers = new Map<number, number>();
  let counted = 0;
  groups.forEach((item, index) => {
    if (item.type === "block" && item.block.tag === tocMode) {
      counted += 1;
      sectionNumbers.set(index, counted);
    }
  });

  return (
    <div className="max-w-[72ch]">
      {/* Synthetic TOC target for posts with no section headings at all. */}
      {!hasTocSections && (
        <span id="overview-1" className="sr-only">
          Overview
        </span>
      )}

      {groups.map((item, index) => {
        if (item.type === "list") {
          return (
            <ul key={index} className="mt-7 flex flex-col gap-3.5">
              {item.items.map((text, i) => (
                <li key={i} className="flex gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-gold"
                  />
                  <span className="font-sans text-[15px] leading-[1.8] text-text-muted md:text-[16px]">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          );
        }

        const block = item.block;

        if (block.tag === "img") {
          return (
            <figure
              key={index}
              className="mt-10 overflow-hidden rounded-xl border border-white/10"
            >
              <Image
                src={block.src}
                alt={block.alt}
                width={block.width || 1000}
                height={block.height || 625}
                loading="lazy"
                sizes="(max-width: 768px) 92vw, 720px"
                className="h-auto w-full object-cover"
              />
            </figure>
          );
        }

        if (block.tag === "table") {
          const [head, ...rows] = block.rows;
          return (
            <div
              key={index}
              className="mt-10 overflow-x-auto rounded-xl border border-white/10"
            >
              <table className="w-full border-collapse text-left font-sans text-[14px] md:text-[15px]">
                <thead>
                  <tr className="bg-white/5">
                    {head.map((cell, i) => (
                      <th
                        key={i}
                        className="border-b border-white/10 px-4 py-3 font-bold uppercase tracking-[0.04em] text-gold"
                      >
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, r) => (
                    <tr key={r} className="odd:bg-white/[0.02]">
                      {row.map((cell, c) => (
                        <td
                          key={c}
                          className="border-b border-white/5 px-4 py-3 align-top leading-[1.6] text-text-muted"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        const { tag, text } = block;

        // Primary TOC sections — same numbered style whether sourced from h2 or h3.
        if (tag === tocMode) {
          const sectionNumber = sectionNumbers.get(index) ?? 1;
          const id = `${slugify(text)}-${sectionNumber}`;
          const HeadingTag = tocMode;
          return (
            <HeadingTag
              key={index}
              id={id}
              className="mt-16 scroll-mt-28 border-t border-white/10 pt-8 font-display text-[clamp(22px,2.9vw,32px)] font-bold uppercase leading-[1.1] tracking-[-0.01em] text-text first:mt-0 first:border-0 first:pt-0"
            >
              <span className="mb-3 block font-sans text-[13px] font-bold tabular-nums tracking-[0.1em] text-gold/70">
                {String(sectionNumber).padStart(2, "0")}
              </span>
              {text}
            </HeadingTag>
          );
        }

        // Secondary headings (h3 under a real h2 structure, or leftover title-echo h2).
        if (tag === "h2" || tag === "h3") {
          return (
            <h3
              key={index}
              className="mt-10 font-display text-[18px] font-bold uppercase leading-[1.2] tracking-[0.005em] text-gold"
            >
              {text}
            </h3>
          );
        }

        if (tag === "blockquote") {
          return (
            <blockquote
              key={index}
              className="mt-8 border-l-2 border-gold pl-6 font-script text-[clamp(19px,2.4vw,26px)] italic leading-[1.4] text-text-accent"
            >
              {text}
            </blockquote>
          );
        }

        const isLede = blocks.indexOf(block) === firstParaIndex;

        if (isLede) {
          return (
            <p
              key={index}
              className="mt-2 font-sans text-[17px] leading-[1.8] text-text-accent first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[58px] first-letter:font-bold first-letter:leading-[0.7] first-letter:text-gold md:text-[19px]"
            >
              {text}
            </p>
          );
        }

        return (
          <p
            key={index}
            className="mt-6 font-sans text-[15px] leading-[1.85] text-text-muted md:text-[16px]"
          >
            {text}
          </p>
        );
      })}
    </div>
  );
}
