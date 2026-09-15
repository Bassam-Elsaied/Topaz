"use client";

import Image from "@/components/ui/image-load";
import Link from "next/link";
import { useState } from "react";
import { BlogCard } from "@/components/blog/blog-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { BlogCardData } from "@/data/cards";

type Filter = string | "all";

/**
 * The blog as an editorial index: the newest post headlines, a category rail
 * re-slices the rest, and the whole set is in the markup on first paint so the
 * filter costs no request and a crawler reads every article link.
 *
 * The posts arrive as props rather than an import: this is a client component,
 * so importing `@/data/blog` would ship every article body to the browser to
 * paint tiles that only need a cover and an excerpt. See `@/data/cards`.
 */
export function BlogIndex({
  posts,
  featured,
  categories,
}: {
  posts: BlogCardData[];
  /** The newest post, headlining the index. */
  featured: BlogCardData;
  categories: string[];
}) {
  const [filter, setFilter] = useState<Filter>("all");

  const rest = posts.filter((post) => post.slug !== featured.slug);
  const visible =
    filter === "all"
      ? rest
      : rest.filter((post) => post.category === filter);

  const filters: { label: string; value: Filter; count: number }[] = [
    { label: "All posts", value: "all", count: posts.length },
    ...categories.map((category) => ({
      label: category,
      value: category as Filter,
      count: posts.filter((post) => post.category === category).length,
    })),
  ];

  return (
    <section
      id="posts"
      aria-labelledby="posts-heading"
      className="relative w-full border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
            <div className="reveal max-w-[34ch]">
              <SectionLabel>Latest thinking</SectionLabel>
              <h2
                id="posts-heading"
                className="mt-5 font-display text-[clamp(30px,4.4vw,58px)] font-bold uppercase leading-[0.95] tracking-[-0.02em]"
              >
                From the <span className="text-gold">journal</span>
              </h2>
            </div>
            <span
              aria-hidden="true"
              className="reveal font-display text-[clamp(56px,9vw,130px)] font-bold leading-[0.8] tabular-nums text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.16)]"
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {posts.length}
            </span>
          </div>
        </Reveal>

        {/* Featured / newest post. */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="reveal group mt-12 grid overflow-hidden rounded-2xl border border-white/10 bg-surface/40 transition-colors duration-500 hover:border-gold/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold lg:grid-cols-2"
          >
            <div className="relative aspect-16/10 overflow-hidden lg:aspect-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 720px"
                className="z-0 object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/60 to-transparent"
              />
            </div>

            <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
              <span className="flex items-center gap-3 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
                <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold" />
                Latest post
                <span className="font-medium text-text-muted">
                  {featured.category}
                </span>
              </span>

              <h3 className="font-display text-[clamp(24px,3vw,40px)] font-bold uppercase leading-[1.02] tracking-[-0.015em] transition-colors duration-300 group-hover:text-gold">
                {featured.title}
              </h3>

              <p className="max-w-[52ch] font-sans text-[15px] leading-[1.75] text-text-muted">
                {featured.excerpt}
              </p>

              <span className="flex items-center gap-2.5 font-sans text-[12px] uppercase tracking-[0.12em] text-text-muted">
                {featured.dateLabel}
                <span aria-hidden="true" className="size-1 rotate-45 bg-gold/60" />
                {featured.readingMinutes} min read
              </span>

              <span className="mt-1 flex items-center gap-2.5 font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-text">
                <span className="flex items-center gap-2.5 rounded-xs bg-gold px-6 py-3 text-bg transition-colors duration-300 group-hover:bg-gold-deep">
                  Read article
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="size-4"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Category rail. */}
        <div className="mt-12 flex flex-col gap-5 border-y border-white/10 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2.5">
            {filters.map((option) => {
              const active = option.value === filter;
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setFilter(option.value)}
                  aria-pressed={active}
                  className={`flex cursor-pointer items-center gap-2 rounded-full border px-5 py-2.5 font-sans text-[12px] font-bold uppercase leading-none tracking-[0.08em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:text-[13px] ${
                    active
                      ? "border-gold bg-gold text-bg"
                      : "border-white/15 text-text-muted hover:border-gold/50 hover:text-gold"
                  }`}
                >
                  {option.label}
                  <span
                    className={`text-[10px] tabular-nums ${
                      active ? "text-bg/70" : "text-text-muted/60"
                    }`}
                  >
                    {option.count}
                  </span>
                </button>
              );
            })}
          </div>

          <p
            aria-live="polite"
            className="font-sans text-[12px] uppercase tracking-[0.14em] text-text-muted"
          >
            {visible.length} {visible.length === 1 ? "article" : "articles"}
            {filter !== "all" && ` in ${filter}`}
          </p>
        </div>

        <Reveal>
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post, index) => (
              <li
                key={post.slug}
                className="reveal"
                style={
                  { "--reveal-delay": `${Math.min(index, 5) * 70}ms` } as React.CSSProperties
                }
              >
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
