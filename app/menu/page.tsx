import type { Metadata } from "next";
import MenuGrid from "@/components/MenuGrid";

export const metadata: Metadata = {
  title: "Menu — MALBA_REE | Kerala Malba & Thick Milkshakes",
  description:
    "Explore signature Kerala-style malbas: Tender Coconut, Mango, Dates, Chikku, Avocado and our Special Dryfruit Malba.",
};

export default function MenuPage() {
  return (
    <>
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
