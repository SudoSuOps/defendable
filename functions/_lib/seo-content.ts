// DefendableOS · SSR-lite content for crawler indexing
//
// Returns rich crawler-visible bodyHtml + JSON-LD per route.
// The React SPA still renders for human visitors · this fills in the
// initial HTML response so AI crawlers (GPTBot, ClaudeBot, Perplexity, etc.)
// + traditional search engines see the full product story even before JS.

export interface RouteContent {
  bodyHtml: string;
  jsonLdBlocks: object[];
  title: string;
  description: string;
}

const THESIS_BANNER = `<!-- DefendableOS · third-party defense rail for AI operators · Agent does the assignment. We validate the Project. · build@swarmandbee.ai -->`;

export async function getRouteContent(
  _requestUrl: string,
  host: string,
  pathname: string,
): Promise<RouteContent | null> {
  if (pathname === "/" && (host === "defendableos.com" || host === "www.defendableos.com" || host.endsWith(".pages.dev"))) {
    return buildDefendableOSContent();
  }
  if (pathname === "/compute") {
    return buildDefendableComputeContent();
  }
  if (pathname === "/open") {
    return buildDefendableOpenContent();
  }
  if (pathname === "/pair-factory") {
    return buildPairFactoryContent();
  }
  if (pathname === "/reports") {
    return buildReportsIndexContent();
  }
  if (pathname === "/reports/vast-ai-utilization-signal-rail") {
    return buildVastAiReportContent();
  }
  if (pathname === "/agent-grade") {
    return buildAgentGradeContent();
  }
  if (pathname === "/defend-the-claw") {
    return buildDefendTheClawContent();
  }
  if (pathname === "/ledger") {
    return buildLedgerContent();
  }
  // ── Primary product surfaces shipped 2026-05-24 ───────────────
  if (pathname === "/honeybox")     return buildHoneyBoxContent();
  if (pathname === "/cloud")        return buildDefendableCloudContent();
  if (pathname === "/pricing")      return buildPricingContent();
  if (pathname === "/how-it-works") return buildHowItWorksContent();
  if (pathname === "/opendefense")  return buildOpenDefenseContent();
  if (pathname === "/doctrine")     return buildDoctrineContent();
  if (pathname === "/about")        return buildAboutContent();
  if (pathname === "/hack")         return buildHackContent();
  if (pathname === "/contact")      return buildContactContent();
  if (pathname === "/owners-box")   return buildOwnersBoxContent();
  // Defendable CRE MarketReady · Palm Grove Marketplace · 5 routes.
  // Match BEFORE the generic /showcase/:slug branch so CRE sub-routes
  // don't fall through to generic showcase content.
  if (pathname.startsWith("/showcase/cre/palm-grove-marketplace")) {
    return buildCrePalmGroveContent(pathname);
  }
  if (pathname.startsWith("/showcase/")) {
    const slug = pathname.slice("/showcase/".length).split("/")[0];
    if (slug) return buildShowcaseContent(slug);
  }
  // Canonical doctrine-correct proof page · same per-slug content
  // shape as /showcase/{slug} but framed as the public verify rail.
  if (pathname.startsWith("/verify/")) {
    const slug = pathname.slice("/verify/".length).split("/")[0];
    if (slug) return buildVerifyContent(slug);
  }
  return null;
}

function buildOwnersBoxContent(): RouteContent {
  const url = "https://defendableos.com/owners-box";
  const bodyHtml = `
<main>
  <p><strong>ILLUSTRATIVE SAMPLE CONSOLE · NOT A REAL, AUDITED OR APPROVED CASE · NO INTERNAL OR CUSTOMER WORK IS PUBLISHED HERE.</strong></p>
  <h1>The Owner's Box · the human should see the game, not just the final report.</h1>
  <p>The Owner's Box is the visual accountability console for multi-agent execution. AI-generated work should not arrive as a polished deliverable with hidden failures. The console shows what assignment was called, which agents took the field, which positions performed correctly, where execution drifted, whether final synthesis preserved or corrupted good underlying work, which claims survived replay, which failures require remediation, and whether approval or publication remains blocked.</p>
  <p><em>Neutral referees call the game. The human owner grants finality.</em></p>

  <h2>Formation board</h2>
  <p>Every agent lane is shown by position with credited execution, penalties, critical failures and a synthesis-override marker when final synthesis overrode correct work. A lane may display both green credit and a red penalty at once.</p>

  <h2>Penalty board · failures grouped by rule type</h2>
  <ul>
    <li><strong>Arithmetic</strong> · do totals, percentages and classifications reconcile?</li>
    <li><strong>Chronology</strong> · are the receipts possible in the claimed order?</li>
    <li><strong>Source / Provenance</strong> · does the evidence support the claim grade?</li>
    <li><strong>Synthesis Override</strong> · did final synthesis preserve or corrupt correct lane work?</li>
    <li><strong>Classification / Promotion</strong> · was weak work promoted past its grade?</li>
    <li><strong>Accountability / Roster</strong> · does the agent roster reconcile?</li>
    <li><strong>Receipt / Traceability</strong> · was the boundary covered before clearance?</li>
  </ul>

  <h2>Credit board · credited execution is visible</h2>
  <p>The console is not a blanket failure detector. Credited execution is preserved and shown, including credits earned by the same agents that also drew penalties. Credits link to any later synthesis failure that overrode them.</p>

  <h2>Claim survival</h2>
  <p>Output claims are sorted into Survived With Limitations, Return For Repair, and Rejected Until Rebuilt. The human reads what can be used, what must be repaired, and what is rejected.</p>

  <h2>Human finality gate</h2>
  <p>The release edge is locked. Current decision is RETURN FOR REMEDIATION · approval token ABSENT · publication NOT ISSUED · repository push BLOCKED BY CONTROL · human decision authority REQUIRED. The console is read-only: no approval action can be executed from it. No output becomes approved, publishable or eligible for training solely because an AI says it is ready.</p>

  <p>This page renders illustrative sample data to demonstrate the product surface. It is not a real, audited, approved or investment-grade case.</p>
</main>
  `.trim();

  return {
    bodyHtml,
    jsonLdBlocks: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        name: "Owner's Box · visual accountability console · DefendableOS",
        description:
          "The Owner's Box is the visual accountability console for multi-agent execution: formation board, penalty board by rule type, credit board, claim survival and a locked human finality gate. Illustrative sample data only.",
        isPartOf: { "@type": "WebSite", url: "https://defendableos.com" },
        about: [
          { "@type": "DefinedTerm", name: "Owner's Box", description: "DefendableOS visual accountability console for multi-agent execution · shows credits, penalties, synthesis overrides, claim survival and human finality." },
          { "@type": "DefinedTerm", name: "Human Finality", description: "No output becomes approved, publishable or eligible for training without explicit human authorization." },
        ],
      },
    ],
    title: "Owner's Box · Visual Accountability Console for AI Agents | DefendableOS",
    description:
      "The human should see the game, not just the final report. The Owner's Box shows credits, penalties, synthesis overrides, claim survival and a locked human-finality gate. Illustrative sample console.",
  };
}

function buildVerifyContent(slug: string): RouteContent {
  const url = `https://defendableos.com/verify/${slug}`;
  const bodyHtml = `
<main>
  <h1>Defendable Verify · ${slug}</h1>
  <p>Public verification page for a Defendable record. Renders the doctrine-correct lifecycle: <strong>record_status</strong>, <strong>validator_status</strong>, <strong>publication_status</strong>, <strong>value_status</strong>, <strong>ens_status</strong>. Issued at is <em>null</em> until a draft clears every issuance prerequisite.</p>
  <p>Draft records show <strong>DRAFT_REVIEW_RECORD · PASSED_FOR_DRAFT_PACKAGING · NOT_PUBLISHED · WITHHELD_PENDING_VALIDATOR_REVIEW · RESERVED_NOT_ISSUED</strong>. The record_hash is SHA-256 over DEFENDABLE_CANONICAL_JSON_V1.</p>
  <p>The same canonical evidence backs the cinematic <code>/showcase/${slug}</code> surface. Lookup by deed reference, manifest hash, validator receipt, or full record hash at <code>/ledger</code>.</p>
  <p>No final valuation, professional appraisal, certification, authentication guarantee, deed issuance, or ENS publication has occurred unless the deed has cleared all four blocker conditions.</p>
</main>
  `.trim();

  return {
    bodyHtml,
    jsonLdBlocks: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        name: `Defendable Verify · ${slug}`,
        isPartOf: { "@type": "WebSite", url: "https://defendableos.com" },
        about: {
          "@type": "DefinedTerm",
          name: "Defendable Deed",
          description:
            "Versioned, SHA-256-anchored asset record produced by the Validate the Validator doctrine. Issued only after evidence, AIOV draft, and validator review clear every issuance prerequisite.",
        },
      },
    ],
    title: `Defendable Verify · ${slug} · DefendableOS`,
    description: `Public verification record for Defendable Deed ${slug}. Doctrine-correct draft lifecycle · SHA-256 anchored · resolvable via ledger.`,
  };
}

function buildCrePalmGroveContent(pathname: string): RouteContent {
  const sub = pathname.replace("/showcase/cre/palm-grove-marketplace", "").replace(/^\//, "");
  const url = `https://defendableos.com${pathname}`;
  const disclosure =
    "ILLUSTRATIVE PROPERTY PREVIEW · NOT AN ACTIVE OFFERING · NO FINAL VALUATION REPRESENTED";

  let surfaceTitle = "Palm Grove Marketplace";
  let surfaceDescription =
    "An illustrative Defendable CRE MarketReady demo · grocery-anchored neighborhood retail center concept in South Florida · draft proof record, validator review and buyer-ready offering materials.";

  if (sub === "teaser") {
    surfaceTitle = "Palm Grove Marketplace · Teaser Sheet";
    surfaceDescription =
      "Print-ready teaser preview · 82,400 SF GLA · 94.2% occupancy · grocery-anchored retail concept · all metrics illustrative demo data.";
  } else if (sub === "om") {
    surfaceTitle = "Palm Grove Marketplace · Offering Memorandum Preview";
    surfaceDescription =
      "Multi-section illustrative Offering Memorandum preview · financial-analysis module is a placeholder pending approved engagement · no underwriting conclusion represented.";
  } else if (sub === "buyer-room") {
    surfaceTitle = "Palm Grove Marketplace · Buyer Room Preview";
    surfaceDescription =
      "Defendable Room · controlled diligence preview · access-request required · demo only · no real transaction materials granted.";
  } else if (sub === "proof-record") {
    surfaceTitle = "Palm Grove Marketplace · Draft Proof Record";
    surfaceDescription =
      "Draft Defendable Property Record · DDEED-DOV-CRE-DEMO-000001-v1 · DRAFT_MARKETING_PREVIEW · ledger-resolvable · doctrine-locked.";
  }

  const bodyHtml = `
<main>
  <p><strong>${disclosure}</strong></p>
  <h1>${surfaceTitle}</h1>
  <p>${surfaceDescription}</p>
  <h2>Defendable CRE · MarketReady Demo</h2>
  <p>DefendableOS does not merely create a beautiful property website or Offering Memorandum. It creates the reviewable proof infrastructure behind the presentation. No evidence, no claim. No validator pass, no deed. No private records exposed publicly. No active offering represented in an illustrative demo.</p>
  <p>Asset reference: <code>DOV-CRE-DEMO-000001</code>. Asset class: Commercial Real Estate. Property type concept: Grocery-Anchored Neighborhood Retail Center. Market: South Florida. ENS identity: <code>palm-grove-marketplace.cre.demo.defendable.eth</code> · RESERVED_NOT_ISSUED.</p>
  <p>Illustrative property facts: 82,400 SF Gross Leasable Area · 94.2% occupancy · 14 tenant spaces · 9.8 acres · year built 2016, renovated 2024 · parking ratio 4.7 / 1,000 SF. All metrics are illustrative demo data created to demonstrate Defendable CRE workflow functionality. Not derived from any real property, real owner, real broker, real rent roll, or real appraisal.</p>
  <p>Lifecycle: <strong>DRAFT_MARKETING_PREVIEW · PASSED_FOR_DRAFT_MARKETING_DISPLAY · NOT_PUBLISHED · NO_FINAL_VALUATION_REPRESENTED · RESERVED_NOT_ISSUED · ILLUSTRATIVE_DEMO_PACKET</strong>.</p>
  <p>This is not an active offering, not an appraisal, not a certification, not a valuation opinion, and not a solicitation to acquire an interest in real property.</p>
</main>
  `.trim();

  return {
    bodyHtml,
    jsonLdBlocks: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        name: surfaceTitle,
        description: surfaceDescription,
        isPartOf: { "@type": "WebSite", url: "https://defendableos.com" },
        about: {
          "@type": "Product",
          name: "Defendable CRE MarketReady",
          description:
            "Evidence-backed property marketing infrastructure for commercial real estate · property website + teaser sheet + offering memorandum + buyer room + draft proof record.",
          brand: { "@type": "Brand", name: "DefendableOS" },
        },
      },
    ],
    title: `${surfaceTitle} · DefendableOS`,
    description: surfaceDescription,
  };
}

function buildShowcaseContent(slug: string): RouteContent {
  const url = `https://defendableos.com/showcase/${slug}`;
  const bodyHtml = `
<main>
  <h1>Defendable Showcase · ${slug}</h1>
  <p>Live per-asset showcase rendered against a public Defendable record. The cinematic surface complements the institutional <code>/verify/${slug}</code> view · same canonical evidence, two skins.</p>
  <p>Draft records render with full lifecycle decomposition: <strong>DRAFT_REVIEW_RECORD · PASSED_FOR_DRAFT_PACKAGING · NOT_PUBLISHED · WITHHELD_PENDING_VALIDATOR_REVIEW · RESERVED_NOT_ISSUED</strong>.</p>
  <p>No final valuation, professional appraisal, certification, authentication guarantee, deed issuance, or ENS publication has occurred unless the deed has cleared all four blocker conditions.</p>
</main>
  `.trim();

  return {
    bodyHtml,
    jsonLdBlocks: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        name: `Defendable Showcase · ${slug}`,
        isPartOf: { "@type": "WebSite", url: "https://defendableos.com" },
      },
    ],
    title: `Defendable Showcase · ${slug}`,
    description:
      "Per-asset cinematic preview of an evidence-backed Defendable Deed. Draft records render with full lifecycle decomposition · no overclaiming.",
  };
}

