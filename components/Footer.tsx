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
      className="py-8 px-6"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Logo + Copyright */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.svg"
              alt="1/10"
              width={40}
              height={20}
              className="w-10 h-auto opacity-60"
            />
            <p className="text-sm font-light" style={{ color: 'var(--muted)' }}>
              © {currentYear} one by ten. All rights reserved.
            </p>
          </div>

          {/* Center: Navigation Links */}
          {/* <nav className="flex flex-wrap justify-center gap-8 text-sm">
            <a
              href="/values"
              className="transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}
            >
              Company Values
            </a>
            <a
              href="/jobs"
              className="transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}
            >
              Jobs
            </a>
            <a
              href="/newsletter"
              className="transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}
            >
              Newsletter
            </a>
            <a
              href="/blog"
              className="transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}
            >
              Blog
            </a>
          </nav> */}

          {/* Right: Social Links */}
          {/* TODO: Add actual social media URLs */}
          <div className="flex gap-8 text-sm">
            {/* <a
              href="https://twitter.com/onebyten"
              className="transition-colors duration-200"
              aria-label="Twitter"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}
            >
              Twitter
            </a> */}
            <a
              href="https://www.linkedin.com/company/one-by-ten/"
              className="transition-colors duration-200"
              aria-label="LinkedIn"
              style={{ color: 'var(--muted)' }}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/one_by_ten"
              className="transition-colors duration-200"
              aria-label="Instagram"
              style={{ color: 'var(--muted)' }}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
