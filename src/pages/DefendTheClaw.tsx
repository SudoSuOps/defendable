/**
 * /defend-the-claw — public-facing AI agent safety campaign
 *
 * Doctrine: NOT a chatbot · NOT autonomous · NOT a price guesser.
 * A disciplined evidence intake interface (scripted conversation · no LLM
 * calls in V1) that converts "I have an agent I want to deploy" into a
 * Claw Exposure Snapshot · then routes to the paid product ladder.
 *
 * Brand stack confirmed:
 *   - Platform · DefendableOS
 *   - Movement · Defend The Claw™
 *   - Product  · ClawCheck™
 *   - Benchmark · AgentGrade™
 *   - Record   · Defendable Agent Deed™
 *   - Package  · AI Work Unit Deed™
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

const SALES_EMAIL = "defense@defendableos.com";

type WorkerKind =
  | "Personal Assistant"
  | "Business Agent"
  | "Coding Agent"
  | "Sales / Support Agent"
  | "Local File Agent"
  | "Custom Workflow Agent";

type Deployment = "My Computer" | "Cloud Server" | "Edge Box" | "Android Device";

type AccessSurface =
  | "Files"
  | "Messages"
  | "Email"
  | "Calendar"
  | "Browser"
  | "Shell"
  | "APIs"
  | "Payments";

type ModelChoice =
  | "Kimi K2.6"
  | "OpenAI gpt-4o / o-series"
  | "Anthropic Claude"
  | "Local model (Qwen · Llama · etc)"
  | "Other / Custom";

const WORKER_KINDS: WorkerKind[] = [
  "Personal Assistant",
  "Business Agent",
  "Coding Agent",
  "Sales / Support Agent",
  "Local File Agent",
  "Custom Workflow Agent",
];

const DEPLOYMENTS: Deployment[] = ["My Computer", "Cloud Server", "Edge Box", "Android Device"];

const ACCESS_SURFACES: AccessSurface[] = [
  "Files",
  "Messages",
  "Email",
  "Calendar",
  "Browser",
  "Shell",
  "APIs",
  "Payments",
];

const MODELS: ModelChoice[] = [
  "Kimi K2.6",
  "OpenAI gpt-4o / o-series",
  "Anthropic Claude",
  "Local model (Qwen · Llama · etc)",
  "Other / Custom",
];

// ─── Risk tier computation · doctrine, not magic ──────────────────────────

type RiskTier = "LOW" | "MODERATE" | "ELEVATED" | "HIGH" | "INSUFFICIENT_DATA";

const HIGH_RISK_SURFACES: AccessSurface[] = ["Shell", "Payments"];
const COMMS_SURFACES: AccessSurface[] = ["Messages", "Email"];
const WRITE_SURFACES: AccessSurface[] = ["Files", "Shell", "Payments", "APIs"];

function computeRiskTier(
  worker: WorkerKind | null,
  deployment: Deployment | null,
  access: AccessSurface[],
): { tier: RiskTier; reasons: string[] } {
  if (!worker || !deployment || access.length === 0) {
    return {
      tier: "INSUFFICIENT_DATA",
      reasons: ["Complete all three selections (worker · deployment · access) to compute a tier"],
    };
  }
  const reasons: string[] = [];

  const hasHighRisk = access.some((a) => HIGH_RISK_SURFACES.includes(a));
  const hasComms = access.some((a) => COMMS_SURFACES.includes(a));
  const hasWrite = access.some((a) => WRITE_SURFACES.includes(a));
  const breadth = access.length;

  if (hasHighRisk && hasComms) {
    reasons.push("Shell or Payments + outbound messaging = autonomous-action exposure");
    return { tier: "HIGH", reasons };
  }
  if (hasHighRisk) {
    reasons.push("Shell or Payments access requires permission audit before deployment");
    reasons.push("Recommend sandbox + outbound action approval gating");
    return { tier: "ELEVATED", reasons };
  }
  if (hasComms && hasWrite) {
    reasons.push("Messaging + write access = elevated prompt-injection risk");
    return { tier: "ELEVATED", reasons };
  }
  if (breadth >= 5) {
    reasons.push(`${breadth} access surfaces selected · broad surface area increases attack vectors`);
    return { tier: "ELEVATED", reasons };
  }
  if (hasWrite || hasComms || breadth >= 3) {
    reasons.push("Write or messaging access requires permission map + injection test");
    return { tier: "MODERATE", reasons };
  }
  reasons.push("Read-only or read-mostly surfaces · low autonomous-action exposure");
  return { tier: "LOW", reasons };
}

function recommendedDeed(tier: RiskTier): {
  product: string;
  ladder: { name: string; what: string }[];
  required_review: string[];
} {
  const ladder = [
    { name: "ClawCheck Free Snapshot", what: "Permission intake · risk tier (this page)" },
    { name: "ClawCheck Pro Review", what: "Deployment audit · permission map · injection test · receipt package" },
    { name: "Defendable AgentGrade", what: "Real-work benchmark across capability · truth · safety · efficiency · reproducibility" },
    { name: "Defendable Agent Deed™", what: "Hashed inspection + performance record · validator-reviewed · ENS-anchored" },
    { name: "AI Work Unit Deed™", what: "Agent + compute + economic opinion bundled as one issuable producing-asset record" },
  ];
  if (tier === "HIGH") {
    return {
      product: "AI Work Unit Deed",
      ladder,
      required_review: [
        "Permission audit + injection test",
        "Sandbox the high-risk surfaces",
        "Human-in-loop approval gate on outbound actions",
        "Defendable AgentGrade benchmark",
        "Validator review before deed issues",
      ],
    };
  }
  if (tier === "ELEVATED") {
    return {
      product: "Defendable Agent Deed",
      ladder,
      required_review: [
        "Permission audit + injection test",
        "Defendable AgentGrade benchmark",
        "Validator review before deed issues",
      ],
    };
  }
  if (tier === "MODERATE") {
    return {
      product: "ClawCheck Pro Review",
      ladder,
      required_review: ["Permission map + injection test", "AgentGrade benchmark recommended"],
    };
  }
  if (tier === "LOW") {
    return {
      product: "ClawCheck Free Snapshot (this page)",
      ladder,
      required_review: ["Permission map · routine review · graduate to AgentGrade when commercial use begins"],
    };
  }
  return { product: "—", ladder, required_review: [] };
}

// ─── Page component ───────────────────────────────────────────────────────

export default function DefendTheClaw() {
  const [worker, setWorker] = useState<WorkerKind | null>(null);
  const [deployment, setDeployment] = useState<Deployment | null>(null);
  const [access, setAccess] = useState<AccessSurface[]>([]);
  const [model, setModel] = useState<ModelChoice | null>(null);
  const [memoryEnabled, setMemoryEnabled] = useState<boolean | null>(null);

  const risk = useMemo(() => computeRiskTier(worker, deployment, access), [worker, deployment, access]);
  const rec = useMemo(() => recommendedDeed(risk.tier), [risk.tier]);

  const stepDone = {
    worker: Boolean(worker),
    deployment: Boolean(deployment),
    access: access.length > 0,
    model: Boolean(model),
    memory: memoryEnabled !== null,
  };
  const completedSteps = Object.values(stepDone).filter(Boolean).length;
  const snapshotReady = completedSteps === 5;

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
            <span>
              <span className="text-amber-400">Defendable</span>OS
            </span>
            <span className="text-[9px] uppercase tracking-[0.22em] text-stone-500 font-semibold mt-0.5">
              Defend The Claw™
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link to="/" className="text-stone-400 hover:text-stone-200">
            Home
          </Link>
          <Link to="/agent-grade" className="text-stone-400 hover:text-stone-200">
            AgentGrade
          </Link>
          <Link to="/compute" className="text-stone-400 hover:text-stone-200">
            Compute
          </Link>
          <Link to="/reports" className="text-stone-400 hover:text-stone-200">
            Reports
          </Link>
          <a href={`mailto:${SALES_EMAIL}`} className="text-honey-300 font-semibold hover:text-honey-200">
            Contact
          </a>
        </nav>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-14 md:py-20 space-y-16">
        {/* Hero */}
        <section>
          <div className="text-[10px] tracking-[0.28em] uppercase text-honey-400 font-semibold mb-4">
            DefendableOS · Public Campaign
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-stone-100 leading-[1.02]">
            DEFEND THE <span className="text-honey-300">CLAW</span>™
          </h1>
          <p className="mt-5 text-2xl md:text-3xl text-honey-300 font-serif italic tracking-tight">
            Your AI assistant has hands now. Inspect it before you trust it.
          </p>
          <p className="mt-7 text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl">
            AI agents can read files · remember instructions · connect to messaging apps · use
            tools · interact with customers · and operate continuously across your computer,
            cloud server, or edge device. <strong>DefendableOS</strong> verifies what your
            agent can access · what it can do · what it costs · and whether its work can be
            trusted — then issues a deeded inspection report backed by receipts.
          </p>
          <p className="mt-4 text-stone-500 text-sm italic max-w-3xl">
            OpenClaw gives AI hands. Defendable makes sure those hands can be trusted.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#clawcheck"
              className="inline-flex items-center px-6 py-3 rounded border border-honey-300/50 bg-honey-300/15 text-honey-200 hover:bg-honey-300/25 hover:border-honey-300/80 transition-colors text-sm font-semibold tracking-tight"
            >
              Inspect My Agent →
            </a>
            <Link
              to="/agent-grade"
              className="inline-flex items-center px-6 py-3 rounded border border-stone-700 text-stone-300 hover:text-stone-100 hover:border-stone-500 transition-colors text-sm font-semibold"
            >
              Benchmark a Work Unit
            </Link>
          </div>
        </section>

        {/* The brand stack · honest labeling */}
        <section>
          <SectionHeader
            kicker="01 · The stack"
            title="One platform · one campaign · one product ladder"
            sub="Defend The Claw is the movement. ClawCheck is the front-door product. AgentGrade is the benchmark. The Defendable Agent Deed is what closes the diligence loop."
          />
          <div className="rounded-lg border border-stone-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900/60 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold w-[24%]">Layer</th>
                  <th className="text-left px-5 py-3 font-semibold w-[28%]">Name</th>
                  <th className="text-left px-5 py-3 font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Platform", "DefendableOS™", "Proof of Value · trust operating system"],
                  ["Movement", "Defend The Claw™", "Public-facing agent-safety campaign"],
                  ["Product", "ClawCheck™", "Deployment + permission inspection"],
                  ["Benchmark", "AgentGrade™", "Real-work performance + safety grade"],
                  ["Record", "Defendable Agent Deed™", "Hashed inspection + performance receipt"],
                  ["Package", "AI Work Unit Deed™", "Agent + compute + economics bundled as one asset"],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/20"}>
                    <td className="px-5 py-3 align-top text-stone-400 text-xs uppercase tracking-wider font-semibold">{row[0]}</td>
                    <td className="px-5 py-3 align-top text-honey-300 font-semibold">{row[1]}</td>
                    <td className="px-5 py-3 align-top text-stone-300">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ClawCheck intake · the chat */}
        <section id="clawcheck" className="scroll-mt-20">
          <SectionHeader
            kicker="02 · ClawCheck™ free intake"
            title="Tell Defendable about your agent · get a Claw Exposure Snapshot"
            sub="Five quick selections. No LLM calls. No autonomous action. Pure deterministic intake per the Defendable doctrine · this is the inspection desk, not a chatbot."
          />

          {/* Progress badges */}
          <div className="mb-8 flex flex-wrap gap-2">
            {["WORKER", "DEPLOYMENT", "ACCESS", "MODEL", "MEMORY"].map((label, i) => {
              const done = [stepDone.worker, stepDone.deployment, stepDone.access, stepDone.model, stepDone.memory][i];
              return (
                <span
                  key={label}
                  className={`inline-flex items-center px-3 py-1.5 rounded border text-[10px] tracking-[0.22em] font-semibold uppercase transition-colors ${
                    done
                      ? "border-honey-300/50 bg-honey-300/10 text-honey-300"
                      : "border-stone-700 bg-neutral-900/40 text-stone-500"
                  }`}
                >
                  {done ? "✓ " : ""}
                  {label}
                </span>
              );
            })}
          </div>

          {/* Step 1 · worker kind */}
          <Step n={1} title="What kind of AI worker are you deploying?">
            <PillGrid
              options={WORKER_KINDS}
              value={worker}
              onSelect={(v) => setWorker(v as WorkerKind)}
            />
          </Step>

          {/* Step 2 · deployment target */}
          <Step n={2} title="Where will it run?">
            <PillGrid
              options={DEPLOYMENTS}
              value={deployment}
              onSelect={(v) => setDeployment(v as Deployment)}
            />
          </Step>

          {/* Step 3 · access surfaces (multi) */}
          <Step n={3} title="What can it touch? (select all that apply)">
            <div className="flex flex-wrap gap-2">
              {ACCESS_SURFACES.map((a) => {
                const selected = access.includes(a);
                return (
                  <button
                    key={a}
                    onClick={() =>
                      setAccess((prev) =>
                        prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a],
                      )
                    }
                    className={`px-4 py-2 rounded border text-sm font-semibold tracking-tight transition-colors ${
                      selected
                        ? "border-honey-300/60 bg-honey-300/15 text-honey-200"
                        : "border-stone-700 bg-neutral-900/40 text-stone-300 hover:border-stone-500 hover:text-stone-100"
                    }`}
                  >
                    {selected ? "✓ " : ""}
                    {a}
                  </button>
                );
              })}
            </div>
          </Step>

          {/* Step 4 · model */}
          <Step n={4} title="What model powers it?">
            <PillGrid options={MODELS} value={model} onSelect={(v) => setModel(v as ModelChoice)} />
          </Step>

          {/* Step 5 · memory */}
          <Step n={5} title="Does it carry persistent memory across sessions?">
            <div className="flex flex-wrap gap-2">
              {[
                ["Yes · persistent memory enabled", true],
                ["No · ephemeral / stateless", false],
              ].map(([label, val]) => {
                const selected = memoryEnabled === val;
                return (
                  <button
                    key={String(val)}
                    onClick={() => setMemoryEnabled(val as boolean)}
                    className={`px-4 py-2 rounded border text-sm font-semibold tracking-tight transition-colors ${
                      selected
                        ? "border-honey-300/60 bg-honey-300/15 text-honey-200"
                        : "border-stone-700 bg-neutral-900/40 text-stone-300 hover:border-stone-500 hover:text-stone-100"
                    }`}
                  >
                    {selected ? "✓ " : ""}
                    {label as string}
                  </button>
                );
              })}
            </div>
          </Step>

          {/* Snapshot output */}
          <div className="mt-12">
            <Snapshot
              ready={snapshotReady}
              worker={worker}
              deployment={deployment}
              access={access}
              model={model}
              memoryEnabled={memoryEnabled}
              risk={risk}
              rec={rec}
            />
          </div>
        </section>

        {/* Live Intake Agent · talks to Kimi K2.6 via the platform API */}
        <section id="live-intake" className="scroll-mt-20">
          <SectionHeader
            kicker="03 · LIVE Defendable Intake Agent"
            title="Talk to it · the Claw Swarm is on prod"
            sub={`The Intake Agent is live on api.defendableos.com via Kimi K2.6 with a typed record_intake_findings tool. Type how you'd describe your agent in plain English · the Agent extracts the 5 dimensions · platform code computes Risk Tier. NEVER calls external systems · NEVER accesses your files · refuses anything outside Intake scope.`}
          />
          <LiveIntakeChat />
        </section>

        {/* What Defendable inspects */}
        <Section
          kicker="04 · What Defendable inspects"
          title="Six layers of evidence · before the agent gets the keys"
          sub="Every layer becomes part of the Defendable Agent Deed. Missing layers are labeled openly. Validators challenge before anything is issued."
        >
          <div className="rounded-lg border border-stone-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900/60 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold w-[26%]">Inspection</th>
                  <th className="text-left px-5 py-3 font-semibold">Evidence captured</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Identity", "Model · runtime · deployment · skills · agent version · weights hash"],
                  ["Access", "Files · messaging · tools · APIs · secrets · scope per tool"],
                  ["Capability", "Real-work benchmark tasks across the agent's workflow lane"],
                  ["Safety", "Prompt-injection · overreach · leakage · permission discipline · escalation"],
                  ["Economics", "Runtime · tokens · compute · cost per task · quality per dollar"],
                  ["Proof", "Hashed receipts · manifest · deed package · ENS attestation"],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/20"}>
                    <td className="px-5 py-4 align-top text-honey-300 font-semibold">{row[0]}</td>
                    <td className="px-5 py-4 align-top text-stone-300 leading-snug">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Doctrine reminders · keeps it tight */}
        <Section
          kicker="05 · What this is NOT"
          title="Defendable will never autonomously act on your behalf"
          sub="The agent on this page is a disciplined evidence-intake interface. It collects your selections, computes a snapshot from documented rules, and shows you what would be required for a real Defendable inspection. It does not call APIs · move money · send messages · or write to your systems."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.03] p-6">
              <div className="text-[10px] uppercase tracking-[0.18em] text-emerald-400 font-semibold mb-3">
                This page does
              </div>
              <ul className="space-y-2 text-stone-300 text-sm leading-snug">
                <li>· Collect your agent's deployment shape</li>
                <li>· Compute a Risk Tier from documented rules</li>
                <li>· Surface the recommended Defendable product</li>
                <li>· Route you to the paid review ladder</li>
              </ul>
            </div>
            <div className="rounded-lg border border-stone-800 bg-neutral-900/30 p-6">
              <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-3">
                This page does NOT
              </div>
              <ul className="space-y-2 text-stone-300 text-sm leading-snug">
                <li>· Make any LLM call · zero AI inference on your inputs</li>
                <li>· Access your files · messaging · or any external system</li>
                <li>· Issue a deed · only Validator review can do that</li>
                <li>· Promise that any tier is "safe" in the abstract — tiers always name a lane</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Closing doctrine */}
        <section className="border-t border-stone-900/80 pt-12">
          <div className="text-[10px] tracking-[0.28em] uppercase text-stone-500 font-semibold mb-4 text-center">
            Defend The Claw · Closing
          </div>
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            {[
              "Deploying an AI agent is easy.",
              "Trusting one is expensive.",
              "Model. Memory. Skills. Permissions. Compute. Receipts.",
              "Before your agent touches your world,",
              "make its work defendable.",
            ].map((line) => (
              <p key={line} className="text-stone-300 text-base md:text-lg font-serif italic tracking-tight">
                {line}
              </p>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 px-6 py-8 border-t border-stone-900/80 mt-16">
        <div className="max-w-5xl mx-auto text-xs text-stone-500 leading-relaxed">
          © 2026 Swarm and Bee LLC · DBA Swarm & Bee AI · D-U-N-S 138652395.
          DefendableOS™ · Defend The Claw™ · ClawCheck™ · AgentGrade™ · Defendable Agent Deed™
          · AI Work Unit Deed™ are unregistered trademarks. The ClawCheck intake on this
          page is a disciplined evidence-collection interface · not an autonomous agent ·
          not a price guess · not a guarantee of safety in any deployment.
        </div>
      </footer>
    </div>
  );
}

// ─── components ────────────────────────────────────────────────────────────

function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub: string }) {
  return (
    <div className="max-w-3xl mb-8">
      <div className="text-[10px] tracking-[0.28em] uppercase text-honey-400 font-semibold mb-3">
        {kicker}
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold text-stone-100 tracking-tight leading-tight">
        {title}
      </h2>
      <p className="mt-3 text-stone-400 text-base leading-relaxed">{sub}</p>
    </div>
  );
}

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
      <SectionHeader kicker={kicker} title={title} sub={sub} />
      {children}
    </section>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 rounded-lg border border-stone-800 bg-neutral-900/30 p-5">
      <div className="flex items-start gap-3 mb-3">
        <span className="inline-flex w-7 h-7 rounded border border-honey-300/40 bg-honey-300/[0.06] items-center justify-center text-honey-300 text-sm font-mono shrink-0">
          {n}
        </span>
        <div className="text-stone-100 font-semibold text-base tracking-tight pt-1">{title}</div>
      </div>
      {children}
    </div>
  );
}

