// defendableos.com · homepage
//
// Doctrine: AI agents in production are OFFENSE. The market today sells
// nothing but offense (vendors competing on speed/volume/coverage).
// DefendableOS is the missing DEFENSE layer · third-party · receipted ·
// audit-grade · KPMG-equivalent positioning.
//
// Stack · React + Tailwind (no framer-motion, no lucide-react · inline SVG +
// CSS transitions match the existing pattern · zero new bundle weight).
//
// Visual direction · charcoal base · stone/ivory typography · honey-gold
// (amber) accents sparingly · subtle grid texture · document/deed/ledger
// motifs · institutional · founder-grade · never cyberpunk.

import { Footer, Header } from "../components/SiteShell";

const SALES_EMAIL = "build@swarmandbee.ai";

export default function DefendableOS() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <BackgroundGrid />
      <Header />
      <main>
        <Hero />
        <SwarmLawsBand />
        <TheProblem />
        <WhatItIs />
        <ProtocolFlow />
        <CategoryShift />
        <DoctrineSection />
        <OwnersBox />
        <ReplayQualifiedTraining />
        <UseCases />
        <DeploymentModes />
        <MorningBrief />
        <MathSection />
        <TrustSignals />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

// ─── ambient blueprint grid · zero motion ──────────────────────────────────
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

// ─── HERO ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" className="relative border-b border-stone-900/80">
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-amber-500/[0.04] via-amber-500/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
          <div>
            <Eyebrow>DEFENDABLEOS — NEUTRAL OFFICIATING FOR AI AGENTS</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-50 leading-[1.05]">
              AI Agents Need Referees{" "}
              <span className="font-serif italic font-normal text-amber-300">Before They Need Training Data.</span>
            </h1>
            <p className="mt-8 text-lg text-stone-300 leading-relaxed max-w-xl">
              DefendableOS turns agent execution into visible, replayable
              evidence. Every assignment starts with a written flightsheet and
              a locked rulebook. Neutral referees apply code, math and
              provenance checks while the human owner retains final authority
              over what is trusted, corrected or trained next.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="/defend-the-claw"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-amber-400 text-neutral-950 text-sm font-semibold tracking-tight hover:bg-amber-300 transition-colors"
              >
                Run the Playbook
                <Arrow />
              </a>
              <a
                href="/how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-700 text-sm text-stone-200 font-semibold tracking-tight hover:border-stone-500 hover:text-stone-50 transition-colors"
              >
                See the Protocol
              </a>
            </div>
            <p className="mt-8 text-xs text-stone-400 tracking-tight max-w-md leading-relaxed font-mono">
              No Replay, No Training. No Proof, No Promotion. No Human Approval,
              No Finality.
            </p>
            <p className="mt-4 text-xs text-stone-500 italic font-serif tracking-tight max-w-md leading-relaxed">
              Neutral referees call the game. The human owner grants finality.
            </p>
          </div>

          <BriefPreview />
        </div>
      </div>
    </section>
  );
}

