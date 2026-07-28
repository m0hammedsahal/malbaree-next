import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — MALBA_REE | Kerala Heritage, Hyderabad Roots",
  description:
    "The story behind MALBA_REE — Kerala flavours, modern hospitality, and a mission to serve Hyderabad the most authentic malba experience.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — MALBA_REE | Kerala Heritage, Hyderabad Roots",
    description:
      "The story behind MALBA_REE — Kerala flavours, modern hospitality, and a mission to serve Hyderabad the most authentic malba experience.",
    url: `${SITE.url}/about`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const CARDS = [
  { icon: "🌿", title: "Heritage", text: "Recipes inspired by Kerala's coastal cafés." },
  { icon: "🎯", title: "Mission", text: "Make authentic Kerala malba available to every Hyderabadi." },
  { icon: "👁️", title: "Vision", text: "100+ stores across India — every glass made with love." },
];

const TIMELINE = [
  { year: "Idea", title: "Coastal craving", text: "A founder homesick for Kerala's roadside malba stalls dreams of bringing them to Hyderabad." },
  { year: "Recipe", title: "Kerala kitchen", text: "Months of testing in Kochi — tender coconut, dates and dryfruit recipes are perfected." },
  { year: "Launch", title: "Hyderabad opens up", text: "MALBA_REE serves its first glass, and the queues haven't stopped since." },
  { year: "Today", title: "A growing family", text: "Loved across the city — now opening up franchise partnerships across India." },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-sub">
        <div className="hero-bg" />
        <div className="sunburst" />
        <div className="container-sm" style={{ position: "relative" }}>
          <p className="eyebrow">Our Story</p>
          <h1>
            From <span className="text-brand-red">Kerala&apos;s coast</span>
            <br /> to Hyderabad&apos;s heart
          </h1>
          <p>
            MALBA_REE is a love letter to Kerala — a thick, creamy, deeply
            layered milkshake tradition reimagined for the streets of
            Hyderabad.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {CARDS.map((c) => (
              <Reveal key={c.title} className="card">
                <div className="card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 96 }}>
        <div className="container-sm">
          <div className="text-center">
            <p className="eyebrow">Our Journey</p>
            <h2 className="section-title">Glass by glass</h2>
          </div>
          <div className="timeline">
            {TIMELINE.map((t) => (
              <div className="tl-item" key={t.year}>
                <div className="tl-dot" />
                <Reveal as="div" className="tl-card">
                  <div className="year">{t.year}</div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
