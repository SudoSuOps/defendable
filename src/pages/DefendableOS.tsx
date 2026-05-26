import { Footer, Header } from "../components/SiteShell";

const CLOUD_URL = "https://defendablecloud.com/agent-operations-demo";
const DOCS_URL = "https://defendabledocs.com/field-release/overview/";
const OPEN_URL = "https://opendefendable.com";
const AUDIT_URL = "https://github.com/SudoSuOps/defendableos-tribunal-audit";
const REPOS_URL = "https://github.com/SudoSuOps";
const CONTACT_URL = "/contact";

const statusRows = [
  {
    label: "AgentOps module chain",
    status: "VERIFIED_AS_REPAIRED_WITH_LIMITATIONS",
    note: "Swarm-Doctor · Conditioning Coach · Owner Roster Registry · Permission Broker · cross-module flow",
  },
  {
    label: "DefendableCloud",
    status: "REPAIR_REQUIRED",
    note: "Controlled synthetic demo exists · public server-side action POST API not accepted as fielded",
    secondary: "READY_WITH_LIMITATIONS",
  },
  {
    label: "DefendableDocs",
    status: "READY_WITH_LIMITATIONS",
    note: "Field-release pages only · broader claim cleanup still required",
  },
  {
    label: "DefendableRouter",
    status: "FIELD INTEGRATION PENDING",
    note: "Public deployed utility and Cloud integration not yet verified",
  },
  {
    label: "Client pilot",
    status: "HOLD",
    note: "Not open for general client intake",
  },
  {
    label: "Production",
    status: "NOT CLEARED FOR PRODUCTION",
    note: "Independent audits do not clear production deployment",
  },
  {
    label: "External SaaS enforcement",
    status: "NOT CLEARED FOR EXTERNAL SAAS ENFORCEMENT",
    note: "No accepted proof of external platform restriction",
  },
];

const productRows = [
  {
    name: "DefendableCloud",
    role: "Field utility surface",
    status: "REPAIR_REQUIRED",
    description:
      "Controlled synthetic demo under repair. Browser demo exists with limitations. Public server-side action POST API is not accepted as fielded.",
    href: CLOUD_URL,
    cta: "View DefendableCloud",
  },
  {
    name: "DefendableDocs",
    role: "Client-use manual and owner record book",
    status: "READY_WITH_LIMITATIONS",
    description:
      "Field-release pages are aligned with limitations. Broader docs claim cleanup remains required.",
    href: DOCS_URL,
    cta: "Read field-release pages",
  },
  {
    name: "DefendableRouter",
    role: "Router / receipt utility track",
    status: "FIELD INTEGRATION PENDING",
    description:
      "Public deployed utility and Cloud integration are not yet verified through accepted audit evidence.",
    href: "https://defendablerouter.com",
    cta: "Review Router surface",
  },
  {
    name: "OpenDefendable",
    role: "Open-source truth surface",
    status: "READY_WITH_LIMITATIONS",
    description:
      "Protocols, audits, wins/losses, utilities, and contribution lanes live there. It is the public scoreboard, not the sales pitch.",
    href: OPEN_URL,
    cta: "Visit OpenDefendable",
  },
  {
    name: "Tribunal Audit",
    role: "Public referee tape",
    status: "READY_WITH_LIMITATIONS",
    description:
      "The audit repo records what shipped, what failed, what was repaired, and what remains held. It is not certification or production clearance.",
    href: AUDIT_URL,
    cta: "Review Tribunal tape",
  },
];

const worksToday = [
  "Four runtime module repos are public.",
  "Codex module audit and re-audit are published.",
  "The AgentOps module chain is VERIFIED_AS_REPAIRED_WITH_LIMITATIONS.",
  "DefendableDocs field-release pages are VERIFIED_AS_DOCUMENTED_WITH_LIMITATIONS.",
  "A DefendableCloud browser demo exists with limitations.",
  "Public repos and the Tribunal audit tape are available now.",
];

const notYet = [
  "DefendableCloud server-side action POST API repair is required.",
  "Broader DefendableDocs claim cleanup is required.",
  "DefendableRouter public utility is not verified from public surface evidence.",
  "Router-to-Cloud integration is not proven.",
  "Client pilots are held.",
  "Production is not cleared.",
  "External SaaS enforcement is not cleared.",
  "Certification, insurance, and blockchain anchoring are not claimed.",
];

