import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — MALBA_REE | Hyderabad",
  description:
    "Visit, call or message MALBA_REE in Hyderabad. We'd love to hear from you.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — MALBA_REE | Hyderabad",
    description:
      "Visit, call or message MALBA_REE in Hyderabad. We'd love to hear from you.",
    url: `${SITE.url}/contact`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-sub">
        <div className="hero-bg" />
        <div className="sunburst" />
        <div className="container-sm" style={{ position: "relative" }}>
          <p className="eyebrow">Say hello</p>
          <h1>Contact MALBA_REE</h1>
          <p>
            We&apos;d love to hear from you — for orders, feedback,
            partnerships or just a chat.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="contact-card">
              <div className="card-icon">📍</div>
              <div>
                <div className="t">Visit us</div>
                <div className="d">{SITE.address}</div>
              </div>
            </div>
            <div className="contact-card">
              <div className="card-icon">📞</div>
              <div>
                <div className="t">Call</div>
                <div className="d">{SITE.phone}</div>
              </div>
            </div>
            <div className="contact-card">
              <div className="card-icon">✉️</div>
              <div>
                <div className="t">Email</div>
                <div className="d">{SITE.email}</div>
              </div>
            </div>
            <div className="contact-card">
              <div className="card-icon">💬</div>
              <div>
                <div className="t">WhatsApp</div>
                <div className="d">Tap the floating button</div>
              </div>
            </div>
            <div className="map-wrap">
              <iframe
                title="MALBA_REE Hyderabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3812481175887!2d78.35521207316162!3d17.441457283454934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb930bb6e4f9db%3A0xa1e6a605c691874e!2sMalbaree!5e0!3m2!1sen!2sin!4v1784031341325!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
