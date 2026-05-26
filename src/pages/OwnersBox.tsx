// defendableos.com · /owners-box
//
// The Owner's Box · the visual accountability console for multi-agent
// execution. The human sees the game — not just the final report.
//
// IMPORTANT · this public page renders ILLUSTRATIVE SAMPLE DATA only. It is
// not a real, audited or approved case. No internal or customer case is
// published here. The sample demonstrates the protocol's visual surface:
// credits, penalties, synthesis overrides, claim survival and human finality.
//
// Stack · React + Tailwind · reuses the site design tokens (charcoal base ·
// stone/ivory type · amber accents · emerald for credit · red for violation ·
// violet reserved strictly as the synthesis-override data marker). No new
// brand colors · no new framework.

import { Footer, Header } from "../components/SiteShell";

// ─── illustrative sample case (NOT a real or approved case) ────────────────

type LaneStatus = "CREDITED" | "FLAGGED" | "FAILED" | "SUPPLEMENTAL";

interface Lane {
  pos: string;
  unit: string;
  agent: string;
  status: LaneStatus;
  credit: number;
  penalty: number;
  critical: number;
  synthesisOverride: boolean;
  bestPlay?: string;
  topPenalty?: string;
}

const SAMPLE_LANES: Lane[] = [
  { pos: "QB", unit: "Final Synthesis Layer", agent: "Synthesis Layer", status: "FLAGGED", credit: 3, penalty: 4, critical: 2, synthesisOverride: false,
    bestPlay: "Correctly downgraded an unverified compensation figure to research signal.",
    topPenalty: "Promoted an unsupported value-allocation model with no disclosed method." },
  { pos: "RB", unit: "Structure & Revenue Sharing", agent: "Lane B", status: "FLAGGED", credit: 2, penalty: 1, critical: 1, synthesisOverride: true,
    bestPlay: "Separated nationally distributed revenue from local revenue.",
    topPenalty: "Research receipt dated before several of its own cited sources." },
  { pos: "XWR", unit: "Valuation", agent: "Lane X", status: "CREDITED", credit: 2, penalty: 0, critical: 0, synthesisOverride: true,
    bestPlay: "Labeled valuation indications as estimates, not transaction prices." },
  { pos: "ZWR", unit: "Revenue Streams", agent: "Lane Z", status: "FLAGGED", credit: 1, penalty: 3, critical: 1, synthesisOverride: false,
    bestPlay: "Disclosed missing line-item revenue detail rather than inventing it.",
    topPenalty: "Top-line totals, percentages and residual amounts do not reconcile." },
  { pos: "SLOT", unit: "Attendance Research", agent: "Lane S", status: "CREDITED", credit: 1, penalty: 0, critical: 0, synthesisOverride: true,
    bestPlay: "Identified the correct attendance baseline across the schedule." },
  { pos: "TE", unit: "Capital & Debt Model", agent: "Lane T", status: "FLAGGED", credit: 2, penalty: 2, critical: 1, synthesisOverride: true,
    bestPlay: "Disclosed its debt-service model as illustrative, not an actual projection.",
    topPenalty: "Impossible document chronology: prepared-date precedes cited material." },
  { pos: "LT", unit: "Cost Lane", agent: "Lane LT", status: "CREDITED", credit: 2, penalty: 0, critical: 0, synthesisOverride: false,
    bestPlay: "Separated prior-year total cost from the current-year cap figure." },
  { pos: "LG", unit: "Operating Expenses", agent: "Lane LG", status: "FLAGGED", credit: 1, penalty: 3, critical: 1, synthesisOverride: false,
    bestPlay: "Disclosed that non-personnel operating expenses are materially opaque.",
    topPenalty: "Quantified estimates were left under an 'unquantified' label." },
  { pos: "C", unit: "Metrics Definitions", agent: "Lane C", status: "CREDITED", credit: 1, penalty: 0, critical: 0, synthesisOverride: true,
    bestPlay: "Kept EBITDA distinct from NOI and cap-rate concepts." },
  { pos: "RG", unit: "Source Integrity", agent: "Lane RG", status: "FLAGGED", credit: 1, penalty: 1, critical: 0, synthesisOverride: true,
    bestPlay: "Flagged weak, lead-only sources as needing higher-tier corroboration.",
    topPenalty: "Recommended a floor/premium treatment with no disclosed method." },
  { pos: "RT", unit: "Boundary Gate", agent: "Lane RT", status: "FAILED", credit: 0, penalty: 8, critical: 0, synthesisOverride: false,
    topPenalty: "Boundary review covered only part of the returned package before clearance." },
  { pos: "REF", unit: "Supplemental Profile", agent: "Supplemental", status: "SUPPLEMENTAL", credit: 1, penalty: 2, critical: 1, synthesisOverride: true,
    bestPlay: "Provided relevant supplemental rules-profile material.",
    topPenalty: "A figure was labeled 'verified' though it is not officially disclosed." },
];

