/**
 * /pair-factory — Pair Factory educational doctrine page
 *
 * Educational page. Not a new product vertical. Explains how DefendableOS
 * turns real-world evidence, observations, failures, contradictions and
 * validator decisions into trustworthy training/evaluation pairs that
 * improve AIOV and strengthen Defendable Deeds.
 *
 * Doctrine: "The failure is not discarded. The correction becomes the
 * training asset."
 *
 * Compute remains the commercial beachhead. This page supports credibility
 * and education without overpromoting above the Compute CTA.
 */
import { Link } from "react-router-dom";

const SALES_EMAIL = "build@swarmandbee.ai";
const COMPUTE_PROOF_RECORD = "/verify/ddeed-dov-compute-000001-v3";

const LIFECYCLE_BADGES = ["OBSERVE", "CLASSIFY", "CHALLENGE", "CORRECT", "PAIR", "VALIDATE"];

const PAIR_COMPONENTS = [
  {
    component: "Evidence Input",
    meaning: "A receipt, specification capture, benchmark, rental record, market observation, document or condition record",
  },
  {
    component: "Draft Claim",
    meaning: "What AIOV or a human analyst initially concludes",
  },
  {
    component: "Validator Challenge",
    meaning: "What is unsupported, stale, contradictory, private or misclassified",
  },
  {
    component: "Corrected Output",
    meaning: "The approved interpretation with proper disclosures",
  },
  {
    component: "Receipt / Source Class",
    meaning: "Why the correction can be trusted and reused",
  },
];

const COMPUTE_OBSERVATIONS = [
  {
    observation: "Marketplace listing shows an asking price",
    temptation: "This GPU is worth that amount.",
    correct: "Active listing observation only",
  },
  {
    observation: "Vast.ai shows a visible hourly listing rate",
    temptation: "This GPU earns that rate.",
    correct: "Rental market signal only",
  },
  {
    observation: "Founder captures an actual paid rental receipt",
    temptation: "This asset produced rental revenue during this period.",
    correct: "First-party rental evidence",
  },
  {
    observation: "nvidia-smi capture verifies memory and operational state",
    temptation: "This asset was operational when captured.",
    correct: "First-party operating evidence",
  },
  {
    observation: "Verified paid sale receipt exists",
    temptation: "This transaction may support a sold comp.",
    correct: "Verified transaction evidence subject to comparability review",
  },
];

const EDGE_PAIRS = [
  {
    input: "Device specification and power profile",
    challenge: "Official capability is not proof of founder deployment",
    corrected: "Label as specification/reference evidence",
  },
  {
    input: "Captured local vision or small-model workload test",
    challenge: "Was the test repeatable and source-tagged?",
    corrected: "Approve as workload utility evidence if complete",
  },
  {
    input: "Deployment context requiring offline/local processing",
    challenge: "Does the record prove actual operational use?",
    corrected: "Separate intended use from demonstrated use",
  },
];

const PIPELINE_STEPS = [
  {
    n: "1",
    name: "Capture",
    detail:
      "Sources enter the system: asset specifications · first-party receipts · operating captures · rental history · benchmark receipts · marketplace observations · partner-provided records · validator notes.",
  },
  {
    n: "2",
    name: "Classify",
    detail:
      "Evidence receives a truth class: first-party operating evidence · first-party rental receipt · active listing observation · rental utility signal · partner transaction evidence · verified sold comp · unsupported assertion · private-only evidence.",
  },
  {
    n: "3",
    name: "Challenge",
    detail:
      "The system asks · Is the claim actually supported? · Is evidence stale? · Is an active listing being misrepresented as a sale? · Is private information about to be exposed? · Is a capability claim untested? · Does the comp actually match the asset and deployment context?",
  },
  {
    n: "4",
    name: "Correct",
    detail: "Unsupported or overbroad conclusions are revised with proper scope and disclosures.",
  },
  {
    n: "5",
    name: "Pair",
    detail:
      "The evidence, failed claim, validator finding and corrected output become a structured learning pair.",
  },
  {
    n: "6",
    name: "Improve",
    detail:
      "Approved pairs improve · AIOV analysis quality · source grading · comp selection · disclosure discipline · validator consistency · future asset records.",
  },
  {
    n: "7",
    name: "Deed",
    detail: "Only approved, public-safe conclusions may move toward a Defendable Deed.",
  },
];