// ─── Hero artifact · the Morning Reconciliation Brief preview ──────────────
function BriefPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-amber-500/[0.03] blur-3xl pointer-events-none" />
      <div className="relative rounded-xl border border-stone-700/70 bg-gradient-to-br from-stone-900/90 to-neutral-950 shadow-2xl overflow-hidden">
        {/* Strip · ledger feel */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-stone-800 bg-neutral-950/60">
          <div className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.18em] text-stone-400 font-semibold">
            <MailIcon />
            Morning Reconciliation Brief
          </div>
          <span className="text-[10px] uppercase tracking-[0.18em] text-amber-300/90 font-semibold">
            Acme Inc · 2026-05-25
          </span>
        </div>

        {/* Fleet summary */}
        <div className="px-6 py-5 border-b border-stone-800/70">
          <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-3 font-semibold">
            Yesterday's results
          </div>
          <ul className="space-y-2 font-mono text-xs">
            <BriefRow agent="payroll-bot" plays="3 plays" status="FREE AND CLEAR" ok />
            <BriefRow agent="refund-bot" plays="347 plays" status="3 liens" />
            <BriefRow agent="support-bot" plays="1,294 plays" status="1 lien" />
            <BriefRow agent="sdr-bot" plays="812 plays" status="FREE AND CLEAR" ok />
          </ul>
          <div className="mt-4 pt-4 border-t border-stone-800/70 flex items-center justify-between text-xs">
            <span className="text-stone-400">Fleet-wide</span>
            <span className="font-mono text-stone-200">2,456 plays · 80.4% promoted</span>
          </div>
        </div>

        {/* Action required */}
        <div className="px-6 py-5 border-b border-stone-800/70 bg-amber-500/[0.03]">
          <div className="text-[10px] uppercase tracking-[0.18em] text-amber-300/90 font-semibold mb-2">
            Action required
          </div>
          <div className="text-sm text-stone-100 leading-snug">
            Approve Fixer workout for refund-bot lien L-2026-0381
          </div>
          <div className="mt-1 text-xs text-stone-400">
            Est. 12pp lift · 3 day deploy · $0 to you
          </div>
          <div className="mt-3 flex gap-2">
            <span className="px-3 py-1.5 rounded border border-amber-500/40 bg-amber-500/10 text-xs text-amber-300 font-semibold">
              Approve
            </span>
            <span className="px-3 py-1.5 rounded border border-stone-700 text-xs text-stone-400">
              Defer 1 week
            </span>
            <span className="px-3 py-1.5 rounded border border-stone-700 text-xs text-stone-400">
              Schedule call
            </span>
          </div>
        </div>

        {/* Compounding footer */}
        <div className="px-6 py-4 bg-neutral-950/60 text-[11px]">
          <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-2">
            Compounding
          </div>
          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div>
              <span className="text-stone-500">30-day </span>
              <span className="text-stone-200">77.1 → 80.4%</span>
              <span className="text-emerald-400 ml-1.5">+3.3pp</span>
            </div>
            <div>
              <span className="text-stone-500">90-day </span>
              <span className="text-stone-200">71.2 → 80.4%</span>
              <span className="text-emerald-400 ml-1.5">+9.2pp</span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-[10px] text-stone-500 tracking-tight text-center">
        Illustrative preview · sample data · this is the daily product surface for 95% of customers.
      </p>
    </div>
  );
}

function BriefRow({ agent, plays, status, ok }: { agent: string; plays: string; status: string; ok?: boolean }) {
  return (
    <li className="flex items-center justify-between gap-3">
      <span className="text-stone-300">{agent}</span>
      <span className="flex items-center gap-2.5">
        <span className="text-stone-500">{plays}</span>
        <span className={ok ? "text-emerald-400" : "text-amber-300"}>{status}</span>
        {ok ? <CheckMark /> : <WarnMark />}
      </span>
    </li>
  );
}

