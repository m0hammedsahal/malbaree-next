// ---------- Nav / site info ----------

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
  address: "Plot no 83, near Dominos Pizza, Vinayak Nagar, Indira Nagar, Gachibowli, Hyderabad, Telangana 500032",
  // Pulled from the Google Maps embed already on the Contact page
  geo: { lat: 17.441457283454934, lng: 78.35521207316162 },
  // TODO: fill in real social profile URLs (used in Organization schema "sameAs")
  socials: [] as string[],
};

// ---------- Homepage highlight cards (real product renders) ----------

export type Malba = {
  slug: string;
  name: string;
  description: string;
  image: string;
  color: "green" | "red";
  price: string;
};

export const MALBAS: Malba[] = [
  {
    slug: "tender-coconut-malba",
    name: "Tender Coconut Malba",
    description:
      "Silky tender coconut blended with creamy malba — a true Kerala classic.",
    image: "/images/coconutb.png",
    color: "green",
    price: "₹99",
  },
  {
    slug: "mango-malba",
    name: "Mango Malba",
    description: "Alphonso pulp layered with thick malba and whipped cream.",
    image: "/images/mangob.png",
    color: "red",
    price: "₹99",
  },
  {
    slug: "dates-malba",
    name: "Dates Malba",
    description:
      "Slow-blended Medjool dates with caramel notes and rich cream.",
    image: "/images/datesb.png",
    color: "red",
    price: "₹99",
  },
  {
    slug: "chikku-malba",
    name: "Chikku Malba",
    description:
      "Honey-sweet sapodilla whipped into a velvety Kerala-style malba.",
    image: "/images/chikkub.png",
    color: "green",
    price: "₹99",
  },
  {
    slug: "avocado-malba",
    name: "Avocado Malba",
    description: "Buttery avocado, fresh cream and a hint of cardamom.",
    image: "/images/avocadob.png",
    color: "green",
    price: "₹99",
  },
];

// ---------- Full menu (exact match to the printed food + drinks menu boards) ----------

export type MenuLine = { name: string; price: string };

export type MenuCategory = {
  slug: string;
  board: "food" | "drinks";
  title: string;
  image: string;
  items: MenuLine[];
};

export const MENU_CATEGORIES: MenuCategory[] = [
  // ---- Food menu board ----
  {
    slug: "wraps-nonveg",
    board: "food",
    title: "Wraps",
    image: "/images/menu/wrap_chicken.jpeg",
    items: [
      { name: "Chicken Classic", price: "₹120" },
      { name: "Chicken Cheesy", price: "₹140" },
    ],
  },
  {
    slug: "loaded-fries-nonveg",
    board: "food",
    title: "Loaded Fries",
    image: "/images/menu/loaded_fries_chicken.jpeg",
    items: [
      { name: "Malbaree Signature Loaded Chicken (M)", price: "₹179" },
      { name: "Malbaree Cheesy Loaded Chicken (M)", price: "₹199" },
    ],
  },
  {
    slug: "burger",
    board: "food",
    title: "Burger",
    image: "/images/menu/burger.jpeg",
    items: [
      { name: "Classic Chicken Burger", price: "₹120" },
      { name: "Zinger Burger", price: "₹150" },
      { name: "Veg Classic Burger", price: "₹99" },
    ],
  },
  {
    slug: "wraps-veg",
    board: "food",
    title: "Wraps (Veg)",
    image: "/images/menu/wrap_veg.jpeg",
    items: [
      { name: "Veg Wrap", price: "₹99" },
      { name: "Veg Wrap Cheesy", price: "₹119" },
    ],
  },
  {
    slug: "loaded-fries-veg",
    board: "food",
    title: "Loaded Fries (Veg)",
    image: "/images/menu/loaded_fries_veg.jpeg",
    items: [
      { name: "Malbaree Signature Veg Loaded (M)", price: "₹159" },
      { name: "Malbaree Cheesy Veg Loaded (M)", price: "₹179" },
    ],
  },
  {
    slug: "french-fries",
    board: "food",
    title: "French Fries",
    image: "/images/menu/french_fries.jpeg",
    items: [
      { name: "Classic French Fries (M / L)", price: "₹79 / ₹99" },
      { name: "Peri Peri French Fries (M / L)", price: "₹99 / ₹129" },
    ],
  },

  // ---- Drinks menu board (Malbaree Signature Menu) ----
  {
    slug: "malba",
    board: "drinks",
    title: "Malba",
    image: "/images/menu/malba.jpeg",
    items: [
      { name: "Mango Malba", price: "₹99" },
      { name: "Tender Coconut Malba", price: "₹99" },
      { name: "Chikku Malba", price: "₹99" },
      { name: "Avocado Malba", price: "₹99" },
      { name: "Fig Malba", price: "₹99" },
      { name: "Dates Malba", price: "₹99" },
    ],
  },
  {
    slug: "avil-milk",
    board: "drinks",
    title: "Avil Milk",
    image: "/images/menu/avil_milk.jpeg",
    items: [
      { name: "Special Avil Milk", price: "₹99" },
      { name: "Dry Fruits Avil Milk", price: "₹119" },
      { name: "Premium Avil Milk", price: "₹149" },
    ],
  },
  {
    slug: "thickshake",
    board: "drinks",
    title: "Thickshake",
    image: "/images/menu/thickshake.jpeg",
    items: [
      { name: "Roasted Cashew Shake", price: "₹149" },
      { name: "Sitaphal Shake", price: "₹99" },
      { name: "Jamun Shake", price: "₹99" },
      { name: "Fig & Honey", price: "₹99" },
      { name: "Honey Avocado", price: "₹99" },
    ],
  },
  {
    slug: "fresh-juice",
    board: "drinks",
    title: "Fresh Juice",
    image: "/images/menu/fresh_juice.jpeg",
    items: [
      { name: "Watermelon", price: "₹60" },
      { name: "Musambi", price: "₹80" },
      { name: "Pineapple", price: "₹70" },
      { name: "Citrus", price: "₹90" },
    ],
  },
  {
    slug: "premium-mix",
    board: "drinks",
    title: "Premium Mix",
    image: "/images/menu/premium_mix.jpeg",
    items: [
      { name: "Burj-ul-Arab (Mango, Avocado)", price: "₹119" },
      { name: "Abooda (Mango, Dates, Sharjah)", price: "₹119" },
      { name: "Saboora (Fig, Badam, Dates)", price: "₹119" },
      { name: "Musk (Avocado, Dates, Coconut)", price: "₹119" },
    ],
  },
  {
    slug: "mojitos",
    board: "drinks",
    title: "Mojitos",
    image: "/images/menu/mojitos.jpeg",
    items: [
      { name: "Passion Fruit Mojito", price: "₹89" },
      { name: "Pineapple Mojito", price: "₹89" },
      { name: "Grapes Mojito", price: "₹89" },
      { name: "Blue Mint Mojito", price: "₹89" },
      { name: "Green Apple Mojito", price: "₹89" },
      { name: "Blueberry Mojito", price: "₹89" },
    ],
  },
  {
    slug: "sundae",
    board: "drinks",
    title: "Malbaree Special Sundae",
    image: "/images/menu/sundae.jpeg",
    items: [{ name: "Malbaree Special Sundae", price: "₹249" }],
  },
];

export const ADD_ONS: MenuLine[] = [
  { name: "Mayonnaise", price: "₹20" },
  { name: "Cheese", price: "₹20" },
];