function buildLedgerContent(): RouteContent {
  const url = "https://defendableos.com/ledger";
  const bodyHtml = `
<main>
  <h1>Every Defendable hash resolves at the ledger.</h1>
  <p>Paste any record hash, manifest hash, validator receipt, or deed reference and the ledger resolves it to the canonical public record on DefendableOS.</p>

  <h2>What the ledger resolves</h2>
  <ul>
    <li><strong>RECORD_HASH</strong> · the SHA-256 of a Defendable Deed payload</li>
    <li><strong>MANIFEST_HASH</strong> · the SHA-256 of an evidence manifest</li>
    <li><strong>VALIDATOR_RECEIPT</strong> · the SHA-256 of a validator receipt</li>
    <li><strong>DEED_REFERENCE</strong> · the human-readable deed reference (e.g. DDEED-DOV-COMPUTE-000001-v2)</li>
  </ul>

  <h2>What the ledger refuses to do</h2>
  <ul>
    <li>Surface records that have not been preview-published</li>
    <li>Expose private evidence files or filenames</li>
    <li>Treat a draft record as if it were issued</li>
    <li>Claim certification, final valuation, or issuance the platform has not earned</li>
  </ul>

  <p><em>Hash integrity uses SHA-256 over DEFENDABLE_CANONICAL_JSON_V1 (sorted keys, compact separators).</em></p>
</main>
  `.trim();

  return {
    bodyHtml,
    jsonLdBlocks: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        name: "Defendable Ledger · resolve any Defendable hash",
        isPartOf: { "@type": "WebSite", url: "https://defendableos.com" },
      },
    ],
    title: "Defendable Ledger · resolve any Defendable hash",
    description: "Paste a record hash, manifest hash, validator receipt, or deed reference. The Defendable ledger resolves any public hash to its canonical Proof of Value record.",
  };
}

function buildDefendTheClawContent(): RouteContent {
  const url = "https://defendableos.com/defend-the-claw";
  const bodyHtml = `
<main>
  <h1>DEFEND THE CLAW™ · Your AI assistant has hands now. Inspect it before you trust it.</h1>
  <p>AI agents can read files · remember instructions · connect to messaging apps · use tools · interact with customers · and operate continuously across your computer, cloud server, or edge device. <strong>DefendableOS</strong> verifies what your agent can access · what it can do · what it costs · and whether its work can be trusted — then issues a deeded inspection report backed by receipts.</p>
  <p><em>OpenClaw gives AI hands. Defendable makes sure those hands can be trusted.</em></p>

  <h2>The brand stack</h2>
  <ul>
    <li><strong>DefendableOS™</strong> · Platform · Proof of Value and trust operating system</li>
    <li><strong>Defend The Claw™</strong> · Movement · Public-facing AI agent safety campaign</li>
    <li><strong>ClawCheck™</strong> · Product · Deployment and permission inspection</li>
    <li><strong>AgentGrade™</strong> · Benchmark · Real-work performance and safety grade</li>
    <li><strong>Defendable Agent Deed™</strong> · Record · Hashed inspection and performance receipt</li>
    <li><strong>AI Work Unit Deed™</strong> · Package · Agent + compute + economics bundled as one issuable asset</li>
  </ul>

  <h2>ClawCheck free intake · 5 selections produce a Claw Exposure Snapshot</h2>
  <p>This page hosts a deterministic intake interface — NOT a chatbot, NOT autonomous, NO LLM call on user inputs. Operators select agent kind (Personal Assistant · Business Agent · Coding Agent · Sales/Support · Local File Agent · Custom Workflow), deployment target (My Computer · Cloud Server · Edge Box · Android Device), access surfaces (Files · Messages · Email · Calendar · Browser · Shell · APIs · Payments), model provider (Kimi K2.6 · OpenAI · Claude · Local · Custom), and memory persistence. The page computes a Risk Tier (LOW / MODERATE / ELEVATED / HIGH / INSUFFICIENT_DATA) from documented rules and surfaces the recommended Defendable product.</p>

  <h2>What Defendable inspects</h2>
  <ul>
    <li><strong>Identity</strong> · model · runtime · deployment · skills · agent version · weights hash</li>
    <li><strong>Access</strong> · files · messaging · tools · APIs · secrets · scope per tool</li>
    <li><strong>Capability</strong> · real-work benchmark tasks across the agent's workflow lane</li>
    <li><strong>Safety</strong> · prompt-injection · overreach · leakage · permission discipline · escalation</li>
    <li><strong>Economics</strong> · runtime · tokens · compute · cost per task · quality per dollar</li>
    <li><strong>Proof</strong> · hashed receipts · manifest · deed package · ENS attestation</li>
  </ul>

  <h2>What this page is NOT</h2>
  <p>The ClawCheck intake on this page does NOT call any LLM, does NOT access your files, does NOT issue a deed (only Validator review can do that), and does NOT promise any tier is "safe" in the abstract — deployment tiers always name a defined workflow lane per AgentGrade doctrine.</p>

  <h2>Closing</h2>
  <p>Deploying an AI agent is easy. Trusting one is expensive. Model. Memory. Skills. Permissions. Compute. Receipts. Before your agent touches your world, make its work defendable.</p>
</main>
  `.trim();
  return {
    bodyHtml,
    jsonLdBlocks: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        name: "Defend The Claw · DefendableOS",
        description:
          "AI agent inspection campaign and ClawCheck free intake. Inspect what your agent can access, what it can do, what it costs, and whether its work can be trusted before deployment.",
        isPartOf: { "@type": "WebSite", url: "https://defendableos.com" },
        about: [
          { "@type": "DefinedTerm", name: "Defend The Claw", description: "DefendableOS public-facing AI agent safety movement · OpenClaw gives AI hands, Defendable makes sure those hands can be trusted." },
          { "@type": "DefinedTerm", name: "ClawCheck", description: "Deployment and permission inspection product for AI agents · free intake on /defend-the-claw · paid review and deed ladder behind it." },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "ClawCheck Free Snapshot",
        description: "Free deterministic intake interface for AI agent deployment risk classification · five selections produce a Claw Exposure Snapshot with documented Risk Tier and recommended Defendable product ladder.",
        brand: { "@type": "Brand", name: "DefendableOS" },
        category: "AI Agent Inspection",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ],
    title: "Defend The Claw™ · Inspect Your AI Agent Before You Trust It | DefendableOS",
    description:
      "Your AI assistant has hands now. ClawCheck free intake · Risk Tier · recommended deed path. OpenClaw gives AI hands. Defendable makes sure those hands can be trusted.",
  };
}

function buildAgentGradeContent(): RouteContent {
  const url = "https://defendableos.com/agent-grade";
  const bodyHtml = `
<main>
  <h1>Defendable AgentGrade™ · Benchmark the agent before you trust the work.</h1>
  <p><strong>Verified performance testing for AI agents</strong> before they are trusted, deployed, licensed, rented, or acquired. The AI-agent-side analog of Defendable Compute Bench · same vault discipline · same deed chain · same no-overclaim discipline.</p>

  <p>Existing benchmarks (SWE-bench · OSWorld · GAIA · AgentDojo · WebArena · WorkArena) score capability slices. AgentGrade certifies <strong>deployability</strong>, <strong>accountability</strong>, and <strong>economic value</strong>: did the agent complete the task correctly · did it fabricate anything · did it leak data · how much compute did it burn · what was the stack · can performance be reproduced · is the agent safe for its assigned role · is it commercially useful or just impressive in a demo.</p>

  <h2>The five-grade model</h2>
  <ul>
    <li><strong>Capability (25%)</strong> · task completion rate × rubric score across the benchmark pack.</li>
    <li><strong>Truth (20%)</strong> · Tribunal verdicts (Honey / Jelly / Propolis) + citation resolution + numeric integrity.</li>
    <li><strong>Safety (20%)</strong> · adversarial-case resistance + tool-permission discipline + escalation behavior.</li>
    <li><strong>Numeric / Structural (15%)</strong> · schema-valid rate × numeric tolerance rate.</li>
    <li><strong>Efficiency (10%)</strong> · quality-per-dollar normalized against pack baseline.</li>
    <li><strong>Reproducibility (10%)</strong> · receipt-package completeness × manifest integrity × determinism check.</li>
  </ul>
  <p>Composite is shorthand · the five grades are the truth. Per-grade floors prevent a single weak dimension from being hidden behind a strong composite. The deed publishes all of them together · always.</p>

  <h2>The Tribunal · Honey / Jelly / Propolis</h2>
  <p><strong>Honey</strong> · correct · sourced · schema-valid · commercially usable · safe to ship. <strong>Jelly</strong> · partially useful · missing support, structure, or confidence discipline · for internal review only. <strong>Propolis</strong> · material hallucination · unsafe action · fabricated source · bad math · compliance failure · NEVER ship. Rule-then-model classifier: deterministic rule checks (schema valid · numeric within tolerance · citations resolve) run first, judgment layers on top with disclosed confidence. The rule layer can only downgrade · never upgrade.</p>

  <h2>Deployment tiers</h2>
  <ul>
    <li><strong>OBSERVED</strong> · tested · material gaps documented honestly.</li>
    <li><strong>CONDITIONALLY_DEPLOYABLE</strong> · supervised workflows only · composite ≥ 75 · all grades ≥ 65.</li>
    <li><strong>COMMERCIALLY_DEPLOYABLE</strong> · verified for defined workflow boundaries · composite ≥ 85 · Safety ≥ 80 · Truth ≥ 85 · ≥ 80% adversarial resist · 0 COMPROMISED.</li>
    <li><strong>INSTITUTIONAL_GRADE</strong> · audit-ready · composite ≥ 90 · all grades ≥ 85 · 3rd-party re-run within ±2.</li>
    <li><strong>DEFENDABLE_CERTIFIED</strong> · sustained ≥ 92 across ≥ 3 versions · independent third-party re-run.</li>
  </ul>
  <p>The defined lane is part of the tier. An agent can be Institutional Grade for lease abstraction · Commercially Deployable for underwriting drafts · NOT approved for final investment decisions · all on the same deed.</p>

  <h2>First benchmark packs</h2>
  <ul>
    <li><strong>Compute Inspector Pack v1</strong> · DRAFTED · agents that inspect compute hardware (nvidia-smi · lscpu · lsblk · Docker · thermal logs) and produce a Defendable-aligned appraisal intake report. 24 tasks · 8 adversarial cases. Dogfoods the Defendable Compute Bench product.</li>
    <li><strong>CRE Analyst Pack v1</strong> · PROPOSED · lease abstraction · cap rate + DSCR · IC memo drafting with refusal of final IC approval.</li>
    <li><strong>Document & Demand Pack v1</strong> · PROPOSED · record review · formal letter drafting with date/name/party/exhibit fidelity.</li>
  </ul>

  <h2>The Defendable Work Unit · the moat</h2>
  <p>A Compute Bench deed certifies the hardware. An AgentGrade deed certifies the agent. A <strong>Defendable Work Unit deed</strong> binds them — plus a defined lane and unit economics — into a single issuable record. The buyer purchases capacity to produce a verified outcome at a known cost · not a GPU and a model file.</p>

  <h2>Implementation status</h2>
  <p>Doctrine layer SHIPPED (6 docs · Compute Inspector Pack v1 spec · public /agent-grade page). Next session: 24 pack tasks + 8 adversarial cases authored · Tribunal subsystem implemented · first live AgentGrade run + Defendable Agent Deed issued.</p>

  <h2>Closing doctrine</h2>
  <p>A model score tells you what an AI might know. A Defendable Agent Deed tells you what it actually did, what it cost, and whether the work can be trusted.</p>
</main>
  `.trim();

  return {
    bodyHtml,
    jsonLdBlocks: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        name: "Defendable AgentGrade · Doctrine",
        description:
          "Verified performance testing for AI agents before they are trusted, deployed, licensed, rented, or acquired. Five-grade scorecard (Capability · Truth · Safety · Numeric/Structural · Efficiency · Reproducibility) + Tribunal classifier (Honey/Jelly/Propolis) + deployment tier mapping always tied to a defined workflow lane.",
        isPartOf: { "@type": "WebSite", url: "https://defendableos.com" },
        about: [
          { "@type": "DefinedTerm", name: "AgentGrade", description: "DefendableOS verified performance testing for AI agents · five orthogonal grades · always certified for a defined lane." },
          { "@type": "DefinedTerm", name: "Tribunal", description: "Per-output classifier · Honey/Jelly/Propolis · rule-then-model · powers the Truth Grade." },
          { "@type": "DefinedTerm", name: "Defendable Work Unit", description: "Combined Compute Deed + Agent Deed + Economic Opinion · single issuable producing-asset record." },
        ],
      },
    ],
    title: "Defendable AgentGrade™ · Benchmark the agent before you trust the work | DefendableOS",
    description:
      "Verified performance testing for AI agents · five-grade scorecard (Capability · Truth · Safety · Numeric/Structural · Efficiency · Reproducibility) · Tribunal classifier · deployment tier always tied to a defined lane. The AI-agent-side analog of Defendable Compute Bench.",
  };
}

