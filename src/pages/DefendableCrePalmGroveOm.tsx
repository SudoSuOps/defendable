/**
 * /showcase/cre/palm-grove-marketplace/om
 *
 * Multi-section Offering Memorandum *preview* for the Palm Grove
 * Marketplace illustrative CRE demo. Screen-first, print-friendly
 * (window.print()). 13 sections per the build spec.
 *
 * Doctrine (HARD):
 *  - NO price · NO cap rate · NO NOI · NO IRR · NO return projection
 *  - NO real tenant brand names (only generic categories from PALM_GROVE)
 *  - NO real broker/license/contact data (only approved hello@swarmandbee.ai)
 *  - Every metric labeled "Illustrative Demo Data"
 *  - Financial Analysis section MUST be empty of numbers
 *  - Footer disclosure repeats on every PRINTED page
 *
 * Reads from `PALM_GROVE` (single source of truth) in
 * `src/lib/cre/palmGrove.ts`. Reuses `<CreSitePlanAerial />` for the
 * Conceptual Site Plan / Tenant Mix section.
 */
import { Link } from "react-router-dom";
import { ReactNode } from "react";

import { CrePageShell } from "../components/cre/CrePageShell";
import { CreSitePlanAerial } from "../components/cre/CreSitePlanAerial";
import { PALM_GROVE, formatSf, formatPct } from "../lib/cre/palmGrove";

const VALIDATOR_CHECKS = [
  { id: "CHECK_1", label: "Source Authenticity" },
  { id: "CHECK_2", label: "Evidence Integrity" },
  { id: "CHECK_3", label: "Claim Coverage" },
  { id: "CHECK_4", label: "Doctrine Compliance" },
  { id: "CHECK_5", label: "Privacy Filter" },
] as const;

const FINANCIAL_PLACEHOLDER_CATEGORIES = [
  "Rent Roll Review",
  "Lease Abstracts",
  "NOI Support",
  "Comparable Sales",
  "Debt / DSCR Analysis",
  "Cap Rate Review",
  "Risk Flags",
] as const;

