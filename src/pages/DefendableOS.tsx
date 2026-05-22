// defendableos.com (and apex /defendableos · swarmandbee.ai/defendableos)
//
// The umbrella brand surface for DefendableOS™ · Proof of Value™ · Validate the
// Validator. Sits above LegalSniper · Bakery · Edge · FamilyOffice as the
// platform-layer brand that ties every Swarm product into one frame.
//
// Stack · React + Tailwind (no framer-motion, no lucide-react · inline SVG +
// CSS transitions match the existing page pattern · zero new bundle weight).
//
// Visual direction · charcoal base · stone/ivory typography · honey-gold (amber)
// accents sparingly · subtle grid texture · document/deed/ledger motifs ·
// institutional · founder-grade · never cyberpunk.

import { useState } from "react";

const SWARM_APEX = "https://swarmandbee.ai";
const SALES_EMAIL = "build@swarmandbee.ai";

export default function DefendableOS() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <BackgroundGrid />
      <DefendableHeader />
      <main>
        <Hero />
        <ProblemSection />
        <WorkflowSection />
        <AssetClassesSection />
        <DefendableDeedSection />
        <ValidatorDoctrineSection />
        <ArchitectureSection />
        <ModulesSection />
        <EarlyAccessSection />
      </main>
      <DefendableFooter />
    </div>
  );
}

// ─── ambient texture (subtle blueprint grid · zero motion · no perf cost) ───
function BackgroundGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(212,170,40,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,170,40,1) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        backgroundPosition: "center center",
      }}
    />
  );
}

// ─── header · sticky translucent · refined wordmark + minimal emblem ───────
function DefendableHeader() {
  const [open, setOpen] = useState(false);
  const items = [
    { label: "Platform", href: "#platform" },
    { label: "Proof of Value", href: "#proof-of-value" },
    { label: "Asset Classes", href: "#asset-classes" },
    { label: "Deeds", href: "#deeds" },
    { label: "Early Access", href: "#early-access" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-stone-800/60 bg-neutral-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
        <a href="#top" className="flex items-center gap-3 group">
          <EmblemMark />
          <span className="font-semibold tracking-tight text-stone-100 text-lg">
            <span className="text-amber-400">Defendable</span>OS
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 ml-6">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-sm text-stone-400 hover:text-stone-100 transition-colors">
              {it.label}
            </a>
          ))}
        </nav>
        <a
          href="#early-access"
          className="ml-auto hidden md:inline-flex items-center px-5 py-2 rounded border border-amber-500/40 bg-amber-500/10 text-sm text-amber-300 hover:bg-amber-500/20 hover:border-amber-400 transition-colors font-semibold tracking-tight"
        >
          Request Access
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
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="text-sm text-stone-300 py-2 border-b border-stone-900 last:border-0"
              >
                {it.label}
              </a>
            ))}
            <a
              href="#early-access"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded border border-amber-500/40 bg-amber-500/10 text-sm text-amber-300 font-semibold"
            >
              Request Access
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function EmblemMark() {
  // A "D" inside a deed/document frame · monogram emblem · stone + amber
  return (
    <span className="relative inline-flex items-center justify-center w-9 h-9 rounded border border-stone-700 bg-neutral-900 group-hover:border-amber-500/60 transition-colors">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-amber-400">
        <path d="M3 2h7l3 3v11H3z" />
        <path d="M6 6h4M6 9h5M6 12h3" strokeWidth="1.1" opacity="0.7" />
      </svg>
    </span>
  );
}

// ─── hero · category + ambition + Proof of Value record preview ────────────
function Hero() {
  return (
    <section id="top" className="relative border-b border-stone-900/80">
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-amber-500/[0.04] via-amber-500/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
          <div>
            <Eyebrow>DEFENDABLEOS / PROOF OF VALUE</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-50 leading-[1.05]">
              Every asset deserves a{" "}
              <span className="font-serif italic font-normal text-amber-300">defendable</span>{" "}
              value.
            </h1>
            <p className="mt-8 text-lg text-stone-300 leading-relaxed max-w-xl">
              DefendableOS turns real-world and digital assets into evidence-backed, market-ready records — with verified inputs, comparable analysis, provenance, valuation receipts, and transferable Defendable Deeds.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#early-access"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-amber-400 text-neutral-950 text-sm font-semibold tracking-tight hover:bg-amber-300 transition-colors"
              >
                Request Early Access
                <Arrow />
              </a>
              <a
                href="#platform"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-700 text-sm text-stone-200 font-semibold tracking-tight hover:border-stone-500 hover:text-stone-50 transition-colors"
              >
                Explore the System
              </a>
            </div>
            <p className="mt-8 text-xs text-stone-500 tracking-tight max-w-md">
              Powered by <span className="text-amber-300 font-medium">AIOV</span> — AI Opinion of Value.
              Built on the doctrine: <span className="text-stone-300 font-medium">Validate the Validator</span>.
            </p>
          </div>

          {/* Hero product preview · Proof of Value record card · the deed/appraisal moment */}
          <ProofRecordPreview />
        </div>
      </div>
    </section>
  );
}

function ProofRecordPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-amber-500/[0.03] blur-3xl pointer-events-none" />
      <div className="relative rounded-xl border border-stone-700/70 bg-gradient-to-br from-stone-900/90 to-neutral-950 shadow-2xl overflow-hidden">
        {/* Header strip · ledger feel */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-stone-800 bg-neutral-950/60">
          <div className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.18em] text-stone-400 font-semibold">
            <DocumentIcon />
            Proof of Value · Record
          </div>
          <span className="text-[10px] uppercase tracking-[0.18em] text-amber-300/90 font-semibold">
            Evidence Review Ready
          </span>
        </div>

        {/* Asset summary */}
        <div className="px-6 py-5 border-b border-stone-800/70">
          <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-2 font-semibold">Asset</div>
          <div className="text-base font-semibold text-stone-100 leading-snug">
            NVIDIA RTX PRO 6000 Blackwell Workstation GPU
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
            <Field label="Asset Class" value="Compute Hardware" />
            <Field label="Evidence Items" value="14" />
            <Field label="Comparables" value="8" />
          </div>
        </div>

        {/* Modules grid · the 7 elements of a Proof of Value record */}
        <div className="px-6 py-5 grid grid-cols-2 gap-2.5">
          {[
            { label: "Asset Identity", ok: true },
            { label: "Condition Evidence", ok: true },
            { label: "Market Comparables", ok: true },
            { label: "Benchmark Receipt", ok: true },
            { label: "Valuation Range", ok: true, illustrative: true },
            { label: "Provenance Trail", ok: true },
            { label: "Defendable Deed", ok: false },
            { label: "Validator Review", ok: true },
          ].map((m) => (
            <div
              key={m.label}
              className={`flex items-center gap-2 px-3 py-2.5 rounded border text-xs ${
                m.ok
                  ? "border-amber-500/25 bg-amber-500/[0.04]"
                  : "border-stone-800 bg-neutral-950/60"
              }`}
            >
              {m.ok ? <CheckMark /> : <PendingMark />}
              <span className="text-stone-200">{m.label}</span>
              {m.illustrative && (
                <span className="ml-auto text-[9px] uppercase tracking-wider text-stone-500">Illustrative</span>
              )}
            </div>
          ))}
        </div>

        {/* Footer · hash + status */}
        <div className="px-6 py-4 border-t border-stone-800/70 bg-neutral-950/60 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2 text-stone-500">
            <span className="uppercase tracking-[0.18em] text-[10px] text-stone-500 font-semibold">Record Hash</span>
            <span className="font-mono text-stone-400">0x8F2D…B91A</span>
          </div>
          <span className="text-stone-500">
            Issued by <span className="text-amber-300/90 font-medium">DefendableOS</span>
          </span>
        </div>
      </div>
      <p className="mt-3 text-[10px] text-stone-500 tracking-tight text-center">
        Illustrative product preview · sample data · not a certified valuation.
      </p>
    </div>
  );
}

