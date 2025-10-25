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
    <section className="flex items-center justify-center px-6 py-12 relative w-full">
      {/* Micro spark - subtle pulsing light near headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none">
        <div
          className="w-full h-full rounded-full blur-3xl spark-accent"
          style={{
            background: 'radial-gradient(circle, rgba(200, 220, 255, 0.08) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16 flex flex-col gap-2 items-center justify-center"
        >
          <Image
            src="/onebytenwhitewithname.svg"
            alt="1/10"
            width={80}
            height={40}
            className="w-16 md:w-20 h-auto opacity-80"
            priority
          />
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="text-md md:text-lg leading-relaxed font-medium"
          style={{ 
            color: 'var(--muted)',
            fontFamily: 'var(--font-inter), sans-serif',
          }}
        >
          ONE BY TEN
        </motion.p>
        </motion.div>

        {/* Main Headline - Playfair Display serif */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="font-display text-5xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-[1.1] tracking-tight"
          style={{ 
            fontFamily: 'var(--font-playfair), Georgia, serif',
            // fontFamily: 'var(--font-inter), sans-serif',
            fontWeight: 400,

          }}
        >
          {/* We are the <span className="italic">1/10</span> that launches your{' '}
          <span className="font-light">9/10</span>. */}
          The final one is the difference between <span className="italic">almost</span> and <span className="font-light">everything</span>.
        </motion.h1>

        {/* Subheadline - Inter body font */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed"
          style={{ 
            color: 'var(--muted)',
            fontFamily: 'var(--font-inter), sans-serif',
          }}
        >
          Design · Develop · Marketing — we add the one thing that gets startups to success.
        </motion.p>

        {/* CTA Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-20"
        >
          <a
            href="#contact"
            className="btn-primary px-6 py-3 rounded-md text-sm inline-block w-full sm:w-auto"
            aria-label="Get started with 1/10"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="btn-secondary px-6 py-3 rounded-md text-sm inline-block w-full sm:w-auto"
            aria-label="Learn more about 1/10"
          >
            Learn More
          </a>
        </motion.div> */}

        {/* Email capture form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-md mx-auto"
        >
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              aria-label="Email address for newsletter"
              data-analytics="newsletter_signup"
              className="input-luxury flex-1 px-4 py-3 rounded-md text-sm transition-all"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className="btn-primary px-6 py-3 rounded-md text-sm whitespace-nowrap"
              aria-label="Subscribe to newsletter"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Notify Me'}
            </button>
          </form>
          <p className="text-xs mt-3" style={{ color: 'var(--muted)' }}>
            Join our newsletter. No spam, ever.
          </p>
        </motion.div>

        {/* TODO: Add analytics tracking integration here */}
        {/* TODO: Hook up newsletter form to actual email service provider */}
      </div>
    </section>
  );
}
