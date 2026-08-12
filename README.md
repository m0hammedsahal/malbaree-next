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
- `components/` — Header, Footer, WhatsAppFloat, ToastProvider (toasts), Reveal (scroll-reveal), MalbaCard (homepage highlight cards), MenuBoard (full categorized Food/Drinks menu, search + tabs), FaqItem, ContactForm, FranchiseForm
- `lib/data.ts` — nav links, homepage highlight products (`MALBAS`), the **full real menu** (`MENU_CATEGORIES`, `ADD_ONS`), WhatsApp number, site info (single source of truth)
- `app/globals.css` — your original `style.css`, copied over verbatim, plus utility classes for the ad-hoc Tailwind-CDN arbitrary classes and the new menu-board layout
- `public/images/` — all product images + hero video + logo
- `public/images/menu/` — category photos cropped directly from your uploaded menu boards (see "Menu photos" below)

## Menu (matches your printed menu boards exactly)

`/menu` shows the **real, full menu** — 13 categories across two boards (Food / Drinks), each with the item names and prices exactly as printed on your uploaded menu photos, filterable via tabs and a search box.

**Design**: each board renders as a large "menu card" panel — dark forest-green for Food, warm gold for Drinks — echoing the two-tone look of your original printed menu boards. Category photos sit in circular medallion frames with a slow-spinning dashed ring, alternating left/right down the page, with dotted-swirl background texture and dotted leader lines between item names and prices (`components/MenuBoard.tsx`, styles in `app/globals.css` under "Premium Menu Board"). Structured data (`Menu`/`MenuSection`/`MenuItem` JSON-LD with real prices) matches.

**Menu photos**: since you didn't have separate product photography for most items (wraps, fries, burgers, thickshakes, mojitos, etc.), each category photo was cropped directly out of your two uploaded menu-board images, then upscaled ~2.2x and sharpened to look reasonable on the web. Source resolution was limited (one image was a 540px-wide phone screenshot), so image quality is good-enough-for-launch but not print-quality — most noticeably the Sundae photo, which was cut off at the bottom of the screenshot it was cropped from. **If you have the original, full-resolution food photography (or can shoot fresh photos), swapping the files in `public/images/menu/` will noticeably sharpen things up** — same filenames, so no code changes needed:
```
wrap_chicken.jpg, loaded_fries_chicken.jpg, burger.jpg,
wrap_veg.jpg, loaded_fries_veg.jpg, french_fries.jpg,
malba.jpg, avil_milk.jpg, thickshake.jpg, fresh_juice.jpg,
premium_mix.jpg, mojitos.jpg, sundae.jpg
```

The homepage "Signature Malbas" section still uses the 5 individual high-res malba product renders you originally supplied (Mango, Tender Coconut, Dates, Chikku, Avocado) as a curated highlight — the old "Special Dryfruit Malba" item was removed since it isn't on your current menu, and Fig Malba (new on the menu) only appears on the full `/menu` page since there's no individual product photo for it yet.

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
2. **Menu photo quality** — see "Menu photos" above; swap in higher-res photography when you have it, especially for the Sundae category.
3. **`app/favicon.png` doubling as apple-touch-icon** — works, but for best results generate a dedicated 180×180 apple-touch-icon from real brand artwork.
4. The homepage (`/`) currently ends after the franchise CTA section — the uploaded `index.html` had a stray copy of the contact section appended at the bottom (duplicate of `contact.html`), which looked unintentional, so it was left out of the homepage and kept only on `/contact`. Say the word if you actually want it on both.
5. **"Premium Mix" item names** — `Abooda (Mango, Dates, Sharjah)` was transcribed exactly as printed on your menu photo; if "Sharjah" is a typo (e.g. for a different ingredient), fix it in `lib/data.ts`.

## Build

```bash
npm run build
npm start
```

Verified: clean production build, all 5 routes statically prerendered, no type errors.