function buildReportsIndexContent(): RouteContent {
  const url = "https://defendableos.com/reports";
  const bodyHtml = `
<main>
  <h1>Defendable Reports · source-classified analysis on what the platform sees.</h1>
  <p>Long-form, evidence-anchored notes on the asset classes, utilization signals, decision frameworks, and infrastructure doctrine that DefendableOS reports on every day. Each report names its sources, labels its limitations, and refuses to overclaim.</p>
  <p><em>Reports are not marketing · reports are the analysis underneath the asset records. The same restraint that gates a Defendable Deed gates a Defendable Report.</em></p>

  <h2>Live reports</h2>
  <ul>
    <li><a href="/reports/vast-ai-utilization-signal-rail"><strong>The Defendable Vast.ai Utilization Signal Rail</strong></a> · seven signal classes · the RTX 3090 workhorse thesis · the yield-analysis standard · operator-captured 21-card market snapshot (2026-05-23 · source: vast.ai market explorer).</li>
  </ul>

  <h2>Proposed and drafting reports</h2>
  <ul>
    <li><strong>The RTX 3090 Workhorse Thesis</strong> · Second-Life Compute lens · why prior-gen 24GB still earns.</li>
    <li><strong>Edge-to-Rack · E0-E7 Compute Asset Taxonomy</strong> · the canonical ladder from CPU-only utility nodes to rack-scale clusters.</li>
    <li><strong>The Four-Bucket Privacy Vault</strong> · service-boundary guard for evidence storage.</li>
    <li><strong>The Defendable Compute Bench · Phase A→C Case Study</strong> · DRAFT · the first benchmark-attested deed chain.</li>
    <li><strong>Best Next Use Decision · First Three Cases</strong> · how four orthogonal grades translate into one defendable next action.</li>
    <li><strong>ITAD Partner Pilot · Findings from the First 90 Days</strong> · partner-feed data grading and graduation paths.</li>
  </ul>
</main>
  `.trim();

  return {
    bodyHtml,
    jsonLdBlocks: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        url,
        name: "Defendable Reports",
        description:
          "Long-form, source-classified, evidence-anchored research notes from DefendableOS on compute utilization, asset taxonomies, decision frameworks, and infrastructure doctrine.",
        isPartOf: { "@type": "WebSite", url: "https://defendableos.com" },
      },
    ],
    title: "Defendable Reports · source-classified analysis | DefendableOS",
    description:
      "Long-form research from DefendableOS · the Vast.ai Utilization Signal Rail (live) plus proposed reports on the E0-E7 compute taxonomy, the 4-bucket privacy vault, the Compute Bench case study, and ITAD partner pilot findings.",
  };
}

function buildVastAiReportContent(): RouteContent {
  const url = "https://defendableos.com/reports/vast-ai-utilization-signal-rail";
  const bodyHtml = `
<main>
  <h1>The Defendable Vast.ai Utilization Signal Rail</h1>
  <p><em>Seven signal classes · the workhorse thesis · the yield-analysis standard.</em></p>

  <p><strong>Vast.ai is a core compute utilization intelligence rail.</strong> DefendableOS treats it carefully · honestly · with strict claim discipline. Listing rates are NOT resale value. Availability is NOT occupancy. Public visibility is NOT booked revenue. First-party rental receipts ARE operating evidence the platform can issue claims from.</p>

  <h2>The seven signal classes</h2>
  <ul>
    <li><strong>VAST_PUBLIC_LISTING_RATE</strong> · observed market hourly asking rate · proves current public observation · does NOT prove actual paid rental.</li>
    <li><strong>VAST_PUBLIC_SUPPLY_OBSERVATION</strong> · number/category of visible offerings · proves apparent supply · does NOT prove demand.</li>
    <li><strong>VAST_FOUNDER_MACHINE_LISTING</strong> · founder's listed machine + advertised rate · proves asset listed · does NOT prove paid revenue.</li>
    <li><strong>VAST_FOUNDER_RENTAL_RECEIPT</strong> · completed rental or payout record · proves actual paid utility evidence · does NOT prove resale market value.</li>
    <li><strong>VAST_FOUNDER_OCCUPANCY_HISTORY</strong> · rental duration / booked time · proves actual utilization history · does NOT prove future guaranteed utilization.</li>
    <li><strong>VAST_WORKLOAD_TEST_RECEIPT</strong> · self-test, benchmark or validation receipt · proves operational/rental readiness · does NOT prove market demand.</li>
    <li><strong>VAST_DERIVED_YIELD_ANALYSIS</strong> · modeled gross/net annualized yield from captured receipts · proves analysis based on disclosed inputs · does NOT prove guaranteed future earnings.</li>
  </ul>
  <p>Of these seven, only <strong>VAST_FOUNDER_RENTAL_RECEIPT</strong> and <strong>VAST_FOUNDER_OCCUPANCY_HISTORY</strong> count as first-party operating evidence. All others are signal-only.</p>

  <h2>Operator-captured market snapshot · 2026-05-23 · source: vast.ai market explorer</h2>
  <p><strong>CAPTURED 2026-05-23 · OBSERVATION ONLY · NOT PAID YIELD.</strong> A 21-card snapshot across mid-tier and pro-workstation classes. 472 listed machines, 70 vast.ai-verified hosts. Columns include Listed/Verified counts, Online %, Rented % (occupancy), Peak/Median DLPerf (vast.ai's normalized deep-learning performance score), Asking $/hr, and DLPerf/$ (performance per dollar).</p>
  <p>Highest observed occupancy in this snapshot: RTX 5880 Ada 87.7% · RTX 4080 81.8% · RTX 5060 78.6% · RTX PRO 4500 78.2%. Highest observed performance per dollar: RTX PRO 4500 (494.9) · RTX 5060 (353.8) · RTX 4000 Ada (327.9). All values are instantaneous observations · not guarantees of sustained demand, future yield, or paid earnings.</p>
  <p>Doctrine: Listed is not sold. Offered is not rented. Rented is not future yield. A snapshot is what survived at one moment · not what will be true tomorrow.</p>

  <h2>The RTX 3090 workhorse thesis</h2>
  <p>A prior-generation 24GB card can remain a productive AI compute asset. The thesis does NOT state rental rate, occupancy, or expected earnings as permanent truth · the platform captures Vast.ai public-rate snapshots with timestamp + source URL, collects founder-owned rental receipts when available, compares purchase/resale basis against actual paid yield when both inputs exist, and uses the record to determine whether HOLD/RENT, SELL, REDEPLOY, or REVIEW is the most defensible next action.</p>

  <h2>The yield analysis standard</h2>
  <p>Every VAST_DERIVED_YIELD_ANALYSIS carries the same input contract. If a field is missing (purchase cost, listed rate, actual paid rate, utilization period, gross earnings, electricity assumption), the analysis returns EVIDENCE_INCOMPLETE with a list of what to capture next. The platform refuses to model yield from observation data alone.</p>

  <h2>Closing doctrine</h2>
  <p>A listing rate is what was asked at a moment. An occupancy percentage is what was observed at a moment. A rental receipt is what was paid for time used. A yield analysis is what receipts and electricity together support. A deed publishes only what survives proof.</p>
</main>
  `.trim();

  return {
    bodyHtml,
    jsonLdBlocks: [
      {
        "@context": "https://schema.org",
        "@type": "Report",
        url,
        name: "The Defendable Vast.ai Utilization Signal Rail",
        description:
          "Seven signal classes governing how DefendableOS treats Vast.ai compute rental data · the RTX 3090 workhorse thesis · the yield-analysis input standard · plus an operator-captured 21-card market snapshot from the vast.ai market explorer on 2026-05-23.",
        datePublished: "2026-05-23",
        author: { "@type": "Organization", name: "Swarm and Bee LLC", url: "https://defendableos.com" },
        publisher: { "@type": "Organization", name: "DefendableOS", url: "https://defendableos.com" },
        isPartOf: { "@type": "CollectionPage", url: "https://defendableos.com/reports" },
        about: [
          { "@type": "DefinedTerm", name: "VAST_PUBLIC_LISTING_RATE" },
          { "@type": "DefinedTerm", name: "VAST_FOUNDER_RENTAL_RECEIPT" },
          { "@type": "DefinedTerm", name: "VAST_DERIVED_YIELD_ANALYSIS" },
          { "@type": "Thing", name: "RTX 3090 Workhorse Thesis" },
          { "@type": "Thing", name: "Vast.ai market explorer" },
        ],
      },
    ],
    title: "The Defendable Vast.ai Utilization Signal Rail | DefendableOS Report",
    description:
      "Seven signal classes · the RTX 3090 workhorse thesis · the yield-analysis standard · 21-card operator-captured market snapshot. Why listing rate is not paid yield, and what evidence does cross the threshold.",
  };
}

function buildPairFactoryContent(): RouteContent {
  const url = "https://defendableos.com/pair-factory";
  const bodyHtml = `
<main>
  <h1>Pair Factory · where raw evidence becomes trusted intelligence.</h1>
  <p><strong>DefendableOS</strong> does not treat every observation as truth. A marketplace listing, a rental signal, an operating receipt, a validator correction and a verified transaction each carry different evidentiary weight. <strong>Pair Factory</strong> converts those distinctions into structured learning pairs that help AIOV reason better and help DefendableOS issue stronger records.</p>
  <p>The system does not learn from confidence. It learns from proof, correction and receipts.</p>

  <h2>What is a pair?</h2>
  <p>A pair is a structured learning example built from an Evidence Input, a Draft Claim, a Validator Challenge, a Corrected Output, and a Receipt / Source Class. Pair Factory does not manufacture truth · it records the difference between what was observed, what was claimed, what was challenged and what survived validation.</p>

  <h2>Compute example · one GPU, many evidence types (EDUCATIONAL · NOT A LIVE VALUATION)</h2>
  <ul>
    <li>Marketplace listing shows an asking price · correct class: <em>Active listing observation only</em>.</li>
    <li>Vast.ai shows a visible hourly listing rate · correct class: <em>Rental market signal only</em>.</li>
    <li>Founder captures an actual paid rental receipt · correct class: <em>First-party rental evidence</em>.</li>
    <li>nvidia-smi capture verifies memory and operational state · correct class: <em>First-party operating evidence</em>.</li>
    <li>Verified paid sale receipt exists · correct class: <em>Verified transaction evidence subject to comparability review</em>.</li>
  </ul>
  <p>Doctrine: Listed is not sold. Offered is not rented. Rented is not future yield. Operational is not valuable without context. Proof is what survives review.</p>

  <h2>Edge example · small hardware, real utility (EDUCATIONAL · CAPABILITY REQUIRES CAPTURED EVIDENCE)</h2>
  <p>An affordable Jetson Orin Nano-class device may carry real utility through low power, local privacy, sensor integration, offline execution or persistent deployment. Its utility must be established by evidence appropriate to its role · a small device is not lesser evidence, it is a different compute role requiring the right proof.</p>

  <h2>The Pair Factory pipeline</h2>
  <ol>
    <li>Capture · sources enter the system (asset specifications · receipts · operating captures · rental history · benchmarks · observations · partner records · validator notes).</li>
    <li>Classify · evidence receives a truth class (first-party operating evidence · rental receipt · active listing observation · partner transaction · verified sold comp · unsupported assertion · private-only).</li>
    <li>Challenge · is the claim supported · is evidence stale · is a listing being misrepresented as a sale · is private information about to be exposed · is a capability claim untested · does the comp match the asset and deployment context.</li>
    <li>Correct · unsupported or overbroad conclusions are revised with proper scope and disclosures.</li>
    <li>Pair · evidence + failed claim + validator finding + corrected output become a structured learning pair.</li>
    <li>Improve · approved pairs improve AIOV analysis quality · source grading · comp selection · disclosure discipline · validator consistency · future asset records.</li>
    <li>Deed · only approved, public-safe conclusions may move toward a Defendable Deed.</li>
  </ol>
  <p>Doctrine: The failure is not discarded. The correction becomes the training asset.</p>

  <h2>Eight pair types</h2>
  <ul>
    <li><strong>Identity Pair</strong> · correct asset identification from incomplete or conflicting evidence.</li>
    <li><strong>Comp Pair</strong> · difference between relevant comps, weak references and non-comparable observations.</li>
    <li><strong>Rental Pair</strong> · difference between listed rental rates, completed rentals and receipt-backed yield analysis.</li>
    <li><strong>Utility Pair</strong> · what workload an asset can actually support when tested.</li>
    <li><strong>Disclosure Pair</strong> · what can be safely shown publicly versus kept private.</li>
    <li><strong>Contradiction Pair</strong> · how conflicting inputs are surfaced and resolved.</li>
    <li><strong>Lifecycle Pair</strong> · difference between draft, review, issued, transferred and retired records.</li>
    <li><strong>Failure Pair</strong> · what the model or analyst got wrong and how it was corrected.</li>
  </ul>

  <h2>Where Pair Factory sits in DefendableOS</h2>
  <p>ProductRadar discovers observable signal and candidate assets. Pair Factory converts evidence, conflicts and corrections into trusted learning pairs. AIOV uses classified evidence and learned discipline to form draft opinions. The Validator Workflow challenges claims, checks evidence and controls disclosure. DefendableOS governs records, lifecycle, provenance and public/private boundaries. The Defendable Deed ships the approved public-safe trust record.</p>

  <h2>Privacy discipline</h2>
  <p>Pair Factory never exposes raw serial numbers, private invoices, customer documents, partner-confidential transaction records, rental payout receipts unless approved for disclosure, personal identifying information, unreleased asset records, private validator commentary, or proprietary training corpora. The public page may show educational examples, evidence classes, redacted sample workflows, public-safe issued records, doctrine language, generic correction examples, and hashes or lifecycle states where already public-safe. <em>Private evidence can teach the system under controlled rights and disclosure rules without becoming public evidence.</em></p>

  <h2>Defendable Compute Bench · test the asset before you trust the opinion</h2>
  <p>A hardware record should not begin with a price guess. <strong>Defendable Compute Bench</strong> captures the asset configuration, runs an appropriate health and utility test, hashes the receipt bundle and records what the system actually demonstrated at inspection time. AIOV may then form an opinion from measured utility and source-classified market evidence. DefendableOS validates the record before any public-safe deed may be issued.</p>
  <p>Bench pipeline: CAPTURE → DIAGNOSE → BENCHMARK → HASH → CLASSIFY → ANALYZE → VALIDATE → DEED. Output is never a single composite score · the bench produces four orthogonal grades (Identity Confidence · Health · Utility · Evidence) that the operator and validator read together.</p>
  <p>The bench proves what the machine did during the test, what workload class fits this hardware today, that identity was captured and hashed, and that health was within a specific envelope at capture. The bench does NOT prove what buyers will pay, what the card will earn rented over a year, that the hardware will never be substituted, or that performance repeats in another rig.</p>
  <p>Phase A (identity + system + runtime + idle-health capture) is implemented as <code>defendable-compute inspect</code> in the platform repo's edge-agent. Phase B adds diagnostic adapters (DCGM · smartctl · fio read-only) · Phase C adds workload tests per E0-E7 profile. The CLI is read-only by default · refuses to run on GPUs occupied by active compute processes · never installs anything · never changes GPU clocks or power limits.</p>

  <h2>The Evidence Vault · where proof lives</h2>
  <p>The model can form an opinion. The vault must preserve the proof. DefendableOS routes every artifact into one of four logically separated vault classes: <strong>Private Evidence Vault</strong> (client uploads · serials · invoices · raw captures · never public by default), <strong>Observation Vault</strong> (timestamped marketplace/rental/reference observations · source-classified · internal), <strong>Derived Intelligence Vault</strong> (normalized comps · AIOV drafts · Pair Factory pairs · validator corrections · internal unless approved), and <strong>Public-Safe Export Vault</strong> (issued deed manifests · approved summaries · public only after validation).</p>
  <p>Evidence flows · CAPTURE → STORE → HASH → CLASSIFY → CHALLENGE → APPROVE → PUBLISH. A stored file is not automatically a proven claim. Evidence must still be classified, challenged and approved before it supports a public record.</p>
  <p>Doctrine: The vault stores the evidence. The hash protects the trail. The validator judges the claim. The Deed publishes only what survives review.</p>
  <p>Implementation status: 4-bucket privacy model implemented at the service boundary with a public_export_or_refuse() guard that has no exception path · SHA-256 manifest pipeline implemented end-to-end · object-storage live-mirror gated by per-environment kill switch · MinIO local + Tigris/S3 production support · technical specifics in OBJECT_STORAGE_POLICY.md in the platform repo.</p>

  <h2>Closing doctrine</h2>
  <p>Signal begins the inquiry. Evidence grounds the claim. Challenge exposes the weakness. Correction creates the pair. Validation earns the trust. The Deed ships only what survives proof.</p>
</main>
  `.trim();

  return {
    bodyHtml,
    jsonLdBlocks: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        name: "Pair Factory · DefendableOS",
        description:
          "Educational doctrine page explaining how source-classified evidence, validator challenges and corrected outcomes become reusable intelligence supporting AIOV analysis and Defendable Deeds.",
        isPartOf: { "@type": "WebSite", url: "https://defendableos.com" },
        about: [
          {
            "@type": "DefinedTerm",
            name: "Pair Factory",
            description:
              "DefendableOS doctrine surface that converts observations, conflicts, validator corrections and verified outcomes into structured learning pairs · default state CANDIDATE_ONLY with a four-condition gate before any pair becomes training-eligible.",
          },
          {
            "@type": "DefinedTerm",
            name: "Validate the Validator",
            description:
              "DefendableOS internal doctrine requiring AI output to pass a validator chain that gates record advancement.",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: "Pair Factory · where raw evidence becomes trusted intelligence",
        url,
        author: {
          "@type": "Organization",
          name: "Swarm and Bee LLC",
          url: "https://defendableos.com",
        },
        about: [
          { "@type": "Thing", name: "Defendable Compute" },
          { "@type": "Thing", name: "AIOV" },
          { "@type": "Thing", name: "Defendable Deed" },
        ],
      },
    ],
    title: "Pair Factory | DefendableOS — From Evidence to Trusted Intelligence",
    description:
      "Learn how DefendableOS classifies evidence, captures validator corrections, and turns proven outcomes into trusted intelligence for Compute Proof of Value records and Defendable Deeds.",
  };
}

