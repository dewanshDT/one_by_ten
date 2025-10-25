import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "sonner";
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
  title: "One by Ten - Design · Dev · Marketing for startups",
  description: "1/10 (one by ten) — The final one is the difference between almost and everything. Design, development and growth marketing.",
  keywords: ["1/10", "one by ten", "startup design", "web development", "growth marketing", "design agency", "B2B services"],
  authors: [{ name: "One by Ten" }],
  openGraph: {
    title: "One by Ten - Design · Dev · Marketing for startups",
    description: "The final one is the difference between almost and everything. Design, development and growth marketing for startups.",
    type: "website",
    locale: "en_US",
    siteName: "One by Ten",
    images: [
      {
        url: "/og-onebyten.png",
        width: 1200,
        height: 630,
        alt: "One by Ten - Design · Dev · Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One by Ten - Design · Dev · Marketing for startups",
    description: "The final one is the difference between almost and everything.",
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
        <Toaster 
          position="bottom-center"
          theme="dark"
          toastOptions={{
            style: {
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              color: 'var(--foreground)',
            },
          }}
        />
      </body>
    </html>
  );
}
