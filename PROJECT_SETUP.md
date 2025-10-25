# One by Ten - Coming Soon Landing Page

A modern, animated "Coming Soon" landing page built with Next.js 16, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Bentham Font** - Elegant serif Google Font for headlines
- **Geist Font** - Modern sans-serif font for body text

## ✨ Features

- ✅ Minimalist full-screen hero section (Browser Company inspired)
- ✅ Subtle fade-in animations on all elements
- ✅ Clean, static background with film grain texture
- ✅ No cursor tracking or distracting background effects
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Simple email capture form (ready for API integration)
- ✅ SEO optimized with meta tags (title, description, Open Graph, Twitter cards)
- ✅ Elegant Bentham serif font for headlines
- ✅ Minimal navigation links
- ✅ Clean footer with social media links placeholder

## 📁 Project Structure

```
one_by_ten/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Home page with gradient background
│   └── globals.css          # Global styles with custom gradient animation
├── components/
│   ├── HeroSection.tsx      # Main hero section with email form
│   └── Footer.tsx           # Footer component with social links
├── public/                  # Static assets
└── package.json             # Dependencies
```

## 🎨 Design Elements

### Color Palette

- **Background**: Charcoal (#1a1a1a) - Clean, static background
- **Text**: Pure White (#ffffff) for headlines, Gray (#9ca3af, #6b7280) for body
- **Buttons**: White backgrounds with subtle transparency for modern feel
- **Borders**: Subtle white borders with low opacity (10-30%)
- **Secondary Accent**: Subtle gold (#d4af37) available for future touches

### Typography

- **Headline Font**: [Bentham](https://fonts.google.com/specimen/Bentham) - Elegant serif font with distinctive character
- **Body Font**: Geist Sans - Clean, modern sans-serif
- **Font Pairing**: Timeless serif headlines with modern sans-serif body text

### Texture & Effects

- **Film Grain**: Animated SVG grain texture overlay (8% opacity)
- **Grain Animation**: Subtle movement every 8 seconds for organic feel
- **No Background Tracking**: Static background, no cursor following effects
- **Minimal Animations**: Only subtle fade-ins, no distracting movements

### Animations

- **Headline**: Subtle fade-in + slight slide-up (0.6s)
- **Button Group**: Fade-in + slide-up (0.6s, delayed 0.2s)
- **Email Form**: Simple fade-in (0.6s, delayed 0.4s)
- **Navigation**: Fade-in (0.6s, delayed 0.5s)
- **Background**: Static with subtle grain animation only
- **Philosophy**: Minimal, non-distracting animations inspired by The Browser Company

## 🚧 TODO: Future Integrations

### 1. Email API Integration

The email form is currently set up with a placeholder alert. To integrate with an email service:

**Location**: `components/HeroSection.tsx` (line 11-16)

**Options**:

- **Mailchimp**: Use `@mailchimp/mailchimp_marketing` package
- **ConvertKit**: Use ConvertKit API
- **Custom Backend**: Create an API route in `app/api/subscribe/route.ts`

**Example API Route** (`app/api/subscribe/route.ts`):

```typescript
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  // TODO: Add your email service integration here
  // Example: await mailchimp.lists.addListMember(...)

  return NextResponse.json({ success: true });
}
```

**Update HeroSection.tsx**:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert("Thanks for signing up!");
      setEmail("");
    }
  } catch (error) {
    console.error("Subscription error:", error);
  }
};
```

### 2. Additional Sections to Add

**About Section** (`components/AboutSection.tsx`):

- Brief company overview
- Team introduction
- Mission statement

**Services Section** (`components/ServicesSection.tsx`):

- Design services detail
- Development offerings
- Marketing capabilities

**Contact Section** (`components/ContactSection.tsx`):

- Contact form
- Office location (if applicable)
- Social media links

### 3. Analytics Integration

Add Google Analytics or similar:

1. Install package: `npm install @next/third-parties`
2. Update `app/layout.tsx`:

```typescript
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
```

### 4. Social Media Links

Update `components/Footer.tsx` (line 23-39) with actual links:

```typescript
<a
  href="https://twitter.com/yourhandle"
  target="_blank"
  rel="noopener noreferrer"
>
  Twitter
</a>
```

## 🔧 Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO Optimization

Current SEO features:

- ✅ Meta title and description
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Theme color for mobile browsers
- ✅ Viewport configuration

**Next Steps**:

- Add `robots.txt`
- Add `sitemap.xml`
- Configure `next-sitemap` package
- Add structured data (JSON-LD)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload .next folder to Netlify
```

## 📝 Customization Guide

### Change Brand Colors

Update `components/HeroSection.tsx` and `app/globals.css`:

- Button colors: White background (`bg-white`) with black text
- Background gradient: `.gradient-background` in globals.css (currently black to charcoal)
- For luxury accents: Use the CSS variable `var(--accent)` (#d4af37) defined in globals.css

### Change Typography

Current setup uses Bentham for headlines. To change fonts, update `app/layout.tsx`:

```typescript
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
```

Then update `components/HeroSection.tsx`:

```typescript
style={{ fontFamily: 'var(--font-playfair), serif' }}
```

### Modify Animations

Edit Framer Motion props in `components/HeroSection.tsx`:

```typescript
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

## 🐛 Troubleshooting

### TailwindCSS classes not working

- Clear `.next` cache: `rm -rf .next`
- Restart dev server

### Framer Motion animations not showing

- Ensure components are client-side: `'use client'` at top of file
- Check browser console for errors

### Build errors

- Run `npm run build` to see detailed errors
- Check TypeScript errors: `npx tsc --noEmit`

## 📄 License

© 2025 One by Ten. All rights reserved.

---

**Built with ❤️ for startups that dream big.**
