# DefendableOS

**Public franchise front door for accountable AI rails and proof-of-value workflows.**

Public landing site for [defendableos.com](https://defendableos.com).

A product of Swarm and Bee LLC · Florida · D-U-N-S 138652395 · doing business as Swarm & Bee AI.

---

## What this is

DefendableOS is the honest public front door for the Defendable stack.

Current field-tested wedge:

- **AI Agent Operations:** implemented and independently audited with limitations

Broader active build track:

- **Proof of Value / AIOV:** evidence-backed valuation and deed workflow direction, not fully field-cleared

Public front-door responsibilities:

- show live status labels
- route users to real public utility
- expose the Tribunal audit tape
- keep wins, losses, holds, and limitations visible

## Current status labels carried by this site

- `VERIFIED_AS_REPAIRED_WITH_LIMITATIONS`
- `VERIFIED_AS_DOCUMENTED_WITH_LIMITATIONS`
- `READY_WITH_LIMITATIONS`
- `REPAIR_REQUIRED`
- `FIELD INTEGRATION PENDING`
- `NOT CLEARED FOR PRODUCTION`
- `NOT CLEARED FOR EXTERNAL SAAS ENFORCEMENT`
- `NOT CLAIMED`

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

This site must not:

- promote Cloud server-side action enforcement beyond accepted audit evidence
- imply Router is live in the Cloud path without proof
- imply production clearance, certification, insurance coverage, or external SaaS enforcement
- imply hashes prove authorship or approval

The site may describe the broader Proof of Value / AIOV direction, but it
must label it as active build track or roadmap when not field-cleared.

## License

Proprietary. © 2026 Swarm and Bee LLC. All rights reserved.

DefendableOS™, Proof of Value™, Validate the Validator™, AIOV™, and
Defendable Deed™ are unregistered trademarks of Swarm and Bee LLC.

---

## Contact

- build@swarmandbee.ai
- https://defendableos.com/#early-access
- Parent firm: https://swarmandbee.ai
