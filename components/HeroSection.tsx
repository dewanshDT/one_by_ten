'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace email placeholder with real mailbox provider (Formspree, Mailchimp, or API route at /api/subscribe)
    setTimeout(() => {
      alert(`Thanks for signing up! We'll notify ${email} when we launch.`);
      setEmail('');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 relative">
      {/* Accent spark - subtle animated element with 1/10 gradient */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 opacity-20 pointer-events-none">
        <div
          className="w-full h-full rounded-full blur-3xl accent-spark"
          style={{
            background: 'radial-gradient(circle, var(--accent-start) 0%, var(--accent-end) 40%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12 flex justify-center"
        >
          <Image
            src="/1by10-mark.svg"
            alt="1/10"
            width={80}
            height={40}
            className="w-16 md:w-20 h-auto opacity-90"
            priority
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight"
          style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
        >
          We are the{' '}
          <span
            className="bg-accent-gradient bg-clip-text"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            1/10
          </span>{' '}
          that launches your{' '}
          <span className="italic font-normal">9/10</span>.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="text-lg md:text-xl text-muted mb-12 max-w-2xl mx-auto"
          style={{ color: 'var(--muted)' }}
        >
          Design · Develop · Marketing — we add the one thing that gets startups to success.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#contact"
            className="btn-accent px-8 py-4 rounded-lg font-semibold text-base inline-block w-full sm:w-auto"
            aria-label="Get started with 1/10"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="btn-secondary px-8 py-4 rounded-lg font-semibold text-base inline-block w-full sm:w-auto"
            aria-label="Learn more about 1/10"
          >
            Learn More
          </a>
        </motion.div>

        {/* Email capture form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-md mx-auto"
        >
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              aria-label="Email address for newsletter"
              data-analytics="newsletter_signup"
              className="flex-1 px-6 py-4 rounded-lg text-foreground placeholder-muted focus-accent transition-all"
              style={{
                background: 'var(--surface-light)',
                border: '1px solid rgba(154, 160, 166, 0.2)',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className="btn-accent px-8 py-4 rounded-lg font-semibold whitespace-nowrap"
              aria-label="Subscribe to newsletter"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Notify Me'}
            </button>
          </form>
          <p className="text-xs text-muted mt-3" style={{ color: 'var(--muted)' }}>
            Join our newsletter. No spam, ever.
          </p>
        </motion.div>

        {/* TODO: Add analytics tracking integration here */}
        {/* TODO: Hook up newsletter form to actual email service provider */}
      </div>
    </section>
  );
}
