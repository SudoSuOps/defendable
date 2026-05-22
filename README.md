# DefendableOS

**Proof of Value · the operating system for evidence-backed valuation.**

Public landing site for [defendableos.com](https://defendableos.com).

A product of Swarm and Bee LLC · Florida · D-U-N-S 138652395 · doing business as Swarm & Bee AI.

---

## What this is

DefendableOS turns real-world and digital assets into evidence-backed,
market-ready records — with verified inputs, comparable analysis,
provenance, valuation receipts, and transferable Defendable Deeds.

- **Platform name:** DefendableOS
- **Market promise:** Proof of Value
- **Doctrine:** Validate the Validator
- **Intelligence engine:** AIOV (AI Opinion of Value)
- **Asset artifact:** Defendable Deed
- **Future edge module:** Defendable Box

## Asset classes in scope

Commercial Real Estate · Compute Hardware · Equipment · Luxury Goods · Datasets · AI Assets.

---

## Tech stack

- React 18 + Vite + TypeScript
- Tailwind CSS 3
- Cloudflare Pages (static + Functions)
- Inline SVG icons (no external icon lib)
- CSS transitions only (no motion lib)

## Repo layout

```
src/
  main.tsx                  React entry
  index.css                 Tailwind base + reduced-motion fallback
  pages/DefendableOS.tsx    The landing page · 12 sections · ~900 LOC
public/
  favicon.svg               DefendableOS emblem (D-in-deed monogram)
  llms.txt                  AI context manifest
  robots.txt                Explicit allow for major AI crawlers
  sitemap.xml               Sitemap (single URL)
functions/
  _middleware.ts            CF Pages SSR-lite injector
  _lib/seo-content.ts       Per-route bodyHtml + JSON-LD
  api/early-access.ts       Discord-routed early-access form handler
index.html                  Initial HTML shell
vite.config.ts              Vite config
tailwind.config.js          Tailwind theme (font-serif for accent words)
postcss.config.js           PostCSS pipeline
tsconfig.json               TypeScript strict + bundler resolution
```

## Local development

```bash
npm install
npm run dev
# Vite serves on http://localhost:5174
```

## Production build

```bash
npm run build
# Output lands in dist/
```

## Cloudflare Pages deploy

1. **Connect this repo** in CF Pages → Workers & Pages → Create Application → Pages → Connect to Git
2. **Framework preset:** None (Vite is auto-detected) — or set:
   - Build command: `npm run build`
   - Build output directory: `dist`
3. **Custom domain:** Add `defendableos.com` in Custom Domains tab. CF auto-creates DNS + SSL.
4. **Environment variables** (Settings → Environment Variables → Production):
   - `DEFENDABLE_DISCORD_WEBHOOK` — **Secret** — Discord webhook URL for early-access form submissions

If `DEFENDABLE_DISCORD_WEBHOOK` is not set, the form falls back to `LEGALSNIPER_DISCORD_WEBHOOK` if present (operator-channel pattern). If neither is set, the form returns a graceful "intake being prepared" message and tells the visitor to email `build@swarmandbee.ai` directly.

## Brand discipline

The landing page is **early-access**, not a launched marketplace. Every
illustrative value (asset details, deed records, validation queues) is
labeled "Illustrative," "Sample Analysis," or "Capability preview."

No fake stats. No fake testimonials. No fake transaction volumes. No
unsupported regulatory, legal, appraisal, or certification claims.

## License

Proprietary. © 2026 Swarm and Bee LLC. All rights reserved.

DefendableOS™, Proof of Value™, Validate the Validator™, AIOV™, and
Defendable Deed™ are unregistered trademarks of Swarm and Bee LLC.

---

## Contact

- build@swarmandbee.ai
- https://defendableos.com/#early-access
- Parent firm: https://swarmandbee.ai
