/**
 * /open — Defendable Open Infrastructure
 *
 * The "what's under the hood" page. Names every AI model in production, every
 * connector with honest status, every doctrine guardrail. Facts not trust-me-bro.
 *
 * Why: clients pay for honesty. Most "AI valuation" platforms won't tell you
 * which model wrote the words, which sources grounded the analysis, or where
 * the data is stored. We do.
 */
import { Link } from "react-router-dom";

const SITE = "https://defendableos.com";
const PLATFORM_REPO = "https://github.com/SudoSuOps/defendableos";
const LANDING_REPO = "https://github.com/SudoSuOps/defendable";
const LEGAL_PLUGIN_REPO = "https://github.com/SudoSuOps/legalsniper-plugin";
const SALES_EMAIL = "build@swarmandbee.ai";

type ModelCard = {
  provider: string;
  modelId: string;
  role: string;
  contract: string;
  validatorChecks: string[];
  quirks: string;
  whyChosen: string;
  status: "PRODUCTION" | "PRODUCTION_OPTIONAL" | "PROPOSED";
};

const MODELS: ModelCard[] = [
  {
    provider: "Moonshot",
    modelId: "Kimi K2.6",
    role: "Primary AIOV narrative · validator flag classification · evidence grading",
    contract: "VALIDATOR_FLAG_TOOL · RESEARCH_CLASSIFY_TOOL (typed JSON contracts)",
    validatorChecks: [
      "Check 1 · Asset identity claim",
      "Check 2 · Evidence completeness",
      "Check 3 · Methodology disclosure",
      "Check 8 · Source attribution",
      "Check 10 · Affirmative-claim scan",
      "Check 11 · Disclaimer integrity",
    ],
    quirks:
      "Rejects temperature ≠ 1 · forces server-side downgrade when CONFIRMED_SALE_PRICE picked without confirmed-sale signal · self-disciplines under typed contracts",
    whyChosen:
      "Tool-use with closed-schema typed contracts · honest about its own constraints · live verified classifying a Reddit '$7999.99' post as MARKET_COMMENTARY (not confirmed sale)",
    status: "PRODUCTION",
  },
  {
    provider: "OpenAI",
    modelId: "gpt-4o",
    role: "Secondary completion · independent classification · validator second-opinion",
    contract: "RESEARCH_CLASSIFY_TOOL (typed JSON contract · enum-bounded outputs)",
    validatorChecks: [
      "Check 4 · Comparable-set independence",
      "Check 6 · Pricing-surface classification",
      "Check 7 · Confidence calibration",
      "Check 9 · Cross-validator agreement",
    ],
    quirks:
      "o1/o3-class models use `reasoning_effort` not temperature · gpt-4o respects temperature normally · we standardize on gpt-4o for the classification lane",
    whyChosen:
      "Different training distribution from Kimi · independent second opinion catches cases where the primary model rationalizes",
    status: "PRODUCTION",
  },
  {
    provider: "Brave",
    modelId: "Brave LLM Context API",
    role: "Live market grounding · public-source citation list · validator Check 5 inputs",
    contract: "Plain JSON · param is `q` not `query` · returns `grounding.generic[]` as canonical source list",
    validatorChecks: [
      "Check 5 · Market-evidence grounding",
      "Check 8 · Source attribution (live URLs)",
    ],
    quirks:
      "Sources arrive under `grounding.generic[]` not `sources[]` · platform normalizes at the connector layer so downstream code sees one canonical shape",
    whyChosen:
      "Independent web grounding · real URLs the validator can cite · alternative to letting the model invent sources",
    status: "PRODUCTION",
  },
];

type Connector = {
  name: string;
  category: string;
  status:
    | "READY"
    | "CONFIGURED_DISABLED"
    | "NOT_CONFIGURED"
    | "FUTURE_DISABLED"
    | "PLAN_VERIFICATION_REQUIRED"
    | "AGREEMENT_REQUIRED";
  note: string;
};

