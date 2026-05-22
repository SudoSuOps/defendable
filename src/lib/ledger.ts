/**
 * ledger · client for the platform's /api/v1/public/lookup endpoint.
 *
 * One paste-and-lookup. The platform is the source of truth · we just
 * format the response for the search UI.
 */

const API_BASE =
  (import.meta as any).env?.VITE_API_BASE_URL ||
  (typeof window !== "undefined" && (window as any).__DEFENDABLE_API_BASE__) ||
  "https://api.defendableos.com";

export type LookupKind =
  | "RECORD_HASH"
  | "MANIFEST_HASH"
  | "VALIDATOR_RECEIPT"
  | "DEED_REFERENCE"
  | "NOT_FOUND";

export interface LedgerLifecycle {
  record_status: string;
  validator_status: string;
  publication_status: string;
  value_status: string;
  ens_status: string;
  is_draft: boolean;
}

export interface LedgerIntegrity {
  hash_algorithm: string;
  canonicalization: string;
  record_hash: string;
}

export interface LedgerLookupResult {
  kind: LookupKind;
  matched_hash: string;
  summary: string;
  deed_reference?: string;
  public_slug?: string;
  version?: number;
  asset_class?: string;
  asset_reference?: string;
  verify_url?: string;
  showcase_url?: string;
  lifecycle?: LedgerLifecycle | null;
  integrity?: LedgerIntegrity | null;
  manifest_id?: string;
  manifest_version?: number;
  receipt_id?: string;
  validator_version?: number;
}

export type LedgerError = {
  kind: "ERROR";
  reason: "network" | "platform_unreachable" | "invalid_input";
  message: string;
};

export const KIND_LABEL: Record<LookupKind, string> = {
  RECORD_HASH: "Record Hash",
  MANIFEST_HASH: "Evidence Manifest Hash",
  VALIDATOR_RECEIPT: "Validator Receipt Hash",
  DEED_REFERENCE: "Deed Reference",
  NOT_FOUND: "Not Found",
};

const SHA256_RE = /^[0-9a-f]{64}$/i;
const DEED_REF_RE = /^DDEED-[A-Z0-9-]+-v\d+$/i;

/** Client-side sanity check before we even round-trip to the API. */
export function classifyInput(raw: string): "sha256" | "deed_reference" | "invalid" {
  const t = raw.trim();
  if (!t) return "invalid";
  if (DEED_REF_RE.test(t)) return "deed_reference";
  if (SHA256_RE.test(t)) return "sha256";
  return "invalid";
}

export async function lookup(query: string): Promise<LedgerLookupResult | LedgerError> {
  const q = query.trim();
  if (!q) {
    return { kind: "ERROR", reason: "invalid_input", message: "Paste a hash or deed reference to search." };
  }
  const shape = classifyInput(q);
  if (shape === "invalid") {
    return {
      kind: "ERROR",
      reason: "invalid_input",
      message:
        "Paste a SHA-256 hash (64 hex characters) or a deed reference like DDEED-DOV-COMPUTE-000001-v2.",
    };
  }
  try {
    const resp = await fetch(
      `${API_BASE}/api/v1/public/lookup?hash=${encodeURIComponent(q)}`,
      { cache: "no-store" },
    );
    if (!resp.ok) {
      return {
        kind: "ERROR",
        reason: "platform_unreachable",
        message: `Platform returned ${resp.status}. Try again in a moment.`,
      };
    }
    return (await resp.json()) as LedgerLookupResult;
  } catch (e: any) {
    return {
      kind: "ERROR",
      reason: "network",
      message:
        "Could not reach the platform. The ledger is a live lookup against the DefendableOS API.",
    };
  }
}
