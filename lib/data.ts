export type Malba = {
  slug: string;
  name: string;
  description: string;
  image: string;
  color: "green" | "red";
  tag: "signature" | "premium";
  badge?: string;
  price: string;
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/franchise", label: "Franchise" },
  { href: "/contact", label: "Contact" },
];

// TODO: replace with your real WhatsApp Business number (country code + number, no + or spaces)
export const WHATSAPP_NUMBER = "919000000000";

export const SITE = {
  name: "MALBA_REE",
  url: "https://www.malbaree.com",
  phone: "+91 85938 21281",
  email: "hello@malbaree.in",
  address: "Hyderabad, Telangana, India",
  // Pulled from the Google Maps embed already on the Contact page
  geo: { lat: 17.441457283454934, lng: 78.35521207316162 },
  // TODO: fill in real social profile URLs (used in Organization schema "sameAs")
  socials: [] as string[],
};

export const MALBAS: Malba[] = [
  {
    slug: "tender-coconut-malba",
    name: "Tender Coconut Malba",
    description:
      "Silky tender coconut blended with creamy malba — a true Kerala classic.",
    image: "/images/coconutb.png",
    color: "green",
    tag: "premium",
    price: "Rs",
  },
  {
    slug: "mango-malba",
    name: "Mango Malba",
    description: "Alphonso pulp layered with thick malba and whipped cream.",
    image: "/images/mangob.png",
    color: "red",
    tag: "premium",
    price: "Rs",
  },
  {
    slug: "dates-malba",
    name: "Dates Malba",
    description:
      "Slow-blended Medjool dates with caramel notes and rich cream.",
    image: "/images/datesb.png",
    color: "red",
    tag: "premium",
    price: "Rs",
  },
  {
    slug: "chikku-malba",
    name: "Chikku Malba",
    description:
      "Honey-sweet sapodilla whipped into a velvety Kerala-style malba.",
    image: "/images/chikkub.png",
    color: "green",
    tag: "premium",
    price: "Rs",
  },
  {
    slug: "avocado-malba",
    name: "Avocado Malba",
    description: "Buttery avocado, fresh cream and a hint of cardamom.",
    image: "/images/avocadob.png",
    color: "green",
    tag: "premium",
    price: "Rs",
  },
  {
    slug: "special-dryfruit-malba",
    name: "Special Dryfruit Malba",
    description:
      "Our signature — almonds, cashews, dates & saffron in every layer.",
    image: "/images/dryb.png",
    color: "red",
    tag: "signature",
    badge: "Signature",
    price: "Rs",
  },
];
