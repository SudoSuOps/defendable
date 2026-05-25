// /pricing · transparent pricing for both deployment modes
//
// HoneyBox lease structure + DefendableCloud token pricing + Fixer tiers +
// MRI center worked example.

import { Footer, Header } from "../components/SiteShell";

const SALES_EMAIL = "build@swarmandbee.ai";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <BackgroundGrid />
      <Header />
      <main>
        <Hero />
        <DeploymentPricing />
        <FixerTiers />
        <MriWorkedExample />
        <FAQ />
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
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-3xl">
          <Eyebrow>PRICING · TRANSPARENT</Eyebrow>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-50 leading-[1.05]">
            Founder-friendly.{" "}
            <span className="font-serif italic font-normal text-amber-300">CFO-defensible.</span>
          </h1>
          <p className="mt-8 text-lg text-stone-300 leading-relaxed">
            Two deployment modes · same defense doctrine. Both priced
            for clarity. Both tax-deductible operating expense. Both
            sellable to procurement without a 9-month cycle.
          </p>
        </div>
      </div>
    </section>
  );
}

function DeploymentPricing() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* HoneyBox column */}
          <PricingColumn
            title="HoneyBox"
            subtitle="Edge mode · physical appliance"
            href="/honeybox"
            rows={[
              { kind: "setup", label: "Setup fee", value: "$399", note: "Default Jetson Orin Nano tier" },
              { kind: "lease", label: "Box lease", value: "$10 / mo", note: "Per box · 5-year refresh included" },
              { kind: "agent", label: "Per-agent base monitoring", value: "$29 / mo", note: "Includes per-task deeds + nightly reconciliation" },
            ]}
            extras={[
              ["AGX Orin tier (mid-market)", "$999 setup · $50/mo lease"],
              ["RTX 6000 Workstation tier", "$2,500 setup · $200/mo lease"],
              ["DGX-class · enterprise", "Quote"],
              ["HIPAA BAA · onboarding", "$1,500 one-time"],
              ["Compliance seat (each)", "$25 / mo"],
              ["Audit-trail quarterly export", "$100 / mo"],
            ]}
            footnote="Lease structure · 100% operating expense · off balance sheet."
          />

          {/* DefendableCloud column */}
          <PricingColumn
            title="DefendableCloud"
            subtitle="Cloud mode · our compute"
            href="/cloud"
            tone="honey"
            rows={[
              { kind: "setup", label: "Setup fee", value: "$0", note: "Pay-as-you-go · no minimum commit" },
              { kind: "lease", label: "General-tier inference", value: "$5 / M tokens", note: "Qwen 32B · Mixtral · Phi-4 · Llama 70B" },
              { kind: "agent", label: "Per-agent monitoring", value: "$29-99 / mo", note: "Optional · same Tribunal + deed pipeline" },
            ]}
            extras={[
              ["Frontier tier (DeepSeek V3 · 70B long-ctx)", "$10 / M tokens"],
              ["Custom checkpoint (BYO fine-tune)", "Quote"],
              ["Dedicated capacity reservation", "Quote"],
              ["BAA · standard", "Included"],
              ["SOC2 attestation", "Included"],
            ]}
            footnote="OpenAI-SDK compatible · drop-in base_url change."
          />
        </div>
      </div>
    </section>
  );
}

