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
