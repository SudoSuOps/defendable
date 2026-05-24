// Shared Header + Footer for defendableos.com pages (homepage · HoneyBox ·
// DefendableCloud · Pricing). Keeps the brand surface coherent without
// duplicating 200 lines of layout code across every page.

import { useState } from "react";

const SALES_EMAIL = "build@swarmandbee.ai";

const NAV_ITEMS: [string, string][] = [
  ["HoneyBox", "/honeybox"],
  ["Cloud", "/cloud"],
  ["Pricing", "/pricing"],
  ["Defend The Claw™", "/defend-the-claw"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-stone-800/60 bg-neutral-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
        <a href="/" className="flex items-center gap-3 group">
          <EmblemMark />
          <span className="font-semibold tracking-tight text-stone-100 text-lg">
            <span className="text-amber-400">Defendable</span>OS
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 ml-6">
          {NAV_ITEMS.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-stone-400 hover:text-stone-100 transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="https://app.defendableos.com/login"
          className="ml-auto hidden md:inline-flex items-center px-5 py-2 rounded border border-amber-500/40 bg-amber-500/10 text-sm text-amber-300 hover:bg-amber-500/20 hover:border-amber-400 transition-colors font-semibold tracking-tight"
        >
          Sign in
        </a>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="ml-auto md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-stone-800 text-stone-300"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M3 3l12 12M15 3L3 15" /> : <><path d="M2 5h14" /><path d="M2 9h14" /><path d="M2 13h14" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-stone-800/60 bg-neutral-950/95">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm text-stone-300 py-2 border-b border-stone-900 last:border-0"
              >
                {label}
              </a>
            ))}
            <a
              href="https://app.defendableos.com/login"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded border border-amber-500/40 bg-amber-500/10 text-sm text-amber-300 font-semibold"
            >
              Sign in
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <EmblemMark />
              <span className="font-semibold tracking-tight text-stone-100 text-lg">
                <span className="text-amber-400">Defendable</span>OS
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Defense for AI workers.
            </p>
            <p className="mt-3 text-xs text-stone-500 leading-relaxed max-w-sm italic">
              Inspect the agent. Grade the risk. Preserve the proof.
            </p>
          </div>
          <FooterColumn
            heading="Products"
            links={[
              ["HoneyBox", "/honeybox"],
              ["DefendableCloud", "/cloud"],
              ["Pricing", "/pricing"],
              ["Defend The Claw™", "/defend-the-claw"],
            ]}
          />
          <FooterColumn
            heading="Doctrine"
            links={[
              ["The Doctrine", "/doctrine"],
              ["About / Operator", "/about"],
              ["AgentGrade™", "/agent-grade"],
              ["Pair Factory", "/pair-factory"],
              ["Open Infrastructure", "/open"],
              ["Reports", "/reports"],
              ["Ledger", "/ledger"],
            ]}
          />
          <FooterColumn
            heading="Brand stack"
            links={[
              ["defendableos.com", "https://defendableos.com"],
              ["defendtheclaw.com", "https://defendtheclaw.com"],
              ["defendablehack.com", "https://defendablehack.com"],
              ["opendefendable.com", "https://opendefendable.com"],
              ["defendablerouter.com", "https://defendablerouter.com"],
              ["defendablecloud.com", "https://defendablecloud.com"],
            ]}
          />
          <FooterColumn
            heading="Company"
            links={[
              ["Contact", `mailto:${SALES_EMAIL}`],
              ["Sign in", "https://app.defendableos.com/login"],
              ["Privacy", "https://swarmandbee.ai/legal/privacy"],
              ["Terms", "https://swarmandbee.ai/legal/terms"],
            ]}
          />
        </div>

        <div className="mt-14 pt-8 border-t border-stone-900 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-stone-500">
          <div>© 2026 DefendableOS. All rights reserved.</div>
          <div className="font-mono">
            A product of Swarm &amp; Bee LLC · DBA Swarm &amp; Bee AI · Florida · D-U-N-S 138652395
          </div>
        </div>
      </div>
    </footer>
  );
}

function EmblemMark() {
  return (
    <span className="inline-flex w-9 h-9 rounded border border-amber-400/40 items-center justify-center text-amber-300 bg-amber-500/[0.04]">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M4 2h6l3 3v9H4z" />
        <path d="M6 7h6M6 9h6M6 11h4" strokeWidth="1" opacity="0.65" />
      </svg>
    </span>
  );
}

function FooterColumn({ heading, links }: { heading: string; links: [string, string][] }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold mb-4">{heading}</div>
      <ul className="space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-sm text-stone-300 hover:text-amber-300 transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
