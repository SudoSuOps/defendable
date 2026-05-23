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

const THESIS_BANNER = `<!-- DefendableOS · the operating system for evidence-backed valuation · build@swarmandbee.ai -->`;

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
  if (pathname === "/ledger") {
    return buildLedgerContent();
  }
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
  <h1>Every asset deserves a defendable value.</h1>
  <p><strong>DefendableOS</strong> turns real-world and digital assets into evidence-backed, market-ready records — with verified inputs, comparable analysis, provenance, valuation receipts, and transferable Defendable Deeds. Powered by <strong>AIOV</strong> (AI Opinion of Value). Built on the doctrine: <strong>Validate the Validator</strong>.</p>

  <h2>The problem</h2>
  <p>Value without evidence is just an opinion. Assets move through markets every day with incomplete records, unverified comps, missing provenance, undocumented condition, and valuation claims that cannot survive scrutiny. DefendableOS is designed to change that.</p>
  <ul>
    <li><strong>Unverified Inputs.</strong> A valuation is only as reliable as the identity, condition, source documents, and market data behind it.</li>
    <li><strong>Fragmented Evidence.</strong> Receipts, photos, benchmarks, comparables, ownership records, and reports rarely travel together with the asset.</li>
    <li><strong>Weak Market Readiness.</strong> Owners and buyers lose time and trust when a sale begins before the evidence package is complete.</li>
  </ul>

  <h2>From asset to Proof of Value · the 5-step workflow</h2>
  <ol>
    <li><strong>Capture.</strong> Collect source documents, images, specifications, condition details, ownership context, and relevant evidence.</li>
    <li><strong>Analyze (AIOV).</strong> Generate an AI-assisted opinion of value using asset-specific market intelligence, comparable records, and evidence-aware analysis.</li>
    <li><strong>Challenge (Validate the Validator).</strong> Test assumptions, inspect comparables, grade evidence quality, surface conflicts, and flag unsupported conclusions.</li>
    <li><strong>Package.</strong> Create a market-ready Proof of Value package with analysis, receipts, provenance, evidence references, and disposition-ready materials.</li>
    <li><strong>Deed.</strong> Preserve the evidence-backed asset record as a transferable Defendable Deed built to accompany the asset over time.</li>
  </ol>
  <p><em>"An AI opinion is not proof until the evidence survives challenge."</em></p>

  <h2>Asset classes · one system, many markets</h2>
  <ul>
    <li><strong>Commercial Real Estate</strong> — comps, offering materials, condition evidence, underwriting support, market-ready ownership packages</li>
    <li><strong>Compute Hardware</strong> — GPUs, servers, AI clusters, edge appliances, benchmark receipts, configuration records, resale analysis (Proof of Compute compatible)</li>
    <li><strong>Equipment</strong> — condition documentation, replacement analysis, service records, useful-life support, transfer-ready evidence</li>
    <li><strong>Luxury Goods</strong> — identity records, provenance evidence, condition media, comparable market support, resale packaging</li>
    <li><strong>Datasets</strong> — source documentation, curation receipts, integrity checks, version history, hash records, licensing support (Deeded Digital Assets)</li>
    <li><strong>AI Assets</strong> — model cards, training records, evaluation receipts, benchmark evidence, deployment history, transfer-ready IP documentation (Deeded Digital Assets)</li>
  </ul>

  <h2>The Defendable Deed · the asset record that travels with the value</h2>
  <p>A Defendable Deed is an evidence-backed record designed to preserve the identity, provenance, condition, supporting analysis, and Proof of Value package associated with an asset.</p>
  <ul>
    <li>Evidence travels with the asset</li>
    <li>Inputs remain reviewable</li>
    <li>Analysis remains challengeable</li>
    <li>Value becomes market-ready</li>
  </ul>

  <h2>Validate the Validator · the doctrine</h2>
  <p>Models can generate. Experts can opine. Markets can price. But trust begins when the source data, assumptions, comps, calculations, conflicts, and conclusions can be reviewed and challenged.</p>
  <ul>
    <li><strong>Evidence Before Confidence.</strong> No conclusion outranks its source material.</li>
    <li><strong>Receipts Before Claims.</strong> Outputs must be supported by inspectable records.</li>
    <li><strong>Challenge Before Transfer.</strong> A market-ready asset package should survive scrutiny before it reaches a buyer.</li>
  </ul>
  <p><strong>AIOV gives the opinion. DefendableOS proves the value.</strong></p>

  <h2>System architecture · a trust layer built around the asset</h2>
  <ul>
    <li><strong>Market-Ready Output</strong> — sale package · transfer record · buyer booklet · financing / insurance support file</li>
    <li><strong>DefendableOS</strong> — evidence vault · validator review · receipt ledger · deed registry · workflow engine</li>
    <li><strong>AIOV</strong> — comparable analysis · asset-specific models · valuation reasoning · risk flagging</li>
    <li><strong>Source Evidence</strong> — documents · photos · benchmarks · provenance · ownership records · market data</li>
    <li><strong>Optional · Defendable Box</strong> — local capture, local inference, sovereign evidence handling (capability preview)</li>
  </ul>

  <h2>Platform modules</h2>
  <ul>
    <li><strong>AIOV Engine</strong> — AI-assisted opinions of value built from asset-specific context and comparable evidence</li>
    <li><strong>Evidence Vault</strong> — store the records that support identity, provenance, condition, and analysis</li>
    <li><strong>Validator Review</strong> — challenge assumptions, inputs, comparable relevance, and unsupported claims</li>
    <li><strong>Receipt Ledger</strong> — generate inspectable analysis and evidence receipts for every record</li>
    <li><strong>Defendable Deed</strong> — package the asset's value-supporting record into a transferable artifact</li>
    <li><strong>Market-Ready Export</strong> — ship buyer-ready booklets, reports, listing support, and diligence packages</li>
  </ul>

  <h2>Early access</h2>
  <p>DefendableOS is being built for asset owners, operators, brokers, collectors, compute sellers, dataset builders, AI firms, and institutions that need value supported by evidence. Request early access at <a href="https://defendableos.com/#early-access">defendableos.com/#early-access</a> or email <a href="mailto:build@swarmandbee.ai">build@swarmandbee.ai</a>.</p>
  <p>For founding partners: early Proof of Value workflow design · asset-class pilot onboarding · Deed and evidence package prototyping · private platform demonstrations.</p>

  <h2>The brand line</h2>
  <blockquote><strong>"Proof of Value for Everything That Matters."</strong> · Proof of Value. Built on evidence. Designed for scrutiny.</blockquote>

  <h2>Disclaimer</h2>
  <p><em>DefendableOS records are evidence and analysis packages. Asset-specific professional, legal, regulatory, or licensed appraisal requirements may still apply. DefendableOS is a product of Swarm and Bee LLC (Florida limited liability company · D-U-N-S 138652395 · doing business as Swarm &amp; Bee AI).</em></p>
