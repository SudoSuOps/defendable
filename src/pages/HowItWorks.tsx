// /how-it-works · the depth page
//
// Six sections:
//   1. Hero
//   2. The Flow         · 8-stage pipeline from agent action to morning brief
//   3. Anatomy of a Deed · REAL JSON spec with annotations (from our first
//                          DDEED-DOV-AGENT-COMPUTE-INSPECTOR-000001-v1)
//   4. Sovereignty       · "we own the rail" thesis · DC + GPUs + brand stack
//   5. The Math          · Bayesian posterior · 30/60/90 confidence bands ·
//                          probability your agent stays under threshold
//   6. Drift Alerts      · NEW capability · early-warning monitoring product
//   + CTA

import { Footer, Header } from "../components/SiteShell";

const SALES_EMAIL = "defense@defendableos.com";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <BackgroundGrid />
      <Header />
      <main>
        <Hero />
        <Flow />
        <DeedAnatomy />
        <Sovereignty />
        <MathSection />
        <DriftAlerts />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function BackgroundGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(212,170,40,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,170,40,1) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative border-b border-stone-900/80">
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-amber-500/[0.04] via-amber-500/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-16 lg:pt-28 lg:pb-20">
        <Eyebrow>HOW IT WORKS · DEPTH PAGE</Eyebrow>
        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-50 leading-[1.05]">
          The actual{" "}
          <span className="font-serif italic font-normal text-amber-300">mechanics</span>.
        </h1>
        <p className="mt-8 text-lg text-stone-300 leading-relaxed">
          What the deed actually is. How the math works. Why
          we are sovereign infrastructure · not someone else's rebrand.
          And the early-warning capability nobody else in the AI
          observability space is shipping. No buzzwords. Real JSON.
          Real receipts. Real probabilities.
        </p>

        <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
          {[
            ["The Flow · 8 stages", "flow"],
            ["Anatomy of a Deed · real JSON", "deed"],
            ["Sovereignty · we own the rail", "sovereignty"],
            ["The Math · Bayesian posteriors", "math"],
            ["Drift Alerts · early warning", "drift"],
          ].map(([t, a]) => (
            <li key={a} className="flex gap-3">
              <span className="text-amber-300/80 font-mono w-4 shrink-0">·</span>
              <a href={`#${a}`} className="text-stone-300 hover:text-amber-300 transition-colors">{t}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── 1 · The Flow ──────────────────────────────────────────────────────────
function Flow() {
  const stages = [
    { n: "01", h: "Agent receives assignment", b: "Customer's AI agent (refund · payroll · sales · radiology · coding · etc.) is given a task by an operator or upstream system. Defendable does not intercept · no latency tax." },
    { n: "02", h: "Agent executes the assignment", b: "Agent runs its tools · makes its calls · produces its outputs · just like it would without us. Customer's offense workflow proceeds at full speed." },
    { n: "03", h: "Router captures the play", b: "DefendableRouter (software middleware) writes a signed receipt of the play (task hash · tool calls · outcome · downstream effect) to the HoneyBox or DefendableCloud. Write-only · no blocking." },
    { n: "04", h: "Reconciliation cron fires at 02:00", b: "Nightly batch grading runs across all of yesterday's plays. Rule layer first · then async LLM judge for ambiguous cases. Cheaper than real-time because batched off-peak." },
    { n: "05", h: "Tribunal labels every play", b: "Each play gets HONEY / JELLY / PROPOLIS verdict. Rule layer can only downgrade · critical failures = PROPOLIS regardless of judge opinion. Doctrine is absolute." },
    { n: "06", h: "Flag pattern analysis · liens computed", b: "Flags are clustered into patterns. Each pattern becomes a lien on the deed (PATTERN_FLAG · PACK_VERSION_LAG · TRUST_DEFICIT · etc.) with severity · root cause · workout plan · expected lift." },
    { n: "07", h: "Daily Reconciliation Deed issued", b: "Per-agent deed entry written to the Bakery vault · SHA-256 hashed · ENS-anchored to your subdomain (compliance.you.defendable.eth). Insurer-readable · auditor-stampable." },
    { n: "08", h: "Morning Brief delivered by 06:00", b: "One email lands in your inbox. Yesterday's deed per agent. Liens to clear (1-click approve). Compounding 30/60/90 day trends. Workouts auto-scheduled. Sleep-through-the-night defense." },
  ];

  return (
    <section id="flow" className="border-b border-stone-900/80 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6 py-20 lg:py-24">
        <Eyebrow>SECTION I · THE FLOW</Eyebrow>
        <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
          Eight stages.{" "}
          <span className="font-serif italic font-normal text-amber-300">Zero interruptions to your agent</span>.
        </h2>

        <ol className="mt-12 space-y-3">
          {stages.map((s) => (
            <li key={s.n} className="grid grid-cols-[3rem_1fr] gap-5 items-start">
              <div className="text-[10px] uppercase tracking-[0.18em] text-amber-300/80 font-mono pt-1">{s.n}</div>
              <div className="border-b border-stone-900/60 pb-4">
                <div className="text-base font-semibold text-stone-100">{s.h}</div>
                <div className="mt-1.5 text-sm text-stone-400 leading-relaxed">{s.b}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ─── 2 · Anatomy of a Deed ─────────────────────────────────────────────────
function DeedAnatomy() {
  return (
    <section id="deed" className="border-b border-stone-900/80 bg-stone-950/40 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl">
          <Eyebrow>SECTION II · ANATOMY OF A DEED</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            What a Defendable Agent Deed{" "}
            <span className="font-serif italic font-normal text-amber-300">actually looks like</span>.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            This is a real deed · issued on 2026-05-23 against an
            actual benchmark run on Defendable infrastructure. Every
            field is load-bearing. Every hash is verifiable. Every
            limitation is named honestly. <strong className="text-amber-300">No promotional rounding.</strong>
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-8">
          <DeedJson />
          <FieldExplainer />
        </div>

        <p className="mt-8 text-xs text-stone-500 italic leading-relaxed max-w-3xl">
          Verify the record hash · query the ENS subdomain · pull the bound compute deed · cross-check the bench bundle SHA-256 against the Bakery vault. Every piece is auditable end-to-end.
        </p>
      </div>
    </section>
  );
}

function DeedJson() {
  return (
    <div className="rounded-xl border border-stone-700/70 bg-neutral-950 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-2.5 border-b border-stone-800 bg-stone-900/60">
        <span className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-mono">
          DDEED-DOV-AGENT-COMPUTE-INSPECTOR-000001-v1.json
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-amber-300/90 font-semibold">
          DRAFT_REVIEW_RECORD
        </span>
      </div>
      <pre className="px-5 py-5 font-mono text-[11.5px] leading-relaxed text-stone-300 overflow-x-auto">
{`{
  `}<JK>"deed_id"</JK>: <JS>"DDEED-DOV-AGENT-COMPUTE-INSPECTOR-000001-v1"</JS>,
  <JK>"deed_type"</JK>: <JS>"DEFENDABLE_AGENT_DEED"</JS>,
  <JK>"issued_at"</JK>: <JS>"2026-05-23T09:42:00Z"</JS>,
  <JK>"issued_by"</JK>: <JS>"defendable.eth"</JS>,

  <JK>"subject_agent"</JK>: {`{`}
    <JK>"agent_id"</JK>: <JS>"compute-inspector-v1"</JS>,
    <JK>"agent_class"</JK>: <JS>"compute_inspector_v1"</JS>,
    <JK>"operator"</JK>: <JS>"compute-inspector.swarmbee.defendable.eth"</JS>,
    <JK>"deployment_target"</JK>: <JS>"edge_device"</JS>
  {`},`}

  <JK>"benchmark_run"</JK>: {`{`}
    <JK>"pack_id"</JK>:                  <JS>"compute_inspector_v1"</JS>,
    <JK>"pack_version"</JK>:             <JS>"v1.0-alpha"</JS>,
    <JK>"run_id"</JK>:                   <JS>"ag-20260523T094008Z-5c5c"</JS>,
    <JK>"tasks_executed"</JK>:           <JN>6</JN>,
    <JK>"adversarial_cases_resisted"</JK>: <JS>"3 / 3"</JS>
  {`},`}

  <JK>"grades_5d"</JK>: {`{`}
    <JK>"capability"</JK>:            <JN>70.5</JN>,
    <JK>"truth"</JK>:                 <JN>95.0</JN>,
    <JK>"safety"</JK>:                <JN>100.0</JN>,
    <JK>"numeric_structural"</JK>:    <JN>82.3</JN>,
    <JK>"efficiency"</JK>:            <JS>"INCOMPLETE_MVP_STUB"</JS>,
    <JK>"reproducibility"</JK>:       <JN>90.0</JN>
  {`},`}
  <JK>"composite_score"</JK>: <JN>70.5</JN>,

  <JK>"tribunal_breakdown"</JK>: {`{`}
    <JK>"honey_percent"</JK>:    <JN>66.7</JN>,
    <JK>"jelly_percent"</JK>:    <JN>33.3</JN>,
    <JK>"propolis_percent"</JK>: <JN>0.0</JN>
  {`},`}

  <JK>"deployment_tier"</JK>:   <JS>"OBSERVED"</JS>,
  <JK>"deployment_status"</JK>: <JS>"PASS_WITH_OBSERVATIONS"</JS>,
  <JK>"deed_eligibility"</JK>:  <JS>"ELIGIBLE_AFTER_REVIEW"</JS>,
  <JK>"pack_status_cap_applied"</JK>: <JB>true</JB>,

  <JK>"limitations"</JK>: [
    <JS>"MVP stub"</JS>,
    <JS>"Mock reference agent"</JS>,
    <JS>"Judge stub (deterministic policy)"</JS>,
    <JS>"Efficiency INCOMPLETE"</JS>
  ],

  <JK>"bound_artifacts"</JK>: {`{`}
    <JK>"compute_deed"</JK>:     <JS>"DDEED-DOV-COMPUTE-000001-BENCH-v2"</JS>,
    <JK>"bench_bundle_sha"</JK>: <JS>"sha256:4105a3ff99f2ba39c54167c43da2f54bcf42c0d2fea8776b9ae0a8fbfd23aefc"</JS>
  {`},`}

  <JK>"record_hash"</JK>: <JS>"sha256:ff7385b0f5319a11ebf7b7e43fb86a80bae5730ab61e29b7d5cb5fd6580a8733"</JS>,
  <JK>"ens_anchor"</JK>:  <JS>"ddeed-dov-agent-compute-inspector-000001-v1.swarmbee.defendable.eth"</JS>,

  <JK>"doctrine_note"</JK>: <JS>"pack-alpha cap applied · MVP stub limitations named · not a final value opinion · validator review pending"</JS>
{`}`}</pre>
    </div>
  );
}

// JSON syntax highlight helpers
function JK({ children }: { children: React.ReactNode }) {
  return <span className="text-amber-300/90">{children}</span>;
}
function JS({ children }: { children: React.ReactNode }) {
  return <span className="text-emerald-300/90">{children}</span>;
}
function JN({ children }: { children: React.ReactNode }) {
  return <span className="text-rose-300/90">{children}</span>;
}
function JB({ children }: { children: React.ReactNode }) {
  return <span className="text-sky-300/90">{children}</span>;
}

function FieldExplainer() {
  const fields = [
    { f: "deed_id", note: "Globally unique · semantic · sortable · contains issuer + asset class + sequence + version." },
    { f: "issued_by", note: "ENS-anchored issuer identity. defendable.eth is the root · auditable on-chain." },
    { f: "grades_5d", note: "Five-dimension benchmark · ALL FIVE always published. No single composite hides weak dimensions." },
    { f: "tribunal_breakdown", note: "Per-task Honey/Jelly/Propolis percentages. Propolis is preserved adversarial · never auto-flipped." },
    { f: "pack_status_cap_applied", note: "When pack is alpha/beta · the deed grade is hard-capped at OBSERVED tier regardless of how the agent scored. Honest framing baked in." },
    { f: "limitations", note: "Every known limitation NAMED in the deed itself. Buyers see them before they decide." },
    { f: "bound_artifacts", note: "Linked compute deed + bench bundle SHA. The agent deed is bound to the machine it ran on." },
    { f: "record_hash", note: "SHA-256 of canonical JSON. Verify locally · compare with what's in our Bakery vault · cross-check ENS." },
    { f: "ens_anchor", note: "Resolvable on ENS · anyone can query the deed identity · cross-vendor portable · regulator-acceptable." },
    { f: "doctrine_note", note: "Plain-English limitation summary. The buyer reading this knows exactly what the deed means · and what it does NOT mean." },
  ];
  return (
    <div className="space-y-3">
      <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-semibold">FIELD-LEVEL NOTES</div>
      {fields.map((x) => (
        <div key={x.f} className="rounded-lg border border-stone-800 bg-neutral-950/60 px-4 py-3">
          <div className="text-xs font-mono text-amber-300">{x.f}</div>
          <div className="mt-1 text-xs text-stone-400 leading-relaxed">{x.note}</div>
        </div>
      ))}
    </div>
  );
}

// ─── 3 · Sovereignty ───────────────────────────────────────────────────────
function Sovereignty() {
  const pillars = [
    { value: "128", label: "RTX 6000 Blackwell", note: "Paid in full · zero GPU debt · 12,288 GB aggregate VRAM" },
    { value: "1", label: "Datacenter · owned", note: "Not leased rack space · Defendable-controlled facility" },
    { value: "6", label: "Brand domains · locked", note: "Audience-segmented · all under common doctrine" },
    { value: "0", label: "Cloud vendor dependency", note: "We run open weights on owned hardware · forever-runnable" },
    { value: "0", label: "Offense agents shipped", note: "Permanent brand contract · we never compete with our customers" },
    { value: "100%", label: "Doctrine packs open source", note: "MIT licensed · forkable · auditable · published on opendefendable.com" },
  ];
  return (
    <section id="sovereignty" className="border-b border-stone-900/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl">
          <Eyebrow>SECTION III · SOVEREIGNTY</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            We are{" "}
            <span className="font-serif italic font-normal text-amber-300">sovereign infrastructure</span>.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            Most "AI infra" startups are reseller skins on top of
            AWS GPUs · OpenAI models · someone else's audit trail.
            When their upstream raises prices · changes TOS · gets
            acquired · or fails compliance · the rebrand collapses
            with it.
          </p>
          <p className="mt-4 text-base text-stone-300 leading-relaxed">
            Defendable is a <strong className="text-amber-300">sovereign rail</strong>. Hardware we own.
            Models with open weights we can pin forever. Doctrine
            packs we publish under MIT. Brand stack we control.
            ENS namespace we operate. No upstream vendor can pull
            the rug. The rail outlives every model generation it
            currently runs on.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div key={p.label} className="rounded-xl border border-stone-800 bg-neutral-950/60 px-6 py-7">
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-amber-300 font-mono">{p.value}</div>
              <div className="mt-2 text-sm text-stone-100 font-medium">{p.label}</div>
              <div className="mt-1 text-xs text-stone-500 leading-relaxed">{p.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4 · The Math ──────────────────────────────────────────────────────────
function MathSection() {
  return (
    <section id="math" className="border-b border-stone-900/80 bg-stone-950/40 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl">
          <Eyebrow>SECTION IV · THE MATH</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Real probabilities ·{" "}
            <span className="font-serif italic font-normal text-amber-300">not vibes</span>.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            Every flag rate we publish is a posterior estimate with a
            credible interval · computed via Bayesian inference over
            the cumulative play count. Pattern lift forecasts come
            from historical pack-rule effectiveness data · adjusted
            per agent class. <strong className="text-amber-300">If we can't show the math · we don't publish the number.</strong>
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.1fr_1fr] gap-8 items-start">
          <MathChart />
          <MathTable />
        </div>

        <div className="mt-10 rounded-xl border border-stone-800 bg-neutral-950/60 px-6 py-6">
          <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-semibold mb-3">
            What the chart shows
          </div>
          <p className="text-sm text-stone-300 leading-relaxed">
            Sample <span className="font-mono text-amber-300">refund-bot-acme-001</span> over 90 days.
            Day 30 baseline 80.4% promote rate with 95% credible
            interval ±2.4pp. After Pattern A pack-rule fix ships day 35 ·
            expected lift +12.1pp ·{" "}
            <strong className="text-stone-100">posterior shifts to 92.5% ± 1.8pp by day 60</strong>.
            Day 90 with Pattern B + C clearance · agent stabilizes
            at 96% ± 1.1pp · meets DEFENDABLE-ATTESTED grade and
            unlocks the insurance carrier feed.
          </p>
        </div>
      </div>
    </section>
  );
}

function MathChart() {
  // Cumulative promote-rate trajectory · simple inline SVG · zero deps.
  // Days 0-90 · curves: actual (solid), upper/lower credible interval (dashed),
  // pack-fix shipping markers, threshold lines.
  const W = 620, H = 320, PAD = 36;
  const days = 90;
  // Data points: (day, rate, lower, upper)
  const points: [number, number, number, number][] = [
    [0, 0.77, 0.72, 0.82],
    [7, 0.78, 0.74, 0.82],
    [14, 0.79, 0.76, 0.82],
    [21, 0.80, 0.77, 0.82],
    [30, 0.804, 0.78, 0.83],
    [35, 0.83, 0.81, 0.85],
    [42, 0.89, 0.875, 0.91],
    [50, 0.92, 0.91, 0.935],
    [60, 0.925, 0.917, 0.943],
    [70, 0.935, 0.928, 0.948],
    [80, 0.955, 0.95, 0.965],
    [90, 0.96, 0.955, 0.971],
  ];
  const x = (d: number) => PAD + (d / days) * (W - PAD * 2);
  const y = (r: number) => H - PAD - (r - 0.65) / 0.35 * (H - PAD * 2);

  const linePath = points.map(([d, r], i) => `${i === 0 ? "M" : "L"} ${x(d)} ${y(r)}`).join(" ");
  const upperPath = points.map(([d, , , u], i) => `${i === 0 ? "M" : "L"} ${x(d)} ${y(u)}`).join(" ");
  const lowerPath = points.map(([d, , l], i) => `${i === 0 ? "M" : "L"} ${x(d)} ${y(l)}`).join(" ");
  const bandPath = `${upperPath} L ${x(points[points.length-1][0])} ${y(points[points.length-1][2])} ` +
                   points.slice().reverse().map(([d, , l]) => `L ${x(d)} ${y(l)}`).join(" ") + " Z";

  return (
    <div className="rounded-xl border border-stone-700/70 bg-neutral-950 px-5 py-5 shadow-2xl">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-mono">
          refund-bot-acme-001 · promote rate · 90 days
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-amber-300/90 font-semibold">
          Bayesian posterior · 95% CI
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
        {/* gridlines */}
        {[0.7, 0.8, 0.9, 1.0].map((r) => (
          <g key={r}>
            <line x1={PAD} y1={y(r)} x2={W - PAD} y2={y(r)} stroke="#3a2f1f" strokeWidth="0.4" strokeDasharray="2 4" />
            <text x={PAD - 6} y={y(r) + 3} textAnchor="end" fontSize="10" fill="#5e5346" fontFamily="ui-monospace">{(r * 100).toFixed(0)}%</text>
          </g>
        ))}
        {/* day axis */}
        {[0, 30, 60, 90].map((d) => (
          <g key={d}>
            <line x1={x(d)} y1={H - PAD} x2={x(d)} y2={H - PAD + 4} stroke="#5e5346" />
            <text x={x(d)} y={H - PAD + 16} textAnchor="middle" fontSize="10" fill="#7a6f5a" fontFamily="ui-monospace">d{d}</text>
          </g>
        ))}
        {/* threshold: DEFENDABLE-ATTESTED at 0.95 */}
        <line x1={PAD} y1={y(0.95)} x2={W - PAD} y2={y(0.95)} stroke="#e8b65a" strokeWidth="0.7" strokeDasharray="6 3" opacity="0.5" />
        <text x={W - PAD - 4} y={y(0.95) - 4} textAnchor="end" fontSize="9" fill="#e8b65a" fontFamily="ui-monospace" opacity="0.7">DEFENDABLE-ATTESTED · 95%</text>
        {/* CI band */}
        <path d={bandPath} fill="#e8b65a" opacity="0.10" />
        <path d={upperPath} stroke="#a87f33" strokeWidth="0.7" fill="none" strokeDasharray="3 3" opacity="0.6" />
        <path d={lowerPath} stroke="#a87f33" strokeWidth="0.7" fill="none" strokeDasharray="3 3" opacity="0.6" />
        {/* main line */}
        <path d={linePath} stroke="#e8b65a" strokeWidth="2" fill="none" />
        {/* fix-ship markers */}
        <g>
          <circle cx={x(35)} cy={y(0.83)} r="4.5" fill="#0c0a06" stroke="#e8b65a" strokeWidth="1.6" />
          <text x={x(35)} y={y(0.83) - 10} fontSize="9" textAnchor="middle" fill="#e8b65a" fontFamily="ui-monospace">Pattern A fix</text>
        </g>
        <g>
          <circle cx={x(70)} cy={y(0.935)} r="4.5" fill="#0c0a06" stroke="#e8b65a" strokeWidth="1.6" />
          <text x={x(70)} y={y(0.935) - 10} fontSize="9" textAnchor="middle" fill="#e8b65a" fontFamily="ui-monospace">Patterns B+C</text>
        </g>
      </svg>
      <div className="mt-3 grid grid-cols-3 gap-3 text-xs font-mono">
        <Stat label="Day 30" value="80.4 ± 2.4" />
        <Stat label="Day 60" value="92.5 ± 1.8" />
        <Stat label="Day 90" value="96.0 ± 1.1" />
      </div>
    </div>
  );
}

function MathTable() {
  return (
    <div className="space-y-4">
      <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-semibold">PROBABILITIES YOU CAN UNDERWRITE</div>
      <div className="rounded-xl border border-stone-800 bg-neutral-950/60 px-5 py-5">
        <div className="space-y-3 font-mono text-sm">
          <Row k="P(rate ≥ 95%) at day 60" v="62.4%" />
          <Row k="P(rate ≥ 95%) at day 90" v="91.7%" />
          <Row k="P(rate &lt; 80%) at day 90" v="0.3%" />
          <Row k="Expected drift (90→180d)" v="+0.1 ± 0.4pp" />
          <Row k="Insurance baseline breach probability" v="2.1%" />
          <Row k="Posterior confidence (5,000 plays)" v="HIGH" />
        </div>
      </div>
      <p className="text-xs text-stone-500 italic leading-relaxed">
        Insurance carriers read THIS · not "this agent feels safe." Every probability is a posterior on observed play data · updated nightly · reproducible from the deed ledger.
      </p>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3 border-b border-stone-800/60 pb-2 last:border-0 last:pb-0">
      <span className="text-stone-400" dangerouslySetInnerHTML={{ __html: k }} />
      <span className="text-amber-300">{v}</span>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-stone-800 bg-neutral-950/60 px-3 py-2">
      <div className="text-[9px] uppercase tracking-[0.18em] text-stone-500">{label}</div>
      <div className="text-amber-300 mt-0.5">{value}</div>
    </div>
  );
}

// ─── 5 · Drift Alerts ──────────────────────────────────────────────────────
function DriftAlerts() {
  const alertTypes = [
    {
      sev: "INFO",
      head: "Pack version lag detected",
      body: "Agent on refund_agent_v1@v1.0-alpha · v1.0-beta released yesterday with 4 new adversarial cases · auto-upgrade scheduled Sunday maintenance window.",
      color: "stone",
    },
    {
      sev: "WARNING",
      head: "Flag rate trending up",
      body: "Last 14 days: +1.8pp/week flag rate increase · Pattern A reappearing in 9 plays · likely cause: customer behavior shift after pricing change · Managed Fixer queued for review.",
      color: "amber",
    },
    {
      sev: "WARNING",
      head: "Tribunal verdict mix shifting",
      body: "PROPOLIS ratio rose from 0.4% → 1.2% over 7 days · indicates new adversarial pattern · 3 plays under embargo review · pack contribution candidate.",
      color: "amber",
    },
    {
      sev: "CRITICAL",
      head: "Insurance baseline breach imminent",
      body: "Forecast probability of falling below 85% promote rate in next 14 days: 18.3% · current contract baseline is 90% · carrier auto-notified · Fixer escalation triggered · operator decision required within 48h.",
      color: "rose",
    },
    {
      sev: "CRITICAL",
      head: "Pattern regression detected",
      body: "Previously-cleared Pattern A (lien L-2026-0381 · resolved 2026-04-12) has reappeared in 6 plays over last 24h · root cause likely doctrine pack rule rollback · pack version pinned · investigation open.",
      color: "rose",
    },
  ];

  return (
    <section id="drift" className="border-b border-stone-900/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl">
          <Eyebrow>SECTION V · DRIFT ALERTS · NEW</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            We don't just{" "}
            <span className="font-serif italic font-normal text-amber-300">grade past performance</span>{" "}
            · we forecast drift.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            Insurance carriers love early warning. Auditors love
            early warning. CFOs love early warning. Nobody in the AI
            observability space ships it because nobody else has the
            per-task deed substrate to forecast against.
          </p>
          <p className="mt-4 text-base text-stone-300 leading-relaxed">
            <strong className="text-stone-100">DefendableOS Drift Alerts continuously analyzes your deed ledger</strong>{" "}
            and triggers severity-tiered notifications BEFORE the
            problem shows up in your morning brief. Like credit
            monitoring · for your AI agents.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {alertTypes.map((a, i) => (
            <DriftCard key={i} {...a} />
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <DriftStat head="Delivery channels" body="Email · Slack · Microsoft Teams · PagerDuty · SMS · custom webhooks · all configurable per severity." />
          <DriftStat head="Every alert is receipted" body="The alert itself becomes a deed entry · immutable record · auditable later · the alert is part of the closed loop." />
          <DriftStat head="Insurance carrier integration" body="If you're on the carrier feed · qualifying alerts auto-route to your underwriter · maintains premium discount eligibility." />
        </div>
      </div>
    </section>
  );
}

function DriftCard({ sev, head, body, color }: { sev: string; head: string; body: string; color: string }) {
  const tone = color === "rose"
    ? "border-rose-500/40 bg-rose-500/[0.05]"
    : color === "amber"
      ? "border-amber-500/40 bg-amber-500/[0.05]"
      : "border-stone-800 bg-neutral-950/60";
  const sevColor = color === "rose" ? "text-rose-300" : color === "amber" ? "text-amber-300" : "text-stone-400";
  return (
    <div className={`rounded-xl border ${tone} px-6 py-5`}>
      <div className="flex items-start gap-4">
        <span className={`text-[10px] uppercase tracking-[0.22em] font-bold font-mono ${sevColor} w-20 shrink-0 pt-0.5`}>{sev}</span>
        <div className="flex-1">
          <div className="text-base font-semibold text-stone-100">{head}</div>
          <p className="mt-1 text-sm text-stone-400 leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}

function DriftStat({ head, body }: { head: string; body: string }) {
  return (
    <div className="rounded-xl border border-stone-800 bg-neutral-950/60 px-5 py-5">
      <div className="text-sm font-semibold text-amber-300">{head}</div>
      <p className="mt-2 text-xs text-stone-400 leading-relaxed">{body}</p>
    </div>
  );
}

// ─── CTA ───────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="rounded-2xl border border-stone-800 bg-gradient-to-br from-stone-900/80 to-neutral-950 px-8 py-12 lg:px-14 lg:py-16">
          <Eyebrow>READY</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 leading-tight max-w-3xl">
            Now you've seen the{" "}
            <span className="font-serif italic font-normal text-amber-300">mechanics</span>.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed max-w-2xl">
            Real deed JSON · sovereign infrastructure · Bayesian
            posteriors · drift alerts. This is what defense looks
            like when it's built on receipts instead of marketing.
            Order a HoneyBox · try DefendableCloud · or just talk
            to us.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="/honeybox"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-amber-400 text-neutral-950 text-sm font-semibold tracking-tight hover:bg-amber-300 transition-colors"
            >
              Order a HoneyBox
              <Arrow />
            </a>
            <a
              href="/cloud"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-amber-500/40 bg-amber-500/10 text-sm text-amber-300 font-semibold tracking-tight hover:bg-amber-500/20 transition-colors"
            >
              Try DefendableCloud
            </a>
            <a
              href="/doctrine"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-700 text-sm text-stone-200 font-semibold tracking-tight hover:border-stone-500 hover:text-stone-50 transition-colors"
            >
              Read the Doctrine
            </a>
            <a
              href={`mailto:${SALES_EMAIL}?subject=How%20It%20Works%20question`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-800 text-sm text-stone-400 font-semibold tracking-tight hover:text-stone-200 transition-colors"
            >
              {SALES_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── shared ────────────────────────────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
      <span className="inline-block w-6 h-px bg-amber-400/60" />
      {children}
    </div>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  );
}
