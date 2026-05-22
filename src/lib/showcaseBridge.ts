/**
 * showcaseBridge — maps a DefendableOS public verification record into
 * showcase component props.
 *
 * The platform API (`GET /api/v1/public/verify/{slug}`) is the canonical
 * source. This module:
 *   1. Defines the TypeScript shape of the public record
 *   2. Defines the prop interface the showcase components consume
 *   3. Maps record → props with safe fallbacks
 *
 * Doctrine: NEVER overclaim. If the source record is draft (is_draft=true
 * OR the conservative fallback), every rendered card must use draft
 * language. This file mirrors the backend's render_public_preview output.
 */

/** Shape of the JSON returned by GET /api/v1/public/verify/{slug} */
export interface PublicRecord {
  public_slug: string;
  deed_reference: string;
  version: number;
  created_at: string;
  issued_at: string | null;
  lifecycle: {
    record_status: string;
    validator_status: string;
    publication_status: string;
    value_status: string;
    ens_status: string;
    is_draft: boolean;
  };
  deed_public: {
    deed_type?: string;
    deed_version?: string;
    record_status?: string;
    created_at?: string;
    issued_at?: string | null;
    proof_of_value?: {
      framework?: string;
      doctrine?: string;
      intelligence_engine?: string;
      record_purpose?: string;
    };
    asset?: {
      asset_reference?: string;
      asset_class?: string;
      category?: string;
      manufacturer?: string;
      model?: string;
    };
    evidence_packet?: {
      manifest_id?: string;
      manifest_sha256?: string;
      evidence_item_count?: number;
      public_evidence_disclosure?: string;
    };
    aiov_analysis?: {
      analysis_id?: string;
      status?: string;
      value_display_status?: string;
      valuation_issued?: boolean;
      operator_ask?: {
        label?: string;
        currency?: string;
        amount_usd?: number;
        doctrine_note?: string;
      };
    } | null;
    validator_review?: {
      protocol?: string;
      receipt_id?: string;
      status?: string;
      receipt_sha256?: string;
      human_approval_required?: boolean;
    };
    ens_identity?: {
      name?: string;
      status?: string;
      public_resolution_target?: string | null;
      parent_organization_ens?: string;
    };
    publication_policy?: {
      public_preview_allowed?: boolean;
      public_verification_status?: string;
      ens_published?: boolean;
      value_claim_public?: boolean;
      publication_requires_human_approval?: boolean;
    };
    disclosures?: {
      ai_assisted_record?: boolean;
      professional_appraisal?: boolean;
      legal_certification?: boolean;
      authentication_guarantee?: boolean;
      final_valuation_issued?: boolean;
      deed_issued?: boolean;
      disclaimer?: string;
    };
    integrity?: {
      hash_algorithm?: string;
      canonicalization?: string;
      record_hash?: string;
    };
  };
}

/** Props consumed by the showcase composition. All optional with defaults. */
export interface ShowcaseProps {
  // Header / hero
  headlineEyebrow: string;     // "Proof of Value"
  headlineMain: string;        // "Proof of Value for AI Hardware"
  headlineAccent: string;      // "AI Hardware" gets the serif italic
  supportingCopy: string;
  exploreRecordHref: string;
  pilotMailtoSubject: string;

  // Asset identity
  assetClass: string;
  assetName: string;
  manufacturer: string;
  category: string;
  assetReference: string;

  // Evidence packet
  evidenceItemCount: number;
  manifestSha256: string;

  // Validator
  validatorStatus: string;
  validatorReceiptSha256: string;

  // Deed
  deedReference: string;
  draftGeneratedAt: string;
  recordHash: string;        // full SHA-256 · plaque slices the first 12

  // Operator-attested asking price · doctrine: claim only, not validation
  operatorAskPriceUsd: number | null;
  operatorAskCurrency: string;        // "USD" by default
  operatorAskLabel: string;           // "Operator asking"
  operatorAskDoctrineNote: string;    // disclaimer that travels with the price

  // ENS
  ensIdentity: string;
  ensStatus: string;

  // Lifecycle (drives badge wording)
  isDraft: boolean;
  recordStatus: string;
  publicationStatus: string;
  valueStatus: string;

  /** Picks which 3D scene to render. 'compute' is the only one implemented today. */
  sceneKind: "compute" | "real-estate" | "equipment" | "luxury" | "dataset" | "ai-asset";

  /** Per-asset-class card body for the benchmark/proof slot. */
  performanceCardEyebrow: string;
  performanceCardTitle: string;
  performanceCardBody: string;
}

