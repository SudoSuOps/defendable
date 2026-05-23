/**
 * /reports — Defendable Reports index
 *
 * Long-form, source-classified analysis on topics the platform has unique
 * perspective on. Each report carries the same restraint as the other
 * educational-infra pages (/open, /pair-factory): no overclaim · honest
 * "PROPOSED" labels on forthcoming reports · public-safe framings only.
 *
 * Live reports become individual routes under /reports/<slug>.
 */
import { Link } from "react-router-dom";

const SALES_EMAIL = "build@swarmandbee.ai";

type ReportStatus = "LIVE" | "PROPOSED" | "DRAFT";

type ReportEntry = {
  slug: string;
  title: string;
  oneLine: string;
  status: ReportStatus;
  category: string;
  href?: string;
};

const REPORTS: ReportEntry[] = [
  {
    slug: "vast-ai-utilization-signal-rail",
    title: "The Defendable Vast.ai Utilization Signal Rail",
    oneLine:
      "Seven signal classes · the RTX 3090 workhorse thesis · the yield-analysis standard. Why a rental snapshot is not rental revenue, and what evidence does cross the threshold.",
    status: "LIVE",
    category: "Compute · Rental Intelligence",
    href: "/reports/vast-ai-utilization-signal-rail",
  },
  {
    slug: "rtx-3090-workhorse-thesis",
    title: "The RTX 3090 Workhorse Thesis · Why Prior-Gen 24GB Still Earns",
    oneLine:
      "Second-Life Compute lens · 24GB VRAM still runs serious local models · why operator hold/rent/sell analysis IS the product.",
    status: "PROPOSED",
    category: "Compute · Second-Life",
  },
  {
    slug: "edge-to-rack-e0-e7-taxonomy",
    title: "Edge-to-Rack · The E0-E7 Compute Asset Taxonomy",
    oneLine:
      "Useful AI compute exists at eight tiers, not three. The canonical ladder from CPU-only utility nodes to rack-scale clusters.",
    status: "PROPOSED",
    category: "Compute · Taxonomy",
  },
  {
    slug: "four-bucket-privacy-vault",
    title: "The Four-Bucket Privacy Vault · Where Defendable Records Live",
    oneLine:
      "PRIVATE_EVIDENCE · MARKET_OBSERVATIONS · DERIVED_DATASETS · PUBLIC_ASSETS. The service-boundary guard that makes 'private evidence stays private' a code rule, not a policy slide.",
    status: "PROPOSED",
    category: "Infrastructure · Storage",
  },
  {
    slug: "compute-bench-phase-a-to-c",
    title: "The Defendable Compute Bench · Phase A to C Case Study",
    oneLine:
      "From identity capture (Phase A) through DCGM diagnostic (Phase B) to workload utility (Phase C). The first benchmark-attested deed chain.",
    status: "DRAFT",
    category: "Compute · Bench",
  },
  {
    slug: "best-next-use-decision-cases",
    title: "Best Next Use Decision · First Three Cases",
    oneLine:
      "Hold · rent · sell · redeploy · part-out · recycle. How four orthogonal grades translate into one defendable next action.",
    status: "PROPOSED",
    category: "Compute · Decisions",
  },
  {
    slug: "itad-partner-pilot-findings",
    title: "ITAD Partner Pilot · Findings from the First 90 Days",
    oneLine:
      "What partner-feed data actually contains, where the Grade B ceiling holds, and which inventory classes graduate to public-safe records first.",
    status: "PROPOSED",
    category: "Partners · ITAD",
  },
];

