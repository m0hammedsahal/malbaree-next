import Link from "next/link";
import Reveal from "@/components/Reveal";
import MalbaCard from "@/components/MalbaCard";
import { MALBAS } from "@/lib/data";

const WHY = [
  { icon: "🌿", title: "Authentic Kerala Taste", text: "Recipes rooted in Kerala's coastal flavours." },
  { icon: "✨", title: "Premium Ingredients", text: "Hand-picked fruits, dryfruits & fresh dairy daily." },
  { icon: "❄️", title: "Thick & Creamy", text: "Slow-blended layers — never watery, always indulgent." },
  { icon: "❤️", title: "Made Fresh Daily", text: "Prepared in small batches, every single day." },
  { icon: "₹", title: "Honest Pricing", text: "Premium quality starting at just ₹99." },
];

const REVIEWS = [
  { text: "The Dryfruit Malba is unreal — thick, rich, exactly what Kerala tastes like.", author: "Aisha R." },
  { text: "Mango Malba beats every milkshake in Hyderabad. Period.", author: "Karthik S." },
  { text: "Tender Coconut Malba feels like a hug from Kerala. Obsessed.", author: "Sneha M." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div
          className="blob"
          style={{
            width: 280,
            height: 280,
            background: "rgba(14,107,63,.2)",
            top: -40,
            left: -40,
          }}
        />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="chip">✨ New in Hyderabad</span>
            <h1>
              <span className="text-brand-green">Experience</span>{" "}
              <span className="text-brand-ink">Hyderabad&apos;s most loved</span>{" "}
              <span className="text-brand-red">Kerala Malba</span>
            </h1>
            <p className="tagline">
              Rich, creamy &amp; loaded with authentic Kerala flavours.
            </p>
            <div className="cta-row">
              <Link href="/menu" className="btn btn-red">Order Now →</Link>
              <Link href="/menu" className="btn btn-ink">Explore Menu</Link>
              <Link href="/franchise" className="btn btn-glass">Franchise Partner</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="video-wrapper">
              <video className="hero-video" autoPlay muted loop playsInline>
                <source src="/images/malbavideo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 640, margin: "0 auto" }}>
            <p className="eyebrow">Why MALBA_REE</p>
            <h2 className="section-title">A glass full of Kerala</h2>
          </div>
          <div className="grid grid-5" style={{ marginTop: 48 }}>
            {WHY.map((w) => (
              <Reveal key={w.title} className="card why-card">
                <div className="card-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="section" style={{ position: "relative" }}>
        <div className="hero-bg" style={{ opacity: 0.9 }} />
        <div className="sunburst" />
        <div className="container" style={{ position: "relative" }}>
          <div className="menu-head" style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p className="eyebrow">Our Menu</p>
              <h2 className="section-title">Signature Malbas</h2>
            </div>
            <Link href="/menu" className="btn btn-ink">See full menu →</Link>
          </div>
          <div className="grid grid-3" style={{ marginTop: 40 }}>
            {MALBAS.map((m) => (
              <MalbaCard key={m.slug} malba={m} />
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <p className="eyebrow">Loved by Hyderabad</p>
            <h2 className="section-title">5-star sips</h2>
          </div>
          <div className="grid grid-3" style={{ marginTop: 48 }}>
            {REVIEWS.map((r) => (
              <Reveal key={r.author} as="blockquote" className="review">
                <div className="stars">★★★★★</div>
                <p>&quot;{r.text}&quot;</p>
                <footer>— {r.author}</footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FRANCHISE CTA */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          <div className="cta-banner">
            <div className="blob" style={{ width: 280, height: 280, background: "rgba(255,214,0,.3)", top: -80, right: -80 }} />
            <div className="blob" style={{ width: 280, height: 280, background: "rgba(198,40,40,.3)", bottom: -80, left: -40 }} />
            <div className="cta-inner">
              <div>
                <p className="font-script" style={{ fontSize: 30, color: "var(--brand-yellow)" }}>Join the family</p>
                <h2>
                  Start your own{" "}
                  <span style={{ color: "var(--brand-yellow)" }}>MALBA_REE</span> franchise
                </h2>
                <p style={{ marginTop: 16, maxWidth: 440, opacity: 0.85 }}>
                  Low investment. High demand. Full brand, training &amp; marketing support — from store setup to opening day and beyond.
                </p>
              </div>
              <Link href="/franchise" className="btn btn-yellow btn-lg">Enquire Now →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
