// /about · the operator thesis · "we own the building"
//
// Institutional credibility surface for investors + enterprise buyers + future
// founder-program reviewers. The "we own the GPUs · we own the DC · we own the
// brand stack" thesis told straight · honest · no bravado.

import { Footer, Header } from "../components/SiteShell";

const SALES_EMAIL = "build@swarmandbee.ai";

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <BackgroundGrid />
      <Header />
      <main>
        <Hero />
        <Position />
        <OwnTheBuilding />
        <FoundationStack />
        <FounderThesis />
        <NotForUs />
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
      <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-16 lg:pt-28 lg:pb-20">
        <Eyebrow>ABOUT DEFENDABLE</Eyebrow>
        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-50 leading-[1.05]">
          We own the{" "}
          <span className="font-serif italic font-normal text-amber-300">building</span>.
        </h1>
        <p className="mt-8 text-lg text-stone-300 leading-relaxed">
          Defendable is a Florida-incorporated independent AI defense
          rail · operated by{" "}
          <strong className="text-stone-100">Swarm and Bee LLC</strong>{" "}
          (DBA Swarm &amp; Bee AI · D-U-N-S 138652395). The datacenter
          is owned. The compute fleet is paid in full. The brand stack
          is locked. The doctrine is published. The receipts are
          durable. We started this on purpose.
        </p>
      </div>
    </section>
  );
}

function Position() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
        <Eyebrow>POSITION</Eyebrow>
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100 leading-tight">
          KPMG for AI agents.{" "}
          <span className="font-serif italic font-normal text-amber-300">Not Cisco.</span>
        </h2>
        <div className="mt-6 space-y-4">
          <P>
            Cisco sells the networking gear AND audits the network.
            That works for a vendor. It does not work for a trust rail.
            KPMG audits but does not sell the company. Moody's rates
            but does not issue the debt. MRI centers read the scans
            but do not run the imaging center.
          </P>
          <P>
            <strong className="text-stone-100">Defendable will never ship an offense agent.</strong>{" "}
            Not a refund bot · not a coding bot · not a sales SDR ·
            not a payroll processor · not under any subsidiary · not
            in any pricing tier. This is permanent brand contract.
            The institutional credibility that makes a Defendable
            Agent Deed worth issuing collapses the moment we ship
            offense ourselves.
          </P>
          <P>
            This contract is in writing · linked from every page · and
            is the load-bearing reason DefendableOS can be a defense
            rail every vendor in the AI ecosystem can trust.
          </P>
        </div>
      </div>
    </section>
  );
}

function OwnTheBuilding() {
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
        <Eyebrow>WE OWN THE BUILDING</Eyebrow>
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100 leading-tight">
          The infrastructure is{" "}
          <span className="font-serif italic font-normal text-amber-300">already paid for</span>.
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <StatCard
            value="128"
            label="RTX PRO 6000 Blackwell"
            sub="96 GB VRAM per card · 12,288 GB aggregate fleet"
          />
          <StatCard
            value="$0"
            label="GPU debt outstanding"
            sub="No leverage · no margin-call risk · no AWS bill exposure"
          />
          <StatCard
            value="1"
            label="Datacenter · owned"
            sub="Not leased rack space · Defendable-controlled facility"
          />
          <StatCard
            value="6"
            label="Brand-stack domains locked"
            sub="Each segmented to a different audience · all coherent"
          />
        </div>

        <div className="mt-10 space-y-4">
          <P>
            Most AI inference businesses run on borrowed compute · pay
            retail rates to AWS / GCP / Lambda for GPU time · their
            COGS rises when the cloud raises prices · their unit
            economics break when a competitor undercuts them.
          </P>
          <P>
            <strong className="text-stone-100">Defendable's compute COGS is amortization plus electricity.</strong>{" "}
            ~$0.50 per million tokens served · versus $5-15 for
            cloud-leased equivalent inference. That's a ~10× margin
            advantage · permanent · unaffected by every other vendor's
            cap-table drama.
          </P>
          <P>
            The 128-card fleet is the precondition that makes{" "}
            <a href="/cloud" className="text-amber-300 underline hover:text-amber-200">DefendableCloud</a>{" "}
            economic. Without owned compute · privacy-native hosted
            inference is just a marketing claim. With it · we can
            contractually pledge no-logging, no-training, no-third-party-share
            because the cards run in a facility we control.
          </P>
        </div>
      </div>
    </section>
  );
}

function FoundationStack() {
  const items = [
    ["Durable storage", "Tigris S3-compatible storage on Fly · receipts survive every redeploy · proven 2026-05-23."],
    ["Open weights", "Qwen 32B · Llama 70B · DeepSeek V3 · Mixtral · Phi-4 · no proprietary-model lock-in."],
    ["ENS-anchored deeds", "defendable.eth namespace · per-agent verifiable identity · cross-vendor portable."],
    ["Doctrine pack registry", "Open source · MIT licensed · contributed to by researchers and customers."],
    ["Public source-of-truth", "12-article Doctrine page · always linked · always citable."],
    ["Independent third-party", "Florida LLC · zero AI-vendor equity · no conflict-of-interest disclosures needed."],
  ];
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
        <Eyebrow>FOUNDATION</Eyebrow>
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100 leading-tight">
          Everything checked.
        </h2>
        <P className="mt-6">
          Defense doctrine only works if the rail behind it is
          credible end-to-end. Here's what's underneath.
        </P>

        <ul className="mt-8 space-y-3">
          {items.map(([h, b]) => (
            <li key={h as string} className="rounded-xl border border-stone-800 bg-neutral-950/60 px-5 py-4">
              <div className="text-base font-semibold text-amber-300">{h}</div>
              <div className="mt-1.5 text-sm text-stone-400 leading-relaxed">{b}</div>
            </li>
          ))}
        </ul>

        <P className="mt-8">
          See <a href="/doctrine" className="text-amber-300 underline hover:text-amber-200">/doctrine</a>{" "}
          for the 12-article reference.
        </P>
      </div>
    </section>
  );
}