function PricingColumn({
  title, subtitle, href, rows, extras, footnote, tone,
}: {
  title: string;
  subtitle: string;
  href: string;
  rows: { kind: string; label: string; value: string; note: string }[];
  extras: [string, string][];
  footnote: string;
  tone?: "honey";
}) {
  const isHoney = tone === "honey";
  return (
    <div className={`rounded-xl border px-8 py-9 ${isHoney ? "border-amber-500/40 bg-gradient-to-br from-amber-500/[0.06] to-amber-500/[0.02]" : "border-stone-700 bg-gradient-to-br from-stone-900/80 to-neutral-950"}`}>
      <div className={`text-[10px] uppercase tracking-[0.22em] font-semibold ${isHoney ? "text-amber-300" : "text-stone-500"}`}>
        {subtitle}
      </div>
      <div className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-stone-50">{title}</div>

      <div className="mt-8 space-y-4">
        {rows.map((r) => (
          <div key={r.label} className="border-b border-stone-800/60 pb-4">
            <div className="flex items-baseline justify-between gap-3">
              <div className="text-sm text-stone-200 font-medium">{r.label}</div>
              <div className={`font-mono text-lg font-semibold ${isHoney ? "text-amber-300" : "text-stone-100"}`}>{r.value}</div>
            </div>
            <div className="mt-1 text-xs text-stone-500 leading-relaxed">{r.note}</div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold mb-3">Add-ons</div>
        <ul className="space-y-2 text-sm">
          {extras.map(([label, value]) => (
            <li key={label} className="flex items-baseline justify-between gap-3">
              <span className="text-stone-400">{label}</span>
              <span className="text-stone-300 font-mono text-xs">{value}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 text-xs text-stone-500 italic leading-relaxed">{footnote}</p>

      <a
        href={href}
        className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold tracking-tight transition-colors ${
          isHoney ? "text-amber-300 hover:text-amber-200" : "text-stone-200 hover:text-stone-50"
        }`}
      >
        Learn more →
      </a>
    </div>
  );
}

function FixerTiers() {
  const tiers = [
    {
      name: "Self-Serve",
      price: "$29-99 / agent / mo",
      cadence: "Continuous · cancel anytime",
      bullets: [
        "Auto pack updates · pushed to your HoneyBox or cloud agents",
        "Daily reconciliation deed + Morning Brief",
        "1-click workout approval",
        "Email · Slack · Teams delivery",
      ],
    },
    {
      name: "Managed Fixers",
      price: "$2-10K / agent / mo",
      cadence: "3-month minimum (math needs the time)",
      bullets: [
        "Defendable engineer reviews your flag patterns monthly",
        "Custom pack rule contributions",
        "Monthly engineering call · quarterly review",
        "Lien severity escalation routing",
      ],
      tone: "honey",
    },
    {
      name: "Embedded Fixers",
      price: "$50-250K ARR / fleet",
      cadence: "12-month anchor contract",
      bullets: [
        "Named Defendable engineer on your account",
        "Fix-or-Refund 90-day guarantee on flag-rate lift",
        "Co-owned roadmap · joins your standups if desired",
        "Insurance carrier integration",
        "Quarterly DEFENDABLE-ATTESTED grade report",
      ],
    },
  ];
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>FIXERS · THE CLOSER LAYER</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            The deed is only as good as the{" "}
            <span className="font-serif italic font-normal text-amber-300">fix</span>{" "}
            it delivers.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            Observability tells you what happened. Fixers ship the
            patch · prove the lift · issue the new deed. Three tiers
            depending on how much hand-holding you want.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {tiers.map((t) => {
            const isHoney = t.tone === "honey";
            return (
              <div key={t.name} className={`rounded-xl border px-6 py-7 ${isHoney ? "border-amber-500/40 bg-amber-500/[0.06]" : "border-stone-800 bg-neutral-950/60"}`}>
                <div className={`text-[10px] uppercase tracking-[0.22em] font-semibold ${isHoney ? "text-amber-300" : "text-stone-500"}`}>{t.name}</div>
                <div className="mt-3 font-mono text-lg font-semibold text-stone-100">{t.price}</div>
                <div className="mt-1 text-xs text-stone-500">{t.cadence}</div>
                <ul className="mt-5 space-y-2.5 text-sm text-stone-300">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className={`mt-1.5 inline-block w-1 h-1 rounded-full ${isHoney ? "bg-amber-400" : "bg-stone-500"}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-xs text-stone-500 italic leading-relaxed max-w-3xl">
          Statistical baseline needs 30 days · iteration needs another 60 ·
          durable lift proves at 90 days. We won't sell shorter
          engagements because the math doesn't support honest
          expectations.
        </p>
      </div>
    </section>
  );
}

function MriWorkedExample() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>WORKED EXAMPLE</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Mid-size imaging center.{" "}
            <span className="font-serif italic font-normal text-amber-300">5-year ledger.</span>
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            8 radiologists · 4 AI agents (preliminary read · prior
            auth · billing reconciliation · scheduling) · HoneyBox
            AGX Orin tier · Managed Fixers · HIPAA compliant.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl border border-stone-800 bg-neutral-950/60 px-6 py-7 lg:px-7 lg:py-8">
            <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-semibold mb-5">
              5-year ledger
            </div>
            <div className="space-y-3 font-mono text-xs lg:text-sm">
              <LedgerLine label="Setup (AGX Orin + HIPAA BAA + pack customization)" value="$4,999" />
              <LedgerLine label="Box lease · $50/mo × 60 mo" value="$3,000" />
              <LedgerLine label="4 agents Managed Fixers · $99/mo × 60 mo" value="$23,760" />
              <LedgerLine label="8 compliance seats · $25/mo × 60 mo" value="$12,000" />
              <LedgerLine label="HIPAA quarterly audit export · $100/mo × 60" value="$6,000" />
              <LedgerLine label="Insurance carrier feed · $200/mo × 60" value="$12,000" />
              <div className="border-t border-stone-800 pt-3 flex justify-between">
                <span className="text-stone-200 font-semibold">5-year revenue</span>
                <span className="text-amber-300 font-semibold">$61,759</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Less COGS (box · compute · pack maintenance · support)</span>
                <span className="text-stone-400">~$8,500</span>
              </div>
              <div className="border-t border-stone-800 pt-3 flex justify-between">
                <span className="text-stone-200 font-semibold">5-year gross profit</span>
                <span className="text-amber-300 font-semibold">$53,259  ·  86%</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-amber-500/40 bg-amber-500/[0.06] px-6 py-7 lg:px-7 lg:py-8">
            <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300 font-semibold mb-5">
              What the buyer gets
            </div>
            <ul className="space-y-3 text-sm text-stone-200 leading-relaxed">
              {[
                "Every radiology AI read receipted · 5-year ledger",
                "Daily Reconciliation Deed per agent · Morning Brief",
                "Liens triaged + worked-out by Managed Fixers",
                "HIPAA-safe audit export for CMS / Joint Commission",
                "Malpractice carrier integration · premium-discount eligible",
                "All artifacts on-premises · the HoneyBox is the vault",
                "Tax-deductible OpEx · off balance sheet · CFO friendly",
                "Less than one malpractice claim per year",
                "Less than what the center pays for its PACS system",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span className="mt-1.5 inline-block w-1 h-1 rounded-full bg-amber-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 pt-5 border-t border-amber-500/20 text-xs text-stone-400 italic leading-relaxed">
              At 100 centers · this is $6.1M ARR. At 1,000 centers · $61M ARR. There are ~7,000 imaging centers in the US.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs: [string, string][] = [
    ["Is the HoneyBox really a lease?",
      "Yes. Defendable retains ownership · you operate it on your network · refresh ships every 5 years included. Treated as operating expense (ASC 842) · not on your balance sheet."],
    ["Can I run DefendableCloud and HoneyBox together?",
      "Yes · this is the recommended setup for many customers. Regulated agents (PHI · PCI · etc) on the HoneyBox · low-stakes agents on DefendableCloud · single unified Morning Brief covers both."],
    ["What if my AI agent isn't on a framework you support?",
      "The HoneyBox accepts task pings over plain HTTPS · any framework that can POST JSON works. If you'd like SDK-level integration we ship clients for Python · TypeScript · Go · Java. Custom adapters quoted on request."],
    ["Do you train on my data?",
      "No. Contractually committed. We run open-weights models on our own hardware · prompts and completions are not persisted beyond the request cycle · zero share with any third-party vendor."],
    ["What about Self-Serve vs Managed Fixers?",
      "Self-Serve auto-deploys pack updates and you read the daily brief. Managed adds a human engineer reviewing your specific patterns monthly. Embedded adds a named contact + Fix-or-Refund guarantee. Most customers start Self-Serve."],
    ["How quickly does the Fix-or-Refund guarantee deliver?",
      "Embedded tier only. Needs 90 days of baseline measurement before lift can be honestly attributed. We guarantee a measurable flag-rate reduction within the engagement period · or you don't pay for the Embedded uplift."],
  ];
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            The honest answers.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-x-10 gap-y-7 max-w-5xl">
          {faqs.map(([q, a]) => (
            <div key={q}>
              <div className="text-base font-semibold text-stone-100">{q}</div>
              <p className="mt-2 text-sm text-stone-400 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
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
            Start with one.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed max-w-2xl">
            Order a HoneyBox · try DefendableCloud · or book a call to
            scope an Embedded Fixer engagement for your fleet.
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
              href={`mailto:${SALES_EMAIL}?subject=Try%20DefendableCloud`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-amber-500/40 bg-amber-500/10 text-sm text-amber-300 font-semibold tracking-tight hover:bg-amber-500/20 transition-colors"
            >
              Try DefendableCloud
            </a>
            <a
              href={`mailto:${SALES_EMAIL}?subject=Embedded%20Fixers%20engagement`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-700 text-sm text-stone-200 font-semibold tracking-tight hover:border-stone-500 hover:text-stone-50 transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </section>
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