// ─── THE 5 SWARM LAWS · BRAND DOCTRINE ─────────────────────────────────────
function SwarmLawsBand() {
  const laws = [
    { n: "I",   title: "The Honey Law",   body: "You get more Bees with Honey." },
    { n: "II",  title: "The Cell Law",    body: "Great intelligence begins with a single Cell." },
    { n: "III", title: "The Swarm Law",   body: "The Swarm is stronger than the Bee." },
    { n: "IV",  title: "The Purity Law",  body: "Virgin signal is the seed of great Honey." },
    { n: "V",   title: "The Genesis Law", body: "What the Hive verifies becomes truth." },
  ];
  return (
    <section className="relative border-b border-stone-900/80 bg-amber-500/[0.025]">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <Eyebrow>THE 5 SWARM LAWS · BRAND DOCTRINE · LOCKED 2026-03-12</Eyebrow>
        <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight max-w-4xl">
          What the Hive verifies{" "}
          <span className="font-serif italic font-normal text-amber-300">becomes truth</span>.
        </h2>
        <p className="mt-6 text-base text-stone-400 leading-relaxed max-w-3xl">
          The Hive is the in-house engine of Swarm &amp; Bee · the backend
          DefendableOS is the public surface of. Five laws govern it. The
          fifth — the Genesis Law — is the line that defines every Defendable
          Deed. A deed is not a claim. It is what neutral referees have
          verified · receipted · graded · and anchored on Hedera after the
          execution behind it survived replay and a human granted finality.
          Once issued, it is truth anyone can pull back to first principles,
          any time.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-stone-900 border border-stone-800 rounded-xl overflow-hidden">
          {laws.map((law) => (
            <div key={law.n} className="bg-neutral-950 p-5">
              <div className="text-[10px] uppercase tracking-[0.22em] text-amber-400/70 font-semibold font-mono">
                LAW {law.n}
              </div>
              <h3 className="mt-3 text-sm font-semibold tracking-tight text-stone-100">
                {law.title}
              </h3>
              <p className="mt-2 text-xs text-stone-400 leading-relaxed font-serif italic">
                {law.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 items-center">
          <a
            href="https://swarmandbee.ai/chain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.18em] rounded border border-amber-500/40 text-amber-300 px-4 py-2 hover:bg-amber-500/10 transition-colors font-mono"
          >
            Watch the refinery work ↗ swarmandbee.ai/chain
          </a>
          <a
            href="https://swarmandbee.ai/deed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.18em] rounded border border-stone-700 text-stone-300 px-4 py-2 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
          >
            Inspect any deed ↗ /deed
          </a>
          <a
            href="https://hashscan.io/#/mainnet/topic/0.0.10291838"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.18em] rounded border border-stone-700 text-stone-300 px-4 py-2 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
          >
            Verify on Hedera ↗
          </a>
        </div>

        <p className="mt-8 text-xs text-stone-500 italic font-serif leading-relaxed max-w-3xl">
          "Validate the Validator. Prove the Location." Anyone can sell
          rows. We sell <span className="text-amber-300/90 not-italic font-sans">defendable inventory</span> · backed by 13+
          trained custom models · 5 already shipped · 1 in flight · all
          cooked on the locked Gold Standard recipe in the Swarm &amp; Bee
          in-house refinery.
        </p>
      </div>
    </section>
  );
}

// ─── CATEGORY SHIFT · offense vs defense ───────────────────────────────────
function CategoryShift() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-4xl">
          <Eyebrow>WHY NOW</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Everyone is selling{" "}
            <span className="font-serif italic font-normal text-stone-400">offense</span>.
            Nobody is selling{" "}
            <span className="font-serif italic font-normal text-amber-300">defense</span>.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card
            tone="muted"
            title="Offense Agent"
            lines={[
              "Performs the business work",
              "Sales rep · clerk · processor · CSR",
              "Competes on speed · volume · coverage",
              "Sold by every AI vendor on the market",
            ]}
          />
          <Card
            tone="honey"
            title="Defense Layer"
            lines={[
              "Records every play · grades it · flags the misses · fixes the patterns",
              "Internal audit · QA · compliance · property manager",
              "Issues the deed your CFO and insurer can read",
              "Sold by exactly nobody until now",
            ]}
          />
        </div>

        <p className="mt-10 text-base text-stone-300 leading-relaxed max-w-4xl">
          Every functional business in history runs both. The AI agent
          market today runs only offense. We are the missing defense layer.{" "}
          <span className="text-amber-300 font-medium">Third-party.</span>{" "}
          <span className="text-amber-300 font-medium">Receipted.</span>{" "}
          <span className="text-amber-300 font-medium">KPMG-equivalent.</span>{" "}
          We do not ship the agent. We deed the agent.
        </p>
      </div>
    </section>
  );
}

// ─── DOCTRINE · 4 ideas · the operating model ──────────────────────────────
function DoctrineSection() {
  const items = [
    {
      head: "Defense in the shadows",
      body: "Your agent runs all day · uninterrupted · no latency · no gates. We capture every task in the background. Reconciliation runs at 2am. The brief is in your inbox by 6am.",
    },
    {
      head: "Per-task deed ledger",
      body: "Not a certificate · a running ledger. Every single task gets its own deed entry. Daily · weekly · monthly rollup deeds prove the agent's win rate over time.",
    },
    {
      head: "Liens on deeds",
      body: "Deeds are free-and-clear or they carry liens. Liens have type · severity · root cause · workout plan. Fixers clear the liens. The next day's deed is cleaner.",
    },
    {
      head: "CRE due-diligence vocabulary",
      body: "Books · title · partners · terms · economic study · functionality · if it goes dark then what. Every business buyer already knows the checklist. We translate AI into the language CFOs already use.",
    },
  ];

  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-4xl">
          <Eyebrow>DOCTRINE</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            How the defense layer{" "}
            <span className="font-serif italic font-normal text-amber-300">actually</span>{" "}
            works.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((d) => (
            <div
              key={d.head}
              className="rounded-xl border border-stone-800 bg-neutral-950/60 px-5 py-6"
            >
              <div className="text-sm font-semibold text-amber-300 mb-2.5">{d.head}</div>
              <p className="text-sm text-stone-400 leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── DEPLOYMENT MODES · HoneyBox + DefendableCloud ─────────────────────────
function DeploymentModes() {
  return (
    <section id="modes" className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-4xl">
          <Eyebrow>DEPLOYMENT</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Two modes.{" "}
            <span className="font-serif italic font-normal text-amber-300">Same doctrine.</span>
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            Run the defense on a physical appliance in your network · or
            on Defendable's own datacenter compute. Most customers run
            both — regulated agents on the HoneyBox, low-stakes agents
            on the cloud.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <ModeCard
            href="/honeybox"
            title="HoneyBox"
            subtitle="Edge mode · physical appliance"
            bullets={[
              "$249-2,500 hardware · NVIDIA Jetson family",
              "Sits on your network · data NEVER leaves the box",
              "Local Tribunal · local deed issuance · local storage",
              "ENS-registered identity per agent",
              "HIPAA · SOC2 · FedRAMP · CMMC compatible",
              "Leased · tax-deductible · off balance sheet",
            ]}
            footnote="The regulated-industry wedge · imaging centers · law firms · financial services · government."
            cta="Order a HoneyBox →"
          />
          <ModeCard
            href="/cloud"
            title="DefendableCloud"
            subtitle="Cloud mode · our compute · open weights"
            bullets={[
              "128 × RTX PRO 6000 Blackwell · 12,288 GB VRAM · paid in full",
              "Qwen 2.5 32B · Llama 3.3 70B · DeepSeek V3 · Mixtral · Phi-4",
              "Contractual no-logging · no training on prompts · BAA-ready",
              "Doctrine pack rules inline · enforced inside inference",
              "Same deed pipeline as HoneyBox",
              "$5-10 per million tokens · 90%+ gross margin we share with you",
            ]}
            footnote="The privacy-native cloud alternative · no hardware to manage · no Big Tech telemetry."
            cta="Try DefendableCloud →"
            tone="honey"
          />
        </div>
      </div>
    </section>
  );
}

// ─── MORNING BRIEF · what the owner actually sees ──────────────────────────
function MorningBrief() {
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div>
            <Eyebrow>WHAT YOU READ EACH MORNING</Eyebrow>
            <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
              One email.{" "}
              <span className="font-serif italic font-normal text-amber-300">One click decisions.</span>{" "}
              Compounding progress.
            </h2>
            <p className="mt-6 text-base text-stone-300 leading-relaxed">
              For 95% of customers the entire product surface is one email
              every morning. Yesterday's deed per agent. Liens to clear.
              Workouts to approve. 30 and 90 day trends.
            </p>
            <p className="mt-4 text-base text-stone-400 leading-relaxed">
              No real-time dashboard streaming flags all day. No
              interruption to your agents. Defense in the shadows of the
              night. Reconciliation at 2am. The deed by 6am. Your
              decision over coffee.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              <Stat label="Reconciliation window" value="02:00 ET" />
              <Stat label="Brief delivered" value="06:00 ET" />
              <Stat label="Avg owner read time" value="30 sec" />
              <Stat label="Avg decisions/day" value="0-2" />
            </div>
          </div>

          <BriefPreview />
        </div>
      </div>
    </section>
  );
}

// ─── MATH · the 80/20 → 95/5 story ─────────────────────────────────────────
function MathSection() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-4xl">
          <Eyebrow>THE MATH</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            From{" "}
            <span className="font-mono text-stone-300">80 / 20</span>{" "}
            to{" "}
            <span className="font-mono text-amber-300">95 / 5</span>.
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            CRE brokers measure it as 300 dials → 10 proposals → 2
            listings won. AI agents measure it the same way: 100 plays
            performed → 80 promoted → 20 flagged. Defendable doesn't
            just count the flags — we cluster them into patterns,
            ship the fix, and prove the lift.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          <FlagCard
            stage="Baseline"
            rate="80% / 20%"
            note="Day 30 · first statistically reliable read"
            tone="muted"
          />
          <FlagCard
            stage="After Pattern A fix"
            rate="92% / 8%"
            note="Pack rule R-0042 ships · auto-deploys via Router"
            tone="mid"
          />
          <FlagCard
            stage="After Pattern B + C fixes"
            rate="96% / 4%"
            note="Day 90 · DEFENDABLE-ATTESTED · insurer-readable"
            tone="honey"
          />
        </div>

        <div className="mt-12 rounded-xl border border-amber-500/30 bg-amber-500/[0.04] px-6 py-6 lg:px-8 lg:py-7">
          <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300 font-semibold">
            The thesis line
          </div>
          <div className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100 leading-snug">
            The deed is only as good as the{" "}
            <span className="font-serif italic font-normal text-amber-300">fix</span>{" "}
            it delivers.
          </div>
          <div className="mt-2 text-sm text-stone-400">
            Observability shows you the flag. Defense ships the fix and
            issues a new deed proving the lift. That is the closed loop
            nobody else delivers.
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TRUST SIGNALS · 128 RTX 6000s · DC owned · paid in full ───────────────
function TrustSignals() {
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-4xl">
          <Eyebrow>WHY THIS WORKS</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            We own the building.{" "}
            <span className="font-serif italic font-normal text-amber-300">All of it.</span>
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            Defense doctrine only works if the rail behind it is
            credible. Defendable owns the datacenter, the compute, the
            doctrine, the deed registry, and the brand surfaces. No
            VC equity given up for the GPUs. No cloud bill exposure.
            No third-party model dependency for sensitive work.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <TrustCard
            value="128"
            label="RTX PRO 6000 Blackwell"
            note="Paid in full · zero debt · 12,288 GB aggregate VRAM"
          />
          <TrustCard
            value="$0"
            label="GPU debt outstanding"
            note="No leverage on the compute fleet · no margin call risk"
          />
          <TrustCard
            value="6"
            label="Brand surfaces"
            note="Institutional · movement · research · OSS · gateway · cloud"
          />
          <TrustCard
            value="0"
            label="Offense agents we ship"
            note="Third-party-only · KPMG-equivalent · no conflict of interest"
          />
        </div>

        <div className="mt-10 text-xs text-stone-500 tracking-tight">
          DefendableCloud is served from Defendable-owned hardware on an
          open-weights model library. Receipts persist on Tigris-backed
          durable storage. The doctrine pack registry is open source.
          The Defendable Agent Deed is anchored to ENS. Everything is
          auditable end-to-end.
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
          <Eyebrow>BEFORE YOU TRAIN THE MODEL</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 leading-tight max-w-4xl">
            Before You Train the Model,{" "}
            <span className="font-serif italic font-normal text-amber-300">Run the Playbook.</span>
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed max-w-2xl">
            Discover how your agents behave under accountable execution. Record
            the tape. Let neutral referees call the facts. Decide what deserves
            to move forward.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="/defend-the-claw"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-amber-400 text-neutral-950 text-sm font-semibold tracking-tight hover:bg-amber-300 transition-colors"
            >
              Run the Playbook
              <Arrow />
            </a>
            <a
              href="/owners-box"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-amber-500/40 bg-amber-500/10 text-sm text-amber-300 font-semibold tracking-tight hover:bg-amber-500/20 hover:border-amber-400 transition-colors"
            >
              Explore the Owner's Box
            </a>
            <a
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-700 text-sm text-stone-200 font-semibold tracking-tight hover:border-stone-500 hover:text-stone-50 transition-colors"
            >
              See the Protocol
            </a>
            <a
              href={`mailto:${SALES_EMAIL}?subject=Talk%20to%20Defendable`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-800 text-sm text-stone-400 font-semibold tracking-tight hover:text-stone-200 transition-colors"
            >
              Talk to us
            </a>
          </div>

          <p className="mt-8 text-xs text-stone-500 italic font-serif tracking-tight max-w-2xl leading-relaxed">
            DefendableOS is built for human finality. No output becomes
            approved, publishable or eligible for training solely because an AI
            says it is ready.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── THE PROBLEM · fine-tuning without replay ──────────────────────────────
function TheProblem() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-4xl">
          <Eyebrow>THE PROBLEM</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            Fine-Tuning Without Replay Is{" "}
            <span className="font-serif italic font-normal text-amber-300">Training on Air.</span>
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            Most AI systems are trained on outputs that were never truly
            tested. A polished report can hide broken math, impossible dates,
            unsupported sources, undisclosed substitutions and synthesis drift.
            Training on those outputs does not create trust. It reinforces
            unmeasured behavior.
          </p>
          <p className="mt-4 text-base text-stone-400 leading-relaxed">
            DefendableOS begins before fine-tuning. It puts the agent on the
            field first, records what actually happened and identifies which
            behavior deserves correction, reinforcement or rejection.
          </p>
        </div>
        <div className="mt-10 rounded-xl border border-amber-500/30 bg-amber-500/[0.04] px-6 py-6 lg:px-8 lg:py-7 max-w-4xl">
          <p className="text-lg md:text-xl font-semibold tracking-tight text-stone-100 leading-snug">
            A dataset is not guidance until the execution behind it{" "}
            <span className="font-serif italic font-normal text-amber-300">survives replay.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── WHAT DEFENDABLEOS IS · the referee protocol ───────────────────────────
function WhatItIs() {
  const tests = [
    "Math tests whether totals reconcile.",
    "Chronology tests whether receipts are possible.",
    "Provenance tests whether sources support claim grades.",
    "Replay tests whether synthesis preserved or corrupted correct work.",
    "Boundary controls ensure no output becomes final without human approval.",
  ];
  const referees: { title: string; body: string; tone?: "honey" }[] = [
    { title: "Math Referee", body: "Do formulas, totals and classifications reconcile?" },
    { title: "Chronology Referee", body: "Could the work and its sources exist in the claimed order?" },
    { title: "Provenance Referee", body: "Does the evidence support the strength of the claim?" },
    { title: "Replay Referee", body: "Did final synthesis preserve or override correct agent work?" },
    { title: "Boundary Referee", body: "Was approval, publication or finality claimed without authority?" },
    { title: "Human Owner", body: "Makes the final, unappealable decision.", tone: "honey" },
  ];
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-4xl">
          <Eyebrow>WHAT DEFENDABLEOS IS</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            A Neutral Referee Protocol —{" "}
            <span className="font-serif italic font-normal text-amber-300">Not Another Judge Model.</span>
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            DefendableOS does not rely on one model's opinion about another
            model's answer. Its referee system applies rules that were defined
            before the work began.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-stone-300 leading-relaxed">
            {tests.map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <span className="mt-1.5 inline-block w-1 h-1 rounded-full bg-amber-400" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base text-stone-400 leading-relaxed">
            The referees do not care which model wins. They call what the
            recorded evidence proves.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {referees.map((r) => {
            const isHoney = r.tone === "honey";
            return (
              <div
                key={r.title}
                className={`rounded-xl border px-6 py-7 ${
                  isHoney
                    ? "border-amber-500/40 bg-gradient-to-br from-amber-500/[0.08] to-amber-500/[0.02]"
                    : "border-stone-800 bg-neutral-950/60"
                }`}
              >
                <div className={`text-sm font-semibold mb-2.5 ${isHoney ? "text-amber-300" : "text-stone-100"}`}>
                  {r.title}
                </div>
                <p className="text-sm text-stone-400 leading-relaxed">{r.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── THE PROTOCOL FLOW · assignment to earned guidance ─────────────────────
function ProtocolFlow() {
  const steps = [
    { title: "Flightsheet", body: "A written assignment defines the mission, roles, required outputs, evidence requirements and prohibited actions before execution begins." },
    { title: "Rulebook", body: "Precommitted code, math, chronology, source and promotion rules establish what will count as compliant execution." },
    { title: "Field Execution", body: "Agents perform the assigned work by role. Any supplemental agents, substitutions or synthesis layers must be attributable." },
    { title: "Game Tape", body: "Artifacts, source receipts, calculations, hashes, classifications and material transformations are preserved." },
    { title: "Referee Calls", body: "Neutral checks identify credits, penalties, drift, unsupported promotion and deterministic failures." },
    { title: "Owner's Box", body: "The human sees what passed, what failed, what survived with limitations and what must be remediated." },
    { title: "Replay-Qualified Training", body: "Only human-approved discoveries become eligible correction pairs, operating guidance or future training material." },
  ];
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-4xl">
          <Eyebrow>THE PROTOCOL</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            From Assignment to{" "}
            <span className="font-serif italic font-normal text-amber-300">Earned Guidance.</span>
          </h2>
        </div>
        <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-xl border border-stone-800 bg-neutral-950/60 px-6 py-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-semibold tracking-tight text-amber-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-stone-100">{s.title}</span>
              </div>
              <p className="mt-3 text-sm text-stone-400 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ─── OWNER'S BOX · human accountability console ────────────────────────────
function OwnersBox() {
  const shows = [
    "what assignment was called",
    "which agents took the field",
    "which positions performed correctly",
    "where execution drifted",
    "whether synthesis preserved or corrupted good underlying work",
    "which claims survived replay",
    "which failures require remediation",
    "whether approval or publication remains blocked",
  ];
  return (
    <section id="owners-box" className="border-b border-stone-900/80 bg-stone-950/40 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-4xl">
          <Eyebrow>OWNER'S BOX</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            The Human Should See the Game —{" "}
            <span className="font-serif italic font-normal text-amber-300">Not Just the Final Report.</span>
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            AI-generated work should not arrive as a polished deliverable with
            hidden failures. The Owner's Box is the visual accountability
            console for multi-agent execution.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-4xl">
          {shows.map((s) => (
            <div key={s} className="flex items-start gap-2.5 text-sm text-stone-300 leading-relaxed">
              <span className="mt-1.5 inline-block w-1 h-1 rounded-full bg-amber-400 shrink-0" />
              <span>It shows {s}.</span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xl md:text-2xl font-semibold tracking-tight text-stone-100">
          Neutral referees call the game.{" "}
          <span className="font-serif italic font-normal text-amber-300">The human owner grants finality.</span>
        </p>
        <div className="mt-8">
          <a
            href="/owners-box"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-amber-400 text-neutral-950 text-sm font-semibold tracking-tight hover:bg-amber-300 transition-colors"
          >
            Open the Owner's Box console
            <Arrow />
          </a>
          <p className="mt-3 text-xs text-stone-500">Illustrative sample console · no real or approved case is shown.</p>
        </div>
      </div>
    </section>
  );
}

// ─── REPLAY-QUALIFIED TRAINING · what is worth training ────────────────────
function ReplayQualifiedTraining() {
  const conditions = [
    "the assignment was defined",
    "the agent executed the work",
    "the evidence was preserved",
    "the rule violation or successful behavior was visible",
    "the referee call was recorded",
    "the human approved what should happen next",
  ];
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-4xl">
          <Eyebrow>REPLAY-QUALIFIED TRAINING</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            We Determine{" "}
            <span className="font-serif italic font-normal text-amber-300">What Is Worth Training.</span>
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed">
            DefendableOS does not manufacture training volume and call it
            trust. It discovers valuable guidance through accountable agent
            execution. A correction becomes worth teaching only after:
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-stone-300 leading-relaxed">
            {conditions.map((c) => (
              <li key={c} className="flex items-start gap-2.5">
                <span className="mt-1.5 inline-block w-1 h-1 rounded-full bg-amber-400" />
                <span>{c};</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base text-stone-400 leading-relaxed">
            This creates replay-qualified guidance: correction pairs and
            behavioral evidence grounded in what agents actually did, not what
            another model merely preferred.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card
            tone="muted"
            title="Traditional Training Data"
            lines={[
              "Generated examples",
              "Assumed correctness",
              "Hidden uncertainty",
              "Flat labels",
              "More tokens",
            ]}
          />
          <Card
            tone="honey"
            title="Replay-Qualified Guidance"
            lines={[
              "Recorded execution events",
              "Referee-called outcomes",
              "Visible failure attribution",
              "Evidence-linked limitations",
              "Better behavioral intelligence",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

// ─── USE CASES · protocol across domains ───────────────────────────────────
function UseCases() {
  const cases = [
    { head: "Agent Coding", body: "Test scope, file changes, build results, forbidden actions and deployment boundaries before code is accepted." },
    { head: "Compute Appraisal", body: "Tie hardware identity, benchmark results, market comps and valuation assumptions to recorded receipts." },
    { head: "Commercial Real Estate", body: "Recompute underwriting math, trace assumptions and expose unsupported investment conclusions." },
    { head: "Federal Research", body: "Verify dates, opportunity requirements, source authority and completion-manifest integrity." },
    { head: "Medical or Regulated Workflows", body: "Separate candidate output from approved guidance through source, safety and finality controls." },
    { head: "AI Investment Analysis", body: "Test revenue proof, compute cost, performance claims and valuation narratives before trust is extended." },
  ];
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-4xl">
          <Eyebrow>USE CASES</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">
            One protocol.{" "}
            <span className="font-serif italic font-normal text-amber-300">Every domain where agents act.</span>
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div key={c.head} className="rounded-xl border border-stone-800 bg-neutral-950/60 px-6 py-6">
              <div className="text-sm font-semibold text-amber-300 mb-2.5">{c.head}</div>
              <p className="text-sm text-stone-400 leading-relaxed">{c.body}</p>
            </div>
          ))}
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

function Card({
  tone,
  title,
  lines,
}: {
  tone: "muted" | "honey";
  title: string;
  lines: string[];
}) {
  const isHoney = tone === "honey";
  return (
    <div
      className={`rounded-xl border px-6 py-7 ${
        isHoney
          ? "border-amber-500/40 bg-gradient-to-br from-amber-500/[0.07] to-amber-500/[0.02]"
          : "border-stone-800 bg-neutral-950/60"
      }`}
    >
      <div className={`text-sm font-semibold mb-4 ${isHoney ? "text-amber-300" : "text-stone-400"}`}>
        {title}
      </div>
      <ul className="space-y-2.5 text-sm text-stone-300 leading-relaxed">
        {lines.map((l) => (
          <li key={l} className="flex items-start gap-2.5">
            <span className={`mt-1.5 inline-block w-1 h-1 rounded-full ${isHoney ? "bg-amber-400" : "bg-stone-600"}`} />
            <span>{l}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ModeCard({
  href,
  title,
  subtitle,
  bullets,
  footnote,
  cta,
  tone,
}: {
  href: string;
  title: string;
  subtitle: string;
  bullets: string[];
  footnote: string;
  cta: string;
  tone?: "honey";
}) {
  const isHoney = tone === "honey";
  return (
    <a
      href={href}
      className={`group block rounded-xl border px-8 py-9 transition-colors ${
        isHoney
          ? "border-amber-500/40 bg-gradient-to-br from-amber-500/[0.08] to-amber-500/[0.02] hover:border-amber-400/60"
          : "border-stone-700 bg-gradient-to-br from-stone-900/80 to-neutral-950 hover:border-stone-500"
      }`}
    >
      <div className={`text-[10px] uppercase tracking-[0.22em] font-semibold ${isHoney ? "text-amber-300" : "text-stone-500"}`}>
        {subtitle}
      </div>
      <div className={`mt-3 text-2xl md:text-3xl font-semibold tracking-tight ${isHoney ? "text-stone-50" : "text-stone-100"}`}>
        {title}
      </div>

      <ul className="mt-6 space-y-2.5 text-sm text-stone-300 leading-relaxed">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <span className={`mt-1.5 inline-block w-1 h-1 rounded-full ${isHoney ? "bg-amber-400" : "bg-stone-500"}`} />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs text-stone-500 italic leading-relaxed">{footnote}</p>

      <div
        className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold tracking-tight transition-colors ${
          isHoney ? "text-amber-300 group-hover:text-amber-200" : "text-stone-200 group-hover:text-stone-50"
        }`}
      >
        {cta}
      </div>
    </a>
  );
}

function FlagCard({
  stage,
  rate,
  note,
  tone,
}: {
  stage: string;
  rate: string;
  note: string;
  tone: "muted" | "mid" | "honey";
}) {
  const styles = {
    muted: "border-stone-800 bg-neutral-950/60 text-stone-300",
    mid: "border-stone-700 bg-stone-900/60 text-stone-100",
    honey: "border-amber-500/40 bg-amber-500/[0.06] text-stone-50",
  }[tone];
  return (
    <div className={`rounded-xl border px-6 py-7 ${styles}`}>
      <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold">{stage}</div>
      <div className="mt-3 font-mono text-3xl font-semibold tracking-tight">{rate}</div>
      <div className="mt-3 text-xs text-stone-400 leading-relaxed">{note}</div>
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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-stone-800 bg-neutral-950/60 px-3 py-2.5">
      <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">{label}</div>
      <div className="text-stone-100 font-semibold tracking-tight mt-0.5 text-sm">{value}</div>
    </div>
  );
}

// ─── inline icons (no lucide-react · keep bundle light) ────────────────────

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

function WarnMark() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-amber-300">
      <path d="M6 1.5l5 9H1l5-9z" />
      <path d="M6 5v3M6 9.2v.1" strokeWidth="1.4" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="1.5" y="3" width="11" height="8" rx="1" />
      <path d="M2 4l5 4 5-4" />
    </svg>
  );
}
