/**
 * /showcase/cre/palm-grove-marketplace/teaser
 *
 * Single-page (US Letter, portrait) print-ready teaser sheet for the
 * Palm Grove Marketplace illustrative CRE demo. Reads from the
 * `PALM_GROVE` single-source-of-truth in `src/lib/cre/palmGrove.ts`.
 *
 * Doctrine:
 *  - Every metric is labeled "Illustrative Demo Data".
 *  - No price · cap rate · NOI · IRR · return projection appears anywhere.
 *  - Hero band + footer disclosure render on every page (including print).
 *  - Print uses `window.print()` · no external PDF generator.
 *  - `printSafe` on CrePageShell strips dark canvas + hides print:hidden chrome.
 */
import { Link } from "react-router-dom";

import { CrePageShell } from "../components/cre/CrePageShell";
import { PALM_GROVE, formatSf, formatPct } from "../lib/cre/palmGrove";

export default function DefendableCrePalmGroveTeaser() {
  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  const lc = PALM_GROVE.lifecycle;

  return (
    <CrePageShell printSafe showHeroDisclosure={false}>
      {/* Action bar · hidden in print */}
      <div className="px-6 pt-8 pb-4 print:hidden">
        <div className="max-w-[8.5in] mx-auto flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/showcase/cre/palm-grove-marketplace"
            className="text-honey-300 hover:text-honey-200 text-sm font-semibold"
          >
            ← Back to Property Experience
          </Link>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded border border-honey-400/55 bg-honey-400/[0.08] text-honey-200 hover:bg-honey-400/[0.15] text-sm font-semibold transition-colors"
            >
              Print / Download Teaser
            </button>
          </div>
        </div>
      </div>

      {/* Teaser sheet · 8.5in x 11in portrait */}
      <section className="px-6 pb-16 print:p-0">
        <article
          className="mx-auto bg-neutral-950 border border-stone-900/80 rounded-lg shadow-2xl print:shadow-none print:border-0 print:rounded-none p-10 print:p-[0.6in] print-keep"
          style={{ width: "8.5in", minHeight: "11in", maxWidth: "100%" }}
        >
          {/* Top band · DEFENDABLE CRE · ILLUSTRATIVE TEASER */}
          <header className="flex items-center justify-between pb-4 border-b border-stone-800 print:border-stone-300">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex w-7 h-7 rounded border border-honey-400/40 items-center justify-center text-honey-300">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M3 2h6l3 3v8H3z" />
                  <path d="M5 6h5M5 8h5M5 10h3" strokeWidth="1" opacity="0.7" />
                </svg>
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-stone-100 font-semibold text-sm tracking-tight">DefendableOS</span>
                <span className="text-[9px] uppercase tracking-[0.22em] text-honey-400/80 font-mono font-semibold mt-1">
                  Defendable CRE · Illustrative Teaser
                </span>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] font-semibold border rounded-full px-2.5 py-1 text-amber-300 border-amber-500/40 bg-amber-500/[0.08]">
              DRAFT · NOT ISSUED
            </span>
          </header>

          {/* Hero band disclosure · always visible (including print) */}
          <div className="mt-4 border border-amber-500/30 bg-amber-500/[0.06] px-4 py-2 text-center rounded">
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-amber-300 font-semibold">
              {PALM_GROVE.disclosure.heroBand}
            </span>
          </div>

          {/* Cover block */}
          <div className="mt-7">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-honey-400/80 font-semibold">
              Illustrative Property Preview
            </div>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-100 leading-[1.05]">
              {PALM_GROVE.propertyName}
            </h1>
            <p className="mt-3 text-base text-stone-300 leading-snug">
              <span className="font-serif italic text-honey-200">
                {PALM_GROVE.subtitle}
              </span>{" "}
              · {PALM_GROVE.market}
            </p>
            <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.18em] text-stone-500">
              Asset Ref · <span className="text-stone-400">{PALM_GROVE.assetReference}</span>
              {"   "}·{"   "}
              Deed Ref · <span className="text-stone-400">{PALM_GROVE.deedReference}</span>
            </div>
          </div>

          {/* 4-up stats grid */}
          <div className="mt-6 grid grid-cols-4 gap-3">
            <TeaserStat
              label="GLA"
              value={formatSf(PALM_GROVE.facts.grossLeasableAreaSf)}
            />
            <TeaserStat
              label="Occupancy"
              value={formatPct(PALM_GROVE.facts.occupancyPct)}
            />
            <TeaserStat
              label="Tenant Spaces"
              value={`${PALM_GROVE.facts.tenantSpaces}`}
            />
            <TeaserStat
              label="Acres"
              value={`${PALM_GROVE.facts.parcelSizeAcres}`}
            />
          </div>

          {/* 5 illustrative highlights */}
          <div className="mt-7">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-honey-400/80 font-semibold">
              Illustrative Highlights
            </div>
            <ul className="mt-3 space-y-2">
              {PALM_GROVE.illustrativeHighlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-sm text-stone-200 leading-snug"
                >
                  <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-honey-400 flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Proof panel · 4-up lifecycle row */}
          <div className="mt-7 rounded-lg border border-stone-800 bg-stone-950/60 print:border-stone-300">
            <div className="px-4 py-3 border-b border-stone-800 print:border-stone-300 flex items-center justify-between">
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-honey-400/80 font-semibold">
                Defendable Proof Panel
              </div>
              <div className="text-[9px] uppercase tracking-[0.18em] text-stone-500 font-semibold">
                Draft Marketing Preview
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4">
              <ProofCell label="Record Status" value="Draft Marketing Preview" />
              <ProofCell label="Validator Status" value="Passed for Draft Marketing Display" />
              <ProofCell label="ENS Status" value="Reserved · Not Issued" />
              <ProofCell label="Value Status" value="No Final Valuation Represented" last />
            </div>
            <div className="px-4 py-2 border-t border-stone-800 print:border-stone-300 text-[9px] font-mono uppercase tracking-[0.18em] text-stone-500">
              ENS · <span className="text-stone-400 normal-case tracking-normal">{PALM_GROVE.ensIdentity}</span>
              {"   "}·{"   "}
              Lifecycle · <span className="text-amber-300">{lc.recordStatusDisplay}</span>
            </div>
          </div>

          {/* Mid-page CTA · drops in print */}
          <div className="mt-6 print:hidden">
            <p className="text-xs text-stone-500 leading-relaxed">
              For the full multi-section Offering Memorandum preview, the
              controlled Buyer Room and the draft Defendable Property Record,
              continue inside the property experience.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                to="/showcase/cre/palm-grove-marketplace/om"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-stone-700 text-stone-300 hover:border-honey-400/40 text-xs"
              >
                Open OM Preview →
              </Link>
              <Link
                to="/showcase/cre/palm-grove-marketplace/buyer-room"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-stone-700 text-stone-300 hover:border-honey-400/40 text-xs"
              >
                Preview Buyer Room →
              </Link>
            </div>
          </div>

          {/* Footer disclosure · always visible (also re-shown in CrePageShell footer for screen) */}
          <footer className="mt-8 pt-4 border-t border-stone-800 print:border-stone-300">
            <p className="text-[10px] italic text-stone-500 leading-relaxed">
              {PALM_GROVE.disclosure.footerShort}
            </p>
            <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-stone-500 font-mono">
              © 2026 Swarm and Bee LLC · DBA Swarm & Bee AI · D-U-N-S 138652395
              {"   "}·{"   "}
              Asset Ref {PALM_GROVE.assetReference}
            </p>
          </footer>
        </article>
      </section>

      {/* Print-only fixed footer · repeats disclosure on every printed page */}
      <div className="hidden print:block fixed bottom-[0.3in] left-0 right-0 px-[0.6in]">
        <p className="text-[8pt] italic text-stone-700 border-t border-stone-300 pt-1 leading-tight">
          {PALM_GROVE.disclosure.footerShort}
        </p>
      </div>

      {/* Print page sizing */}
      <style>{`
        @media print {
          @page { size: 8.5in 11in portrait; margin: 0.4in; }
          html, body { background: #fff !important; }
        }
      `}</style>
    </CrePageShell>
  );
}

/* ─── Subcomponents ─────────────────────────────────────────────────── */

function TeaserStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-stone-800 bg-stone-950/60 p-3 print:border-stone-300">
      <div className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-mono font-semibold">
        {label}
      </div>
      <div className="mt-1 text-stone-100 text-lg font-semibold leading-tight">
        {value}
      </div>
      <div className="mt-1 text-[8px] uppercase tracking-[0.2em] text-honey-400/80 font-mono">
        {PALM_GROVE.disclosure.metricLabel}
      </div>
    </div>
  );
}

function ProofCell({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`px-4 py-3 ${
        last ? "" : "border-b sm:border-b-0 sm:border-r border-stone-800 print:border-stone-300"
      }`}
    >
      <div className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-mono font-semibold">
        {label}
      </div>
      <div className="mt-1 text-amber-300 font-mono text-[11px] leading-snug">
        {value}
      </div>
    </div>
  );
}