function FounderThesis() {
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
        <Eyebrow>OPERATOR THESIS</Eyebrow>
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100 leading-tight">
          Built by an{" "}
          <span className="font-serif italic font-normal text-amber-300">operator</span>{" "}
          · not an AI researcher.
        </h2>

        <div className="mt-6 space-y-4">
          <P>
            DefendableOS is built by an operator with a commercial
            real estate background · which is why the doctrine reads
            in CRE due-diligence vocabulary instead of AI safety
            jargon. Books · title · partners · terms · economic study ·
            functionality · "if it goes dark then what" · liens-on-deeds ·
            free-and-clear closings · workout plans · listing
            inventory · cap-rate compression.
          </P>
          <P>
            Every business buyer already knows this vocabulary. They've
            used it their whole career to evaluate buildings · companies ·
            franchises · partnerships · debt instruments. The same
            checklist · applied to AI agents · sells to procurement teams
            in a 30-minute conversation instead of a 9-month enterprise
            cycle.
          </P>
          <P>
            The cap-rate framing is not metaphor. DefendableOS is a
            recurring-receipted-evidence rail with NNN-equivalent
            cashflow characteristics: per-asset · per-cycle · refresh
            obligation · insurance-readable · regulator-attestable ·
            asset-attached.{" "}
            <strong className="text-stone-100">The thesis is that this asset class is currently uninsured · uninspected · and self-reported · and that gap is worth ~$5cap NNN on $10M NOI when mature.</strong>
          </P>
        </div>
      </div>
    </section>
  );
}

function NotForUs() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
        <Eyebrow>HONEST POSITIONING</Eyebrow>
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100 leading-tight">
          Who we're{" "}
          <span className="font-serif italic font-normal text-amber-300">not</span>{" "}
          for.
        </h2>
        <P className="mt-6">
          Honest about who DefendableOS is not built for · so we don't
          waste anyone's time:
        </P>

        <ul className="mt-6 space-y-3 text-base text-stone-300 leading-relaxed">
          {[
            "Bootstrapped SaaS startups looking for cheap LLM gateway · we are not the cheapest · we are the most defendable.",
            "Curious individual developers · we are a business defense rail · not a hobbyist toolkit.",
            "AI vendors who want us to deed THEIR offense agent · third-party trust requires we stay agnostic.",
            "Companies whose AI is purely chat-with-customers and never touches files / payments / infra · the per-task deed model is overkill for them.",
            "Buyers looking for AI to replace their compliance team · we add receipts to support compliance · we don't eliminate it.",
          ].map((s) => (
            <li key={s} className="flex gap-3">
              <span className="text-stone-500 font-mono mt-1.5">·</span>
              <span className="text-stone-400">{s}</span>
            </li>
          ))}
        </ul>

        <P className="mt-8">
          We're built for{" "}
          <strong className="text-stone-100">imaging centers · law firms · financial services · government contractors · insurance carriers · mid-market regulated businesses</strong>{" "}
          who run multiple production AI agents and need third-party
          attestation that those agents operate within policy ·
          measurably · auditably · over time.
        </P>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-4xl mx-auto px-6 py-20 lg:py-28">
        <div className="rounded-2xl border border-stone-800 bg-gradient-to-br from-stone-900/80 to-neutral-950 px-8 py-12 lg:px-14 lg:py-16">
          <Eyebrow>CONTACT</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 leading-tight max-w-3xl">
            Talk straight.{" "}
            <span className="font-serif italic font-normal text-amber-300">No deck.</span>
          </h2>
          <p className="mt-6 text-base text-stone-300 leading-relaxed max-w-2xl">
            Send a real question · we send a real answer. No discovery
            call. No 6-touchpoint cadence. Plain email. Founder
            response within 24 hours.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${SALES_EMAIL}?subject=Defendable%20intro`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-amber-400 text-neutral-950 text-sm font-semibold tracking-tight hover:bg-amber-300 transition-colors"
            >
              {SALES_EMAIL}
              <Arrow />
            </a>
            <a
              href="/doctrine"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-700 text-sm text-stone-200 font-semibold tracking-tight hover:border-stone-500 hover:text-stone-50 transition-colors"
            >
              Read the doctrine
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

// ─── building blocks ───────────────────────────────────────────────────────
function P({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-base lg:text-lg text-stone-300 leading-relaxed ${className || ""}`}>{children}</p>
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

function StatCard({ value, label, sub }: { value: string; label: string; sub: string }) {
  return (
    <div className="rounded-xl border border-stone-800 bg-neutral-950/60 px-6 py-7">
      <div className="text-3xl md:text-4xl font-semibold tracking-tight text-amber-300">{value}</div>
      <div className="mt-2 text-sm text-stone-100 font-medium">{label}</div>
      <div className="mt-1 text-xs text-stone-500 leading-relaxed">{sub}</div>
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