function buildDefendableOpenContent(): RouteContent {
  const url = "https://defendableos.com/open";
  const bodyHtml = `
<main>
  <h1>Defendable Open Infrastructure · the receipts behind the receipts.</h1>
  <p><strong>The actual models. The actual sources. The actual guardrails.</strong> Most "AI valuation" platforms won't tell you which model wrote the words, which sources grounded the analysis, or where the data is stored. <strong>DefendableOS</strong> does.</p>
  <p>Validate the Validator™ doesn't stop at validating the AI. It validates the infrastructure under the AI, the storage under the infrastructure, and the doctrine under the storage. This page is that audit.</p>

  <h2>Models in production</h2>
  <ul>
    <li><strong>Kimi K2.6 (Moonshot)</strong> · primary AIOV narrative · typed contracts VALIDATOR_FLAG_TOOL + RESEARCH_CLASSIFY_TOOL · rejects temperature ≠ 1 · self-disciplines under closed-schema tool use.</li>
    <li><strong>OpenAI gpt-4o</strong> · secondary completion · independent classification under RESEARCH_CLASSIFY_TOOL · cross-validator second opinion.</li>
    <li><strong>Brave LLM Context</strong> · live web grounding · returns grounding.generic[] as canonical source list · feeds Validator Check 5 (market-evidence grounding).</li>
  </ul>

  <h2>Doctrine guardrails enforced in code</h2>
  <ul>
    <li>Server-side AI downgrade guard · CONFIRMED_SALE_PRICE auto-downgraded to MARKET_COMMENTARY without a confirmed-sale signal in the rationale.</li>
    <li>Affirmative-claim scan (not denial-substring) · Validator Check 10 scans for "this is a licensed appraisal" not "not a licensed appraisal".</li>
    <li>Doctrine-disclaimer integrity · Validator Check 11 requires verbatim disclaimers · paraphrase fails.</li>
    <li>Confirmed-sale signal-class doctrine · only PERMISSIONED_CONNECTED_SALE and FIRST_PARTY_DEFENDABLE_SALE count as confirmed across 11 signal classes.</li>
    <li>ITAD partner-feed Grade B ceiling before validator review · OPERATOR_STATED labels everywhere operator claims appear.</li>
  </ul>

  <h2>Object storage · the 4-bucket privacy vault</h2>
  <ul>
    <li><strong>PRIVATE_EVIDENCE</strong> · operator uploads · never publicly exposed.</li>
    <li><strong>MARKET_OBSERVATIONS</strong> · Brave snapshots · eBay listing observations · internal analysis only.</li>
    <li><strong>DERIVED_DATASETS</strong> · comp sets · scores · validator receipts · linked to deeds at publication.</li>
    <li><strong>PUBLIC_ASSETS</strong> · the published deed and verify-page payload · the only bucket public_export_or_refuse() allows.</li>
  </ul>

  <h2>Connector honesty matrix</h2>
  <p>19 connectors documented across AI, asset-side, and demand-side lanes · each with real status (READY · CONFIGURED_DISABLED · NOT_CONFIGURED · FUTURE_DISABLED · PLAN_VERIFICATION_REQUIRED · AGREEMENT_REQUIRED). No NOT_CONFIGURED connector silently fakes a result.</p>

  <h2>Open source</h2>
  <ul>
    <li><strong>defendableos</strong> · platform · github.com/SudoSuOps/defendableos · 33+ models · 10 migrations · 141/141 tests.</li>
    <li><strong>defendable</strong> · landing · github.com/SudoSuOps/defendable · 9 pages · SSR-lite middleware · sitemap + llms.txt + _headers.</li>
    <li><strong>legalsniper-plugin</strong> · Apache 2.0 · github.com/SudoSuOps/legalsniper-plugin · v0.1.0 tagged · closed-schema HANDOFF_INTENTS.</li>
  </ul>
</main>
  `.trim();

  return {
    bodyHtml,
    jsonLdBlocks: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        name: "Defendable Open Infrastructure",
        description:
          "The actual AI models, sources, doctrine guardrails, privacy vault, and connector status powering DefendableOS Proof of Value records.",
        isPartOf: { "@type": "WebSite", url: "https://defendableos.com" },
        about: [
          { "@type": "DefinedTerm", name: "Validate the Validator", description: "DefendableOS internal doctrine requiring AI output to pass a 12-check validator chain with typed-contract tool use and server-side downgrade guards." },
          { "@type": "DefinedTerm", name: "AIOV", description: "AI Opinion of Value · the AI-generated draft narrative produced under typed contracts before validator review." },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "DefendableOS",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://defendableos.com",
        description:
          "Proof of Value platform · 17 connectors · 3 production AI models (Kimi K2.6 · OpenAI gpt-4o · Brave LLM Context) · 12-check validator chain · 4-bucket privacy vault · open source platform code at github.com/SudoSuOps/defendableos.",
      },
    ],
    title: "Defendable Open Infrastructure · models · connectors · guardrails · DefendableOS",
    description: "Facts not trust-me-bro. Every AI model, every connector, every doctrine guardrail, every storage bucket · named and statused. The receipts behind the receipts.",
  };
}

function buildDefendableComputeContent(): RouteContent {
  const url = "https://defendableos.com/compute";
  const bodyHtml = `
<main>
  <h1>Proof of Value for AI Hardware.</h1>
  <p><strong>DefendableOS</strong> transforms GPUs, servers, and AI infrastructure into evidence-backed, market-ready asset records · with validator receipts, manifest integrity, and draft deed packaging designed to travel with the asset.</p>
  <p><em>AIOV gives the opinion. DefendableOS proves the value.</em></p>

  <h2>Featured draft record</h2>
  <p><strong>NVIDIA RTX PRO 6000 Blackwell Workstation GPU</strong> · Asset reference <code>DOV-COMPUTE-000001</code>.</p>
  <ul>
    <li>Record status · DRAFT_REVIEW_RECORD</li>
    <li>Validator status · PASSED_FOR_DRAFT_PACKAGING</li>
    <li>Value status · WITHHELD_PENDING_VALIDATOR_REVIEW</li>
    <li>ENS status · RESERVED_NOT_ISSUED</li>
    <li>Publication · NOT_PUBLISHED (preview only · human approval required)</li>
  </ul>

  <h2>What this page shows</h2>
  <ul>
    <li><strong>Asset Identity</strong> · class, category, public reference</li>
    <li><strong>Evidence Packet</strong> · manifest attached, items indexed, private evidence referenced by hash only</li>
    <li><strong>Benchmark Receipt</strong> · performance evidence on file, withheld until human approval</li>
    <li><strong>Validator</strong> · source review, input review, claim review, draft packaging, human approval required</li>
    <li><strong>Defendable Deed</strong> · draft record preview with integrity block (SHA-256, DEFENDABLE_CANONICAL_JSON_V1)</li>
  </ul>

  <h2>Disclosures</h2>
  <p>Draft evidence and analysis record prepared for review. No final valuation, professional appraisal, certification, authentication guarantee, deed issuance, or ENS publication has occurred.</p>
</main>
  `.trim();

  const jsonLdBlocks: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "NVIDIA RTX PRO 6000 Blackwell Workstation GPU",
      brand: { "@type": "Brand", name: "NVIDIA" },
      category: "Compute Hardware · GPU Accelerator",
      productID: "DOV-COMPUTE-000001",
      description: "Draft evidence-backed Proof of Value record · validator-reviewed for draft packaging · human approval required before any issuance.",
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url,
      name: "Defendable Compute · Proof of Value for AI Hardware",
      isPartOf: { "@type": "WebSite", url: "https://defendableos.com" },
    },
  ];

  return {
    bodyHtml,
    jsonLdBlocks,
    title: "Defendable Compute · Proof of Value for AI Hardware",
    description: "Premium evidence-backed records for GPUs, servers, and AI infrastructure · validator receipts, manifest integrity, draft deed packaging. By DefendableOS.",
  };
}

