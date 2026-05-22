# Marketing Asset Studio · doctrine

## The thesis

> *"That marketing asset feature is cracked · asset landing page · teaser sheet · OM that would be a serious value."* — Donovan, 2026-05-22

DefendableOS already produces the **proof record** (deed, manifest, validator
receipt, ENS reservation). The **Marketing Asset Studio** is the upgrade
feature that turns that record into the **deliverables a market expects** —
without the client paying a broker, photographer, and copywriter to manually
assemble them.

This is not a CMS. This is **deed → marketing deliverables in one click**, with
every claim still tied back to validator-cleared evidence.

## The two-tier surface (per asset)

Each Defendable deed gets two public surfaces:

| Surface | URL pattern | Who it's for | What it shows |
|---|---|---|---|
| **Verification** | `/verify/{slug}` | Auditors, counterparties, regulators · institutional view | Privacy-filtered JSON · status decomposition · integrity block · honest draft language |
| **Showcase** | `/showcase/{slug}` | Buyers, brokers, market makers · marketing view | 3D scene · glass-card storytelling · cinematic copy · download-ready teaser PDF / OM |

Both pull from the **same canonical deed JSON**. Doctrine guarantees travel
through both: no draft can pretend to be issued, no private evidence can leak,
no listing can be relabelled as a confirmed sale.

## Lanes (one per asset class)

The bridge in `src/lib/showcaseBridge.ts` already routes `ASSET_CLASS_PRESETS`
for six classes. Each lane needs:

1. **Hero scene** · the visual anchor (3D model, render, photo set)
2. **Headline + supporting copy** · audience-correct language
3. **Performance card** · the asset-class-specific evidence summary
4. **Marketing deliverables** · the downloadable artefacts

| Lane | Hero scene | Performance card | Deliverables |
|---|---|---|---|
| **COMPUTE_HARDWARE** | Procedural GPU (live) | Benchmark Receipt · throughput · driver fingerprint | Showcase page · benchmark receipt PDF · spec sheet |
| **REAL_ESTATE** ← *the cracked one* | Procedural building / sponsor render | Underwriting Receipt · T-12 · rent roll | Showcase page · **teaser sheet PDF** · **OM PDF** · broker contact card |
| **EQUIPMENT** | Procedural equipment block | Service Receipt · cycle hours · maintenance log | Showcase page · inspection report PDF |
| **LUXURY_GOODS** | Product macro shot | Provenance Receipt · grading · chain-of-custody | Showcase page · provenance dossier PDF |
| **DATASET** | Abstract data scene | Integrity Receipt · sha-tree · licensing | Showcase page · model card PDF · licensing terms |
| **AI_ASSET** | Model weight visualisation | Eval Receipt · benchmark suite | Showcase page · model card · eval results |

## Why CRE is the unlock

For a $5M+ CRE asset, brokers/sponsors today pay:

- **$8-25K** for a professional photo + drone shoot
- **$4-15K** for an OM written by a financial analyst
- **$2-8K** for the teaser one-pager
- **$3-12K** for the listing landing page
- **~$20-60K total** per asset, 3-6 weeks of vendor coordination

DefendableOS already holds the **canonical evidence** (manifest, validator
receipt, AIOV draft, sources). The Marketing Asset Studio just expresses that
evidence in the formats CRE expects:

- **Teaser sheet (PDF)** — single page · cap rate (when validator-cleared) ·
  square footage · year built · tenant rollup · broker contact · disclosure
  block
- **Offering Memorandum (PDF)** — 20-40 pages · executive summary · property
  description · market analysis · financial overview · investment highlights ·
  full disclosure appendix · all citations tracing back to evidence_item_ids
- **Asset landing page** — the `/showcase/{slug}` interactive surface
- **Broker contact card** — vCard QR code + ENS handle

**Pricing intuition:** charge $1,500-3,000 per asset for the full Studio
package vs the $20-60K traditional cost. ~93% margin on the AI generation,
and Defendable's positioning becomes:

> *"We don't just record your asset. We bring it to market with proof."*

## Doctrine guardrails (non-negotiable)

The Studio MUST NEVER:

- Generate a teaser sheet or OM with figures the validator hasn't reviewed
- Show a final value when `value_status = WITHHELD_PENDING_VALIDATOR_REVIEW`
- Treat the showcase URL as "publication" until human approval has been recorded
- Embed private evidence (only manifest_sha256 references)
- Claim certified appraisal, licensed valuation, or finalized issuance on any
  generated artifact while the source deed is draft

Every generated PDF includes the canonical draft disclaimer when the source
deed is in draft state, and switches to issued language only when the deed
clears all four blocker conditions.

## Implementation status

| | |
|---|---|
| `src/lib/showcaseBridge.ts` | shipped — typed shape + per-asset-class presets + record fetcher |
| `/compute` page | shipped — currently uses `COMPUTE_DEFAULT_PROPS` hardcoded |
| `/showcase/{slug}` route | **next** — fetch deed via bridge + render Hero with `mapPublicRecordToProps()` |
| Hero refactor to consume props | **next** — currently the hero ignores props in (mid-flight) |
| PDF generators | future — WeasyPrint server-side, called from platform admin tools |
| CRE 3D scene variant | future — procedural building / lot / massing |
| Equipment / Luxury / Dataset scenes | future |
| Studio admin tab | future — operator-side download buttons in `/portal/assets/{id}/marketing` |
| Stripe Studio pricing | future — once first 3 case studies ship |

## Roadmap

**Phase 0 (today, partial)** · Compute showcase rendering · bridge typed · `/compute` lives  
**Phase 1** · Wire `/showcase/{slug}` to render any compute deed dynamically  
**Phase 2** · Add a CRE preset deed + render `/showcase/<cre-slug>` with stub building scene  
**Phase 3** · PDF generator service · teaser sheet + OM for the CRE preset  
**Phase 4** · Operator UI: `Generate marketing package` button in the platform's deed tab  
**Phase 5** · Stripe billing for the Studio add-on · per-asset checkout  
**Phase 6** · Open the studio for the other four asset classes  

## The closing line for sales

> *"DefendableOS turns your asset into a defendable record. The Marketing
> Asset Studio turns that record into the listing, the teaser, and the OM —
> with every figure traceable to the evidence that survived the validator.
> Brokers spend six weeks and $40K to do this manually. We do it from the
> deed you already have."*

Locked 2026-05-22.