const PAIR_TYPES = [
  { type: "Identity Pair", teaches: "Correct asset identification from incomplete or conflicting evidence" },
  { type: "Comp Pair", teaches: "Difference between relevant comps, weak references and non-comparable observations" },
  { type: "Rental Pair", teaches: "Difference between listed rental rates, completed rentals and receipt-backed yield analysis" },
  { type: "Utility Pair", teaches: "What workload an asset can actually support when tested" },
  { type: "Disclosure Pair", teaches: "What can be safely shown publicly versus kept private" },
  { type: "Contradiction Pair", teaches: "How conflicting inputs are surfaced and resolved" },
  { type: "Lifecycle Pair", teaches: "Difference between draft, review, issued, transferred and retired records" },
  { type: "Failure Pair", teaches: "What the model or analyst got wrong and how it was corrected" },
];

const SYSTEM_LAYERS = [
  { layer: "ProductRadar", role: "Discovers observable signal and candidate assets" },
  { layer: "Pair Factory", role: "Converts evidence, conflicts and corrections into trusted learning pairs" },
  { layer: "AIOV", role: "Uses classified evidence and learned discipline to form draft opinions" },
  { layer: "Validator Workflow", role: "Challenges claims, checks evidence and controls disclosure" },
  { layer: "DefendableOS", role: "Governs records, lifecycle, provenance and public/private boundaries" },
  { layer: "Defendable Deed", role: "Ships the approved public-safe trust record" },
];

const PRIVACY_NEVER = [
  "Raw serial numbers",
  "Private invoices",
  "Customer documents",
  "Partner-confidential transaction records",
  "Rental payout receipts unless approved for disclosure",
  "Personal identifying information",
  "Unreleased asset records",
  "Private validator commentary",
  "Proprietary training corpora",
];

const PRIVACY_MAY = [
  "Educational examples",
  "Evidence classes",
  "Redacted/sample workflows",
  "Public-safe issued records",
  "Doctrine language",
  "Generic correction examples",
  "Hashes or lifecycle states where already public-safe",
];

const CLOSING_DOCTRINE = [
  "Signal begins the inquiry.",
  "Evidence grounds the claim.",
  "Challenge exposes the weakness.",
  "Correction creates the pair.",
  "Validation earns the trust.",
  "The Deed ships only what survives proof.",
];

// ─── Evidence Vault content ────────────────────────────────────────────────

const VAULT_CLASSES = [
  {
    name: "Private Evidence Vault",
    contains: "Invoices · serials · raw receipts · confidential partner/customer material · unredacted captures",
    publicStatus: "Never public by default",
  },
  {
    name: "Observation Vault",
    contains: "Timestamped marketplace/rental/reference observations and specification sources",
    publicStatus: "Source-classified · may support analysis",
  },
  {
    name: "Derived Intelligence Vault",
    contains: "Normalized comps · utility analyses · AIOV drafts · Pair Factory pairs · validator corrections",
    publicStatus: "Internal unless approved",
  },
  {
    name: "Public-Safe Export Vault",
    contains: "Issued deed manifests · approved summaries · lifecycle status · approved hash references",
    publicStatus: "Public only after validation",
  },
];

const EVIDENCE_FLOW_BADGES = [
  { stage: "CAPTURE", meaning: "The source artifact enters the system" },
  { stage: "STORE", meaning: "Evidence is preserved in the appropriate vault class" },
  { stage: "HASH", meaning: "A receipt identifies the captured artifact/version" },
  { stage: "CLASSIFY", meaning: "The system records what the evidence can and cannot prove" },
  { stage: "CHALLENGE", meaning: "Unsupported claims, conflicts and privacy risks are flagged" },
  { stage: "APPROVE", meaning: "Validator determines what may support the record" },
  { stage: "PUBLISH", meaning: "Only public-safe output becomes part of an issued deed" },
];