/** The compute-hardware defaults used by /compute when no deed is fetched. */
export const COMPUTE_DEFAULT_PROPS: ShowcaseProps = {
  headlineEyebrow: "Proof of Value",
  headlineMain: "Proof of Value for AI Hardware",
  headlineAccent: "AI Hardware",
  supportingCopy:
    "DefendableOS transforms GPUs, servers, and AI infrastructure into " +
    "evidence-backed, market-ready asset records — with validator receipts, " +
    "manifest integrity, and draft deed packaging designed to travel with " +
    "the asset.",
  exploreRecordHref: "/verify/ddeed-dov-compute-000001-v3",
  pilotMailtoSubject: "Defendable%20Compute%20pilot",

  assetClass: "COMPUTE_HARDWARE",
  assetName: "NVIDIA RTX PRO 6000 Blackwell",
  manufacturer: "NVIDIA",
  category: "GPU_ACCELERATOR",
  assetReference: "DOV-COMPUTE-000001",

  evidenceItemCount: 3,
  manifestSha256:
    "01fdc5920a6ac419d0e510135a92e9e0ee4ac689cb04ac21c74daeba526c6be3",

  validatorStatus: "PASSED_FOR_DRAFT_PACKAGING",
  validatorReceiptSha256:
    "f71cc446abe480dcb0e046bb90ddede4a48b46aa411b793171e4932e8f57fd14",

  deedReference: "DDEED-DOV-COMPUTE-000001-v3",
  draftGeneratedAt: "2026-05-22T17:30:00Z",
  recordHash: "",  // mapPublicRecordToProps populates · /compute default is empty

  operatorAskPriceUsd: 9850,
  operatorAskCurrency: "USD",
  operatorAskLabel: "Operator asking",
  operatorAskDoctrineNote:
    "Operator's stated asking price. Operator claim only · not a validator-issued value, professional appraisal, or confirmed-sale comparable.",

  ensIdentity: "ddeed-dov-compute-000001.swarmbee.defendable.eth",
  ensStatus: "RESERVED_NOT_ISSUED",

  isDraft: true,
  recordStatus: "DRAFT_REVIEW_RECORD",
  publicationStatus: "NOT_PUBLISHED",
  valueStatus: "WITHHELD_PENDING_VALIDATOR_REVIEW",

  sceneKind: "compute",
  performanceCardEyebrow: "Benchmark Receipt",
  performanceCardTitle: "Performance evidence on file",
  performanceCardBody:
    "Benchmark receipt indexed. Validator review pending. Performance figures withheld until human approval.",
};

/** Per-asset-class headline + performance-slot copy. */
const ASSET_CLASS_PRESETS: Record<
  string,
  Partial<ShowcaseProps> & {
    sceneKind: ShowcaseProps["sceneKind"];
  }
> = {
  COMPUTE_HARDWARE: {
    sceneKind: "compute",
    headlineMain: "Proof of Value for AI Hardware",
    headlineAccent: "AI Hardware",
    supportingCopy:
      "DefendableOS transforms GPUs, servers, and AI infrastructure into " +
      "evidence-backed, market-ready asset records — with validator receipts, " +
      "manifest integrity, and draft deed packaging designed to travel with the asset.",
    performanceCardEyebrow: "Benchmark Receipt",
    performanceCardTitle: "Performance evidence on file",
    performanceCardBody:
      "Benchmark receipt indexed. Validator review pending. Performance figures withheld until human approval.",
    pilotMailtoSubject: "Defendable%20Compute%20pilot",
  },
  REAL_ESTATE: {
    sceneKind: "real-estate",
    headlineMain: "Proof of Value for Commercial Real Estate",
    headlineAccent: "Commercial Real Estate",
    supportingCopy:
      "DefendableOS turns CRE assets into evidence-backed, market-ready " +
      "ownership packages — comps, condition documentation, underwriting " +
      "support, and a draft Defendable Deed that travels with the offering.",
    performanceCardEyebrow: "Underwriting Receipt",
    performanceCardTitle: "Underwriting evidence on file",
    performanceCardBody:
      "Comp set indexed. T-12 attached. Validator review pending · pro forma figures withheld until human approval.",
    pilotMailtoSubject: "Defendable%20CRE%20pilot",
  },
  EQUIPMENT: {
    sceneKind: "equipment",
    headlineMain: "Proof of Value for Equipment",
    headlineAccent: "Equipment",
    supportingCopy:
      "Condition documentation, replacement analysis, service records, and " +
      "useful-life support — packaged as a draft Defendable Deed designed to " +
      "travel with the equipment.",
    performanceCardEyebrow: "Service Receipt",
    performanceCardTitle: "Service evidence on file",
    performanceCardBody:
      "Service records indexed. Inspection photos hashed. Validator review pending · replacement and useful-life figures withheld until human approval.",
    pilotMailtoSubject: "Defendable%20Equipment%20pilot",
  },
  LUXURY_GOODS: {
    sceneKind: "luxury",
    headlineMain: "Proof of Value for Luxury Goods",
    headlineAccent: "Luxury Goods",
    supportingCopy:
      "Identity records, provenance evidence, condition media, and comparable " +
      "market support — packaged as a draft Defendable Deed that travels with " +
      "the piece.",
    performanceCardEyebrow: "Provenance Receipt",
    performanceCardTitle: "Provenance evidence on file",
    performanceCardBody:
      "Provenance documents indexed. Condition media hashed. Validator review pending · grading and value figures withheld until human approval.",
    pilotMailtoSubject: "Defendable%20Luxury%20pilot",
  },
  DATASET: {
    sceneKind: "dataset",
    headlineMain: "Proof of Value for Datasets",
    headlineAccent: "Datasets",
    supportingCopy:
      "Source documentation, curation receipts, integrity checks, version " +
      "history, and licensing support — packaged as a draft Defendable Deed.",
    performanceCardEyebrow: "Integrity Receipt",
    performanceCardTitle: "Dataset integrity evidence on file",
    performanceCardBody:
      "Source registry indexed. Hash log attached. Validator review pending · licensing and royalty figures withheld until human approval.",
    pilotMailtoSubject: "Defendable%20Dataset%20pilot",
  },
};

