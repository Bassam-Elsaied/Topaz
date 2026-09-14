"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/slug";

/**
 * Table of contents with scroll-spy. The observer's rootMargin biases the
 * "active" band to the upper third of the viewport, so the highlighted item is
 * the section the reader is actually looking at rather than whatever last
 * touched the very bottom edge.
 */
export function BlogToc({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    const els = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 1] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="On this page">
      <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
        On this page
      </p>
      <ol className="mt-5 flex max-h-[calc(100vh-12rem)] flex-col gap-1 overflow-y-auto overscroll-contain border-l border-white/10 pr-2 [scrollbar-color:rgba(255,255,255,0.18)_transparent] [scrollbar-width:thin]">
        {headings.map((heading, index) => {
          const current = heading.id === active;
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                aria-current={current ? "true" : undefined}
                className={`-ml-px flex gap-2.5 border-l-2 py-1.5 pl-4 font-sans text-[13px] leading-[1.4] transition-colors duration-300 ${
                  current
                    ? "border-gold text-gold"
                    : "border-transparent text-text-muted hover:text-text"
                }`}
              >
                <span className="tabular-nums text-[11px] text-gold/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="line-clamp-2">{heading.text}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