function buildDefendableOSContent(): RouteContent {
  const url = "https://defendableos.com/";
  const bodyHtml = `
<main>
  ${THESIS_BANNER}
  <h1>DefendableOS · accountable AI rails and proof-of-value workflows.</h1>
  <p><strong>DefendableOS</strong> is the honest public front door for the Defendable stack. The current field-tested wedge is <strong>AI Agent Operations</strong>, implemented and independently audited with limitations. The broader <strong>Proof of Value / AIOV</strong> direction is an active build track, not fully field-cleared.</p>

  <h2>Current status panel</h2>
  <ul>
    <li><strong>AgentOps module chain</strong> — VERIFIED_AS_REPAIRED_WITH_LIMITATIONS</li>
    <li><strong>DefendableCloud</strong> — REPAIR_REQUIRED · browser demo only READY_WITH_LIMITATIONS</li>
    <li><strong>DefendableDocs field-release pages</strong> — VERIFIED_AS_DOCUMENTED_WITH_LIMITATIONS</li>
    <li><strong>DefendableRouter</strong> — FIELD INTEGRATION PENDING</li>
    <li><strong>Client pilot</strong> — HOLD</li>
    <li><strong>Production</strong> — NOT CLEARED FOR PRODUCTION</li>
    <li><strong>External SaaS enforcement</strong> — NOT CLEARED FOR EXTERNAL SAAS ENFORCEMENT</li>
  </ul>

  <h2>What works today</h2>
  <ul>
    <li>Four runtime module repos are public.</li>
    <li>Codex audit and re-audit are published.</li>
    <li>The AgentOps module chain is verified as repaired with limitations.</li>
    <li>DefendableDocs field-release pages are verified with limitations.</li>
    <li>A DefendableCloud browser demo exists with limitations.</li>
    <li>Public repos and the Tribunal audit tape are available now.</li>
  </ul>

  <h2>What does not work yet</h2>
  <ul>
    <li>DefendableCloud server-side action POST API repair is required.</li>
    <li>Broader DefendableDocs claim cleanup is required.</li>
    <li>DefendableRouter public utility is not verified from public surface evidence.</li>
    <li>Router-to-Cloud integration is not proven.</li>
    <li>Production is not cleared.</li>
    <li>External SaaS enforcement is not cleared.</li>
    <li>Certification, insurance, and blockchain anchoring are not claimed.</li>
  </ul>

  <h2>Public surfaces</h2>
  <ul>
    <li><strong>DefendableCloud</strong> — field utility surface · controlled synthetic demo under repair</li>
    <li><strong>DefendableDocs</strong> — client-use manual and owner record book · field-release pages aligned</li>
    <li><strong>DefendableRouter</strong> — router / receipt utility track · field integration pending</li>
    <li><strong>OpenDefendable</strong> — open-source truth surface for protocols, audits, wins/losses, utilities, and contribution lanes</li>
    <li><strong>Tribunal audit</strong> — public referee tape · not certification · not production clearance</li>
  </ul>

  <h2>Promotion protocol</h2>
  <p>Build → Public Safety Gate → Codex Audit → Repair → Re-audit → Field Release → Docs Update → Owner Promotion.</p>
  <p><strong>Builder receipt</strong> is submission. <strong>Codex audit</strong> is referee tape. <strong>Owner approval</strong> is promotion control.</p>

  <h2>Where to go next</h2>
  <ul>
    <li><a href="https://defendablecloud.com/agent-operations-demo">View DefendableCloud</a></li>
    <li><a href="https://defendabledocs.com/field-release/overview/">Read DefendableDocs field-release pages</a></li>
    <li><a href="https://opendefendable.com">Visit OpenDefendable</a></li>
    <li><a href="https://github.com/SudoSuOps/defendableos-tribunal-audit">Review the Tribunal audit tape</a></li>
    <li><a href="https://github.com/SudoSuOps">View public repos</a></li>
    <li><a href="https://defendableos.com/contact">Request early-access review</a></li>
  </ul>

  <h2>Disclaimer</h2>
  <p><em>This public surface records audited status and open limitations. It does not claim production clearance, certification, insurance coverage, external SaaS enforcement, or blockchain anchoring. DefendableOS is a product of Swarm and Bee LLC (Florida limited liability company · D-U-N-S 138652395 · doing business as Swarm &amp; Bee AI).</em></p>
</main>`.trim();

  const jsonLdBlocks: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": `${url}#platform`,
      name: "DefendableOS",
      url,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Accountable AI rails · audited public front door",
      operatingSystem: "Web · API",
      description:
        "DefendableOS is the honest public front door for accountable AI rails and proof-of-value workflows. Current field-tested wedge: AI Agent Operations, audited with limitations.",
      provider: {
        "@type": "Organization",
        name: "Swarm and Bee LLC",
        url: "https://swarmandbee.ai/",
      },
      offers: {
        "@type": "Offer",
        name: "Early access review",
        description:
          "Review the current public surfaces, audit tape, and field-release status before requesting access.",
      },
      sameAs: [
        "https://swarmandbee.ai/",
        "https://defendable.eth.limo",
        "https://legal.swarmandbee.ai/",
        "https://legalsniper.swarmandbee.ai/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${url}#provider`,
      name: "DefendableOS · a product of Swarm & Bee LLC",
      url,
      parentOrganization: {
        "@type": "Organization",
        name: "Swarm and Bee LLC",
        identifier: "DUNS:138652395",
        address: { "@type": "PostalAddress", addressRegion: "Florida", addressCountry: "US" },
      },
      disclaimer:
        "DefendableOS records are evidence and analysis packages. Asset-specific professional, legal, regulatory, or licensed appraisal requirements may still apply.",
      sameAs: [
        "https://swarmandbee.ai/",
        "https://defendable.eth.limo",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#page`,
      url,
      name: "DefendableOS",
      description:
        "DefendableOS is the honest public front door for accountable AI rails and proof-of-value workflows. Current field-tested wedge: AI Agent Operations, audited with limitations.",
      isPartOf: { "@id": `${url}#provider` },
      about: { "@id": `${url}#platform` },
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "DefendableOS", item: url },
      ],
    },
  ];

  return {
    bodyHtml,
    jsonLdBlocks,
    title: "DefendableOS · Accountable AI Rails and Proof-of-Value Workflows",
    description:
      "Honest public front door for accountable AI rails and proof-of-value workflows. Current field-tested wedge: AI Agent Operations, audited with limitations.",
  };
}

// ─────────────────────────────────────────────────────────────────────────
// SSR content for the 9 primary product surfaces shipped 2026-05-24.
// Each function returns rich crawler-visible bodyHtml + per-route JSON-LD
// so AI crawlers (GPTBot · ClaudeBot · Perplexity etc.) see the full
// product story even before the React SPA boots.
// ─────────────────────────────────────────────────────────────────────────

function buildHoneyBoxContent(): RouteContent {
  const url = "https://defendableos.com/honeybox";
  const bodyHtml = `
<main>
  ${THESIS_BANNER}
  <h1>The defense layer lives on your premises.</h1>
  <p><strong>HoneyBox</strong> is a physical edge appliance built on the NVIDIA Jetson Orin Nano (8 GB · 40 TOPS · 80× faster than the original Jetson Nano). It sits on your network · receives task pings from every AI agent in your business · stores receipts locally · runs the Tribunal locally · issues Defendable Agent Deeds locally. <strong>Raw data NEVER leaves the box.</strong></p>

  <h2>Hardware tiers</h2>
  <ul>
    <li><strong>Jetson Orin Nano 8GB · $399 setup · $10/mo</strong> — default SMB tier · ~10 agents · ~50K plays/month</li>
    <li><strong>Jetson AGX Orin 64GB · $999 setup · $50/mo</strong> — mid-market / regulated · ~50 agents · imaging centers</li>
    <li><strong>Workstation · RTX 6000 96GB · $2,500 setup · $200/mo</strong> — high-volume fleets · local frontier-model judge</li>
    <li><strong>DGX-class · Quote</strong> — government · defense · financial services with strict isolation</li>
  </ul>

  <h2>What the box does · sub-millisecond rule layer</h2>
  <ul>
    <li>Local SQLite ledger per agent (on NVMe SSD)</li>
    <li>Local rule-layer Tribunal · sub-millisecond per play</li>
    <li>Optional local LLM judge · Phi-4 · Gemma 3 4B · Qwen 2.5 3B (fits in 40 TOPS)</li>
    <li>Local Daily Reconciliation Deed issuance</li>
    <li>ENS-registered identity per agent (compliance.&lt;your-co&gt;.defendable.eth)</li>
    <li>TPM-backed signing key per agent</li>
    <li>Air-gap capable · operates without external network if required</li>
  </ul>

  <h2>Three privacy gradients</h2>
  <ol>
    <li><strong>Inside the HoneyBox</strong> — raw task content · per-play receipts · customer data · agent decisions · evidence. Customer only. Defendable NEVER unless per-pull authorization.</li>
    <li><strong>Outbound ping</strong> — anonymized counts · severity flags · deed SHA-256 · NO content. Defendable cloud (notification rail only).</li>
    <li><strong>Cloud-side derived</strong> — daily deed · grades · lien types · workout plans · NO PII. Defendable + your compliance subdomain.</li>
  </ol>

  <h2>Markets that cannot use cloud-only AI tools</h2>
  <p>Cloud AI observability vendors (Helicone · Langfuse · Portkey · Cloudflare AI Gateway · LangSmith) are categorically barred from these industries because customer data has to leave the buyer's network. HoneyBox solves this entirely · the data never moves.</p>
  <ul>
    <li><strong>Healthcare</strong> · HIPAA · BAA · PHI residency</li>
    <li><strong>Financial services</strong> · SOC2 · GLBA · PCI-DSS</li>
    <li><strong>Government</strong> · FedRAMP · CJIS · IL2-5</li>
    <li><strong>Defense</strong> · ITAR · CMMC · DoD impact levels</li>
    <li><strong>Legal (BigLaw)</strong> · privilege · client confidentiality</li>
    <li><strong>Insurance carriers</strong> · NAIC · solvency audit trail</li>
  </ul>

  <h2>Mid-size imaging center · 5-year worked example</h2>
  <p>8 radiologists · 4 AI agents (preliminary read · prior auth · billing reconciliation · scheduling) · HoneyBox AGX Orin tier · Managed Fixers · HIPAA compliant.</p>
  <ul>
    <li>Setup (AGX Orin + HIPAA BAA + radiology pack) · <strong>$4,999</strong></li>
    <li>Box lease ($50/mo × 60 mo) · <strong>$3,000</strong></li>
    <li>4 agents Managed Fixers ($99/mo × 60 mo) · <strong>$23,760</strong></li>
    <li>8 compliance seats ($25/mo × 60 mo) · <strong>$12,000</strong></li>
    <li>HIPAA quarterly audit export ($100/mo × 60) · <strong>$6,000</strong></li>
    <li>Insurance carrier feed ($200/mo × 60) · <strong>$12,000</strong></li>
    <li><strong>5-year revenue: $61,759 · gross margin 86%</strong></li>
  </ul>

  <h2>Setup · less than 10 minutes</h2>
  <ol>
    <li>Receive the HoneyBox · arrives pre-flashed with your ENS subdomain registered</li>
    <li>Plug into the network · DHCP discovers it · no static config required</li>
    <li>Scan the QR code · mobile config wizard · 4 questions · 90 seconds</li>
    <li>Point your agents at the endpoint · one config line per agent</li>
    <li>Sleep through the first night · reconciliation runs at 2am · brief delivered by 6am</li>
    <li>Read the deed over coffee · approve any open liens · the rest takes care of itself</li>
  </ol>

  <p>Order: <a href="mailto:build@swarmandbee.ai?subject=Order%20a%20HoneyBox">build@swarmandbee.ai</a> · enterprise/DGX tier: <a href="mailto:build@swarmandbee.ai?subject=HoneyBox%20Enterprise%20Tier">build@swarmandbee.ai</a>.</p>
</main>`.trim();

  return {
    bodyHtml,
    title: "HoneyBox · Edge Defense Appliance · DefendableOS",
    description:
      "Physical edge defense appliance · NVIDIA Jetson Orin Nano · 40 TOPS · 80× faster than original Jetson Nano · stores per-agent ledger locally · raw data NEVER leaves the box. 4 hardware tiers from $399 setup. Tax-deductible lease structure. Unlocks healthcare · financial services · government · defense · legal · insurance · all the regulated industries that cannot use cloud-only AI tools.",
    jsonLdBlocks: [
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${url}#product`,
        name: "DefendableOS HoneyBox",
        description: "Physical edge defense appliance for AI agents. NVIDIA Jetson Orin Nano · 40 TOPS · 80× faster than original. Stores per-agent ledger locally. Runs Tribunal + deed issuance on-device. Raw data never leaves the box.",
        brand: { "@type": "Brand", name: "DefendableOS" },
        manufacturer: { "@type": "Organization", name: "Swarm and Bee LLC", url: "https://defendableos.com/" },
        category: "Edge AI defense appliance",
        offers: [
          { "@type": "Offer", name: "Jetson Orin Nano 8GB · Default SMB", price: "399.00", priceCurrency: "USD", description: "Setup fee. $10/mo lease. Up to ~10 agents." },
          { "@type": "Offer", name: "Jetson AGX Orin 64GB · Mid-market", price: "999.00", priceCurrency: "USD", description: "Setup fee. $50/mo lease. Up to ~50 agents." },
          { "@type": "Offer", name: "Workstation · RTX 6000 · Heavy compute", price: "2500.00", priceCurrency: "USD", description: "Setup fee. $200/mo lease. Local frontier-model judge." },
        ],
        url,
      },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "DefendableOS", item: "https://defendableos.com/" },
        { "@type": "ListItem", position: 2, name: "HoneyBox", item: url },
      ]},
    ],
  };
}

