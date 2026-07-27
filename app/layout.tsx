import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ToastProvider from "@/components/ToastProvider";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "MALBA_REE — Kerala Style Malba & Thick Milkshakes, Hyderabad",
  description:
    "Hyderabad's most loved Kerala-style malba. Rich, creamy and loaded with authentic Kerala flavours. Order now or explore the menu.",
  openGraph: {
    title: "MALBA_REE — Sip the Taste of Kerala",
    description: "Kerala-style malba & thick milkshakes in Hyderabad.",
    url: SITE.url,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFD600",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "MALBA_REE",
  image: [`${SITE.url}/og-image.jpg`],
  logo: `${SITE.url}/images/logo2.png`,
  url: SITE.url,
  telephone: SITE.phone,
  servesCuisine: "Kerala",
  priceRange: "₹99–₹449",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Caveat+Brush&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ToastProvider>
          <Header />
          {children}
          <Footer />
          <WhatsAppFloat />
        </ToastProvider>
      </body>
    </html>
  );
}