const VAULT_3090 = [
  { artifact: "Purchase receipt / ownership proof", vault: "Private Evidence Vault", supports: "Ownership / acquisition evidence", disclosure: "Private unless expressly approved" },
  { artifact: "Serial-number photograph", vault: "Private Evidence Vault", supports: "Identity matching", disclosure: "Raw serial never public by default" },
  { artifact: "nvidia-smi snapshot", vault: "Private or Derived Vault", supports: "Operating state at time captured", disclosure: "Redacted summary only if approved" },
  { artifact: "Vast.ai public listed-rate snapshot", vault: "Observation Vault", supports: "Rental market signal at timestamp", disclosure: "May show as observation, not paid yield" },
  { artifact: "Completed rental payout receipt", vault: "Private Evidence Vault", supports: "Actual paid utilization evidence", disclosure: "Approved derived summary only" },
  { artifact: "AIOV hold/rent/sell analysis", vault: "Derived Intelligence Vault", supports: "Draft recommendation", disclosure: "Internal until reviewed" },
  { artifact: "Validator-approved deed manifest", vault: "Public-Safe Export Vault", supports: "Approved trust record", disclosure: "Public if issued" },
];

const VAULT_JETSON = [
  { artifact: "Device identity and reference specification", vault: "Observation / Reference Vault", why: "Establishes expected hardware capability" },
  { artifact: "Captured runtime and power-mode snapshot", vault: "Private Evidence Vault", why: "Shows configuration at capture time" },
  { artifact: "Captured local workload test", vault: "Private / Derived Vault", why: "May prove demonstrated utility when reviewed" },
  { artifact: "Deployment purpose statement", vault: "Derived Intelligence Vault", why: "Documents intended role · not proven performance" },
  { artifact: "Validator-approved Edge Utility Record", vault: "Public-Safe Export Vault", why: "Communicates approved demonstrated utility" },
];

const VAULT_COMPOUNDS = [
  "Classified observation history",
  "Asset condition patterns",
  "Useful-workload evidence",
  "Rental utility receipts",
  "Verified paid comps",
  "Validator corrections",
  "Lifecycle events",
  "Public-safe deed histories",
];

