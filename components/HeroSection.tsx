'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Coffee, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get the Google Sheets URL from environment variable
      const sheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
      
      if (!sheetsUrl || sheetsUrl.includes('YOUR_SCRIPT_ID')) {
        // Fallback if not configured yet
        toast.info("Thanks for your interest! We'll be in touch soon.", {
          description: "Note: Please configure Google Sheets integration",
          duration: 4000,
        });
        setEmail('');
        setIsSubmitting(false);
        return;
      }

      // Send data to Google Sheets via Apps Script
      const response = await fetch(sheetsUrl, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      // Success! (no-cors mode doesn't return response, so we assume success)
      toast.success("Thanks for signing up!", {
        duration: 5000,
      });
      setEmail('');
      
    } catch (error) {
      console.error('Error submitting email:', error);
      toast.error("Oops! Something went wrong", {
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
          className="mb-16 flex flex-col gap-4 items-center justify-center"
        >
          <Image
            src="/onebytenwhitewithname.svg"
            alt="1/10"
            width={80}
            height={40}
            className="w-16 md:w-20 h-auto opacity-80"
            priority
          />
          <Image
            src="/one_by_ten.svg"
            alt="1/10"
            width={80}
            height={40}
            className="w-24 md:w-32 h-auto opacity-80"
            priority
          />
          {/* <motion.p
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
        </motion.p> */}
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
         We help in making your Marketing, Revenue, Product, Tech and Design 10/10.
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
              className="btn-primary px-6 py-3 rounded-md text-sm whitespace-nowrap flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Subscribe to newsletter"
              disabled={isSubmitting}
            >

              {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Coffee size={16} />}
              Get Coffee              
            </button>
          </form>
          <p className="text-xs mt-3" style={{ color: 'var(--muted)' }}>
          Share your contact with us. If we are not able to solve your problem, coffee is on us.
          </p>
        </motion.div>

        {/* TODO: Add analytics tracking integration here */}
        {/* TODO: Hook up newsletter form to actual email service provider */}
      </div>
    </section>
  );
}
