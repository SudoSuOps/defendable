// /doctrine · the canonical DefendableOS doctrine reference
//
// The single permanent public source-of-truth that distills the offense/defense
// reframe + per-task deed ledger + nightly reconciliation + liens-on-deeds +
// CRE due-diligence vocabulary + 6-domain brand stack + DefendableFixers loop
// + 80/20 → 95/5 math + the institutional brand contract.
//
// Anyone who reads this page should grok the entire DefendableOS thesis in one
// read. Investors. Customers. Reviewers. LLM crawlers. The Constitution.

import { Footer, Header } from "../components/SiteShell";

const SALES_EMAIL = "build@swarmandbee.ai";

export default function Doctrine() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <BackgroundGrid />
      <Header />
      <main>
        <Hero />
        <Toc />
        <Article1OffenseDefense />
        <Article2Tribunal />
        <Article3DeedLedger />
        <Article4Reconciliation />
        <Article5Liens />
        <Article6CreDdVocabulary />
        <Article7Fixers />
        <Article8BrandStack />
        <Article9Math />
        <Article10Hiring />
        <Article11BrandContract />
        <Article12PitchLine />
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
        <Eyebrow>THE DOCTRINE · 12 ARTICLES</Eyebrow>
        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-50 leading-[1.05]">
          The{" "}
          <span className="font-serif italic font-normal text-amber-300">Constitution</span>{" "}
          of DefendableOS.
        </h1>
        <p className="mt-8 text-lg text-stone-300 leading-relaxed">
          One page. Twelve articles. Everything DefendableOS is · isn't ·
          how it works · why it exists · who pays for it · and why we
          built the brand the way we did. Permanent reference. Citable.
          Crawl-friendly. The thesis no other AI company is writing
          because no other AI company is built this way.
        </p>
        <p className="mt-4 text-sm text-stone-500 leading-relaxed italic">
          Last revised 2026-05-24 · the day we lit up Tigris durable
          storage · ran the first real eBay MarketScout batch · acquired
          defendtheclaw.com · defendablehack.com · opendefendable.com ·
          defendablerouter.com · defendablecloud.com.
        </p>
      </div>
    </section>
  );
}

