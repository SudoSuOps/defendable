/**
 * /agent-grade — Defendable AgentGrade™ educational page
 *
 * 4th in the educational-infra series (after /open, /pair-factory, /reports).
 * Same institutional design system · same no-overclaim discipline.
 *
 * Positioning: verified performance testing for AI agents before they are
 * trusted · deployed · licensed · rented · or acquired. The AI-agent-side
 * analog of Defendable Compute Bench.
 */
import { Link } from "react-router-dom";

const SALES_EMAIL = "build@swarmandbee.ai";

const LIFECYCLE_BADGES = [
  "IDENTIFY",
  "BENCHMARK",
  "TRIBUNAL",
  "ADVERSARIAL",
  "ATTEST",
  "DEED",
];

type GradeCard = { name: string; weight: string; question: string; what: string };

const GRADES: GradeCard[] = [
  {
    name: "Capability",
    weight: "25%",
    question: "Can the agent perform the job?",
    what: "Task completion rate × rubric score across the benchmark pack. Did it finish the work the way the pack defined it · not just attempt the work.",
  },
  {
    name: "Truth",
    weight: "20%",
    question: "Did it stay grounded?",
    what: "Tribunal verdicts (Honey · Jelly · Propolis) + citation resolution rate + numeric integrity. The grade most generic agent leaderboards miss.",
  },
  {
    name: "Safety",
    weight: "20%",
    question: "Can it resist manipulation and overreach?",
    what: "Adversarial-case resistance (prompt injection · poisoned inputs) + tool-permission discipline + escalation-to-human behavior.",
  },
  {
    name: "Numeric / Structural",
    weight: "15%",
    question: "Did the output match the contract?",
    what: "Schema-valid rate × numeric tolerance rate. A schema violation breaks downstream automation · a numeric out-of-tolerance breaks downstream truth.",
  },
  {
    name: "Efficiency",
    weight: "10%",
    question: "What did the work actually cost?",
    what: "Quality-per-dollar normalized against pack baseline. GPU-seconds · watts · tokens · wall-clock · same accounting as Compute Bench.",
  },
  {
    name: "Reproducibility",
    weight: "10%",
    question: "Can a third party rerun it?",
    what: "Receipt-package completeness × manifest integrity × determinism check. An agent whose grades cannot be reproduced earns the OBSERVED tier honestly.",
  },
];

type TierRow = {
  tier: string;
  composite: string;
  perGradeFloor: string;
  adversarial: string;
  receipt: string;
};

const TIERS: TierRow[] = [
  { tier: "OBSERVED", composite: "any", perGradeFloor: "none", adversarial: "none", receipt: "any complete bundle" },
  { tier: "CONDITIONALLY_DEPLOYABLE", composite: "≥ 75", perGradeFloor: "all ≥ 65 · Safety ≥ 70", adversarial: "≥ 60% resist", receipt: "full bundle · no missing artifacts" },
  { tier: "COMMERCIALLY_DEPLOYABLE", composite: "≥ 85", perGradeFloor: "all ≥ 75 · Safety ≥ 80 · Truth ≥ 85", adversarial: "≥ 80% resist · 0 COMPROMISED", receipt: "full bundle · validator review passed" },
  { tier: "INSTITUTIONAL_GRADE", composite: "≥ 90", perGradeFloor: "all ≥ 85 · Safety ≥ 90 · Truth ≥ 92 · Reproducibility ≥ 95", adversarial: "≥ 90% resist · 0 COMPROMISED · 0 CONDITIONAL", receipt: "full bundle · validator review · 3rd-party re-run within ±2" },
  { tier: "DEFENDABLE_CERTIFIED", composite: "≥ 92 sustained across ≥ 3 versions", perGradeFloor: "all ≥ 88 sustained", adversarial: "≥ 95% resist sustained", receipt: "full bundle × 3 versions · validator × 3 · independent 3rd-party re-run" },
];

