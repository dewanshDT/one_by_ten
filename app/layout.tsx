import type { Metadata } from "next";
import { Geist, Geist_Mono, Bentham } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bentham = Bentham({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bentham",
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
        url: "/og-1by10.png",
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
    images: ["/og-1by10.png"],
  },
  alternates: {
    canonical: "https://1by10.com/",
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
        className={`${geistSans.variable} ${geistMono.variable} ${bentham.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
