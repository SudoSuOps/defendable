# Defendable CRE · MarketReady · Palm Grove Marketplace · Build Spec

This is the LOCKED specification all CRE MarketReady code references.
Single source of truth for the illustrative demo. Doctrine-preserving.

---

## 0 · Asset identity (illustrative only · never an active offering)

| Field | Value |
|---|---|
| Asset reference | `DOV-CRE-DEMO-000001` |
| Deed reference | `DDEED-DOV-CRE-DEMO-000001-v1` |
| Property name | Palm Grove Marketplace |
| Subtitle | Grocery-Anchored Neighborhood Retail Center |
| Market | South Florida |
| Asset class | `COMMERCIAL_REAL_ESTATE` |
| Property type | `GROCERY_ANCHORED_NEIGHBORHOOD_RETAIL` |
| Offering status | `ILLUSTRATIVE_PROPERTY_PREVIEW` |
| ENS identity | `palm-grove-marketplace.cre.demo.defendable.eth` |
| ENS status | `RESERVED_NOT_ISSUED` |

## 1 · Illustrative site facts (every metric displays "Illustrative Demo Data")

| Metric | Value |
|---|---|
| Gross Leasable Area | 82,400 SF |
| Occupancy | 94.2% |
| Tenant Spaces | 14 |
| Year Built / Renovated | 2016 / 2024 |
| Parking Ratio | 4.7 / 1,000 SF |
| Parcel Size | 9.8 Acres |

## 2 · Tenant mix (generic categories ONLY · no real brands or logos)

```
Anchor Grocer            38,000 SF      ━━━━━━━━━━━━━━━━━━━ 46%
Fitness Studio            7,500 SF      ━━━━ 9%
Fast Casual Dining        3,200 SF      ━━ 4%
Coffee Retailer           2,100 SF      ━ 3%
Medical / Wellness        4,500 SF      ━━ 5%
Local Services + flex    27,100 SF      ━━━━━━━━━━━━━ 33%
                       ─────────────
                        82,400 SF      ━━━━━━━━━━━━━━━━━━━━━━ 100%
```

## 3 · Lifecycle states (CRE-specific display layer · DB stays standard)

| Surface | Public-display text | DB column value |
|---|---|---|
| Record | `DRAFT_MARKETING_PREVIEW` | `DRAFT_REVIEW_RECORD` |
| Validator | `PASSED_FOR_DRAFT_MARKETING_DISPLAY` | `PASSED_FOR_PACKAGING` |
| Value | `NO_FINAL_VALUATION_REPRESENTED` | (display only · no DB enum) |
| ENS | `RESERVED_NOT_ISSUED` | `RESERVED_NOT_ISSUED` |
| Publication | `NOT_PUBLISHED` | `NOT_PUBLISHED` |

**Why two columns:** the DB enums power existing doctrine guards
(`is_draft_deed`, `render_public_preview`, validator checks). The
public-display text is appended by the CRE walker into the AIOV/Deed
JSON so the frontend can render asset-class-appropriate copy without
weakening the guards that protect compute deeds.

## 4 · Disclosure language (MUST appear on every public surface)

**Hero band (large):**
> ILLUSTRATIVE PROPERTY PREVIEW · NOT AN ACTIVE OFFERING · NO FINAL VALUATION REPRESENTED

**Footer disclosure (small italic, every page including teaser + OM):**
> Illustrative product demonstration only. Not an active offering,
> appraisal, certification, valuation opinion, or solicitation to
> acquire an interest in real property.

**Draft proof record disclaimer:**
> This is an illustrative draft marketing record created to demonstrate
> the DefendableOS platform. No active offering, final valuation,
> professional appraisal, legal certification, property authentication,
> issued deed or ENS publication is represented.

**Buyer Room state badge:**
> ACCESS REQUEST REQUIRED · DEMO ONLY

## 5 · Routes (React Router · BrowserRouter)

```
/showcase/cre/palm-grove-marketplace             (main hero page)
/showcase/cre/palm-grove-marketplace/teaser      (print-ready teaser)
/showcase/cre/palm-grove-marketplace/om          (offering memorandum preview)
/showcase/cre/palm-grove-marketplace/buyer-room  (controlled diligence preview)
/showcase/cre/palm-grove-marketplace/proof-record (JSON deed viewer)
```