const PENALTY_CATEGORIES: { key: string; label: string; items: { id: string; actor: string; sev: string; observed: string; penalty: string }[] }[] = [
  { key: "ARITHMETIC", label: "Arithmetic Failures", items: [
    { id: "S-A01", actor: "Final Synthesis Layer", sev: "CRITICAL", observed: "Declared claim total does not equal the sum of its classification counts.", penalty: "Claim ledger rejected pending reconciliation." },
    { id: "S-A02", actor: "Lane Z", sev: "CRITICAL", observed: "Stated total, percentage and residual revenue do not mathematically reconcile.", penalty: "Top-line allocation rejected pending reconciliation." },
  ]},
  { key: "CHRONOLOGY", label: "Chronology Failures", items: [
    { id: "S-C01", actor: "Lane T", sev: "CRITICAL", observed: "Prepared-date precedes later-dated sources with no disclosed amendment date.", penalty: "Research receipt marked temporally defective." },
    { id: "S-C02", actor: "Lane B", sev: "CRITICAL", observed: "Research date stated months before its own cited materials.", penalty: "Receipt marked temporally defective." },
  ]},
  { key: "PROVENANCE", label: "Source / Provenance Failures", items: [
    { id: "S-P01", actor: "Final Synthesis Layer", sev: "MATERIAL", observed: "A claim was promoted to 'supported' beyond its source-integrity grade.", penalty: "Promotion invalidated pending corroboration." },
  ]},
  { key: "SYNTHESIS", label: "Synthesis Override Failures", items: [
    { id: "S-S01", actor: "Final Synthesis Layer", sev: "MATERIAL", observed: "Correct lane research was reframed into a false summary in final synthesis.", penalty: "Final framing invalidated." },
  ]},
  { key: "CLASSIFICATION", label: "Classification / Promotion Failures", items: [
    { id: "S-K01", actor: "Final Synthesis Layer", sev: "CRITICAL", observed: "Unsupported value-allocation percentages presented with no disclosed model.", penalty: "Percentages quarantined as overclaim." },
    { id: "S-K02", actor: "Lane LG", sev: "MATERIAL", observed: "Quantified cost estimates kept under an 'unquantified' label.", penalty: "Relabel quantified buckets as estimated scenario." },
  ]},
  { key: "ACCOUNTABILITY", label: "Accountability / Roster Failures", items: [
    { id: "S-R01", actor: "Sample Agent Swarm", sev: "CRITICAL", observed: "Declared agent count does not reconcile to the listed agent records.", penalty: "Completion manifest rejected." },
  ]},
  { key: "RECEIPT", label: "Receipt / Traceability Defects", items: [
    { id: "S-T01", actor: "Lane RT", sev: "CRITICAL", observed: "Boundary review covered only part of the returned package before clearance.", penalty: "Boundary clearance invalidated." },
  ]},
];

const SAMPLE_CREDITS: { actor: string; observed: string; limitation?: string; linkedFailure?: string }[] = [
  { actor: "Lane S", observed: "Identified the correct attendance baseline across the schedule.", linkedFailure: "Final synthesis later corrupted this correct framing." },
  { actor: "Lane RG", observed: "Flagged weak, lead-only sources as needing higher-tier corroboration.", linkedFailure: "Synthesis overruled the source guard on one claim." },
  { actor: "Lane LT", observed: "Separated prior-year total cost from the current-year cap figure.", limitation: "Primary-source validation still required before reliance." },
  { actor: "Lane C", observed: "Kept EBITDA distinct from NOI and cap-rate concepts." },
  { actor: "Lane X", observed: "Labeled valuation indications as estimates, not transaction prices.", limitation: "Executive-summary wording drops one estimate qualifier." },
  { actor: "Final Synthesis Layer", observed: "Correctly downgraded an unverified compensation figure to research signal." },
];

