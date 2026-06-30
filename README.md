# Talking to Titans

The digital home for the Talking to Titans movement — helping pastors disciple the
business leaders shaping tomorrow, with the **Kingdom Leadership Collective** as the
flagship discipleship experience.

A cinematic, editorial, premium experience built to feel timeless — never trendy.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** with a bespoke luxury-editorial design system
- **Framer Motion** for slow, refined reveals & parallax
- **Lucide** icons
- Fully responsive, accessible (skip link, reduced-motion aware), SEO-ready
  (per-page metadata, Open Graph, `sitemap.xml`, `robots.txt`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/                      Routes (App Router)
  page.tsx                Homepage (Hero → Closing)
  about/                  Our story, Andrew, beliefs, the movement
  kingdom-leadership-collective/   Flagship experience + founding-member form
  for-pastors/            The big idea, the gift, four promises
  resources/              Resource library + mobile app + newsletter
  refer/                  Refer a leader (pastor referral form)
  contact/                Contact form
  podcast/ conference/    "Coming soon" experiences
  layout.tsx              Header, Footer, fonts, metadata, sticky CTA
  globals.css             Base layer + editorial component classes
components/
  layout/                 Header (mega menu), Footer, Logo, StickyCTA
  sections/               Composable page sections (Hero, Problem, Story, ...)
  ui/                     Primitives (Button, Container, SectionHeader, Reveal, Media, ...)
  forms/                  Contact, Refer, Newsletter, Field
lib/
  nav.ts                  Navigation + mega-menu data
  content.ts              Editorial content (formation, promises, beliefs, ...)
  images.ts               Curated photography (swap URLs or wire to a CMS)
  utils.ts                cn() class helper
tailwind.config.ts        Design tokens: charcoal / cream / gold, type scale, motion
```

## Design system

- **Palette:** near-black ink, warm cream, muted gold, charcoal. No trendy gradients,
  no bubbly rounded UI — rectangles, refined shadows, luxury spacing.
- **Type:** Playfair Display (editorial serif display) + Inter (sans body).
- **Motion:** subtle, slow `cubic-bezier(0.16, 1, 0.3, 1)` fades and reveals; honors
  `prefers-reduced-motion`.

## CMS-ready / next steps

- **Content** lives in `lib/content.ts`, `lib/nav.ts`, and `lib/images.ts` — these are
  the seams to wire into a CMS (Sanity, Contentful, etc.).
- **Photography** currently uses curated Unsplash placeholders in `lib/images.ts`.
  Replace with the production photo library (or CMS image fields) — every page updates
  from that one file.
- **Forms** (Contact, Refer, Newsletter) are wired with success states; connect the
  `onSubmit` handlers to your CRM / ESP / API route.
