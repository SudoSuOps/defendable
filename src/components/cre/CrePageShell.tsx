/**
 * CrePageShell — shared header/footer/disclosure chrome used by every
 * Defendable CRE MarketReady route. Drops the doctrine-locked footer
 * disclosure on every page automatically and provides a print-safe
 * @media print override so the dark canvas does not eat ink.
 */
import { Link } from "react-router-dom";
import { ReactNode } from "react";

import { PALM_GROVE } from "../../lib/cre/palmGrove";

interface Props {
  /** Top-of-page eyebrow chip · "Defendable CRE · MarketReady Demo" */
  eyebrow?: string;
  /** Show the "← Property Experience" back-link */
  showBackLink?: boolean;
  /** Add the hero disclosure band immediately under the header */
  showHeroDisclosure?: boolean;
  /** Print-friendly: drop dark backgrounds in print styles */
  printSafe?: boolean;
  /** Children render in the main content area */
  children: ReactNode;
}

export function CrePageShell({
  eyebrow = "Defendable CRE · MarketReady Demo",
  showBackLink = true,
  showHeroDisclosure = false,
  printSafe = false,
  children,
}: Props) {
  return (
    <div
      className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100"
      data-print-safe={printSafe || undefined}
    >
      {/* Subtle ledger grid · honors prefers-reduced-motion (no motion here) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.03] print:hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,170,40,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,170,40,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <header className="relative z-10 px-6 py-5 border-b border-stone-900/80 flex items-center justify-between print:hidden">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-stone-100 font-semibold tracking-tight"
        >
          <span className="inline-flex w-7 h-7 rounded border border-honey-400/40 items-center justify-center text-honey-300">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M3 2h6l3 3v8H3z" />
              <path d="M5 6h5M5 8h5M5 10h3" strokeWidth="1" opacity="0.7" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span>DefendableOS</span>
            <span className="text-[9px] uppercase tracking-[0.22em] text-stone-500 font-semibold mt-0.5">
              {eyebrow}
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link to="/" className="text-stone-400 hover:text-stone-200">Home</Link>
          <Link to="/compute" className="text-stone-400 hover:text-stone-200">Compute</Link>
          <Link to="/ledger" className="text-stone-400 hover:text-stone-200">Ledger</Link>
          {showBackLink && (
            <Link
              to="/showcase/cre/palm-grove-marketplace"
              className="text-honey-300 hover:text-honey-200 font-semibold"
            >
              ← Property Experience
            </Link>
          )}
        </nav>
      </header>

      {showHeroDisclosure && (
        <div className="relative z-10 border-b border-amber-500/20 bg-amber-500/[0.05] px-6 py-2.5 text-center">
          <span className="inline-block text-[10px] font-mono uppercase tracking-[0.24em] text-amber-300 font-semibold">
            {PALM_GROVE.disclosure.heroBand}
          </span>
        </div>
      )}

      <main className="relative z-10">{children}</main>

      <footer className="relative z-10 px-6 py-8 border-t border-stone-900/80 mt-12 print:border-stone-300">
        <div className="max-w-7xl mx-auto text-xs text-stone-500 leading-relaxed">
          <p className="italic">{PALM_GROVE.disclosure.footerShort}</p>
          <p className="mt-2">
            © 2026 Swarm and Bee LLC · DBA Swarm & Bee AI · D-U-N-S 138652395.
            DefendableOS™, Proof of Value™, Validate the Validator™, AIOV™,
            Defendable Deed™ and Defendable MarketReady™ are unregistered
            trademarks.
          </p>
        </div>
      </footer>

      {/* Print-safe overrides · only active in print preview */}
      {printSafe && (
        <style>{`
          @media print {
            html, body { background: #fff !important; color: #111 !important; }
            [data-print-safe] { background: #fff !important; color: #111 !important; }
            .print\\:hidden { display: none !important; }
            .print-page-break { page-break-after: always; }
            .print-keep { page-break-inside: avoid; }
            a { color: inherit !important; text-decoration: none !important; }
            .text-stone-100, .text-stone-200, .text-stone-300, .text-stone-400 { color: #111 !important; }
            .text-stone-500, .text-stone-600 { color: #444 !important; }
            .text-honey-200, .text-honey-300 { color: #7d6429 !important; }
            .border-stone-700, .border-stone-800, .border-stone-900\\/80 { border-color: #ccc !important; }
            .bg-neutral-950, .bg-stone-900, .bg-stone-950 { background: #fff !important; }
          }
        `}</style>
      )}
    </div>
  );
}
