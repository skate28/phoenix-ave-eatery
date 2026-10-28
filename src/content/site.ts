import type { SiteContent } from "./types";

const MAP_URL =
  "https://www.google.com/maps/place/?q=place_id:ChIJrWGIXKK35YgRzUsLa-MVtEY";
const YELP_URL = "https://www.yelp.com/biz/phoenix-eatery-jacksonville";

export const site: SiteContent = {
  name: "Phoenix Ave Eatery & Mini Mart",
  tagline: "Southern breakfast, brunch, specialty waffles & soul food on Phoenix Avenue",
  description:
    "Phoenix Ave Eatery & Mini Mart is a family-owned Southern breakfast, brunch and soul food kitchen at 1811 Phoenix Ave in Jacksonville, FL, serving made-to-order specialty waffles, hot honey wings, salmon croquettes, grits bowls, fried fish, burgers and house mango-pineapple punch. Open Wednesday–Sunday 8 AM–3 PM. Call (904) 379-5658.",
  opened: "",

  address: {
    street: "1811 Phoenix Ave",
    suite: "",
    neighborhood: "Phoenix Ave · Eastside",
    city: "Jacksonville",
    region: "FL",
    postalCode: "32206",
    country: "US",
    full: "1811 Phoenix Ave, Jacksonville, FL 32206",
  },
  locationHint: "At 1811 Phoenix Ave in Jacksonville (32206), with ample on-site parking and step-free wheelchair-accessible entry.",

  geo: {
    latitude: null,
    longitude: null,
  },
  mapUrl: MAP_URL,

  phone: {
    display: "(904) 379-5658",
    tel: "tel:+19043795658",
    e164: "+19043795658",
  },

  closedNotice:
    "We're closed Monday & Tuesday. Join us Wednesday–Sunday from 8:00 AM to 3:00 PM for fresh Southern breakfast, waffles, wings, and lunch plates!",

  hours: {
    timezone: "America/New_York",
    summary: "Wed–Sun 8 AM–3 PM · Closed Mon & Tue",
    openTime: null,
    closeTime: null,
    byDay: {
      mon: { openTime: null, closeTime: null, closed: true },
      tue: { openTime: null, closeTime: null, closed: true },
      wed: { openTime: "08:00", closeTime: "15:00" },
      thu: { openTime: "08:00", closeTime: "15:00" },
      fri: { openTime: "08:00", closeTime: "15:00" },
      sat: { openTime: "08:00", closeTime: "15:00" },
      sun: { openTime: "08:00", closeTime: "15:00" },
    },
  },

  priceRange: "$",
  paymentNote: "Credit cards & cash accepted",

  orderingLinks: [
    { label: "Call (904) 379-5658 to Order", href: "tel:+19043795658", kind: "phone" },
    { label: "Alt Line: (904) 503-5845", href: "tel:+19045035845", kind: "phone" },
  ],

  socials: [
    { label: "Yelp", href: YELP_URL },
    { label: "Google Maps", href: MAP_URL },
  ],

  rating: {
    value: 4.0,
    count: 60,
    source: "Community Reviews",
    sourceUrl: YELP_URL,
  },

  extraRatings: [{ value: 4.0, count: 3, source: "Yelp", sourceUrl: YELP_URL }],

  testimonials: [
    {
      quote:
        "The hot honey wings are a must-try, packed with delicious flavor, and the waffles are so good that they can be enjoyed even without syrup.",
      rating: 5,
      sourceLabel: "Restaurantji",
      sourceUrl: "https://www.restaurantji.com/fl/jacksonville/phoenix-eatery-/",
    },
    {
      quote:
        "The food is seasoned perfectly and tastes homemade, with dishes like Salmon Croquettes and the Grits Bowl receiving high praise.",
      rating: 5,
      sourceLabel: "Restaurantji",
      sourceUrl: "https://www.restaurantji.com/fl/jacksonville/phoenix-eatery-/",
    },
    {
      quote:
        "Customers often enjoy a signature house punch with a delightful mango-pineapple taste, completing the satisfying meal.",
      rating: 5,
      sourceLabel: "Yelp",
      sourceUrl: YELP_URL,
    },
  ],

  faq: [
    {
      question: "What are your hours?",
      answer: "We are open Wednesday through Sunday from 8:00 AM to 3:00 PM. We are closed Monday and Tuesday.",
    },
    {
      question: "How do I place a pickup order?",
      answer:
        "Call us directly at (904) 379-5658 (or (904) 503-5845) to call in your breakfast or lunch order ahead of time, or order in person at 1811 Phoenix Ave.",
    },
    {
      question: "What are your signature dishes?",
      answer:
        "Guests love our Hot Honey Wings, specialty waffles (Strawberry Crunch, Cinnamon Toast Crunch, Cookies & Cream, and Chocolate Chip), homemade Salmon Croquettes, creamy Southern Grits Bowls, Crispy Fried Fish, and our Mango-Pineapple House Punch.",
    },
    {
      question: "Is there parking and wheelchair access?",
      answer:
        "Yes! We have ample parking right outside at 1811 Phoenix Ave with step-free, wheelchair-accessible entry.",
    },
  ],

  menuNote:
    "Every plate and specialty waffle is cooked fresh to order. Call (904) 379-5658 ahead for pickup availability and daily specials.",

  menu: [
    {
      id: "specialty-waffles",
      name: "Specialty Waffles & Breakfast",
      description:
        "Freshly pressed, golden waffles made to order — so flavorful our regulars enjoy them even without syrup.",
      items: [
        {
          id: "strawberry-crunch-waffle",
          signature: true,
          name: "Strawberry Crunch Waffle",
          description: "Freshly made-to-order golden waffle topped with house strawberry crunch crumble.",
        },
        {
          id: "cinnamon-toast-crunch-waffle",
          signature: true,
          name: "Cinnamon Toast Crunch Waffle",
          description: "Warm Belgian-style waffle dusted and topped with Cinnamon Toast Crunch.",
        },
        {
          id: "cookies-and-cream-waffle",
          name: "Cookies & Cream Waffle",
          description: "Made-to-order specialty waffle loaded with crushed cookies and cream.",
        },
        {
          id: "chocolate-chip-waffle",
          name: "Chocolate Chip Waffle",
          description: "Classic golden waffle baked with melted chocolate chips.",
        },
        {
          id: "classic-buttermilk-waffle-wings",
          signature: true,
          name: "Chicken Wings & Waffle Plate",
          description: "Crispy seasoned wings paired with your choice of freshly made waffle.",
        },
      ],
    },
    {
      id: "southern-classics-grits",
      name: "Southern Soul Classics & Grits",
      description: "Homemade Southern breakfast and brunch favorites seasoned to perfection.",
      items: [
        {
          id: "salmon-croquettes",
          signature: true,
          name: "Homemade Salmon Croquettes",
          description: "Golden pan-seared salmon croquettes seasoned in-house, served hot and fresh.",
        },
        {
          id: "southern-grits-bowl",
          signature: true,
          name: "Loaded Southern Grits Bowl",
          description: "Creamy slow-simmered Southern grits bowl topped with your choice of protein.",
        },
        {
          id: "fried-fish-grits",
          name: "Crispy Fried Fish & Grits",
          description: "Seasoned cornmeal-crusted fried fish fillets served with creamy grits.",
        },
      ],
    },
    {
      id: "wings-burgers-lunch",
      name: "Wings, Burgers & Fried Fish",
      description: "Cooked fresh to order for breakfast, brunch, or lunch (Wed–Sun 8 AM–3 PM).",
      items: [
        {
          id: "hot-honey-wings",
          signature: true,
          name: "Signature Hot Honey Wings",
          description: "Crispy whole or party wings tossed in our house sweet-heat hot honey glaze.",
        },
        {
          id: "seasoned-chicken-wings",
          name: "House Seasoned Chicken Wings",
          description: "Freshly fried wings with our signature Southern seasoning blend.",
        },
        {
          id: "homestyle-burger",
          name: "Homestyle Diner Burger",
          description: "Hand-seasoned griddled burger cooked to order with classic toppings.",
        },
        {
          id: "fried-fish-plate",
          name: "Crispy Fried Fish Plate",
          description: "Golden fried fish fillets seasoned and fried fresh to order.",
        },
      ],
    },
    {
      id: "drinks-minimart",
      name: "House Punch & Mini Mart",
      description: "Refreshing house-made drinks plus neighborhood mini-mart grab-and-go essentials.",
      items: [
        {
          id: "mango-pineapple-punch",
          signature: true,
          name: "Signature Mango-Pineapple House Punch",
          description: "Customer-favorite house punch with a bright, refreshing mango-pineapple flavor.",
        },
        {
          id: "mini-mart-essentials",
          name: "Mini Mart Beverages, Snacks & Convenience Items",
          description: "Cold bottled drinks, snacks, and neighborhood convenience essentials inside the Mini Mart.",
        },
      ],
    },
  ],

  photos: [],
  heroImage: "",

  palette: {
    ink: "#1E140C",
    brand: "#B45309",
    brandDeep: "#78350F",
    accent: "#0F766E",
    mustard: "#F59E0B",
    cream: "#FEF3C7",
    paper: "#FFFBEB",
  },

  about: {
    heading: "Family-owned Southern breakfast, brunch & soul food on Phoenix Avenue",
    paragraphs: [
      "Phoenix Ave Eatery & Mini Mart at 1811 Phoenix Ave is a family-operated neighborhood kitchen and mini mart known across Jacksonville for generous portions and homemade Southern cooking.",
      "From our famous Hot Honey Wings, Salmon Croquettes, andLoaded Grits Bowls to specialty waffles like Strawberry Crunch, Cinnamon Toast Crunch, and Cookies & Cream, every dish is seasoned in-house and cooked fresh to order.",
      "Stop by Wednesday through Sunday from 8:00 AM to 3:00 PM, grab a cup of our signature Mango-Pineapple House Punch, or call (904) 379-5658 to place your pickup order.",
    ],
  },

  heroKicker: "1811 Phoenix Ave · Jacksonville, FL · Family-Owned",

  servesCuisine: ["Southern", "Breakfast & Brunch", "Soul Food", "Waffles & Wings"],

  seo: {
    title: "Phoenix Ave Eatery & Mini Mart | Southern Breakfast, Waffles & Soul Food in Jacksonville, FL",
    description:
      "Family-owned Southern breakfast, brunch, specialty waffles, hot honey wings, salmon croquettes & grits bowls at 1811 Phoenix Ave, Jacksonville, FL 32206. Open Wed–Sun 8 AM–3 PM. Call (904) 379-5658.",
  },

  footerCredit: "Built by nicklopacki.com",
};
