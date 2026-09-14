import type { Metadata } from "next";
import { COMPANY_NAME, SITE_URL } from "@/data/company";

/**
 * Per-page metadata. `metadataBase` is set once on the root layout, so the
 * relative paths handed in here resolve to absolute URLs in the output.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = "/hero-poster.webp",
  article,
}: {
  title: string;
  description: string;
  /** Route path, leading slash included. Becomes the canonical URL. */
  path: string;
  image?: string;
  /** Supplied by blog posts, which open-graph as articles rather than pages. */
  article?: { publishedTime: string; section?: string };
}): Metadata {
  const shared = {
    title,
    description,
    url: path,
    siteName: COMPANY_NAME,
    locale: "en_AE",
    images: [{ url: image }],
  };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: article
      ? {
          ...shared,
          type: "article",
          publishedTime: article.publishedTime,
          section: article.section,
          authors: [COMPANY_NAME],
        }
      : { ...shared, type: "website" },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();
