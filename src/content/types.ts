/**
 * Content contract for Famous Sandwiches.
 *
 * `src/content/site.ts` is data only:
 *
 *   import type { SiteContent } from "./types";
 *   export const site: SiteContent = { ... };
 *
 * Rules (enforced by review, partly by these types):
 *  - Empty strings, empty arrays, `null`, and absent optional fields hide the matching UI.
 *  - Never invent prices, hours, reviews, ordering links, or social URLs.
 *  - No owner/staff personal names, no reviewer names, no photo-source URLs anywhere in here.
 *    This file's values ship to the browser.
 *  - Photos: real files only, in `public/images/`, referenced as `/images/<file>`.
 *    No AI-generated or stock photos of the food or the shop.
 *  - No pitch features (text pre-orders, AI phone answering, catering, waitlists, "coming soon").
 *    The types carry no fields for them.
 */

export type PhoneNumber = {
  /** Shown to people, e.g. "(904) 555-0100". */
  display: string;
  /** `tel:` href, e.g. "tel:+19045550100". */
  tel: string;
  /** E.164, e.g. "+19045550100". */
  e164: string;
};

export type Weekday = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

export type DayHours = {
  /** 24-hour "HH:MM", or null when that edge is still unknown. */
  openTime: string | null;
  closeTime: string | null;
  /** True closes the shop for the whole day. */
  closed?: boolean;
};

export type Hours = {
  /** IANA zone used to decide open vs closed. "America/New_York". */
  timezone: string;
  /** Short public line, e.g. "Mon–Sat 10 AM–8 PM". Empty = built from `byDay`. */
  summary: string;
  /** Fallback window for a weekday missing from `byDay`. Null = unknown, don't assume. */
  openTime: string | null;
  closeTime: string | null;
  /** Per-day hours. This is the schedule open/closed reads. */
  byDay?: Partial<Record<Weekday, DayHours>>;
};

export type MenuItem = {
  /** Stable slug, e.g. "egg-and-cheese". Also used to match `/images/<id>*.jpg` food photos. */
  id: string;
  name: string;
  description?: string;
  /** Dollars. Leave unset until a real price is confirmed. Never invent one. */
  price?: number;
  /** `price` is a starting price (size upcharges). Renders as "$9.99+". */
  priceFrom?: boolean;
  /**
   * Optional size prices, e.g. [{ label: '8"', price: 8.99 }, { label: '12"', price: 11.99 }].
   * When set, these render instead of `price`.
   */
  sizes?: MenuSize[];
  /** Shop labels the item "New". Small badge; keep it out of `name`. */
  isNew?: boolean;
  /** House signature / customer favorite. Gets a badge and can be featured. */
  signature?: boolean;
  /** Seeded stand-in copy. Never rendered. */
  placeholder?: boolean;
};

export type MenuSize = {
  /** e.g. '8"', '12"', "Half", "Whole", "Small", "Large". */
  label: string;
  /** Dollars. */
  price: number;
};

export type MenuCategory = {
  id: string;
  /** e.g. "Breakfast", "Hot Sandwiches", "Sides". */
  name: string;
  /** Shown under the tab heading. */
  description?: string;
  items: MenuItem[];
};

export type PhotoCategory = "storefront" | "interior" | "food" | "menu-board" | "logo" | "drinks";

/** Where a photo came from, as a key only. Full source URLs live in Leads' notes, never here. */
export type PhotoCredit = "google-maps-ugc" | "yelp-ugc" | "facebook-page" | "owner" | "nick-shoot";

export type Photo = {
  /** Public path under `/images`, e.g. "/images/storefront.jpg". */
  src: string;
  alt: string;
  category: PhotoCategory;
  credit: PhotoCredit;
  width?: number;
  height?: number;
  /** Homepage hero photo. `heroImage` wins over this flag. */
  hero?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * A verbatim review quote. There is deliberately NO author/name field.
 * Rendered as: quote, star rating (when set), and `sourceLabel` (linked when `sourceUrl` is http(s)).
 */
export type Testimonial = {
  /** Verbatim text, trimmed only. Use "…" for cuts. */
  quote: string;
  /** Stars the reviewer gave, 1–5. Omit when unknown. */
  rating?: number;
  /** Platform label, e.g. "Google" or "Yelp". Required; quotes without it are skipped. */
  sourceLabel: string;
  /** Optional http(s) link to the review or listing. Never a photo URL. */
  sourceUrl?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type OrderingLink = {
  /** e.g. "DoorDash", "Uber Eats", "Order online". Only services the shop really uses. */
  label: string;
  href: string;
  kind: "phone" | "online" | "delivery";
};

export type Rating = {
  /** e.g. 4.7 */
  value: number;
  /** Review count, e.g. 1261. */
  count: number;
  /** e.g. "Google". */
  source: string;
  /** Optional http(s) link to the listing. */
  sourceUrl?: string;
};

/**
 * Colors become CSS variables. Absent = the built-in diner palette in globals.css.
 * Roles: ink = text, brand = ketchup red, brandDeep = darker red, accent = diner teal,
 * mustard = highlights/prices, cream = page, paper = cards.
 */
export type Palette = {
  ink: string;
  brand: string;
  brandDeep: string;
  accent: string;
  mustard: string;
  cream: string;
  paper: string;
};

export type SiteContent = {
  name: string;
  /** e.g. "Breakfast & sandwiches". Empty hides it. */
  tagline: string;
  /** Meta description fallback and JSON-LD. */
  description: string;
  /** Free-text opening year, e.g. "1985". Empty hides the "Est." line. */
  opened: string;
  address: {
    street: string;
    suite: string;
    neighborhood: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    /** Single line used for the map embed, directions, and footer. */
    full: string;
  };
  /** Short wayfinding line under the address. Empty hides it. */
  locationHint: string;
  /** Null coordinates keep the map on the street address. Do not guess. */
  geo: {
    latitude: number | null;
    longitude: number | null;
  };
  /** Google Maps place link for "Directions". Empty = a directions link built from `address.full`. */
  mapUrl: string;
  phone: PhoneNumber;
  /** Shown on the hours card only while the shop is closed. Empty hides it. */
  closedNotice: string;
  hours: Hours;
  /** e.g. "$". Empty hides it. */
  priceRange: string;
  /** e.g. "Cash & cards". Empty hides it. */
  paymentNote: string;
  /** Existing ordering services only. Empty array = no Order section. */
  orderingLinks: OrderingLink[];
  socials: SocialLink[];
  /** Aggregate score (hero + Reviews). Null hides it. */
  rating: Rating | null;
  /** Additional platform scores shown in Reviews after `rating`. */
  extraRatings?: Rating[];
  testimonials: Testimonial[];
  faq: FaqItem[];
  /** Line under the menu heading, e.g. "Prices subject to change." Empty hides it. */
  menuNote: string;
  menu: MenuCategory[];
  photos: Photo[];
  /** Public path for the hero photo. Wins over a photo `hero` flag. */
  heroImage?: string;
  /** Absent = built-in palette. */
  palette?: Palette;
  about: {
    heading: string;
    paragraphs: string[];
  };
  /** Short line above the hero title, e.g. "Murray Hill · Jacksonville". Empty/absent hides it. */
  heroKicker?: string;
  /** Extra verified links for the footer (e.g. Facebook page). */
  extraLinks?: SocialLink[];
  /** JSON-LD servesCuisine. Absent = ["Breakfast", "Sandwiches"]. */
  servesCuisine?: string[];
  seo: {
    title: string;
    description: string;
  };
  /** Footer credit text. Always linked to https://nicklopacki.com and always the last footer line. */
  footerCredit: string;
};
