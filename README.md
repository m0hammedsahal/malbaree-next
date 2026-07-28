# MALBA_REE — Next.js Site

Converted from the static HTML/CSS/JS prototype into a Next.js 15 (App Router) + TypeScript project. Design, copy, colors, fonts, and animations are preserved 1:1 from the original `style.css` / `script.js`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `app/` — pages (`/`, `/menu`, `/about`, `/franchise`, `/contact`) + `layout.tsx` (fonts, header/footer, SEO metadata, JSON-LD)
- `components/` — Header, Footer, WhatsAppFloat, ToastProvider (toasts), Reveal (scroll-reveal), MalbaCard, MenuGrid (search/filter), FaqItem, ContactForm, FranchiseForm
- `lib/data.ts` — nav links, product list, WhatsApp number, site info (single source of truth)
- `app/globals.css` — your original `style.css`, copied over verbatim, plus a couple of small utility classes replacing the old Tailwind-CDN arbitrary classes (`ml-[20px]`, `p-[13px] md:p-[24px]`)
- `public/images/` — all product images + hero video + logo, carried over from the original `images/` folder

## SEO pass (favicon, OG image, structured data)

- **Favicons**: `app/favicon.ico` + `app/icon.png` (512px monogram) + `app/apple-icon.png` (180px, solid bg) — all auto-detected by Next.js App Router, no manual `<link>` tags needed. Extra sizes (`favicon-16/32/48.png`, `icon-192/512.png`, maskable variant) live in `public/` for the manifest and any client that wants a specific size.
- **`public/manifest.json`** — PWA/Android home-screen icons + brand colors, linked from `app/layout.tsx`.
- **`public/og-image.jpg`** (1200×630) — generated from your actual logo + product renders, used for `og:image` / `twitter:image` sitewide, so links shared on WhatsApp/social show a real branded preview instead of nothing.
- **Structured data (JSON-LD)**: `Restaurant` (with geo-coordinates pulled from your Maps embed, address, price range, opening hours), `WebSite` (with a `SearchAction` so Google can show a sitelinks searchbox), and `Organization` — all sitewide in `layout.tsx`. Plus page-specific `Menu`/`MenuItem` schema on `/menu` and `FAQPage` schema on `/franchise` (both are eligible for Google rich results).
- **Canonical URLs + per-page Open Graph** on every route (`/`, `/menu`, `/about`, `/franchise`, `/contact`).
- **`app/sitemap.ts`** now sets `priority`/`changeFrequency` per route.
- Regenerate the icons/OG image anytime with:
  ```bash
  pip install Pillow
  python3 scripts/generate_icons.py
  python3 scripts/generate_og_image.py
  ```

### Still worth doing
- Fill in real `openingHoursSpecification` hours in `app/layout.tsx` (currently a placeholder 11:00–23:00).
- Add real social profile URLs to `SITE.socials` in `lib/data.ts` — populates `sameAs` in the Organization/Restaurant schema, which helps Google connect your site to your social presence.
- Once live, verify the site in **Google Search Console** and submit `https://www.malbaree.com/sitemap.xml`.
- Test the OG image/rich results with:
  - https://www.opengraph.xyz/
  - https://search.google.com/test/rich-results

## Things to finish before launch

1. **WhatsApp number** — update `WHATSAPP_NUMBER` in `lib/data.ts` (currently a placeholder).
2. **Prices** — the original design had `Rs` as a placeholder price chip with no number on every product card (`lib/data.ts` → `price` field). Fill in real prices.
3. **`public/og-image.jpg`** — a 1200×630px social-share image referenced in `app/layout.tsx`. Not included since it wasn't in the uploaded assets.
4. **`public/favicon.png` doubling as apple-touch-icon** — works, but for best results generate a dedicated 180×180 apple-touch-icon.
5. The homepage (`/`) currently ends after the franchise CTA section — the uploaded `index.html` had a stray copy of the contact section appended at the bottom (duplicate of `contact.html`), which looked unintentional, so it was left out of the homepage and kept only on `/contact`. Say the word if you actually want it on both.
6. Menu filter categories (`signature` / `premium`) were inferred from the one "Signature" badge in the original markup — the original `data-tag`/`data-name` attributes referenced by `script.js`'s filter logic weren't actually present on any card, so the filter didn't work in the static version. It's now fully functional in `lib/data.ts` — adjust tags per product as needed.

## Build

```bash
npm run build
npm start
```

Verified: clean production build, all 5 routes statically prerendered, no type errors.
