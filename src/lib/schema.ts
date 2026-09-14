import { SITE_URL } from "@/data/company";
import type { Faq } from "@/data/faqs";
import type { ProjectVideo } from "@/data/projects";
import { absoluteUrl } from "@/lib/seo";
import { embedUrl, watchUrl } from "@/lib/youtube";

/**
 * Schema builders for the inner pages. They all point back at the single
 * `Organization` node declared on the home page rather than redeclaring the
 * company on every route, which is what keeps the entity one entity.
 */

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export type Crumb = { label: string; href: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", href: "/" }, ...crumbs].map(
      (crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: absoluteUrl(crumb.href),
      }),
    ),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    serviceType,
    url: absoluteUrl(path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: [
      "Dubai",
      "Sharjah",
      "Abu Dhabi",
      "Ajman",
      "Ras Al Khaimah",
    ].map((name) => ({ "@type": "City", name })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  };
}

/**
 * A playable clip. The reel moved to YouTube, and an iframe created on click is
 * something a crawler never sees — this is what puts the footage back in the
 * index under this domain, and what video rich results are built from.
 */
export function videoObject(video: ProjectVideo, poster: string) {
  return {
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    uploadDate: video.uploadDate,
    duration: video.duration,
    // The first is ours and the larger of the two; the second is YouTube's own
    // frame, which is guaranteed to exist for every video on the channel.
    thumbnailUrl: [
      absoluteUrl(poster),
      `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
    ],
    embedUrl: embedUrl(video.youtubeId),
    url: watchUrl(video.youtubeId),
    publisher: { "@id": ORGANIZATION_ID },
  };
}

/**
 * A finished job, as a piece of work rather than an `Event`.
 *
 * Event rich results are built for tickets on sale, so marking a ceremony that
 * happened two years ago as an `Event` earns warnings and no placement.
 * `CreativeWork` describes what this page actually is: our record of it.
 */
export function projectSchema({
  name,
  description,
  path,
  image,
  year,
  city,
  eventType,
}: {
  name: string;
  description: string;
  path: string;
  image: string;
  year: number;
  city: string;
  eventType?: string;
}) {
  return {
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(path)}#project`,
    name,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    dateCreated: String(year),
    creator: { "@id": ORGANIZATION_ID },
    locationCreated: { "@type": "Place", name: `${city}, United Arab Emirates` },
    ...(eventType ? { genre: eventType } : {}),
  };
}

/**
 * A blog article. Author and publisher both resolve to the one Organization
 * node, so the entity stays single and the post is attributed to the company
 * rather than an unnamed byline.
 */
export function blogPostingSchema({
  headline,
  description,
  path,
  image,
  datePublished,
  section,
}: {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  section: string;
}) {
  return {
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(path)}#article`,
    headline,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    datePublished,
    dateModified: datePublished,
    articleSection: section,
    inLanguage: "en",
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: absoluteUrl(path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

/** Wraps the nodes a page contributes into the `@graph` Google reads. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