const protocolSteps = [
  {
    step: "Build",
    detail: "Builder publishes code and release receipts.",
  },
  {
    step: "Public Safety Gate",
    detail: "Surface is checked for secrets, unsupported claims, and public-data issues.",
  },
  {
    step: "Codex Audit",
    detail: "Independent tape records what runs, what fails, and what is only claimed.",
  },
  {
    step: "Repair",
    detail: "Builders repair only the accepted findings.",
  },
  {
    step: "Re-audit",
    detail: "Codex verifies the repaired public commits and deployed surfaces.",
  },
  {
    step: "Field Release",
    detail: "Limited public release occurs only after the repaired tape is accepted.",
  },
  {
    step: "Docs Update",
    detail: "Owner-facing docs are brought into alignment with the accepted tape.",
  },
  {
    step: "Owner Promotion",
    detail: "Builder receipt is submission. Codex tape is referee evidence. Owner approval controls promotion.",
  },
];

export default function DefendableOS() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <BackgroundGrid />
      <Header />
      <main>
        <Hero />
        <StatusPanel />
        <ProductMap />
        <WorksAndHolds />
        <Protocol />
        <Ctas />
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

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-stone-900/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_34%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-amber-300/80 font-semibold">
              DefendableOS
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-50 leading-[1.02]">
              Evidence-backed operating rails for accountable AI systems
              <span className="block font-serif italic font-normal text-amber-300 mt-2">
                and proof-of-value workflows.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-stone-300 leading-relaxed">
              The current field-tested wedge is AI Agent Operations, implemented and audited with limitations.
              The broader platform direction is Proof of Value / AIOV, an active build track that is not fully field-cleared.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill label="AgentOps wedge" value="VERIFIED_AS_REPAIRED_WITH_LIMITATIONS" tone="strong" />
              <Pill label="Broader platform" value="ROADMAP / NOT YET IMPLEMENTED" />
              <Pill label="Client pilot" value="HOLD" />
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <PrimaryLink href={CLOUD_URL}>View DefendableCloud</PrimaryLink>
              <SecondaryLink href={DOCS_URL}>Read field-release docs</SecondaryLink>
              <SecondaryLink href={AUDIT_URL}>Review Tribunal tape</SecondaryLink>
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-stone-800 bg-neutral-950/80 shadow-[0_30px_80px_rgba(0,0,0,0.45)] overflow-hidden">
            <div className="border-b border-stone-800 px-6 py-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold">
                  Current field status
                </div>
                <div className="mt-1 text-sm text-stone-200">Owner-approved public truth</div>
              </div>
              <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-amber-300 font-semibold">
                Honest surface
              </span>
            </div>
            <div className="px-6 py-5 space-y-4">
              {statusRows.slice(0, 4).map((row) => (
                <div key={row.label} className="flex items-start justify-between gap-4 border-b border-stone-900 pb-4 last:border-b-0 last:pb-0">
                  <div>
                    <div className="text-sm font-medium text-stone-100">{row.label}</div>
                    <div className="mt-1 text-xs leading-relaxed text-stone-500">{row.note}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <Badge value={row.status} />
                    {row.secondary ? <div className="mt-2"><Badge value={row.secondary} subtle /></div> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusPanel() {
  return (
    <section id="status" className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-18 lg:py-22">
        <SectionHead
          eyebrow="Status panel"
          title="What is live, what is limited, and what is still held."
          body="These labels match the accepted audit tape. Nothing on this page is promoted beyond that evidence."
        />
        <div className="mt-10 grid gap-px rounded-2xl border border-stone-800 bg-stone-900 overflow-hidden">
          {statusRows.map((row) => (
            <div key={row.label} className="grid gap-4 bg-neutral-950 px-5 py-5 md:grid-cols-[1.1fr_0.8fr_1fr] md:items-center">
              <div className="text-sm font-semibold text-stone-100">{row.label}</div>
              <div className="flex flex-wrap gap-2">
                <Badge value={row.status} />
                {row.secondary ? <Badge value={row.secondary} subtle /> : null}
              </div>
              <div className="text-sm leading-relaxed text-stone-400">{row.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductMap() {
  return (
    <section id="products" className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-18 lg:py-22">
        <SectionHead
          eyebrow="Product map"
          title="Each public surface has one job."
          body="This is the current truthful role map across the franchise front door, field surfaces, and public audit record."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {productRows.map((row) => (
            <a
              key={row.name}
              href={row.href}
              className="group rounded-[1.4rem] border border-stone-800 bg-neutral-950/85 px-6 py-6 hover:border-amber-500/35 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-xl font-semibold tracking-tight text-stone-100">{row.name}</div>
                  <div className="mt-1 text-sm text-stone-500">{row.role}</div>
                </div>
                <Badge value={row.status} subtle />
              </div>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-300">{row.description}</p>
              <div className="mt-5 text-sm font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">
                {row.cta} →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorksAndHolds() {
  return (
    <section id="scoreboard" className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-18 lg:py-22">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="What works today"
              title="Only the proven items make this list."
              body="These are the public wins that survived build, safety gate, audit, repair, and re-audit."
            />
            <ul className="mt-8 space-y-3">
              {worksToday.map((item) => (
                <ScoreRow key={item} item={item} tone="emerald" />
              ))}
            </ul>
          </div>
          <div>
            <SectionHead
              eyebrow="What does not work yet"
              title="The holds stay visible."
              body="These are not buried footnotes. They are part of the product truth surface until repaired and independently re-audited."
            />
            <ul className="mt-8 space-y-3">
              {notYet.map((item) => (
                <ScoreRow key={item} item={item} tone="amber" />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Protocol() {
  return (
    <section id="protocol" className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-18 lg:py-22">
        <SectionHead
          eyebrow="Protocol"
          title="Build, referee tape, repair, and promotion are separate controls."
          body="Builder receipt is submission. Codex audit is referee tape. Owner approval is promotion control."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {protocolSteps.map((row) => (
            <div key={row.step} className="rounded-[1.25rem] border border-stone-800 bg-neutral-950 px-5 py-5">
              <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-semibold">Step</div>
              <div className="mt-2 text-lg font-semibold text-stone-100">{row.step}</div>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">{row.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ctas() {
  return (
    <section id="cta" className="py-18 lg:py-22">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[2rem] border border-amber-500/25 bg-[linear-gradient(135deg,rgba(245,158,11,0.10),rgba(23,23,23,0.96)_35%,rgba(10,10,10,1))] px-7 py-8 md:px-10 md:py-10">
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.24em] text-amber-300/80 font-semibold">
              Practical next steps
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-stone-50">
              Use the right surface for the right truth.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-300">
              Browse the controlled demo, read the owner record, inspect the open-source scoreboard,
              or review the full Tribunal tape. Do not treat any surface as production-cleared until a later owner-approved audit says so.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryLink href={CLOUD_URL}>View DefendableCloud</PrimaryLink>
            <SecondaryLink href={DOCS_URL}>Read DefendableDocs</SecondaryLink>
            <SecondaryLink href={OPEN_URL}>Visit OpenDefendable</SecondaryLink>
            <SecondaryLink href={AUDIT_URL}>Review Tribunal audit tape</SecondaryLink>
            <SecondaryLink href={REPOS_URL}>View public repos</SecondaryLink>
            <SecondaryLink href={CONTACT_URL}>Request early-access review</SecondaryLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="max-w-3xl">
      <div className="text-[10px] uppercase tracking-[0.24em] text-amber-300/80 font-semibold">{eyebrow}</div>
      <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-stone-400">{body}</p>
    </div>
  );
}

function ScoreRow({ item, tone }: { item: string; tone: "emerald" | "amber" }) {
  const color =
    tone === "emerald"
      ? "border-emerald-500/25 bg-emerald-500/[0.05] text-emerald-300"
      : "border-amber-500/25 bg-amber-500/[0.05] text-amber-300";
  return (
    <li className={`rounded-2xl border px-4 py-4 text-sm leading-relaxed ${color}`}>
      {item}
    </li>
  );
}

function Pill({ label, value, tone }: { label: string; value: string; tone?: "strong" }) {
  return (
    <div className={`rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] font-semibold ${tone === "strong" ? "border-amber-500/40 bg-amber-500/10 text-amber-300" : "border-stone-700 text-stone-300"}`}>
      <span className="text-stone-500 mr-2">{label}</span>
      {value}
    </div>
  );
}

function Badge({ value, subtle }: { value: string; subtle?: boolean }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-semibold ${
        subtle
          ? "border-stone-700 text-stone-300"
          : "border-amber-500/40 bg-amber-500/10 text-amber-300"
      }`}
    >
      {value}
    </span>
  );
}

function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-amber-300 transition-colors"
    >
      {children}
    </a>
  );
}

function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-5 py-3 text-sm font-semibold text-stone-200 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
    >
      {children}
    </a>
  );
}