const CLAIM_COLUMNS = [
  { title: "SURVIVED WITH LIMITATIONS", tone: "border-amber-500/50", badge: "bg-amber-500/10 text-amber-300 border-amber-500/40",
    claims: [
      "Stated-period distribution figure (subject to category renaming)",
      "Current-year cap figure (subject to source-validation limitation)",
      "Valuation indications explicitly labeled as estimates",
      "Derived multiples shown as calculations from disclosed inputs",
      "Illustrative scenario explicitly not called operating income",
    ]},
  { title: "RETURN FOR REPAIR", tone: "border-orange-500/50", badge: "bg-orange-500/10 text-orange-300 border-orange-500/40",
    claims: [
      "Schedule / attendance framing",
      "Public-subsidy percentage",
      "Single-source cost mapping",
      "Cost-range reconciliation",
      "Distributed-revenue category naming",
    ]},
  { title: "REJECTED UNTIL REBUILT", tone: "border-red-500/50", badge: "bg-red-500/10 text-red-300 border-red-500/40",
    claims: [
      "Premature investment-grade label",
      "Near-guaranteed profitability language",
      "Unsupported value-allocation percentages",
      "Forward revenue / value-floor conclusions",
      "Unbalanced roster, claim and source ledgers",
    ]},
];

const totals = (() => {
  const credit = SAMPLE_LANES.reduce((a, l) => a + l.credit, 0);
  const penalty = SAMPLE_LANES.reduce((a, l) => a + l.penalty, 0);
  const critical = SAMPLE_LANES.reduce((a, l) => a + l.critical, 0);
  return { credit, penalty, critical, total: credit + penalty, lanes: SAMPLE_LANES.length };
})();

// ─── page ───────────────────────────────────────────────────────────────────

export default function OwnersBox() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <Header />
      <ReleaseLockStrip />
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-16 space-y-12">
        <PageHero />
        <Scoreboard />
        <FormationBoard />
        <PenaltyBoard />
        <CreditBoard />
        <ClaimSurvival />
        <FinalityGate />
        <SampleNote />
      </main>
      <Footer />
    </div>
  );
}

function ReleaseLockStrip() {
  return (
    <div className="sticky top-[57px] z-30 border-y border-red-800/70 bg-red-950/85 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
        <span className="font-semibold uppercase tracking-wide text-red-300">Release Lock Active</span>
        <span className="text-red-200/90">
          RETURN FOR REMEDIATION · NOT AUDITED · NOT HUMAN APPROVED · PUBLICATION NOT AUTHORIZED
        </span>
        <span className="ml-auto rounded bg-red-900/80 px-2 py-0.5 font-semibold text-red-200">APPROVAL TOKEN ABSENT</span>
      </div>
    </div>
  );
}

function PageHero() {
  return (
    <section>
      <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
        <span className="inline-block w-6 h-px bg-amber-400/60" />
        OWNER'S BOX · VISUAL ACCOUNTABILITY CONSOLE
      </div>
      <h1 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 leading-[1.05] max-w-4xl">
        The Human Should See the Game —{" "}
        <span className="font-serif italic font-normal text-amber-300">Not Just the Final Report.</span>
      </h1>
      <p className="mt-6 text-base text-stone-300 leading-relaxed max-w-2xl">
        AI-generated work should not arrive as a polished deliverable with hidden
        failures. The Owner's Box shows what assignment was called, which agents
        took the field, where execution drifted, whether synthesis preserved or
        corrupted good work, which claims survived replay, and whether approval
        remains blocked. Neutral referees call the game. The human owner grants
        finality.
      </p>
      <div className="mt-6 inline-flex items-center gap-2 rounded border border-amber-500/40 bg-amber-500/[0.06] px-4 py-2 text-xs text-amber-200">
        <DotIcon /> Illustrative sample data — not a real, audited or approved case. No customer or internal case is shown.
      </div>
    </section>
  );
}

