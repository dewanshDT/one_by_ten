import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Minimal Luxury Typography
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "1/10 — Design · Dev · Marketing for startups",
  description: "1/10 (one by ten) — we are the 1/10 that helps startups reach success. Design, development and growth marketing.",
  keywords: ["1/10", "one by ten", "startup design", "web development", "growth marketing", "design agency", "B2B services"],
  authors: [{ name: "1/10" }],
  openGraph: {
    title: "1/10 — Design · Dev · Marketing for startups",
    description: "We are the 1/10 that launches your 9/10. Design, development and growth marketing for startups.",
    type: "website",
    locale: "en_US",
    siteName: "1/10",
    images: [
      {
        url: "/og-onebyten.png",
        width: 1200,
        height: 630,
        alt: "1/10 - Design · Dev · Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1/10 — Design · Dev · Marketing for startups",
    description: "We are the 1/10 that launches your 9/10.",
    images: ["/og-onebyten.png"],
  },
  alternates: {
    canonical: "https://onebyten.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
