import { AboutSection } from "@/components/about-section";
import { ClientLogos } from "@/components/client-logos";
import { ContactSection } from "@/components/contact-section";
import { EventsShowcase } from "@/components/events-showcase";
import { FaqSection } from "@/components/faq-section";
import { FlipLeadVideo } from "@/components/flip-lead-video";
import { Hero } from "@/components/hero";
import { ProductionSection } from "@/components/production-section";
import { ServicesSection } from "@/components/services-section";
import { ShowcaseSection } from "@/components/showcase-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StatsSection } from "@/components/stats-section";
import { WhatsappButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <SiteHeader />
      <main className="relative z-[5]">
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
          <EventsShowcase />
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
        <FlipLeadVideo />
      </main>
      <WhatsappButton />
    </>
  );
}
