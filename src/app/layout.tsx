import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://growthagent.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GrowthAgent AI - Your AI-Powered Sales Team",
    template: "%s | GrowthAgent AI",
  },
  description:
    "GrowthAgent AI researches leads, enriches contact data, personalizes outreach, tracks replies, automates follow-ups, books meetings, and keeps CRM records clean.",
  keywords: [
    "AI sales automation",
    "AI outbound",
    "lead research",
    "email automation",
    "CRM automation",
    "sales agents",
    "autonomous sales team",
  ],
  authors: [{ name: "GrowthAgent AI" }],
  openGraph: {
    title: "GrowthAgent AI - Your AI-Powered Sales Team",
    description:
      "An autonomous AI sales team for research, enrichment, outreach, replies, follow-ups, meetings, and CRM.",
    url: siteUrl,
    siteName: "GrowthAgent AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthAgent AI - Your AI-Powered Sales Team",
    description:
      "Automate prospect research, personalized outreach, reply tracking, follow-ups, meetings, and CRM operations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "GrowthAgent AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-powered sales automation platform that acts like a small autonomous sales team.",
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
