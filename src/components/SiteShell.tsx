import { useState } from "react";

const SALES_EMAIL = "build@swarmandbee.ai";
const X_URL = "https://x.com/swarmandbee";
const LINKEDIN_URL = "https://www.linkedin.com/in/donovan-mackey-89a6063b6/";

const NAV_ITEMS: [string, string][] = [
  ["Status", "/#status"],
  ["Products", "/#products"],
  ["What Works", "/#scoreboard"],
  ["Protocol", "/#protocol"],
  ["Docs", "https://defendabledocs.com/field-release/overview/"],
  ["OpenDefendable", "https://opendefendable.com"],
  ["Tribunal Tape", "https://github.com/SudoSuOps/defendableos-tribunal-audit"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-stone-800/60 bg-neutral-950/88 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
        <a href="/" className="flex items-center gap-3 group">
          <EmblemMark />
          <span className="font-semibold tracking-tight text-stone-100 text-lg">
            <span className="text-amber-400">Defendable</span>OS
          </span>
        </a>
        <nav className="hidden xl:flex items-center gap-6 ml-6">
          {NAV_ITEMS.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-stone-400 hover:text-stone-100 transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="/contact"
          className="ml-auto hidden md:inline-flex items-center px-5 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 text-sm text-amber-300 hover:bg-amber-500/20 hover:border-amber-400 transition-colors font-semibold tracking-tight"
        >
          Request review
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
        <div className="xl:hidden border-t border-stone-800/60 bg-neutral-950/95">
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
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full border border-amber-500/40 bg-amber-500/10 text-sm text-amber-300 font-semibold"
            >
              Request review
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <EmblemMark />
              <span className="font-semibold tracking-tight text-stone-100 text-lg">
                <span className="text-amber-400">Defendable</span>OS
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Honest public front door for the DefendableOS stack: what is audited, what is limited, what is held, and where to go next.
            </p>
            <p className="mt-3 text-xs text-stone-500 leading-relaxed max-w-sm italic">
              Public audit tape is evidence, not certification or production clearance.
            </p>
          </div>
          <FooterColumn
            heading="Field surfaces"
            links={[
              ["DefendableCloud", "https://defendablecloud.com/agent-operations-demo"],
              ["DefendableDocs", "https://defendabledocs.com/field-release/overview/"],
              ["OpenDefendable", "https://opendefendable.com"],
              ["DefendableRouter", "https://defendablerouter.com"],
            ]}
          />
          <FooterColumn
            heading="Audit tape"
            links={[
              ["Tribunal repo", "https://github.com/SudoSuOps/defendableos-tribunal-audit"],
              ["Public module repos", "https://github.com/SudoSuOps"],
              ["Hugging Face", "https://huggingface.co/SwarmandBee"],
              ["DefendableOS source", "https://github.com/SudoSuOps/defendable"],
            ]}
          />
          <FooterColumn
            heading="Contact"
            links={[
              ["Request early-access review", "/contact"],
              ["build@swarmandbee.ai", `mailto:${SALES_EMAIL}`],
              ["Privacy", "https://swarmandbee.ai/legal/privacy"],
              ["Terms", "https://swarmandbee.ai/legal/terms"],
            ]}
          />
        </div>

        <div className="mt-14 pt-8 border-t border-stone-900 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-5">
            <span>© 2026 DefendableOS. All rights reserved.</span>
            <div className="flex items-center gap-3">
              <a href={X_URL} target="_blank" rel="noopener noreferrer" aria-label="DefendableOS on X" className="text-stone-500 hover:text-amber-300 transition-colors">
                <XIcon />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="DefendableOS founder Donovan Mackey on LinkedIn" className="text-stone-500 hover:text-amber-300 transition-colors">
                <LinkedInIcon />
              </a>
              <a href={`mailto:${SALES_EMAIL}`} aria-label="Email build@swarmandbee.ai" className="text-stone-500 hover:text-amber-300 transition-colors">
                <MailIcon />
              </a>
            </div>
          </div>
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

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2H21.5l-7.07 8.07L23 22h-6.59l-5.18-6.34L5.27 22H2l7.55-8.62L1.5 2h6.74l4.69 5.84L18.244 2zm-1.16 18h1.87L7.02 4H5.06l12.02 16z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
      <path d="M3 6l9 7 9-7" />
    </svg>
  );
}