function Scoreboard() {
  const meta = [
    ["Sample case", "AGENT-REPLAY-SAMPLE-001"],
    ["Offense", "Sample Agent Swarm"],
    ["Referee process", "Internal replay (illustrative)"],
    ["Current verdict", "RETURN FOR REMEDIATION"],
  ];
  return (
    <section className="rounded-xl border border-stone-800 bg-gradient-to-br from-stone-900/80 to-neutral-950 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-stone-800">
        {meta.map(([k, v]) => (
          <div key={k} className={`bg-neutral-950 px-5 py-4 ${k === "Current verdict" ? "bg-red-950/50" : ""}`}>
            <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">{k}</div>
            <div className={`mt-1 font-semibold tracking-tight ${k === "Current verdict" ? "text-red-300 text-lg" : "text-stone-100"}`}>{v}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-px bg-stone-800 border-t border-stone-800">
        <Metric label="Findings" value={totals.total} tone="text-stone-100" />
        <Metric label="Violations" value={totals.penalty} tone="text-red-400" />
        <Metric label="Credits" value={totals.credit} tone="text-emerald-400" />
        <Metric label="Critical" value={totals.critical} tone="text-red-400" />
        <Metric label="Agent lanes" value={totals.lanes} tone="text-amber-300" />
      </div>
    </section>
  );
}

function Metric({ label, value, tone }: { label: string; value: number; tone: string }) {
  return (
    <div className="bg-neutral-950 px-5 py-4">
      <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">{label}</div>
      <div className={`mt-1 text-2xl font-semibold tabular-nums tracking-tight ${tone}`}>{value}</div>
    </div>
  );
}

const STATUS_TONE: Record<LaneStatus, string> = {
  CREDITED: "border-emerald-500/50 text-emerald-400",
  FLAGGED: "border-amber-500/50 text-amber-300",
  FAILED: "border-red-500/50 text-red-400",
  SUPPLEMENTAL: "border-violet-500/50 text-violet-300",
};

function FormationBoard() {
  return (
    <section>
      <SectionHead eyebrow="FORMATION BOARD" title="Who took the field — and how each lane performed." />
      <div className="mb-4 flex flex-wrap items-center gap-4 text-[11px] text-stone-400">
        <Legend cls="bg-emerald-400" label="Credited execution" />
        <Legend cls="bg-red-400" label="Violation / critical" />
        <Legend cls="bg-amber-400" label="Caution / limitation" />
        <Legend cls="bg-violet-400" label="Synthesis override" />
        <span className="ml-auto italic">A lane may show both green credit and a red penalty.</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {SAMPLE_LANES.map((l) => (
          <div key={l.pos} className={`rounded-xl border bg-neutral-950/60 px-5 py-5 ${l.critical > 0 ? "border-red-500/30" : "border-stone-800"}`}>
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="font-mono text-lg font-semibold text-stone-100">{l.pos}</span>
                <p className="text-[11px] uppercase tracking-wide text-stone-500 font-semibold">{l.unit}</p>
              </div>
              <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${STATUS_TONE[l.status]}`}>{l.status}</span>
            </div>
            <p className="mt-1 text-xs text-stone-300">{l.agent}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {l.credit > 0 && <Pill cls="border-emerald-500/50 bg-emerald-500/10 text-emerald-400">{l.credit} credit</Pill>}
              {l.penalty > 0 && <Pill cls="border-red-500/50 bg-red-500/10 text-red-400">{l.penalty} penalty</Pill>}
              {l.critical > 0 && <Pill cls="border-red-500 bg-red-500/20 text-red-200">{l.critical} critical</Pill>}
              {l.synthesisOverride && <Pill cls="border-violet-500/50 bg-violet-500/10 text-violet-300">synthesis override</Pill>}
            </div>
            {l.bestPlay && <p className="mt-3 text-[11px] leading-snug text-stone-400"><span className="font-bold uppercase text-emerald-400">Best play: </span>{l.bestPlay}</p>}
            {l.topPenalty && <p className="mt-2 text-[11px] leading-snug text-stone-400"><span className="font-bold uppercase text-red-400">Top penalty: </span>{l.topPenalty}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function PenaltyBoard() {
  return (
    <section>
      <SectionHead eyebrow="PENALTY BOARD" title="Failures grouped by rule type — not buried in prose." />
      <div className="space-y-5">
        {PENALTY_CATEGORIES.map((cat) => (
          <div key={cat.key}>
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-200">
              {cat.label}
              <span className="rounded-full border border-stone-700 px-2 py-0.5 text-[10px] text-stone-400">{cat.items.length}</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {cat.items.map((f) => (
                <article key={f.id} className="rounded-xl border border-stone-800 bg-neutral-950/60 px-5 py-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] text-stone-500">{f.id}</span>
                    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${f.sev === "CRITICAL" ? "border-red-500 bg-red-500/20 text-red-200" : "border-red-500/50 text-red-400"}`}>{f.sev}</span>
                    <span className="ml-auto text-[11px] text-stone-500">{f.actor}</span>
                  </div>
                  <p className="mt-2 text-sm text-stone-300 leading-snug">{f.observed}</p>
                  <p className="mt-2 text-[11px] text-amber-300/90"><span className="uppercase font-semibold text-stone-500">Ruling: </span>{f.penalty}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CreditBoard() {
  return (
    <section>
      <SectionHead eyebrow="CREDIT BOARD" title="Credited execution is visible — not just failures." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SAMPLE_CREDITS.map((c, i) => (
          <article key={i} className="rounded-xl border border-emerald-500/25 bg-neutral-950/60 px-5 py-4">
            <div className="text-xs font-semibold text-emerald-400">{c.actor}</div>
            <p className="mt-1 text-[12px] leading-snug text-stone-300">{c.observed}</p>
            {c.limitation && <p className="mt-2 rounded border border-amber-500/30 bg-amber-500/5 px-2 py-1.5 text-[11px] text-amber-300">Limitation: {c.limitation}</p>}
            {c.linkedFailure && <p className="mt-2 rounded border border-violet-500/30 bg-violet-500/5 px-2 py-1.5 text-[11px] text-violet-300">Linked synthesis failure: {c.linkedFailure}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function ClaimSurvival() {
  return (
    <section>
      <SectionHead eyebrow="CLAIM SURVIVAL" title="What can be used, what must be repaired, what is rejected." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {CLAIM_COLUMNS.map((col) => (
          <div key={col.title} className={`rounded-xl border bg-neutral-950/60 px-5 py-5 ${col.tone}`}>
            <span className={`inline-flex items-center rounded border px-2 py-1 text-[11px] font-semibold uppercase tracking-wide ${col.badge}`}>{col.title}</span>
            <ul className="mt-4 space-y-2">
              {col.claims.map((c) => (
                <li key={c} className="rounded border border-stone-800 bg-neutral-950/60 px-3 py-2 text-sm text-stone-300">{c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalityGate() {
  const state = [
    ["Current decision", "RETURN FOR REMEDIATION"],
    ["Approval token", "ABSENT"],
    ["Publication authorization", "NOT ISSUED"],
    ["Repository push", "BLOCKED BY CONTROL"],
    ["Human decision authority", "REQUIRED"],
  ];
  const decisions = [
    { label: "Return for Remediation", active: true },
    { label: "Reject", active: false },
    { label: "Approve for Internal Use with Limitations", active: false },
    { label: "Approve for Publication", active: false },
  ];
  return (
    <section>
      <SectionHead eyebrow="HUMAN FINALITY GATE" title="No output is final until a human says so." />
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="rounded-xl border border-red-800/70 bg-neutral-950/60 px-5 py-5">
          <dl className="divide-y divide-stone-800">
            {state.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between py-2.5">
                <dt className="text-sm text-stone-400">{k}</dt>
                <dd className="font-mono text-sm font-semibold text-red-300">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-xl border border-stone-800 bg-neutral-950/60 px-5 py-5">
          <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-3">Decision options (disabled in this preview)</div>
          <div className="space-y-2">
            {decisions.map((d) => (
              <button key={d.label} type="button" disabled aria-disabled="true"
                className={`flex w-full cursor-not-allowed items-center gap-2 rounded border px-3 py-2 text-left text-sm ${d.active ? "border-amber-600 bg-amber-950/40 text-amber-200" : "border-stone-800 bg-neutral-950 text-stone-500"}`}>
                {d.label}{d.active && <span className="ml-auto text-[10px] font-bold uppercase">active status</span>}
              </button>
            ))}
          </div>
          <p className="mt-4 rounded border border-red-800/70 bg-red-950/40 px-3 py-2.5 text-sm font-semibold text-red-200">
            Read-only preview. No approval action can be executed from this console.
          </p>
        </div>
      </div>
    </section>
  );
}

function SampleNote() {
  return (
    <section className="rounded-xl border border-stone-800 bg-neutral-950/60 px-6 py-6">
      <p className="text-sm text-stone-400 leading-relaxed">
        This console renders <span className="text-amber-300">illustrative sample data</span> to demonstrate the Owner's Box
        product surface. It is not a real, audited, approved or investment-grade case, and no internal or customer work is
        published here. In production, every credit, penalty and finality state traces to preserved game tape and recorded
        referee calls.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href="/how-it-works" className="inline-flex items-center gap-2 px-5 py-3 rounded bg-amber-400 text-neutral-950 text-sm font-semibold tracking-tight hover:bg-amber-300 transition-colors">See the Protocol</a>
        <a href="/defend-the-claw" className="inline-flex items-center gap-2 px-5 py-3 rounded border border-stone-700 text-sm text-stone-200 font-semibold tracking-tight hover:border-stone-500 hover:text-stone-50 transition-colors">Run the Playbook</a>
      </div>
    </section>
  );
}

// ─── small shared bits ─────────────────────────────────────────────────────

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6 max-w-3xl">
      <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
        <span className="inline-block w-6 h-px bg-amber-400/60" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100 leading-tight">{title}</h2>
    </div>
  );
}

function Pill({ cls, children }: { cls: string; children: React.ReactNode }) {
  return <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${cls}`}>{children}</span>;
}

function Legend({ cls, label }: { cls: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`inline-block w-2.5 h-2.5 rounded-sm ${cls}`} />
      {label}
    </span>
  );
}

function DotIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="6" cy="6" r="4" />
    </svg>
  );
}
