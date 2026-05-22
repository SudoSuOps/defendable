/**
 * /showcase/cre/palm-grove-marketplace/proof-record
 *
 * Pretty-printed JSON viewer for the public Defendable Record returned
 * by the platform API. Fetches GET /api/v1/public/verify/{slug} for the
 * Palm Grove CRE demo deed and renders:
 *   - A summary card (deed ref · asset class · record-hash slice · lifecycle)
 *   - The full JSON payload in a <pre> for inspection
 *   - "Copy raw JSON" and "View on API" affordances
 *
 * The deed is ALWAYS surfaced as DRAFT · NOT ISSUED · NOT PUBLISHED. The
 * page falls back gracefully when the platform is unreachable.
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CrePageShell } from "../components/cre/CrePageShell";
import { PALM_GROVE } from "../lib/cre/palmGrove";
import type { PublicRecord } from "../lib/showcaseBridge";

const API_BASE = "https://api.defendableos.com";
const SLUG = "ddeed-dov-cre-demo-000001-v1";
const FETCH_URL = `${API_BASE}/api/v1/public/verify/${SLUG}`;
const PUBLIC_VERIFY_URL = `https://defendableos.com/verify/${SLUG}`;

type FetchState =
  | { kind: "loading" }
  | { kind: "ok"; record: PublicRecord; raw: string }
  | { kind: "unreachable"; error?: string };

export default function DefendableCrePalmGroveProofRecord() {
  const [state, setState] = useState<FetchState>({ kind: "loading" });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const resp = await fetch(FETCH_URL, { cache: "no-store" });
        if (!resp.ok) {
          if (!cancelled) {
            setState({
              kind: "unreachable",
              error: `HTTP ${resp.status}`,
            });
          }
          return;
        }
        const raw = await resp.text();
        let parsed: PublicRecord;
        try {
          parsed = JSON.parse(raw) as PublicRecord;
        } catch (e) {
          if (!cancelled) {
            setState({
              kind: "unreachable",
              error: "Invalid JSON response",
            });
          }
          return;
        }
        // Re-stringify with consistent 2-space indent for display + copy.
        const pretty = JSON.stringify(parsed, null, 2);
        if (!cancelled) {
          setState({ kind: "ok", record: parsed, raw: pretty });
        }
      } catch (err) {
        if (!cancelled) {
          setState({
            kind: "unreachable",
            error: err instanceof Error ? err.message : "Network error",
          });
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleCopy() {
    if (state.kind !== "ok") return;
    try {
      await navigator.clipboard.writeText(state.raw);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API can be blocked by permissions. Stay silent on failure.
    }
  }

  const recordHashSlice =
    state.kind === "ok"
      ? state.record.deed_public?.integrity?.record_hash
        ? state.record.deed_public.integrity.record_hash.slice(0, 32)
        : "(not present in payload)"
      : null;

  return (
    <CrePageShell showHeroDisclosure>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative px-6 pt-14 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-honey-400/80 font-semibold">
            Defendable CRE · Draft Proof Record
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-stone-100 leading-[1.05]">
            Draft Proof Record
          </h1>
          <p className="mt-4 text-lg text-stone-300 leading-snug">
            <span className="font-serif italic text-honey-200">
              The public deed payload behind the offering preview.
            </span>
          </p>
          <p className="mt-6 max-w-2xl text-stone-400 leading-relaxed">
            The Defendable Record is fetched live from the platform's public
            verification endpoint and rendered in full. Source documents are
            not included · the public payload references private evidence by
            hash and exposes only approved fields.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/[0.08] px-3.5 py-1.5">
            <span
              aria-hidden
              className="inline-block w-1.5 h-1.5 rounded-full bg-amber-300"
            />
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-amber-300 font-semibold">
              DRAFT · NOT ISSUED · NOT PUBLISHED
            </span>
          </div>
        </div>
      </section>

      {/* ─── Summary card ──────────────────────────────────────────────── */}
      <section className="px-6 pb-10 border-t border-stone-900/80 pt-10">
        <div className="max-w-7xl mx-auto">
          <SummaryCard recordHashSlice={recordHashSlice} state={state} />
        </div>
      </section>

      {/* ─── JSON viewer / unreachable state ───────────────────────────── */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-honey-400/80 font-semibold">
                Public Payload
              </div>
              <h2 className="mt-1 text-xl md:text-2xl font-semibold tracking-tight text-stone-100">
                {state.kind === "ok"
                  ? "Live record from api.defendableos.com"
                  : state.kind === "loading"
                  ? "Fetching record..."
                  : "Platform unreachable"}
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                disabled={state.kind !== "ok"}
                className={[
                  "inline-flex items-center gap-2 px-3.5 py-2 rounded text-xs font-semibold transition-colors",
                  state.kind === "ok"
                    ? "border border-honey-400/55 text-honey-200 hover:bg-honey-400/[0.08]"
                    : "border border-stone-800 text-stone-600 cursor-not-allowed",
                ].join(" ")}
                aria-live="polite"
              >
                {copied ? "Copied" : "Copy raw JSON"}
              </button>
              <a
                href={FETCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded border border-stone-700 text-stone-300 hover:border-stone-600 text-xs transition-colors"
              >
                View on API ↗
              </a>
            </div>
          </div>

          {state.kind === "loading" && (
            <div className="rounded-xl border border-stone-800 bg-stone-950/60 p-10 text-center">
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-honey-400/80 font-semibold">
                Connecting
              </div>
              <p className="mt-3 text-sm text-stone-400">
                Requesting{" "}
                <span className="font-mono text-stone-300">{FETCH_URL}</span>
              </p>
            </div>
          )}

          {state.kind === "ok" && (
            <div className="rounded-xl border border-stone-700/60 bg-neutral-950/80 overflow-hidden">
              <div className="px-5 py-3 border-b border-stone-800 flex items-center justify-between flex-wrap gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-stone-500 font-semibold">
                  {SLUG}.json
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-honey-400/80 font-semibold">
                  application/json
                </span>
              </div>
              <pre className="font-mono text-xs text-stone-300 leading-relaxed whitespace-pre-wrap break-all px-5 py-5 max-h-[640px] overflow-auto">
                {state.raw}
              </pre>
            </div>
          )}

          {state.kind === "unreachable" && (
            <UnreachablePanel error={state.error} />
          )}

          <p className="mt-6 text-[11px] text-stone-500 italic leading-relaxed max-w-3xl">
            {PALM_GROVE.disclosure.draftRecord}
          </p>
        </div>
      </section>

      {/* ─── Bottom CTAs ───────────────────────────────────────────────── */}
      <section className="px-6 py-14 border-t border-stone-900/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
          <Link
            to="/showcase/cre/palm-grove-marketplace"
            className="inline-flex items-center gap-2 px-5 py-3 rounded border border-stone-700 text-stone-300 hover:border-stone-600 text-sm transition-colors"
          >
            ← Back to Property Experience
          </Link>
          <a
            href={PUBLIC_VERIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded border border-honey-400/55 text-honey-200 hover:bg-honey-400/[0.08] text-sm font-semibold transition-colors"
          >
            Open public verify page ↗
          </a>
          <Link
            to="/showcase/cre/palm-grove-marketplace/buyer-room"
            className="inline-flex items-center gap-2 px-5 py-3 rounded text-stone-400 hover:text-stone-200 text-sm transition-colors"
          >
            Preview Buyer Room
          </Link>
        </div>
      </section>
    </CrePageShell>
  );
}

/* ─── Subcomponents ─────────────────────────────────────────────────── */

function SummaryCard({
  recordHashSlice,
  state,
}: {
  recordHashSlice: string | null;
  state: FetchState;
}) {
  const lc = PALM_GROVE.lifecycle;
  return (
    <div className="relative rounded-xl border border-stone-700/60 bg-gradient-to-br from-stone-900/85 to-neutral-950 shadow-2xl overflow-hidden">
      <div className="px-7 py-5 border-b border-stone-800 bg-neutral-950/70">
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <span className="inline-flex w-7 h-7 rounded border border-honey-400/40 items-center justify-center text-honey-300">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <path d="M3 2h6l3 3v8H3z" />
              <path d="M5 6h5M5 8h5M5 10h3" strokeWidth="1" opacity="0.7" />
            </svg>
          </span>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-honey-400/80 font-semibold">
              Defendable Property Record
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-stone-400 font-semibold mt-1">
              Proof of Value Record · Draft Marketing Preview
            </div>
          </div>
          <span className="ml-auto inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] font-semibold border rounded-full px-2.5 py-1 text-amber-300 border-amber-500/40 bg-amber-500/[0.08]">
            DRAFT · NOT ISSUED · NOT PUBLISHED
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="px-7 py-5 divide-y divide-stone-800/70 lg:border-r lg:border-stone-800">
          <SRow label="Deed reference" value={PALM_GROVE.deedReference} mono />
          <SRow label="Public slug" value={SLUG} mono />
          <SRow label="Asset class" value="Commercial Real Estate" />
          <SRow label="Property" value={PALM_GROVE.propertyName} />
          <SRow
            label="Record hash"
            value={
              state.kind === "ok"
                ? recordHashSlice ?? "(unavailable)"
                : state.kind === "loading"
                ? "Fetching..."
                : "(platform unreachable)"
            }
            mono
            pending={state.kind !== "ok"}
          />
          <SRow
            label="ENS identity (reserved)"
            value={PALM_GROVE.ensIdentity}
            mono
            pending
          />
        </div>

        <div className="px-7 py-5 space-y-3">
          <div className="text-[9px] font-mono uppercase tracking-[0.22em] text-stone-500 font-semibold">
            Lifecycle state (display)
          </div>
          <StatusRow label="Record" value={lc.recordStatusDisplay} />
          <StatusRow label="Validator" value={lc.validatorStatusDisplay} />
          <StatusRow label="Publication" value={lc.publicationStatusDisplay} />
          <StatusRow label="Value" value={lc.valueDisplayStatus} />
          <StatusRow label="ENS" value={lc.ensStatusDisplay} />
          <StatusRow label="Evidence" value={lc.evidenceStatusDisplay} />
        </div>
      </div>

      <div className="px-7 py-4 border-t border-stone-800 bg-neutral-950/70">
        <p className="text-[11px] text-stone-500 leading-relaxed italic max-w-3xl">
          Asset-class-aware display strings. The DB stores the canonical
          enums; this surface renders the CRE-appropriate public labels.
        </p>
      </div>
    </div>
  );
}

function UnreachablePanel({ error }: { error?: string }) {
  return (
    <div className="rounded-xl border border-amber-500/40 bg-amber-500/[0.06] p-6">
      <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-amber-300 font-semibold">
        Platform Unreachable
      </div>
      <div className="mt-2 text-stone-100 text-base font-semibold">
        The proof record could not be loaded from api.defendableos.com.
      </div>
      <p className="mt-2 text-sm text-stone-300 leading-relaxed max-w-2xl">
        The Defendable Record for this deed is normally served by{" "}
        <span className="font-mono text-stone-200">
          GET /api/v1/public/verify/{SLUG}
        </span>{" "}
        on the platform. The static lifecycle preview above continues to
        display the CRE-specific public state strings used in the demo.
      </p>
      {error && (
        <p className="mt-3 text-[11px] font-mono text-stone-500">
          Last attempt: {error}
        </p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={FETCH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded border border-honey-400/55 text-honey-200 hover:bg-honey-400/[0.08] text-xs font-semibold transition-colors"
        >
          Try the API directly ↗
        </a>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded border border-stone-700 text-stone-300 hover:border-stone-600 text-xs transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

function SRow({
  label,
  value,
  mono,
  pending,
}: {
  label: string;
  value: string;
  mono?: boolean;
  pending?: boolean;
}) {
  return (
    <div className="grid grid-cols-[170px_1fr] gap-3 items-baseline py-2.5">
      <span className="text-[9px] uppercase tracking-[0.18em] text-stone-500 font-semibold">
        {label}
      </span>
      <span
        className={[
          mono ? "font-mono text-xs break-all" : "text-sm",
          pending ? "text-amber-300" : "text-stone-100",
        ].join(" ")}
      >
        {value}
      </span>
    </div>
  );
}

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-3 items-baseline">
      <span className="text-[9px] uppercase tracking-[0.18em] text-stone-500 font-semibold">
        {label}
      </span>
      <span className="font-mono text-[11px] text-amber-300 break-all">
        {value}
      </span>
    </div>
  );
}
