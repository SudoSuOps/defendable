// /cloud · DefendableCloud · the hosted-compute privacy-native inference rail
//
// 128 RTX PRO 6000 Blackwell · paid in full · zero debt · open-weights model
// library · contractual no-logging · doctrine pack rules inline.

import { Footer, Header } from "../components/SiteShell";

const SALES_EMAIL = "build@swarmandbee.ai";

export default function DefendableCloud() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <BackgroundGrid />
      <Header />
      <main>
        <Hero />
        <CapacitySection />
        <ModelLibrary />
        <PrivacyPosture />
        <InferenceFlow />
        <CompareToBigTech />
        <PricingSnippet />
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
            <Eyebrow>DEFENDABLECLOUD · PRIVACY-NATIVE INFERENCE</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-50 leading-[1.05]">
              Our datacenter.{" "}
              <span className="font-serif italic font-normal text-amber-300">Our compute.</span>{" "}
              Your defense.
            </h1>
            <p className="mt-8 text-lg text-stone-300 leading-relaxed max-w-xl">
              128 NVIDIA RTX PRO 6000 Blackwell cards · 12,288 GB
              aggregate VRAM · paid in full · zero debt. Open-weights
              model library. Contractual no-logging. Doctrine pack
              rules enforced inside inference. The Big-Tech-free
              cloud alternative.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${SALES_EMAIL}?subject=Try%20DefendableCloud`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-amber-400 text-neutral-950 text-sm font-semibold tracking-tight hover:bg-amber-300 transition-colors"
              >
                Try DefendableCloud
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
              Drop-in OpenAI-SDK compatible · change your{" "}
              <code className="font-mono text-stone-400">base_url</code>{" "}
              and you're routing through Defendable.
            </p>
          </div>

          <CapacityCard />
        </div>
      </div>
    </section>
  );
}

function CapacityCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-amber-500/[0.03] blur-3xl pointer-events-none" />
      <div className="relative rounded-xl border border-stone-700/70 bg-gradient-to-br from-stone-900/90 to-neutral-950 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-3 border-b border-stone-800 bg-neutral-950/60">
          <div className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.18em] text-stone-400 font-semibold">
            <ServerIcon />
            DefendableCloud · Fleet
          </div>
          <span className="text-[10px] uppercase tracking-[0.18em] text-amber-300/90 font-semibold">
            Paid in full
          </span>
        </div>

        <div className="px-6 py-5 border-b border-stone-800/70">
          <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-2 font-semibold">Hardware</div>
          <div className="font-mono text-lg font-semibold text-stone-100 leading-snug">
            128 × RTX PRO 6000 Blackwell
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
            <Field label="VRAM per card" value="96 GB" />
            <Field label="Aggregate" value="12,288 GB" />
            <Field label="70B nodes" value="64" />
            <Field label="Frontier-model" value="32 nodes" />
          </div>
        </div>

        <div className="px-6 py-5">
          <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-3 font-semibold">Throughput capacity</div>
          <div className="space-y-2.5 text-xs">
            <CapBar label="32B model · per card" value="~30K tok/s" pct={92} />
            <CapBar label="70B model · 2 cards" value="~30 tok/s" pct={62} />
            <CapBar label="Frontier · 4 cards" value="~15 tok/s" pct={38} />
            <CapBar label="Fleet aggregate" value="~12M tok/hr" pct={100} />
          </div>
        </div>

        <div className="px-6 py-4 border-t border-stone-800/70 bg-neutral-950/60 flex items-center justify-between text-[11px]">
          <div className="text-stone-400">
            Debt <span className="text-emerald-400 font-mono">$0</span>
          </div>
          <div className="text-stone-400">
            COGS/M tokens <span className="text-amber-300 font-mono">~$0.50</span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-[10px] text-stone-500 tracking-tight text-center">
        Throughput numbers are typical · vary by quantization · batch · context length.
      </p>
    </div>
  );
}

function CapBar({ label, value, pct }: { label: string; value: string; pct: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-stone-400">{label}</span>
        <span className="text-stone-200 font-mono">{value}</span>
      </div>
      <div className="h-1 rounded-full bg-stone-800 overflow-hidden">
        <div className="h-full bg-amber-400/70" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function CapacitySection() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>WHY OUR DC</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            COGS is{" "}
            <span className="font-serif italic font-normal text-amber-300">amortized</span>{" "}
            · not borrowed.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            Every other AI gateway / cloud-LLM provider runs on Big
            Tech infrastructure they lease at retail prices. Their
            inference COGS goes up when AWS/GCP raises GPU rates.
            DefendableCloud runs on Defendable-owned cards in a
            Defendable-owned datacenter · COGS is depreciation +
            electricity. ~10× margin advantage. Forever.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          <TrustCard value="128" label="RTX PRO 6000 Blackwell" note="Paid in full · 96 GB VRAM per card" />
          <TrustCard value="$0" label="GPU debt outstanding" note="No leverage · no margin-call risk" />
          <TrustCard value="~$0.50" label="COGS per million tokens" note="Vs $5-15 for cloud-leased equivalent" />
        </div>
      </div>
    </section>
  );
}

function ModelLibrary() {
  const models = [
    { name: "Qwen 2.5 32B Instruct", class: "general", per: "1 card", note: "Default for ClawCheck Tribunal grading" },
    { name: "Llama 3.3 70B Instruct", class: "heavyweight", per: "2 cards · FP16", note: "Meta open weights · long context · most balanced" },
    { name: "DeepSeek V3 671B", class: "frontier · reasoning", per: "4 cards · 4-bit", note: "Frontier-class · open weights · best reasoning" },
    { name: "Mixtral 8x22B", class: "cost-efficient", per: "2 cards · MoE", note: "Strong with constrained tool calling" },
    { name: "Phi-4 14B", class: "lightweight", per: "1 card · half", note: "Edge tribunal · fast · cheap" },
    { name: "Bring your own checkpoint", class: "custom", per: "scoped", note: "Fine-tuned models · LoRA adapters · vetted by Defendable" },
  ];
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>OPEN-WEIGHTS LIBRARY</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Models you{" "}
            <span className="font-serif italic font-normal text-amber-300">own forever</span>.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            Closed models lock you in. Provider changes their TOS · changes
            their pricing · deprecates the version you depend on · you
            scramble. Open-weights checkpoints are forever-runnable. You
            can take a snapshot of a model you're using and pin it for
            the life of your contract.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {models.map((m) => (
            <div key={m.name} className="rounded-xl border border-stone-800 bg-neutral-950/60 px-5 py-6">
              <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-semibold">{m.class}</div>
              <div className="mt-2 text-base font-semibold text-stone-100">{m.name}</div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">Footprint</div>
              <div className="text-xs text-stone-300 font-mono mt-1">{m.per}</div>
              <p className="mt-3 text-xs text-stone-400 leading-relaxed">{m.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrivacyPosture() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>PRIVACY POSTURE</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            What we{" "}
            <span className="font-serif italic font-normal text-amber-300">contractually</span>{" "}
            commit.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {[
            ["No logging", "Your prompts and completions are not persisted beyond the immediate request/response cycle."],
            ["No training", "Your data is never used to train · fine-tune · evaluate · or augment any model."],
            ["No third-party share", "No data exchange with Anthropic · OpenAI · Google · Meta · or any other vendor."],
            ["BAA-ready", "HIPAA Business Associate Agreement available for healthcare deployments."],
            ["SOC2 Type II", "Annual audit · published controls · standard SaaS-grade trust framework."],
            ["Open-weights only", "We run only models with public weights · auditable architecture · forever-runnable."],
          ].map(([h, b]) => (
            <div key={h} className="rounded-xl border border-amber-500/30 bg-amber-500/[0.04] px-6 py-6">
              <div className="text-base font-semibold text-amber-300">{h}</div>
              <p className="mt-2 text-sm text-stone-300 leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-stone-500 italic leading-relaxed max-w-3xl">
          These commitments are written into the standard DefendableCloud
          terms · not buried in a TOS opt-out checkbox. They are
          enforceable contract terms · backed by SOC2-attested controls.
        </p>
      </div>
    </section>
  );
}

function InferenceFlow() {
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>HOW IT FLOWS</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Doctrine pack rules{" "}
            <span className="font-serif italic font-normal text-amber-300">inside</span>{" "}
            inference.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            Other cloud-LLM providers run inference and forget. We run
            inference WITH the doctrine pack inline · so the model
            cannot complete an unsafe action even if the calling agent
            tries to coerce it. Receipts emit at every layer.
          </p>
        </div>

        <ol className="mt-12 space-y-4">
          {[
            ["01", "Agent makes an OpenAI-SDK call", "Sets base_url to https://api.defendablecloud.com/v1 · same SDK as before."],
            ["02", "Router applies doctrine pack", "System-prompt fragments injected · tool-call schemas validated · per-call rule layer enforces hard fails."],
            ["03", "Inference on Defendable hardware", "Selected open-weights model on RTX 6000 Blackwell · no provider telemetry."],
            ["04", "Output validated against pack rules", "Tool-call arguments validated · completion scanned for hard-fail patterns · denied or returned."],
            ["05", "Receipt to Bakery vault", "SHA-256 hash · pair candidate created · contributes to your daily reconciliation deed."],
            ["06", "Customer sees response", "Same shape as OpenAI · drop-in compatible · zero agent code changes."],
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

function CompareToBigTech() {
  const rows = [
    ["Logs your prompts", "Yes (default)", "Yes (default)", "Yes (default)", "Never"],
    ["Trains on your data", "Possible (TOS varies)", "Possible (opt-out)", "Possible", "Never"],
    ["BAA available", "Limited", "Enterprise only", "Yes", "Yes · standard"],
    ["Models you can run", "Closed only", "Closed only", "Closed only", "Open weights · pinnable"],
    ["Doctrine pack inline", "No", "No", "No", "Yes"],
    ["Issues a deed", "No", "No", "No", "Yes"],
    ["Owns the GPUs", "Leases AWS/GCP", "Owns + leases", "Owns + leases", "Owns · 128 RTX 6000 · paid in full"],
    ["COGS per M tokens", "$5-15+", "$5-15+", "$5-15+", "~$0.50"],
  ];
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>SIDE BY SIDE</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Why{" "}
            <span className="font-serif italic font-normal text-amber-300">regulated buyers</span>{" "}
            pick us.
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-800">
                <th className="text-left py-3 pr-4 text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">Capability</th>
                <th className="text-left py-3 px-3 text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">OpenAI</th>
                <th className="text-left py-3 px-3 text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">Anthropic</th>
                <th className="text-left py-3 px-3 text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">Azure OpenAI</th>
                <th className="text-left py-3 pl-3 text-[10px] uppercase tracking-[0.22em] text-amber-300 font-semibold">DefendableCloud</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-stone-900/60">
                  <td className="py-3 pr-4 text-stone-300 font-medium">{r[0]}</td>
                  <td className="py-3 px-3 text-stone-400">{r[1]}</td>
                  <td className="py-3 px-3 text-stone-400">{r[2]}</td>
                  <td className="py-3 px-3 text-stone-400">{r[3]}</td>
                  <td className="py-3 pl-3 text-amber-300 font-medium">{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-xs text-stone-500 italic leading-relaxed max-w-3xl">
          Comparison reflects each provider's standard / default terms as of 2026-05-24. Enterprise tiers vary.
        </p>
      </div>
    </section>
  );
}

function PricingSnippet() {
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>PRICING · SIMPLE</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Pay per million tokens.{" "}
            <span className="font-serif italic font-normal text-amber-300">No setup.</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          <PriceCard
            tier="General"
            price="$5 / M"
            note="Qwen 32B · Mixtral · Phi-4 · Llama 70B"
            bullets={[
              "Default for ClawCheck Tribunal grading",
              "Most agent traffic",
              "Drop-in OpenAI-SDK compatible",
            ]}
          />
          <PriceCard
            tier="Frontier"
            price="$10 / M"
            note="DeepSeek V3 671B · Llama 70B context"
            bullets={[
              "For complex reasoning · long context",
              "Tribunal judge for ambiguous cases",
              "Same privacy posture",
            ]}
            tone="honey"
          />
          <PriceCard
            tier="Custom checkpoint"
            price="Quote"
            note="Bring your own fine-tune or LoRA"
            bullets={[
              "Vetting required (1-2 week intake)",
              "Dedicated capacity option",
              "Compliance attestation included",
            ]}
          />
        </div>

        <div className="mt-10 rounded-xl border border-stone-800 bg-neutral-950/60 px-6 py-5">
          <div className="grid md:grid-cols-3 gap-3 text-sm text-stone-300">
            <Field label="No setup fee" value="$0" />
            <Field label="No minimum" value="Pay-as-you-go" />
            <Field label="Per-agent monitoring add-on" value="$29-99/mo" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  tier, price, note, bullets, tone,
}: { tier: string; price: string; note: string; bullets: string[]; tone?: "honey" }) {
  const isHoney = tone === "honey";
  return (
    <div className={`rounded-xl border px-6 py-7 ${isHoney ? "border-amber-500/40 bg-amber-500/[0.06]" : "border-stone-800 bg-neutral-950/60"}`}>
      <div className={`text-[10px] uppercase tracking-[0.22em] font-semibold ${isHoney ? "text-amber-300" : "text-stone-500"}`}>{tier}</div>
      <div className="mt-3 font-mono text-3xl font-semibold text-stone-100">{price}</div>
      <div className="mt-2 text-xs text-stone-400">{note}</div>
      <ul className="mt-5 space-y-2 text-sm text-stone-300">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <span className={`mt-1.5 inline-block w-1 h-1 rounded-full ${isHoney ? "bg-amber-400" : "bg-stone-500"}`} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CTA() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="rounded-2xl border border-stone-800 bg-gradient-to-br from-stone-900/80 to-neutral-950 px-8 py-12 lg:px-14 lg:py-16">
          <Eyebrow>READY</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 leading-tight max-w-3xl">
            Drop in. Change one URL.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed max-w-2xl">
            Existing OpenAI SDK code. Existing tool calls. Existing
            framework integration. Change the{" "}
            <code className="font-mono text-amber-300">base_url</code>{" "}
            to point at DefendableCloud · the rest just works · with
            privacy and a deed.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${SALES_EMAIL}?subject=Try%20DefendableCloud`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-amber-400 text-neutral-950 text-sm font-semibold tracking-tight hover:bg-amber-300 transition-colors"
            >
              Try DefendableCloud
              <Arrow />
            </a>
            <a
              href="/honeybox"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-700 text-sm text-stone-200 font-semibold tracking-tight hover:border-stone-500 hover:text-stone-50 transition-colors"
            >
              Or HoneyBox
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-800 text-sm text-stone-400 font-semibold tracking-tight hover:text-stone-200 transition-colors"
            >
              See pricing
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

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-1">{label}</div>
      <div className="text-sm text-stone-100 font-medium">{value}</div>
    </div>
  );
}

function TrustCard({ value, label, note }: { value: string; label: string; note: string }) {
  return (
    <div className="rounded-xl border border-stone-800 bg-neutral-950/60 px-6 py-7">
      <div className="text-3xl md:text-4xl font-semibold tracking-tight text-amber-300">{value}</div>
      <div className="mt-2 text-sm text-stone-100 font-medium">{label}</div>
      <div className="mt-1 text-xs text-stone-500 leading-relaxed">{note}</div>
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

function ServerIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="1.5" y="2" width="11" height="3.5" rx="0.5" />
      <rect x="1.5" y="6" width="11" height="3.5" rx="0.5" />
      <rect x="1.5" y="10" width="11" height="2" rx="0.5" />
      <circle cx="3.5" cy="3.75" r="0.5" fill="currentColor" />
      <circle cx="3.5" cy="7.75" r="0.5" fill="currentColor" />
    </svg>
  );
}