export default function DefendableCrePalmGroveOm() {
  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <CrePageShell printSafe showHeroDisclosure>
      {/* Action bar · hidden in print */}
      <div className="px-6 pt-6 pb-3 print:hidden border-b border-stone-900/80">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/showcase/cre/palm-grove-marketplace"
            className="text-honey-300 hover:text-honey-200 text-sm font-semibold"
          >
            ← Back to Property Experience
          </Link>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded border border-honey-400/55 bg-honey-400/[0.08] text-honey-200 hover:bg-honey-400/[0.15] text-sm font-semibold transition-colors"
            >
              Print / Export OM Preview
            </button>
            <Link
              to="/showcase/cre/palm-grove-marketplace/buyer-room"
              className="inline-flex items-center gap-2 px-4 py-2 rounded border border-stone-700 text-stone-300 hover:border-honey-400/40 text-sm"
            >
              Request Buyer Room Access
            </Link>
          </div>
        </div>
      </div>

      {/* ─── SECTION 1 · Cover ────────────────────────────────────────── */}
      <OmSection eyebrow="Defendable CRE · Offering Memorandum Preview" pageBreak>
        <div className="mt-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-100 leading-[1.05]">
            {PALM_GROVE.propertyName}
          </h1>
          <p className="mt-4 text-lg text-stone-300 leading-snug">
            <span className="font-serif italic text-honey-200">
              {PALM_GROVE.subtitle}
            </span>{" "}
            · {PALM_GROVE.market}
          </p>
          <div className="mt-3 text-[10px] font-mono uppercase tracking-[0.18em] text-stone-500">
            Asset Ref · <span className="text-stone-400">{PALM_GROVE.assetReference}</span>
            {"   "}·{"   "}
            Deed Ref · <span className="text-stone-400">{PALM_GROVE.deedReference}</span>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <CoverStat label="GLA" value={formatSf(PALM_GROVE.facts.grossLeasableAreaSf)} />
            <CoverStat label="Occupancy" value={formatPct(PALM_GROVE.facts.occupancyPct)} />
            <CoverStat label="Tenant Spaces" value={`${PALM_GROVE.facts.tenantSpaces}`} />
            <CoverStat label="Acres" value={`${PALM_GROVE.facts.parcelSizeAcres}`} />
          </div>

          <div className="mt-8 inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] font-semibold border rounded-full px-2.5 py-1 text-amber-300 border-amber-500/40 bg-amber-500/[0.08]">
            DRAFT · NOT ISSUED · NOT PUBLISHED
          </div>
        </div>
      </OmSection>

      {/* ─── SECTION 2 · Confidentiality / Illustrative Demo Notice ───── */}
      <OmSection
        eyebrow="Confidentiality · Illustrative Demo Notice"
        title="Confidentiality and Illustrative Demonstration"
        pageBreak
      >
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/[0.05] p-6 print:border-stone-300 print:bg-transparent">
          <p className="text-stone-200 text-sm leading-relaxed">
            This document is an{" "}
            <span className="font-serif italic text-honey-200">
              illustrative product demonstration
            </span>{" "}
            of the DefendableOS Defendable CRE MarketReady workflow. It is not
            an active offering, appraisal, certification, valuation opinion,
            broker price opinion or solicitation to acquire an interest in
            real property.
          </p>
          <p className="mt-4 text-stone-300 text-sm leading-relaxed">
            All property facts, tenant categories, occupancy figures, site
            plans and lifecycle states displayed in this preview are
            illustrative demo data and are not derived from any real owner,
            broker, lease abstract, rent roll, appraisal or transaction.
          </p>
          <p className="mt-4 text-[11px] italic text-stone-500 leading-relaxed">
            {PALM_GROVE.disclosure.footerShort}
          </p>
        </div>
      </OmSection>

      {/* ─── SECTION 3 · Executive Summary ─────────────────────────────── */}
      <OmSection eyebrow="Section 3" title="Executive Summary" pageBreak>
        <div className="space-y-4 text-stone-300 text-sm leading-relaxed max-w-3xl">
          <p>
            <span className="text-stone-100 font-semibold">{PALM_GROVE.propertyName}</span>{" "}
            is presented here as an illustrative grocery-anchored neighborhood
            retail center concept positioned in the {PALM_GROVE.market} market.
            The asset is rendered in the Defendable CRE format to demonstrate
            how DefendableOS prepares a property for market with approved
            claims, evidence-linked marketing facts and a draft proof record
            traveling alongside the offering materials.
          </p>
          <p>
            The illustrative format is conceived as a stabilized
            neighborhood-retail experience featuring a{" "}
            <span className="font-serif italic text-honey-200">
              {PALM_GROVE.illustrativeHighlights[0].toLowerCase()}
            </span>{" "}
            and a {PALM_GROVE.illustrativeHighlights[1].toLowerCase()}. The
            preview demonstrates a {PALM_GROVE.illustrativeHighlights[2].toLowerCase()},
            a {PALM_GROVE.illustrativeHighlights[3].toLowerCase()}, and a
            {" "}{PALM_GROVE.illustrativeHighlights[4].toLowerCase()}.
          </p>
          <p>
            No underwriting conclusion, offering price, capitalization rate,
            net operating income, return projection or final valuation is
            represented anywhere in this preview. Financial analysis is
            available only inside an approved property engagement after source
            document review, underwriting verification and publication
            controls. See Section 8 for the placeholder architecture.
          </p>
        </div>
      </OmSection>

      {/* ─── SECTION 4 · Illustrative Property Highlights ─────────────── */}
      <OmSection eyebrow="Section 4" title="Illustrative Property Highlights" pageBreak>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PALM_GROVE.illustrativeHighlights.map((h) => (
            <div
              key={h}
              className="rounded-lg border border-stone-800 bg-stone-950/60 p-5 print:border-stone-300 print-keep"
            >
              <div className="text-[9px] font-mono uppercase tracking-[0.22em] text-honey-400/80 mb-2 font-semibold">
                {PALM_GROVE.disclosure.metricLabel}
              </div>
              <div className="text-stone-100 text-sm font-medium leading-snug">{h}</div>
            </div>
          ))}
        </div>
      </OmSection>

      {/* ─── SECTION 5 · Property Overview ─────────────────────────────── */}
      <OmSection eyebrow="Section 5" title="Property Overview" pageBreak>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <OverviewCard label="Asset Type" value="Grocery-Anchored Neighborhood Retail" />
          <OverviewCard label="Gross Leasable Area" value={formatSf(PALM_GROVE.facts.grossLeasableAreaSf)} />
          <OverviewCard label="Site Area" value={`${PALM_GROVE.facts.parcelSizeAcres} Acres`} />
          <OverviewCard label="Tenant Spaces" value={`${PALM_GROVE.facts.tenantSpaces}`} />
          <OverviewCard label="Occupancy" value={formatPct(PALM_GROVE.facts.occupancyPct)} />
          <OverviewCard
            label="Year Built / Renovated"
            value={`${PALM_GROVE.facts.yearBuilt} / ${PALM_GROVE.facts.yearRenovated}`}
          />
          <OverviewCard label="Parking Ratio" value={`${PALM_GROVE.facts.parkingRatioPer1000Sf} / 1,000 SF`} />
          <OverviewCard label="Asset Class" value="Commercial Real Estate" />
        </div>
        <p className="mt-6 text-[11px] text-stone-500 italic leading-relaxed">
          Every property metric shown is illustrative demo data created to
          demonstrate Defendable CRE workflow functionality and is not derived
          from any real property record.
        </p>
      </OmSection>

      {/* ─── SECTION 6 · Conceptual Site Plan / Tenant Mix ─────────────── */}
      <OmSection eyebrow="Section 6" title="Conceptual Site Plan and Tenant Mix" pageBreak>
        <div className="print:hidden">
          <CreSitePlanAerial />
        </div>
        {/* Print fallback · static description */}
        <div className="hidden print:block rounded border border-stone-300 p-6">
          <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-mono font-semibold">
            Conceptual Site Plan (Print Fallback)
          </div>
          <p className="mt-2 text-stone-700 text-sm leading-relaxed">
            An illustrative L-shape neighborhood retail center with an anchor
            grocer block, an inline-tenant strip, surface parking and
            landscaped pad islands. Conceptual visualization for product
            demonstration only · not a survey, site plan certification,
            appraisal or active offering document.
          </p>
        </div>

        <div className="mt-8">
          <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-honey-400/80 font-semibold">
            Tenant Mix · Generic Categories Only
          </div>
          <div className="mt-3 space-y-2">
            {PALM_GROVE.tenants.map((t) => (
              <div
                key={t.category}
                className="grid grid-cols-[1fr_auto_auto] gap-4 items-center px-4 py-3 rounded border border-stone-800 bg-stone-950/40 print:border-stone-300 print:bg-transparent"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${
                      t.block === "anchor" ? "bg-honey-400" : "bg-stone-500"
                    }`}
                  />
                  <span className="text-stone-100 text-sm">{t.category}</span>
                </div>
                <span className="font-mono text-xs text-stone-400">{formatSf(t.sf)}</span>
                <span className="font-mono text-xs text-honey-300 w-14 text-right">
                  {t.sharePct.toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-stone-500 italic">
            Illustrative tenant mix concept · no real brands or logos · not
            derived from any real lease abstract or rent roll.
          </p>
        </div>
      </OmSection>

      {/* ─── SECTION 7 · Location & Market Presentation Preview ──────── */}
      <OmSection
        eyebrow="Section 7"
        title="Location and Market Presentation Preview"
        pageBreak
      >
        <div className="rounded-lg border border-stone-800 bg-stone-950/60 p-6 print:border-stone-300 print:bg-transparent">
          <p className="text-stone-300 text-sm leading-relaxed">
            Detailed location intelligence, market context and demographic
            overlays are available in a real engagement after market
            validation. South Florida grocery-anchored retail sector context
            for this illustrative preview is reserved for the approved
            property engagement workflow.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            {[
              "Trade-area mapping and drive-time bands",
              "Demographic, daytime population and income overlays",
              "Sector-level grocery-anchored retail context",
              "Comparable center positioning (engagement-only)",
              "Tenant adjacency and traffic-generator review (engagement-only)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-300">
                <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-stone-500 flex-shrink-0" />
                <span>{item}</span>
                <span className="ml-auto text-[9px] uppercase tracking-[0.18em] text-honey-400/80 font-mono">
                  Engagement Only
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[11px] italic text-stone-500 leading-relaxed">
            No real maps, demographic claims, or comparable property
            references are included in this illustrative preview.
          </p>
        </div>
      </OmSection>

      {/* ─── SECTION 8 · Financial Analysis PLACEHOLDER (no numbers) ──── */}
      <OmSection eyebrow="Section 8" title="Financial Analysis Module" pageBreak>
        <div className="rounded-xl border border-honey-400/40 bg-stone-950/70 p-8 print:border-stone-300 print:bg-transparent print-keep">
          <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-honey-400/80 font-semibold">
            Financial Analysis Module
          </div>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-stone-100">
            <span className="font-serif italic text-honey-200">Reserved</span>{" "}
            for the approved engagement.
          </h3>
          <p className="mt-4 text-stone-300 text-sm leading-relaxed max-w-2xl">
            Available in an approved property engagement after source
            document review, underwriting verification and publication
            controls.
          </p>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {FINANCIAL_PLACEHOLDER_CATEGORIES.map((cat) => (
              <div
                key={cat}
                className="rounded border border-stone-800 bg-stone-950/60 p-3 print:border-stone-300 print:bg-transparent"
              >
                <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-mono font-semibold">
                  Category
                </div>
                <div className="mt-1 text-stone-100 text-sm">{cat}</div>
                <div className="mt-2 text-[9px] font-mono uppercase tracking-[0.18em] text-honey-400/80">
                  Engagement Only
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 border-t border-stone-800 print:border-stone-300 pt-4">
            <p className="text-[11px] italic text-stone-500 leading-relaxed">
              No underwriting conclusion, offering price, cap rate, NOI,
              return projection or valuation is represented in this
              illustrative demo.
            </p>
          </div>
        </div>
      </OmSection>

      {/* ─── SECTION 9 · Evidence / Approved Claims Architecture ──────── */}
      <OmSection
        eyebrow="Section 9"
        title="Evidence and Approved Claims Architecture"
        pageBreak
      >
        <p className="text-stone-300 text-sm leading-relaxed max-w-3xl">
          Only approved claims may flow into public marketing materials.
          Marketing copy is generated against the approved-claims library
          below · everything else is blocked at the publication boundary and
          stays inside the controlled diligence room.
        </p>
        <div className="mt-7 grid lg:grid-cols-3 gap-3">
          <ClaimsColumn
            tone="approved"
            title="Public-Safe · Approved For Demo"
            items={PALM_GROVE.approvedClaims.publicSafeApprovedForDemo}
          />
          <ClaimsColumn
            tone="disclosed"
            title="Public-Safe · With Disclosure"
            items={PALM_GROVE.approvedClaims.publicSafeWithDisclosure}
          />
          <ClaimsColumn
            tone="blocked"
            title="Blocked From Public Marketing"
            items={PALM_GROVE.approvedClaims.blockedFromPublicMarketing}
          />
        </div>
      </OmSection>

      {/* ─── SECTION 10 · Validator Review Preview ─────────────────────── */}
      <OmSection eyebrow="Section 10" title="Validator Review Preview" pageBreak>
        <p className="text-stone-300 text-sm leading-relaxed max-w-3xl">
          Deterministic validator review categories run before any draft
          marketing package is released for preview. The illustrative review
          below shows the category labels and the public-display state for
          each.
        </p>
        <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {VALIDATOR_CHECKS.map((c) => (
            <div
              key={c.id}
              className="rounded-lg border border-stone-800 bg-stone-950/60 p-4 print:border-stone-300 print:bg-transparent print-keep"
            >
              <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-honey-400/80 font-semibold">
                {c.id}
              </div>
              <div className="mt-2 text-stone-100 text-sm font-semibold leading-snug">
                {c.label}
              </div>
              <div className="mt-3 text-[10px] font-mono uppercase tracking-[0.18em] text-amber-300 leading-snug">
                PASSED_FOR_DRAFT_MARKETING_DISPLAY
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[11px] italic text-stone-500 leading-relaxed">
          Illustrative validator category names · the production protocol
          runs the full deterministic check suite before any preview is
          released.
        </p>
      </OmSection>

      {/* ─── SECTION 11 · Buyer Room / Diligence Workflow ─────────────── */}
      <OmSection
        eyebrow="Section 11"
        title="Buyer Room and Diligence Workflow"
        pageBreak
      >
        <p className="text-stone-300 text-sm leading-relaxed max-w-3xl">
          The controlled Buyer Room preview lists the document categories
          that travel with a real engagement. Public marketing pages expose
          only approved fields and proof references · private diligence
          materials remain permissioned.
        </p>
        <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PALM_GROVE.buyerRoomDocs.map((d) => (
            <div
              key={d.name}
              className="rounded-lg border border-stone-800 bg-stone-950/60 p-4 print:border-stone-300 print:bg-transparent print-keep"
            >
              <div className="text-stone-100 text-sm font-semibold">{d.name}</div>
              <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.18em] text-honey-400/80">
                {d.status}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 print:hidden">
          <Link
            to="/showcase/cre/palm-grove-marketplace/buyer-room"
            className="inline-flex items-center gap-2 px-4 py-2 rounded border border-honey-400/55 bg-honey-400/[0.08] text-honey-200 hover:bg-honey-400/[0.15] text-sm font-semibold transition-colors"
          >
            Open Buyer Room Preview →
          </Link>
        </div>
        <p className="mt-4 text-[11px] italic text-stone-500 leading-relaxed">
          {PALM_GROVE.disclosure.buyerRoomIntake}
        </p>
      </OmSection>

      {/* ─── SECTION 12 · Draft Defendable Property Record ─────────────── */}
      <OmSection
        eyebrow="Section 12"
        title="Draft Defendable Property Record"
        pageBreak
      >
        <DraftRecordPanel />
      </OmSection>

      {/* ─── SECTION 13 · Contact / Request Pilot ──────────────────────── */}
      <OmSection eyebrow="Section 13" title="Contact and Request Pilot">
        <div className="rounded-xl border border-stone-800 bg-stone-950/60 p-8 print:border-stone-300 print:bg-transparent print-keep">
          <h3 className="text-2xl font-semibold tracking-tight text-stone-100 leading-tight">
            Bring your property to market with{" "}
            <span className="font-serif italic text-honey-200">
              proof behind the presentation.
            </span>
          </h3>
          <p className="mt-4 text-stone-300 text-sm leading-relaxed max-w-2xl">
            Defendable CRE helps owners, brokers and investment teams prepare
            premium property websites, offering materials and reviewable proof
            records from approved asset information. Request a pilot to see
            the workflow against your asset class.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hello@swarmandbee.ai?subject=Defendable%20CRE%20pilot"
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-honey-400/55 bg-honey-400/[0.08] text-honey-200 hover:bg-honey-400/[0.15] text-sm font-semibold transition-colors"
            >
              Request a CRE Pilot
            </a>
            <a
              href="mailto:hello@swarmandbee.ai?subject=Defendable%20CRE%20pilot"
              className="text-stone-400 hover:text-stone-200 text-sm self-center"
            >
              hello@swarmandbee.ai
            </a>
          </div>
        </div>
      </OmSection>

      {/* Print-only repeated footer · disclosure on every printed page */}
      <div className="hidden print:block fixed bottom-[0.25in] left-0 right-0 px-[0.6in]">
        <p className="text-[8pt] italic text-stone-700 border-t border-stone-300 pt-1 leading-tight">
          {PALM_GROVE.disclosure.footerShort}
        </p>
      </div>

      {/* Print page sizing */}
      <style>{`
        @media print {
          @page { size: 8.5in 11in portrait; margin: 0.55in 0.5in 0.7in 0.5in; }
          html, body { background: #fff !important; }
        }
      `}</style>
    </CrePageShell>
  );
}

/* ─── Subcomponents ─────────────────────────────────────────────────── */

function OmSection({
  eyebrow,
  title,
  children,
  pageBreak = false,
}: {
  eyebrow: string;
  title?: string;
  children: ReactNode;
  pageBreak?: boolean;
}) {
  return (
    <section
      className={`px-6 py-12 border-t border-stone-900/80 first-of-type:border-t-0 ${
        pageBreak ? "print:break-after-page" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-honey-400/80 font-semibold">
          {eyebrow}
        </div>
        {title && (
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100">
            {title}
          </h2>
        )}
        <div className={title || eyebrow ? "mt-7" : ""}>{children}</div>
      </div>
    </section>
  );
}

function CoverStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-stone-800 bg-stone-950/60 p-3 print:border-stone-300 print:bg-transparent">
      <div className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-mono font-semibold">
        {label}
      </div>
      <div className="mt-1 text-stone-100 text-base font-semibold">{value}</div>
      <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-honey-400/80 font-mono">
        {PALM_GROVE.disclosure.metricLabel}
      </div>
    </div>
  );
}

function OverviewCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-stone-800 bg-stone-950/60 p-4 print:border-stone-300 print:bg-transparent print-keep">
      <div className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-mono font-semibold">
        {label}
      </div>
      <div className="mt-1.5 text-stone-100 text-sm font-medium">{value}</div>
      <div className="mt-2 text-[9px] uppercase tracking-[0.18em] text-honey-400/70 font-mono">
        {PALM_GROVE.disclosure.metricLabel}
      </div>
    </div>
  );
}

