import { AboutSection } from "@/components/home/about-section";
import { ClientLogos } from "@/components/home/client-logos";
import { ContactSection } from "@/components/home/contact-section";
import { EventsShowcase } from "@/components/home/events-showcase";
import { FaqSection } from "@/components/home/faq-section";
import { FlipLeadVideo } from "@/components/home/flip-lead-video";
import { Hero } from "@/components/home/hero";
import { ProductionSection } from "@/components/home/production-section";
import { ServicesSection } from "@/components/home/services-section";
import { ShowcaseSection } from "@/components/home/showcase-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { StatsSection } from "@/components/home/stats-section";
import { StructuredData } from "@/components/seo/structured-data";
import { WhatsappButton } from "@/components/layout/whatsapp-button";
import { reelCard } from "@/data/cards";
import { LEAD_PROJECT, TRACK_PROJECTS } from "@/data/projects";

export default function Home() {
  return (
    <>
      <StructuredData />
      <SmoothScroll />
      <SiteHeader />
      <main className="relative z-5">
        {/* The hero is fixed behind the page; the spacer reserves its viewport
            height so the sections below scroll up over the still video. */}
        <Hero />
        <div
          aria-hidden="true"
          className="h-svh min-h-140 landscape:min-h-svh md:min-h-180"
        />

        <div className="relative z-10 overflow-clip bg-bg">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-3 overflow-x-clip"
          >
            <div className="noise-overlay" />
            <div className="noise-overlay noise-overlay--2" />
          </div>

          <ClientLogos />
          <ShowcaseSection />
          <EventsShowcase
            lead={reelCard(LEAD_PROJECT)}
            projects={TRACK_PROJECTS.map(reelCard)}
          />
          <AboutSection />
          <ServicesSection />
          <ProductionSection />
          <StatsSection />
          <FaqSection />
          <ContactSection />
          <SiteFooter />
        </div>

        {/* Sits above the content column so it can fly between the two
            sections without being clipped or painted over. */}
        <FlipLeadVideo project={reelCard(LEAD_PROJECT)} />
      </main>
      <WhatsappButton />
    </>
  );
}
