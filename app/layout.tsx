import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://talkingtotitans.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Talking to Titans — Helping Pastors Disciple the Leaders Shaping Tomorrow",
    template: "%s · Talking to Titans",
  },
  description:
    "Talking to Titans equips pastors to disciple high-capacity business leaders. The Kingdom Leadership Collective is a year-long discipleship community for CEOs, founders, executives, investors, and marketplace leaders — strengthening, never replacing, the local church.",
  keywords: [
    "Christian business leaders",
    "discipleship",
    "marketplace ministry",
    "Kingdom Leadership Collective",
    "pastors",
    "generosity",
    "executive discipleship",
  ],
  authors: [{ name: "Talking to Titans" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Talking to Titans",
    title: "Talking to Titans — Building Kingdom Builders",
    description:
      "Where pastors send their business leaders to grow in faith, leadership, character, and generosity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talking to Titans — Building Kingdom Builders",
    description:
      "Where pastors send their business leaders to grow in faith, leadership, character, and generosity.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
