import { JsonLd } from "@/components/seo/json-ld";
import {
  COMPANY_NAME,
  CONTACT,
  OFFICES,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/data/company";
import { FAQS } from "@/data/faqs";
import { REEL_PROJECTS } from "@/data/projects";
import {
  ORGANIZATION_ID,
  faqSchema,
  graph,
  videoObject,
} from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";

/**
 * What the home page says about itself to crawlers. The `Organization` and
 * `WebSite` nodes are declared here and only here; every inner page references
 * them by `@id` so the company stays one entity across the site.
 */
export function StructuredData() {
  return (
    <JsonLd
      data={graph(
        {
          "@type": "Organization",
          "@id": ORGANIZATION_ID,
          name: COMPANY_NAME,
          url: SITE_URL,
          logo: absoluteUrl("/Topaz_logo.webp"),
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
        // footage that lives solely on the channel is the kind of structured
        // data Google treats as misleading, and the hero's own loop is a silent
        // backdrop with nothing to say to a search result.
        ...REEL_PROJECTS.map((project) =>
          videoObject(project.video!, project.image),
        ),
        faqSchema(FAQS),
      )}
    />
  );
}
