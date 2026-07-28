import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FranchiseForm from "@/components/FranchiseForm";
import FaqItem from "@/components/FaqItem";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Franchise — Own a MALBA_REE | Kerala Malba Franchise",
  description:
    "Start your own MALBA_REE franchise. Low investment, high demand, full training, marketing and store-setup support. Enquire now.",
  alternates: { canonical: "/franchise" },
  openGraph: {
    title: "Franchise — Own a MALBA_REE | Kerala Malba Franchise",
    description:
      "Start your own MALBA_REE franchise. Low investment, high demand, full training, marketing and store-setup support. Enquire now.",
    url: `${SITE.url}/franchise`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const STATS = [
  { v: "₹8–18L", k: "Investment" },
  { v: "18–24 mo", k: "Payback" },
  { v: "45 days", k: "Setup time" },
  { v: "End-to-end", k: "Support" },
];

const WHY_PARTNER = [
  { icon: "₹", title: "Low Investment", text: "Start small — single counter or full café format." },
  { icon: "📈", title: "High Demand", text: "Kerala-style malba is a fast-growing category." },
  { icon: "🤝", title: "Brand Support", text: "Full brand kit, recipes & operations playbook." },
  { icon: "🎓", title: "Training", text: "Hands-on training for you and your team." },
  { icon: "📣", title: "Marketing", text: "Launch campaigns, social assets & local activation." },
  { icon: "🏪", title: "Store Setup", text: "Site selection, design & opening-day support." },
];

const FAQS = [
  { q: "What is the total investment range?", a: "Typically ₹8–18 lakhs depending on city, location and store format. We share full economics during the enquiry call." },
  { q: "What is the expected ROI?", a: "Most partners target 18–24 months payback. Actual results depend on location and execution." },
  { q: "Do I need food & beverage experience?", a: "No prior F&B experience is required. We train you end-to-end before launch." },
  { q: "Which cities are you expanding to?", a: "Telangana, Andhra Pradesh, Karnataka and Tamil Nadu first — then pan-India." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FranchisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="franchise-hero">
        <div className="blob" style={{ width: 380, height: 380, background: "rgba(255,214,0,.3)", top: -80, right: -80 }} />
        <div className="blob" style={{ width: 320, height: 320, background: "rgba(198,40,40,.3)", bottom: -80, left: -40 }} />
        <div className="container" style={{ position: "relative" }}>
          <p className="eyebrow">Partner with us</p>
          <h1>
            Own a <span>MALBA_REE</span> franchise
          </h1>
          <p style={{ marginTop: 16, maxWidth: 640, marginLeft: "auto", marginRight: "auto", opacity: 0.85 }}>
            Join one of India&apos;s most loved Kerala-style malba brands. Low
            investment, strong unit economics, full support.
          </p>
          <div className="stat-grid">
            {STATS.map((s) => (
              <div className="stat" key={s.k}>
                <div className="v">{s.v}</div>
                <div className="k">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <p className="eyebrow">Why partner</p>
            <h2 className="section-title">Built for partner success</h2>
          </div>
          <div className="grid grid-3" style={{ marginTop: 48 }}>
            {WHY_PARTNER.map((w) => (
              <Reveal key={w.title} className="card">
                <div className="card-icon ember">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container form-wrap">
          <div className="form-frame">
            <div className="form-inner">
              <div className="text-center mb-8">
                <p className="eyebrow">Franchise Enquiry</p>
                <h2 className="section-title">Tell us about you</h2>
              </div>
              <FranchiseForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-sm">
          <div className="text-center mb-8">
            <p className="eyebrow">FAQs</p>
            <h2 className="section-title">Quick answers</h2>
          </div>
          {FAQS.map((f) => (
            <FaqItem key={f.q} question={f.q} answer={f.a} />
          ))}
        </div>
      </section>
    </>
  );
}
