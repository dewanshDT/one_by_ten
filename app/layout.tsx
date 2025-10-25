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
  metadataBase: new URL('https://onebyten.com'),
  title: {
    default: "One by Ten - Design · Dev · Marketing for startups",
    template: "%s | One by Ten",
  },
  description: "1/10 (one by ten) — The final one is the difference between almost and everything. We help startups with Marketing, Revenue, Product, Tech and Design excellence.",
  keywords: [
    "1/10",
    "one by ten",
    "startup design",
    "web development",
    "growth marketing",
    "design agency",
    "B2B services",
    "startup consulting",
    "product development",
    "tech consulting",
    "revenue growth",
    "startup marketing"
  ],
  authors: [{ name: "One by Ten", url: "https://onebyten.com" }],
  creator: "One by Ten",
  publisher: "One by Ten",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "One by Ten - Design · Dev · Marketing for startups",
    description: "The final one is the difference between almost and everything. We help startups with Marketing, Revenue, Product, Tech and Design excellence.",
    type: "website",
    locale: "en_US",
    url: "https://onebyten.com",
    siteName: "One by Ten",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "One by Ten - Design · Dev · Marketing",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One by Ten - Design · Dev · Marketing for startups",
    description: "The final one is the difference between almost and everything.",
    images: ["/android-chrome-512x512.png"],
    creator: "@onebyten",
    site: "@onebyten",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: "https://onebyten.com",
  },
  verification: {
    // google: 'your-google-verification-code', // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'One by Ten',
    alternateName: '1/10',
    url: 'https://onebyten.com',
    logo: 'https://onebyten.com/logo.svg',
    description: 'The final one is the difference between almost and everything. We help startups with Marketing, Revenue, Product, Tech and Design excellence.',
    foundingDate: '2024',
    sameAs: [
      'https://www.linkedin.com/company/one-by-ten/',
      'https://instagram.com/one_by_ten',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Business',
      email: 'hello@onebyten.com',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    offers: {
      '@type': 'Service',
      serviceType: ['Design', 'Development', 'Marketing', 'Product Consulting', 'Technical Consulting'],
      areaServed: 'Worldwide',
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'One by Ten',
    url: 'https://onebyten.com',
    description: 'Design, Development, and Marketing services for startups',
    publisher: {
      '@type': 'Organization',
      name: 'One by Ten',
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
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
