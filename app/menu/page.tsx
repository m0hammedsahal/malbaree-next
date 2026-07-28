import type { Metadata } from "next";
import MenuGrid from "@/components/MenuGrid";
import { MALBAS, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu — MALBA_REE | Kerala Malba & Thick Milkshakes",
  description:
    "Explore signature Kerala-style malbas: Tender Coconut, Mango, Dates, Chikku, Avocado and our Special Dryfruit Malba.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "Menu — MALBA_REE | Kerala Malba & Thick Milkshakes",
    description:
      "Explore signature Kerala-style malbas: Tender Coconut, Mango, Dates, Chikku, Avocado and our Special Dryfruit Malba.",
    url: `${SITE.url}/menu`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "MALBA_REE Menu",
  hasMenuSection: {
    "@type": "MenuSection",
    name: "Signature Malbas",
    hasMenuItem: MALBAS.map((m) => ({
      "@type": "MenuItem",
      name: m.name,
      description: m.description,
      image: `${SITE.url}${m.image}`,
    })),
  },
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
            Slow-blended, layered &amp; topped with cream — every glass is
            built with Kerala love.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <MenuGrid />
        </div>
      </section>
    </>
  );
}
