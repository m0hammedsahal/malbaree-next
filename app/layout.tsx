import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ToastProvider from "@/components/ToastProvider";
import { SITE } from "@/lib/data";

const TITLE = "MALBA_REE — Kerala Style Malba & Thick Milkshakes, Hyderabad";
const DESCRIPTION =
  "Hyderabad's most loved Kerala-style malba. Rich, creamy and loaded with authentic Kerala flavours. Order now or explore the menu.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "malba Hyderabad",
    "Kerala malba",
    "Kerala style milkshake",
    "thick milkshake Hyderabad",
    "best milkshake Hyderabad",
    "MALBA_REE",
    "dryfruit malba",
    "mango malba",
    "tender coconut malba",
    "milkshake franchise India",
  ],
  authors: [{ name: "MALBA_REE" }],
  category: "Food & Beverage",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    siteName: "MALBA_REE",
    title: "MALBA_REE — Sip the Taste of Kerala",
    description: "Kerala-style malba & thick milkshakes in Hyderabad.",
    url: SITE.url,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MALBA_REE — Kerala style malba and thick milkshakes, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MALBA_REE — Sip the Taste of Kerala",
    description: "Kerala-style malba & thick milkshakes in Hyderabad.",
    images: ["/og-image.jpg"],
  },
  manifest: "/manifest.json",
  // TODO: add real verification codes once you set these up
  // verification: {
  //   google: "your-google-search-console-code",
  // },
};

export const viewport: Viewport = {
  themeColor: "#FFD600",
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE.url}/#restaurant`,
  name: SITE.name,
  image: [`${SITE.url}/og-image.jpg`],
  logo: `${SITE.url}/images/logo2.png`,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  servesCuisine: "Kerala",
  priceRange: "₹99–₹449",
  acceptsReservations: "False",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  hasMap: `https://www.google.com/maps?q=${SITE.geo.lat},${SITE.geo.lng}`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      // TODO: confirm real opening hours
      opens: "11:00",
      closes: "23:00",
    },
  ],
  sameAs: SITE.socials,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/menu?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/images/logo2.png`,
  sameAs: SITE.socials,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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
