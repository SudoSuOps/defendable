// /honeybox · the physical edge defense appliance
//
// $250-2,500 Jetson family appliance · sits on customer LAN · raw data
// NEVER leaves · ENS-registered per agent · local Tribunal + deed
// issuance · the regulated-industry wedge.

import { Footer, Header } from "../components/SiteShell";

const SALES_EMAIL = "defense@defendableos.com";

export default function HoneyBox() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <BackgroundGrid />
      <Header />
      <main>
        <Hero />
        <PhysicsSection />
        <TiersSection />
        <PrivacyGradients />
        <RegulatedWedge />
        <MriExample />
        <SetupFlow />
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

function Hero() {
  return (
    <section className="relative border-b border-stone-900/80">
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-amber-500/[0.04] via-amber-500/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-20 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
          <div>
            <Eyebrow>HONEYBOX · EDGE DEFENSE APPLIANCE</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-50 leading-[1.05]">
              The defense layer{" "}
              <span className="font-serif italic font-normal text-amber-300">lives</span>{" "}
              on your premises.
            </h1>
            <p className="mt-8 text-lg text-stone-300 leading-relaxed max-w-xl">
              An NVIDIA Jetson appliance · sits on your network · receives
              task pings from every AI agent in your business · stores
              receipts locally · runs the Tribunal locally · issues deeds
              locally. Raw data{" "}
              <span className="text-amber-300 font-semibold">never</span>{" "}
              leaves the box.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${SALES_EMAIL}?subject=Order%20a%20HoneyBox`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-amber-400 text-neutral-950 text-sm font-semibold tracking-tight hover:bg-amber-300 transition-colors"
              >
                Order a HoneyBox
                <Arrow />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-700 text-sm text-stone-200 font-semibold tracking-tight hover:border-stone-500 hover:text-stone-50 transition-colors"
              >
                See pricing
              </a>
            </div>
            <p className="mt-8 text-xs text-stone-500 tracking-tight max-w-md leading-relaxed">
              Leased · tax-deductible · off balance sheet · 5-minute
              CFO sign-off · no procurement cycle.
            </p>
          </div>

          <BoxCard />
        </div>
      </div>
    </section>
  );
}

function BoxCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-amber-500/[0.03] blur-3xl pointer-events-none" />
      <div className="relative rounded-xl border border-stone-700/70 bg-gradient-to-br from-stone-900/90 to-neutral-950 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-3 border-b border-stone-800 bg-neutral-950/60">
          <div className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.18em] text-stone-400 font-semibold">
            <BoxIcon />
            HoneyBox · Specification
          </div>
          <span className="text-[10px] uppercase tracking-[0.18em] text-amber-300/90 font-semibold">
            Jetson Orin Nano · Default Tier
          </span>
        </div>

        <div className="px-6 py-5 border-b border-stone-800/70">
          <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-2 font-semibold">Hardware</div>
          <div className="text-base font-semibold text-stone-100 leading-snug">
            NVIDIA Jetson Orin Nano · 8 GB LPDDR5
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
            <Field label="GPU" value="Ampere · 1024 CUDA" />
            <Field label="Power" value="~20 W · USB-C PD" />
            <Field label="Network" value="Ethernet + WiFi" />
            <Field label="Storage" value="M.2 NVMe slot" />
          </div>
        </div>

        <div className="px-6 py-5 grid grid-cols-1 gap-2.5">
          {[
            "Local SQLite ledger per agent",
            "Local rule-layer Tribunal (always)",
            "Local LLM judge (Phi-3 · Qwen 1.5B option)",
            "Local Daily Reconciliation Deed",
            "ENS-registered identity per agent",
            "TPM-backed signing key per agent",
          ].map((line) => (
            <div
              key={line}
              className="flex items-center gap-2 px-3 py-2.5 rounded border border-amber-500/25 bg-amber-500/[0.04] text-xs text-stone-200"
            >
              <CheckMark />
              <span>{line}</span>
            </div>
          ))}
        </div>

        <div className="px-6 py-4 border-t border-stone-800/70 bg-neutral-950/60 flex items-center justify-between text-[11px]">
          <div className="text-stone-400">
            Setup fee <span className="text-stone-200 font-mono">$399</span>
          </div>
          <div className="text-stone-400">
            Lease <span className="text-amber-300 font-mono">$10 / mo</span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-[10px] text-stone-500 tracking-tight text-center">
        Larger tiers available · AGX Orin · Workstation w/ RTX 6000 · DGX-class.
      </p>
    </div>
  );
}

function PhysicsSection() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>HOW IT WORKS</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            One box.{" "}
            <span className="font-serif italic font-normal text-amber-300">Every agent.</span>{" "}
            All your receipts.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Step n="01" head="Capture" body="Every AI agent in your business pings the HoneyBox over HTTPS at task completion. Any framework · any vendor · any OS." />
          <Step n="02" head="Store" body="Per-agent SQLite ledger on the box's NVMe SSD. Every play receipted with SHA-256. Years of capacity per box." />
          <Step n="03" head="Reconcile" body="Nightly cron at 2am. Batch-grades all plays through the Tribunal. Pattern-clusters the flags into liens." />
          <Step n="04" head="Brief" body="By 6am the Morning Brief lands in your inbox. One email. Yesterday's deeds. Liens to clear. Trends." />
        </div>
      </div>
    </section>
  );
}

function TiersSection() {
  const tiers = [
    {
      name: "Jetson Orin Nano",
      bullet: "Default SMB tier",
      setup: "$399",
      lease: "$10 / mo",
      ram: "8 GB",
      ideal: "Up to ~10 agents · ~50K plays/month · most small businesses",
    },
    {
      name: "Jetson AGX Orin",
      bullet: "Mid-market / regulated",
      setup: "$999",
      lease: "$50 / mo",
      ram: "64 GB",
      ideal: "Up to ~50 agents · ~500K plays/month · imaging centers · mid-size firms",
    },
    {
      name: "Workstation · RTX 6000",
      bullet: "Heavy compute · local 70B judge",
      setup: "$2,500",
      lease: "$200 / mo",
      ram: "96 GB VRAM",
      ideal: "High-volume fleets · regulated industries running local frontier-model judging",
    },
    {
      name: "DGX-class · enterprise",
      bullet: "Air-gap · sovereign deployment",
      setup: "Quote",
      lease: "Quote",
      ram: "Multi-card",
      ideal: "Government · defense · financial services with strict isolation requirements",
    },
  ];
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>HARDWARE TIERS</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Right-sized to{" "}
            <span className="font-serif italic font-normal text-amber-300">your fleet</span>.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            Start with the Nano. Move up the tier when you outgrow it.
            Lease structure stays the same · only the appliance changes.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-stone-800 bg-neutral-950/60 px-6 py-7"
            >
              <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-semibold">{t.bullet}</div>
              <div className="mt-2 text-xl font-semibold tracking-tight text-stone-100">{t.name}</div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
                <Field label="Setup" value={t.setup} />
                <Field label="Lease" value={t.lease} />
                <Field label="RAM" value={t.ram} />
              </div>
              <p className="mt-5 text-sm text-stone-400 leading-relaxed">{t.ideal}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrivacyGradients() {
  const grads = [
    {
      label: "Inside the HoneyBox",
      contents: "Raw task content · per-play receipts · customer data · agent decisions · evidence",
      access: "Customer only · Defendable NEVER unless per-pull authorization",
      tone: "honey",
    },
    {
      label: "Outbound ping",
      contents: "Anonymized counts · severity flags · deed SHA-256 · NO content",
      access: "Defendable cloud (notification rail only)",
      tone: "mid",
    },
    {
      label: "Cloud-side derived",
      contents: "Daily deed · grades · lien types · workout plans · NO PII",
      access: "Defendable + your compliance subdomain (compliance.you.defendable.eth)",
      tone: "muted",
    },
  ];
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>PRIVACY GRADIENTS</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Three layers.{" "}
            <span className="font-serif italic font-normal text-amber-300">Raw data stays put.</span>
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            The HoneyBox sends ONE thing automatically: a signed
            metadata ping that says "I have N liens · come look."
            Defendable cannot see customer data unless the customer
            authorizes a per-pull review · every pull is time-bounded
            and audit-logged.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {grads.map((g) => (
            <div
              key={g.label}
              className={`rounded-xl border px-6 py-6 ${
                g.tone === "honey"
                  ? "border-amber-500/40 bg-amber-500/[0.06]"
                  : g.tone === "mid"
                    ? "border-stone-700 bg-stone-900/40"
                    : "border-stone-800 bg-neutral-950/40"
              }`}
            >
              <div className="grid lg:grid-cols-[1fr_1.5fr_1.5fr] gap-5 items-start">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-semibold">Gradient</div>
                  <div className="mt-2 text-base font-semibold text-stone-100">{g.label}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold">Contents</div>
                  <div className="mt-2 text-sm text-stone-300 leading-relaxed">{g.contents}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold">Who can see</div>
                  <div className="mt-2 text-sm text-stone-300 leading-relaxed">{g.access}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegulatedWedge() {
  const industries = [
    { label: "Healthcare", reqs: "HIPAA · BAA · PHI residency" },
    { label: "Financial services", reqs: "SOC2 · GLBA · PCI-DSS" },
    { label: "Government", reqs: "FedRAMP · CJIS · IL2-5" },
    { label: "Defense", reqs: "ITAR · CMMC · DoD impact levels" },
    { label: "Legal (BigLaw)", reqs: "Privilege · client confidentiality" },
    { label: "Insurance carriers", reqs: "NAIC · solvency audit trail" },
  ];
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>WHO IT UNLOCKS</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Markets that{" "}
            <span className="font-serif italic font-normal text-amber-300">cannot use cloud-only AI tools</span>.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            Cloud AI observability vendors (Helicone · Langfuse ·
            Portkey · Cloudflare AI Gateway · LangSmith) are
            categorically barred from these industries because customer
            data has to leave the buyer's network. The HoneyBox solves
            this entirely · the data never moves.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((i) => (
            <div key={i.label} className="rounded-xl border border-stone-800 bg-neutral-950/60 px-5 py-5">
              <div className="text-base font-semibold text-stone-100">{i.label}</div>
              <div className="mt-2 text-xs text-stone-400 font-mono">{i.reqs}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MriExample() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>WORKED EXAMPLE</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Mid-sized imaging center.{" "}
            <span className="font-serif italic font-normal text-amber-300">Real numbers.</span>
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            8 radiologists · 4 AI agents (preliminary read · prior auth ·
            billing reconciliation · scheduling) · regulated · insured ·
            audit-heavy.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.1fr_1fr] gap-6">
          <div className="rounded-xl border border-stone-800 bg-neutral-950/60 px-6 py-7 lg:px-7 lg:py-8">
            <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-semibold mb-5">
              5-year ledger
            </div>
            <div className="space-y-3 font-mono text-xs lg:text-sm">
              <LedgerLine label="Setup (AGX Orin + HIPAA BAA + radiology pack)" value="$4,999" />
              <LedgerLine label="Box lease ($50/mo × 60 mo)" value="$3,000" />
              <LedgerLine label="4 agents Managed Fixers ($396/mo × 60)" value="$23,760" />
              <LedgerLine label="8 compliance seats ($200/mo × 60)" value="$12,000" />
              <LedgerLine label="HIPAA quarterly audit export ($100/mo × 60)" value="$6,000" />
              <LedgerLine label="Insurance carrier feed ($200/mo × 60)" value="$12,000" />
              <div className="border-t border-stone-800 pt-3 flex justify-between">
                <span className="text-stone-200 font-semibold">5-year total</span>
                <span className="text-amber-300 font-semibold">$61,759</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-amber-500/40 bg-amber-500/[0.04] px-6 py-7 lg:px-7 lg:py-8">
            <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300 font-semibold mb-5">
              What the customer gets
            </div>
            <ul className="space-y-3 text-sm text-stone-200 leading-relaxed">
              {[
                "Every radiology AI read receipted · 5-year ledger",
                "Daily reconciliation deed per agent",
                "Liens triaged and worked-out by Managed Fixers",
                "HIPAA-safe audit export for CMS / Joint Commission",
                "Malpractice carrier integration · premium-discount eligible",
                "All artifacts on-premises · HoneyBox holds the vault",
                "Tax-deductible OpEx · off balance sheet",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span className="mt-1.5 inline-block w-1 h-1 rounded-full bg-amber-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 pt-5 border-t border-amber-500/20 text-xs text-stone-400 italic leading-relaxed">
              Less than one malpractice claim · less than what they pay
              for their PACS system · sells itself to the CFO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SetupFlow() {
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>SETUP · &lt; 10 MINUTES</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Plug in.{" "}
            <span className="font-serif italic font-normal text-amber-300">Scan a QR.</span>{" "}
            Done.
          </h2>
        </div>

        <ol className="mt-12 space-y-4">
          {[
            ["01", "Receive the HoneyBox", "Arrives pre-flashed with your ENS subdomain registered · DOA-free QA."],
            ["02", "Plug into the network", "DHCP discovers it · no static config required."],
            ["03", "Scan the QR code", "Mobile config wizard · 4 questions · 90 seconds."],
            ["04", "Point your agents at the endpoint", "One config line per agent (HTTPS URL of the box)."],
            ["05", "Sleep through the first night", "Reconciliation runs at 2am · brief delivered by 6am."],
            ["06", "Read the deed over coffee", "Approve any open liens · the rest takes care of itself."],
          ].map(([n, h, b]) => (
            <li key={n as string} className="grid grid-cols-[3rem_1fr] gap-5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-amber-300/80 font-mono pt-1">{n}</div>
              <div className="border-b border-stone-900/60 pb-4">
                <div className="text-base font-semibold text-stone-100">{h}</div>
                <div className="mt-1.5 text-sm text-stone-400 leading-relaxed">{b}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="rounded-2xl border border-stone-800 bg-gradient-to-br from-stone-900/80 to-neutral-950 px-8 py-12 lg:px-14 lg:py-16">
          <Eyebrow>READY</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 leading-tight max-w-3xl">
            Order a HoneyBox.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed max-w-2xl">
            Founder-friendly credit-card purchase · $399 setup · $10/mo
            box lease · $29-99/agent/mo. Ships in ~5 business days.
            Or talk to us if your fleet needs the AGX or RTX 6000 tier.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${SALES_EMAIL}?subject=Order%20a%20HoneyBox`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-amber-400 text-neutral-950 text-sm font-semibold tracking-tight hover:bg-amber-300 transition-colors"
            >
              Order a HoneyBox
              <Arrow />
            </a>
            <a
              href={`mailto:${SALES_EMAIL}?subject=HoneyBox%20Enterprise%20Tier`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-700 text-sm text-stone-200 font-semibold tracking-tight hover:border-stone-500 hover:text-stone-50 transition-colors"
            >
              Enterprise / DGX
            </a>
            <a
              href="/cloud"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-800 text-sm text-stone-400 font-semibold tracking-tight hover:text-stone-200 transition-colors"
            >
              Or use DefendableCloud
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── building blocks (mirror the homepage style) ───────────────────────────
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

function Step({ n, head, body }: { n: string; head: string; body: string }) {
  return (
    <div className="rounded-xl border border-stone-800 bg-neutral-950/60 px-5 py-6">
      <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-mono">{n}</div>
      <div className="mt-2 text-base font-semibold text-stone-100">{head}</div>
      <p className="mt-2 text-sm text-stone-400 leading-relaxed">{body}</p>
    </div>
  );
}

function LedgerLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-stone-400">{label}</span>
      <span className="text-stone-200">{value}</span>
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

function CheckMark() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-emerald-400">
      <path d="M2 6.5l2.5 2.5L10 3.5" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="1.5" y="2.5" width="11" height="9" rx="1" />
      <path d="M1.5 5h11" />
      <circle cx="7" cy="8.5" r="0.7" fill="currentColor" />
    </svg>
  );
}
