import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { WhatsappButton } from "@/components/whatsapp-button";

/**
 * Chrome shared by every route except the home page, whose fixed hero needs it
 * assembled differently. The grain is laid over the whole column — content and
 * footer both — so the texture never stops part way down the page.
 */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <SiteHeader />

      <div className="relative overflow-clip bg-bg">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-3 overflow-x-clip"
        >
          <div className="noise-overlay" />
          <div className="noise-overlay noise-overlay--2" />
        </div>

        <main>{children}</main>
        <SiteFooter />
      </div>

      <WhatsappButton />
    </>
  );
}