Each route MUST:
- Render the hero band disclosure
- Render the footer disclosure
- Link back to /showcase/cre/palm-grove-marketplace
- Use the existing dark institutional palette (`neutral-950`, `stone-*`, `honey-*`)
- Be responsive (mobile + desktop)
- Be keyboard-navigable
- Honor `prefers-reduced-motion`

## 6 · Brand palette (locked · matches existing DefendableOS site)

- Background: `bg-neutral-950` to `bg-stone-950`
- Borders: `border-stone-900/80`, `border-stone-700/60`
- Text: `text-stone-100` (primary), `text-stone-400` (secondary), `text-stone-500` (tertiary)
- Honey accent: `text-honey-300`, `text-honey-200`, `border-honey-400/55`
- Draft chip: `border-amber-500/40 bg-amber-500/[0.08] text-amber-300`
- Mono treatment for IDs, hashes, refs: `font-mono`
- Section eyebrows: `text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold`
- Print-safe: pages must include `@media print` rules dropping dark background

## 7 · Section structure (main `/showcase/cre/palm-grove-marketplace`)

**A. Hero**
- Property name (serif large)
- Subtitle + market
- Hero band disclosure
- Stat cards: 82,400 SF GLA · 94.2% Occupancy (Illustrative) · 14 Tenant Spaces (Illustrative) · South Florida Market (Demo)
- 3 CTAs: View Teaser Sheet · Explore Draft Proof Record · Request a CRE Pilot
- Interactive aerial/site-plan visual on one side, glass cards on the other

**B. Illustrative Property Highlights** (5 sample bullets · all draft-safe)

**C. Property Overview** (7 metrics with Illustrative Demo Data label per metric)

**D. Interactive Tenant Mix / Site Plan** (CSS aerial · hover/click tenant blocks · 3 view toggles: Site Plan · Tenant Mix · Proof Layers)

**E. Defendable Difference** (headline "The evidence spine behind the offering" + 4 cards: Approved Claims Library · Evidence Manifest · Validator Receipt · Draft Property Record)

**F. MarketReady Deliverables** (7 cards: Property Website · Teaser Sheet · OM · Buyer Room · Campaign Media Kit · Listing Export Package · Draft Defendable Record)

**G. Offering Materials Preview** (4 link cards · View Teaser · View OM · Preview Buyer Room · Explore Draft Proof Record)

**H. Draft Proof Record Preview** (embedded preview card with lifecycle states + disclosure)

**I. Buyer CTA** ("Bring your property to market with proof behind the presentation.")

## 8 · Approved Claims Library (frontend-static · doctrine demonstration)

```ts
export const PALM_GROVE_APPROVED_CLAIMS = {
  PUBLIC_SAFE_APPROVED_FOR_DEMO: [
    "Palm Grove Marketplace is an illustrative demo property.",
    "Asset class: Commercial Real Estate.",
    "Property type concept: Grocery-Anchored Neighborhood Retail Center.",
    "All displayed metrics are illustrative demo data.",
    "Draft proof record exists for demonstration.",
  ],
  PUBLIC_SAFE_WITH_DISCLOSURE: [
    "Displayed size, occupancy, tenant mix and property facts, only when shown with Illustrative Demo Data label.",
  ],
  BLOCKED_FROM_PUBLIC_MARKETING: [
    "Final value conclusion",
    "Offering price",
    "Cap rate",
    "NOI",
    "Investment returns",
    "Actual tenant credit claims",
    "Certified property condition",
    "Appraisal conclusion",
    "Issued deed",
    "ENS publication",
  ],
};
```

## 9 · Backend (extends existing Asset/AIOV/Deed pattern · NO schema migration)

- New file: `services/api/app/services/walk_cre_asset.py`
  - Mirrors `walk_compute_asset.py`
  - Spec has the CRE structured payload baked in
  - AIOV.analysis_json carries: asset profile · property metrics · tenant mix · approved-claims library · publication policy
  - DefendableDeed JSON includes `marketready_package`, `disclosures`, `record_status_display` overrides
  - Uses existing AssetClass.REAL_ESTATE enum value
  - Uses Brave for "South Florida grocery anchored retail market 2026" sources (optional · keeps the live-Brave story going)
  - Skips Kimi AIOV call for this demo (or does call it but stores the result alongside the hand-crafted structured payload)

