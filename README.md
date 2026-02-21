# IDAhope Therapy & Wellness

Website for Emily Wolf, LMFT — idahopetherapy.com

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Vercel deployment

## Setup

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
npx vercel
```

Then add custom domain `idahopetherapy.com` in Vercel dashboard.

## Images
All images are in `/public/images/`. Replace as needed:
- `emily-wolf.jpg` — Emily's headshot
- `landscape.jpg` — Idaho nature photo (quote break section)
- `blog-teens.jpg`, `blog-food.jpg`, `blog-grounding.jpg` — Blog thumbnails
- `logo.png` — IDAhope logo (sage green, red heart)
- `logo-footer.png` — Smaller footer logo

## SEO
- Schema markup (LocalBusiness + Person) in layout.tsx
- Auto-generated sitemap.xml and robots.txt
- Meta tags per page
- Service-specific landing pages ready for content

## TODO
- [ ] Wire contact form to email service (Formspree/Resend)
- [ ] Add Google Search Console verification
- [ ] Set up Google Business Profile
- [ ] Add service page content
- [ ] Connect Dixie agent for blog CMS
