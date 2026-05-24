/**
 * /reports/vast-ai-utilization-signal-rail
 *
 * First full Defendable Report. Translates docs/VAST_AI_UTILIZATION_SIGNAL_RAIL.md
 * to a public surface · adds an operator-captured market snapshot
 * (vast.ai market explorer · 2026-05-23) as anchoring evidence.
 *
 * Strict no-overclaim discipline · this is OBSERVATION-class data ·
 * NOT rental yield · NOT guaranteed earnings · NOT resale price.
 */
import { Link } from "react-router-dom";

const SALES_EMAIL = "defense@defendableos.com";
const SNAPSHOT_DATE = "2026-05-23";
const SNAPSHOT_SOURCE = "vast.ai market explorer";

type SignalClassRow = {
  signalClass: string;
  example: string;
  proves: string;
  notProves: string;
};

const SIGNAL_CLASSES: SignalClassRow[] = [
  {
    signalClass: "VAST_PUBLIC_LISTING_RATE",
    example: "observed market hourly asking/rental rate",
    proves: "Current public market observation",
    notProves: "Actual paid rental or occupancy",
  },
  {
    signalClass: "VAST_PUBLIC_SUPPLY_OBSERVATION",
    example: "number/category of visible offerings if observable",
    proves: "Apparent marketplace supply",
    notProves: "Demand or booked utilization",
  },
  {
    signalClass: "VAST_FOUNDER_MACHINE_LISTING",
    example: "founder's listed machine and advertised rate",
    proves: "Owned asset listed for rental",
    notProves: "Paid revenue",
  },
  {
    signalClass: "VAST_FOUNDER_RENTAL_RECEIPT",
    example: "completed rental or payout record",
    proves: "Actual paid utility evidence",
    notProves: "Resale market value",
  },
  {
    signalClass: "VAST_FOUNDER_OCCUPANCY_HISTORY",
    example: "rental duration / booked time",
    proves: "Actual utilization history",
    notProves: "Future guaranteed utilization",
  },
  {
    signalClass: "VAST_WORKLOAD_TEST_RECEIPT",
    example: "self-test, benchmark or validation receipt",
    proves: "Operational / rental readiness",
    notProves: "Market demand",
  },
  {
    signalClass: "VAST_DERIVED_YIELD_ANALYSIS",
    example: "modeled gross/net annualized yield from captured receipts",
    proves: "Analysis based on disclosed inputs",
    notProves: "Guaranteed future earnings",
  },
];

type SnapshotRow = {
  model: string;
  listed: number;
  verified: number;
  listedPct: string;
  rentedPct: string;
  peakDlPerf: string;
  medianDlPerf: string;
  askingPerHr: string;
  dlPerfPerDollar: string;
};