const CONNECTORS: Connector[] = [
  { name: "Kimi K2.6 (Moonshot)", category: "AI · AIOV", status: "READY", note: "live · `*_configured: true` in healthcheck" },
  { name: "OpenAI gpt-4o", category: "AI · classification", status: "READY", note: "live · production lane" },
  { name: "Brave LLM Context", category: "AI · market grounding", status: "READY", note: "live · `grounding.generic[]` normalized" },
  { name: "Client Upload", category: "Asset · evidence intake", status: "READY", note: "operator file upload · SHA-256 at receipt" },
  { name: "First-Party Transaction", category: "Asset · founder receipts", status: "READY", note: "operator-owned eBay history · receipt-grade comps" },
  { name: "Connected Shopify Store", category: "Demand · permissioned", status: "READY", note: "the only `PERMISSIONED_CONNECTED_SALE` class connector ready today" },
  { name: "eBay Brand Outlet", category: "Demand · brand signal", status: "READY", note: "manual analyst workflow · 16 brand watchlist seeded" },
  { name: "ITAD Partner Feed", category: "Asset · comp foundry", status: "AGREEMENT_REQUIRED", note: "8 partners OUTREACH_READY · pilot agreement gate · Grade B ceiling" },
  { name: "eBay Browse", category: "Asset · public listings", status: "NOT_CONFIGURED", note: "awaits production API approval" },
  { name: "eBay Product Research", category: "Demand · sold data", status: "NOT_CONFIGURED", note: "awaits seller-account workflow" },
  { name: "eBay Inventory (outbound)", category: "Asset · listing publication", status: "FUTURE_DISABLED", note: "awaits biz approval + `EBAY_OUTBOUND_LISTING_ENABLED=true`" },
  { name: "Shopify (future · catalog)", category: "Asset · future", status: "FUTURE_DISABLED", note: "documented · not wired" },
  { name: "Licensed Transaction Data (future)", category: "Asset · future", status: "FUTURE_DISABLED", note: "documented · not wired" },
  { name: "Supplier Catalog (future)", category: "Demand · future", status: "FUTURE_DISABLED", note: "documented · not wired" },
  { name: "Semrush", category: "Demand · 4 roles", status: "PLAN_VERIFICATION_REQUIRED", note: "tiered access · SEARCH_DEMAND · ECOMMERCE_PRODUCT_CLICK · COMPETITOR_VISIBILITY · RETAIL_INTELLIGENCE" },
  { name: "Ahrefs Keywords Explorer", category: "Demand · future", status: "FUTURE_DISABLED", note: "documented · not wired · Semrush-first" },
  { name: "Google Merchant Center Best Sellers", category: "Demand · future", status: "FUTURE_DISABLED", note: "documented · not wired" },
  { name: "TikTok Creative Center", category: "Demand · future", status: "FUTURE_DISABLED", note: "documented · not wired" },
  { name: "SimilarWeb Shopper Intelligence", category: "Demand · future", status: "FUTURE_DISABLED", note: "documented · not wired" },
];

type Vault = { bucket: string; example: string; egressRule: string };
const VAULTS: Vault[] = [
  { bucket: "PRIVATE_EVIDENCE", example: "operator uploads · raw photos · serials · benchmark JSON · invoices", egressRule: "never publicly exposed · validator-only read · `public_export_or_refuse()` raises on attempt" },
  { bucket: "MARKET_OBSERVATIONS", example: "Brave grounding snapshots · eBay listing observations · Vast.ai public rate snapshots", egressRule: "internal comp analysis only · no public republish of raw source rows" },
  { bucket: "DERIVED_DATASETS", example: "comp sets · opportunity scores · validator receipts · score-card breakdowns", egressRule: "linked into deeds at publication time · raw inputs stripped" },
  { bucket: "PUBLIC_ASSETS", example: "the published deed · the verify-page payload · the SHA-256 record_hash", egressRule: "the only bucket `public_export_or_refuse()` allows · everything else raises CompFoundryError" },
];

