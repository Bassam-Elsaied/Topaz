import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { RelatedPages } from "@/components/pages/related-pages";
import { SectionLabel } from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Page not found | Topaz Events",
  description:
    "The page you are looking for is not on this site. Browse our event management services, portfolio and rental catalogue instead.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageShell>
      <section className="mx-auto flex w-full max-w-(--container-max) flex-col items-start px-6 pb-20 pt-40 md:px-12 md:pb-28 md:pt-56">
        <SectionLabel>Error 404</SectionLabel>

        <h1 className="mt-6 max-w-[14ch] font-display text-[clamp(38px,6.4vw,88px)] font-bold uppercase leading-[0.92] tracking-[-0.025em]">
          This page is
          <span className="block text-gold">off the run sheet</span>
        </h1>

        <p className="mt-6 max-w-[52ch] font-sans text-[15px] leading-[1.8] text-text-muted md:text-[16px]">
          The link you followed does not lead anywhere on this site. It may have
          moved, or the address may have a typo in it.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="rounded-xs bg-gold px-7 py-3.5 font-sans text-[13px] font-bold uppercase leading-none tracking-[0.06em] text-bg transition-colors duration-300 hover:bg-gold-deep"
          >
            Back to home
          </Link>
          <Link
            href="/contact-us"
            className="rounded-xs border border-white/25 px-7 py-3.5 font-sans text-[13px] font-semibold uppercase leading-none tracking-[0.06em] text-text transition-colors duration-300 hover:border-gold/60 hover:text-gold"
          >
            Contact us
          </Link>
        </div>
      </section>

      <RelatedPages
        slugs={["event-management", "all-rental-services", "portfolio"]}
        label="Try these"
        title="Popular pages"
      />
    </PageShell>
  );
}
