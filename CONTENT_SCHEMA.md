# Content schema — Famous Sandwiches

Leads owns `src/content/site.ts` and `public/images/`. Replace `site.ts` wholesale; components never hard-code
business copy, prices, hours, or photos.

- Types: `src/content/types.ts`. `site.ts` is data only:
  ```ts
  import type { SiteContent } from "./types";
  export const site: SiteContent = { ... };
  ```
- Shapes follow skate28/uncle-charlies.
- Empty strings, empty arrays, `null`, and absent optional fields hide the matching UI. Nothing renders "coming soon".

## Rules

- Do not invent prices, hours, reviews, ordering links, or social URLs.
- No owner or staff personal names, reviewer names, or photo-source URLs (this file ships to the browser).
- Photo `credit` is a key only. Real files only, in `public/images/`, referenced as `/images/<file>`.
- No AI-generated or stock photos of the food or the shop.
- Reviews: verbatim quotes, `sourceLabel` ("Google", "Yelp"), optional `rating` (1–5) and `sourceUrl`. There is no author field.
- Ordering links: only services the shop really uses. Empty array = no Order section.

## Fields

| Field | Renders as | Empty → |
| --- | --- | --- |
| `name` | Header/footer wordmark, hero sign (first word block letters, rest in script) | — |
| `tagline` | Hero line, footer | hidden |
| `description` | Meta fallback, JSON-LD | — |
| `opened` | "Since" kicker on About, hero badge, footer "Est." | hidden |
| `heroKicker` | Line above the hero title | hidden |
| `address.*`, `address.full` | Hero, Location card, footer, map embed, JSON-LD | — |
| `locationHint` | Line under the address | hidden |
| `geo` | Map pin + JSON-LD. Null → map by street address | address embed |
| `mapUrl` | Directions buttons | directions URL built from `address.full` |
| `phone` | Every call button, the big tap-to-call band (when `orderingLinks` is empty), ticker, sticky mobile Call bar | — |
| `hours` | Hours card + table, live open/closed pill, footer, JSON-LD | Hours card, pill and footer hours hidden |
| `closedNotice` | Hours card, only while closed | hidden |
| `priceRange`, `paymentNote` | Small line on the hours/location card | hidden |
| `orderingLinks[]` | Order section (`phone` = tel:, `online`/`delivery` = https) | section hidden |
| `socials[]`, `extraLinks[]` | Footer | hidden |
| `rating` | Hero rating chip; first badge in Reviews | hidden |
| `extraRatings[]` | Reviews badges after `rating` | hidden |
| `testimonials[]` | Reviews quotes | section hidden |
| `faq[]` | Accordion + FAQPage JSON-LD | hidden |
| `menuNote` | Under the menu heading | hidden |
| `menu[]` | Tabbed menu, ticker (category names), JSON-LD menu. `price` or `sizes[]`; `priceFrom` adds "+" | section hidden |
| `menu[].items[].placeholder` | Never shown | — |
| `photos[]`, `heroImage` | Hero photo, About photo (storefront/interior), Photos section (logo excluded) | illustrated badge in hero, guest-check card in About; Photos hidden |
| `palette` | CSS variables | built-in diner palette |
| `about` | About (needs ≥1 paragraph) | hidden |
| `servesCuisine` | JSON-LD, hero badge ring, ticker (when no menu), guest-check card | Breakfast, Sandwiches |
| `seo.title/description` | Title, meta, Open Graph | name / description |
| `footerCredit` | LAST footer line, linked to https://nicklopacki.com | "Built by nicklopacki.com" |