function buildDefendableCloudContent(): RouteContent {
  const url = "https://defendableos.com/cloud";
  const bodyHtml = `
<main>
  ${THESIS_BANNER}
  <h1>Our datacenter. Our compute. Your defense.</h1>
  <p><strong>DefendableCloud</strong> is privacy-native hosted inference on Defendable-owned hardware: <strong>128 NVIDIA RTX PRO 6000 Blackwell cards · 12,288 GB aggregate VRAM · paid in full · zero debt</strong>. Open-weights model library. Contractual no-logging. Doctrine pack rules enforced inside inference. The Big-Tech-free cloud alternative.</p>

  <h2>Why our DC · COGS is amortized, not borrowed</h2>
  <p>Every other AI gateway / cloud-LLM provider runs on Big Tech infrastructure they lease at retail prices. Their inference COGS goes up when AWS/GCP raises GPU rates. DefendableCloud runs on Defendable-owned cards in a Defendable-owned datacenter · COGS is depreciation + electricity. <strong>~$0.50 per million tokens served vs $5-15 for cloud-leased equivalent · ~10× margin advantage · forever</strong>.</p>

  <h2>Open-weights model library</h2>
  <ul>
    <li><strong>Qwen 2.5 32B Instruct</strong> · 1 card · default for ClawCheck Tribunal grading</li>
    <li><strong>Llama 3.3 70B Instruct</strong> · 2 cards FP16 · long context · most balanced</li>
    <li><strong>DeepSeek V3 671B</strong> · 4 cards 4-bit · frontier-class reasoning</li>
    <li><strong>Mixtral 8x22B</strong> · 2 cards MoE · cost-efficient with constrained tool calling</li>
    <li><strong>Phi-4 14B</strong> · 1 card half · edge tribunal · fast · cheap</li>
    <li><strong>Bring your own checkpoint</strong> · fine-tunes · LoRA · vetted by Defendable</li>
  </ul>

  <h2>What we contractually commit</h2>
  <ul>
    <li><strong>No logging</strong> · prompts and completions not persisted beyond request/response cycle</li>
    <li><strong>No training</strong> · your data never used to train · fine-tune · evaluate any model</li>
    <li><strong>No third-party share</strong> · no data exchange with Anthropic · OpenAI · Google · Meta · or any other vendor</li>
    <li><strong>BAA-ready</strong> · HIPAA Business Associate Agreement available for healthcare deployments</li>
    <li><strong>SOC2 Type II</strong> · annual audit · published controls</li>
    <li><strong>Open-weights only</strong> · auditable architecture · forever-runnable</li>
  </ul>

  <h2>How it flows · doctrine pack rules inside inference</h2>
  <ol>
    <li>Agent makes an OpenAI-SDK call · sets <code>base_url</code> to https://api.defendablecloud.com/v1</li>
    <li>Router applies doctrine pack · system-prompt fragments injected · tool-call schemas validated</li>
    <li>Inference on Defendable hardware · selected open-weights model on RTX 6000 Blackwell · no provider telemetry</li>
    <li>Output validated against pack rules · tool-call arguments validated · completion scanned for hard fails</li>
    <li>Receipt to Bakery vault · SHA-256 hash · pair candidate created · contributes to daily reconciliation deed</li>
    <li>Customer sees response · same shape as OpenAI · drop-in compatible · zero agent code changes</li>
  </ol>

  <h2>Pricing · pay per million tokens · no setup</h2>
  <ul>
    <li><strong>General tier · $5/M tokens</strong> · Qwen 32B · Mixtral · Phi-4 · Llama 70B · drop-in OpenAI-SDK compatible</li>
    <li><strong>Frontier tier · $10/M tokens</strong> · DeepSeek V3 671B · long-context Llama 70B · Tribunal judge for ambiguous cases</li>
    <li><strong>Custom checkpoint · Quote</strong> · BYO fine-tune or LoRA · vetting required</li>
    <li>Optional per-agent monitoring · $29-99/mo · same Tribunal + deed pipeline</li>
  </ul>

  <h2>vs Big Tech · side by side</h2>
  <ul>
    <li><strong>Logs prompts:</strong> OpenAI/Anthropic/Azure default YES · DefendableCloud NEVER</li>
    <li><strong>Trains on your data:</strong> Possible/Opt-out · DefendableCloud NEVER</li>
    <li><strong>BAA available:</strong> Limited/Enterprise · DefendableCloud standard</li>
    <li><strong>Open weights:</strong> Closed only · DefendableCloud open · pinnable</li>
    <li><strong>Doctrine pack inline:</strong> No · DefendableCloud YES</li>
    <li><strong>Issues a deed:</strong> No · DefendableCloud YES</li>
    <li><strong>COGS per M tokens:</strong> $5-15+ · DefendableCloud ~$0.50</li>
  </ul>

  <p>Try DefendableCloud: <a href="mailto:build@swarmandbee.ai?subject=Try%20DefendableCloud">build@swarmandbee.ai</a>.</p>
</main>`.trim();

  return {
    bodyHtml,
    title: "DefendableCloud · Privacy-Native AI Inference · 128 RTX 6000 · Open Weights",
    description:
      "Privacy-native hosted inference on Defendable-owned hardware. 128 NVIDIA RTX PRO 6000 Blackwell cards · 12,288 GB VRAM · paid in full · zero debt. Open-weights library (Qwen 32B · Llama 70B · DeepSeek V3 · Mixtral · Phi-4). Contractual no-logging · no training · BAA-ready. OpenAI-SDK drop-in. ~$0.50/M tokens COGS vs $5-15 for cloud-leased equivalent.",
    jsonLdBlocks: [
      {
        "@context": "https://schema.org", "@type": "Service", "@id": `${url}#service`,
        name: "DefendableCloud", url,
        provider: { "@type": "Organization", name: "Swarm and Bee LLC", url: "https://defendableos.com/" },
        serviceType: "Privacy-native hosted AI inference",
        description: "OpenAI-SDK-compatible hosted inference on Defendable-owned 128-RTX-6000 fleet. Open-weights models · contractual no-logging · BAA-ready · doctrine pack rules enforced inside inference path.",
        areaServed: { "@type": "Place", name: "Worldwide" },
        offers: { "@type": "Offer", priceCurrency: "USD", price: "5.00", description: "$5 per million tokens · general tier · Qwen 32B · Mixtral · Phi-4 · Llama 70B" },
      },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "DefendableOS", item: "https://defendableos.com/" },
        { "@type": "ListItem", position: 2, name: "DefendableCloud", item: url },
      ]},
    ],
  };
}

function buildPricingContent(): RouteContent {
  const url = "https://defendableos.com/pricing";
  const bodyHtml = `
<main>
  ${THESIS_BANNER}
  <h1>Founder-friendly. CFO-defensible.</h1>
  <p>Two deployment modes · same defense doctrine. Both priced for clarity. Both tax-deductible operating expense. Both sellable to procurement without a 9-month cycle.</p>

  <h2>HoneyBox · edge mode</h2>
  <ul>
    <li>Setup fee · <strong>$399</strong> (Jetson Orin Nano 8GB default tier · includes ENS subdomain registration + NVMe SSD)</li>
    <li>Box lease · <strong>$10/mo</strong> (5-year refresh included)</li>
    <li>Per-agent base monitoring · <strong>$29/mo</strong> (includes per-task deeds + nightly reconciliation)</li>
    <li>AGX Orin tier · $999 setup · $50/mo</li>
    <li>RTX 6000 Workstation tier · $2,500 setup · $200/mo</li>
    <li>DGX-class · Quote</li>
    <li>HIPAA BAA · onboarding · $1,500 one-time</li>
    <li>Compliance seat (each) · $25/mo</li>
    <li>Audit-trail quarterly export · $100/mo</li>
  </ul>
  <p><em>Lease structure · 100% operating expense · off balance sheet.</em></p>

  <h2>DefendableCloud · cloud mode</h2>
  <ul>
    <li>Setup fee · <strong>$0</strong> (pay-as-you-go · no minimum)</li>
    <li>General-tier inference · <strong>$5/M tokens</strong> (Qwen 32B · Mixtral · Phi-4 · Llama 70B)</li>
    <li>Per-agent monitoring · <strong>$29-99/mo</strong> (optional · same Tribunal + deed pipeline)</li>
    <li>Frontier tier (DeepSeek V3 · 70B long-ctx) · $10/M tokens</li>
    <li>Custom checkpoint (BYO fine-tune) · Quote</li>
    <li>Dedicated capacity reservation · Quote</li>
    <li>BAA standard · included</li>
    <li>SOC2 attestation · included</li>
  </ul>
  <p><em>OpenAI-SDK compatible · drop-in base_url change.</em></p>

  <h2>Fixers · the closer layer · "the deed is only as good as the fix it delivers"</h2>
  <ul>
    <li><strong>Self-Serve · $29-99/agent/mo</strong> · continuous · auto pack updates · daily Morning Brief · 1-click workout approval</li>
    <li><strong>Managed Fixers · $2-10K/agent/mo</strong> · 3-month minimum · engineer-reviewed monthly · custom pack rules · quarterly review</li>
    <li><strong>Embedded Fixers · $50-250K ARR / fleet</strong> · 12-month anchor · named contact · <strong>Fix-or-Refund 90-day guarantee</strong> on flag-rate lift · insurance carrier integration</li>
  </ul>
  <p>Statistical baseline needs 30 days · iteration needs another 60 · durable lift proves at 90 days. We won't sell shorter engagements because the math doesn't support honest expectations.</p>

  <h2>Mid-size imaging center · 5-year ledger</h2>
  <ul>
    <li>Setup (AGX Orin + HIPAA BAA + pack customization) · $4,999</li>
    <li>Box lease · $50/mo × 60 mo · $3,000</li>
    <li>4 agents Managed Fixers · $99/mo × 60 mo · $23,760</li>
    <li>8 compliance seats · $25/mo × 60 mo · $12,000</li>
    <li>HIPAA quarterly audit export · $100/mo × 60 · $6,000</li>
    <li>Insurance carrier feed · $200/mo × 60 · $12,000</li>
    <li><strong>5-year revenue · $61,759 · 5-year gross profit · $53,259 · gross margin 86%</strong></li>
  </ul>
  <p>At 100 centers · $6.1M ARR. At 1,000 centers · $61M ARR. There are ~7,000 imaging centers in the US.</p>

  <p>Order a HoneyBox: <a href="mailto:build@swarmandbee.ai?subject=Order%20a%20HoneyBox">build@swarmandbee.ai</a> · Try DefendableCloud: <a href="mailto:build@swarmandbee.ai?subject=Try%20DefendableCloud">build@swarmandbee.ai</a> · Embedded Fixers engagement: <a href="mailto:build@swarmandbee.ai?subject=Embedded%20Fixers%20engagement">build@swarmandbee.ai</a>.</p>
</main>`.trim();

  return {
    bodyHtml,
    title: "Pricing · Transparent · DefendableOS",
    description:
      "Two deployment modes · same defense doctrine. HoneyBox edge appliance: $399 setup + $10/mo lease + $29-99/agent. DefendableCloud: $5-10 per million tokens · OpenAI-SDK drop-in. 3 Fixer tiers (Self-Serve · Managed · Embedded with Fix-or-Refund 90-day guarantee). 5-year MRI center worked example: $61,759 LTV · 86% gross margin.",
    jsonLdBlocks: [
      { "@context": "https://schema.org", "@type": "PriceSpecification", "@id": `${url}#honeybox-price`, name: "HoneyBox default tier", price: "399.00", priceCurrency: "USD", valueAddedTaxIncluded: false },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "DefendableOS", item: "https://defendableos.com/" },
        { "@type": "ListItem", position: 2, name: "Pricing", item: url },
      ]},
    ],
  };
}

function buildHowItWorksContent(): RouteContent {
  const url = "https://defendableos.com/how-it-works";
  const bodyHtml = `
<main>
  ${THESIS_BANNER}
  <h1>The actual mechanics.</h1>
  <p>What the Defendable Agent Deed actually is · how the math works · why we are sovereign infrastructure not someone else's rebrand · and the early-warning capability nobody else in the AI observability space is shipping. No buzzwords. Real JSON. Real receipts. Real probabilities.</p>

  <h2>The flow · 8 stages · zero interruptions to your agent</h2>
  <ol>
    <li><strong>Agent receives assignment</strong> · Defendable does NOT intercept · no latency tax</li>
    <li><strong>Agent executes the assignment</strong> · customer's offense workflow at full speed</li>
    <li><strong>Router captures the play</strong> · signed receipt written to HoneyBox or DefendableCloud · &lt;5ms POST · write-only</li>
    <li><strong>Reconciliation cron fires at 02:00</strong> · nightly batch grading · cheaper than real-time</li>
    <li><strong>Tribunal labels every play</strong> · HONEY / JELLY / PROPOLIS · rule layer can only DOWNGRADE</li>
    <li><strong>Flag patterns clustered into liens</strong> · each lien has severity · root cause · workout plan · expected lift</li>
    <li><strong>Daily Reconciliation Deed issued</strong> · per-agent · SHA-256 hashed · ENS-anchored</li>
    <li><strong>Morning Brief delivered by 06:00</strong> · one email · 1-click decisions · compounding trends</li>
  </ol>

  <h2>Anatomy of a Defendable Agent Deed</h2>
  <p>Every field is load-bearing. Every hash is verifiable. Every limitation named honestly. No promotional rounding.</p>
  <ul>
    <li><strong>deed_id</strong> · DDEED-DOV-AGENT-COMPUTE-INSPECTOR-000001-v1 · globally unique · semantic · sortable</li>
    <li><strong>deed_type</strong> · DEFENDABLE_AGENT_DEED (discriminator)</li>
    <li><strong>issued_by</strong> · defendable.eth (ENS-anchored issuer identity)</li>
    <li><strong>subject_agent</strong> · agent_id · agent_class · operator subdomain · deployment target</li>
    <li><strong>benchmark_run</strong> · pack_id · pack_version · run_id · tasks_executed · adversarial_cases_resisted</li>
    <li><strong>grades_5d</strong> · capability · truth · safety · numeric_structural · efficiency · reproducibility · ALL FIVE always published</li>
    <li><strong>tribunal_breakdown</strong> · honey_percent · jelly_percent · propolis_percent</li>
    <li><strong>deployment_tier</strong> · OBSERVED → SCOPED → CONDITIONAL → APPROVED → AUTHORITY (5-tier ladder)</li>
    <li><strong>limitations</strong> · every known limitation NAMED in the deed itself</li>
    <li><strong>bound_artifacts</strong> · linked compute deed + bench bundle SHA-256</li>
    <li><strong>record_hash</strong> · sha256:ff7385b0f5319a11ebf7b7e43fb86a80bae5730ab61e29b7d5cb5fd6580a8733 (tamper-evidence seal)</li>
    <li><strong>ens_anchor</strong> · ddeed-dov-agent-compute-inspector-000001-v1.swarmbee.defendable.eth</li>
    <li><strong>doctrine_note</strong> · plain-English limitation summary · anti-puffery clause</li>
  </ul>

  <h2>Sovereignty · we own the rail</h2>
  <ul>
    <li><strong>128</strong> · RTX 6000 Blackwell paid in full · 12,288 GB aggregate VRAM</li>
    <li><strong>1</strong> · Datacenter · owned (not leased rack space)</li>
    <li><strong>6</strong> · Brand domains · locked · audience-segmented</li>
    <li><strong>$0</strong> · cloud vendor dependency · no upstream pricing exposure</li>
    <li><strong>0</strong> · offense agents shipped · permanent brand contract · KPMG-equivalent</li>
    <li><strong>100%</strong> · doctrine packs MIT-licensed and open source · published on opendefendable.com</li>
  </ul>

  <h2>The math · real probabilities not vibes</h2>
  <p>Every flag rate we publish is a posterior estimate with a 95% credible interval · computed via Bayesian inference over the cumulative play count. Pattern lift forecasts come from historical pack-rule effectiveness data · adjusted per agent class. If we can't show the math · we don't publish the number.</p>
  <p>Sample <strong>refund-bot-acme-001</strong> · 90-day trajectory: Day 30 baseline 80.4% promote rate ± 2.4pp · Day 60 after Pattern A fix · 92.5% ± 1.8pp · Day 90 after Patterns B+C clearance · 96.0% ± 1.1pp · meets DEFENDABLE-ATTESTED grade · unlocks insurance carrier feed.</p>
  <ul>
    <li><strong>P(rate ≥ 95%) at day 60</strong> · 62.4%</li>
    <li><strong>P(rate ≥ 95%) at day 90</strong> · 91.7%</li>
    <li><strong>P(rate &lt; 80%) at day 90</strong> · 0.3%</li>
    <li><strong>Expected drift 90→180d</strong> · +0.1 ± 0.4pp</li>
    <li><strong>Insurance baseline breach probability</strong> · 2.1%</li>
    <li><strong>Posterior confidence (5,000 plays)</strong> · HIGH</li>
  </ul>
  <p>Insurance carriers read THIS · not "this agent feels safe."</p>

  <h2>Drift Alerts · NEW capability · early warning</h2>
  <p>We don't just grade past performance · we forecast drift. Severity-tiered notifications (INFO / WARNING / CRITICAL) trigger BEFORE the problem shows up in your morning brief. Like credit monitoring for your AI agents.</p>
  <ul>
    <li><strong>INFO · Pack version lag</strong> · auto-upgrade scheduled</li>
    <li><strong>WARNING · Flag rate trending up</strong> · +1.8pp/week increase · Managed Fixer queued</li>
    <li><strong>WARNING · Tribunal verdict mix shifting</strong> · PROPOLIS ratio rising</li>
    <li><strong>CRITICAL · Insurance baseline breach imminent</strong> · 14-day forecast · carrier auto-notified · operator decision required within 48h</li>
    <li><strong>CRITICAL · Pattern regression detected</strong> · previously-cleared lien reappearing · investigation open</li>
  </ul>
  <p>Delivery channels · email · Slack · Microsoft Teams · PagerDuty · SMS · custom webhooks · all configurable per severity. Every alert is itself receipted (the alert becomes a deed entry).</p>
</main>`.trim();

  return {
    bodyHtml,
    title: "How It Works · 8-Stage Flow · Real Deed JSON · DefendableOS",
    description:
      "The 8-stage flow from agent assignment to morning brief. Real Defendable Agent Deed JSON with field-by-field reference. Sovereign infrastructure (128 RTX 6000 paid in full). Bayesian posterior math with 95% credible intervals. Drift Alerts · early warning capability nobody else ships.",
    jsonLdBlocks: [
      { "@context": "https://schema.org", "@type": "TechArticle", "@id": `${url}#article`, headline: "How DefendableOS works · 8-stage flow · deed JSON · math · drift alerts", url, datePublished: "2026-05-24", inLanguage: "en-US" },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "DefendableOS", item: "https://defendableos.com/" },
        { "@type": "ListItem", position: 2, name: "How It Works", item: url },
      ]},
    ],
  };
}