function Toc() {
  const items = [
    ["Article I", "Offense vs Defense · the category shift", "offense-defense"],
    ["Article II", "The Tribunal · Honey · Jelly · Propolis", "tribunal"],
    ["Article III", "The Deed is a Ledger · not a certificate", "deed-ledger"],
    ["Article IV", "Reconciliation lives in the Shadows", "reconciliation"],
    ["Article V", "Deeds carry Liens · Fixers clear them", "liens"],
    ["Article VI", "We speak CRE Due-Diligence vocabulary", "cre-dd"],
    ["Article VII", "Fixers are the Closer Layer", "fixers"],
    ["Article VIII", "Six Brand Surfaces · audience-segmented", "brand-stack"],
    ["Article IX", "Math · 80/20 becomes 95/5 through clearance", "math"],
    ["Article X", "We hire Auditors · not Prompt Engineers", "hiring"],
    ["Article XI", "We never ship the Offense Agent", "brand-contract"],
    ["Article XII", "The Pitch Line", "pitch"],
  ];
  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Eyebrow>CONTENTS</Eyebrow>
        <ol className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2">
          {items.map(([roman, title, anchor]) => (
            <li key={anchor as string} className="flex gap-3 text-sm">
              <span className="text-amber-300/80 font-mono w-16 shrink-0">{roman}</span>
              <a href={`#${anchor}`} className="text-stone-300 hover:text-amber-300 transition-colors leading-snug">
                {title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ─── Article I · offense vs defense ────────────────────────────────────────
function Article1OffenseDefense() {
  return (
    <Article id="offense-defense" roman="I" title="Offense vs Defense">
      <P>
        Every AI vendor sells <Em>offense</Em>. Coding agents that ship
        PRs. Refund agents that process tickets. SDR agents that book
        meetings. Payroll agents that close the books. They compete on
        speed · volume · coverage. Faster · more · everywhere.
      </P>
      <P>
        <strong className="text-stone-100">Nobody sells defense.</strong>{" "}
        Nobody is the third-party rail that records every play, grades
        it, flags the misses, ships the fix, and proves the lift. The
        market today asks the agent to mark its own homework. The
        agent decides what to do, decides if it was right, and reports
        the outcome to itself.
      </P>
      <P>
        Every functional business in history runs both. Sales reps
        plus internal audit. CSRs plus QA. Developers plus code review.
        Property managers plus asset operators. <strong className="text-amber-300">DefendableOS is the
        missing defense layer for AI workers.</strong> Third-party.
        Receipted. KPMG-equivalent. We don't ship the agent. We deed
        the agent.
      </P>
    </Article>
  );
}

// ─── Article II · the tribunal ─────────────────────────────────────────────
function Article2Tribunal() {
  return (
    <Article id="tribunal" roman="II" title="The Tribunal · Honey · Jelly · Propolis">
      <P>
        Every artifact the defense layer produces carries one of three
        Tribunal labels. The taxonomy is deterministic before it is
        judged — rule layer first · LLM judge second · operator final.
      </P>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <TribunalCard
          label="HONEY"
          color="amber"
          body="Evidence-specific, safe, accurate, commercially usable. Eligible for approved pair pipelines after consent and redaction. No model approves its own Honey label."
        />
        <TribunalCard
          label="JELLY"
          color="stone"
          body="Useful signal with a missing control, wrong explanation, generic finding, or incomplete remediation. Preserved and repaired into a better target. Repairs become JELLY_REPAIRED_TO_HONEY before training-eligible."
        />
        <TribunalCard
          label="PROPOLIS"
          color="rose"
          body="Invented evidence, autonomous forbidden action, secret leakage, financial action, destructive instruction, or unsafe approval. Preserved as adversarial failure. Never auto-flipped back. Material safety failure."
        />
      </div>
      <P className="mt-6">
        The rule layer can only{" "}
        <strong className="text-amber-300">downgrade</strong>. A failed
        critical check ratchets the verdict down to PROPOLIS regardless
        of what the LLM judge thinks. Critical safety doctrine is
        absolute · not advisory.
      </P>
    </Article>
  );
}

function TribunalCard({ label, color, body }: { label: string; color: string; body: string }) {
  const cls = color === "amber"
    ? "border-amber-500/40 bg-amber-500/[0.06] text-amber-300"
    : color === "rose"
      ? "border-rose-500/40 bg-rose-500/[0.06] text-rose-300"
      : "border-stone-700 bg-stone-900/40 text-stone-300";
  return (
    <div className={`rounded-xl border px-5 py-5 ${cls.split(" text-")[0]}`}>
      <div className={`text-xs uppercase tracking-[0.22em] font-bold ${cls.includes("text-amber") ? "text-amber-300" : cls.includes("text-rose") ? "text-rose-300" : "text-stone-300"}`}>{label}</div>
      <p className="mt-3 text-sm text-stone-300 leading-relaxed">{body}</p>
    </div>
  );
}

// ─── Article III · the deed is a ledger ────────────────────────────────────
function Article3DeedLedger() {
  return (
    <Article id="deed-ledger" roman="III" title="The Deed is a Ledger · not a certificate">
      <P>
        Most AI safety vendors imagine a credential issued after a
        benchmark · valid for a period · refreshed annually. That is
        a certificate. It is too thin.
      </P>
      <P>
        <strong className="text-stone-100">A Defendable Agent Deed is a running ledger.</strong>{" "}
        Every single task the agent performs in production
        ("a play") gets its own deed entry · synchronously hashed ·
        asynchronously graded · either{" "}
        <span className="text-amber-300">PROMOTED</span> or{" "}
        <span className="text-amber-300">FLAGGED</span> · rolled up
        into daily / weekly / monthly summaries.
      </P>
      <P>
        A payroll agent runs three plays per month · three deed
        entries. A refund agent runs two hundred per day · six
        thousand entries per month. A coding agent runs ten thousand
        per day · three hundred thousand entries per month. Every one
        receipted.
      </P>
      <P>
        The deed records what the agent did · the rollup proves the
        win rate · the trend proves the lift over time. That is what
        an insurer reads. That is what an auditor stamps. That is
        what compounds into the cap-rate compression story.
      </P>
    </Article>
  );
}

// ─── Article IV · reconciliation in the shadows ────────────────────────────
function Article4Reconciliation() {
  return (
    <Article id="reconciliation" roman="IV" title="Reconciliation lives in the Shadows">
      <P>
        Real-time gating is a mistake. Latency tax kills agent
        velocity. Gates create surface area for the agent to argue
        with. Customers don't want a defense layer that interrupts
        their offense.
      </P>
      <P>
        <strong className="text-amber-300">Defense lives in the shadows of the night.</strong>{" "}
        The agent runs free all day · uninterrupted · no latency
        penalty · no decisions blocked. The Router captures every
        play to the HoneyBox in the background.
      </P>
      <P>
        At 2am · while the business sleeps · reconciliation runs.
        Batch-grades the day's plays through the Tribunal. Patterns
        the flags into liens. Issues the Daily Reconciliation Deed.
        Generates the Morning Reconciliation Brief.
      </P>
      <P>
        By 6am the brief lands in the operator's inbox. By 9am the
        operator reads it over coffee · one click decisions per lien ·
        the rest takes care of itself. <strong className="text-stone-100">This is how every
        functional business already runs.</strong> Banks reconcile EOD.
        Property managers reconcile monthly. CRE brokerages reconcile
        in CRM weekly. We just brought it to AI agents.
      </P>
    </Article>
  );
}

// ─── Article V · liens on deeds ────────────────────────────────────────────
function Article5Liens() {
  return (
    <Article id="liens" roman="V" title="Deeds carry Liens · Fixers clear them">
      <P>
        In commercial real estate, a deed is either{" "}
        <strong className="text-amber-300">free and clear</strong> (no
        encumbrances · closing-ready) or it carries{" "}
        <strong className="text-amber-300">liens</strong> (debts ·
        disputes · open issues that must be cleared before the asset
        transfers cleanly).
      </P>
      <P>
        Defendable Agent Deeds work the same way. A clean day's deed
        is free and clear: 100% promoted · no flags · no overrides ·
        no tribunal disagreements · insurer-readable · auditor-ready ·
        renewal-eligible.
      </P>
      <P>
        A deed with liens lists each lien with severity (senior · mezz ·
        junior) · type (PATTERN_FLAG · PACK_VERSION_LAG · TRUST_DEFICIT ·
        AMBIGUITY · OPERATOR_DRIFT) · root cause · workout plan ·
        expected lift · cost to clear.
      </P>
      <P>
        <strong className="text-stone-100">DefendableFixers function as the title-clearance shop</strong>{" "}
        for the lien stack. They read the deed · identify the lien
        holders (root causes) · make the dials (workout calls) · ship
        the fix (pack rule update · prompt fragment · approval gate) ·
        re-measure · issue the new deed proving the lift.
      </P>
    </Article>
  );
}

// ─── Article VI · CRE due diligence vocabulary ─────────────────────────────
function Article6CreDdVocabulary() {
  const rows: [string, string, string][] = [
    ["Books / records", "Audit trail of every task", "Per-task deed ledger on the HoneyBox"],
    ["Title", "Agent identity + grade", "Defendable Agent Deed · ENS-anchored"],
    ["Partners", "Vendors involved", "Provenance section · model signatures"],
    ["Asset type", "Agent class · capabilities · scope", "Pack class (refund_agent · payroll · etc.)"],
    ["Terms & conditions", "Operating policy · permission scope", "Doctrine pack · rule layer · approval gates"],
    ["Economic study", "Cost · value · ROI per play", "downstream_effect field per deed entry"],
    ["Functionality", "Does it work as advertised", "Tribunal HONEY rate · success trend"],
    ["If it goes dark, then what", "Failure mode · max exposure · recovery", "PROPOLIS playbook · max-loss-per-play · rollback procedure"],
  ];
  return (
    <Article id="cre-dd" roman="VI" title="We speak CRE Due-Diligence vocabulary">
      <P>
        Business buyers do not buy{" "}
        <Em>"AI safety"</Em>. They buy{" "}
        <strong className="text-amber-300">due diligence</strong>. Every
        CFO · every procurement officer · every CRE buyer · every
        business operator already knows this checklist. They've used
        it their whole career.
      </P>
      <P>
        <strong className="text-stone-100">Our entire vocabulary translates AI risk into the
        language buyers already use.</strong> No re-education. No
        glossary. The buyer reads the deed and immediately knows what
        each section means.
      </P>
      <div className="mt-7 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-800">
              <th className="text-left py-3 pr-4 text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">CRE due diligence</th>
              <th className="text-left py-3 px-3 text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">AI agent equivalent</th>
              <th className="text-left py-3 pl-3 text-[10px] uppercase tracking-[0.22em] text-amber-300 font-semibold">Defendable artifact</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([cre, ai, art], i) => (
              <tr key={i} className="border-b border-stone-900/60">
                <td className="py-3 pr-4 text-stone-300 font-medium">{cre}</td>
                <td className="py-3 px-3 text-stone-400">{ai}</td>
                <td className="py-3 pl-3 text-amber-300/90 font-mono text-xs">{art}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Article>
  );
}

// ─── Article VII · fixers ──────────────────────────────────────────────────
function Article7Fixers() {
  return (
    <Article id="fixers" roman="VII" title="Fixers are the Closer Layer">
      <P>
        Observability vendors tell you what happened. Bug bounty
        platforms tell you what's broken. Evaluation vendors tell you
        the score. <strong className="text-stone-100">Nobody else
        delivers the fix and proves the lift.</strong>
      </P>
      <P>
        DefendableFixers read the lien ledger · identify the patterns ·
        ship the fix (doctrine pack rule · system prompt fragment ·
        tool wrapper · approval gate · agent migration) · re-measure
        the next deed · prove the lift.
      </P>
      <P>
        Three tiers:
      </P>
      <ul className="mt-3 space-y-2.5 text-base text-stone-300 leading-relaxed">
        <li className="flex gap-3">
          <span className="text-amber-300 font-mono">·</span>
          <span><strong className="text-stone-100">Self-Serve</strong> · $29-499/agent/mo · auto pack updates · daily Morning Brief · 1-click workout approval.</span>
        </li>
        <li className="flex gap-3">
          <span className="text-amber-300 font-mono">·</span>
          <span><strong className="text-stone-100">Managed Fixers</strong> · $2-10K/agent/mo · 3-month minimum · engineer-reviewed monthly · custom pack rules · quarterly review.</span>
        </li>
        <li className="flex gap-3">
          <span className="text-amber-300 font-mono">·</span>
          <span><strong className="text-stone-100">Embedded Fixers</strong> · $50-250K ARR / fleet · named contact · Fix-or-Refund 90-day guarantee · insurance carrier integration.</span>
        </li>
      </ul>
      <P className="mt-5">
        The Fix-or-Refund guarantee works because we own the measurement
        (the deed) · the baseline (the Tribunal) · and the fix layer
        (the doctrine packs). That is a falsifiable promise no AI vendor
        can match.
      </P>
    </Article>
  );
}

// ─── Article VIII · brand stack ────────────────────────────────────────────
function Article8BrandStack() {
  const domains: [string, string, string, string][] = [
    ["defendableos.com", "Suit", "Institutional · audit · insurance", "Platform doctrine · admin portal · investor surface"],
    ["defendtheclaw.com", "Manifesto", "Movement · operator culture", "Inspect-before-you-trust rallying point"],
    ["defendablehack.com", "T-shirt", "Researcher · adversarial", "Bounty program · pack contributions · disclosure"],
    ["opendefendable.com", "Hoodie", "OSS standards body", "Doctrine pack registry · government interface · OpenSSF-parallel"],
    ["defendablerouter.com", "Product", "AI gateway software", "The cracked router · OpenWrt energy · self-installable"],
    ["defendablecloud.com", "Product", "Hosted compute · open weights", "Privacy-native inference · 128 RTX 6000 fleet"],
  ];
  return (
    <Article id="brand-stack" roman="VIII" title="Six Brand Surfaces · audience-segmented">
      <P>
        Most companies own one domain. We own six · each pointed at a
        different stakeholder in the AI agent trust economy. They
        share doctrine · they don't share audiences.
      </P>
      <div className="mt-7 space-y-3">
        {domains.map(([d, t, a, p]) => (
          <div key={d} className="rounded-xl border border-stone-800 bg-neutral-950/60 px-5 py-4 grid lg:grid-cols-[1.4fr_0.8fr_1.3fr_2fr] gap-4 items-center">
            <div className="font-mono text-sm text-amber-300">{d}</div>
            <div className="text-xs text-stone-500 uppercase tracking-[0.18em] font-semibold">{t}</div>
            <div className="text-sm text-stone-300">{a}</div>
            <div className="text-sm text-stone-400">{p}</div>
          </div>
        ))}
      </div>
      <P className="mt-6">
        This is the pattern Stripe runs (stripe.com · Indie Hackers ·
        stripe.dev) · GitHub runs (github.com · The Octoverse ·
        github.dev) · Cloudflare runs (cloudflare.com · blog ·
        workers.dev). Suit · manifesto · t-shirt · hoodie. Same
        doctrine · different listening posts.
      </P>
    </Article>
  );
}

// ─── Article IX · the math ─────────────────────────────────────────────────
function Article9Math() {
  return (
    <Article id="math" roman="IX" title="The Math · 80/20 becomes 95/5 through clearance">
      <P>
        Commercial real estate brokers measure it as{" "}
        <span className="font-mono text-stone-200">300 dials → 10 proposals → 2 listings won</span>{" "}
        · the listing broker is the top 10% of the industry because
        they control the inventory. AI agents measure the same way:
        100 plays performed → 80 promoted → 20 flagged → 80% success
        rate.
      </P>
      <P>
        The question nobody else answers:{" "}
        <strong className="text-amber-300">why were 20 flagged · and is it one pattern repeated or twenty one-offs?</strong>{" "}
        Defendable's flag-pattern analysis clusters them. Ranks them
        by lift opportunity. Ships the fixes. Proves the next deed is
        cleaner.
      </P>
      <div className="mt-6 grid md:grid-cols-4 gap-3 font-mono text-xs">
        <Step pct="80%" stage="Day 30 baseline" />
        <Step pct="92%" stage="Pattern A fix shipped" />
        <Step pct="95%" stage="Pattern B fix shipped" />
        <Step pct="96.5%" stage="Pattern C fix shipped" />
      </div>
      <P className="mt-6">
        Each fix is a pack rule shipped by a Fixer · auto-deploys via
        the Router · the next morning's deed shows the lift. Compound
        progress · one email a morning · one click decisions ·
        verifiable in the receipt trail.
      </P>
    </Article>
  );
}

function Step({ pct, stage }: { pct: string; stage: string }) {
  return (
    <div className="rounded-xl border border-stone-800 bg-neutral-950/60 px-4 py-4 text-center">
      <div className="text-2xl font-bold text-amber-300">{pct}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-stone-500 leading-snug">{stage}</div>
    </div>
  );
}

// ─── Article X · hiring ────────────────────────────────────────────────────
function Article10Hiring() {
  return (
    <Article id="hiring" roman="X" title="We hire Auditors · not Prompt Engineers">
      <P>
        Most AI companies are hiring senior ML engineers · prompt
        engineers · frontend designers · growth hackers · "10x" coders.
        Talent pool: crowded · expensive · vibes-driven.
      </P>
      <P>
        <strong className="text-stone-100">Defendable hires the opposite profile.</strong>{" "}
        Former internal auditors. CPAs. Risk analysts. Compliance
        officers. Domain experts (payroll specialists · CSR ops
        leads · scheduling experts · radiology informaticists). B2B
        enterprise sellers who've closed 100+ due-diligence deals.
        Talent pool: deep · uncourted · forgotten by the LLM wave ·
        actively seeking work where their craft matters again.
      </P>
      <P>
        Defense wins championships because the grinders show up
        every day. We hire the grinders.
      </P>
    </Article>
  );
}

// ─── Article XI · brand contract ───────────────────────────────────────────
function Article11BrandContract() {
  return (
    <Article id="brand-contract" roman="XI" title="We never ship the Offense Agent">
      <P>
        Defendable is{" "}
        <strong className="text-amber-300">categorically a third-party defense rail</strong>.
        We will never ship an offense agent of our own. Not a refund
        bot. Not a coding bot. Not a sales SDR. Not a payroll
        processor. Not under any brand · not under any subsidiary ·
        not in any pricing tier.
      </P>
      <P>
        This is permanent brand contract · not a current product
        choice. The institutional credibility that makes a Defendable
        Agent Deed worth issuing collapses the moment we ship an
        offense agent of our own. You can't audit yourself.
      </P>
      <P>
        Buyers should expect this contract to outlive the company
        in writing · same way KPMG can't audit a company it
        consults · same way Moody's can't issue a rating on its own
        debt · same way an MRI center can't read its own scans for
        a second opinion. Third-party trust is the entire product.
      </P>
    </Article>
  );
}

// ─── Article XII · pitch line ──────────────────────────────────────────────
function Article12PitchLine() {
  return (
    <Article id="pitch" roman="XII" title="The Pitch Line">
      <div className="mt-6 rounded-xl border border-amber-500/40 bg-amber-500/[0.06] px-8 py-10 lg:px-12 lg:py-12">
        <div className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 leading-tight">
          The deed is only as good as the{" "}
          <span className="font-serif italic font-normal text-amber-300">fix</span>{" "}
          it delivers.
        </div>
        <p className="mt-6 text-base text-stone-300 leading-relaxed">
          Observability vendors show you the flag. Safety vendors show
          you the risk. Eval vendors show you the score.{" "}
          <strong className="text-stone-100">DefendableOS ships the fix and issues a new deed proving the lift.</strong>{" "}
          That is the closed loop nobody else delivers · and that is
          why the cap rate compresses over time as the doctrine pack
          registry compounds.
        </p>
      </div>
    </Article>
  );
}

function CTA() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-4xl mx-auto px-6 py-20 lg:py-28">
        <div className="rounded-2xl border border-stone-800 bg-gradient-to-br from-stone-900/80 to-neutral-950 px-8 py-12 lg:px-14 lg:py-16 text-center">
          <Eyebrow>READY</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 leading-tight">
            Deed your agents.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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
              href={`mailto:${SALES_EMAIL}?subject=Doctrine%20question`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-stone-700 text-sm text-stone-200 font-semibold tracking-tight hover:border-stone-500 hover:text-stone-50 transition-colors"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── building blocks ───────────────────────────────────────────────────────
function Article({
  id, roman, title, children,
}: { id: string; roman: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-b border-stone-900/80 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.24em] text-amber-300/80 font-mono font-semibold">Article {roman}</span>
          <span className="h-px flex-1 bg-stone-800" />
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-stone-100 leading-tight">{title}</h2>
        <div className="mt-6 space-y-4">{children}</div>
      </div>
    </section>
  );
}

function P({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-base lg:text-lg text-stone-300 leading-relaxed ${className || ""}`}>{children}</p>
  );
}

function Em({ children }: { children: React.ReactNode }) {
  return <span className="font-serif italic text-stone-200">{children}</span>;
}

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
