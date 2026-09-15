import { ContactSection } from "@/components/home/contact-section";
import { JsonLd } from "@/components/seo/json-ld";
import { OfficesSection } from "@/components/pages/offices-section";
import { PageHero } from "@/components/pages/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { RelatedPages } from "@/components/pages/related-pages";
import { CONTACT, OFFICES } from "@/data/company";
import { ORGANIZATION_ID, breadcrumbSchema, graph } from "@/lib/schema";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

const PATH = "/contact-us";
const TITLE = "Contact Topaz Events | Event Management Company UAE";
const DESCRIPTION =
  "Get in touch with Topaz Events. Offices in Sharjah, Dubai and Abu Dhabi, a proposal back within one working day, and WhatsApp on +971 50 277 9072.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/projects/sharjah-judicial-forum.webp",
});

const CRUMBS = [{ label: "Contact Us", href: PATH }];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "ContactPage",
            "@id": `${absoluteUrl(PATH)}#webpage`,
            url: absoluteUrl(PATH),
            name: TITLE,
            description: DESCRIPTION,
            about: { "@id": ORGANIZATION_ID },
            inLanguage: "en",
          },
          breadcrumbSchema(CRUMBS),
          // One node per office so a local search can resolve the nearest
          // branch rather than only the Sharjah head office.
          ...OFFICES.map((office) => ({
            "@type": "LocalBusiness",
            "@id": `${absoluteUrl(PATH)}#${office.city.toLowerCase().replace(/\s+/g, "-")}`,
            name: `Topaz Events — ${office.city}`,
            parentOrganization: { "@id": ORGANIZATION_ID },
            telephone: CONTACT.phone,
            email: CONTACT.email,
            openingHours: CONTACT.hoursSpec,
            address: {
              "@type": "PostalAddress",
              streetAddress: office.lines.join(", "),
              addressLocality: office.city,
              addressCountry: "AE",
            },
          })),
        )}
      />

      <PageShell>
        <PageHero
          eyebrow="Contact us"
          title="Let's talk about"
          accent="your event"
          tagline="A proposal built on your brief, back within a working day."
          lede="Tell us the date, the venue and roughly how many guests you are expecting. Our team will come back with a costed plan covering management, production and anything you need from our own rental inventory."
          image="/projects/sharjah-judicial-forum.webp"
          imageAlt="The Sharjah Judicial Department forum produced by Topaz Events"
          crumbs={CRUMBS}
          actions={[
            { label: "WhatsApp us", href: CONTACT.whatsapp },
            { label: "Call the team", href: CONTACT.phoneHref },
          ]}
        />

        <ContactSection />

        <OfficesSection />

        <RelatedPages
          slugs={["event-management", "all-rental-services", "portfolio"]}
          label="Before you write"
          title="Worth a look first"
        />
      </PageShell>
    </>
  );
}
