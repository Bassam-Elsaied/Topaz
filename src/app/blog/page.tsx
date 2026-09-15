import { BlogIndex } from "@/components/blog/blog-index";
import { CtaBand } from "@/components/pages/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/pages/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { RelatedPages } from "@/components/pages/related-pages";
import { BLOG_CATEGORIES, BLOG_POSTS, FEATURED_POST } from "@/data/blog";
import { blogCard } from "@/data/cards";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

const PATH = "/blog";
const TITLE = "Topaz Blog | Event Planning Tips & UAE Industry Insights";
const DESCRIPTION = `Event planning tips, AV and technology guides and UAE industry insight from the Topaz Events team — ${BLOG_POSTS.length} articles for planners across Sharjah, Dubai and Abu Dhabi.`;

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: FEATURED_POST.image,
});

const CRUMBS = [{ label: "Topaz Blog", href: PATH }];

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
          breadcrumbSchema(CRUMBS),
          {
            "@type": "Blog",
            "@id": `${absoluteUrl(PATH)}#blog`,
            name: "Topaz Events Blog",
            description: DESCRIPTION,
            url: absoluteUrl(PATH),
            blogPost: BLOG_POSTS.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: absoluteUrl(`/blog/${post.slug}`),
              datePublished: post.date,
              image: absoluteUrl(post.image),
              articleSection: post.category,
            })),
          },
        )}
      />

      <PageShell>
        <PageHero
          eyebrow="Topaz Blog"
          title="Event insight"
          accent="from the team"
          tagline="Tips, trends and hard-won lessons from the field."
          lede={`Guides on planning, AV and technology, venues and budgets — plus where the UAE event industry is heading. Written by the people who build ${BLOG_POSTS.length}-plus events a year, not a content desk.`}
          image={FEATURED_POST.image}
          imageAlt={FEATURED_POST.title}
          crumbs={CRUMBS}
          actions={[
            { label: "Talk to our team", href: "/contact-us" },
            { label: "See our work", href: "/portfolio" },
          ]}
        />

        <BlogIndex
          posts={BLOG_POSTS.map(blogCard)}
          featured={blogCard(FEATURED_POST)}
          categories={BLOG_CATEGORIES}
        />

        <RelatedPages
          slugs={["event-management", "all-rental-services", "portfolio"]}
          label="Explore Topaz"
          title="More from Topaz"
        />

        <CtaBand
          title="Planning an event"
          accent="of your own?"
          body="Put our experience to work. Send us the brief and we will come back with a concept direction, a production scope and a cost — usually within one working day."
        />
      </PageShell>
    </>
  );
}
