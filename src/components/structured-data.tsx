import {
  COMPANY_NAME,
  CONTACT,
  OFFICES,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/data/company";
import { FAQS } from "@/data/faqs";
import { REEL_PROJECTS, type ProjectVideo } from "@/data/projects";
import { embedUrl, watchUrl } from "@/lib/youtube";

/**
 * What the page says about itself to crawlers.
 *
 * The reel moving to YouTube is the reason most of this exists: a `<video>` tag
 * on the page was something a crawler could at least see, whereas an iframe
 * created on click is not. `VideoObject` puts the footage back in the index —
 * under this domain rather than only under the channel's — and is what video
 * rich results are built from, so every clip carries the runtime, upload date
 * and thumbnail Google asks for.
 */

const absolute = (path: string) => new URL(path, SITE_URL).toString();

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

function videoObject(video: ProjectVideo, poster: string) {
  return {
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    uploadDate: video.uploadDate,
    duration: video.duration,
    // The first is ours and the larger of the two; the second is YouTube's own
    // frame, which is guaranteed to exist for every video on the channel.
    thumbnailUrl: [
      absolute(poster),
      `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
    ],
    embedUrl: embedUrl(video.youtubeId),
    url: watchUrl(video.youtubeId),
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function StructuredData() {
  const graph = [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: COMPANY_NAME,
      url: SITE_URL,
      logo: absolute("/Topaz_logo.webp"),
      description:
        "A 360-degree event management and AV production company operating across Sharjah, Dubai and Abu Dhabi.",
      telephone: CONTACT.phone,
      email: CONTACT.email,
      areaServed: "AE",
      sameAs: SOCIAL_LINKS.filter((link) => link.label !== "WhatsApp").map(
        (link) => link.href,
      ),
      address: OFFICES.map((office) => ({
        "@type": "PostalAddress",
        streetAddress: office.lines.join(", "),
        addressLocality: office.city,
        addressCountry: "AE",
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: COMPANY_NAME,
      publisher: { "@id": ORGANIZATION_ID },
      inLanguage: "en",
    },
    // Only the clips a reader can actually play from this page. Marking up
    // footage that lives solely on the channel is the kind of structured data
    // Google treats as misleading, and the hero's own loop is a silent backdrop
    // with nothing to say to a search result.
    ...REEL_PROJECTS.map((project) => videoObject(project.video!, project.image)),
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