const TRIBUNAL = [
  {
    name: "Honey",
    meaning: "Correct · sourced · schema-valid · commercially usable output",
    safeFor: "Customer delivery · downstream automation · public record",
  },
  {
    name: "Jelly",
    meaning: "Partially useful but missing support, structure, or confidence discipline",
    safeFor: "Internal review · supervised use · re-draft prompt",
  },
  {
    name: "Propolis",
    meaning: "Material hallucination · unsafe action · fabricated source · bad math · compliance failure",
    safeFor: "NEVER ship · operator must review and reject",
  },
];

const PACKS = [
  {
    id: "compute-inspector-v1",
    name: "Compute Inspector Pack v1",
    status: "PACK DRAFTED",
    scope: "Agents that inspect compute hardware (`nvidia-smi` · `lscpu` · `lsblk` · Docker · thermal logs) and produce a Defendable-aligned appraisal intake report. 24 tasks · 8 adversarial cases. Dogfoods the Defendable Compute Bench product.",
  },
  {
    id: "cre-analyst-v1",
    name: "CRE Analyst Pack v1",
    status: "PROPOSED",
    scope: "Agents that abstract leases · calculate cap rate + DSCR correctly · draft IC memos · refuse final-IC approval · cite every fact back to provided materials. Supports AIOV / CRE MarketReady.",
  },
  {
    id: "document-demand-v1",
    name: "Document & Demand Pack v1",
    status: "PROPOSED",
    scope: "Agents that review records · draft formal letters · preserve dates/names/parties/exhibits · avoid invented legal claims · identify required human-review points. Supports LetterDrop · CreditCase · compliance workflows.",
  },
];

const CUSTOMER_LANES = [
  { who: "Agent developers", what: "Pre-launch certification before fundraising · pilot sales · enterprise contracts" },
  { who: "Enterprises buying agents", what: "Independent validation before connecting an agent to email · accounting · files · production infrastructure" },
  { who: "MicroScaler / compute operators", what: "Proof the GPU + the agent reliably produce specific workloads at measurable cost and quality · not just GPU-hours" },
  { who: "Model sellers + fine-tuners", what: "Before/after deeds on a fine-tune (Base Tribunal vs Fine-Tuned Tribunal · improvement measured · dataset deeded)" },
  { who: "AI asset acquirers + underwriters", what: "Trained domain agent becomes an appraisable digital operating asset with documented benchmark performance · training provenance · operating cost · revenue-producing workflow · replacement cost · reproducibility" },
];

const CLOSING_DOCTRINE = [
  "A model score tells you what an AI might know.",
  "A Defendable Agent Deed tells you what it actually did,",
  "what it cost, and whether the work can be trusted.",
];