function ClaimsColumn({
  title,
  items,
  tone,
}: {
  title: string;
  items: readonly string[];
  tone: "approved" | "disclosed" | "blocked";
}) {
  const toneStyles = {
    approved: {
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/[0.04]",
      eyebrow: "text-emerald-300",
      dot: "bg-emerald-400",
    },
    disclosed: {
      border: "border-honey-400/40",
      bg: "bg-honey-400/[0.05]",
      eyebrow: "text-honey-300",
      dot: "bg-honey-400",
    },
    blocked: {
      border: "border-rose-500/30",
      bg: "bg-rose-500/[0.04]",
      eyebrow: "text-rose-300",
      dot: "bg-rose-400",
    },
  }[tone];

  return (
    <div
      className={`rounded-lg border ${toneStyles.border} ${toneStyles.bg} p-5 print:border-stone-300 print:bg-transparent print-keep`}
    >
      <div
        className={`text-[10px] font-mono uppercase tracking-[0.22em] font-semibold ${toneStyles.eyebrow}`}
      >
        {title}
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-stone-200 text-sm leading-snug">
            <span
              className={`mt-1.5 inline-block w-1.5 h-1.5 rounded-full ${toneStyles.dot} flex-shrink-0`}
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DraftRecordPanel() {
  const lc = PALM_GROVE.lifecycle;
  return (
    <div className="relative rounded-xl border border-stone-700/60 bg-gradient-to-br from-stone-900/85 to-neutral-950 shadow-2xl overflow-hidden print:shadow-none print:border-stone-300 print:bg-transparent print-keep">
      <div className="px-7 py-5 border-b border-stone-800 bg-neutral-950/70 print:border-stone-300 print:bg-transparent">
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <span className="inline-flex w-7 h-7 rounded border border-honey-400/40 items-center justify-center text-honey-300">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M3 2h6l3 3v8H3z" />
              <path d="M5 6h5M5 8h5M5 10h3" strokeWidth="1" opacity="0.7" />
            </svg>
          </span>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-honey-400/80 font-semibold">
              Defendable Property Record
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-stone-400 font-semibold mt-1">
              Proof of Value Record · Draft Marketing Preview
            </div>
          </div>
          <span className="ml-auto inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] font-semibold border rounded-full px-2.5 py-1 text-amber-300 border-amber-500/40 bg-amber-500/[0.08]">
            DRAFT · NOT ISSUED · NOT PUBLISHED
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="px-7 py-5 divide-y divide-stone-800/70 lg:border-r lg:border-stone-800 print:divide-stone-300 print:border-stone-300">
          <PRow label="Deed reference" value={PALM_GROVE.deedReference} mono />
          <PRow label="Asset" value={PALM_GROVE.propertyName} />
          <PRow label="Asset class" value="Commercial Real Estate" />
          <PRow label="Property type" value="Grocery-Anchored Neighborhood Retail" />
          <PRow label="Market" value={PALM_GROVE.market} />
          <PRow label="ENS identity (reserved)" value={PALM_GROVE.ensIdentity} mono />
          <PRow label="ENS status" value={lc.ensStatusDisplay} pending />
        </div>

        <div className="px-7 py-5 space-y-3">
          <div className="text-[9px] font-mono uppercase tracking-[0.22em] text-stone-500 font-semibold">
            Lifecycle state
          </div>
          <PStatusRow label="Record" value={lc.recordStatusDisplay} />
          <PStatusRow label="Validator" value={lc.validatorStatusDisplay} />
          <PStatusRow label="Publication" value={lc.publicationStatusDisplay} />
          <PStatusRow label="Value" value={lc.valueDisplayStatus} />
          <PStatusRow label="ENS" value={lc.ensStatusDisplay} />
          <PStatusRow label="Evidence" value={lc.evidenceStatusDisplay} />
        </div>
      </div>

      <div className="px-7 py-4 border-t border-stone-800 bg-neutral-950/70 print:border-stone-300 print:bg-transparent">
        <p className="text-[11px] text-stone-500 leading-relaxed italic max-w-3xl">
          {PALM_GROVE.disclosure.draftRecord}
        </p>
      </div>
    </div>
  );
}

function PRow({
  label,
  value,
  mono,
  pending,
}: {
  label: string;
  value: string;
  mono?: boolean;
  pending?: boolean;
}) {
  return (
    <div className="grid grid-cols-[170px_1fr] gap-3 items-baseline py-2.5">
      <span className="text-[9px] uppercase tracking-[0.18em] text-stone-500 font-semibold">
        {label}
      </span>
      <span
        className={[
          mono ? "font-mono text-xs break-all" : "text-sm",
          pending ? "text-amber-300" : "text-stone-100",
        ].join(" ")}
      >
        {value}
      </span>
    </div>
  );
}

function PStatusRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-3 items-baseline">
      <span className="text-[9px] uppercase tracking-[0.18em] text-stone-500 font-semibold">
        {label}
      </span>
      <span className="font-mono text-[11px] text-amber-300">{value}</span>
    </div>
  );
}