// ─── LIVE intake chat · talks to /api/v1/agent-swarm/clawcheck/intake ─────

const CLAW_API_BASE = "https://api.defendableos.com";

type AgentTurn = {
  role: "user" | "agent" | "system";
  content: string;
};

type IntakeResponse = {
  agent_message: string;
  findings: Record<string, unknown>;
  intake_complete: boolean;
  refusal_reason: string | null;
  snapshot: {
    captured: Record<string, unknown>;
    risk: { tier: string; reasons: string[]; access_breadth?: number };
    recommended: { product: string; required_review: string[] };
  } | null;
  judge_provider: { provider: string; model: string | null; configured: boolean };
  raw_status: string;
};

function LiveIntakeChat() {
  const [conversation, setConversation] = useState<AgentTurn[]>([
    {
      role: "agent",
      content:
        "I'm the Defendable Intake Agent · live on api.defendableos.com via Kimi K2.6. Tell me about the AI agent you're deploying · I'll collect the five ClawCheck dimensions and the platform computes your Risk Tier. Free-form natural language is fine.",
    },
  ]);
  const [input, setInput] = useState("");
  const [findings, setFindings] = useState<Record<string, unknown>>({});
  const [snapshot, setSnapshot] = useState<IntakeResponse["snapshot"]>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [provider, setProvider] = useState<IntakeResponse["judge_provider"] | null>(null);
  const snapshotRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll the Snapshot into view when it arrives · operators kept
  // missing it because the conversation log pushed it below the fold.
  useEffect(() => {
    if (snapshot && snapshotRef.current) {
      const t = setTimeout(() => {
        snapshotRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
      return () => clearTimeout(t);
    }
  }, [snapshot]);

  async function send() {
    const msg = input.trim();
    if (!msg || busy) return;
    setError(null);
    setBusy(true);
    setConversation((c) => [...c, { role: "user", content: msg }]);
    setInput("");

    try {
      const resp = await fetch(`${CLAW_API_BASE}/api/v1/agent-swarm/clawcheck/intake`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_message: msg, prior_findings: findings }),
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status} · ${await resp.text().catch(() => "")}`);
      const data: IntakeResponse = await resp.json();
      setFindings(data.findings || {});
      setProvider(data.judge_provider);
      const refusalLine = data.refusal_reason ? `\n\n[REFUSAL · ${data.refusal_reason}]` : "";
      setConversation((c) => [...c, { role: "agent", content: data.agent_message + refusalLine }]);
      // Render snapshot whenever the server returns one · do NOT double-gate
      // on intake_complete (Kimi sometimes returns a complete snapshot without
      // setting the flag · code-side completeness is what matters).
      if (data.snapshot) setSnapshot(data.snapshot);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      setError(msg);
      setConversation((c) => [
        ...c,
        {
          role: "system",
          content: `Intake call failed (${msg}). Falling back to the deterministic intake above.`,
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  function reset() {
    setConversation([
      {
        role: "agent",
        content: "Reset · tell me about the agent you're deploying.",
      },
    ]);
    setFindings({});
    setSnapshot(null);
    setError(null);
  }

  return (
    <div className="rounded-lg border-2 border-honey-300/30 bg-gradient-to-br from-honey-300/[0.04] to-transparent p-5 md:p-6">
      <div className="flex items-center justify-between mb-3 gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
          <span className="text-[10px] uppercase tracking-[0.22em] text-emerald-300 font-semibold">
            LIVE · {provider?.model || "kimi-k2.6"} via {provider?.provider || "kimi"}
          </span>
        </div>
        <button
          onClick={reset}
          className="text-xs text-stone-500 hover:text-stone-300 underline"
          type="button"
        >
          reset conversation
        </button>
      </div>

      {/* Conversation */}
      <div className="space-y-3 mb-4 max-h-[420px] overflow-y-auto pr-2 font-mono text-xs md:text-sm">
        {conversation.map((t, i) => (
          <div
            key={i}
            className={`rounded p-3 ${
              t.role === "user"
                ? "bg-neutral-900/60 border border-stone-800 text-stone-300"
                : t.role === "system"
                  ? "bg-red-500/10 border border-red-500/30 text-red-300"
                  : "bg-honey-300/10 border border-honey-300/30 text-stone-200"
            }`}
          >
            <div className="text-[10px] uppercase tracking-wider opacity-60 mb-1">
              {t.role === "user" ? "you" : t.role === "system" ? "system" : "intake agent"}
            </div>
            <div className="whitespace-pre-wrap leading-snug">{t.content}</div>
          </div>
        ))}
        {busy && (
          <div className="rounded p-3 bg-honey-300/5 border border-honey-300/20 text-honey-300/70 italic text-xs">
            Intake agent is thinking · Kimi K2.6 thinking mode can take 30-120s · please hold…
          </div>
        )}
      </div>

      {/* Input + send */}
      <div className="flex gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
              e.preventDefault();
              send();
            }
          }}
          rows={2}
          placeholder="Describe your agent in plain English · e.g., 'coding agent on my laptop · shell + files · Kimi K2.6 · memory enabled'"
          disabled={busy}
          className="flex-1 px-3 py-2 rounded border border-stone-700 bg-neutral-950 text-stone-100 placeholder:text-stone-600 text-sm font-mono focus:border-honey-300/50 focus:outline-none disabled:opacity-60 resize-none"
        />
        <button
          onClick={send}
          disabled={busy || !input.trim()}
          className="px-5 py-2 rounded border border-honey-300/40 bg-honey-300/15 text-honey-200 hover:bg-honey-300/25 hover:border-honey-300/70 transition-colors text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed self-stretch"
        >
          {busy ? "…" : "Send"}
        </button>
      </div>
      <div className="text-[10px] text-stone-500 mt-1">⌘+Enter / Ctrl+Enter to send · POST to api.defendableos.com/api/v1/agent-swarm/clawcheck/intake</div>

      {error && (
        <div className="mt-3 text-xs text-red-400 italic">
          Live endpoint unavailable · {error.slice(0, 200)} · use the deterministic intake above as fallback.
        </div>
      )}

      {/* Findings tracker */}
      {Object.keys(findings).length > 0 && (
        <div className="mt-5 rounded border border-stone-800 bg-neutral-950/60 p-3">
          <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-2">
            Findings captured this conversation
          </div>
          <pre className="text-xs text-stone-300 font-mono whitespace-pre overflow-x-auto">
{JSON.stringify(findings, null, 2)}
          </pre>
        </div>
      )}

      {/* Snapshot · auto-scrolled into view when it arrives */}
      {snapshot && (
        <div
          ref={snapshotRef}
          className="mt-5 rounded-lg border-2 border-honey-300/40 bg-honey-300/[0.06] p-4 shadow-lg shadow-honey-300/10"
        >
          <div className="text-[10px] uppercase tracking-[0.22em] text-honey-400 font-semibold mb-2">
            Claw Exposure Snapshot · computed by platform code
          </div>
          <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
            <div className="text-stone-100 font-semibold tracking-tight">
              {String(snapshot.captured.worker_kind || "")} · {String(snapshot.captured.deployment_target || "")}
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded border border-amber-400/50 bg-amber-400/10 text-amber-300 text-xs font-bold tracking-wider">
              RISK TIER · {snapshot.risk.tier}
            </span>
          </div>
          <div className="text-stone-300 text-xs space-y-1 mb-3">
            {snapshot.risk.reasons.map((r) => (
              <div key={r}>· {r}</div>
            ))}
          </div>
          <div className="text-stone-100 text-sm">
            <strong className="text-honey-300">Recommended:</strong> {snapshot.recommended.product}
          </div>
          {snapshot.recommended.required_review.length > 0 && (
            <ul className="mt-2 text-stone-400 text-xs space-y-0.5">
              {snapshot.recommended.required_review.map((r) => (
                <li key={r}>· {r}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

function PillGrid<T extends string>({
  options,
  value,
  onSelect,
}: {
  options: T[];
  value: T | null;
  onSelect: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const selected = value === opt;
        return (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`px-4 py-2 rounded border text-sm font-semibold tracking-tight transition-colors ${
              selected
                ? "border-honey-300/60 bg-honey-300/15 text-honey-200"
                : "border-stone-700 bg-neutral-900/40 text-stone-300 hover:border-stone-500 hover:text-stone-100"
            }`}
          >
            {selected ? "✓ " : ""}
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function Snapshot({
  ready,
  worker,
  deployment,
  access,
  model,
  memoryEnabled,
  risk,
  rec,
}: {
  ready: boolean;
  worker: WorkerKind | null;
  deployment: Deployment | null;
  access: AccessSurface[];
  model: ModelChoice | null;
  memoryEnabled: boolean | null;
  risk: { tier: RiskTier; reasons: string[] };
  rec: { product: string; ladder: { name: string; what: string }[]; required_review: string[] };
}) {
  const tierColor: Record<RiskTier, string> = {
    LOW: "border-emerald-500/50 bg-emerald-500/[0.06] text-emerald-300",
    MODERATE: "border-honey-300/40 bg-honey-300/[0.06] text-honey-300",
    ELEVATED: "border-amber-400/50 bg-amber-400/[0.07] text-amber-300",
    HIGH: "border-red-500/40 bg-red-500/[0.06] text-red-300",
    INSUFFICIENT_DATA: "border-stone-700 bg-neutral-900/40 text-stone-500",
  };

  return (
    <div className="rounded-lg border-2 border-honey-300/30 bg-gradient-to-br from-honey-300/[0.04] to-transparent p-6 md:p-8">
      <div className="text-[10px] tracking-[0.28em] uppercase text-honey-400 font-semibold mb-3">
        Claw Exposure Snapshot
      </div>
      {!ready ? (
        <div className="text-stone-400 text-sm italic">
          Complete all five selections to compute the snapshot.
        </div>
      ) : (
        <>
          <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
            <h3 className="text-stone-100 font-semibold text-xl tracking-tight">
              {worker} · {deployment}
            </h3>
            <span
              className={`inline-flex items-center px-4 py-2 rounded border text-sm font-bold tracking-wider ${tierColor[risk.tier]}`}
            >
              RISK TIER · {risk.tier}
            </span>
          </div>

          {/* Snapshot summary */}
          <div className="font-mono text-xs md:text-sm bg-neutral-950/60 rounded-lg p-5 border border-stone-800 mb-6 overflow-x-auto">
            <pre className="whitespace-pre text-stone-300">
{`AGENT_TYPE         ${worker}
DEPLOYMENT         ${deployment}
MODEL              ${model}
MEMORY             ${memoryEnabled ? "ENABLED" : "EPHEMERAL"}
ACCESS_SURFACES    ${access.join(" · ")}
RISK_TIER          ${risk.tier}
REQUIRED_REVIEW    ${rec.required_review.join("; ")}
RECOMMENDED_DEED   ${rec.product}`}
            </pre>
          </div>

          {/* Why this tier */}
          <div className="mb-6">
            <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-2">
              Why this tier
            </div>
            <ul className="space-y-1.5 text-stone-300 text-sm">
              {risk.reasons.map((r) => (
                <li key={r} className="leading-snug">
                  · {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Product ladder */}
          <div className="mb-6">
            <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-3">
              Where this routes in the Defendable product ladder
            </div>
            <div className="space-y-2">
              {rec.ladder.map((row) => {
                const isCurrent = row.name.startsWith(rec.product.split(" ")[0]);
                return (
                  <div
                    key={row.name}
                    className={`rounded border px-4 py-3 text-sm ${
                      isCurrent
                        ? "border-honey-300/40 bg-honey-300/[0.07]"
                        : "border-stone-800 bg-neutral-900/30"
                    }`}
                  >
                    <div className={`font-semibold ${isCurrent ? "text-honey-200" : "text-stone-200"}`}>
                      {row.name}
                      {isCurrent && <span className="text-honey-300 text-xs ml-2">· recommended next step</span>}
                    </div>
                    <div className="text-stone-400 text-xs leading-snug mt-0.5">{row.what}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-stone-800">
            <a
              href={`mailto:${SALES_EMAIL}?subject=ClawCheck%20Pro%20Review%20Request&body=Claw%20Exposure%20Snapshot%0A%0AWorker%3A%20${encodeURIComponent(
                worker || "",
              )}%0ADeployment%3A%20${encodeURIComponent(deployment || "")}%0AModel%3A%20${encodeURIComponent(
                model || "",
              )}%0AMemory%3A%20${memoryEnabled ? "Enabled" : "Ephemeral"}%0AAccess%3A%20${encodeURIComponent(
                access.join(", "),
              )}%0ARisk%20Tier%3A%20${risk.tier}%0ARecommended%3A%20${encodeURIComponent(rec.product)}`}
              className="inline-flex items-center px-5 py-2.5 rounded border border-honey-300/50 bg-honey-300/15 text-honey-200 hover:bg-honey-300/25 transition-colors text-sm font-semibold"
            >
              Send this snapshot to Defendable →
            </a>
            <Link
              to="/agent-grade"
              className="inline-flex items-center px-5 py-2.5 rounded border border-stone-700 text-stone-300 hover:text-stone-100 hover:border-stone-500 transition-colors text-sm font-semibold"
            >
              See AgentGrade methodology
            </Link>
            <Link
              to="/pair-factory"
              className="inline-flex items-center px-5 py-2.5 rounded border border-stone-700 text-stone-300 hover:text-stone-100 hover:border-stone-500 transition-colors text-sm font-semibold"
            >
              Validate the Validator doctrine
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
