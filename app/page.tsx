import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

/**
 * 1/10 Landing Page
 * Hybrid theme: 90% neutral (black/white/gray) + 10% accent (vibrant gradient)
 * Server-rendered for SEO and accessibility
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden gradient-background">
      {/* Main Hero Section */}
      <main className="relative z-10 flex-1 flex items-center justify-center">
        <HeroSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* TODO: Add sitemap generator script and link in robots.txt */}
      {/* TODO: Replace placeholder OG image with final branded image */}
    </div>
  );
}
