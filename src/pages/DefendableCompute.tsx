/**
 * /compute — flagship Defendable Compute showcase page.
 *
 * Hosts the 3D RTX PRO 6000 hero plus the draft-deed preview. Lives at
 * defendableos.com/compute. The header and footer match the landing page
 * styling so a visitor moving between / and /compute feels one site.
 */
import { Link } from "react-router-dom";

import { DefendableComputeHero } from "../components/showcase/DefendableComputeHero";

export default function DefendableCompute() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      {/* Ambient blueprint grid, lifted from the landing page tone */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,170,40,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,170,40,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          backgroundPosition: "center center",
        }}
      />

      <header className="relative z-10 px-6 py-5 border-b border-stone-900/80 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 text-stone-100 font-semibold tracking-tight">
          <span className="inline-flex w-7 h-7 rounded border border-amber-500/40 items-center justify-center text-amber-400/90">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M3 2h6l3 3v8H3z" />
              <path d="M5 6h5M5 8h5M5 10h3" strokeWidth="1" opacity="0.7" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span>DefendableOS</span>
            <span className="text-[9px] uppercase tracking-[0.22em] text-stone-500 font-semibold mt-0.5">
              Proof of Value
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link to="/" className="text-stone-400 hover:text-stone-200">
            Home
          </Link>
          <a
            href="https://github.com/SudoSuOps/defendableos"
            className="text-stone-400 hover:text-stone-200"
            target="_blank"
            rel="noreferrer"
          >
            Platform
          </a>
          <a
            href="mailto:build@swarmandbee.ai"
            className="text-honey-300 font-semibold hover:text-honey-200"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <DefendableComputeHero />
      </main>

      <footer className="relative z-10 px-6 py-8 border-t border-stone-900/80 mt-12">
        <div className="max-w-7xl mx-auto text-xs text-stone-500 leading-relaxed">
          © 2026 Swarm and Bee LLC · DBA Swarm & Bee AI · D-U-N-S 138652395.
          DefendableOS™, Proof of Value™, Validate the Validator™, AIOV™ and
          Defendable Deed™ are unregistered trademarks.
        </div>
      </footer>
    </div>
  );
}