/** Map a fetched public record into showcase props with safe defaults. */
export function mapPublicRecordToProps(record: PublicRecord): ShowcaseProps {
  const d = record.deed_public ?? {};
  const asset = d.asset ?? {};
  const ev = d.evidence_packet ?? {};
  const vr = d.validator_review ?? {};
  const ens = d.ens_identity ?? {};
  const integrity = d.integrity ?? {};

  const assetClass = asset.asset_class ?? "COMPUTE_HARDWARE";
  const preset = ASSET_CLASS_PRESETS[assetClass] ?? ASSET_CLASS_PRESETS.COMPUTE_HARDWARE;

  return {
    ...COMPUTE_DEFAULT_PROPS,
    ...preset,
    headlineEyebrow: "Proof of Value",
    exploreRecordHref: `/verify/${record.public_slug}`,

    assetClass,
    assetName: [asset.manufacturer, asset.model].filter(Boolean).join(" ") || COMPUTE_DEFAULT_PROPS.assetName,
    manufacturer: asset.manufacturer ?? COMPUTE_DEFAULT_PROPS.manufacturer,
    category: asset.category ?? COMPUTE_DEFAULT_PROPS.category,
    assetReference: asset.asset_reference ?? COMPUTE_DEFAULT_PROPS.assetReference,

    evidenceItemCount: ev.evidence_item_count ?? 0,
    manifestSha256: ev.manifest_sha256 ?? COMPUTE_DEFAULT_PROPS.manifestSha256,

    validatorStatus: vr.status ?? "PASSED_FOR_DRAFT_PACKAGING",
    validatorReceiptSha256: vr.receipt_sha256 ?? COMPUTE_DEFAULT_PROPS.validatorReceiptSha256,

    deedReference: record.deed_reference,
    draftGeneratedAt: record.created_at,
    recordHash: integrity.record_hash ?? COMPUTE_DEFAULT_PROPS.recordHash,

    // Operator-attested ask · only surfaced when deed has it
    operatorAskPriceUsd:
      typeof (d.aiov_analysis?.operator_ask?.amount_usd) === "number"
        ? d.aiov_analysis!.operator_ask!.amount_usd!
        : null,
    operatorAskCurrency:
      d.aiov_analysis?.operator_ask?.currency ?? COMPUTE_DEFAULT_PROPS.operatorAskCurrency,
    operatorAskLabel:
      d.aiov_analysis?.operator_ask?.label ?? COMPUTE_DEFAULT_PROPS.operatorAskLabel,
    operatorAskDoctrineNote:
      d.aiov_analysis?.operator_ask?.doctrine_note ?? COMPUTE_DEFAULT_PROPS.operatorAskDoctrineNote,

    ensIdentity: ens.name ?? COMPUTE_DEFAULT_PROPS.ensIdentity,
    ensStatus: ens.status ?? "RESERVED_NOT_ISSUED",

    isDraft: record.lifecycle?.is_draft ?? true,
    recordStatus: record.lifecycle?.record_status ?? "DRAFT_REVIEW_RECORD",
    publicationStatus: record.lifecycle?.publication_status ?? "NOT_PUBLISHED",
    valueStatus: record.lifecycle?.value_status ?? "WITHHELD_PENDING_VALIDATOR_REVIEW",

  };
}

const API_BASE =
  (import.meta as any).env?.VITE_API_BASE_URL ||
  (typeof window !== "undefined" && (window as any).__DEFENDABLE_API_BASE__) ||
  "https://api.defendableos.com";

/** Fetch a public record from the platform · returns null on any error. */
export async function fetchPublicRecord(slug: string): Promise<PublicRecord | null> {
  try {
    const resp = await fetch(`${API_BASE}/api/v1/public/verify/${slug}`, {
      cache: "no-store",
    });
    if (!resp.ok) return null;
    return (await resp.json()) as PublicRecord;
  } catch {
    return null;
  }
}
