/**
 * /showcase/cre/palm-grove-marketplace
 *
 * The Defendable CRE MarketReady flagship demo. An illustrative
 * grocery-anchored neighborhood retail center used to demonstrate how
 * DefendableOS can take an approved CRE asset from evidence intake to
 * buyer-ready marketing materials while preserving every truth control.
 *
 * NOT an active offering · NO final valuation · disclosures everywhere.
 */
import { Link } from "react-router-dom";

import { CrePageShell } from "../components/cre/CrePageShell";
import { CreSitePlanAerial } from "../components/cre/CreSitePlanAerial";
import { PALM_GROVE, formatSf, formatPct } from "../lib/cre/palmGrove";

export default function DefendableCrePalmGrove() {
  return (
    <CrePageShell showHeroDisclosure>
      {/* ─── SECTION A · Hero ─────────────────────────────────────────── */}
      <section className="relative px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-10 items-start">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-honey-400/80 font-semibold">
              Defendable CRE · MarketReady Demo
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-100 leading-[1.05]">
              {PALM_GROVE.propertyName}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-stone-300 leading-snug">
              <span className="font-serif italic text-honey-200">
                {PALM_GROVE.subtitle}
              </span>{" "}
              · {PALM_GROVE.market}
            </p>
            <p className="mt-6 max-w-xl text-base text-stone-400 leading-relaxed">
              A proof-backed offering experience for neighborhood retail. An
              illustrative South Florida retail-center presentation built with
              DefendableOS — combining property marketing, approved-claims
              controls, draft proof records and buyer-ready offering
              materials.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/showcase/cre/palm-grove-marketplace/teaser"
                className="inline-flex items-center gap-2 px-5 py-3 rounded border border-honey-400/55 text-honey-200 hover:bg-honey-400/[0.08] text-sm font-semibold transition-colors"
              >
                View Teaser Sheet →
              </Link>
              <Link
                to="/showcase/cre/palm-grove-marketplace/proof-record"
                className="inline-flex items-center gap-2 px-5 py-3 rounded border border-stone-700 text-stone-300 hover:border-stone-600 text-sm transition-colors"
              >
                Explore Draft Proof Record
              </Link>
              <a
                href="mailto:hello@swarmandbee.ai?subject=Defendable%20CRE%20pilot"
                className="inline-flex items-center gap-2 px-5 py-3 rounded text-stone-400 hover:text-stone-200 text-sm transition-colors"
              >
                Request a CRE Pilot
              </a>
            </div>

            {/* Hero stat cards */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <HeroStat label="GLA" value="82,400 SF" labelTone="illustrative" />
              <HeroStat label="Occupancy" value="94.2%" labelTone="illustrative" />
              <HeroStat label="Tenant Spaces" value="14" labelTone="illustrative" />
              <HeroStat label="Market" value="South Florida" labelTone="demo" />
            </div>
          </div>

          {/* Site plan visual */}
          <div>
            <CreSitePlanAerial />
          </div>
        </div>
      </section>

      {/* ─── SECTION B · Illustrative Property Highlights ─────────────── */}
      <section className="px-6 py-14 border-t border-stone-900/80">
        <div className="max-w-7xl mx-auto">
          <SectionEyebrow>Illustrative Highlights</SectionEyebrow>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100">
            Illustrative Property Highlights
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PALM_GROVE.illustrativeHighlights.map((h) => (
              <div
                key={h}
                className="rounded-lg border border-stone-800 bg-stone-950/60 p-5"
              >
                <div className="text-[9px] font-mono uppercase tracking-[0.22em] text-honey-400/80 mb-1">
                  {PALM_GROVE.disclosure.metricLabel}
                </div>
                <div className="text-stone-100 text-sm leading-snug">{h}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION C · Property Overview ────────────────────────────── */}
      <section className="px-6 py-14 border-t border-stone-900/80">
        <div className="max-w-7xl mx-auto">
          <SectionEyebrow>Property Overview</SectionEyebrow>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100">
            Property Overview
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <OverviewCard label="Asset Type" value="Grocery-Anchored Neighborhood Retail" />
            <OverviewCard label="Gross Leasable Area" value={formatSf(PALM_GROVE.facts.grossLeasableAreaSf)} />
            <OverviewCard label="Site Area" value={`${PALM_GROVE.facts.parcelSizeAcres} Acres`} />
            <OverviewCard label="Tenant Spaces" value={`${PALM_GROVE.facts.tenantSpaces}`} />
            <OverviewCard label="Occupancy" value={formatPct(PALM_GROVE.facts.occupancyPct)} />
            <OverviewCard label="Year Built / Renovated" value={`${PALM_GROVE.facts.yearBuilt} / ${PALM_GROVE.facts.yearRenovated}`} />
            <OverviewCard label="Parking Ratio" value={`${PALM_GROVE.facts.parkingRatioPer1000Sf} / 1,000 SF`} />
            <OverviewCard label="Asset Class" value="Commercial Real Estate" />
          </div>
          <p className="mt-6 text-[11px] text-stone-500 italic leading-relaxed">
            All property metrics shown are illustrative demo data created to
            demonstrate Defendable CRE workflow functionality.
          </p>
        </div>
      </section>

      {/* ─── SECTION D · Tenant Mix (also covered in the site plan) ───── */}
      <section className="px-6 py-14 border-t border-stone-900/80">
        <div className="max-w-7xl mx-auto">
          <SectionEyebrow>Tenant Mix</SectionEyebrow>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100">
            Conceptual Tenant Mix
          </h2>
          <p className="mt-3 text-sm text-stone-400">
            Generic tenant categories only · no real brands or logos · all square
            footage illustrative.
          </p>

          <div className="mt-8 space-y-2">
            {PALM_GROVE.tenants.map((t) => (
              <div
                key={t.category}
                className="grid grid-cols-[1fr_auto_auto] gap-4 items-center px-4 py-3 rounded border border-stone-800 bg-stone-950/40"
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
                <span className="font-mono text-xs text-honey-300 w-12 text-right">
                  {t.sharePct.toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-stone-500 italic">
            Illustrative tenant mix concept · not derived from any real lease abstract.
          </p>
        </div>
      </section>

      {/* ─── SECTION E · Defendable Difference ────────────────────────── */}
      <section className="px-6 py-14 border-t border-stone-900/80">
        <div className="max-w-7xl mx-auto">
          <SectionEyebrow>The Difference</SectionEyebrow>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100">
            The evidence spine behind the offering.
          </h2>
          <p className="mt-4 max-w-3xl text-stone-400 leading-relaxed">
            A traditional offering package presents the asset. Defendable CRE
            links approved marketing facts to source records, validator review
            and a draft proof package built for scrutiny.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <DifferenceCard
              title="Approved Claims Library"
              body="Marketing copy can only assert what the approved-claims library permits · everything else is blocked from public surfaces."
            />
            <DifferenceCard
              title="Evidence Manifest"
              body="Every public claim references a private evidence item by SHA-256 hash. The underlying file is never exposed."
            />
            <DifferenceCard
              title="Validator Receipt"
              body="Deterministic 12-check protocol runs before any draft marketing package is released for preview."
            />
            <DifferenceCard
              title="Draft Property Record"
              body="A versioned Defendable Property Record travels with the offering, queryable by ledger hash without exposing private data."
            />
          </div>
        </div>
      </section>

      {/* ─── SECTION F · MarketReady Deliverables ─────────────────────── */}
      <section className="px-6 py-14 border-t border-stone-900/80">
        <div className="max-w-7xl mx-auto">
          <SectionEyebrow>MarketReady Deliverables</SectionEyebrow>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100">
            Built for the campaign, not just the page.
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PALM_GROVE.marketReadyDeliverables.map((d) => (
              <DeliverableCard key={d.name} {...d} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION G · Offering Materials Preview ───────────────────── */}
      <section className="px-6 py-14 border-t border-stone-900/80">
        <div className="max-w-7xl mx-auto">
          <SectionEyebrow>Offering Materials Preview</SectionEyebrow>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100">
            Four entry points · all draft-safe.
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <OfferingLink
              to="/showcase/cre/palm-grove-marketplace/teaser"
              eyebrow="One Sheet"
              title="Teaser Sheet"
              body="Print-ready single-page property summary."
            />
            <OfferingLink
              to="/showcase/cre/palm-grove-marketplace/om"
              eyebrow="Long Form"
              title="Offering Memorandum"
              body="Multi-section preview · financial placeholder only."
            />
            <OfferingLink
              to="/showcase/cre/palm-grove-marketplace/buyer-room"
              eyebrow="Controlled"
              title="Buyer Room"
              body="Permission-gated diligence preview · demo only."
            />
            <OfferingLink
              to="/showcase/cre/palm-grove-marketplace/proof-record"
              eyebrow="Defendable"
              title="Draft Proof Record"
              body="Versioned property record · ledger-resolvable."
            />
          </div>
        </div>
      </section>

      {/* ─── SECTION H · Draft Proof Record Preview ───────────────────── */}
      <section className="px-6 py-14 border-t border-stone-900/80">
        <div className="max-w-7xl mx-auto">
          <SectionEyebrow>Draft Proof Record</SectionEyebrow>
          <ProofRecordPreviewCard />
        </div>
      </section>

      {/* ─── SECTION I · Buyer CTA ────────────────────────────────────── */}
      <section className="px-6 py-20 border-t border-stone-900/80">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Bring your property to market with{" "}
            <span className="font-serif italic text-honey-200">
              proof behind the presentation.
            </span>
          </h2>
          <p className="mt-4 text-stone-400 leading-relaxed">
            Defendable CRE helps owners, brokers and investment teams prepare
            premium property websites, offering materials and reviewable proof
            records from approved asset information.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@swarmandbee.ai?subject=Defendable%20CRE%20pilot"
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-honey-400/55 bg-honey-400/[0.08] text-honey-200 hover:bg-honey-400/[0.15] text-sm font-semibold transition-colors"
            >
              Request a CRE Pilot
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-stone-700 text-stone-300 hover:border-stone-600 text-sm transition-colors"
            >
              Explore DefendableOS
            </Link>
          </div>
        </div>
      </section>
    </CrePageShell>
  );
}

/* ─── Subcomponents ─────────────────────────────────────────────────── */

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-honey-400/80 font-semibold">
      {children}
    </div>
  );
}

function HeroStat({
  label,
  value,
  labelTone,
}: {
  label: string;
  value: string;
  labelTone: "illustrative" | "demo";
}) {
  return (
    <div className="rounded-lg border border-stone-800 bg-stone-950/60 p-3">
      <div className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-mono font-semibold">
        {label}
      </div>
      <div className="mt-1 text-stone-100 text-base font-semibold">{value}</div>
      <div className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-honey-400/80 font-mono">
        {labelTone === "illustrative" ? "Illustrative" : "Demo Property"}
      </div>
    </div>
  );
}

function OverviewCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-stone-800 bg-stone-950/60 p-4">
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

function DifferenceCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-stone-800 bg-stone-950/60 p-5">
      <div className="text-stone-100 text-sm font-semibold">{title}</div>
      <p className="mt-2 text-stone-400 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function DeliverableCard({
  name,
  status,
  action,
}: {
  name: string;
  status: string;
  action: string | null;
}) {
  const Body = (
    <div className="rounded-lg border border-stone-800 bg-stone-950/60 p-4 h-full flex flex-col justify-between">
      <div>
        <div className="text-stone-100 text-sm font-semibold">{name}</div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-[0.18em] text-honey-400/80 font-mono">
          {status.replace(/_/g, " ").toLowerCase()}
        </span>
        {action && (
          <span className="text-honey-300 text-xs">→</span>
        )}
      </div>
    </div>
  );
  if (!action) return Body;
  return (
    <Link to={action} className="block hover:border-honey-400/30 transition-colors">
      {Body}
    </Link>
  );
}

function OfferingLink({
  to,
  eyebrow,
  title,
  body,
}: {
  to: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Link
      to={to}
      className="block rounded-lg border border-stone-800 hover:border-honey-400/40 bg-stone-950/60 p-5 transition-colors"
    >
      <div className="text-[9px] uppercase tracking-[0.22em] text-honey-400/80 font-mono font-semibold">
        {eyebrow}
      </div>
      <div className="mt-2 text-stone-100 text-base font-semibold">{title}</div>
      <p className="mt-2 text-sm text-stone-400">{body}</p>
      <div className="mt-3 text-honey-300 text-xs">Open →</div>
    </Link>
  );
}

function ProofRecordPreviewCard() {
  const lc = PALM_GROVE.lifecycle;
  return (
    <div className="relative rounded-xl border border-stone-700/60 bg-gradient-to-br from-stone-900/85 to-neutral-950 shadow-2xl overflow-hidden">
      <div className="px-7 py-5 border-b border-stone-800 bg-neutral-950/70">
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
        <div className="px-7 py-5 divide-y divide-stone-800/70 lg:border-r lg:border-stone-800">
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
          <PStatusRow label="Record" value={lc.recordStatusDisplay} pending />
          <PStatusRow label="Validator" value={lc.validatorStatusDisplay} pending />
          <PStatusRow label="Publication" value={lc.publicationStatusDisplay} pending />
          <PStatusRow label="Value" value={lc.valueDisplayStatus} pending />
          <PStatusRow label="ENS" value={lc.ensStatusDisplay} pending />
          <PStatusRow label="Evidence" value={lc.evidenceStatusDisplay} pending />
        </div>
      </div>

      <div className="px-7 py-4 border-t border-stone-800 bg-neutral-950/70">
        <p className="text-[11px] text-stone-500 leading-relaxed italic max-w-3xl">
          {PALM_GROVE.disclosure.draftRecord}
        </p>
      </div>
    </div>
  );
}

function PRow({
  label, value, mono, pending,
}: { label: string; value: string; mono?: boolean; pending?: boolean }) {
  return (
    <div className="grid grid-cols-[170px_1fr] gap-3 items-baseline py-2.5">
      <span className="text-[9px] uppercase tracking-[0.18em] text-stone-500 font-semibold">{label}</span>
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

function PStatusRow({
  label, value, pending = true,
}: { label: string; value: string; pending?: boolean }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-3 items-baseline">
      <span className="text-[9px] uppercase tracking-[0.18em] text-stone-500 font-semibold">{label}</span>
      <span className={`font-mono text-[11px] ${pending ? "text-amber-300" : "text-emerald-300"}`}>
        {value}
      </span>
    </div>
  );
}