const SNAPSHOT: SnapshotRow[] = [
  { model: "RTX 4080",       listed: 37, verified: 2, listedPct: "94.6%", rentedPct: "81.8%", peakDlPerf: "53.3",  medianDlPerf: "49.3",  askingPerHr: "$0.175", dlPerfPerDollar: "304.6" },
  { model: "RTX 2060 Super", listed: 32, verified: 2, listedPct: "93.8%", rentedPct: "75.9%", peakDlPerf: "4.0",   medianDlPerf: "7.5",   askingPerHr: "$0.189", dlPerfPerDollar: "21.2"  },
  { model: "A10",            listed: 30, verified: 5, listedPct: "83.3%", rentedPct: "74.0%", peakDlPerf: "29.1",  medianDlPerf: "25.0",  askingPerHr: "$0.205", dlPerfPerDollar: "142.0" },
  { model: "GTX 1070 Ti",    listed: 29, verified: 4, listedPct: "86.2%", rentedPct: "64.5%", peakDlPerf: "3.2",   medianDlPerf: "7.4",   askingPerHr: "$0.035", dlPerfPerDollar: "91.4"  },
  { model: "RTX 5880 Ada",   listed: 26, verified: 2, listedPct: "92.3%", rentedPct: "87.7%", peakDlPerf: "83.6",  medianDlPerf: "70.0",  askingPerHr: "$0.430", dlPerfPerDollar: "194.4" },
  { model: "GTX 1080",       listed: 25, verified: 4, listedPct: "84.0%", rentedPct: "64.1%", peakDlPerf: "3.4",   medianDlPerf: "8.2",   askingPerHr: "$0.033", dlPerfPerDollar: "103.7" },
  { model: "Quadro RTX 6000",listed: 23, verified: 3, listedPct: "87.0%", rentedPct: "73.4%", peakDlPerf: "12.1",  medianDlPerf: "15.5",  askingPerHr: "$0.100", dlPerfPerDollar: "121.0" },
  { model: "Quadro P4000",   listed: 23, verified: 1, listedPct: "95.7%", rentedPct: "76.1%", peakDlPerf: "2.1",   medianDlPerf: "4.9",   askingPerHr: "$0.050", dlPerfPerDollar: "42.0"  },
  { model: "RTX 2060",       listed: 23, verified: 6, listedPct: "73.9%", rentedPct: "66.4%", peakDlPerf: "4.0",   medianDlPerf: "6.6",   askingPerHr: "$0.033", dlPerfPerDollar: "123.1" },
  { model: "RTX 5060",       listed: 23, verified: 0, listedPct: "100.0%", rentedPct: "78.6%",peakDlPerf: "28.3",  medianDlPerf: "19.0",  askingPerHr: "$0.080", dlPerfPerDollar: "353.8" },
  { model: "L40",            listed: 20, verified: 5, listedPct: "75.0%", rentedPct: "60.7%", peakDlPerf: "93.2",  medianDlPerf: "72.4",  askingPerHr: "$0.410", dlPerfPerDollar: "227.3" },
  { model: "RTX 3070 Ti",    listed: 19, verified: 6, listedPct: "68.4%", rentedPct: "51.2%", peakDlPerf: "18.3",  medianDlPerf: "20.9",  askingPerHr: "$0.115", dlPerfPerDollar: "159.1" },
  { model: "GTX 1660 Ti",    listed: 17, verified: 8, listedPct: "52.9%", rentedPct: "65.0%", peakDlPerf: "2.5",   medianDlPerf: "5.3",   askingPerHr: "$0.050", dlPerfPerDollar: "50.0"  },
  { model: "Tesla P4",       listed: 14, verified: 1, listedPct: "92.9%", rentedPct: "45.1%", peakDlPerf: "2.5",   medianDlPerf: "6.3",   askingPerHr: "$0.012", dlPerfPerDollar: "208.3" },
  { model: "RTX 5000 Ada",   listed: 13, verified: 3, listedPct: "76.9%", rentedPct: "76.7%", peakDlPerf: "64.3",  medianDlPerf: "63.6",  askingPerHr: "$0.302", dlPerfPerDollar: "212.6" },
  { model: "Tesla T4",       listed: 13, verified: 7, listedPct: "46.2%", rentedPct: "60.6%", peakDlPerf: "4.2",   medianDlPerf: "6.5",   askingPerHr: "$0.111", dlPerfPerDollar: "37.8"  },
  { model: "Titan V",        listed: 12, verified: 3, listedPct: "75.0%", rentedPct: "53.2%", peakDlPerf: "21.6",  medianDlPerf: "15.7",  askingPerHr: "$0.535", dlPerfPerDollar: "40.4"  },
  { model: "RTX 4000 Ada",   listed: 11, verified: 2, listedPct: "81.8%", rentedPct: "55.7%", peakDlPerf: "31.9",  medianDlPerf: "30.5",  askingPerHr: "$0.097", dlPerfPerDollar: "327.9" },
  { model: "RTX PRO 4500",   listed: 11, verified: 1, listedPct: "90.9%", rentedPct: "78.2%", peakDlPerf: "96.5",  medianDlPerf: "51.9",  askingPerHr: "$0.195", dlPerfPerDollar: "494.9" },
  { model: "Titan RTX",      listed: 11, verified: 2, listedPct: "81.8%", rentedPct: "65.7%", peakDlPerf: "12.1",  medianDlPerf: "15.5",  askingPerHr: "$0.149", dlPerfPerDollar: "81.4"  },
  { model: "RTX 2070 Super", listed: 10, verified: 3, listedPct: "70.0%", rentedPct: "66.4%", peakDlPerf: "4.7",   medianDlPerf: "8.9",   askingPerHr: "$0.041", dlPerfPerDollar: "114.6" },
];

