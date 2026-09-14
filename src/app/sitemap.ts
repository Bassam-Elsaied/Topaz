import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blog";
import { SITE_URL } from "@/data/company";
import { ALL_ROUTES } from "@/data/site-pages";

/**
 * Publication dates for the only routes that carry a real one. A `lastModified`
 * invented for the rest — a build timestamp, say — would mark the whole site as
 * changed on every deploy, which is the signal a crawler learns to ignore.
 */
const POST_DATES = new Map(
  BLOG_POSTS.map((post) => [`/blog/${post.slug}`, new Date(post.date)]),
);

/**
 * Built from the same route list the navigation and related-page cards read,
 * so a page cannot be added to the site and quietly left out of the index.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...ALL_ROUTES.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: POST_DATES.get(route),
      changeFrequency: "monthly" as const,
      // Case studies and blog posts sit below the service and hub pages.
      priority:
        route === "/privacy-policy"
          ? 0.3
          : route.startsWith("/portfolio/") || route.startsWith("/blog/")
            ? 0.6
            : 0.8,
    })),
  ];
}
