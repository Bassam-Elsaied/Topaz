import Link from "next/link";
import { BlogToc } from "@/components/blog/blog-toc";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { PageShell } from "@/components/layout/page-shell";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { CONTACT } from "@/data/company";
import {
  POLICY_HIGHLIGHTS,
  POLICY_SECTIONS,
  POLICY_UPDATED,
} from "@/data/privacy";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { slugify } from "@/lib/slug";

const PATH = "/privacy-policy";
const TITLE = "Privacy Policy | Topaz Event Organizers LLC";
const DESCRIPTION =
  "How Topaz Event Organizers LLC collects, uses, shares and safeguards the personal information you provide through topazevent.net.";

export const metadata = {
  ...pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH }),
  // A policy page competing for search traffic helps nobody; it exists so the
  // people who go looking for it can read it.
  robots: { index: true, follow: true },
};

const CRUMBS = [{ label: "Privacy Policy", href: PATH }];

const CONTACT_ID = "contact-us";

// Anchors for the sections and the scroll-spy rail. Contact is authored inline
// below the data-driven sections, so it is appended by hand here.
const HEADINGS = [
  ...POLICY_SECTIONS.map((section) => ({
    id: slugify(section.heading),
    text: section.heading,
  })),
  { id: CONTACT_ID, text: "Contact us" },
];