- Deed lifecycle: stays `DRAFT_REVIEW_RECORD` at the DB level. The public deed JSON includes:
  - `record_status_display: "DRAFT_MARKETING_PREVIEW"`
  - `validator_review.status_display: "PASSED_FOR_DRAFT_MARKETING_DISPLAY"`
  - `aiov_analysis.value_display_status: "NO_FINAL_VALUATION_REPRESENTED"` (new enum string · safe addition · doctrine treats it as withholding-equivalent)

## 10 · 3D / interactive visual decision

**Choice: premium CSS/SVG site plan + Framer-Motion-free animations.**

Rationale: the user explicitly hedged: "If the project already has a
simpler visual system, use a high-quality SVG/CSS/Framer Motion
site-plan implementation rather than forcing heavy 3D." We already
proved R3F works for compute · the CRE site plan is a flat aerial,
which CSS/SVG renders at 60fps with zero WebGL risk, no HDRI fetch,
and is print-friendly.

Implementation:
- `<SitePlanAerial>` component · 540×360 SVG with isometric tilt
- Building blocks as `<rect>` with subtle gradient fills
- Anchor grocer block visually larger + center-anchored
- Inline tenant strip with 5-6 hover-targetable rectangles
- Parking lot grid (subtle thin lines)
- Parcel boundary (thin honey-gold dashed)
- Drive-aisle arrows
- Glass UI cards float over with current tenant info on hover
- Three view modes (Site Plan / Tenant Mix / Proof Layers) toggle the overlay
- "Proof Layers" mode overlays abstract evidence markers (lease-abstract icon at the anchor block, market-research icon outside the parcel, etc.)

Mobile fallback: simpler vertical-stack tenant-mix bar chart + property facts grid.

## 11 · Teaser sheet print spec

Single 8.5×11 page (US Letter), portrait, with:
- Top band: DEFENDABLE CRE · ILLUSTRATIVE TEASER
- Cover: property name + subtitle + market
- 4-up stats grid (GLA · Occupancy · Tenant Spaces · Acres)
- 5 illustrative highlights
- Proof panel (Defendable Record Status · Validator Status · ENS Status · Value Status)
- Footer disclosure on every printed page
- Page break controls so the screen view + print view both render cleanly
- Print button uses `window.print()` · no external PDF generator

## 12 · OM preview spec

Multi-section digital OM, also printable via `window.print()`:
1. Cover
2. Confidentiality / Illustrative Demo Notice
3. Executive Summary
4. Illustrative Property Highlights
5. Property Overview
6. Conceptual Site Plan / Tenant Mix
7. Location & Market Presentation Preview
8. **Financial Analysis Placeholder** (NO numbers · "Available in an approved property engagement…")
9. Evidence / Approved Claims Architecture
10. Validator Review Preview
11. Buyer Room / Diligence Workflow
12. Draft Defendable Property Record (mini JSON snapshot)
13. Contact / Request Pilot CTA

Each section gets a header eyebrow + heading + body. Footer disclosure on every printed page.

## 13 · Buyer Room preview

- Header: DEFENDABLE ROOM · Controlled Buyer Diligence Preview
- State: ACCESS REQUEST REQUIRED · DEMO ONLY
- 9 document category cards · each with safe placeholder status
- Access request form (Name · Work Email · Company · Buyer Type · Message · Illustrative-Demo Checkbox)
- On submit: show inline message "Buyer Room intake is available in pilot engagements. This demonstration does not grant access to real transaction materials."
- No backend wiring · pure UI demonstration
- Security note: "Private diligence materials remain permissioned. Public marketing pages expose approved fields and proof references only."

## 14 · Proof Record route

Pretty-printed JSON viewer showing the deed_public payload that the
backend produces. Includes a "Copy raw JSON" button and the
SHA-256 hash. Falls back to a static snapshot if the API is
unreachable.

## 15 · Truth controls (audited per lane · enforced in CI)

- [x] Every CRE route renders the hero band disclosure (ILLUSTRATIVE PROPERTY PREVIEW)
- [x] Every CRE route renders the footer disclosure
- [x] No real tenant names or logos
- [x] No price, cap rate, NOI, IRR numbers anywhere except labeled illustrative ranges
- [x] No "active offering", "available for purchase", "in market"
- [x] No "issued at" timestamp · deed shows "Draft generated"
- [x] ENS status RESERVED_NOT_ISSUED visible everywhere ENS is referenced
- [x] `issued_at: null` in the JSON deed
- [x] No private evidence shown · evidence_packet says ILLUSTRATIVE_DEMO_PACKET
- [x] No fake submission to backend on Buyer Room form
- [x] Print styles preserve disclosures