</main>`.trim();

  const jsonLdBlocks: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": `${url}#platform`,
      name: "DefendableOS",
      url,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Trust infrastructure · evidence-backed valuation platform",
      operatingSystem: "Web · API",
      description:
        "DefendableOS turns real-world and digital assets into evidence-backed, market-ready records with verified inputs, comparable analysis, provenance, valuation receipts, and transferable Defendable Deeds. Powered by AIOV (AI Opinion of Value). Built on the doctrine: Validate the Validator.",
      provider: {
        "@type": "Organization",
        name: "Swarm and Bee LLC",
        url: "https://swarmandbee.ai/",
      },
      offers: {
        "@type": "Offer",
        name: "Early Access · founding partners",
        description:
          "Early Proof of Value workflow design · asset-class pilot onboarding · Deed and evidence package prototyping · private platform demonstrations.",
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
      name: "DefendableOS · Proof of Value",
      description:
        "DefendableOS is the operating system for evidence-backed valuation, provenance, and market-ready ownership across real estate, compute, equipment, datasets, and AI assets.",
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
    title: "DefendableOS · Proof of Value",
    description:
      "DefendableOS is the operating system for evidence-backed valuation, provenance, and market-ready ownership across real estate, compute, equipment, datasets, and AI assets. Validate the Validator · AIOV · Defendable Deeds.",
  };
}
