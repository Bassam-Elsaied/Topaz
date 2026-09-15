import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Outfit } from "next/font/google";
import { Preloader } from "@/components/layout/preloader";
import { COMPANY_NAME, SITE_URL } from "@/data/company";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  display: "swap",
});

const TITLE = "Topaz Events | Leading Event Management Company UAE";
const DESCRIPTION =
  "Topaz is a 360-degree event management company in Sharjah, Dubai and Abu Dhabi, delivering corporate events, gala dinners, exhibitions and full AV production.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description:
      "Bring your events to life with Topaz — a leading event management company across Sharjah, Dubai and Abu Dhabi.",
    type: "website",
    url: "/",
    siteName: COMPANY_NAME,
    locale: "en_AE",
    images: [{ url: "/hero-poster.webp", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/hero-poster.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} ${cormorant.variable} min-h-full bg-bg font-display text-text`}
      >
        {/* Ahead of the page so it is painted — and focused — first. */}
        <Preloader />
        {children}
      </body>
    </html>
  );
}
