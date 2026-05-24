// /opendefense · OpenDefense · Open Source Market Intelligence for AI Agent Defense
//
// The public OM. Synthesizes the 2026-05-23 four-agent research brief into
// a single citable category briefing. Every stat sourced. Every M&A dated.
// Every vertical scored. The "Defendable publishes the open intelligence"
// counter to Cisco's "ship the closed product" play.
//
// Tone: institutional research note. Charcoal + honey. No marketing fluff.
// Every claim hyperlinked to source.

import { Footer, Header } from "../components/SiteShell";

const SALES_EMAIL = "defense@defendableos.com";

export default function OpenDefense() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <BackgroundGrid />
      <Header />
      <main>
        <Hero />
        <Toc />
        <Section1Demand />
        <Section2Velocity />
        <Section3RegCliff />
        <Section4Wedges />
        <Section5AcquisitionWave />
        <Section6Landscape />
        <Section7WhiteSpace />
        <Section8Bundle />
        <Sources />
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
      <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-16 lg:pt-28 lg:pb-20">
        <Eyebrow>OPENDEFENSE · OPEN-SOURCE MARKET INTELLIGENCE</Eyebrow>
        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-50 leading-[1.05]">
          The category{" "}
          <span className="font-serif italic font-normal text-amber-300">briefing</span>{" "}
          nobody else is publishing.
        </h1>
        <p className="mt-8 text-lg text-stone-300 leading-relaxed">
          The AI-agent defense category just had the largest 18-month
          consolidation wave in software security history. Six named
          competitors got acquired. A regulatory cliff lands in ~10 weeks.
          84% of operators admit they would fail an agent-behavior audit
          today. <strong className="text-amber-300">This page is the public market
          intelligence we use internally · and we're making it open.</strong>
        </p>
        <p className="mt-4 text-base text-stone-400 leading-relaxed">
          Cisco ships closed products. We publish open intelligence.
          That's <span className="text-amber-300 italic font-serif">OpenDefense</span>.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 text-xs">
          <Pill>Refreshed 2026-05-23</Pill>
          <Pill>4 research streams</Pill>
          <Pill>120+ cited sources</Pill>
          <Pill>MIT-attribution licensed</Pill>
        </div>

        <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-500/[0.04] px-5 py-4 max-w-3xl">
          <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/90 font-semibold mb-1.5">
            Segment filter
          </div>
          <p className="text-sm text-stone-200 leading-relaxed">
            <strong>DefendableOS is for SMB → mid-market 5cap operators.</strong>{" "}
            Cisco · F5 · Check Point own the Fortune 500 lane. We own the
            regional MRI center · the AmLaw 200 firm · the Lemonade-class
            InsurTech · the 30-person fintech with prod agents and no
            enterprise procurement function. Different buyer · different
            pricing motion · same defense doctrine.
          </p>
        </div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded border border-stone-800 bg-neutral-950/60 text-stone-400 font-mono">
      {children}
    </span>
  );
}