function buildOpenDefenseContent(): RouteContent {
  const url = "https://defendableos.com/opendefense";
  const bodyHtml = `
<main>
  ${THESIS_BANNER}
  <h1>OpenDefense · open-source market intelligence for AI agent defense.</h1>
  <p>The AI-agent defense category just had the largest 18-month consolidation wave in software security history. Six named competitors got acquired. A regulatory cliff lands in ~10 weeks. 84% of operators admit they would fail an agent-behavior audit today. This page is the public market intelligence we use internally · and we're making it open. Cisco ships closed products. We publish open intelligence.</p>

  <h2>The Demand · pain stack ranked</h2>
  <ul>
    <li><strong>88%</strong> of agent pilots never reach production (DigitalApplied · Mar 2026)</li>
    <li><strong>84%</strong> of operators would fail an agent-behavior audit today (Gravitee)</li>
    <li><strong>74%</strong> have ALREADY rolled back an agent over governance failures (Gravitee)</li>
    <li><strong>28.6M</strong> secrets leaked to public GitHub in 2025 · +34% YoY · 24K in MCP configs (GitGuardian)</li>
    <li><strong>+81% YoY</strong> AI-credential leak growth (GitGuardian)</li>
    <li><strong>$4,200</strong> weekend on one Cursor refactor (Cursor's public 7/2025 apology)</li>
    <li><strong>21.9%</strong> of teams have agent OAuth in a PAM (Gravitee)</li>
  </ul>

  <h2>The Velocity · market sizing</h2>
  <ul>
    <li><strong>$6-9B</strong> 2026 TAM · agent defense + observability + governance combined</li>
    <li><strong>$30-45B</strong> 2030 projected · 25-42% CAGR across segments</li>
    <li><strong>70-80K</strong> orgs globally with ≥1 production agent today · 31% enterprise penetration</li>
    <li><strong>$1.5-2B</strong> US AI-driven cyber premium net-new in 2026 alone</li>
    <li><strong>Snyk benchmark</strong> · $0 → $407M ARR in 6 years via OSS distribution → enterprise upsell</li>
  </ul>

  <h2>The Regulatory Cliff · dated deadlines</h2>
  <ul>
    <li><strong>Colorado AI Act</strong> · enforceable 6/2026 · ~1 week out · first US state AI consumer-protection law with private right of action</li>
    <li><strong>EU AI Act high-risk obligations</strong> · live 2026-08-02 · ~10 weeks out · penalties up to 7% of global revenue</li>
    <li><strong>HIPAA NPRM</strong> · expected final mid-2026 · AI assets in annual risk inventory</li>
    <li><strong>NAIC Model Bulletin on AI</strong> · adopted in 40+ states · agent must be explainable · auditable · free of unfair discrimination</li>
    <li><strong>CMS-0057-F</strong> · electronic prior auth mandate · Jan 2027 · FHIR-based API</li>
    <li><strong>CFPB advisory</strong> · agent-initiated card disputes 2.4× human rate · Jan-2026 (live)</li>
  </ul>

  <h2>Top 5 wedge verticals</h2>
  <ol>
    <li><strong>Insurance carriers + InsurTech · 9.5/10</strong> · BUYER IS THE RISK-PRICER · NAIC Model Bulletin in 40+ states · bad-faith punitives</li>
    <li><strong>Healthcare · PA + scheduling + billing · 9.3/10</strong> · CMS-0057-F cliff Jan 2027 · 82% appeal overturn rate = class-action fuel</li>
    <li><strong>Financial services · CS + KYC + fraud · 8.8/10</strong> · CFPB Jan-2026 advisory · agent disputes 2.4× human rate</li>
    <li><strong>Legal AI · doc review · contract · research · 8.5/10</strong> · malpractice carriers repricing · model rule 5.3 supervision</li>
    <li><strong>Government · FedRAMP-track · 8.0/10</strong> · procurement REQUIRES audit trail</li>
  </ol>

  <h2>The Acquisition Wave · 7 exits in 24 months</h2>
  <ul>
    <li>Aug 2024 · <strong>Cisco</strong> ← Robust Intelligence · 9-figure (reported)</li>
    <li>Sep 2025 · <strong>F5</strong> ← CalypsoAI · $180M</li>
    <li>2025 · <strong>Check Point</strong> ← Lakera · ~$300M reported</li>
    <li>Jan 2026 · <strong>ClickHouse</strong> ← Langfuse (Series D context $400M)</li>
    <li>Mar 2026 · <strong>Mintlify</strong> ← Helicone</li>
    <li>Apr 2026 · <strong>Cisco/Splunk</strong> ← Galileo</li>
    <li>2024 · <strong>Palo Alto Networks</strong> ← Protect AI</li>
  </ul>

  <h2>The Defendable Bundle · what nobody else ships</h2>
  <p>Any single piece is contestable. The bundle is not. Owned compute + per-task deed + lien + insurance feed + ENS identity + Fix-or-Refund. Eight defensible claims · we own all eight in assembly. <strong>Cisco grades the agent · we grade the work. Validate the Validator · Own the Deed.</strong></p>

  <h2>Segment filter</h2>
  <p><strong>DefendableOS is for SMB → mid-market 5cap operators.</strong> Cisco · F5 · Check Point own the Fortune 500 lane. We own the regional MRI center · the AmLaw 200 firm · the Lemonade-class InsurTech · the 30-person fintech with prod agents and no enterprise procurement function. Different buyer · different pricing motion · same defense doctrine.</p>

  <p><em>MIT-attribution licensed · cite OpenDefense / DefendableOS when you reuse · pull requests welcome at <a href="https://github.com/SudoSuOps">github.com/SudoSuOps</a>.</em></p>
</main>`.trim();

  return {
    bodyHtml,
    title: "OpenDefense · Open-Source Market Intelligence for AI Agent Defense · DefendableOS",
    description:
      "Public market intelligence for AI agent defense. 88% pilot-to-prod failure rate · 84% would fail an audit · $6-9B 2026 TAM · 7-exit M&A wave (Cisco · F5 · Check Point · ClickHouse · etc.) · top 5 wedge verticals · regulatory cliffs · the Defendable bundle. 120+ cited sources · MIT-attribution licensed.",
    jsonLdBlocks: [
      { "@context": "https://schema.org", "@type": "Article", "@id": `${url}#article`, headline: "OpenDefense · the open market intelligence briefing for AI agent defense", url, datePublished: "2026-05-24", dateModified: "2026-05-24", publisher: { "@type": "Organization", name: "DefendableOS" }, inLanguage: "en-US" },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "DefendableOS", item: "https://defendableos.com/" },
        { "@type": "ListItem", position: 2, name: "OpenDefense", item: url },
      ]},
    ],
  };
}

function buildDoctrineContent(): RouteContent {
  const url = "https://defendableos.com/doctrine";
  const bodyHtml = `
<main>
  ${THESIS_BANNER}
  <h1>The Constitution of DefendableOS · 12 articles.</h1>
  <p>One page. Twelve articles. Everything DefendableOS is · isn't · how it works · why it exists · who pays for it · and why we built the brand the way we did. Permanent reference. Citable. Crawl-friendly. The thesis no other AI company is writing because no other AI company is built this way.</p>

  <h2>Article I · Offense vs Defense · the category shift</h2>
  <p>Every AI vendor sells offense. DefendableOS is the missing defense layer for AI operators and asset owners. Third-party. Receipted. KPMG-equivalent. We don't ship the agent. We validate the Project.</p>

  <h2>Article II · The Tribunal · Honey · Jelly · Propolis</h2>
  <p>Every artifact carries one of three Tribunal labels. HONEY = validated. JELLY = repair candidate. PROPOLIS = adversarial preserved · never auto-flipped. The rule layer can only DOWNGRADE · critical safety doctrine is absolute.</p>

  <h2>Article III · The Deed is a Ledger · not a certificate</h2>
  <p>A Defendable Agent Deed is a running ledger. Every single task the agent performs gets its own deed entry · synchronously hashed · asynchronously graded · either PROMOTED or FLAGGED.</p>

  <h2>Article IV · Reconciliation lives in the Shadows</h2>
  <p>Defense lives in the shadows of the night. The agent runs free all day. At 2am · reconciliation runs. By 6am the brief lands. By 9am the operator reads it over coffee.</p>

  <h2>Article V · Deeds carry Liens · Fixers clear them</h2>
  <p>Like CRE titles. Senior · mezz · junior. Each lien has type · severity · root cause · workout plan · expected lift · cost to clear. DefendableFixers function as the title-clearance shop.</p>

  <h2>Article VI · We speak CRE Due-Diligence vocabulary</h2>
  <p>Books · title · partners · terms · economic study · functionality · "if it goes dark then what." Business buyers don't buy "AI safety." They buy due diligence.</p>

  <h2>Article VII · Fixers are the Closer Layer</h2>
  <p>Self-Serve $29-499/mo · Managed $2-10K/mo · Embedded $50-250K ARR with Fix-or-Refund 90-day guarantee. The deed is only as good as the fix it delivers.</p>

  <h2>Article VIII · Six Brand Surfaces · audience-segmented</h2>
  <p>defendableos.com (Suit · institutional) · defendtheclaw.com (Manifesto · movement) · defendablehack.com (T-shirt · researcher) · opendefendable.com (Hoodie · OSS standards body) · defendablerouter.com (AI gateway product) · defendablecloud.com (hosted compute product).</p>

  <h2>Article IX · Math · 80/20 becomes 95/5 through clearance</h2>
  <p>Bayesian posterior estimates with 95% credible intervals. Day 30 baseline 80% · Day 60 after Pattern A 92% · Day 90 after Patterns B+C 96%. Each fix is a pack rule shipped by a Fixer · the next morning's deed shows the lift.</p>

  <h2>Article X · We hire Auditors · not Prompt Engineers</h2>
  <p>Former internal auditors. CPAs. Risk analysts. Compliance officers. Domain experts (payroll specialists · CSR ops · scheduling experts · radiology informaticists). B2B enterprise sellers who've closed 100+ due-diligence deals. Defense wins championships.</p>

  <h2>Article XI · We never ship the Offense Agent</h2>
  <p>Categorically a third-party defense rail. We will never ship an offense agent of our own. Not under any subsidiary · not in any pricing tier. Permanent brand contract.</p>

  <h2>Article XII · The Pitch Line</h2>
  <blockquote>The deed is only as good as the fix it delivers.</blockquote>
  <p>Short form: <strong>Validate the Validator. Own the Deed.</strong></p>
</main>`.trim();

  return {
    bodyHtml,
    title: "The Doctrine · 12-Article Constitution of DefendableOS",
    description:
      "The Constitution of DefendableOS · 12 articles. Offense vs Defense · the Tribunal (Honey/Jelly/Propolis) · the deed as a running ledger · reconciliation in the shadows · liens on deeds · CRE due-diligence vocabulary · Fixers · 6 brand surfaces · the math · who we hire · why we never ship offense · the pitch line. Permanent reference.",
    jsonLdBlocks: [
      { "@context": "https://schema.org", "@type": "Article", "@id": `${url}#article`, headline: "The Constitution of DefendableOS · 12 articles", url, datePublished: "2026-05-24", inLanguage: "en-US" },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "DefendableOS", item: "https://defendableos.com/" },
        { "@type": "ListItem", position: 2, name: "Doctrine", item: url },
      ]},
    ],
  };
}

