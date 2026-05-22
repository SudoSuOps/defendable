/**
 * Palm Grove Marketplace · illustrative CRE demo data.
 *
 * This is the SINGLE source of truth for the Defendable CRE
 * MarketReady demo. Every page (`/showcase/cre/palm-grove-marketplace`
 * and its sub-routes) reads from here. The numbers, tenant categories,
 * and disclosure text are ALL illustrative · NOT derived from a real
 * property, real owner, real broker, real rent roll, or real
 * appraisal. The page must always label this data as such.
 */

export interface PalmGroveTenant {
  category: string;
  sf: number;
  sharePct: number;
  /** Geometry hint for the SVG site plan · "anchor" rectangle vs inline strip */
  block: "anchor" | "inline";
  /** Approximate position on the SVG site plan (0-100 normalized) */
  layout?: { x: number; y: number; w: number; h: number };
}

export const PALM_GROVE = {
  // Identity
  assetReference: "DOV-CRE-DEMO-000001",
  deedReference: "DDEED-DOV-CRE-DEMO-000001-v1",
  publicSlug: "ddeed-dov-cre-demo-000001-v1",
  propertyName: "Palm Grove Marketplace",
  subtitle: "Grocery-Anchored Neighborhood Retail Center",
  market: "South Florida",
  ensIdentity: "palm-grove-marketplace.cre.demo.defendable.eth",
  ensStatus: "RESERVED_NOT_ISSUED",
  offeringStatus: "ILLUSTRATIVE_PROPERTY_PREVIEW",

  // Property facts · every metric is ILLUSTRATIVE_DEMO_DATA
  facts: {
    grossLeasableAreaSf: 82_400,
    occupancyPct: 94.2,
    tenantSpaces: 14,
    yearBuilt: 2016,
    yearRenovated: 2024,
    parkingRatioPer1000Sf: 4.7,
    parcelSizeAcres: 9.8,
    propertyType: "GROCERY_ANCHORED_NEIGHBORHOOD_RETAIL",
  },

  // Tenant mix · generic categories ONLY · no real brands or logos
  tenants: [
    {
      category: "Anchor Grocer",
      sf: 38_000,
      sharePct: 46.1,
      block: "anchor",
      // Site plan: the anchor occupies the back-left of the L-shape
      layout: { x: 4, y: 6, w: 42, h: 32 },
    },
    {
      category: "Fitness Studio",
      sf: 7_500,
      sharePct: 9.1,
      block: "inline",
      layout: { x: 48, y: 6, w: 14, h: 16 },
    },
    {
      category: "Fast Casual Dining",
      sf: 3_200,
      sharePct: 3.9,
      block: "inline",
      layout: { x: 64, y: 6, w: 9, h: 16 },
    },
    {
      category: "Coffee Retailer",
      sf: 2_100,
      sharePct: 2.5,
      block: "inline",
      layout: { x: 75, y: 6, w: 7, h: 16 },
    },
    {
      category: "Medical / Wellness",
      sf: 4_500,
      sharePct: 5.5,
      block: "inline",
      layout: { x: 48, y: 24, w: 12, h: 14 },
    },
    {
      category: "Local Services + flex",
      sf: 27_100,
      sharePct: 32.9,
      block: "inline",
      layout: { x: 62, y: 24, w: 20, h: 14 },
    },
  ] as PalmGroveTenant[],

  // Investment highlights · all sample-only language
  illustrativeHighlights: [
    "Grocery-anchored neighborhood retail format",
    "Convenience-oriented tenant mix concept",
    "Designed as a stabilized retail-center offering experience",
    "South Florida market positioning concept",
    "Buyer-ready evidence and marketing package demonstration",
  ],

  // Approved claims library · doctrine demonstration
  approvedClaims: {
    publicSafeApprovedForDemo: [
      "Palm Grove Marketplace is an illustrative demo property.",
      "Asset class: Commercial Real Estate.",
      "Property type concept: Grocery-Anchored Neighborhood Retail Center.",
      "All displayed metrics are illustrative demo data.",
      "Draft proof record exists for demonstration.",
    ],
    publicSafeWithDisclosure: [
      "Displayed size, occupancy, tenant mix and property facts, only when shown with the Illustrative Demo Data label.",
    ],
    blockedFromPublicMarketing: [
      "Final value conclusion",
      "Offering price",
      "Cap rate",
      "NOI",
      "Investment returns",
      "Actual tenant credit claims",
      "Certified property condition",
      "Appraisal conclusion",
      "Issued deed",
      "ENS publication",
    ],
  },

  // MarketReady deliverables
  marketReadyDeliverables: [
    { name: "Property Website", status: "DRAFT_PREVIEW_READY", action: "/showcase/cre/palm-grove-marketplace" },
    { name: "Teaser Sheet", status: "DRAFT_PREVIEW_READY", action: "/showcase/cre/palm-grove-marketplace/teaser" },
    { name: "Offering Memorandum", status: "DRAFT_PREVIEW_READY", action: "/showcase/cre/palm-grove-marketplace/om" },
    { name: "Buyer Room", status: "DEMO_PREVIEW_READY", action: "/showcase/cre/palm-grove-marketplace/buyer-room" },
    { name: "Campaign Media Kit", status: "FUTURE_CAPABILITY", action: null },
    { name: "Listing Export Package", status: "FUTURE_CAPABILITY", action: null },
    { name: "Draft Proof Record", status: "REVIEW_REQUIRED", action: "/showcase/cre/palm-grove-marketplace/proof-record" },
  ],

  // Buyer Room document categories
  buyerRoomDocs: [
    { name: "Offering Memorandum", status: "Preview Available" },
    { name: "Rent Roll", status: "Restricted Pending Approval" },
    { name: "Lease Abstracts", status: "Restricted Pending Approval" },
    { name: "Survey / Site Plan", status: "Evidence-Gated" },
    { name: "Environmental Reports", status: "Evidence-Gated" },
    { name: "Property Condition", status: "Evidence-Gated" },
    { name: "Tax / Insurance", status: "Restricted Pending Approval" },
    { name: "Validator Receipts", status: "Illustrative Placeholder" },
    { name: "Draft Defendable Record", status: "Preview Available" },
  ],

  // Lifecycle display strings (asset-class-aware · backend stores DRAFT_REVIEW_RECORD)
  lifecycle: {
    recordStatusDisplay: "DRAFT_MARKETING_PREVIEW",
    validatorStatusDisplay: "PASSED_FOR_DRAFT_MARKETING_DISPLAY",
    valueDisplayStatus: "NO_FINAL_VALUATION_REPRESENTED",
    ensStatusDisplay: "RESERVED_NOT_ISSUED",
    publicationStatusDisplay: "NOT_PUBLISHED",
    evidenceStatusDisplay: "ILLUSTRATIVE_DEMO_PACKET",
  },

  // Disclosures · the SHORT, MEDIUM, LONG forms used across all routes
  disclosure: {
    heroBand:
      "ILLUSTRATIVE PROPERTY PREVIEW · NOT AN ACTIVE OFFERING · NO FINAL VALUATION REPRESENTED",
    footerShort:
      "Illustrative product demonstration only. Not an active offering, appraisal, certification, valuation opinion, or solicitation to acquire an interest in real property.",
    draftRecord:
      "This is an illustrative draft marketing record created to demonstrate the DefendableOS platform. No active offering, final valuation, professional appraisal, legal certification, property authentication, issued deed or ENS publication is represented.",
    metricLabel: "Illustrative Demo Data",
    siteplanLabel:
      "Conceptual visualization for product demonstration only. Not a survey, site plan certification, appraisal or active offering document.",
    buyerRoomState: "ACCESS REQUEST REQUIRED · DEMO ONLY",
    buyerRoomIntake:
      "Buyer Room intake is available in pilot engagements. This demonstration does not grant access to real transaction materials.",
    financialPlaceholder:
      "Available in an approved property engagement after source document review, underwriting verification and publication controls. No underwriting conclusion, offering price, cap rate, NOI, return projection or valuation is represented in this illustrative demo.",
  },
} as const;

/** Format a square-footage number with commas + " SF" suffix. */
export function formatSf(n: number): string {
  return `${n.toLocaleString("en-US")} SF`;
}

/** Format a percent with one decimal. */
export function formatPct(n: number): string {
  return `${n.toFixed(1)}%`;
}