const DOCTRINE_GUARDRAILS = [
  {
    name: "Server-side AI downgrade guard",
    detail:
      "If Kimi or OpenAI ever picks `CONFIRMED_SALE_PRICE` without a confirmed-sale signal in the rationale, the gateway server-side downgrades the output to `MARKET_COMMENTARY` automatically. The model never gets the final say on pricing-surface classification.",
  },
  {
    name: "Affirmative-claim scan (not denial substring)",
    detail:
      "Validator Check 10 scans for AFFIRMATIVE claims (`this is a licensed appraisal`) NOT denial substrings (`not a licensed appraisal`). The opposite trap has bit two checks already · now codified.",
  },
  {
    name: "Doctrine-disclaimer integrity",
    detail:
      "Validator Check 11 verifies every required disclaimer is present verbatim · not paraphrased. AIs that 'cleaned up' the disclaimer fail the check.",
  },
  {
    name: "Confirmed-sale signal-class doctrine",
    detail:
      "Across 11 signal classes, only `PERMISSIONED_CONNECTED_SALE` and `FIRST_PARTY_DEFENDABLE_SALE` count as confirmed sale. Comp Foundry refuses to aggregate non-confirmed classes into confirmed-sale outputs.",
  },
  {
    name: "Grade ceiling on partner feeds",
    detail:
      "ITAD partner data carries a Grade B ceiling before validator review. The platform refuses to publish Grade A claims sourced from unverified partner feeds.",
  },
  {
    name: "OPERATOR_STATED labels",
    detail:
      "STNL terms (NOI · cap · ask) and operator-ask prices are labeled `OPERATOR_STATED` everywhere they appear. The platform never represents an operator claim as a validator-passed claim.",
  },
];