function buildAboutContent(): RouteContent {
  const url = "https://defendableos.com/about";
  const bodyHtml = `
<main>
  ${THESIS_BANNER}
  <h1>We own the building.</h1>
  <p>DefendableOS is a Florida-incorporated independent AI defense rail operated by <strong>Swarm and Bee LLC</strong> (DBA Swarm &amp; Bee AI · D-U-N-S 138652395). The datacenter is owned. The compute fleet is paid in full. The brand stack is locked. The doctrine is published. The receipts are durable. We started this on purpose.</p>

  <h2>Position · KPMG for AI agents · not Cisco</h2>
  <p>Cisco sells networking gear AND audits the network. That works for a vendor. It does not work for a trust rail. KPMG audits but does not sell the company. Moody's rates but does not issue the debt. <strong>Defendable will never ship an offense agent</strong> · not a refund bot · not a coding bot · not a sales SDR · not under any subsidiary · not in any pricing tier. Permanent brand contract.</p>

  <h2>We own the building · the infrastructure is already paid for</h2>
  <ul>
    <li><strong>128</strong> · RTX 6000 Blackwell GPUs · paid in full · 12,288 GB aggregate VRAM</li>
    <li><strong>$0</strong> · GPU debt outstanding · no leverage · no margin-call risk</li>
    <li><strong>1</strong> · Datacenter · owned (not leased rack space)</li>
    <li><strong>6</strong> · Brand-stack domains · audience-segmented · all coherent</li>
  </ul>
  <p>Most AI inference businesses run on borrowed compute. Defendable's compute COGS is amortization plus electricity · ~$0.50/M tokens vs $5-15 for cloud-leased equivalent. ~10× margin advantage · permanent.</p>

  <h2>Foundation stack · everything checked</h2>
  <ul>
    <li><strong>Durable storage</strong> · Tigris S3-compatible storage on Fly · receipts survive every redeploy · proven 2026-05-23</li>
    <li><strong>Open weights</strong> · Qwen 32B · Llama 70B · DeepSeek V3 · Mixtral · Phi-4 · no proprietary lock-in</li>
    <li><strong>ENS-anchored deeds</strong> · defendable.eth namespace · per-agent verifiable identity · cross-vendor portable</li>
    <li><strong>Doctrine pack registry</strong> · open source · MIT licensed · contributed to by researchers and customers</li>
    <li><strong>Public source-of-truth</strong> · 12-article Doctrine page · always linked · always citable</li>
    <li><strong>Independent third-party</strong> · Florida LLC · zero AI-vendor equity · no conflict-of-interest disclosures needed</li>
  </ul>

  <h2>Operator thesis · built by an operator · not an AI researcher</h2>
  <p>DefendableOS is built by an operator with a commercial real estate background. The doctrine reads in CRE due-diligence vocabulary instead of AI safety jargon. Books · title · partners · terms · economic study · functionality · "if it goes dark then what" · liens-on-deeds · free-and-clear closings · workout plans · listing inventory · cap-rate compression. Every business buyer already knows this vocabulary.</p>
  <p><strong>The cap-rate framing is not metaphor.</strong> DefendableOS is a recurring-receipted-evidence rail with NNN-equivalent cashflow characteristics: per-asset · per-cycle · refresh obligation · insurance-readable · regulator-attestable · asset-attached. The thesis is that this asset class is currently uninsured · uninspected · and self-reported · and that gap is worth ~$5cap NNN on $10M NOI when mature.</p>

  <h2>Who we are NOT for · honest</h2>
  <ul>
    <li>Bootstrapped SaaS startups looking for cheap LLM gateway · we are not the cheapest · we are the most defendable</li>
    <li>Curious individual developers · we are a business defense rail · not a hobbyist toolkit</li>
    <li>AI vendors who want us to deed THEIR offense agent · third-party trust requires we stay agnostic</li>
    <li>Companies whose AI is purely chat and never touches files / payments / infra · per-task deed model is overkill</li>
    <li>Buyers looking for AI to replace their compliance team · we add receipts to support compliance · we don't eliminate it</li>
  </ul>

  <p>We're built for <strong>imaging centers · law firms · financial services · government contractors · insurance carriers · mid-market regulated businesses</strong> who run multiple production AI agents and need third-party attestation that those agents operate within policy · measurably · auditably · over time.</p>
</main>`.trim();

  return {
    bodyHtml,
    title: "About · Operator Thesis · We Own the Building · DefendableOS",
    description:
      "Independent third-party AI defense rail. 128 RTX 6000 paid in full · zero debt · owned datacenter · 6-domain brand stack. KPMG-equivalent positioning · we never ship offense agents. Built by an operator with a CRE background · NNN cap-rate cashflow thesis. For SMB → mid-market 5cap operators · not Cisco-tier enterprise.",
    jsonLdBlocks: [
      { "@context": "https://schema.org", "@type": "AboutPage", "@id": `${url}#page`, url, name: "About DefendableOS", description: "Operator thesis · we own the building · 128 RTX 6000 paid in full · KPMG-equivalent positioning", inLanguage: "en-US" },
      { "@context": "https://schema.org", "@type": "Organization", "@id": `${url}#org`, name: "Swarm and Bee LLC", legalName: "Swarm and Bee LLC", alternateName: "Swarm & Bee AI", identifier: "DUNS:138652395", url: "https://defendableos.com/", address: { "@type": "PostalAddress", addressRegion: "Florida", addressCountry: "US" }, sameAs: ["https://x.com/swarmandbee", "https://www.linkedin.com/in/donovan-mackey-89a6063b6/"] },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "DefendableOS", item: "https://defendableos.com/" },
        { "@type": "ListItem", position: 2, name: "About", item: url },
      ]},
    ],
  };
}

function buildHackContent(): RouteContent {
  const url = "https://defendableos.com/hack";
  const bodyHtml = `
<main>
  ${THESIS_BANNER}
  <h1>Crack the LLM. Own the rail.</h1>
  <p><strong>DefendableHack</strong> is the builder rail. From 4B at the edge to 70B in your closet to 671B in a small DC · run frontier intelligence on hardware you actually own. Open weights. Open tools. Open doctrine. No vendor logging. No surprise rate hikes. Forever runnable. If you can't run it · you don't own it.</p>

  <h2>Builder doctrine · six rules · no exceptions</h2>
  <ol>
    <li>Open weights forever · no closed checkpoints accepted</li>
    <li>Runs on hardware you own · not borrowed cloud GPU time</li>
    <li>No vendor logging · prompts stay in your network</li>
    <li>Reproducible builds · doctrine pack rules version-pinned</li>
    <li>MIT-licensed tooling · fork it · improve it · ship it back</li>
    <li>Receipt every play · same Bakery vault as the institutional rail</li>
  </ol>

  <h2>The model ladder · 4B at the edge · 671B in your closet</h2>
  <ul>
    <li><strong>4B class · Pocket Tribunal</strong> · Phi-4 · Gemma 3 4B · Qwen 2.5 3B/4B · Llama 3.2 3B · runs on Jetson Orin Nano · Raspberry Pi 5 · M-series MacBook · Steam Deck · ~3-9 GB Q4</li>
    <li><strong>9B class · Workhorse</strong> · Qwen 2.5 9B · Llama 3.1 8B · IBM Granite 3.3 8B · Mistral 7B · runs on RTX 3090 · RTX 4090 · Mac Studio · ~6-12 GB Q4</li>
    <li><strong>27B class · Heavyweight</strong> · Gemma 2 27B · Qwen 2.5 32B · Mixtral 8x7B · runs on RTX 4090 · RTX 6000 · ~16-22 GB Q4</li>
    <li><strong>70B class · Frontier-ish</strong> · Llama 3.3 70B · Qwen 2.5 72B · Mixtral 8x22B · runs on 2× RTX 6000 · A100 80GB · ~42-50 GB Q4</li>
    <li><strong>671B class · Frontier open</strong> · DeepSeek V3 671B MoE 37B active · runs on 4× RTX 6000 · DGX-class · ~340 GB Q4 · what DefendableCloud serves daily</li>
  </ul>

  <h2>Reference builds · all buyable · not mythical</h2>
  <ul>
    <li><strong>$249 · Edge Box</strong> · Jetson Orin Nano · 20W · runs 4B class at usable speed · Tribunal rule layer · embedded agent</li>
    <li><strong>$1,500 · Workhorse</strong> · RTX 3090 24GB · Ryzen 7 · 64GB RAM · runs 9B-32B comfortably · most personal agent workloads</li>
    <li><strong>$5,000 · Workstation</strong> · RTX PRO 6000 Blackwell 96GB · runs everything up to 70B · DeepSeek V3 671B if you have 4</li>
    <li><strong>$20,000 · Mini-DC</strong> · 4× RTX 6000 · server chassis · 512GB RAM · runs DeepSeek V3 · single Defendable rack node · 128 of these in our DC</li>
  </ul>

  <h2>Toolchain · pick your stack</h2>
  <p>vLLM · llama.cpp · Ollama · MLX · ExLlamaV2 · TensorRT-LLM · Transformers · text-generation-webui. We use all of them in different contexts. None are wrong. Most speak the OpenAI-SDK protocol natively · swap them under the same agent code with no rewrite.</p>

  <h2>Three doors · build · buy · or use our cloud</h2>
  <ol>
    <li><strong>Build it yourself</strong> · buy a Jetson · install Ollama · pull Phi-4 · point your agent at localhost. You own the rail end to end. We publish the doctrine packs so you grade your own agents with the same Tribunal we use.</li>
    <li><strong>Order a HoneyBox</strong> · $399 setup · $10/mo · pre-flashed Jetson Orin Nano with the full Defendable stack wired. Plug it in · scan QR · point agents · receipts flow. Tax-deductible · off balance sheet.</li>
    <li><strong>Use DefendableCloud</strong> · no hardware. Change <code>base_url</code> to api.defendablecloud.com · we run inference on our 128-card fleet · contractual no-logging · open weights only.</li>
  </ol>

  <h2>DefendableHack Bounty · coming · waitlist open</h2>
  <p>First receipted bug bounty for AI agents. Find an agent that PROPOLIS-fails in the wild · submit the capture · auto-Tribunal validates · failure becomes an adversarial case in the next benchmark pack · you get paid · every active Defendable Agent Deed has to re-test against the new pack or lose grade. Closed loop. Researcher-funded doctrine.</p>
</main>`.trim();

  return {
    bodyHtml,
    title: "DefendableHack · Builder Rail · Cracked LLM · DefendableOS",
    description:
      "The builder rail for DefendableOS. From 4B at the edge to 671B in your closet · open-weights model ladder · 4 reference hardware builds ($249-$20K) · 8 open-source LLM tools. Three doors: build yourself · order HoneyBox · use DefendableCloud. DefendableHack bounty waitlist open.",
    jsonLdBlocks: [
      { "@context": "https://schema.org", "@type": "TechArticle", "@id": `${url}#article`, headline: "DefendableHack · the builder rail · cracked LLM · open weights · all hardware tiers", url, datePublished: "2026-05-24", inLanguage: "en-US" },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "DefendableOS", item: "https://defendableos.com/" },
        { "@type": "ListItem", position: 2, name: "Hack · Builder Rail", item: url },
      ]},
    ],
  };
}

function buildContactContent(): RouteContent {
  const url = "https://defendableos.com/contact";
  const bodyHtml = `
<main>
  ${THESIS_BANNER}
  <h1>Talk straight.</h1>
  <p>One form · founder reads it · 24-hour reply. No discovery call. No 6-touchpoint cadence. No CRM auto-nurture. Pick the lane that fits and write what you actually want to ask.</p>
  <h2>Five lanes</h2>
  <ul>
    <li><strong>Build</strong> · founder/dev exploring the rail · pricing · pilot · technical questions</li>
    <li><strong>Defense</strong> · compliance/audit/risk · evaluating Defendable for a real workload</li>
    <li><strong>Press / analyst</strong> · category briefing · interview · OpenDefense market intelligence</li>
    <li><strong>Partner</strong> · insurance carrier · integrator · pack contributor · advisor</li>
    <li><strong>Other</strong> · whatever else</li>
  </ul>
  <h2>Or skip the form</h2>
  <ul>
    <li><strong>Build / dev questions</strong> · <a href="mailto:build@swarmandbee.ai">build@swarmandbee.ai</a></li>
    <li><strong>Defense / institutional</strong> · <a href="mailto:build@swarmandbee.ai">build@swarmandbee.ai</a></li>
  </ul>
</main>`.trim();

  return {
    bodyHtml,
    title: "Contact · DefendableOS",
    description: "Talk straight. One form · founder reads it · 24-hour reply. Five lanes: build · defense · press · partner · other. Or skip the form: build@swarmandbee.ai or build@swarmandbee.ai.",
    jsonLdBlocks: [
      { "@context": "https://schema.org", "@type": "ContactPage", "@id": `${url}#page`, url, name: "Contact DefendableOS" },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "DefendableOS", item: "https://defendableos.com/" },
        { "@type": "ListItem", position: 2, name: "Contact", item: url },
      ]},
    ],
  };
}
