# OpenGraph Image Requirements

## Current Status

⚠️ **Action Required**: Create a proper OpenGraph (OG) image for social media sharing.

## Specifications

- **Dimensions**: 1200 x 630 pixels (exact)
- **Format**: PNG or JPG
- **File Name**: `og-image.png`
- **Location**: `/public/og-image.png`
- **File Size**: Keep under 1MB for optimal loading

## Design Recommendations

1. **Include your logo** - Make it prominent but not overwhelming
2. **Add tagline** - "The final one is the difference between almost and everything"
3. **Use brand colors** - Black background with white/accent text (matching your site)
4. **Keep text large** - Will be displayed small on social platforms
5. **Safe zone** - Keep important content within the center 1200x630 area (some platforms crop edges)
6. **Test on multiple platforms** - Twitter, Facebook, LinkedIn all display differently

## Design Tools

- **Figma** - Professional design tool (free tier available)
- **Canva** - Easy-to-use with templates (has OG image templates)
- **Adobe Photoshop/Illustrator** - If you have access
- **Online generators**:
  - https://www.opengraph.xyz/
  - https://www.bannerbear.com/tools/social-image-generator/

## Brand Elements to Include

- Logo: `/public/onebytenwhitewithname.svg` or `/public/logo.svg`
- Typography: Playfair Display (serif) for headlines
- Color scheme: Black background (#000000) with white text
- Accent: Subtle blue/light gradient (optional)

## Testing Your OG Image

After creating the image, test how it looks on various platforms:

1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **Generic OG Checker**: https://www.opengraph.xyz/url/

## Current Implementation

The OG image is referenced in:

- `app/layout.tsx` - OpenGraph metadata
- `app/layout.tsx` - Twitter card metadata

Once you create `/public/og-image.png`, it will automatically be used for all social media sharing.

## Temporary Solution

Currently using a placeholder path. The site will function fine, but social media sharing won't show an image preview until you add the actual image file.
