import Image from "@/components/ui/image-load";
import Link from "next/link";
import type { BlogCardData } from "@/data/cards";

/**
 * One article in a grid. The whole tile links to the post; the cover uses
 * ImageLoad for blur-up lazy loading against pre-built WebP.
 */
export function BlogCard({
  post,
  priority = false,
  sizes = "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 400px",
}: {
  post: BlogCardData;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-surface/40 transition-colors duration-500 hover:border-gold/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes={sizes}
          className="z-0 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/70 via-transparent to-transparent"
        />
        <span className="absolute left-4 top-4 z-20 rounded-xs bg-black/55 px-2.5 py-1 font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-gold backdrop-blur-[2px]">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="flex items-center gap-2.5 font-sans text-[11px] uppercase tracking-[0.12em] text-text-muted">
          {post.dateLabel}
          <span aria-hidden="true" className="size-1 rotate-45 bg-gold/60" />
          {post.readingMinutes} min read
        </span>

        <h3 className="font-display text-[17px] font-bold uppercase leading-[1.2] tracking-[0.005em] transition-colors duration-300 group-hover:text-gold md:text-[18px]">
          {post.title}
        </h3>

        <p className="line-clamp-3 font-sans text-[14px] leading-[1.7] text-text-muted">
          {post.excerpt}
        </p>

        <span className="mt-auto flex items-center gap-2 pt-2 font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-text transition-colors duration-300 group-hover:text-gold">
          Read article
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="size-3.5 text-gold"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
