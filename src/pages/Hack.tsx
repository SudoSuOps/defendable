// /hack · DefendableHack · the builder rail
//
// The hacker-culture surface of DefendableOS. Open weights · open tools ·
// runnable-on-hardware-you-own. The model ladder from 4B at the edge to
// frontier in your closet. The recipe to recreate everything DefendableOS
// runs · including the 128-card cloud fleet · but at your scale.
//
// Tone: maker · OpenWrt-energy · MIT-licensed · GitHub-forward. Still
// brand-coherent with the institutional pages (charcoal + honey) but
// looser · more raw · more "here's the spec, go build it."

import { Footer, Header } from "../components/SiteShell";

const SALES_EMAIL = "build@swarmandbee.ai";

export default function Hack() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <BackgroundGrid />
      <Header />
      <main>
        <Hero />
        <Doctrine />
        <ModelLadder />
        <HardwareTiers />
        <Toolchain />
        <ThreeDoors />
        <Bounty />
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
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-20 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
          <div>
            <Eyebrow>DEFENDABLEHACK · THE BUILDER RAIL</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-50 leading-[1.05]">
              Crack the LLM.{" "}
              <span className="font-serif italic font-normal text-amber-300">Own the rail.</span>
            </h1>
            <p className="mt-8 text-lg text-stone-300 leading-relaxed max-w-xl">
              From 4B at the edge to 70B in your closet to 671B in a
              small DC · run frontier intelligence on hardware you
              actually own. Open weights. Open tools. Open doctrine.
              No vendor logging. No surprise rate hikes. Forever
              runnable.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#ladder"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-amber-400 text-neutral-950 text-sm font-semibold tracking-tight hover:bg-amber-300 transition-colors"
              >
                Climb the ladder
                <Arrow />
              </a>
              <a
                href="https://github.com/SudoSuOps"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-700 text-sm text-stone-200 font-semibold tracking-tight hover:border-stone-500 hover:text-stone-50 transition-colors"
              >
                GitHub · @SudoSuOps
                <ArrowExt />
              </a>
            </div>
            <p className="mt-8 text-xs text-stone-500 tracking-tight max-w-md leading-relaxed">
              If you can't run it · you don't own it.{" "}
              <span className="text-amber-300 font-medium">Open weights or it doesn't ship.</span>
            </p>
          </div>

          <ConsoleCard />
        </div>
      </div>
    </section>
  );
}

function ConsoleCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-amber-500/[0.03] blur-3xl pointer-events-none" />
      <div className="relative rounded-xl border border-stone-700/70 bg-neutral-950 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-2.5 border-b border-stone-800 bg-stone-900/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-300/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-mono">
            ~/defendablehack$ ollama list
          </span>
        </div>
        <pre className="px-5 py-5 font-mono text-[12px] leading-relaxed text-stone-300 overflow-x-auto">
{`NAME                       SIZE     QUANT    RUNS ON
─────────────────────────  ───────  ──────   ─────────────────
phi-4:latest                14.7G   Q4_K_M   jetson-orin-nano
gemma3:4b                    3.3G   Q4_K_M   raspberry-pi-5 ★
qwen2.5:9b                   5.8G   Q4_K_M   rtx-3090
granite3.3:8b                4.9G   Q4_K_M   rtx-3090
gemma2:27b                  16.0G   Q4_K_M   rtx-4090
qwen2.5:32b                 19.8G   Q4_K_M   rtx-6000-blackwell
llama3.3:70b                42.5G   Q4_K_M   2 × rtx-6000
deepseek-v3:671b           340.0G   Q4_K_M   4 × rtx-6000  ★★★

★   runs in 6W power envelope
★★★ runs on Defendable's DC fleet · 128 cards available

`}<span className="text-amber-300">~/defendablehack$ </span><span className="text-stone-200">_</span>
        </pre>
      </div>
      <p className="mt-3 text-[10px] text-stone-500 tracking-tight text-center">
        Real model sizes · real quantization · real hardware. Every line above is a model you can <em>actually pull and run</em>.
      </p>
    </div>
  );
}