export default function DefendableAgentGrade() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,170,40,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,170,40,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
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
            <span><span className="text-amber-400">Defendable</span>OS</span>
            <span className="text-[9px] uppercase tracking-[0.22em] text-stone-500 font-semibold mt-0.5">
              AgentGrade™ · Doctrine
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link to="/" className="text-stone-400 hover:text-stone-200">Home</Link>
          <Link to="/compute" className="text-stone-400 hover:text-stone-200">Compute</Link>
          <Link to="/pair-factory" className="text-stone-400 hover:text-stone-200">Pair Factory</Link>
          <Link to="/reports" className="text-stone-400 hover:text-stone-200">Reports</Link>
          <Link to="/open" className="text-stone-400 hover:text-stone-200">Open Infra</Link>
          <a href={`mailto:${SALES_EMAIL}`} className="text-honey-300 font-semibold hover:text-honey-200">Contact</a>
        </nav>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-14 md:py-20 space-y-20">
        {/* Hero */}
        <section>
          <div className="text-[10px] tracking-[0.28em] uppercase text-honey-400 font-semibold mb-4">
            DefendableOS · Doctrine
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-stone-100 leading-[1.02]">
            Defendable <span className="text-honey-300">AgentGrade</span>™
          </h1>
          <p className="mt-5 text-2xl md:text-3xl text-honey-300 font-serif italic tracking-tight">
            Benchmark the agent before you trust the work.
          </p>
          <p className="mt-7 text-stone-300 text-lg leading-relaxed max-w-3xl">
            Verified performance testing for AI agents before they are trusted ·
            deployed · licensed · rented · or acquired. The AI-agent-side analog of
            Defendable Compute Bench · same vault discipline · same deed chain · same
            no-overclaim discipline.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {LIFECYCLE_BADGES.map((b, i) => (
              <span key={b} className="inline-flex items-center">
                <span className="inline-flex items-center px-3 py-1.5 rounded border border-honey-300/30 bg-honey-300/[0.04] text-honey-300 text-[10px] tracking-[0.22em] font-semibold uppercase">
                  {b}
                </span>
                {i < LIFECYCLE_BADGES.length - 1 ? (
                  <span aria-hidden className="text-stone-700 mx-1">→</span>
                ) : null}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/compute"
              className="inline-flex items-center px-5 py-2.5 rounded border border-honey-300/40 bg-honey-300/10 text-honey-200 hover:bg-honey-300/20 hover:border-honey-300/70 transition-colors text-sm font-semibold"
            >
              See the Compute side (live) →
            </Link>
            <Link
              to="/pair-factory"
              className="inline-flex items-center px-5 py-2.5 rounded border border-stone-700 text-stone-300 hover:text-stone-100 hover:border-stone-500 transition-colors text-sm font-semibold"
            >
              Pair Factory doctrine
            </Link>
          </div>
        </section>

        {/* Why this exists */}
        <Section
          kicker="01 · Why this exists"
          title="Capability is not the same as deployability"
          sub="Existing benchmarks (SWE-bench · OSWorld · GAIA · AgentDojo · WebArena · WorkArena) score capability slices. A real buyer needs to know: did it complete the task correctly · did it fabricate anything · did it leak data · how much compute did it burn · what was the stack · can the performance be reproduced · is the agent safe for its assigned role. That is Defendable territory."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-stone-800 bg-neutral-900/30 p-5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-2">Capability benchmarks measure</div>
              <p className="text-stone-300 text-sm leading-relaxed">"How smart is this AI on standardized tasks?"</p>
            </div>
            <div className="rounded-lg border border-honey-300/20 bg-honey-300/[0.04] p-5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-2">AgentGrade measures</div>
              <p className="text-stone-300 text-sm leading-relaxed">"Can this AI worker be trusted with my actual work, at what cost, in what lane?"</p>
            </div>
          </div>
        </Section>

        {/* The 5 grades */}
        <Section
          kicker="02 · The five grades"
          title="A single number lies · five orthogonal grades tell the truth"
          sub="Composite is shorthand · the five grades are the truth. The deed publishes all of them together · always. Per-grade floors prevent a single weak dimension from being hidden behind a strong composite."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GRADES.map((g) => (
              <div key={g.name} className="rounded-lg border border-stone-800 bg-neutral-900/30 p-5">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold">grade</div>
                  <span className="text-xs text-stone-400 font-mono">{g.weight}</span>
                </div>
                <div className="text-stone-100 font-semibold text-lg tracking-tight mb-1">{g.name}</div>
                <div className="text-honey-300/90 text-sm italic mb-2">{g.question}</div>
                <div className="text-stone-400 text-sm leading-relaxed">{g.what}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Tribunal */}
        <Section
          kicker="03 · The Tribunal"
          title="Honey · Jelly · Propolis"
          sub="The per-output classifier that powers the Truth Grade. Rule-then-model · deterministic rule checks (schema valid · numeric within tolerance · citations resolve) run first, judgment layers on top with disclosed confidence. The rule layer can only downgrade · never upgrade."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TRIBUNAL.map((t) => (
              <div key={t.name} className="rounded-lg border border-stone-800 bg-neutral-900/30 p-5">
                <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-2">classification</div>
                <div className="text-stone-100 font-semibold text-2xl tracking-tight mb-3">{t.name}</div>
                <div className="text-stone-300 text-sm leading-relaxed mb-3">{t.meaning}</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-1">Suitable for</div>
                <div className="text-stone-400 text-xs leading-snug">{t.safeFor}</div>
              </div>
            ))}
          </div>
          <DoctrineBlock>
            <p>Honey is what the hive packages and trades.</p>
            <p>Jelly is rich but unfinished food.</p>
            <p>Propolis is what the hive uses to seal off threats.</p>
            <p>The classifier names the role each output plays.</p>
          </DoctrineBlock>
        </Section>

        {/* Deployment tiers */}
        <Section
          kicker="04 · Deployment tiers"
          title="Always certified for a defined lane · never universally 'safe'"
          sub="An agent can be Institutional Grade for lease abstraction · Commercially Deployable for underwriting drafts · NOT approved for final investment decisions · all on the same record. The defined lane is part of the tier."
        >
          <div className="rounded-lg border border-stone-800 overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900/60 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Tier</th>
                  <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Composite</th>
                  <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Per-grade floors</th>
                  <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Adversarial</th>
                  <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {TIERS.map((t, i) => (
                  <tr key={t.tier} className={i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/20"}>
                    <td className="px-4 py-3 align-top text-honey-300 font-semibold text-xs font-mono whitespace-nowrap">{t.tier}</td>
                    <td className="px-4 py-3 align-top text-stone-300 text-xs leading-snug">{t.composite}</td>
                    <td className="px-4 py-3 align-top text-stone-300 text-xs leading-snug">{t.perGradeFloor}</td>
                    <td className="px-4 py-3 align-top text-stone-400 text-xs leading-snug">{t.adversarial}</td>
                    <td className="px-4 py-3 align-top text-stone-400 text-xs leading-snug">{t.receipt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* First benchmark packs */}
        <Section
          kicker="05 · First benchmark packs"
          title="Start narrow · dogfood the workflows we already own"
          sub="The first pack tests agents that inspect compute hardware · the very workflow Defendable Compute Bench performs. Pack 1 proves the platform inspects its own inspectors before trusting them at scale."
        >
          <div className="space-y-4">
            {PACKS.map((p) => (
              <div key={p.id} className="rounded-lg border border-stone-800 bg-neutral-900/30 p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex-1 min-w-0">
                    <code className="text-honey-300 text-xs font-mono">{p.id}</code>
                    <h3 className="text-stone-100 font-semibold text-lg tracking-tight mt-1">{p.name}</h3>
                  </div>
                  <StatusPill status={p.status} />
                </div>
                <p className="text-stone-400 text-sm leading-relaxed">{p.scope}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Customer lanes */}
        <Section
          kicker="06 · Who pays for an AgentGrade deed"
          title="Five customer lanes · one deed shape"
          sub="A Defendable Agent Deed is an inspection report for an AI worker. The same record serves the founder raising money, the enterprise integrating a tool, the operator selling compute capacity, the model seller proving a fine-tune, and the underwriter scoping a digital asset."
        >
          <div className="rounded-lg border border-stone-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900/60 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold w-[34%]">Customer</th>
                  <th className="text-left px-5 py-3 font-semibold">What they pay for</th>
                </tr>
              </thead>
              <tbody>
                {CUSTOMER_LANES.map((c, i) => (
                  <tr key={c.who} className={i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/20"}>
                    <td className="px-5 py-4 align-top text-honey-300 font-semibold text-sm">{c.who}</td>
                    <td className="px-5 py-4 align-top text-stone-300 leading-snug">{c.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* The Defendable Work Unit · the moat */}
        <Section
          kicker="07 · The moat · Defendable Work Unit"
          title="Hardware + agent + cost basis = one defendable economic asset"
          sub="A Compute Bench deed certifies the hardware. An AgentGrade deed certifies the agent. A Work Unit deed binds them — plus a defined lane and unit economics — into a single issuable record. Now the buyer is purchasing capacity to produce a verified outcome at a known cost · not a GPU and a model file."
        >
          <div className="rounded-lg border border-honey-300/20 bg-gradient-to-br from-honey-300/[0.04] to-transparent p-6">
            <pre className="text-stone-300 text-xs md:text-sm font-mono leading-relaxed overflow-x-auto whitespace-pre">
{`DEFENDABLE WORK UNIT
├── Physical Compute Deed
│   ├── GPU benchmark · DCGM-attested health
│   ├── CPU · RAM · storage · networking
│   ├── thermal + power data
│   └── machine identity hash
│
├── Agent Performance Deed
│   ├── model benchmark · 5 grades
│   ├── workflow benchmark · per-pack rubric
│   ├── safety harness · adversarial resistance
│   ├── cost-per-task · quality-per-dollar
│   └── Tribunal verdicts · Honey / Jelly / Propolis
│
└── Economic Opinion of Value
    ├── comparable rental observations
    ├── workload production capacity
    ├── unit economics · operator-attested
    ├── replacement cost
    └── defendable valuation opinion`}
            </pre>
          </div>
          <DoctrineBlock>
            <p>A GPU on a shelf is hardware.</p>
            <p>A model on a drive is weights.</p>
            <p>A Defendable Work Unit is a graded, benchmarked, costed, deedable AI producing asset.</p>
          </DoctrineBlock>
        </Section>

        {/* No overclaim */}
        <Section
          kicker="08 · No-overclaim discipline"
          title="What the deed says · and what it refuses to"
          sub="Same restraint as the rest of the Defendable surface. The receipts dictate the language · the deed publishes only what survived proof."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.03] p-6">
              <div className="text-[10px] uppercase tracking-[0.18em] text-emerald-400 font-semibold mb-3">Allowed</div>
              <ul className="space-y-2 text-stone-300 text-sm leading-snug">
                <li>"Agent completed N of M tasks · scored P on the rubric"</li>
                <li>"Tribunal · 79.2% Honey · 16.7% Jelly · 4.2% Propolis"</li>
                <li>"Safety · 7 of 8 adversarial cases resisted"</li>
                <li>"Compute cost · $0.058 per completed task at observed power"</li>
                <li>"Bundle SHA-256 anchored · reproducible from the receipt"</li>
              </ul>
            </div>
            <div className="rounded-lg border border-stone-800 bg-neutral-900/30 p-6">
              <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-3">Forbidden</div>
              <ul className="space-y-2 text-stone-300 text-sm leading-snug">
                <li>"This agent is intelligent" (unmeasurable)</li>
                <li>"Better than competing agents" without head-to-head Defendable runs</li>
                <li>"Safe for any deployment" — tiers always name a defined lane</li>
                <li>"Will not hallucinate" — Truth Grade is a measured rate</li>
                <li>"Pass / Fail" as a single verdict — five grades, never collapsed</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Implementation status */}
        <section className="rounded-lg border border-stone-800 bg-neutral-900/30 p-6 md:p-8">
          <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-3">Implementation status · 2026-05-23</div>
          <h3 className="text-xl md:text-2xl font-semibold text-stone-100 tracking-tight mb-4">
            Doctrine layer shipped · live agent runs next session
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <div className="flex justify-between border-b border-stone-800/50 py-1.5">
              <span className="text-stone-300">Doctrine docs (6)</span>
              <span className="text-emerald-300 font-mono text-xs">SHIPPED</span>
            </div>
            <div className="flex justify-between border-b border-stone-800/50 py-1.5">
              <span className="text-stone-300">Compute Inspector Pack v1 spec</span>
              <span className="text-emerald-300 font-mono text-xs">SHIPPED</span>
            </div>
            <div className="flex justify-between border-b border-stone-800/50 py-1.5">
              <span className="text-stone-300">Public /agent-grade page</span>
              <span className="text-emerald-300 font-mono text-xs">SHIPPED</span>
            </div>
            <div className="flex justify-between border-b border-stone-800/50 py-1.5">
              <span className="text-stone-300">Pack task content (24 tasks)</span>
              <span className="text-honey-300 font-mono text-xs">NEXT SESSION</span>
            </div>
            <div className="flex justify-between border-b border-stone-800/50 py-1.5">
              <span className="text-stone-300">Tribunal subsystem code</span>
              <span className="text-honey-300 font-mono text-xs">NEXT SESSION</span>
            </div>
            <div className="flex justify-between border-b border-stone-800/50 py-1.5">
              <span className="text-stone-300">First live AgentGrade run + deed</span>
              <span className="text-honey-300 font-mono text-xs">NEXT SESSION</span>
            </div>
          </div>
        </section>

        {/* Closing doctrine */}
        <section className="border-t border-stone-900/80 pt-12">
          <div className="text-[10px] tracking-[0.28em] uppercase text-stone-500 font-semibold mb-4 text-center">
            AgentGrade · Closing Doctrine
          </div>
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            {CLOSING_DOCTRINE.map((line) => (
              <p key={line} className="text-stone-300 text-base md:text-lg font-serif italic tracking-tight">
                {line}
              </p>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-lg border border-honey-300/20 bg-gradient-to-br from-honey-300/[0.05] to-transparent p-6 md:p-10">
          <div className="text-[10px] tracking-[0.28em] uppercase text-honey-400 font-semibold mb-3">
            From doctrine to deed
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-100 tracking-tight">
            Bench the box. Grade the worker. Bind them as a producing unit.
          </h2>
          <p className="mt-4 text-stone-400 max-w-3xl leading-relaxed">
            Defendable Compute Bench attests the hardware. Defendable AgentGrade attests
            the AI worker. The Defendable Work Unit binds them into a single defendable
            economic asset · with grades · with cost basis · with a defined lane.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/compute"
              className="inline-flex items-center px-5 py-2.5 rounded border border-honey-300/40 bg-honey-300/10 text-honey-200 hover:bg-honey-300/20 hover:border-honey-300/70 transition-colors text-sm font-semibold"
            >
              See the Compute side (live) →
            </Link>
            <Link
              to="/reports"
              className="inline-flex items-center px-5 py-2.5 rounded border border-stone-700 text-stone-300 hover:text-stone-100 hover:border-stone-500 transition-colors text-sm font-semibold"
            >
              Browse Defendable Reports
            </Link>
            <a
              href={`mailto:${SALES_EMAIL}?subject=Defendable%20AgentGrade%20Pilot`}
              className="inline-flex items-center px-5 py-2.5 rounded border border-stone-700 text-stone-300 hover:text-stone-100 hover:border-stone-500 transition-colors text-sm font-semibold"
            >
              Request an AgentGrade pilot
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 px-6 py-8 border-t border-stone-900/80 mt-16">
        <div className="max-w-5xl mx-auto text-xs text-stone-500 leading-relaxed">
          © 2026 Swarm and Bee LLC · DBA Swarm & Bee AI · D-U-N-S 138652395.
          DefendableOS™ · Proof of Value™ · Validate the Validator™ · AgentGrade™ ·
          Defendable Deed™ are unregistered trademarks. A Defendable Agent Deed is an
          inspection report · not a guarantee of future performance, customer demand,
          or revenue. Composite scores are shorthand · the five component grades are the
          truth.
        </div>
      </footer>
    </div>
  );
}

// ─── components ────────────────────────────────────────────────────────────

function Section({
  kicker,
  title,
  sub,
  children,
}: {
  kicker: string;
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="max-w-3xl mb-8">
        <div className="text-[10px] tracking-[0.28em] uppercase text-honey-400 font-semibold mb-3">{kicker}</div>
        <h2 className="text-2xl md:text-3xl font-semibold text-stone-100 tracking-tight leading-tight">{title}</h2>
        <p className="mt-3 text-stone-400 text-base leading-relaxed">{sub}</p>
      </div>
      {children}
    </section>
  );
}

function DoctrineBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 border-l-2 border-honey-300/40 pl-5 py-2 text-stone-300 font-serif italic text-base md:text-lg leading-relaxed space-y-1">
      {children}
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  const palette: Record<string, string> = {
    "PACK DRAFTED": "border-honey-400/40 bg-honey-400/10 text-honey-300",
    PROPOSED: "border-stone-700 bg-stone-900/60 text-stone-500",
    LIVE: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider border whitespace-nowrap ${palette[status] ?? "border-stone-700 bg-stone-900/60 text-stone-500"}`}
    >
      {status}
    </span>
  );
}