const updatedLabel = new Date(POLICY_UPDATED).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
          breadcrumbSchema(CRUMBS),
        )}
      />

      <PageShell>
        <article
          id="top"
          className="mx-auto w-full max-w-(--container-max) px-6 pb-24 pt-36 md:px-12 md:pb-32 md:pt-48"
        >
          <Reveal>
            <Breadcrumbs crumbs={CRUMBS} />
            <div className="mt-8">
              <SectionLabel>Legal</SectionLabel>
            </div>
            <h1
              className="reveal mt-6 max-w-[16ch] font-display text-[clamp(34px,5.6vw,72px)] font-bold uppercase leading-[0.92] tracking-[-0.025em]"
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              Privacy
              <span className="block text-gold">policy</span>
            </h1>
            <p
              className="reveal mt-6 max-w-[62ch] font-sans text-[15px] leading-[1.8] text-text-muted md:text-[16px]"
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              This policy explains what Topaz Event Organizers LLC collects when
              you use our website, how we use it, and the choices you have. It
              applies to{" "}
              <Link
                href="/"
                className="text-gold underline-offset-4 hover:underline"
              >
                topazevent.net
              </Link>{" "}
              and the enquiries you send through it.
            </p>
            <p
              className="reveal mt-6 font-sans text-[13px] uppercase tracking-[0.12em] text-text-muted"
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            >
              Last updated{" "}
              <time dateTime={POLICY_UPDATED} className="text-text">
                {updatedLabel}
              </time>
            </p>
          </Reveal>

          {/* Plain-language gist above the fold, before the full text. */}
          <Reveal>
            <ul className="reveal mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {POLICY_HIGHLIGHTS.map((highlight, index) => (
                <li
                  key={highlight.title}
                  className="reveal relative overflow-hidden rounded-lg border border-white/10 bg-surface/40 p-6"
                  style={
                    {
                      "--reveal-delay": `${index * 60}ms`,
                    } as React.CSSProperties
                  }
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gold/50"
                  />
                  <h2 className="flex items-start gap-3 font-display text-[15px] font-bold uppercase leading-[1.25] tracking-[0.01em] md:text-[16px]">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-gold"
                    />
                    {highlight.title}
                  </h2>
                  <p className="mt-3 font-sans text-[13.5px] leading-[1.7] text-text-muted">
                    {highlight.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 border-t border-white/10 pt-12 lg:grid-cols-[minmax(0,200px)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[minmax(0,210px)_minmax(0,1fr)_minmax(0,300px)]">
            {/* Scroll-spy rail, reused from the blog. Sticky on desktop, dropped
                on narrow screens where the content reads top to bottom. */}
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <BlogToc headings={HEADINGS} />
              </div>
            </aside>

            <div className="max-w-[76ch]">
              {POLICY_SECTIONS.map((section) => (
                <section
                  key={section.heading}
                  id={slugify(section.heading)}
                  className="scroll-mt-28 border-b border-white/10 py-10 first:pt-0 md:py-12"
                >
                  <h2 className="font-display text-[19px] font-bold uppercase leading-[1.2] tracking-[0.01em] text-gold md:text-[23px]">
                    {section.heading}
                  </h2>

                  {section.body?.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="mt-5 font-sans text-[15px] leading-[1.85] text-text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.items && (
                    <ul className="mt-5 space-y-3.5">
                      {section.items.map((item) => (
                        <li
                          key={item.slice(0, 24)}
                          className="flex items-start gap-3.5 font-sans text-[15px] leading-[1.8] text-text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2.5 size-1 shrink-0 rotate-45 bg-gold"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section id={CONTACT_ID} className="scroll-mt-28 py-10 md:py-12">
                <h2 className="font-display text-[19px] font-bold uppercase leading-[1.2] tracking-[0.01em] text-gold md:text-[23px]">
                  Contact us
                </h2>
                <p className="mt-5 font-sans text-[15px] leading-[1.85] text-text-muted">
                  If you have questions about this Privacy Policy or about our
                  data practices, write to us at{" "}
                  <Link
                    href={CONTACT.emailHref}
                    className="text-gold underline-offset-4 hover:underline"
                  >
                    {CONTACT.email}
                  </Link>
                  , or call{" "}
                  <Link
                    href={CONTACT.phoneHref}
                    className="text-gold underline-offset-4 hover:underline"
                  >
                    {CONTACT.phone}
                  </Link>
                  .
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact-us"
                    className="rounded-xs bg-gold px-7 py-3.5 font-sans text-[13px] font-bold uppercase leading-none tracking-[0.06em] text-bg transition-colors duration-300 hover:bg-gold-deep"
                  >
                    Contact us
                  </Link>
                  <a
                    href="#top"
                    className="rounded-xs border border-white/25 px-7 py-3.5 font-sans text-[13px] font-semibold uppercase leading-none tracking-[0.06em] text-text transition-colors duration-300 hover:border-gold/60 hover:text-gold"
                  >
                    Back to top
                  </a>
                </div>
              </section>
            </div>

            {/* Right rail: a standing offer of help, so the wide margin beside
                the readable measure carries the one action a policy reader is
                most likely to want. */}
            <aside className="hidden xl:block">
              <div className="sticky top-32 overflow-hidden rounded-lg border border-white/10 bg-surface/40 p-6">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gold/50"
                />
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
                  Your data, your call
                </p>
                <p className="mt-4 font-sans text-[13.5px] leading-[1.7] text-text-muted">
                  Questions about this policy, or want your information updated
                  or removed? Our team will help.
                </p>

                <dl className="mt-6 space-y-4 border-t border-white/10 pt-6">
                  <div>
                    <dt className="font-sans text-[11px] uppercase tracking-[0.12em] text-text-muted">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <Link
                        href={CONTACT.emailHref}
                        className="font-sans text-[14px] text-text transition-colors duration-300 hover:text-gold"
                      >
                        {CONTACT.email}
                      </Link>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-sans text-[11px] uppercase tracking-[0.12em] text-text-muted">
                      Phone
                    </dt>
                    <dd className="mt-1">
                      <Link
                        href={CONTACT.phoneHref}
                        className="font-sans text-[14px] text-text transition-colors duration-300 hover:text-gold"
                      >
                        {CONTACT.phone}
                      </Link>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-sans text-[11px] uppercase tracking-[0.12em] text-text-muted">
                      Hours
                    </dt>
                    <dd className="mt-1 font-sans text-[14px] text-text">
                      {CONTACT.hours}
                    </dd>
                  </div>
                </dl>

                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 flex w-full items-center justify-center rounded-xs bg-gold px-5 py-3 font-sans text-[12px] font-bold uppercase leading-none tracking-[0.06em] text-bg transition-colors duration-300 hover:bg-gold-deep"
                >
                  Message us on WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </article>
      </PageShell>
    </>
  );
}
