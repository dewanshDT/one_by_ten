'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="py-12 px-6 border-t"
      style={{ borderColor: 'rgba(154, 160, 166, 0.1)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Logo + Copyright */}
          <div className="flex items-center gap-4">
            <Image
              src="/1by10-mark.svg"
              alt="1/10"
              width={40}
              height={20}
              className="w-10 h-auto opacity-70"
            />
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              © {currentYear} 1/10. All rights reserved.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: 'var(--muted)' }}>
            <a
              href="/values"
              className="hover:text-foreground transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
            >
              Company Values
            </a>
            <a
              href="/jobs"
              className="hover:text-foreground transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
            >
              Jobs
            </a>
            <a
              href="/newsletter"
              className="hover:text-foreground transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
            >
              Newsletter
            </a>
            <a
              href="/blog"
              className="hover:text-foreground transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
            >
              Blog
            </a>
          </nav>

          {/* Right: Social Links */}
          {/* TODO: Add actual social media URLs */}
          <div className="flex gap-6 text-sm" style={{ color: 'var(--muted)' }}>
            <a
              href="https://twitter.com/1by10"
              className="hover:text-foreground transition-colors duration-200"
              aria-label="Twitter"
              style={{ color: 'var(--muted)' }}
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/1by10"
              className="hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
              style={{ color: 'var(--muted)' }}
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/1by10"
              className="hover:text-foreground transition-colors duration-200"
              aria-label="Instagram"
              style={{ color: 'var(--muted)' }}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