const TOTAL_LISTED = SNAPSHOT.reduce((a, r) => a + r.listed, 0);
const TOTAL_VERIFIED = SNAPSHOT.reduce((a, r) => a + r.verified, 0);

// Observed standouts · evidence-anchored, no claim about future yield
const HIGH_OCCUPANCY = [...SNAPSHOT].sort((a, b) => parseFloat(b.rentedPct) - parseFloat(a.rentedPct)).slice(0, 3);
const HIGH_VALUE_PER_DOLLAR = [...SNAPSHOT].sort((a, b) => parseFloat(b.dlPerfPerDollar) - parseFloat(a.dlPerfPerDollar)).slice(0, 3);

export default function VastAiUtilizationSignalRail() {
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
              Report · Vast.ai
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link to="/reports" className="text-stone-400 hover:text-stone-200">← Reports</Link>
          <Link to="/compute" className="text-stone-400 hover:text-stone-200">Compute</Link>
          <Link to="/pair-factory" className="text-stone-400 hover:text-stone-200">Pair Factory</Link>
          <Link to="/open" className="text-stone-400 hover:text-stone-200">Open Infra</Link>
          <a href={`mailto:${SALES_EMAIL}`} className="text-honey-300 font-semibold hover:text-honey-200">Contact</a>
        </nav>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-14 md:py-20 space-y-20">
        {/* Hero */}
        <section>
          <div className="text-[10px] tracking-[0.28em] uppercase text-honey-400 font-semibold mb-4">
            Defendable Report · Compute · Rental Intelligence
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-stone-100 leading-[1.05]">
            The Defendable Vast.ai Utilization Signal Rail
          </h1>
          <p className="mt-4 text-lg md:text-xl text-honey-300 font-serif italic tracking-tight">
            Seven signal classes · the workhorse thesis · the yield-analysis standard.
          </p>
          <p className="mt-6 text-stone-300 text-base leading-relaxed max-w-3xl">
            Vast.ai is a core compute utilization intelligence rail. The platform treats
            it carefully · honestly · with strict claim discipline. Listing rates are
            NOT resale value. Availability is NOT occupancy. Public visibility is NOT
            booked revenue. First-party rental receipts ARE operating evidence the
            platform can issue claims from.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs text-stone-500">
            <span className="inline-flex items-center px-3 py-1 rounded border border-stone-800 bg-neutral-900/50">
              Report status · <strong className="text-emerald-300 ml-1">LIVE</strong>
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded border border-stone-800 bg-neutral-900/50">
              Captured · <strong className="text-stone-300 ml-1">{SNAPSHOT_DATE}</strong>
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded border border-stone-800 bg-neutral-900/50">
              Source · <strong className="text-stone-300 ml-1">{SNAPSHOT_SOURCE}</strong>
            </span>
          </div>
        </section>

        {/* Strategic role */}
        <Section
          kicker="01 · Strategic role"
          title="Why Vast.ai is a utilization rail · not a price source"
          sub="A useful compute asset may have resale value, rental value, redeployment value, edge/local deployment value, or part-out value. DefendableOS compares these paths rather than assuming sale is always the correct exit. Vast.ai is the rail that makes the rental column real."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Resale value", what: "What a buyer would pay today · comp evidence required" },
              { name: "Rental value", what: "What the asset earns while held · Vast.ai signals + first-party receipts" },
              { name: "Redeployment value", what: "Utility from moving the asset to another role (E1-E3 fit)" },
              { name: "Edge / local deployment value", what: "Utility from offline / private use · no public market" },
              { name: "Part-out value", what: "Sum of components > whole-asset · GPU + RAM + storage liquid separately" },
            ].map((v) => (
              <div key={v.name} className="rounded-lg border border-stone-800 bg-neutral-900/30 p-5">
                <div className="text-stone-100 font-semibold mb-1.5">{v.name}</div>
                <div className="text-stone-400 text-sm leading-relaxed">{v.what}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* The 7 signal classes */}
        <Section
          kicker="02 · The seven signal classes"
          title="Every Vast.ai observation carries one explicitly"
          sub="The platform refuses to roll non-confirmed classes into confirmed-sale claims · same doctrine that protects the rest of the signal-class system. Only first-party rental receipts + occupancy history count as operating evidence."
        >
          <div className="rounded-lg border border-stone-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900/60 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold w-[30%]">Signal Class</th>
                  <th className="text-left px-5 py-3 font-semibold">Example</th>
                  <th className="text-left px-5 py-3 font-semibold">What it proves</th>
                  <th className="text-left px-5 py-3 font-semibold">What it does NOT prove</th>
                </tr>
              </thead>
              <tbody>
                {SIGNAL_CLASSES.map((row, i) => (
                  <tr key={row.signalClass} className={i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/20"}>
                    <td className="px-5 py-4 align-top">
                      <code className="text-honey-300 text-xs font-mono">{row.signalClass}</code>
                    </td>
                    <td className="px-5 py-4 align-top text-stone-300 text-sm leading-snug">{row.example}</td>
                    <td className="px-5 py-4 align-top text-stone-300 text-sm leading-snug">{row.proves}</td>
                    <td className="px-5 py-4 align-top text-stone-500 text-sm italic leading-snug">{row.notProves}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <DoctrineBlock>
            <p>Of these seven classes, only <code className="text-honey-300/90 not-italic">VAST_FOUNDER_RENTAL_RECEIPT</code> and <code className="text-honey-300/90 not-italic">VAST_FOUNDER_OCCUPANCY_HISTORY</code> count as first-party operating evidence.</p>
            <p>All others are signal-only.</p>
          </DoctrineBlock>
        </Section>

        {/* The operator-captured snapshot */}
        <Section
          kicker="03 · Operator-captured market snapshot"
          title={`${SNAPSHOT.length}-card snapshot · ${TOTAL_LISTED} listed machines · ${TOTAL_VERIFIED} vast.ai-verified`}
          sub="A captured slice of the vast.ai market explorer across mid-tier and pro-workstation cards. This is OBSERVATION-class evidence (VAST_PUBLIC_LISTING_RATE + VAST_PUBLIC_SUPPLY_OBSERVATION). It documents what the public market was asking and what fraction of machines were rented at capture time. It does NOT prove paid yield for any operator."
        >
          <div className="mb-4">
            <DisclosurePill>
              CAPTURED {SNAPSHOT_DATE.toUpperCase()} · SOURCE {SNAPSHOT_SOURCE.toUpperCase()} · OBSERVATION ONLY · NOT PAID YIELD
            </DisclosurePill>
          </div>
          <div className="rounded-lg border border-stone-800 overflow-hidden overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-neutral-900/60 text-[9px] uppercase tracking-[0.16em] text-stone-500">
                <tr>
                  <th className="text-left px-3 py-3 font-semibold whitespace-nowrap">Model</th>
                  <th className="text-right px-3 py-3 font-semibold whitespace-nowrap">Listed</th>
                  <th className="text-right px-3 py-3 font-semibold whitespace-nowrap">Verified</th>
                  <th className="text-right px-3 py-3 font-semibold whitespace-nowrap">Online %</th>
                  <th className="text-right px-3 py-3 font-semibold whitespace-nowrap">Rented %</th>
                  <th className="text-right px-3 py-3 font-semibold whitespace-nowrap">Peak DLPerf</th>
                  <th className="text-right px-3 py-3 font-semibold whitespace-nowrap">Median DLPerf</th>
                  <th className="text-right px-3 py-3 font-semibold whitespace-nowrap">Asking $/hr</th>
                  <th className="text-right px-3 py-3 font-semibold whitespace-nowrap">DLPerf/$</th>
                </tr>
              </thead>
              <tbody>
                {SNAPSHOT.map((row, i) => (
                  <tr key={row.model} className={i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/20"}>
                    <td className="px-3 py-2.5 align-middle text-stone-200 font-medium whitespace-nowrap">{row.model}</td>
                    <td className="px-3 py-2.5 align-middle text-right text-stone-300 tabular-nums">{row.listed}</td>
                    <td className="px-3 py-2.5 align-middle text-right text-stone-400 tabular-nums">{row.verified}</td>
                    <td className="px-3 py-2.5 align-middle text-right text-stone-300 tabular-nums">{row.listedPct}</td>
                    <td className="px-3 py-2.5 align-middle text-right text-honey-300 font-semibold tabular-nums">{row.rentedPct}</td>
                    <td className="px-3 py-2.5 align-middle text-right text-stone-300 tabular-nums">{row.peakDlPerf}</td>
                    <td className="px-3 py-2.5 align-middle text-right text-stone-400 tabular-nums">{row.medianDlPerf}</td>
                    <td className="px-3 py-2.5 align-middle text-right text-honey-300 font-semibold tabular-nums">{row.askingPerHr}</td>
                    <td className="px-3 py-2.5 align-middle text-right text-stone-300 tabular-nums">{row.dlPerfPerDollar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-xs mt-4 leading-relaxed italic">
            Columns: <strong className="text-stone-400">Listed</strong> = total machines visible · <strong className="text-stone-400">Verified</strong> = vast.ai-verified hosts · <strong className="text-stone-400">Online %</strong> = machines currently up · <strong className="text-stone-400">Rented %</strong> = current occupancy · <strong className="text-stone-400">DLPerf</strong> = vast.ai's normalized deep-learning performance score · <strong className="text-stone-400">DLPerf/$</strong> = performance per dollar (peak DLPerf ÷ asking $/hr).
          </p>

          {/* Observed standouts · evidence-anchored */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-lg border border-honey-300/20 bg-honey-300/[0.03] p-5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-2">
                Highest observed occupancy
              </div>
              <ul className="space-y-1.5 text-sm">
                {HIGH_OCCUPANCY.map((r) => (
                  <li key={r.model} className="flex justify-between text-stone-300">
                    <span>{r.model}</span>
                    <span className="text-honey-300 font-mono tabular-nums">{r.rentedPct}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-500 text-xs mt-3 italic leading-snug">
                Occupancy is an instantaneous observation · not a guarantee of sustained
                rental demand or future yield.
              </p>
            </div>
            <div className="rounded-lg border border-honey-300/20 bg-honey-300/[0.03] p-5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-2">
                Highest observed performance per dollar
              </div>
              <ul className="space-y-1.5 text-sm">
                {HIGH_VALUE_PER_DOLLAR.map((r) => (
                  <li key={r.model} className="flex justify-between text-stone-300">
                    <span>{r.model}</span>
                    <span className="text-honey-300 font-mono tabular-nums">{r.dlPerfPerDollar}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-500 text-xs mt-3 italic leading-snug">
                DLPerf/$ is a snapshot ratio · not a buyer guarantee of training/inference
                outcomes under your workload.
              </p>
            </div>
          </div>

          <DoctrineBlock>
            <p>Listed is not sold.</p>
            <p>Offered is not rented.</p>
            <p>Rented is not future yield.</p>
            <p>A snapshot is what survived at one moment · not what will be true tomorrow.</p>
          </DoctrineBlock>
        </Section>

        {/* RTX 3090 Workhorse thesis */}
        <Section
          kicker="04 · The RTX 3090 workhorse thesis"
          title="A prior-generation 24GB card can remain a productive AI compute asset"
          sub="The market narrative for AI compute is 'buy the latest.' That narrative under-represents an entire category of productive hardware. The RTX 3090-class card is a critical Second-Life Compute workhorse · 24GB VRAM remains useful for local AI and rental workloads even after newer consumer generations ship."
        >
          <div className="rounded-lg border border-stone-800 bg-neutral-900/30 p-6">
            <p className="text-stone-300 leading-relaxed mb-4">
              The thesis does NOT state rental rate, occupancy, or expected earnings as
              permanent truth. Instead the platform:
            </p>
            <ol className="space-y-2 text-stone-300 text-sm leading-relaxed">
              <li><strong className="text-honey-300">1.</strong> Captures current vast.ai public rate snapshots with timestamp + source URL · stored as <code className="text-honey-300/90 text-xs">VAST_PUBLIC_LISTING_RATE</code> observations.</li>
              <li><strong className="text-honey-300">2.</strong> Collects founder-owned rental receipts when available · stored as <code className="text-honey-300/90 text-xs">VAST_FOUNDER_RENTAL_RECEIPT</code>.</li>
              <li><strong className="text-honey-300">3.</strong> Compares purchase/resale basis against actual paid yield when both inputs exist · produces <code className="text-honey-300/90 text-xs">VAST_DERIVED_YIELD_ANALYSIS</code>.</li>
              <li><strong className="text-honey-300">4.</strong> Uses the record to determine whether HOLD/RENT, SELL, REDEPLOY, or REVIEW is the most defensible next action.</li>
            </ol>
          </div>
          <p className="mt-4 text-stone-500 text-sm leading-relaxed italic">
            Note: the {SNAPSHOT_DATE} snapshot above does NOT include the RTX 3090. The
            snapshot captures a mid-tier and pro-workstation slice of the market. A
            dedicated 3090-focused capture is a planned follow-on report.
          </p>
        </Section>

        {/* Yield analysis standard */}
        <Section
          kicker="05 · The yield analysis standard"
          title="Required inputs · no ROI claim without source-tagged evidence"
          sub="Every VAST_DERIVED_YIELD_ANALYSIS carries the same input contract. If a field is missing, the analysis returns EVIDENCE_INCOMPLETE with a list of what to capture next. The platform refuses to model yield from observation data alone."
        >
          <div className="rounded-lg border border-stone-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900/60 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Field</th>
                  <th className="text-left px-5 py-3 font-semibold">Source class</th>
                  <th className="text-left px-5 py-3 font-semibold">Required?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Asset model · VRAM · host system config", "Private spec", "Yes"],
                  ["Purchase cost (may be redacted)", "Operator input", "Optional"],
                  ["Listed rental rate", "VAST_FOUNDER_MACHINE_LISTING", "Yes (when listed)"],
                  ["Actual paid rate", "VAST_FOUNDER_RENTAL_RECEIPT", "Yes (for yield claim)"],
                  ["Utilization period", "VAST_FOUNDER_OCCUPANCY_HISTORY", "Yes"],
                  ["Gross earnings", "Sum of rental receipts", "Yes"],
                  ["Platform fees", "Receipt detail", "Preferred"],
                  ["Electricity assumption", "Operator input · source-tagged or measured", "Yes"],
                  ["Sale-value comparison", "Only when comp evidence exists", "Conditional"],
                  ["Recommendation status", "Computed", "Yes"],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/20"}>
                    <td className="px-5 py-3 align-top text-stone-200 leading-snug">{row[0]}</td>
                    <td className="px-5 py-3 align-top text-honey-300/90 text-xs font-mono leading-snug">{row[1]}</td>
                    <td className="px-5 py-3 align-top text-stone-400 text-xs leading-snug">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-lg border border-stone-800 bg-neutral-950/60 p-5">
            <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-3">
              Example · deficient analysis the platform produces honestly
            </div>
            <pre className="text-xs text-stone-300 font-mono leading-relaxed overflow-x-auto whitespace-pre">
{`{
  "asset_model": "RTX 3090 Founders Edition",
  "vram_gb": 24,
  "evidence_inputs": {
    "vast_public_listing_rate": "snapshot present (operator-captured)",
    "vast_founder_machine_listing": null,
    "vast_founder_rental_receipt": null,
    "vast_founder_occupancy_history": null
  },
  "recommendation_status": "EVIDENCE_INCOMPLETE",
  "explanation": "Public listing-rate observation only. No founder
    operating receipts captured. Cannot model yield. Next step:
    ingest founder Vast.ai rental receipts via private upload."
}`}
            </pre>
            <p className="text-stone-500 text-xs mt-3 italic">
              The operator sees exactly what's missing. The platform never invents what
              the receipts would have shown.
            </p>
          </div>
        </Section>

        {/* Claim discipline */}
        <Section
          kicker="06 · Claim discipline"
          title="What the platform says publicly · and what it refuses to"
          sub="Same restraint as the rest of the Defendable surface. The receipts dictate the language · not the marketing aspiration."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.03] p-6">
              <div className="text-[10px] uppercase tracking-[0.18em] text-emerald-400 font-semibold mb-3">
                Allowed
              </div>
              <ul className="space-y-2 text-stone-300 text-sm leading-snug">
                <li>"Vast.ai rate snapshot · $0.21/hr · 2026-05-22T18:00Z · source: vast.ai"</li>
                <li>"Founder operating receipt · 412 hours rented in last 30 days · $86.52 gross"</li>
                <li>"Derived yield from captured inputs · $X/month gross · before electricity"</li>
                <li>"Public market context shows N units offered in [region]"</li>
              </ul>
            </div>
            <div className="rounded-lg border border-stone-800 bg-neutral-900/30 p-6">
              <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-3">
                Forbidden
              </div>
              <ul className="space-y-2 text-stone-300 text-sm leading-snug">
                <li>"RTX 3090 earns $X/hr" without receipts</li>
                <li>"Always rented" without occupancy history</li>
                <li>"$X profit per month" without electricity + fees inputs</li>
                <li>"High demand for this card" without comparative receipts</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Closing doctrine */}
        <section className="border-t border-stone-900/80 pt-12">
          <div className="text-[10px] tracking-[0.28em] uppercase text-stone-500 font-semibold mb-4 text-center">
            Vast.ai Utilization Signal Rail · Closing Doctrine
          </div>
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <p className="text-stone-300 text-base md:text-lg font-serif italic tracking-tight">A listing rate is what was asked at a moment.</p>
            <p className="text-stone-300 text-base md:text-lg font-serif italic tracking-tight">An occupancy percentage is what was observed at a moment.</p>
            <p className="text-stone-300 text-base md:text-lg font-serif italic tracking-tight">A rental receipt is what was paid for time used.</p>
            <p className="text-stone-300 text-base md:text-lg font-serif italic tracking-tight">A yield analysis is what receipts and electricity together support.</p>
            <p className="text-stone-300 text-base md:text-lg font-serif italic tracking-tight">A deed publishes only what survives proof.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-lg border border-honey-300/20 bg-gradient-to-br from-honey-300/[0.04] to-transparent p-6 md:p-10">
          <div className="text-[10px] tracking-[0.28em] uppercase text-honey-400 font-semibold mb-3">
            Where this report lives in the platform
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-100 tracking-tight">
            From signal · to receipt · to deed.
          </h2>
          <p className="mt-4 text-stone-400 max-w-3xl leading-relaxed">
            Vast.ai signal feeds the same pipeline as every other Defendable observation:
            classified at intake · routed to the appropriate vault · gated by the
            validator chain · only public-safe outputs become part of an issued record.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/pair-factory"
              className="inline-flex items-center px-5 py-2.5 rounded border border-honey-300/40 bg-honey-300/10 text-honey-200 hover:bg-honey-300/20 hover:border-honey-300/70 transition-colors text-sm font-semibold"
            >
              See the full doctrine on /pair-factory →
            </Link>
            <Link
              to="/reports"
              className="inline-flex items-center px-5 py-2.5 rounded border border-stone-700 text-stone-300 hover:text-stone-100 hover:border-stone-500 transition-colors text-sm font-semibold"
            >
              ← All Defendable Reports
            </Link>
          </div>
        </section>
      </main>

      <footer className="relative z-10 px-6 py-8 border-t border-stone-900/80 mt-16">
        <div className="max-w-5xl mx-auto text-xs text-stone-500 leading-relaxed">
          © 2026 Swarm and Bee LLC · DBA Swarm & Bee AI · D-U-N-S 138652395.
          DefendableOS™ · Proof of Value™ · Validate the Validator™ are unregistered
          trademarks. The market snapshot above is operator-captured, source-attributed,
          and classified as OBSERVATION-only evidence · not a forecast of future rental
          income, asset resale value, or platform yield. Vast.ai is referenced as a
          third-party marketplace · the platform makes no representation about it.
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
