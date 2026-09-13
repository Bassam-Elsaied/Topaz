import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Outfit } from "next/font/google";
import { Preloader } from "@/components/preloader";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://topazevent.net"),
  title: "Topaz Events | Leading Event Management Company UAE",
  description:
    "Topaz is a 360-degree event management company in Sharjah, Dubai and Abu Dhabi. With over 10 years of experience we deliver corporate events, gala dinners, exhibitions and full AV production across the UAE.",
  openGraph: {
    title: "Topaz Events | Leading Event Management Company UAE",
    description:
      "Bring your events to life with Topaz — a leading event management company across Sharjah, Dubai and Abu Dhabi.",
    type: "website",
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