export default function DefendablePairFactory() {
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
              Pair Factory · Doctrine
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link to="/" className="text-stone-400 hover:text-stone-200">Home</Link>
          <Link to="/compute" className="text-stone-400 hover:text-stone-200">Compute</Link>
          <Link to="/open" className="text-stone-400 hover:text-stone-200">Open Infra</Link>
          <Link to="/ledger" className="text-stone-400 hover:text-stone-200">Ledger</Link>
          <a href={`mailto:${SALES_EMAIL}`} className="text-honey-300 font-semibold hover:text-honey-200">Contact</a>
        </nav>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-14 md:py-20 space-y-20">
        {/* Section 1 · Hero */}
        <section>
          <div className="text-[10px] tracking-[0.28em] uppercase text-honey-400 font-semibold mb-4">
            DefendableOS · Doctrine
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-stone-100 leading-[1.02]">
            Pair Factory
          </h1>
          <p className="mt-5 text-2xl md:text-3xl text-honey-300 font-serif italic tracking-tight">
            Where raw evidence becomes trusted intelligence.
          </p>
          <p className="mt-7 text-stone-300 text-lg leading-relaxed max-w-3xl">
            DefendableOS does not treat every observation as truth. A marketplace listing, a
            rental signal, an operating receipt, a validator correction and a verified
            transaction each carry different evidentiary weight. Pair Factory converts those
            distinctions into structured learning pairs that help AIOV reason better and help
            DefendableOS issue stronger records.
          </p>

          {/* Lifecycle badges */}
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
              Explore Defendable Compute →
            </Link>
            <Link
              to="/open"
              className="inline-flex items-center px-5 py-2.5 rounded border border-stone-700 text-stone-300 hover:text-stone-100 hover:border-stone-500 transition-colors text-sm font-semibold"
            >
              View the Validation Doctrine
            </Link>
          </div>
        </section>

        {/* Section 2 · What is a Pair */}
        <Section
          kicker="01 · The unit"
          title="What is a pair?"
          sub="A pair is a structured learning example built from an input, an analysis or claim, and a verified outcome or correction. Pair Factory does not manufacture truth · it records the difference between what was observed, what was claimed, what was challenged and what survived validation."
        >
          <div className="rounded-lg border border-stone-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900/60 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold w-[34%]">Pair Component</th>
                  <th className="text-left px-5 py-3 font-semibold">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {PAIR_COMPONENTS.map((row, i) => (
                  <tr key={row.component} className={i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/20"}>
                    <td className="px-5 py-4 align-top text-honey-300 font-semibold text-sm">{row.component}</td>
                    <td className="px-5 py-4 align-top text-stone-300 leading-snug">{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Section 3 · Compute example */}
        <Section
          kicker="02 · Compute example"
          title="One GPU · many evidence types"
          sub="The classic case: a prior-generation workhorse such as an RTX 3090-class 24GB GPU produces many kinds of signal. Each must be classified correctly before it can support a claim."
        >
          <div className="mb-5">
            <DisclosurePill>EDUCATIONAL EXAMPLE · NOT A LIVE VALUATION · NOT AN ISSUED DEED</DisclosurePill>
          </div>
          <div className="rounded-lg border border-stone-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900/60 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Observation</th>
                  <th className="text-left px-5 py-3 font-semibold">Initial Temptation</th>
                  <th className="text-left px-5 py-3 font-semibold">Correct Classification</th>
                </tr>
              </thead>
              <tbody>
                {COMPUTE_OBSERVATIONS.map((row, i) => (
                  <tr key={row.observation} className={i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/20"}>
                    <td className="px-5 py-4 align-top text-stone-200 text-sm leading-snug">{row.observation}</td>
                    <td className="px-5 py-4 align-top text-stone-500 text-sm italic leading-snug">"{row.temptation}"</td>
                    <td className="px-5 py-4 align-top text-honey-300 text-sm font-semibold leading-snug">{row.correct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <DoctrineBlock>
            <p>Listed is not sold.</p>
            <p>Offered is not rented.</p>
            <p>Rented is not future yield.</p>
            <p>Operational is not valuable without context.</p>
            <p>Proof is what survives review.</p>
          </DoctrineBlock>
        </Section>

        {/* Section 4 · Edge example */}
        <Section
          kicker="03 · Edge example"
          title="Small hardware · real utility"
          sub="Pair Factory is not limited to expensive GPUs. An affordable edge device may carry real utility through low power, local privacy, sensor integration, offline execution or persistent deployment · its utility must be established by evidence appropriate to its role."
        >
          <div className="mb-5">
            <DisclosurePill>EDUCATIONAL EXAMPLE · CAPABILITY REQUIRES CAPTURED WORKLOAD EVIDENCE</DisclosurePill>
          </div>
          <div className="rounded-lg border border-stone-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900/60 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Input</th>
                  <th className="text-left px-5 py-3 font-semibold">Challenge</th>
                  <th className="text-left px-5 py-3 font-semibold">Corrected Learning Pair</th>
                </tr>
              </thead>
              <tbody>
                {EDGE_PAIRS.map((row, i) => (
                  <tr key={row.input} className={i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/20"}>
                    <td className="px-5 py-4 align-top text-stone-200 text-sm leading-snug">{row.input}</td>
                    <td className="px-5 py-4 align-top text-stone-500 text-sm italic leading-snug">{row.challenge}</td>
                    <td className="px-5 py-4 align-top text-honey-300 text-sm font-semibold leading-snug">{row.corrected}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <DoctrineBlock>
            <p>A small device is not lesser evidence. It is a different compute role requiring the right proof.</p>
          </DoctrineBlock>
        </Section>

        {/* Section 5 · Pipeline */}
        <Section
          kicker="04 · The pipeline"
          title="From capture to deed · seven stages"
          sub="The pipeline is doctrine, not branding. Each stage gates the next. A failure at any step prevents the record from advancing."
        >
          <ol className="space-y-3">
            {PIPELINE_STEPS.map((s) => (
              <li
                key={s.n}
                className="rounded-lg border border-stone-800 bg-neutral-900/30 p-5 flex gap-5 items-start"
              >
                <span className="inline-flex w-9 h-9 shrink-0 rounded border border-honey-300/40 bg-honey-300/[0.06] items-center justify-center text-honey-300 text-sm font-mono">
                  {s.n}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-stone-100 font-semibold text-base tracking-tight mb-1">{s.name}</div>
                  <div className="text-stone-400 text-sm leading-relaxed">{s.detail}</div>
                </div>
              </li>
            ))}
          </ol>
          <DoctrineBlock>
            <p>The failure is not discarded. The correction becomes the training asset.</p>
          </DoctrineBlock>
        </Section>

        {/* Section 6 · Pair Types */}
        <Section
          kicker="05 · Pair types"
          title="Eight categories of learning"
          sub="The strongest dataset is not a collection of confident answers. It is a collection of proven corrections."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PAIR_TYPES.map((p) => (
              <div key={p.type} className="rounded-lg border border-stone-800 bg-neutral-900/30 p-5">
                <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-1">pair type</div>
                <div className="text-stone-100 font-semibold mb-2">{p.type}</div>
                <div className="text-stone-400 text-sm leading-relaxed">{p.teaches}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 7 · System layers */}
        <Section
          kicker="06 · Where Pair Factory sits"
          title="Six layers · one operating system"
          sub="ProductRadar finds what deserves attention. Pair Factory teaches the system what survives proof. AIOV forms the opinion. DefendableOS validates the evidence. The Defendable Deed ships the trust."
        >
          <div className="rounded-lg border border-stone-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900/60 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold w-[30%]">Layer</th>
                  <th className="text-left px-5 py-3 font-semibold">Role</th>
                </tr>
              </thead>
              <tbody>
                {SYSTEM_LAYERS.map((row, i) => (
                  <tr key={row.layer} className={i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/20"}>
                    <td className="px-5 py-4 align-top text-honey-300 font-semibold text-sm">{row.layer}</td>
                    <td className="px-5 py-4 align-top text-stone-300 leading-snug">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Section 8 · Privacy */}
        <Section
          kicker="07 · Privacy discipline"
          title="What the system never publishes · and what it may"
          sub="Private evidence can teach the system under controlled rights and disclosure rules without becoming public evidence."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-lg border border-stone-800 bg-neutral-900/30 p-6">
              <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-3">Pair Factory must never expose</div>
              <ul className="space-y-1.5 text-sm text-stone-300">
                {PRIVACY_NEVER.map((item) => (
                  <li key={item} className="leading-snug">· {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-honey-300/20 bg-gradient-to-br from-honey-300/[0.04] to-transparent p-6">
              <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-3">The public page may show</div>
              <ul className="space-y-1.5 text-sm text-stone-300">
                {PRIVACY_MAY.map((item) => (
                  <li key={item} className="leading-snug">· {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Section 9 · Evidence Vault · the source-of-truth storage layer */}
        <Section
          kicker="08 · The Evidence Vault"
          title="Where proof lives"
          sub="The model can form an opinion. The vault must preserve the proof. Every useful pair begins with source-classified artifacts · receipts · operating snapshots · benchmarks · market observations · validator findings · corrected outputs · public-safe deed manifests."
        >
          {/* Evidence flow badges */}
          <div className="mb-8 flex flex-wrap gap-2">
            {EVIDENCE_FLOW_BADGES.map((b, i) => (
              <span key={b.stage} className="inline-flex items-center" title={b.meaning}>
                <span className="inline-flex items-center px-3 py-1.5 rounded border border-honey-300/30 bg-honey-300/[0.04] text-honey-300 text-[10px] tracking-[0.22em] font-semibold uppercase">
                  {b.stage}
                </span>
                {i < EVIDENCE_FLOW_BADGES.length - 1 ? (
                  <span aria-hidden className="text-stone-700 mx-1">→</span>
                ) : null}
              </span>
            ))}
          </div>

          {/* 4 Vault Classes */}
          <div className="rounded-lg border border-stone-800 overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900/60 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Vault Class</th>
                  <th className="text-left px-5 py-3 font-semibold">What It Contains</th>
                  <th className="text-left px-5 py-3 font-semibold">Public Status</th>
                </tr>
              </thead>
              <tbody>
                {VAULT_CLASSES.map((v, i) => (
                  <tr key={v.name} className={i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/20"}>
                    <td className="px-5 py-4 align-top text-honey-300 font-semibold text-sm leading-snug">{v.name}</td>
                    <td className="px-5 py-4 align-top text-stone-300 text-sm leading-snug">{v.contains}</td>
                    <td className="px-5 py-4 align-top text-stone-400 text-xs font-semibold tracking-wider uppercase leading-snug">{v.publicStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Stored is not proven callout */}
          <DoctrineBlock>
            <p>A stored file is not automatically a proven claim. Evidence must still be classified, challenged and approved before it supports a public record.</p>
          </DoctrineBlock>

          {/* RTX 3090 worked example */}
          <div className="mt-12">
            <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-2">Compute example · RTX 3090-class 24GB workhorse</div>
            <div className="mb-4">
              <DisclosurePill>EDUCATIONAL EXAMPLE · NOT A LIVE VALUATION · NOT AN ISSUED DEED</DisclosurePill>
            </div>
            <div className="rounded-lg border border-stone-800 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-neutral-900/60 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold">Artifact</th>
                    <th className="text-left px-5 py-3 font-semibold">Vault Class</th>
                    <th className="text-left px-5 py-3 font-semibold">What It Can Support</th>
                    <th className="text-left px-5 py-3 font-semibold">Public Disclosure</th>
                  </tr>
                </thead>
                <tbody>
                  {VAULT_3090.map((row, i) => (
                    <tr key={row.artifact} className={i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/20"}>
                      <td className="px-5 py-3 align-top text-stone-200 text-sm leading-snug">{row.artifact}</td>
                      <td className="px-5 py-3 align-top text-honey-300 text-xs font-semibold leading-snug">{row.vault}</td>
                      <td className="px-5 py-3 align-top text-stone-300 text-xs leading-snug">{row.supports}</td>
                      <td className="px-5 py-3 align-top text-stone-400 text-xs leading-snug">{row.disclosure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <DoctrineBlock>
              <p>Listed is not rented.</p>
              <p>Rented is not guaranteed future yield.</p>
              <p>Stored is not automatically proven.</p>
              <p>Public is only what survived validation.</p>
            </DoctrineBlock>
          </div>

          {/* Jetson worked example */}
          <div className="mt-12">
            <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-2">Edge example · Jetson Orin Nano-class device</div>
            <div className="mb-4">
              <DisclosurePill>EDUCATIONAL EXAMPLE · UTILITY REQUIRES CAPTURED WORKLOAD EVIDENCE</DisclosurePill>
            </div>
            <div className="rounded-lg border border-stone-800 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-neutral-900/60 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold">Artifact</th>
                    <th className="text-left px-5 py-3 font-semibold">Vault Class</th>
                    <th className="text-left px-5 py-3 font-semibold">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {VAULT_JETSON.map((row, i) => (
                    <tr key={row.artifact} className={i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/20"}>
                      <td className="px-5 py-3 align-top text-stone-200 text-sm leading-snug">{row.artifact}</td>
                      <td className="px-5 py-3 align-top text-honey-300 text-xs font-semibold leading-snug">{row.vault}</td>
                      <td className="px-5 py-3 align-top text-stone-300 text-sm leading-snug">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <DoctrineBlock>
              <p>Affordable compute becomes defendable compute when its actual role and tested utility are preserved as evidence.</p>
            </DoctrineBlock>
          </div>

          {/* Why the Vault Compounds */}
          <div className="mt-12 rounded-lg border border-honey-300/20 bg-gradient-to-br from-honey-300/[0.04] to-transparent p-6 md:p-8">
            <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-3">Why the vault compounds</div>
            <h3 className="text-xl md:text-2xl font-semibold text-stone-100 tracking-tight mb-3">
              Every preserved trail expands the next defendable opinion.
            </h3>
            <p className="text-stone-400 leading-relaxed mb-5 max-w-3xl">
              Subject to rights and disclosure controls, the platform may accumulate · over
              time · across deeds ·
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-stone-300 mb-5">
              {VAULT_COMPOUNDS.map((item) => (
                <li key={item} className="leading-snug">· {item}</li>
              ))}
            </ul>
            <p className="text-stone-400 text-sm leading-relaxed italic max-w-3xl">
              Where evidence rights and disclosure controls permit, validated outcomes and
              corrections can become reusable intelligence for improving future analysis and
              record quality.
            </p>
          </div>
        </Section>

        {/* Section 10 · CTA · tied to Compute */}
        <section className="rounded-lg border border-honey-300/20 bg-gradient-to-br from-honey-300/[0.05] to-transparent p-6 md:p-10">
          <div className="text-[10px] tracking-[0.28em] uppercase text-honey-400 font-semibold mb-3">
            09 · From doctrine to deed
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-100">
            Start with an asset. Leave with proof.
          </h2>
          <p className="mt-4 text-stone-300 max-w-3xl leading-relaxed text-base">
            Defendable Compute begins with real hardware evidence — from edge devices and
            workhorse GPUs to premium AI infrastructure and complete producing nodes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={COMPUTE_PROOF_RECORD}
              className="inline-flex items-center px-5 py-2.5 rounded border border-honey-300/40 bg-honey-300/10 text-honey-200 hover:bg-honey-300/20 hover:border-honey-300/70 transition-colors text-sm font-semibold"
            >
              View the Compute Proof Record →
            </Link>
            <a
              href={`mailto:${SALES_EMAIL}?subject=Defendable%20Compute%20Founding%20Pilot`}
              className="inline-flex items-center px-5 py-2.5 rounded border border-stone-700 text-stone-300 hover:text-stone-100 hover:border-stone-500 transition-colors text-sm font-semibold"
            >
              Request a Founding Pilot
            </a>
          </div>
        </section>

        {/* Closing doctrine */}
        <section className="border-t border-stone-900/80 pt-12">
          <div className="text-[10px] tracking-[0.28em] uppercase text-stone-500 font-semibold mb-4 text-center">
            Pair Factory · Closing Doctrine
          </div>
          <div className="text-center space-y-2">
            {CLOSING_DOCTRINE.map((line) => (
              <p key={line} className="text-stone-300 text-lg md:text-xl font-serif italic tracking-tight">
                {line}
              </p>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 px-6 py-8 border-t border-stone-900/80 mt-16">
        <div className="max-w-5xl mx-auto text-xs text-stone-500 leading-relaxed">
          © 2026 Swarm and Bee LLC · DBA Swarm & Bee AI · D-U-N-S 138652395.
          DefendableOS™ · Proof of Value™ · Validate the Validator™ · AIOV™ · Defendable Deed™
          are unregistered trademarks. Pair Factory is an educational doctrine surface ·
          examples shown are illustrative · evidence classification reflects the actual
          discipline that gates every issued record.
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

function DisclosurePill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded border border-stone-700 bg-stone-900/60 text-stone-400 text-[10px] tracking-[0.18em] font-semibold uppercase">
      {children}
    </span>
  );
}

function DoctrineBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 border-l-2 border-honey-300/40 pl-5 py-2 text-stone-300 font-serif italic text-base md:text-lg leading-relaxed space-y-1">
      {children}
    </div>
  );
}
