import type { Metadata } from "next";
import Image from "@/components/ui/image-load";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog/blog-article";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogShare } from "@/components/blog/blog-share";
import { BlogToc } from "@/components/blog/blog-toc";
import { CtaBand } from "@/components/pages/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/pages/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { BLOG_POSTS, getPost, relatedPosts } from "@/data/blog";
import { COMPANY_NAME } from "@/data/company";
import {
  blogPostingSchema,
  breadcrumbSchema,
  graph,
  webPageSchema,
} from "@/lib/schema";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { blogHeadings } from "@/lib/slug";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return pageMetadata({
    title: post.metaTitle,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    article: { publishedTime: post.date, section: post.category },
  });
}

export default async function BlogPostRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const url = absoluteUrl(path);
  const crumbs = [
    { label: "Topaz Blog", href: "/blog" },
    { label: post.title, href: path },
  ];
  const related = relatedPosts(post.slug);
  const headings = blogHeadings(post.body);

  return (
    <>
      <ReadingProgress targetId="post-body" />
      <JsonLd
        data={graph(
          webPageSchema({
            name: post.metaTitle,
            description: post.excerpt,
            path,
          }),
          breadcrumbSchema(crumbs),
          blogPostingSchema({
            headline: post.title,
            description: post.excerpt,
            path,
            image: post.image,
            datePublished: post.date,
            section: post.category,
          }),
        )}
      />

      <PageShell>
        <PageHero
          eyebrow={post.category}
          title={post.title}
          lede={post.excerpt}
          image={post.image}
          imageAlt={post.title}
          crumbs={crumbs}
          actions={[
            { label: "Plan your event", href: "/contact-us" },
            { label: "Back to the blog", href: "/blog" },
          ]}
        />

        <article
          id="post-body"
          className="relative w-full py-16 md:py-24"
        >
          <div className="mx-auto grid w-full max-w-[1140px] gap-x-16 gap-y-10 px-6 md:px-12 lg:grid-cols-[minmax(0,1fr)_240px]">
            <div className="min-w-0">
              {/* Byline: attributed to the company, with the share row. */}
              <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-7">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gold/30 bg-surface">
                    <Image
                      src="/Topaz_logo.webp"
                      alt={COMPANY_NAME}
                      width={44}
                      height={19}
                      className="w-7"
                    />
                  </span>
                  <div>
                    <p className="font-display text-[14px] font-bold uppercase tracking-[0.02em]">
                      {COMPANY_NAME} Team
                    </p>
                    <p className="mt-1 flex flex-wrap items-center gap-2.5 font-sans text-[12px] uppercase tracking-[0.1em] text-text-muted">
                      {post.dateLabel}
                      <span
                        aria-hidden="true"
                        className="size-1 rotate-45 bg-gold/60"
                      />
                      {post.readingMinutes} min read
                    </p>
                  </div>
                </div>

                <BlogShare url={url} title={post.title} />
              </div>

              {/* Compact TOC for narrow screens, where the sidebar is hidden. */}
              {headings.length > 0 && (
                <details className="group mt-8 rounded-lg border border-white/10 bg-surface/40 p-5 lg:hidden">
                  <summary className="flex cursor-pointer items-center justify-between font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-gold">
                    On this page
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-open:rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <ol className="mt-4 flex flex-col gap-2.5">
                    {headings.map((heading, index) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          className="flex gap-2.5 font-sans text-[14px] leading-[1.4] text-text-muted transition-colors hover:text-gold"
                        >
                          <span className="tabular-nums text-[12px] text-gold/60">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </details>
              )}

              <div className="mt-10">
                <BlogArticle body={post.body} />
              </div>

              {/* Foot of the article: category tag + share again. */}
              <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-7">
                <span className="rounded-full border border-white/15 px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-gold">
                  {post.category}
                </span>
                <BlogShare url={url} title={post.title} />
              </div>
            </div>

            {/* Sticky rail: table of contents that follows the read. */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <BlogToc headings={headings} />
              </div>
            </aside>
          </div>
        </article>

        {related.length > 0 && (
          <section
            aria-labelledby="related-heading"
            className="relative w-full border-t border-white/5 py-20 md:py-28"
          >
            <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
              <Reveal>
                <SectionLabel>Keep reading</SectionLabel>
                <h2
                  id="related-heading"
                  className="reveal mt-6 font-display text-[clamp(28px,3.6vw,46px)] font-bold uppercase leading-[0.98] tracking-[-0.015em]"
                  style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
                >
                  Related <span className="text-gold">articles</span>
                </h2>
              </Reveal>

              <Reveal>
                <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((item, index) => (
                    <li
                      key={item.slug}
                      className="reveal"
                      style={
                        { "--reveal-delay": `${index * 80}ms` } as React.CSSProperties
                      }
                    >
                      <BlogCard post={item} />
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        )}

        <CtaBand
          title="Turn insight"
          accent="into an event"
          body="Send us the brief. We will come back with a concept direction, a production scope and a cost — usually within one working day."
        />
      </PageShell>
    </>
  );
}
