import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AutoplayFilm } from "@/components/pages/autoplay-film";
import { ChecklistBand } from "@/components/pages/checklist-band";
import { CtaBand } from "@/components/pages/cta-band";
import { FaqBlock } from "@/components/pages/faq-block";
import { JsonLd } from "@/components/seo/json-ld";
import { NumberedFeatures } from "@/components/pages/numbered-features";
import { OfferingsSection } from "@/components/pages/offerings-section";
import { OverviewSection } from "@/components/pages/overview-section";
import { PageHero } from "@/components/pages/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { RelatedPages } from "@/components/pages/related-pages";
import { SpecGrid } from "@/components/pages/spec-grid";
import { SERVICE_PAGE_MAP, SERVICE_PAGES } from "@/data/service-pages";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

/**
 * Every service and rental page is the same shape filled with different copy,
 * so they are one route driven by `SERVICE_PAGES` rather than ten near-identical
 * files. The static segments beside this one — /portfolio, /team and the rest —
 * take precedence over the dynamic match, and `dynamicParams = false` turns any
 * slug that is not in the data into a 404 instead of an empty render.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = SERVICE_PAGE_MAP.get(slug);
  if (!page) return {};

  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}`,
    image: page.image,
  });
}

export default async function ServiceRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = SERVICE_PAGE_MAP.get(slug);
  if (!page) notFound();

  const path = `/${page.slug}`;
  const crumbs = [{ label: page.nav, href: path }];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            name: page.metaTitle,
            description: page.metaDescription,
            path,
          }),
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: `${page.title} ${page.accent ?? ""}`.trim(),
            description: page.metaDescription,
            path,
            serviceType: page.nav,
          }),
          faqSchema(page.faqs),
        )}
      />

      <PageShell>
        <PageHero
          eyebrow={page.eyebrow}
          title={page.title}
          accent={page.accent}
          tagline={page.tagline}
          lede={page.lede}
          image={page.image}
          imageAlt={page.imageAlt}
          crumbs={crumbs}
          actions={[
            { label: "Request a proposal", href: "/contact-us" },
            { label: "See our work", href: "/portfolio" },
          ]}
        />

        <OverviewSection {...page.overview} />

        {page.film && <AutoplayFilm {...page.film} />}

        {/* Tent rental mirrors the live catalogue-first flow: pick a structure,
            see the fit-out accessories, then read the feature detail. */}
        {page.slug === "tent-rental" ? (
          <>
            {page.catalogue && <SpecGrid {...page.catalogue} />}
            {page.checklist && <ChecklistBand {...page.checklist} />}
            <OfferingsSection {...page.offerings} />
          </>
        ) : (
          <>
            <OfferingsSection {...page.offerings} />
            {page.catalogue && <SpecGrid {...page.catalogue} />}
            {page.checklist && <ChecklistBand {...page.checklist} />}
          </>
        )}

        <NumberedFeatures {...page.reasons} />

        {page.process && (
          <NumberedFeatures
            {...page.process}
            id="process"
            label="How it works"
          />
        )}

        <FaqBlock
          title="Frequently asked"
          accent="questions"
          intro={`The questions we are asked most often about ${page.nav.toLowerCase()} in the UAE.`}
          faqs={page.faqs}
        />

        <RelatedPages slugs={page.related} />

        <CtaBand {...page.cta} />
      </PageShell>
    </>
  );
}