// ─── problem · category · "value without evidence is just an opinion" ──────
function ProblemSection() {
  const cards = [
    {
      n: "01",
      title: "Unverified Inputs",
      body:
        "A valuation is only as reliable as the identity, condition, source documents, and market data behind it.",
    },
    {
      n: "02",
      title: "Fragmented Evidence",
      body:
        "Receipts, photos, benchmarks, comparables, ownership records, and reports rarely travel together with the asset.",
    },
    {
      n: "03",
      title: "Weak Market Readiness",
      body:
        "Owners and buyers lose time and trust when a sale begins before the evidence package is complete.",
    },
  ];
  return (
    <section id="platform" className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <Eyebrow>THE PROBLEM</Eyebrow>
        <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 max-w-3xl leading-[1.1]">
          Value without <span className="font-serif italic font-normal text-amber-300">evidence</span> is just an opinion.
        </h2>
        <p className="mt-6 text-lg text-stone-300 leading-relaxed max-w-3xl">
          Assets move through markets every day with incomplete records, unverified comps, missing provenance, undocumented condition, and valuation claims that cannot survive scrutiny. DefendableOS is designed to change that.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div
              key={c.n}
              className="group p-7 rounded-lg border border-stone-800 bg-stone-900/30 hover:border-stone-700 hover:bg-stone-900/50 transition-colors"
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-amber-400/80 mb-5">{c.n}</div>
              <div className="text-lg font-semibold text-stone-50 mb-3 tracking-tight">{c.title}</div>
              <p className="text-sm text-stone-400 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-stone-900">
          <p className="text-xl md:text-2xl font-semibold tracking-tight text-stone-100 max-w-3xl leading-snug">
            We do not merely generate opinions of value.{" "}
            <span className="text-amber-300">We build proof.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── workflow · 5 steps · "from asset to Proof of Value" ───────────────────
function WorkflowSection() {
  const steps = [
    { n: "01", verb: "Capture", title: "Identify the asset.",
      body: "Collect source documents, images, specifications, condition details, ownership context, and relevant evidence." },
    { n: "02", verb: "Analyze", title: "Run AIOV.",
      body: "Generate an AI-assisted opinion of value using asset-specific market intelligence, comparable records, and evidence-aware analysis." },
    { n: "03", verb: "Challenge", title: "Validate the Validator.",
      body: "Test assumptions, inspect comparables, grade evidence quality, surface conflicts, and flag unsupported conclusions." },
    { n: "04", verb: "Package", title: "Produce the record.",
      body: "Create a market-ready Proof of Value package with analysis, receipts, provenance, evidence references, and disposition-ready materials." },
    { n: "05", verb: "Deed", title: "Issue the Defendable Deed.",
      body: "Preserve the evidence-backed asset record as a transferable digital artifact built to accompany the asset over time." },
  ];

  return (
    <section id="proof-of-value" className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <Eyebrow>HOW IT WORKS</Eyebrow>
        <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 max-w-3xl leading-[1.1]">
          From asset to <span className="font-serif italic font-normal text-amber-300">Proof of Value</span>.
        </h2>

        <div className="mt-16 grid gap-3">
          {steps.map((s, i) => (
            <div key={s.n}>
              <div className="grid grid-cols-[auto_1fr] md:grid-cols-[120px_140px_1fr] gap-x-6 gap-y-2 items-baseline py-5 border-t border-stone-900 hover:bg-stone-900/20 transition-colors px-2 -mx-2 rounded">
                <div className="font-mono text-xs text-amber-400/90 tracking-[0.18em] uppercase">{s.n}</div>
                <div className="text-sm font-semibold text-stone-200 uppercase tracking-[0.14em]">{s.verb}</div>
                <div>
                  <div className="text-lg md:text-xl font-semibold text-stone-50 tracking-tight mb-1">{s.title}</div>
                  <p className="text-sm text-stone-400 leading-relaxed">{s.body}</p>
                </div>
              </div>
              {i === 2 && (
                <div className="my-4 md:my-6 px-6 md:px-10 py-5 md:py-6 rounded-lg border border-amber-500/30 bg-gradient-to-r from-amber-500/[0.04] to-transparent">
                  <p className="text-base md:text-lg font-semibold tracking-tight text-stone-100 italic">
                    “An AI opinion is not proof until the evidence survives challenge.”
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── asset classes · 6 cards · "one system, many markets" ──────────────────
function AssetClassesSection() {
  const cards = [
    {
      title: "Commercial Real Estate",
      body: "Comps, offering materials, condition evidence, underwriting support, and market-ready ownership packages.",
      artifacts: "Comparable Booklet · Value Record · Disposition Package",
      icon: <BuildingIcon />,
    },
    {
      title: "Compute Hardware",
      body: "GPUs, servers, AI clusters, edge appliances, benchmark receipts, configuration records, and resale analysis.",
      artifacts: "Benchmark Receipt · Hardware Provenance · Resale Package",
      icon: <CpuIcon />,
      badge: "Proof of Compute Compatible",
    },
    {
      title: "Equipment",
      body: "Condition documentation, replacement analysis, service records, useful-life support, and transfer-ready evidence.",
      artifacts: "Condition File · Market Analysis · Ownership Record",
      icon: <WrenchIcon />,
    },
    {
      title: "Luxury Goods",
      body: "Identity records, provenance evidence, condition media, comparable market support, and resale packaging.",
      artifacts: "Provenance File · Comparable Report · Transfer Record",
      icon: <GemIcon />,
    },
    {
      title: "Datasets",
      body: "Source documentation, curation receipts, integrity checks, version history, hash records, and licensing support.",
      artifacts: "Dataset Deed · Integrity Receipt · Provenance Ledger",
      icon: <DatabaseIcon />,
      badge: "Deeded Digital Assets",
    },
    {
      title: "AI Assets",
      body: "Model cards, training records, evaluation receipts, benchmark evidence, deployment history, and transfer-ready IP documentation.",
      artifacts: "Model Record · Eval Receipt · Asset Dossier",
      icon: <BrainIcon />,
      badge: "Deeded Digital Assets",
    },
  ];

  return (
    <section id="asset-classes" className="border-b border-stone-900/80 bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <Eyebrow>ONE SYSTEM. MANY MARKETS.</Eyebrow>
        <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 max-w-3xl leading-[1.1]">
          Proof of Value across <span className="font-serif italic font-normal text-amber-300">physical and digital</span> assets.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group p-7 rounded-lg border border-stone-800 bg-stone-900/30 hover:border-amber-500/30 hover:bg-stone-900/50 transition-colors flex flex-col"
            >
              <div className="w-9 h-9 rounded border border-stone-700 group-hover:border-amber-500/40 flex items-center justify-center text-amber-400/90 mb-5 transition-colors">
                {c.icon}
              </div>
              <div className="text-lg font-semibold text-stone-50 tracking-tight mb-3">{c.title}</div>
              <p className="text-sm text-stone-400 leading-relaxed flex-1">{c.body}</p>
              <div className="mt-5 pt-4 border-t border-stone-800/70">
                <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-1.5">Artifacts</div>
                <div className="text-xs text-stone-400 font-mono leading-relaxed">{c.artifacts}</div>
              </div>
              {c.badge && (
                <div className="mt-4 inline-flex items-center self-start gap-1.5 px-2.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/[0.06] text-[10px] text-amber-300 font-semibold tracking-tight">
                  <Dot />
                  {c.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── defendable deed · "the asset record that travels with the value" ──────
function DefendableDeedSection() {
  const principles = [
    "Evidence travels with the asset",
    "Inputs remain reviewable",
    "Analysis remains challengeable",
    "Value becomes market-ready",
  ];
  return (
    <section id="deeds" className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <Eyebrow>THE ARTIFACT</Eyebrow>
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start mt-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 leading-[1.05]">
              The asset record that travels with the{" "}
              <span className="font-serif italic font-normal text-amber-300">value</span>.
            </h2>
            <p className="mt-8 text-lg text-stone-300 leading-relaxed">
              A <span className="font-serif italic text-amber-200">Defendable Deed</span> is an evidence-backed record designed to preserve the identity, provenance, condition, supporting analysis, and Proof of Value package associated with an asset.
            </p>

            <ul className="mt-10 space-y-4">
              {principles.map((p) => (
                <li key={p} className="flex items-start gap-3 text-stone-200">
                  <span className="mt-1 inline-block w-5 h-5 rounded border border-amber-500/40 flex items-center justify-center text-amber-300 flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M1.5 5l2 2 5-5" />
                    </svg>
                  </span>
                  <span className="text-base leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-xs text-stone-500 leading-relaxed max-w-md italic">
              DefendableOS records are evidence and analysis packages. Asset-specific professional, legal, regulatory, or licensed appraisal requirements may still apply.
            </p>
          </div>

          <DeedMockup />
        </div>
      </div>
    </section>
  );
}

function DeedMockup() {
  const rows: Array<[string, string, "ok" | "neutral" | "pending"]> = [
    ["Record Type", "Proof of Value", "neutral"],
    ["Asset Class", "Compute Hardware", "neutral"],
    ["Asset", "RTX PRO 6000 Blackwell Workstation GPU", "neutral"],
    ["Evidence Packet", "Attached", "ok"],
    ["Comparable Analysis", "Attached", "ok"],
    ["Benchmark Receipt", "Attached", "ok"],
    ["AIOV Analysis", "Attached", "ok"],
    ["Validator Review", "Passed for Packaging", "ok"],
    ["Transfer Status", "Ready for Review", "pending"],
    ["Record Hash", "0x8F2D…B91A", "neutral"],
    ["Issued By", "DefendableOS", "neutral"],
    ["Status", "Illustrative Record", "pending"],
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-2xl bg-gradient-to-br from-amber-500/8 to-transparent blur-3xl pointer-events-none" />
      <div className="relative rounded-xl border border-stone-700/70 bg-gradient-to-br from-stone-900/90 to-neutral-950 shadow-2xl overflow-hidden">
        {/* Deed header band */}
        <div className="px-7 py-5 border-b border-stone-800 bg-neutral-950/70">
          <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-amber-400/80 font-semibold mb-1">
            Defendable Deed
          </div>
          <div className="text-stone-100 text-xl font-semibold tracking-tight">Evidence-backed asset record</div>
        </div>
        {/* Field rows · ledger style */}
        <div className="px-7 py-5 divide-y divide-stone-800/70">
          {rows.map(([k, v, s]) => (
            <div key={k} className="grid grid-cols-[180px_1fr_auto] gap-4 items-baseline py-3 text-sm">
              <span className="text-[11px] uppercase tracking-[0.14em] text-stone-500 font-semibold">{k}</span>
              <span className={`text-stone-100 ${k === "Record Hash" ? "font-mono text-stone-300" : ""}`}>{v}</span>
              <StatusPill state={s} />
            </div>
          ))}
        </div>
        <div className="px-7 py-4 border-t border-stone-800 bg-neutral-950/70 flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">
            Illustrative Product Preview
          </div>
          <a href="#early-access" className="text-xs text-amber-300 hover:text-amber-200 font-semibold">
            Request a preview →
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── validate the validator · doctrine section · darker band ───────────────
function ValidatorDoctrineSection() {
  const queue = [
    { label: "Asset identity confirmed", ok: true },
    { label: "Source evidence indexed", ok: true },
    { label: "Comparable relevance reviewed", ok: true },
    { label: "Unsupported assumption flagged", ok: false, warn: true },
    { label: "Benchmark receipt verified", ok: true },
    { label: "Provenance chain assembled", ok: true },
    { label: "Final package pending approval", ok: false },
  ];
  const principles = [
    { title: "Evidence Before Confidence", body: "No conclusion outranks its source material." },
    { title: "Receipts Before Claims", body: "Outputs must be supported by inspectable records." },
    { title: "Challenge Before Transfer", body: "A market-ready asset package should survive scrutiny before it reaches a buyer." },
  ];
  return (
    <section className="border-b border-stone-900/80 bg-gradient-to-b from-neutral-950 via-stone-900/40 to-neutral-950">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <Eyebrow>THE DOCTRINE</Eyebrow>
        <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 max-w-3xl leading-[1.05]">
          <span className="font-serif italic font-normal text-amber-300">Validate</span> the Validator.
        </h2>
        <p className="mt-8 text-lg text-stone-300 leading-relaxed max-w-3xl">
          Models can generate. Experts can opine. Markets can price. But trust begins when the source data, assumptions, comps, calculations, conflicts, and conclusions can be reviewed and challenged.
        </p>

        <div className="mt-14 grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
          <div className="rounded-xl border border-stone-700/70 bg-neutral-950/70 overflow-hidden">
            <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between bg-neutral-950">
              <div className="text-[10px] uppercase tracking-[0.18em] text-stone-400 font-semibold">Validation Queue</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-amber-300/80 font-semibold">Live review</div>
            </div>
            <ul className="divide-y divide-stone-800/70">
              {queue.map((q) => (
                <li key={q.label} className="px-6 py-3.5 flex items-center gap-3 text-sm">
                  {q.ok ? <CheckMark /> : q.warn ? <WarnMark /> : <PendingMark />}
                  <span className="text-stone-200">{q.label}</span>
                  <span className={`ml-auto text-[10px] uppercase tracking-[0.18em] font-semibold ${
                    q.ok ? "text-emerald-400/80" : q.warn ? "text-amber-400" : "text-stone-500"
                  }`}>
                    {q.ok ? "Pass" : q.warn ? "Flagged" : "Pending"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-7">
            {principles.map((p) => (
              <div key={p.title} className="border-l-2 border-amber-500/40 pl-5">
                <div className="text-base font-semibold text-stone-50 tracking-tight mb-1.5">{p.title}</div>
                <p className="text-sm text-stone-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-stone-900">
          <p className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-100 max-w-3xl leading-snug">
            AIOV gives the opinion.{" "}
            <span className="text-amber-300">DefendableOS proves the value.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── architecture · the trust layer around the asset ───────────────────────
function ArchitectureSection() {
  const stack = [
    {
      label: "Market-Ready Output",
      items: ["Sale Package", "Transfer Record", "Buyer Booklet", "Financing / Insurance Support File"],
      tone: "top",
    },
    {
      label: "DefendableOS",
      items: ["Evidence Vault", "Validator Review", "Receipt Ledger", "Deed Registry", "Workflow Engine"],
      tone: "main",
    },
    {
      label: "AIOV",
      items: ["Comparable Analysis", "Asset-Specific Models", "Valuation Reasoning", "Risk Flagging"],
      tone: "intel",
    },
    {
      label: "Source Evidence",
      items: ["Documents", "Photos", "Benchmarks", "Provenance", "Ownership Records", "Market Data"],
      tone: "foundation",
    },
  ];
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <Eyebrow>SYSTEM ARCHITECTURE</Eyebrow>
        <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 max-w-3xl leading-[1.1]">
          A trust layer built around the <span className="font-serif italic font-normal text-amber-300">asset</span>.
        </h2>

        <div className="mt-14 grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          <div className="space-y-3">
            {stack.map((layer) => (
              <div
                key={layer.label}
                className={`rounded-lg border p-6 ${
                  layer.tone === "main"
                    ? "border-amber-500/40 bg-gradient-to-r from-amber-500/[0.06] to-amber-500/[0.02]"
                    : "border-stone-800 bg-stone-900/30"
                }`}
              >
                <div className="flex items-center gap-4 flex-wrap">
                  <div
                    className={`text-xs font-mono uppercase tracking-[0.18em] font-semibold ${
                      layer.tone === "main" ? "text-amber-300" : "text-stone-400"
                    }`}
                  >
                    {layer.label}
                  </div>
                  <div className="flex flex-wrap gap-2 ml-auto">
                    {layer.items.map((i) => (
                      <span
                        key={i}
                        className={`text-xs px-2.5 py-1 rounded border ${
                          layer.tone === "main"
                            ? "border-amber-500/30 bg-neutral-950/40 text-stone-200"
                            : "border-stone-700 bg-neutral-950/40 text-stone-300"
                        }`}
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Defendable Box · optional future edge module */}
          <aside className="rounded-lg border border-stone-700 bg-stone-900/40 p-6 lg:sticky lg:top-24">
            <div className="text-[10px] uppercase tracking-[0.22em] text-amber-400/80 font-semibold mb-3">
              Optional · Future Edge Module
            </div>
            <div className="text-lg font-semibold tracking-tight text-stone-50 mb-2">Defendable Box</div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Local capture. Local inference. Sovereign evidence handling. For institutions and operators that need to keep source material under their roof while still producing a DefendableOS record.
            </p>
            <div className="mt-5 pt-5 border-t border-stone-800 text-[11px] uppercase tracking-[0.14em] text-stone-500 font-semibold">
              Capability preview · not yet for general availability
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ─── modules · 6 cards · what's inside DefendableOS ────────────────────────
function ModulesSection() {
  const modules = [
    {
      title: "AIOV Engine",
      body: "AI-assisted opinions of value built from asset-specific context and comparable evidence.",
      icon: <BrainIcon />,
    },
    {
      title: "Evidence Vault",
      body: "Store the records that support identity, provenance, condition, and analysis.",
      icon: <ArchiveIcon />,
    },
    {
      title: "Validator Review",
      body: "Challenge assumptions, inputs, comparable relevance, and unsupported claims.",
      icon: <ShieldIcon />,
    },
    {
      title: "Receipt Ledger",
      body: "Generate inspectable analysis and evidence receipts for every record.",
      icon: <ReceiptIcon />,
    },
    {
      title: "Defendable Deed",
      body: "Package the asset's value-supporting record into a transferable artifact.",
      icon: <DocumentIcon />,
    },
    {
      title: "Market-Ready Export",
      body: "Ship buyer-ready booklets, reports, listing support, and diligence packages.",
      icon: <PackageIcon />,
    },
  ];

  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <Eyebrow>PLATFORM MODULES</Eyebrow>
        <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 max-w-3xl leading-[1.1]">
          Built for evidence, analysis, and <span className="font-serif italic font-normal text-amber-300">transfer</span>.
        </h2>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m) => (
            <div
              key={m.title}
              className="group p-7 rounded-lg border border-stone-800 bg-stone-900/30 hover:border-amber-500/30 hover:bg-stone-900/50 transition-colors"
            >
              <div className="w-10 h-10 rounded border border-stone-700 group-hover:border-amber-500/40 flex items-center justify-center text-amber-400/90 mb-5 transition-colors">
                {m.icon}
              </div>
              <div className="text-lg font-semibold text-stone-50 tracking-tight mb-2">{m.title}</div>
              <p className="text-sm text-stone-400 leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── early access · form · routes to Discord via /api/early-access ────────
function EarlyAccessSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [assetClass, setAssetClass] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  const valid =
    name.trim().length >= 2 &&
    /^\S+@\S+\.\S+/.test(email) &&
    company.trim().length >= 2 &&
    assetClass.length > 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setSubmitting(true);
    setResult(null);
    try {
      const r = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: `[DefendableOS Early Access]\nCompany/Project: ${company.trim()}\nAsset Class: ${assetClass}\nAsset/Workflow: ${message.trim() || "(none)"}`,
          tier: "asking",
          matter_type: "other",
          source: "defendableos-early-access",
          company_url: honey,
        }),
      });
      const d = (await r.json()) as { ok?: boolean; error?: string; message?: string };
      if (r.ok && d.ok) {
        setResult({
          ok: true,
          message:
            d.message ||
            "Early access intake received. We'll reply at the email you provided · usually within 24 hours.",
        });
        setName(""); setEmail(""); setCompany(""); setAssetClass(""); setMessage("");
      } else {
        // Backend exists but rejected · fall back to graceful messaging
        setResult({
          ok: false,
          message:
            d.error ||
            "Early access intake is being prepared. Contact integration coming soon. Email build@swarmandbee.ai directly.",
        });
      }
    } catch {
      setResult({
        ok: false,
        message: "Early access intake is being prepared. Contact integration coming soon. Email build@swarmandbee.ai directly.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="early-access" className="border-b border-stone-900/80 bg-gradient-to-b from-neutral-950 to-stone-900/30">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <Eyebrow>EARLY ACCESS</Eyebrow>
        <div className="mt-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 leading-[1.05]">
              Bring your asset. Build its{" "}
              <span className="font-serif italic font-normal text-amber-300">Proof of Value</span>.
            </h2>
            <p className="mt-8 text-lg text-stone-300 leading-relaxed">
              DefendableOS is being built for asset owners, operators, brokers, collectors, compute sellers, dataset builders, AI firms, and institutions that need value supported by evidence.
            </p>

            <div className="mt-10">
              <div className="text-[11px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-3">
                For founding partners
              </div>
              <ul className="space-y-3 text-stone-300">
                {[
                  "Early Proof of Value workflow design",
                  "Asset-class pilot onboarding",
                  "Deed and evidence package prototyping",
                  "Private platform demonstrations",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-amber-400/80 flex-shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-stone-700/80 bg-neutral-950/70 p-7 lg:p-8"
            noValidate
          >
            {/* Honeypot · invisible to humans · bots fill it */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honey}
              onChange={(e) => setHoney(e.target.value)}
              className="absolute opacity-0 pointer-events-none w-0 h-0"
              aria-hidden
            />

            <div className="grid gap-4">
              <FieldInput label="Full Name" value={name} onChange={setName} required />
              <FieldInput label="Work Email" type="email" value={email} onChange={setEmail} required />
              <FieldInput label="Company / Project" value={company} onChange={setCompany} required />
              <FieldSelect
                label="Asset Class"
                value={assetClass}
                onChange={setAssetClass}
                required
                options={[
                  { value: "", label: "Select an asset class…" },
                  { value: "Commercial Real Estate", label: "Commercial Real Estate" },
                  { value: "Compute Hardware", label: "Compute Hardware" },
                  { value: "Equipment", label: "Equipment" },
                  { value: "Luxury Goods", label: "Luxury Goods" },
                  { value: "Dataset", label: "Dataset" },
                  { value: "AI Asset", label: "AI Asset" },
                  { value: "Other", label: "Other" },
                ]}
              />
              <FieldTextarea
                label="What asset or workflow do you want to make defendable?"
                value={message}
                onChange={setMessage}
                rows={4}
                placeholder="Optional · brief description of your asset, workflow, or pilot intent"
              />
            </div>

            <button
              type="submit"
              disabled={!valid || submitting}
              className={`mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded font-semibold tracking-tight text-sm transition-colors ${
                valid && !submitting
                  ? "bg-amber-400 text-neutral-950 hover:bg-amber-300"
                  : "bg-stone-800 text-stone-500 cursor-not-allowed"
              }`}
            >
              {submitting ? "Submitting…" : "Request Early Access"}
              {!submitting && <Arrow />}
            </button>

            {result && result.ok && (
              <div className="mt-5 p-4 rounded border border-emerald-500/40 bg-emerald-500/[0.06] text-sm text-emerald-300">
                ✓ {result.message}
              </div>
            )}
            {result && !result.ok && (
              <div className="mt-5 p-4 rounded border border-amber-500/40 bg-amber-500/[0.06] text-sm text-amber-200">
                {result.message}
              </div>
            )}

            <p className="mt-5 text-xs text-stone-500 text-center leading-relaxed">
              By submitting, you agree to be contacted about DefendableOS early access. No marketing automation. A human responds.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── footer · multi-column · institutional ──────────────────────────────────
function DefendableFooter() {
  return (
    <footer className="bg-neutral-950">
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
              Proof of Value for Everything That Matters.
            </p>
            <p className="mt-3 text-xs text-stone-500 leading-relaxed max-w-sm italic">
              Proof of Value. Built on evidence. Designed for scrutiny.
            </p>
          </div>
          <FooterColumn
            heading="Platform"
            links={[
              ["Proof of Value", "#proof-of-value"],
              ["AIOV", "#proof-of-value"],
              ["Defendable Deeds", "#deeds"],
              ["Validator Review", "#proof-of-value"],
            ]}
          />
          <FooterColumn
            heading="Asset Classes"
            links={[
              ["Real Estate", "#asset-classes"],
              ["Compute", "#asset-classes"],
              ["Equipment", "#asset-classes"],
              ["Digital Assets", "#asset-classes"],
            ]}
          />
          <FooterColumn
            heading="Company"
            links={[
              ["Early Access", "#early-access"],
              ["Contact", `mailto:${SALES_EMAIL}`],
              ["Privacy", `${SWARM_APEX}/legal/privacy`],
              ["Terms", `${SWARM_APEX}/legal/terms`],
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

// ─── shared building blocks ────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
      <span className="inline-block w-6 h-px bg-amber-400/60" />
      {children}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-1">{label}</div>
      <div className="text-sm text-stone-100 font-medium">{value}</div>
    </div>
  );
}

function FieldInput({
  label,
  value,
  onChange,
  required,
  type,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.14em] text-stone-400 font-semibold mb-1.5">
        {label}{required && <span className="text-amber-400 ml-1">*</span>}
      </span>
      <input
        type={type || "text"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded bg-neutral-900/80 border border-stone-800 text-stone-100 placeholder:text-stone-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 outline-none transition-colors text-sm"
      />
    </label>
  );
}

function FieldSelect({
  label,
  value,
  onChange,
  required,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.14em] text-stone-400 font-semibold mb-1.5">
        {label}{required && <span className="text-amber-400 ml-1">*</span>}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded bg-neutral-900/80 border border-stone-800 text-stone-100 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 outline-none transition-colors text-sm"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-neutral-900">
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function FieldTextarea({
  label,
  value,
  onChange,
  rows,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.14em] text-stone-400 font-semibold mb-1.5">
        {label}
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows || 4}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded bg-neutral-900/80 border border-stone-800 text-stone-100 placeholder:text-stone-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 outline-none transition-colors text-sm leading-relaxed resize-none"
      />
    </label>
  );
}

function StatusPill({ state }: { state: "ok" | "neutral" | "pending" }) {
  const map: Record<typeof state, { c: string; l: string }> = {
    ok: { c: "border-emerald-500/40 text-emerald-300 bg-emerald-500/[0.06]", l: "Ready" },
    neutral: { c: "border-stone-700 text-stone-400 bg-neutral-900/50", l: "Field" },
    pending: { c: "border-amber-500/40 text-amber-300 bg-amber-500/[0.06]", l: "Pending" },
  };
  const s = map[state];
  return (
    <span className={`text-[10px] uppercase tracking-[0.16em] font-semibold px-2 py-1 rounded border ${s.c}`}>
      {s.l}
    </span>
  );
}

// ─── inline icons (no dep · matches existing page pattern) ─────────────────

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function CheckMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-emerald-400 flex-shrink-0">
      <circle cx="7" cy="7" r="6" strokeOpacity="0.4" />
      <path d="M4 7l2 2 4-4" />
    </svg>
  );
}

function WarnMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-amber-400 flex-shrink-0">
      <path d="M7 2l5.5 10H1.5z" />
      <path d="M7 6v3M7 11v.5" />
    </svg>
  );
}

function PendingMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-stone-500 flex-shrink-0">
      <circle cx="7" cy="7" r="6" strokeOpacity="0.4" />
    </svg>
  );
}

function Dot() {
  return <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400/80 flex-shrink-0" />;
}

function DocumentIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 2h7l3 3v9H3z" />
      <path d="M6 6h4M6 8h5M6 10h3" strokeWidth="1.1" opacity="0.7" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M2 14V4l6-2 6 2v10" />
      <path d="M5 14v-3h2v3M9 14v-3h2v3" />
      <path d="M5 6h2M9 6h2M5 8h2M9 8h2" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}
function CpuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="3" width="10" height="10" rx="1" />
      <rect x="6" y="6" width="4" height="4" strokeOpacity="0.7" />
      <path d="M3 6h-1M3 9h-1M14 6h-1M14 9h-1M6 3v-1M9 3v-1M6 14v-1M9 14v-1" strokeWidth="1.1" />
    </svg>
  );
}
function WrenchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M11 2a3 3 0 11-3 3l-5 5a2 2 0 102 2l5-5a3 3 0 011-5z" />
    </svg>
  );
}
function GemIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 6h10l-5 7z" />
      <path d="M5 3h6l2 3H3z" />
      <path d="M5 3l-2 3M11 3l2 3M3 6l5 7M13 6l-5 7M5 6h6" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}
function DatabaseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <ellipse cx="8" cy="3.5" rx="5" ry="1.5" />
      <path d="M3 3.5v9c0 .8 2.2 1.5 5 1.5s5-.7 5-1.5v-9" />
      <path d="M3 8c0 .8 2.2 1.5 5 1.5s5-.7 5-1.5" />
    </svg>
  );
}
function BrainIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M6 3a2.5 2.5 0 00-2 4 2.5 2.5 0 000 4 2.5 2.5 0 003 1 2.5 2.5 0 005 0 2.5 2.5 0 003-1 2.5 2.5 0 000-4 2.5 2.5 0 00-2-4 2.5 2.5 0 00-2-1 2.5 2.5 0 00-2 1 2.5 2.5 0 00-3 0z" />
      <path d="M6 7h1M9 7h1M6 10h4" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}
function ArchiveIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="2" y="3" width="12" height="3" />
      <path d="M3 6v8h10V6M6 9h4" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M8 2l5 2v5c0 3-2 5-5 5s-5-2-5-5V4z" />
      <path d="M5.5 8l2 2 3-3.5" strokeWidth="1.4" />
    </svg>
  );
}
function ReceiptIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 2v12l2-1 2 1 2-1 2 1 2-1V2z" />
      <path d="M5 5h6M5 7h6M5 9h4" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}
function PackageIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M2 5l6-3 6 3v6l-6 3-6-3z" />
      <path d="M2 5l6 3 6-3M8 8v6" strokeWidth="1.2" opacity="0.7" />
    </svg>
  );
}
