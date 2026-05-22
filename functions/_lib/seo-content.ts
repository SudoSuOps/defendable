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
  if (pathname === "/ledger") {
    return buildLedgerContent();
  }
  return null;
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