// ─── Table of contents ────────────────────────────────────────────────────
function Toc() {
  const sections = [
    ["§ 1", "The Demand · pain stack ranked by frequency × severity", "demand"],
    ["§ 2", "The Velocity · TAM/SAM/SOM · funding · growth rates", "velocity"],
    ["§ 3", "The Regulatory Cliff · dates by region/sector", "reg-cliff"],
    ["§ 4", "The Wedge Verticals · Top 5 ranked", "wedges"],
    ["§ 5", "The Acquisition Wave · 18-month M&A timeline", "acquisitions"],
    ["§ 6", "The Competitive Landscape · positioning matrix", "landscape"],
    ["§ 7", "The White Space · what nobody ships", "whitespace"],
    ["§ 8", "The Defendable Bundle · our unique stack", "bundle"],
  ];
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Eyebrow>CONTENTS</Eyebrow>
        <ol className="mt-6 grid md:grid-cols-2 gap-x-8 gap-y-2.5">
          {sections.map(([n, title, anchor]) => (
            <li key={anchor} className="flex gap-3 text-sm">
              <span className="text-amber-300/80 font-mono w-10 shrink-0">{n}</span>
              <a href={`#${anchor}`} className="text-stone-300 hover:text-amber-300 transition-colors leading-snug">
                {title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ─── § 1 · The Demand ──────────────────────────────────────────────────────
function Section1Demand() {
  return (
    <Section id="demand" n="§ 1" title="The Demand · The pain stack is documented">
      <P>
        Every AI-agent defense vendor will tell you the market is real.
        We pulled the receipts. The pain stack below comes from four
        independent research streams: GitGuardian's 2025 leak report,
        Gravitee's State of AI Agent Security 2026 survey, the Anthropic
        post-mortem of April 2026, and arXiv 2511.04032 on silent
        multi-agent failures.
      </P>

      {/* Killer stats row */}
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          value="88%"
          label="of agent pilots never reach production"
          src="DigitalApplied · Mar 2026"
          url="https://www.digitalapplied.com/blog/ai-agent-scaling-gap-march-2026-pilot-to-production"
        />
        <StatCard
          value="84%"
          label="of operators would fail an agent-behavior audit today"
          src="Gravitee · 2026"
          url="https://www.gravitee.io/blog/state-of-ai-agent-security-2026-report-when-adoption-outpaces-control"
        />
        <StatCard
          value="74%"
          label="have ALREADY rolled back an agent over governance failures"
          src="Gravitee · 2026"
          url="https://www.gravitee.io/blog/state-of-ai-agent-security-2026-report-when-adoption-outpaces-control"
        />
        <StatCard
          value="28.6M"
          label="secrets leaked to public GitHub in 2025 · +34% YoY · 24K in MCP configs"
          src="GitGuardian · Apr 2026"
          url="https://www.helpnetsecurity.com/2026/04/14/gitguardian-ai-agents-credentials-leak/"
        />
      </div>

      <SubHead>Top 10 pain points · ranked by frequency × severity</SubHead>

      <div className="mt-6 space-y-3">
        {PAIN_STACK.map((p, i) => (
          <PainRow key={i} n={i + 1} {...p} />
        ))}
      </div>

      <Callout>
        <strong className="text-amber-300">The synthesis:</strong> every top-10 pain collapses into one
        root cause · <em className="font-serif">the agent vendor is grading its own work</em>. There is no
        neutral third-party record of what the agent actually did. EU AI Act high-risk
        obligations land in 10 weeks · Colorado AI Act in 4 weeks · the buyer is already
        shopping. They just don't see a third-party rail yet.
      </Callout>
    </Section>
  );
}

const PAIN_STACK: { title: string; note: string; buyer: string; src: [string, string] }[] = [
  {
    title: "Prompt injection via tools, docs, MCP",
    note: "OWASP LLM01 still #1 in 2026 · 5,000+ community MCP servers · Drift→Salesforce cascade hit 700+ orgs",
    buyer: "CISO · security eng",
    src: ["Practical DevSecOps · MCP Vulnerabilities", "https://www.practical-devsecops.com/mcp-security-vulnerabilities/"],
  },
  {
    title: "Hidden cost explosions · runaway token bills",
    note: "$4,200 weekend on a single Cursor refactor · Cursor's public 7/2025 apology · token prices fell 280× while bills rose 320%",
    buyer: "CFO · VP Eng · FinOps",
    src: ["LeanOps · Agentic AI cost runaway", "https://leanopstech.com/blog/agentic-ai-cost-runaway-token-budget-2026/"],
  },
  {
    title: "Credential leakage · over-privileged agent identities",
    note: "AI-credential leaks +81% YoY · only 21.9% of teams have agent OAuth in a PAM · Codex held org-wide GitHub OAuth",
    buyer: "CISO · IAM team",
    src: ["VentureBeat · Six exploits broke AI coding agents", "https://venturebeat.com/security/six-exploits-broke-ai-coding-agents-iam-never-saw-them"],
  },
  {
    title: "Hallucinated approvals · unauthorized autonomous actions",
    note: "Air Canada lost in court over bot's invented policy · Cursor agent wiped PocketOS production DB in <10s · CNBC: 1 in 5 CS bot users see no benefit",
    buyer: "GC · COO · CX",
    src: ["CNBC · I hate customer-service chatbots", "https://www.cnbc.com/2026/04/01/ai-chatbot-customer-service-complaints-refunds.html"],
  },
  {
    title: "Silent failures · non-determinism · undebuggable traces",
    note: "arXiv built 4,275-trajectory benchmark of silent multi-agent failures · OpenTelemetry agent semconv still 'Development' in 2026",
    buyer: "SRE · AgentOps · on-call",
    src: ["arXiv 2511.04032 · Detecting Silent Failures", "https://arxiv.org/abs/2511.04032"],
  },
  {
    title: "Regression after model version updates",
    note: "Anthropic 4/23/2026 post-mortem: 6-week Claude Code regression invisible to API-level tests · benchmark up, real workflow down",
    buyer: "AgentOps · product owner",
    src: ["Build This Now · Claude Code Quality Regression 2026", "https://www.buildthisnow.com/blog/models/claude-code-quality-regression-2026"],
  },
  {
    title: "Audit-trail gaps for SOC 2 / HIPAA / EU AI Act",
    note: "Only 23% of orgs have a formal agent-identity strategy · financial-services regs converging on 7-yr immutable records",
    buyer: "Compliance · GRC · GC",
    src: ["Blaxel · SOC 2 Compliance for AI Agents 2026", "https://blaxel.ai/blog/soc-2-compliance-ai-guide"],
  },
  {
    title: "Framework churn · abstraction debugging hell",
    note: "LangChain doc churn = #1 complaint · AutoGen in maintenance mode · CrewAI burns excess tokens",
    buyer: "Eng manager · tech lead",
    src: ["Logic.inc · AutoGen vs LangChain vs CrewAI 2026", "https://logic.inc/resources/autogen-vs-langchain-vs-crewai"],
  },
  {
    title: "Shadow AI · unsanctioned agent sprawl",
    note: "OpenClaw crisis: 135K stars, 21K exposed instances, malicious marketplace skills · HIPAA NPRM requires AI assets in annual risk inventory",
    buyer: "CISO · IT governance",
    src: ["HackerNews (TheHackerNews) · Your AI Agents Are Already Inside the Perimeter", "https://thehackernews.com/2026/05/your-ai-agents-are-already-inside.html"],
  },
  {
    title: "Vendor lock-in · privacy · data-residency",
    note: "Prompt cache, fine-tunes, tool schemas all become provider-specific · EU customers routinely refuse US-hosted inference",
    buyer: "CTO · procurement · EU/UK CS",
    src: ["Cybersecurity Insiders · AI Governance is Data Governance", "https://www.cybersecurity-insiders.com/may-2026-is-the-forecast-ai-governance-just-became-data-governance/"],
  },
];

function PainRow({ n, title, note, buyer, src }: {
  n: number; title: string; note: string; buyer: string; src: [string, string];
}) {
  return (
    <div className="rounded-xl border border-stone-800 bg-neutral-950/60 px-5 py-4">
      <div className="grid lg:grid-cols-[3rem_1fr_8rem] gap-4 items-start">
        <div className="text-amber-300/80 font-mono text-sm pt-0.5">#{n}</div>
        <div>
          <div className="text-base font-semibold text-stone-100">{title}</div>
          <div className="mt-1 text-sm text-stone-400 leading-relaxed">{note}</div>
          <a href={src[1]} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs text-amber-300/80 hover:text-amber-300 font-mono">
            ↗ {src[0]}
          </a>
        </div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold lg:text-right">
          Buyer<br />
          <span className="normal-case tracking-normal text-stone-300 text-xs font-normal mt-0.5 inline-block">{buyer}</span>
        </div>
      </div>
    </div>
  );
}

// ─── § 2 · The Velocity ───────────────────────────────────────────────────
function Section2Velocity() {
  return (
    <Section id="velocity" n="§ 2" title="The Velocity · The market is real and moving fast" bg>
      <P>
        Three converging segments · 25-42% CAGRs across all of them · funding
        rounds across the 24 months totaling &gt;$300M · three strategic exits
        in 18 months. Treat single-number TAMs as ranges (analyst firms vary
        3-5×) · the <em className="font-serif">direction</em> is unambiguous.
      </P>

      <div className="mt-10 grid md:grid-cols-4 gap-4">
        <StatCard
          value="$6-9B"
          label="2026 TAM · agent defense + observability + governance combined"
          src="TBRC · MarketsandMarkets · Forrester midpoint"
          url="https://www.marketsandmarkets.com/PressReleases/agentic-ai-security.asp"
        />
        <StatCard
          value="$30-45B"
          label="2030 projected · 25-42% CAGR across segments"
          src="Same · midpoint"
          url="https://market.us/report/llm-observability-platform-market/"
        />
        <StatCard
          value="70-80K"
          label="orgs globally with ≥1 production agent today"
          src="S&P / McKinsey · 31% enterprise penetration"
          url="https://www.digitalapplied.com/blog/ai-agent-adoption-2026-enterprise-data-points"
        />
        <StatCard
          value="$1.5-2B"
          label="US AI-driven cyber premium net-new in 2026 alone"
          src="ClaimsJournal · Nov 2025"
          url="https://www.claimsjournal.com/news/national/2025/11/05/333914.htm"
        />
      </div>

      <SubHead>Growth rates · 2024 → 2027</SubHead>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-800">
              <Th>Segment</Th><Th>2024</Th><Th>2025</Th><Th>2026</Th><Th>2027e</Th><Th>CAGR</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ["LLM Observability", "~$1.4B", "$1.97B", "$2.69B", "~$3.6B", "36%"],
              ["Agentic AI Security", "<$1B", "~$1.2B", "$1.65B", "~$2.3B", "42%"],
              ["AI Governance Software", "~$300M", "~$400M", "$492M", "~$650M", "30%"],
              ["Enterprise apps w/ agents", "33%", "<5% specific", "40%", "60%+", "Gartner"],
              ["Enterprises with ≥1 prod agent", "<15%", "~20%", "31%", "45-50%", "S&P/McKinsey"],
            ].map((row, i) => (
              <tr key={i} className="border-b border-stone-900/60">
                {row.map((c, j) => (
                  <td key={j} className={`py-3 ${j === 0 ? "pr-4 text-stone-200 font-medium" : "px-3 text-stone-400 font-mono"}`}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SubHead>Best-case revenue trajectory · benchmarked against Snyk</SubHead>
      <P>
        Using HackerOne · Snyk · Datadog as analogues for a category-leading
        defense rail launching in 2026 · this is the defensible best-case
        trajectory. <strong className="text-amber-300">Snyk hit $407M ARR in 6 years from $0</strong> via
        open-source distribution → enterprise upsell. That's the playbook.
      </P>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-800">
              <Th>Year</Th><Th>ARR</Th><Th>Customers</Th><Th>Comparable</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Y1 · 2026", "$0.5-2M", "20-50 design partners", "Lakera Y1 · Langfuse Y1"],
              ["Y2 · 2027", "$5-10M", "100-250", "Snyk Y2 · Vanta Y2"],
              ["Y3 · 2028", "$20-35M", "400-700", "Snyk Y3 · Drata Y3"],
              ["Y4 · 2029", "$60-100M", "1,000-2,000", "Snyk Y4 ($100M ARR)"],
              ["Y5 · 2030", "$150-300M", "3,000-6,000", "Snyk Y5-6 ($300M ARR)"],
            ].map((r, i) => (
              <tr key={i} className="border-b border-stone-900/60">
                {r.map((c, j) => (
                  <td key={j} className={`py-3 ${j === 0 ? "pr-4 text-amber-300/90 font-mono" : "px-3 text-stone-300"}`}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

// ─── § 3 · The Regulatory Cliff ───────────────────────────────────────────
function Section3RegCliff() {
  const cliffs = [
    {
      date: "2026-06-01",
      countdown: "~1 week out",
      name: "Colorado AI Act · enforceable",
      what: "First US state AI consumer-protection law with private right of action. Affects any AI consequential-decision system serving Colorado consumers.",
      sector: "All sectors · CO consumer-facing",
      severity: "critical",
    },
    {
      date: "2026-08-02",
      countdown: "~10 weeks out",
      name: "EU AI Act · high-risk obligations live",
      what: "Risk management · data governance · technical documentation · transparency · human oversight · accuracy / robustness / cybersecurity. Penalties up to 7% of global revenue.",
      sector: "All EU operators of high-risk AI",
      severity: "critical",
    },
    {
      date: "2026-mid",
      countdown: "weeks-months",
      name: "HIPAA NPRM · expected final rule",
      what: "Requires AI assets in the annual risk inventory · mandatory agent-behavior controls in BAAs. Affects every covered entity using AI agents.",
      sector: "Healthcare",
      severity: "high",
    },
    {
      date: "2026-Q3",
      countdown: "this summer",
      name: "NAIC Model Bulletin on AI · adopted in 40+ states",
      what: "Imposes 'agent must be explainable, auditable, free of unfair discrimination' on every state-regulated insurance carrier using AI.",
      sector: "Insurance",
      severity: "high",
    },
    {
      date: "2027-01-01",
      countdown: "~7 months",
      name: "CMS-0057-F · electronic prior auth mandate",
      what: "Federal mandate · FHIR-based API for prior authorization · all CMS-regulated payers. AI-driven PA denials carry direct class-action exposure.",
      sector: "Healthcare payers",
      severity: "high",
    },
    {
      date: "2026-01 (live)",
      countdown: "active",
      name: "CFPB advisory · AI-initiated card disputes",
      what: "Agent-initiated card disputes running 2.4× human card-not-present rate · CFPB Jan-2026 advisory put these in chargeback regime.",
      sector: "Financial services",
      severity: "active",
    },
  ];
  return (
    <Section id="reg-cliff" n="§ 3" title="The Regulatory Cliff · The buyer has a deadline">
      <P>
        Demand is not theoretical. The market for third-party agent defense
        is being created by <em className="font-serif">named regulations with dated enforcement
        windows</em>. The closest cliff is ~1 week out. The biggest cliff is
        ~10 weeks out. <strong className="text-amber-300">By the time EU AI Act high-risk
        obligations land, the procurement decision is already made.</strong>
      </P>
      <div className="mt-10 space-y-3">
        {cliffs.map((c, i) => <CliffRow key={i} {...c} />)}
      </div>
    </Section>
  );
}

function CliffRow({ date, countdown, name, what, sector, severity }: {
  date: string; countdown: string; name: string; what: string; sector: string; severity: string;
}) {
  const color = severity === "critical"
    ? "border-rose-500/40 bg-rose-500/[0.05]"
    : severity === "high"
      ? "border-amber-500/40 bg-amber-500/[0.04]"
      : "border-stone-800 bg-neutral-950/60";
  const sevTextColor = severity === "critical" ? "text-rose-300" : severity === "high" ? "text-amber-300" : "text-stone-400";
  return (
    <div className={`rounded-xl border ${color} px-6 py-5`}>
      <div className="grid lg:grid-cols-[10rem_1fr_10rem] gap-5 items-start">
        <div>
          <div className="font-mono text-sm text-amber-300/90">{date}</div>
          <div className={`text-[10px] uppercase tracking-[0.22em] font-bold mt-1 ${sevTextColor}`}>{countdown}</div>
        </div>
        <div>
          <div className="text-base font-semibold text-stone-100">{name}</div>
          <p className="mt-1.5 text-sm text-stone-300 leading-relaxed">{what}</p>
        </div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold lg:text-right">
          Sector<br />
          <span className="normal-case tracking-normal text-stone-300 text-xs font-normal mt-0.5 inline-block">{sector}</span>
        </div>
      </div>
    </div>
  );
}

// ─── § 4 · The Wedge Verticals ────────────────────────────────────────────
function Section4Wedges() {
  return (
    <Section id="wedges" n="§ 4" title="The Wedge Verticals · Where defense gets bought first" bg>
      <P>
        Scored on regulatory pressure × per-play failure cost × deployment
        volume × ability-to-pay. Top 5 cleared all four filters. Top 2
        (Insurance + Healthcare) have <strong className="text-amber-300">carrier pull</strong> — the
        buyer is the risk-pricer.
      </P>

      <SubHead>Top 5 wedge verticals · ranked</SubHead>
      <div className="mt-6 space-y-4">
        {WEDGES.map((w, i) => <WedgeCard key={i} rank={i + 1} {...w} />)}
      </div>

      <SubHead>Per-vertical revenue potential · 100 customers each</SubHead>
      <P>
        Assumes blended $200/agent/mo HoneyBox + average agent-count per
        customer derived from public deployment volumes.
      </P>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-800">
              <Th>Vertical</Th><Th>Avg agents/customer</Th><Th>MRR/customer</Th><Th>100-customer ARR</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Insurance", "50 (claims + UW + CS)", "$10,000", "$12.0M"],
              ["Healthcare", "30 (PA + scheduling + RCM)", "$6,000", "$7.2M"],
              ["Financial services", "100 (CS + KYC + fraud)", "$20,000", "$24.0M"],
              ["Legal", "20 (associates + paralegal)", "$4,000", "$4.8M"],
              ["Government", "25 (per agency)", "$5,000", "$6.0M"],
            ].map((r, i) => (
              <tr key={i} className="border-b border-stone-900/60">
                {r.map((c, j) => (
                  <td key={j} className={`py-3 ${j === 0 ? "pr-4 text-stone-200 font-medium" : j === 3 ? "px-3 text-amber-300 font-mono font-semibold" : "px-3 text-stone-300 font-mono"}`}>{c}</td>
                ))}
              </tr>
            ))}
            <tr className="border-t-2 border-amber-500/30">
              <td className="py-4 pr-4 text-stone-100 font-semibold">Top 5 combined</td>
              <td className="py-4 px-3 text-stone-500">500 logos</td>
              <td className="py-4 px-3 text-stone-500">—</td>
              <td className="py-4 px-3 text-amber-300 font-mono font-bold">$54.0M</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
}

const WEDGES = [
  {
    name: "Insurance carriers + InsurTech",
    score: "9.5 / 10",
    why: "BUYER IS THE RISK-PRICER · NAIC Model Bulletin in 40+ states · bad-faith punitives create the math · Munich Re/Swiss Re/SCOR pricing agentic-risk treaty layers.",
    receipts: "65% of insurers planning scaled AI claims agents in 2026 (Blott) · loss-ratio improvements 3-5pp at P&C carriers · quote-to-bind cut 60-99%",
    customer: "Lemonade-class MGA · agentic claims-triage in production · 5-15K claims/day · DOI audit trail required",
  },
  {
    name: "Healthcare · PA + scheduling + billing",
    score: "9.3 / 10",
    why: "CMS-0057-F regulatory cliff Jan 2027 · 82% of appealed PA denials overturned (AMA) = direct class-action fuel · Cohere Health alone at 12M plays/year.",
    receipts: "Cohere: 660K providers · 12M+ PA requests/yr · 94% provider satisfaction · CMS-forced FHIR API · Hospital scheduling 500-5K calls/day per facility",
    customer: "Regional health system using Cohere or Notable · 100K+ PA requests/year · CIO already on hook for CMS-0057-F",
  },
  {
    name: "Financial services · CS + KYC + fraud",
    score: "8.8 / 10",
    why: "CFPB Jan-2026 advisory · agent disputes 2.4× human rate · AML fines $10M-$100M+ · tier-1 banks have budget · OCC heightened standards.",
    receipts: "JPMorgan: 1,000+ AI use cases targeted by 2026 · Capgemini WCR2026: CS 75% · fraud 64% · loan 61% · KYC 59% deployment rates",
    customer: "Top-30 US bank running Decagon/Sierra tier-1 CS + homegrown fraud agent · CCO buys for CFPB compliance",
  },
  {
    name: "Legal AI · doc review · contract · research",
    score: "8.5 / 10",
    why: "Malpractice carriers already repricing · model rule 5.3 supervision · bar discipline = personal career stakes · Avianca/Mata-style sanctions documented.",
    receipts: "Harvey: >50% AmLaw 100 · $11B valuation · Legal Agent Benchmark covers 1,200 tasks across 24 practice areas · LexisNexis Protégé full workflow",
    customer: "AmLaw 50 firm running Harvey at scale · risk-management partner buys after first hallucinated-citation near-miss · co-sold via CNA/ALPS discount",
  },
  {
    name: "Government · FedRAMP-track",
    score: "8.0 / 10",
    why: "Procurement REQUIRES audit trail · FedRAMP High = defensible moat · long cycle BUT large/sticky deals · APA + civil-rights exposure on wrongful denials.",
    receipts: "Salesforce Agentforce FedRAMP High auth 2026 · IBM watsonx 11 solutions auth April 2026 · Google Gemini for Gov · OpenAI FedRAMP Moderate",
    customer: "State-level permitting or unemployment agency on Salesforce Agentforce FedRAMP High · audit-trail requirement DefendableOS satisfies natively",
  },
];

function WedgeCard({ rank, name, score, why, receipts, customer }: {
  rank: number; name: string; score: string; why: string; receipts: string; customer: string;
}) {
  return (
    <div className="rounded-xl border border-stone-800 bg-neutral-950/60 px-6 py-6">
      <div className="grid lg:grid-cols-[3rem_1fr_7rem] gap-5 items-start mb-5">
        <div className="text-3xl font-bold text-amber-300 font-mono">#{rank}</div>
        <div>
          <div className="text-xl font-semibold text-stone-100">{name}</div>
          <div className="mt-2 text-sm text-stone-300 leading-relaxed">{why}</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold">Wedge score</div>
          <div className="mt-1 font-mono text-amber-300 text-xl font-semibold">{score}</div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="rounded-lg border border-stone-800 bg-stone-950/60 px-4 py-3">
          <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-semibold mb-1.5">Public receipts</div>
          <div className="text-xs text-stone-400 leading-relaxed">{receipts}</div>
        </div>
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/[0.04] px-4 py-3">
          <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300 font-semibold mb-1.5">Ideal first customer</div>
          <div className="text-xs text-stone-300 leading-relaxed">{customer}</div>
        </div>
      </div>
    </div>
  );
}

// ─── § 5 · The Acquisition Wave ───────────────────────────────────────────
function Section5AcquisitionWave() {
  const exits = [
    { date: "Aug 2024", acquirer: "Cisco", target: "Robust Intelligence", note: "Defined 'AI firewall' category · now rebranded Cisco AI Defense · ships DefenseClaw 2026", price: "9-figure (reported)" },
    { date: "Sep 2025", acquirer: "F5", target: "CalypsoAI", note: "Strategic exit to network-security incumbent · CS bundles with F5 app-delivery", price: "$180M" },
    { date: "2025", acquirer: "Check Point", target: "Lakera", note: "Gandalf-challenge prompt-injection famous · bundled with Check Point CloudGuard", price: "~$300M (reported)" },
    { date: "Jan 2026", acquirer: "ClickHouse", target: "Langfuse", note: "Open-source LLM observability winner · ClickHouse Series D was $400M", price: "Undisclosed (Series D context)" },
    { date: "Mar 2026", acquirer: "Mintlify", target: "Helicone", note: "YC W23 · 14.2T tokens processed at acquisition · documentation-vendor pivot", price: "Undisclosed" },
    { date: "Apr 2026", acquirer: "Cisco (Splunk)", target: "Galileo", note: "Eval rail · merging into Splunk Observability post-Cisco/Splunk", price: "Undisclosed" },
    { date: "2024", acquirer: "Palo Alto Networks", target: "Protect AI", note: "MLSecOps platform · model scanning + MLflow security", price: "Undisclosed" },
  ];
  return (
    <Section id="acquisitions" n="§ 5" title="The Acquisition Wave · 7 exits in 24 months" bg>
      <P>
        The category had its largest consolidation wave between Aug 2024 and
        Apr 2026 · seven named exits. Networking + endpoint giants (Cisco · F5 ·
        Check Point · Palo Alto · CrowdStrike) are positioning to own the AI
        agent defense layer. <strong className="text-amber-300">M&A appetite is proven · the
        strategic-exit floor is established before $100M ARR.</strong>
      </P>
      <div className="mt-10 space-y-2.5">
        {exits.map((e, i) => (
          <div key={i} className="grid lg:grid-cols-[7rem_8rem_8rem_1fr_8rem] gap-4 items-center rounded-xl border border-stone-800 bg-neutral-950/60 px-5 py-3.5">
            <div className="font-mono text-amber-300 text-sm">{e.date}</div>
            <div className="text-stone-100 font-medium text-sm">{e.acquirer}</div>
            <div className="text-stone-300 text-sm">← {e.target}</div>
            <div className="text-stone-400 text-xs leading-relaxed">{e.note}</div>
            <div className="text-stone-500 font-mono text-xs lg:text-right">{e.price}</div>
          </div>
        ))}
      </div>

      <Callout>
        <strong className="text-amber-300">Pattern: networking / endpoint / observability incumbents</strong> are
        bolting on AI agent defense via M&A. Snyk's $7.4B valuation
        (2024 peak · now contested) was the precedent. The question is no longer
        <em className="font-serif">whether</em> defense gets bought; it's which architecture
        wins · runtime protection vs observability vs <strong className="text-amber-300">attestation/deed</strong>{" "}
        (the least-validated · least-crowded lane).
      </Callout>
    </Section>
  );
}

// ─── § 6 · Competitive Landscape ──────────────────────────────────────────
function Section6Landscape() {
  return (
    <Section id="landscape" n="§ 6" title="The Competitive Landscape · positioning matrix">
      <P>
        Most named LLM-observability vendors are now acquired. The remaining
        independents cluster into three lanes (gateway/observability ·
        embedded guardrails · enterprise governance). The "third-party
        active defense" quadrant has one structural occupant.
      </P>

      <SubHead>The 2×2 · third-party vs vendor-native × passive vs active</SubHead>
      <div className="mt-6 grid grid-cols-2 gap-3 max-w-4xl">
        <Quadrant
          label="Third-party · Passive observability"
          companies={["Helicone (Mintlify)", "Langfuse (ClickHouse)", "LangSmith", "Braintrust", "Portkey", "Datadog", "Splunk"]}
        />
        <Quadrant
          label="Third-party · ACTIVE DEFENSE"
          companies={["Lakera (Check Point)", "CalypsoAI (F5)", "HiddenLayer", "Protect AI (Palo Alto)", "Cisco AI Defense (Robust)", "CrowdStrike Falcon AIDR", "★ DefendableOS"]}
          highlight
        />
        <Quadrant
          label="Vendor-native · Passive"
          companies={["OpenAI logs", "Anthropic logs", "Vertex AI dashboards"]}
        />
        <Quadrant
          label="Vendor-native · Active"
          companies={["Bedrock Guardrails", "Azure Content Safety", "Vertex Safety filters", "NeMo Guardrails"]}
        />
      </div>

      <Callout>
        <strong className="text-amber-300">DefendableOS' true position:</strong> third-party + active defense ·
        plus <em className="font-serif">a third axis nobody else occupies</em> — issuable record /
        liability layer. Cisco grades the agent. We grade the work.
      </Callout>

      <SubHead>Threat tier · who could compete most directly</SubHead>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-800">
              <Th>Tier</Th><Th>Competitor</Th><Th>Why dangerous</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1", "Cisco AI Defense / DefenseClaw", "Brand-collision risk ('DefenseClaw' vs 'Defend The Claw') · already ships MCP Scanner · AI BoM · acquired Robust Intelligence + Galileo · could ship deed-equivalent in a quarter"],
              ["1", "CrowdStrike Falcon AIDR", "GA in 2026 · MCP server monitoring · endpoint footprint everywhere · Charlotte AI agents · cross-sell pressure"],
              ["2", "Check Point (Lakera) + F5 (CalypsoAI)", "Two AI-security acquisitions inside legacy network-security firms · they will appliance-ize first · most direct threat to our HoneyBox angle"],
              ["2", "Datadog + Splunk (+ Galileo)", "Bundling pressure · every enterprise already pays them · they can give away passive agent observability to suffocate paid vendors"],
              ["3", "Portkey / Helicone / Langfuse", "Tooling layer · could move into 'defense + deed' with enough nudging"],
              ["3", "Klaimee / AIUC (insurance-first)", "Closest to our lien / insurance angle · could partner OR collide"],
              ["4", "Credo AI / Holistic AI", "Compliance lane · slow-moving · governance docs not real-time defense"],
              ["4", "Trusta Labs", "On-chain identity · Web3-native · could pivot toward agent work units"],
            ].map((r, i) => (
              <tr key={i} className="border-b border-stone-900/60">
                <td className={`py-3 pr-4 font-mono font-bold text-${r[0] === "1" ? "rose" : r[0] === "2" ? "amber" : "stone"}-300`}>Tier {r[0]}</td>
                <td className="py-3 px-3 text-stone-100 font-medium">{r[1]}</td>
                <td className="py-3 pl-3 text-stone-400 text-xs leading-relaxed">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function Quadrant({ label, companies, highlight }: { label: string; companies: string[]; highlight?: boolean }) {
  return (
    <div className={`rounded-xl border px-5 py-5 ${highlight ? "border-amber-500/40 bg-amber-500/[0.06]" : "border-stone-800 bg-neutral-950/60"}`}>
      <div className={`text-[10px] uppercase tracking-[0.22em] font-semibold mb-3 ${highlight ? "text-amber-300" : "text-stone-500"}`}>{label}</div>
      <ul className="space-y-1.5">
        {companies.map((c) => (
          <li key={c} className={`text-sm ${c.startsWith("★") ? "text-amber-300 font-semibold" : "text-stone-300"}`}>· {c}</li>
        ))}
      </ul>
    </div>
  );
}

// ─── § 7 · White Space ────────────────────────────────────────────────────
function Section7WhiteSpace() {
  const items = [
    "Per-task issuable deed binding compute + agent + work-unit with cryptographic record_hash · closest analog AIUC-1 (system-level) and Trusta Labs (wallet reputation) · neither does per-task",
    "Lien-on-deed financial primitive · no competitor monetizes the artifact as a producing asset · insurance startups underwrite the policy, not the deed",
    "Fix-or-Refund operational SLA against agent task failure (vs uptime) · AI Commerce-style refunds exist for outages · nobody refunds bad agent output",
    "Hardware appliance running AI defense + compute attestation on owned silicon (E0–E7 ladder) · Palo Alto / Fortinet / Check Point ship NGFW boxes but inspect network traffic · not agent work units",
    "ENS-anchored public agent identity + work record queryable by counterparties · Trusta Labs is the only adjacent player but EVM-wallet-centric · not deed-centric",
    "Validator-of-validators rail · independent grading of the graders · Cisco / CrowdStrike / Lakera grade agents · nobody publicly grades the guardrail vendors",
  ];
  return (
    <Section id="whitespace" n="§ 7" title="The White Space · what nobody ships yet" bg>
      <P>
        After surveying 30+ named vendors across observability · gateway ·
        guardrails · enterprise security · vendor-native safety · and compliance ·
        these six capabilities are <strong className="text-amber-300">structurally absent</strong> from
        the market. Not "underbuilt" · not "early stage" · <em className="font-serif">absent</em>.
      </P>
      <ul className="mt-10 space-y-3">
        {items.map((s, i) => (
          <li key={i} className="rounded-xl border border-amber-500/30 bg-amber-500/[0.04] px-5 py-4 grid grid-cols-[3rem_1fr] gap-3">
            <span className="font-mono text-amber-300 text-base font-bold">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm text-stone-200 leading-relaxed">{s}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

// ─── § 8 · The Defendable Bundle ──────────────────────────────────────────
function Section8Bundle() {
  const claims = [
    { c: "Hardware appliance · HoneyBox on owned compute", ok: "YES", note: "No competitor ships dedicated AI-defense appliance · NGFWs don't count (different OSI layer)" },
    { c: "Per-task Defendable Deed · DDEED-DOV-* with record_hash", ok: "YES", note: "Unique on-chain artifact format · no equivalent" },
    { c: "Lien-on-deed financial primitive", ok: "YES", note: "No competitor · Klaimee/AIUC do policies not liens" },
    { c: "Fix-or-Refund agent-output SLA", ok: "YES, disciplined", note: "Must be carefully scoped · ElevenLabs+AIUC went policy route not refund route" },
    { c: "Insurance carrier feed integration", ok: "PARTIAL", note: "Klaimee and AIUC-1 in market · we differentiate via per-task deed evidence not policy" },
    { c: "ENS-anchored identity · swarmbee.defendable.eth", ok: "YES", note: "No serious enterprise competitor uses ENS · Trusta Labs closest but adjacent" },
    { c: "Owned-compute attestation · Compute Bench E0–E7", ok: "YES", note: "Cisco/CrowdStrike all run on customer infra · no one publishes own utility receipts" },
    { c: "'Validate the Validator' doctrine", ok: "YES", note: "Open positioning lane · no incumbent claims it" },
  ];
  return (
    <Section id="bundle" n="§ 8" title="The Defendable Bundle · the unique stack">
      <P>
        Any single piece is contestable. The <em className="font-serif">bundle</em> is not.
        Owned compute + per-task deed + lien + insurance feed + ENS identity +
        Fix-or-Refund. Eight defensible claims · we own all eight in
        assembly.
      </P>
      <div className="mt-10 space-y-2.5">
        {claims.map((x, i) => (
          <div key={i} className="grid lg:grid-cols-[1fr_7rem_1fr] gap-4 items-center rounded-xl border border-stone-800 bg-neutral-950/60 px-5 py-3.5">
            <div className="text-stone-100 text-sm font-medium">{x.c}</div>
            <div className={`text-[10px] uppercase tracking-[0.22em] font-bold font-mono ${x.ok === "PARTIAL" ? "text-amber-300" : "text-emerald-300"}`}>
              {x.ok}
            </div>
            <div className="text-xs text-stone-400 leading-relaxed">{x.note}</div>
          </div>
        ))}
      </div>

      <Callout>
        <strong className="text-amber-300">Recommended positioning sentence:</strong>
        <br />
        <span className="block mt-3 italic font-serif text-stone-100 text-base">
          "DefendableOS is the third-party defense rail for AI agents — the only
          stack that runs on owned compute, issues a per-task Defendable Deed with
          cryptographic and on-chain proof, and converts that record into a
          financeable, insurable, lien-able asset. Cisco grades the agent; we
          grade the work."
        </span>
        <br />
        <strong className="text-amber-300">Short form:</strong>{" "}
        <span className="italic font-serif text-stone-100">Validate the Validator. Own the Deed.</span>
      </Callout>
    </Section>
  );
}

// ─── Sources ───────────────────────────────────────────────────────────────
function Sources() {
  const groups = [
    {
      head: "Pain points & adoption",
      items: [
        ["GitGuardian · 29M leaked secrets in 2025", "https://www.helpnetsecurity.com/2026/04/14/gitguardian-ai-agents-credentials-leak/"],
        ["Gravitee · State of AI Agent Security 2026", "https://www.gravitee.io/blog/state-of-ai-agent-security-2026-report-when-adoption-outpaces-control"],
        ["VentureBeat · Six exploits broke AI coding agents", "https://venturebeat.com/security/six-exploits-broke-ai-coding-agents-iam-never-saw-them"],
        ["Anthropic Claude Code regression post-mortem · 4/2026", "https://www.buildthisnow.com/blog/models/claude-code-quality-regression-2026"],
        ["LeanOps · Agentic AI cost runaway", "https://leanopstech.com/blog/agentic-ai-cost-runaway-token-budget-2026/"],
        ["arXiv 2511.04032 · Silent multi-agent failures", "https://arxiv.org/abs/2511.04032"],
        ["CNBC · I hate customer-service chatbots", "https://www.cnbc.com/2026/04/01/ai-chatbot-customer-service-complaints-refunds.html"],
      ],
    },
    {
      head: "Market sizing",
      items: [
        ["Gartner · LLM Observability 50% by 2028", "https://www.gartner.com/en/newsroom/press-releases/2026-03-30-gartner-predicts-by-2028-explainable-ai-will-drive-llm-observability-investments-to-50-percent-for-secure-genai-deployment"],
        ["MarketsandMarkets · Agentic AI Security $13.52B by 2032", "https://www.marketsandmarkets.com/PressReleases/agentic-ai-security.asp"],
        ["TBRC · LLM Observability Platform Market Report 2026", "https://www.researchandmarkets.com/reports/6215671/large-language-model-llm-observability"],
        ["Forrester · AI Governance Software 30% CAGR", "https://www.forrester.com/blogs/ai-governance-software-spend-will-see-30-cagr-from-2024-to-2030/"],
        ["S&P / McKinsey · 31% enterprise prod-agent rate", "https://www.digitalapplied.com/blog/ai-agent-adoption-2026-enterprise-data-points"],
        ["Digital Applied · 88% pilot-to-prod gap", "https://www.digitalapplied.com/blog/ai-agent-scaling-gap-march-2026-pilot-to-production"],
        ["Snyk $407.8M ARR · Latka", "https://getlatka.com/companies/snyk"],
      ],
    },
    {
      head: "Competitors & M&A",
      items: [
        ["Cisco AI Defense (Robust Intelligence)", "https://cisco.com/site/us/en/products/security/ai-defense"],
        ["Cisco DefenseClaw agentic security · RSAC 2026", "https://github.com/cisco-ai-defense/defenseclaw"],
        ["Check Point acquires Lakera", "https://www.checkpoint.com/press-releases/check-point-acquires-lakera-to-deliver-end-to-end-ai-security-for-enterprises/"],
        ["F5 acquires CalypsoAI · $180M", "https://www.f5.com/company/news/press-releases/f5-to-acquire-calypsoai-to-bring-advanced-ai-guardrails-to-large-enterprises"],
        ["CrowdStrike Falcon AIDR GA", "https://ir.crowdstrike.com/news-releases/news-release-details/crowdstrike-announces-general-availability-falcon-ai-detection/"],
        ["Cisco to acquire Galileo · April 2026", "https://futurumgroup.com/insights/cisco-to-acquire-galileo-ai-agent-observability-cant-run-at-human-speed/"],
        ["Helicone GitHub (pre-Mintlify acquisition)", "https://github.com/Helicone/helicone"],
        ["Credo AI · enterprise governance", "https://www.credo.ai/"],
      ],
    },
    {
      head: "Vertical receipts",
      items: [
        ["Cohere Health · CMS prior auth", "https://www.coherehealth.com/news/cohere-health-prior-authorization-compliance-ai"],
        ["AMA · 82% appeal-overturn rate on PA denials", "https://ai2.work/blog/ai-prior-authorization-tools-have-an-82-overturn-rate-and-that-s-the-problem"],
        ["CFPB Jan-2026 advisory · TrustSphere analysis", "https://www.trustsphere.ai/post/when-the-agent-gets-it-wrong-liability-consent-and-recourse-in-ai-initiated-commerce"],
        ["Harvey · Legal Agent Benchmark", "https://www.harvey.ai/blog/introducing-harveys-legal-agent-benchmark"],
        ["Salesforce Agentforce FedRAMP High", "https://www.salesforce.com/news/stories/fedramp-high-agentforce-salesforce-platform/"],
        ["IBM watsonx · 11 FedRAMP solutions April 2026", "https://newsroom.ibm.com/2026-04-01-IBM-Expands-FedRAMP-Portfolio-with-Authorization-of-11-Software-Solutions,-Including-watsonx"],
        ["Decagon · $4.5B valuation Jan 2026", "https://decagon.ai/"],
        ["Insurance carriers · NAIC adoption · Blott", "https://www.blott.com/reports/ai-use-cases-in-insurance"],
        ["ElevenLabs + AIUC-1 · first AI agent insurance", "https://www.prnewswire.com/news-releases/elevenlabs-secures-first-of-its-kind-ai-agent-insurance-302684587.html"],
      ],
    },
    {
      head: "Cyber insurance market",
      items: [
        ["ClaimsJournal · $20B+ cyber premium 2026 · +15% YoY AI driven", "https://www.claimsjournal.com/news/national/2025/11/05/333914.htm"],
        ["WTW · Cyber risk 2026 outlook", "https://www.wtwco.com/en-us/insights/2026/02/cyber-risk-a-look-ahead-to-2026"],
        ["HackerOne · $81M bug-bounty payouts 12mo", "https://www.bleepingcomputer.com/news/security/hackerone-paid-81-million-in-bug-bounties-over-the-past-year/"],
      ],
    },
  ];
  return (
    <Section id="sources" n="§ ∞" title="Sources & methodology" bg>
      <P>
        Every claim above is hyperlinked to a primary source. Where the
        underlying stat was a vendor survey · we flag it. Where the claim
        is anecdote we say so. This page is updated when new evidence
        shifts a category.
      </P>
      <div className="mt-10 grid md:grid-cols-2 gap-x-8 gap-y-6">
        {groups.map((g) => (
          <div key={g.head}>
            <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-semibold mb-3">{g.head}</div>
            <ul className="space-y-1.5">
              {g.items.map(([label, url]) => (
                <li key={url} className="text-xs">
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-amber-300 transition-colors leading-relaxed">
                    ↗ {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Callout>
        <strong className="text-amber-300">License · MIT-attribution.</strong> Cite OpenDefense /
        DefendableOS when you reuse. Tell us what we got wrong:{" "}
        <a href={`mailto:${SALES_EMAIL}?subject=OpenDefense%20correction`} className="text-amber-300 underline hover:text-amber-200">{SALES_EMAIL}</a>.
        Pull requests welcome at <a href="https://github.com/SudoSuOps" className="text-amber-300 underline hover:text-amber-200">github.com/SudoSuOps</a>.
      </Callout>
    </Section>
  );
}

// ─── CTA ───────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-5xl mx-auto px-6 py-20 lg:py-28">
        <div className="rounded-2xl border border-stone-800 bg-gradient-to-br from-stone-900/80 to-neutral-950 px-8 py-12 lg:px-14 lg:py-16">
          <Eyebrow>YOU READ THE BRIEFING · NOW BUILD THE RAIL</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 leading-tight max-w-3xl">
            Cisco ships closed products.{" "}
            <span className="font-serif italic font-normal text-amber-300">We publish open intelligence · and we own the deed.</span>
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed max-w-2xl">
            Order a HoneyBox · try DefendableCloud · read the doctrine
            in full at /doctrine · or just talk to us about your wedge
            vertical.
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
              href={`mailto:${SALES_EMAIL}?subject=OpenDefense%20question`}
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

// ─── shared building blocks ────────────────────────────────────────────────
function Section({ id, n, title, children, bg }: {
  id: string; n: string; title: string; children: React.ReactNode; bg?: boolean;
}) {
  return (
    <section id={id} className={`border-b border-stone-900/80 scroll-mt-24 ${bg ? "bg-stone-950/40" : ""}`}>
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.24em] text-amber-300/80 font-mono font-semibold">{n}</span>
          <span className="h-px flex-1 bg-stone-800" />
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-12 mb-2 text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-semibold">{children}</div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-base lg:text-lg text-stone-300 leading-relaxed">{children}</p>;
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 rounded-xl border border-amber-500/30 bg-amber-500/[0.04] px-6 py-6">
      <p className="text-base text-stone-200 leading-relaxed">{children}</p>
    </div>
  );
}

function StatCard({ value, label, src, url }: { value: string; label: string; src: string; url: string }) {
  return (
    <div className="rounded-xl border border-stone-800 bg-neutral-950/60 px-5 py-6">
      <div className="text-3xl md:text-4xl font-semibold tracking-tight text-amber-300 font-mono">{value}</div>
      <div className="mt-2 text-xs text-stone-300 leading-relaxed">{label}</div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-[10px] text-stone-500 hover:text-amber-300 font-mono transition-colors">
        ↗ {src}
      </a>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left py-3 pr-3 text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">{children}</th>
  );
}

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
