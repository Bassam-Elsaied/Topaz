import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/company";

/**
 * The site is one page. Listing the routes the footer links to before they
 * exist would only hand crawlers a set of 404s, so they are added here as they
 * are built.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
