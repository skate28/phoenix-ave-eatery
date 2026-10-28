# Famous Sandwiches — architecture

Pitch site for a neighborhood breakfast and sandwich counter in Murray Hill, Jacksonville.
Next.js App Router · React · TypeScript · Tailwind CSS v4 · framer-motion · lucide-react · zod.

Folder layout mirrors `skate28/uncle-charlies`. The design is new: a retro diner-counter look — ketchup red,
mustard, diner-booth teal, cream counter-top and coffee-black ink; Bowlby One (sign lettering), Shrikhand
(script) and Work Sans (body); checkerboard floor-tile bands, sunburst rays, booth pinstripes, a guest-check card,
chunky drop-shadow buttons.

## Files

| Owner | Files |
| --- | --- |
| **Leads** | `src/content/site.ts` (data only), `public/images/` |
| **Code** | `src/app/`, `src/components/`, `src/lib/`, `src/content/types.ts`, `src/content/index.ts`, config, docs |

```
src/
  app/          layout (metadata, robots), page, robots.ts, sitemap.ts, icon, OG/Twitter images, not-found
  components/   one file per section + small client islands (hero-title, hero-art, menu-tabs, shop-status, reveal)
  content/      types.ts (contract), index.ts (the single import point), site.ts (data)
  lib/          pure helpers: hours, menu, money, ordering, reviews, photos, maps, contact, nav, faq, indexing, site-url
public/images/  real photos only
```

## How content is wired

Components import content only via `import { site } from "@/content"` (`src/content/index.ts`).
Code-owned photo maps live in `src/lib/photos.ts` (`PHOTO_ITEM`, `CATEGORY_PHOTO` = the photo beside a menu tab).

## Page order

Header (checker band, wordmark, section links, call pill) → Hero (block + script sign lettering, tagline, rating
chip and live open/closed pill when present, Call + Directions, hero photo or illustrated spinning badge) → ticker
(menu categories, else cuisine/neighborhood/street/phone) → Menu (tabs) → About (photo or guest-check card) →
Reviews → Photos → Order → tap-to-call band (only when there are no ordering links) → Hours & location (map) → FAQ → Footer.
Phones get a sticky Call / Menu / Directions bar.

Every content section returns `null` when its content is empty, and its header link disappears with it.

## Reviews

`src/lib/reviews.ts`. The Reviews section renders only when at least one testimonial has a quote and a
`sourceLabel`; it shows rating badges, then verbatim quotes with optional stars and the source label (linked when
`sourceUrl` is http(s)). `Testimonial` has no author field. No Review/AggregateRating JSON-LD.

## Indexing

Off. Only `ALLOW_INDEXING=true` enables it (owner sign-off). Otherwise robots.txt disallows `/`, metadata robots
is `noindex, nofollow` (also googleBot), and every response sends `X-Robots-Tag: noindex, nofollow`.

## Not on this site

No "Coming soon" cards, text pre-orders, AI phone answering, catering, or waitlist UI. The types don't carry
those fields. No AI-generated or stock photos: without real photos the design uses type, color, patterns and icons.

## Deploy

Vercel project `famous-sandwiches`, Next.js preset, repo root, connected to GitHub (`main` deploys production).
No env vars required. Set `ALLOW_INDEXING=true` only after owner sign-off.