export default function DefendableReports() {
  const live = REPORTS.filter((r) => r.status === "LIVE");
  const drafts = REPORTS.filter((r) => r.status === "DRAFT");
  const proposed = REPORTS.filter((r) => r.status === "PROPOSED");

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
              Reports
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link to="/" className="text-stone-400 hover:text-stone-200">Home</Link>
          <Link to="/compute" className="text-stone-400 hover:text-stone-200">Compute</Link>
          <Link to="/pair-factory" className="text-stone-400 hover:text-stone-200">Pair Factory</Link>
          <Link to="/open" className="text-stone-400 hover:text-stone-200">Open Infra</Link>
          <a href={`mailto:${SALES_EMAIL}`} className="text-honey-300 font-semibold hover:text-honey-200">Contact</a>
        </nav>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-14 md:py-20 space-y-16">
        {/* Hero */}
        <section>
          <div className="text-[10px] tracking-[0.28em] uppercase text-honey-400 font-semibold mb-4">
            Defendable Reports · the research lane
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-stone-100 leading-[1.05]">
            Source-classified analysis on{" "}
            <span className="text-honey-300">what the platform sees.</span>
          </h1>
          <p className="mt-6 text-stone-300 text-lg leading-relaxed max-w-3xl">
            Long-form, evidence-anchored notes on the asset classes, utilization signals,
            decision frameworks, and infrastructure doctrine that the platform reports
            on every day. Each report names its sources, labels its limitations, and
            refuses to overclaim.
          </p>
          <p className="mt-4 text-stone-500 text-sm leading-relaxed max-w-3xl italic">
            Reports are not marketing. Reports are the analysis underneath the asset
            records. The same restraint that gates a Defendable Deed gates a
            Defendable Report.
          </p>
        </section>

        {/* Live reports */}
        {live.length > 0 && (
          <section>
            <SectionHeader
              kicker="01 · Live"
              title="Available today"
              sub="Issued reports · evidence-anchored · source-classified · public-safe."
            />
            <div className="mt-8 space-y-4">
              {live.map((r) => (
                <ReportCard key={r.slug} report={r} />
              ))}
            </div>
          </section>
        )}

        {/* Draft */}
        {drafts.length > 0 && (
          <section>
            <SectionHeader
              kicker="02 · Drafting"
              title="In progress · evidence accumulating"
              sub="Reports actively being assembled · captured evidence in the vault · awaits classification and review before publication."
            />
            <div className="mt-8 space-y-4">
              {drafts.map((r) => (
                <ReportCard key={r.slug} report={r} />
              ))}
            </div>
          </section>
        )}

        {/* Proposed */}
        {proposed.length > 0 && (
          <section>
            <SectionHeader
              kicker="03 · Proposed"
              title="On the research roadmap"
              sub="Topics where the platform has unique observation depth · reports queued for production as evidence and review cycles complete. Honest framing: these are not yet written."
            />
            <div className="mt-8 space-y-4">
              {proposed.map((r) => (
                <ReportCard key={r.slug} report={r} />
              ))}
            </div>
          </section>
        )}

        {/* Tie back */}
        <section className="rounded-lg border border-honey-300/20 bg-gradient-to-br from-honey-300/[0.04] to-transparent p-6 md:p-10">
          <div className="text-[10px] tracking-[0.28em] uppercase text-honey-400 font-semibold mb-3">
            What backs every report
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-100 tracking-tight">
            The same chain that issues a deed issues a report.
          </h2>
          <p className="mt-4 text-stone-400 max-w-3xl leading-relaxed">
            Source-classified evidence · validator review · privacy-vault discipline ·
            public-safe export. A report is not the asset record · it is the analysis
            shaped by the receipts already in the vault.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/pair-factory"
              className="inline-flex items-center px-5 py-2.5 rounded border border-honey-300/40 bg-honey-300/10 text-honey-200 hover:bg-honey-300/20 hover:border-honey-300/70 transition-colors text-sm font-semibold"
            >
              See the Pair Factory doctrine →
            </Link>
            <Link
              to="/open"
              className="inline-flex items-center px-5 py-2.5 rounded border border-stone-700 text-stone-300 hover:text-stone-100 hover:border-stone-500 transition-colors text-sm font-semibold"
            >
              View the open infrastructure
            </Link>
          </div>
        </section>
      </main>

      <footer className="relative z-10 px-6 py-8 border-t border-stone-900/80 mt-16">
        <div className="max-w-5xl mx-auto text-xs text-stone-500 leading-relaxed">
          © 2026 Swarm and Bee LLC · DBA Swarm & Bee AI · D-U-N-S 138652395.
          DefendableOS™ · Proof of Value™ · Validate the Validator™ · Defendable Deed™
          are unregistered trademarks. Reports are evidence-anchored research notes ·
          not professional appraisals, certifications, or guarantees of future
          asset behavior.
        </div>
      </footer>
    </div>
  );
}

// ─── components ────────────────────────────────────────────────────────────

function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub: string }) {
  return (
    <div className="max-w-3xl">
      <div className="text-[10px] tracking-[0.28em] uppercase text-honey-400 font-semibold mb-3">{kicker}</div>
      <h2 className="text-2xl md:text-3xl font-semibold text-stone-100 tracking-tight leading-tight">{title}</h2>
      <p className="mt-3 text-stone-400 text-base leading-relaxed">{sub}</p>
    </div>
  );
}

function ReportCard({ report }: { report: ReportEntry }) {
  const isLive = report.status === "LIVE" && report.href;
  const Inner = (
    <div className="rounded-lg border border-stone-800 bg-neutral-900/30 p-6 hover:border-honey-300/40 hover:bg-honey-300/[0.03] transition-colors">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-1.5">
            {report.category}
          </div>
          <h3 className="text-stone-100 font-semibold text-lg tracking-tight leading-snug">
            {report.title}
          </h3>
        </div>
        <StatusPill status={report.status} />
      </div>
      <p className="text-stone-400 text-sm leading-relaxed">{report.oneLine}</p>
      {isLive && (
        <div className="mt-4 text-honey-300 text-sm font-semibold tracking-tight">
          Read the report →
        </div>
      )}
    </div>
  );
  if (isLive && report.href) {
    return (
      <Link to={report.href} className="block">
        {Inner}
      </Link>
    );
  }
  return <div className="opacity-90">{Inner}</div>;
}

function StatusPill({ status }: { status: ReportStatus }) {
  const palette: Record<ReportStatus, string> = {
    LIVE: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
    DRAFT: "border-honey-400/40 bg-honey-400/10 text-honey-300",
    PROPOSED: "border-stone-700 bg-stone-900/60 text-stone-500",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider border ${palette[status]}`}
    >
      {status}
    </span>
  );
}