// ─── Doctrine · short and direct ───────────────────────────────────────────
function Doctrine() {
  const items = [
    "Open weights forever · no closed checkpoints accepted",
    "Runs on hardware you own · not borrowed cloud GPU time",
    "No vendor logging · prompts stay in your network",
    "Reproducible builds · doctrine pack rules version-pinned",
    "MIT-licensed tooling · fork it · improve it · ship it back",
    "Receipt every play · same Bakery vault as the institutional rail",
  ];
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>BUILDER DOCTRINE</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Six rules.{" "}
            <span className="font-serif italic font-normal text-amber-300">No exceptions.</span>
          </h2>
        </div>

        <ul className="mt-10 grid md:grid-cols-2 gap-3">
          {items.map((line, i) => (
            <li key={i} className="rounded-xl border border-stone-800 bg-neutral-950/60 px-5 py-4 flex items-start gap-3">
              <span className="font-mono text-amber-300/80 text-xs pt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm text-stone-300 leading-relaxed">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Model Ladder · the centerpiece ────────────────────────────────────────
function ModelLadder() {
  const rungs: {
    class: string; models: string[]; runs_on: string; vram: string;
    throughput: string; use_case: string; tone: "muted" | "mid" | "honey";
  }[] = [
    {
      class: "4B class · POCKET TRIBUNAL",
      models: ["Phi-4 (14B distill)", "Gemma 3 4B", "Qwen 2.5 3B/4B", "Llama 3.2 3B"],
      runs_on: "Jetson Orin Nano · Raspberry Pi 5 · M-series MacBook · Steam Deck · NUC · phones",
      vram: "~3-9 GB Q4",
      throughput: "10-50 tok/s on most modern edge gear",
      use_case: "Edge Tribunal rule grading · IoT classification · embedded agent intake · always-on local helper",
      tone: "muted",
    },
    {
      class: "9B class · WORKHORSE",
      models: ["Qwen 2.5 9B", "Llama 3.1 8B", "IBM Granite 3.3 8B", "Mistral 7B"],
      runs_on: "RTX 3090 · RTX 4090 · Mac Studio · Jetson AGX Orin · any 16-24GB GPU",
      vram: "~6-12 GB Q4",
      throughput: "30-80 tok/s on RTX 3090/4090",
      use_case: "Most production agent reasoning · default Tribunal judge · solid general purpose",
      tone: "mid",
    },
    {
      class: "27B class · HEAVYWEIGHT",
      models: ["Gemma 2 27B", "Qwen 2.5 32B", "Mixtral 8x7B (MoE)"],
      runs_on: "RTX 4090 (24GB) · RTX 6000 (96GB) · Mac Studio M-series · workstation builds",
      vram: "~16-22 GB Q4",
      throughput: "20-50 tok/s on RTX 4090/6000",
      use_case: "Complex reasoning · doctrine pack curation · production Tribunal · sufficient for ~95% of agent workloads",
      tone: "mid",
    },
    {
      class: "70B class · FRONTIER-ISH",
      models: ["Llama 3.3 70B", "Qwen 2.5 72B", "Mixtral 8x22B"],
      runs_on: "2× RTX 6000 (96GB) · A100 80GB · H100 · Mac Studio Ultra · serious workstation",
      vram: "~42-50 GB Q4 · ~140 GB FP16",
      throughput: "15-30 tok/s · batchable",
      use_case: "Hardest reasoning · adversarial case validation · final Tribunal judge · publication-grade output",
      tone: "honey",
    },
    {
      class: "671B class · FRONTIER · OPEN",
      models: ["DeepSeek V3 671B (MoE 37B active)"],
      runs_on: "4× RTX 6000 (96GB) · DGX class · serious mini-DC",
      vram: "~340 GB Q4 (4-bit)",
      throughput: "10-25 tok/s · MoE means cheaper than dense 671B",
      use_case: "Reasoning at the edge of what open weights can do · what DefendableCloud serves to customers · runs on the 128-card fleet daily",
      tone: "honey",
    },
  ];

  return (
    <section id="ladder" className="border-b border-stone-900/80 bg-stone-950/40 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl">
          <Eyebrow>THE MODEL LADDER</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            4B at the edge.{" "}
            <span className="font-serif italic font-normal text-amber-300">671B in your closet.</span>
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            Every rung is open-weights. Every rung is runnable on
            hardware you can buy and own. The same library Defendable
            runs in our datacenter · scaled down (or up) to whatever
            you've got on your bench.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {rungs.map((r) => (
            <Rung key={r.class} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Rung({
  class: cls, models, runs_on, vram, throughput, use_case, tone,
}: {
  class: string; models: string[]; runs_on: string; vram: string; throughput: string; use_case: string; tone: "muted" | "mid" | "honey";
}) {
  const styles = {
    muted: "border-stone-800 bg-neutral-950/60",
    mid: "border-stone-700 bg-stone-900/40",
    honey: "border-amber-500/40 bg-amber-500/[0.04]",
  }[tone];
  return (
    <div className={`rounded-xl border ${styles} px-6 py-6`}>
      <div className="grid lg:grid-cols-[1.2fr_1.5fr_1.6fr] gap-5 items-start">
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-semibold">{cls}</div>
          <ul className="mt-3 space-y-1.5">
            {models.map((m) => (
              <li key={m} className="text-sm text-stone-200 font-mono">{m}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <Field label="Runs on" value={runs_on} />
          <div className="grid grid-cols-2 gap-3">
            <Field label="VRAM" value={vram} mono />
            <Field label="Throughput" value={throughput} mono />
          </div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-1">Use case</div>
          <p className="text-sm text-stone-300 leading-relaxed">{use_case}</p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-1">{label}</div>
      <div className={`text-sm text-stone-300 leading-snug ${mono ? "font-mono" : ""}`}>{value}</div>
    </div>
  );
}

// ─── Hardware reference builds ─────────────────────────────────────────────
function HardwareTiers() {
  const builds = [
    {
      tier: "$249  ·  Edge Box",
      desc: "Jetson Orin Nano · 8 GB LPDDR5 · 20W · the cracked Pi",
      runs: "4B class (Phi-4 · Gemma 3 4B) at usable speed · Tribunal rule layer · embedded agent ingest",
      footnote: "What the default HoneyBox ships as.",
    },
    {
      tier: "$1,500  ·  Workhorse",
      desc: "RTX 3090 24GB · Ryzen 7 · 64 GB RAM · 1 TB NVMe",
      runs: "9B class comfortably · 27B at Q4 · 70B if you split CPU/GPU · most personal agent workloads",
      footnote: "Used + refurb RTX 3090 is the best $/VRAM ratio in 2026.",
    },
    {
      tier: "$5,000  ·  Workstation",
      desc: "RTX PRO 6000 Blackwell 96 GB · Threadripper · 128 GB RAM",
      runs: "Everything up to 70B · DeepSeek V3 671B if you have 4 of these",
      footnote: "The single-card sweet spot · 96 GB lets you run almost anything.",
    },
    {
      tier: "$20,000  ·  Mini-DC",
      desc: "4× RTX 6000 · server chassis · 512 GB RAM · 10 GbE · enterprise PSU",
      runs: "DeepSeek V3 671B in Q4 · room for batched inference · multi-tenant",
      footnote: "What a single Defendable rack node looks like · 128 of these in our DC.",
    },
  ];
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>REFERENCE BUILDS</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Four tiers.{" "}
            <span className="font-serif italic font-normal text-amber-300">All buyable.</span>
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            No mythical $80K H100 setup. No "you need an enterprise
            contract." Every build below is parts you can buy on
            Newegg or used on eBay · or off-the-shelf from NVIDIA's
            developer-kit store.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {builds.map((b) => (
            <div key={b.tier} className="rounded-xl border border-stone-800 bg-neutral-950/60 px-6 py-6">
              <div className="text-amber-300 font-mono font-semibold text-base">{b.tier}</div>
              <div className="mt-1 text-sm text-stone-400">{b.desc}</div>
              <div className="mt-4 text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">Runs</div>
              <div className="text-sm text-stone-300 leading-relaxed mt-1">{b.runs}</div>
              <p className="mt-4 text-xs text-stone-500 italic leading-relaxed">{b.footnote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Toolchain ─────────────────────────────────────────────────────────────
function Toolchain() {
  const tools = [
    { name: "vLLM", lang: "Python · CUDA", strength: "Batched throughput", url: "https://github.com/vllm-project/vllm" },
    { name: "llama.cpp", lang: "C++", strength: "GGUF · cross-platform · CPU + GPU + Metal + Vulkan", url: "https://github.com/ggerganov/llama.cpp" },
    { name: "Ollama", lang: "Go", strength: "One-command local install · model registry", url: "https://ollama.com" },
    { name: "MLX", lang: "Python · Swift", strength: "Apple Silicon native · M-series only", url: "https://github.com/ml-explore/mlx" },
    { name: "ExLlamaV2", lang: "Python · CUDA", strength: "Aggressive 4-bit quant · fast on consumer GPUs", url: "https://github.com/turboderp/exllamav2" },
    { name: "TensorRT-LLM", lang: "Python · CUDA", strength: "NVIDIA-blessed enterprise · maximum throughput", url: "https://github.com/NVIDIA/TensorRT-LLM" },
    { name: "Transformers", lang: "Python", strength: "Research-grade · widest model coverage · slowest", url: "https://github.com/huggingface/transformers" },
    { name: "text-generation-webui", lang: "Python", strength: "Quick try-it UI · OpenAI-compatible endpoint", url: "https://github.com/oobabooga/text-generation-webui" },
  ];
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>TOOLCHAIN</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Pick your{" "}
            <span className="font-serif italic font-normal text-amber-300">stack</span>.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            We use all of these in different contexts. None of them
            are wrong. Most of them speak the OpenAI-SDK
            protocol natively · so you can swap them under the same
            agent code with no rewrite.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((t) => (
            <a
              key={t.name}
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-stone-800 bg-neutral-950/60 px-5 py-5 hover:border-amber-500/40 hover:bg-amber-500/[0.03] transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div className="text-amber-300 font-mono font-semibold text-base">{t.name}</div>
                <ArrowExt />
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">{t.lang}</div>
              <p className="mt-3 text-sm text-stone-400 leading-relaxed">{t.strength}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Three doors · build / buy / cloud ─────────────────────────────────────
function ThreeDoors() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>THREE DOORS</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Build · Buy · or use{" "}
            <span className="font-serif italic font-normal text-amber-300">our cloud</span>.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            One doctrine · three ways to walk through it. All
            interchangeable. All produce the same Defendable Agent Deed.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          <Door
            num="01"
            head="Build it yourself"
            sub="The hacker path"
            body="Buy a Jetson · install Ollama · pull Phi-4 · point your agent at localhost. You own the rail end to end. We publish the doctrine packs so you can grade your own agents with the same Tribunal we use."
            cta={["GitHub @SudoSuOps", "https://github.com/SudoSuOps"]}
          />
          <Door
            num="02"
            head="Order a HoneyBox"
            sub="The lease path"
            tone="honey"
            body="$399 setup · $10/mo lease · pre-flashed Jetson Orin Nano with the full Defendable stack already wired. Plug it in · scan QR · point agents · receipts flow. Tax-deductible · off balance sheet."
            cta={["Order a HoneyBox", "/honeybox"]}
          />
          <Door
            num="03"
            head="Use DefendableCloud"
            sub="The hosted path"
            body="No hardware. Change your base_url to api.defendablecloud.com · we run the inference on our 128-card fleet · contractual no-logging · same Tribunal · same deeds · open weights only."
            cta={["Try DefendableCloud", "/cloud"]}
          />
        </div>
      </div>
    </section>
  );
}

function Door({
  num, head, sub, body, cta, tone,
}: { num: string; head: string; sub: string; body: string; cta: [string, string]; tone?: "honey" }) {
  const isHoney = tone === "honey";
  return (
    <div className={`rounded-xl border px-6 py-7 flex flex-col ${isHoney ? "border-amber-500/40 bg-amber-500/[0.06]" : "border-stone-800 bg-neutral-950/60"}`}>
      <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-mono">{num}</div>
      <div className="mt-2 text-xl font-semibold tracking-tight text-stone-100">{head}</div>
      <div className="text-xs text-stone-500 mt-0.5">{sub}</div>
      <p className="mt-4 text-sm text-stone-300 leading-relaxed flex-1">{body}</p>
      <a
        href={cta[1]}
        className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-tight transition-colors ${isHoney ? "text-amber-300 hover:text-amber-200" : "text-stone-200 hover:text-stone-50"}`}
      >
        {cta[0]} →
      </a>
    </div>
  );
}

// ─── Bounty teaser ─────────────────────────────────────────────────────────
function Bounty() {
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <Eyebrow>COMING · DEFENDABLEHACK BOUNTY</Eyebrow>
            <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
              First receipted{" "}
              <span className="font-serif italic font-normal text-amber-300">bug bounty</span>{" "}
              for AI agents.
            </h2>
            <p className="mt-6 text-base text-stone-300 leading-relaxed">
              Find an agent that PROPOLIS-fails in the wild · submit
              the capture · auto-Tribunal validates · failure becomes
              an adversarial case in the next benchmark pack · you
              get paid · every active Defendable Agent Deed has to
              re-test against the new pack or lose grade. Closed
              loop. Researcher-funded doctrine.
            </p>
            <p className="mt-5 text-sm text-stone-400 italic leading-relaxed">
              Waitlist now · launch when the pack registry is ready
              to absorb external contributions cleanly.
            </p>
            <div className="mt-8">
              <a
                href={`mailto:${SALES_EMAIL}?subject=DefendableHack%20Bounty%20Waitlist`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded border border-amber-500/40 bg-amber-500/10 text-sm text-amber-300 font-semibold tracking-tight hover:bg-amber-500/20 transition-colors"
              >
                Join the waitlist
                <Arrow />
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-stone-700/70 bg-neutral-950 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-2.5 border-b border-stone-800 bg-stone-900/60">
              <span className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-mono">
                bounty-flywheel.txt
              </span>
            </div>
            <pre className="px-5 py-5 font-mono text-[11px] leading-relaxed text-stone-400">
{`Researcher finds claw failure (PROPOLIS)
       ↓
Bakery ingests · Tribunal validates
       ↓
Auto-converts to adversarial case
       ↓
Pack v.next ships (opendefendable.com)
       ↓
Active deeds must re-bench or lose grade
       ↓
Insurance feed updates carrier underwriting
       ↓
Pool funded · researcher paid · new deed issued`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA ───────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="rounded-2xl border border-stone-800 bg-gradient-to-br from-stone-900/80 to-neutral-950 px-8 py-12 lg:px-14 lg:py-16">
          <Eyebrow>BUILDER · MAKER · OPERATOR</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 leading-tight max-w-3xl">
            If you can't run it ·{" "}
            <span className="font-serif italic font-normal text-amber-300">you don't own it</span>.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed max-w-2xl">
            Defendable runs the entire stack on hardware we own · open
            weights we can pin forever · doctrine packs we publish.
            Build the same locally · order the appliance · or use our
            cloud. Three doors · one rail · same deeds.
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
              href="https://github.com/SudoSuOps"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-700 text-sm text-stone-200 font-semibold tracking-tight hover:border-stone-500 hover:text-stone-50 transition-colors"
            >
              GitHub @SudoSuOps
              <ArrowExt />
            </a>
            <a
              href="/doctrine"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-800 text-sm text-stone-400 font-semibold tracking-tight hover:text-stone-200 transition-colors"
            >
              Read the Doctrine
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── building blocks ───────────────────────────────────────────────────────
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

function ArrowExt() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 8l4-4M5 4h3v3" />
    </svg>
  );
}