export default function DefendableOpen() {
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
              Open Infrastructure
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link to="/" className="text-stone-400 hover:text-stone-200">Home</Link>
          <Link to="/compute" className="text-stone-400 hover:text-stone-200">Compute</Link>
          <Link to="/ledger" className="text-stone-400 hover:text-stone-200">Ledger</Link>
          <a href={PLATFORM_REPO} className="text-stone-400 hover:text-stone-200" target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${SALES_EMAIL}`} className="text-honey-300 font-semibold hover:text-honey-200">Contact</a>
        </nav>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-20 space-y-20">
        {/* Hero */}
        <section>
          <div className="text-[10px] tracking-[0.28em] uppercase text-honey-400 font-semibold mb-4">
            Defendable Open · the receipts behind the receipts
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-stone-100 leading-[1.05]">
            The actual models. <span className="text-honey-300">The actual sources.</span>{" "}
            The actual guardrails.
          </h1>
          <p className="mt-6 text-stone-400 text-lg leading-relaxed max-w-3xl">
            Most "AI valuation" platforms won't tell you which model wrote the words, which
            sources grounded the analysis, or where the data is stored. We do.
          </p>
          <p className="mt-4 text-stone-500 text-sm max-w-3xl">
            Validate the Validator™ doesn't stop at validating the AI. It validates the
            infrastructure under the AI, the storage under the infrastructure, and the
            doctrine under the storage. This page is that audit.
          </p>
        </section>

        {/* Models */}
        <section>
          <SectionHeader
            kicker="01 · Models in production"
            title="Every AI in the stack · named · contracted · gated"
            sub="Each model carries a typed contract that bounds its outputs to enum-safe values. Server-side guards refuse outputs that violate doctrine even when the model picks them."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {MODELS.map((m) => (
              <ModelCardView key={m.modelId} model={m} />
            ))}
          </div>
        </section>

        {/* Doctrine guardrails */}
        <section>
          <SectionHeader
            kicker="02 · Doctrine guardrails"
            title="What the platform refuses to do · enforced in code"
            sub="Service-boundary guards raise on violation. The validator chain runs against AI output before any record is drafted. The doctrine is in the code · not just the marketing."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {DOCTRINE_GUARDRAILS.map((g) => (
              <div key={g.name} className="rounded-lg border border-stone-800 bg-neutral-900/40 p-5">
                <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-2">guardrail</div>
                <div className="text-stone-100 font-semibold mb-2">{g.name}</div>
                <div className="text-stone-400 text-sm leading-relaxed">{g.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy vault */}
        <section>
          <SectionHeader
            kicker="03 · Object storage · the 4-bucket privacy vault"
            title="Where every byte lives · and what's allowed to leave"
            sub="`public_export_or_refuse()` is a service-boundary guard that raises CompFoundryError on any attempt to export from a non-public bucket. There is no override path."
          />
          <div className="mt-8 rounded-lg border border-stone-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900/60 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Bucket</th>
                  <th className="text-left px-5 py-3 font-semibold">What lives there</th>
                  <th className="text-left px-5 py-3 font-semibold">Egress rule</th>
                </tr>
              </thead>
              <tbody>
                {VAULTS.map((v, i) => (
                  <tr key={v.bucket} className={i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/20"}>
                    <td className="px-5 py-4 align-top">
                      <code className="text-honey-300 text-xs font-mono">{v.bucket}</code>
                    </td>
                    <td className="px-5 py-4 align-top text-stone-300">{v.example}</td>
                    <td className="px-5 py-4 align-top text-stone-400 text-xs leading-relaxed">{v.egressRule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Connectors honesty matrix */}
        <section>
          <SectionHeader
            kicker="04 · Connector honesty matrix"
            title={`All ${CONNECTORS.length} connectors · with real status · today`}
            sub="No `NOT_CONFIGURED` connector silently fakes a result. The healthcheck reports each connector's true status. If a connector is FUTURE_DISABLED, the platform behaves as if it doesn't exist."
          />
          <div className="mt-8 rounded-lg border border-stone-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900/60 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Connector</th>
                  <th className="text-left px-5 py-3 font-semibold">Category</th>
                  <th className="text-left px-5 py-3 font-semibold">Status</th>
                  <th className="text-left px-5 py-3 font-semibold">Note</th>
                </tr>
              </thead>
              <tbody>
                {CONNECTORS.map((c, i) => (
                  <tr key={c.name} className={i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/20"}>
                    <td className="px-5 py-3 align-top text-stone-200 font-medium">{c.name}</td>
                    <td className="px-5 py-3 align-top text-stone-400 text-xs">{c.category}</td>
                    <td className="px-5 py-3 align-top">
                      <StatusPill status={c.status} />
                    </td>
                    <td className="px-5 py-3 align-top text-stone-400 text-xs leading-relaxed">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-xs mt-4 italic">
            Status definitions: READY · connector is live and producing results. CONFIGURED_DISABLED · keys present, lane intentionally off.
            NOT_CONFIGURED · keys missing, lane returns honest no-data. FUTURE_DISABLED · documented, not wired.
            PLAN_VERIFICATION_REQUIRED · provider has tiered access that needs subscription proof. AGREEMENT_REQUIRED · partner pilot gate.
          </p>
        </section>

        {/* Open source */}
        <section>
          <SectionHeader
            kicker="05 · Open source"
            title="The platform code · the landing code · the agent plugin · all public"
            sub="The doctrine docs that govern the validator live in /docs of the platform repo. Everything you've read on this page is in the code under one of these three repositories."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            <OpenSourceCard
              name="defendableos"
              tagline="Platform · FastAPI + Postgres + alembic + worker · the AIOV/Validator/Deed chain"
              repo={PLATFORM_REPO}
              license="see repo · public source"
              metric="33+ SQLAlchemy models · 10 migrations · 17 connectors · 141/141 tests"
            />
            <OpenSourceCard
              name="defendable"
              tagline="Landing · React + Tailwind + Cloudflare Pages · the public surface you're on"
              repo={LANDING_REPO}
              license="see repo · public source"
              metric="9 pages · SSR-lite middleware · sitemap.xml · llms.txt · _headers"
            />
            <OpenSourceCard
              name="legalsniper-plugin"
              tagline="Claude Code plugin · closed-schema HANDOFF_INTENTS · 3-tier subagent isolation"
              repo={LEGAL_PLUGIN_REPO}
              license="Apache 2.0"
              metric="16 files · 1,461 LOC · v0.1.0 tagged · published 2026-05-21"
            />
          </div>
        </section>

        {/* Tie back to product */}
        <section className="rounded-lg border border-honey-300/20 bg-gradient-to-br from-honey-300/[0.04] to-transparent p-6 md:p-10">
          <div className="text-[10px] tracking-[0.28em] uppercase text-honey-400 font-semibold mb-3">
            What this becomes
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-100 tracking-tight">
            This is what we hash. This is the deed it produces. This is the verify URL.
          </h2>
          <p className="mt-4 text-stone-400 max-w-3xl leading-relaxed">
            Three live Defendable Deeds today. Each one passes the full chain you just read:
            evidence hashed → models drafted under typed contracts → guardrails enforced →
            validator gated → record published with a SHA-256 you can verify forever.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/compute"
              className="inline-flex items-center px-5 py-2.5 rounded border border-honey-300/40 bg-honey-300/10 text-honey-200 hover:bg-honey-300/20 hover:border-honey-300/70 transition-colors text-sm font-semibold"
            >
              See the Compute flagship →
            </Link>
            <Link
              to="/ledger"
              className="inline-flex items-center px-5 py-2.5 rounded border border-stone-700 text-stone-300 hover:text-stone-100 hover:border-stone-500 transition-colors text-sm font-semibold"
            >
              Search any hash on the ledger
            </Link>
            <a
              href={`mailto:${SALES_EMAIL}`}
              className="inline-flex items-center px-5 py-2.5 rounded border border-stone-700 text-stone-300 hover:text-stone-100 hover:border-stone-500 transition-colors text-sm font-semibold"
            >
              Get a deed for your asset
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 px-6 py-8 border-t border-stone-900/80 mt-12">
        <div className="max-w-6xl mx-auto text-xs text-stone-500 leading-relaxed">
          © 2026 Swarm and Bee LLC · DBA Swarm & Bee AI · D-U-N-S 138652395.
          DefendableOS™ · Proof of Value™ · Validate the Validator™ · AIOV™ · Defendable Deed™
          are unregistered trademarks. The infrastructure described on this page is
          live on <code className="text-stone-400">api.{SITE.replace("https://", "")}</code>{" "}
          today. Healthcheck and connector status are queryable.
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

function ModelCardView({ model }: { model: ModelCard }) {
  return (
    <div className="rounded-lg border border-stone-800 bg-neutral-900/40 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-1">
        <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-semibold">{model.provider}</div>
        <StatusPill status={model.status} />
      </div>
      <div className="text-stone-100 font-semibold text-lg tracking-tight mb-3">{model.modelId}</div>

      <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mt-2 mb-1">Role</div>
      <div className="text-stone-300 text-sm leading-snug mb-4">{model.role}</div>

      <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-1">Contract</div>
      <code className="text-honey-300/90 text-[11px] font-mono leading-snug mb-4 block break-words">
        {model.contract}
      </code>

      <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-1">Validator checks triggered</div>
      <ul className="text-stone-400 text-xs leading-snug mb-4 space-y-0.5">
        {model.validatorChecks.map((c) => (
          <li key={c}>· {c}</li>
        ))}
      </ul>

      <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-1">Provider quirks captured</div>
      <div className="text-stone-400 text-xs leading-snug mb-4">{model.quirks}</div>

      <div className="text-[10px] uppercase tracking-[0.18em] text-honey-400 font-semibold mb-1">Why chosen</div>
      <div className="text-stone-400 text-xs leading-snug">{model.whyChosen}</div>
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  const palette: Record<string, string> = {
    READY: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
    PRODUCTION: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
    PRODUCTION_OPTIONAL: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    PROPOSED: "border-stone-600 bg-stone-800/40 text-stone-400",
    CONFIGURED_DISABLED: "border-amber-500/40 bg-amber-500/10 text-amber-300",
    NOT_CONFIGURED: "border-stone-600 bg-stone-800/60 text-stone-400",
    FUTURE_DISABLED: "border-stone-700 bg-stone-900/60 text-stone-500",
    PLAN_VERIFICATION_REQUIRED: "border-honey-400/40 bg-honey-400/10 text-honey-300",
    AGREEMENT_REQUIRED: "border-honey-400/40 bg-honey-400/10 text-honey-300",
  };
  const cls = palette[status] ?? "border-stone-700 bg-stone-900/60 text-stone-400";
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider border ${cls}`}>
      {status}
    </span>
  );
}

function OpenSourceCard({
  name,
  tagline,
  repo,
  license,
  metric,
}: {
  name: string;
  tagline: string;
  repo: string;
  license: string;
  metric: string;
}) {
  return (
    <a
      href={repo}
      target="_blank"
      rel="noreferrer"
      className="block rounded-lg border border-stone-800 bg-neutral-900/40 p-6 hover:border-honey-300/40 hover:bg-honey-300/[0.03] transition-colors"
    >
      <div className="flex items-center justify-between mb-2">
        <code className="text-honey-300 text-sm font-mono">{name}</code>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-stone-500">
          <path d="M5 9l4-4M5 5h4v4" />
        </svg>
      </div>
      <div className="text-stone-300 text-sm leading-snug mb-3">{tagline}</div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">License</div>
      <div className="text-stone-400 text-xs mb-3">{license}</div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">By the numbers</div>
      <div className="text-stone-400 text-xs leading-snug">{metric}</div>
    </a>
  );
}
