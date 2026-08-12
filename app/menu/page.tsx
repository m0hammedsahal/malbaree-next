import type { Metadata } from "next";
import MenuBoard from "@/components/MenuBoard";
import { MENU_CATEGORIES, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu — MALBA_REE | Malba, Milkshakes, Wraps, Burgers & More",
  description:
    "Full MALBA_REE menu: Kerala-style Malba, Avil Milk, Thickshakes, Fresh Juice, Premium Mix, Mojitos, Wraps, Loaded Fries, Burgers and French Fries.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "Menu — MALBA_REE | Malba, Milkshakes, Wraps, Burgers & More",
    description:
      "Full MALBA_REE menu: Kerala-style Malba, Avil Milk, Thickshakes, Fresh Juice, Premium Mix, Mojitos, Wraps, Loaded Fries, Burgers and French Fries.",
    url: `${SITE.url}/menu`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "MALBA_REE Menu",
  hasMenuSection: MENU_CATEGORIES.map((cat) => ({
    "@type": "MenuSection",
    name: cat.title,
    image: `${SITE.url}${cat.image}`,
    hasMenuItem: cat.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: item.price.replace(/[^\d.]/g, "") || undefined,
      },
    })),
  })),
};

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      <section className="hero-sub">
        <div className="hero-bg" />
        <div className="sunburst" />
        <div className="container-sm" style={{ position: "relative" }}>
          <p className="eyebrow">Our Menu</p>
          <h1>Sip the Taste of Kerala</h1>
          <p>
            Malba, milkshakes, mojitos, wraps, burgers &amp; more — every
            plate and glass made fresh daily.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <MenuBoard />
        </div>
      </section>
    </>
  );
}
