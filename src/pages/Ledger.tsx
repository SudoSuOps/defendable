/**
 * /ledger — paste a Defendable hash, see what it represents.
 *
 * Single-input search · streams the lookup to api.defendableos.com.
 * Doctrine: only PUBLIC, preview-published records resolve here. Drafts
 * render with their full status decomposition · no overclaiming.
 *
 * Brand line:
 *   Every Defendable hash resolves at ledger.defendableos.com.
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  KIND_LABEL,
  type LedgerError,
  type LedgerLookupResult,
  classifyInput,
  lookup,
} from "../lib/ledger";

type State =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "result"; data: LedgerLookupResult }
  | { kind: "error"; data: LedgerError };

const SAMPLES = [
  { label: "Record hash", value: "4f2808b8de3cafd9e342e6c88a3b68c5660c0b106337df3c0b9f7f31ae4265dd" },
  { label: "Manifest hash", value: "01fdc5920a6ac419d0e510135a92e9e0ee4ac689cb04ac21c74daeba526c6be3" },
  { label: "Validator receipt", value: "f71cc446abe480dcb0e046bb90ddede4a48b46aa411b793171e4932e8f57fd14" },
  { label: "Deed reference", value: "DDEED-DOV-COMPUTE-000001-v2" },
];

export default function Ledger() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });

  async function go(input: string) {
    const q = input.trim();
    if (!q) {
      setState({ kind: "idle" });
      return;
    }
    setState({ kind: "loading" });
    const out = await lookup(q);
    if ("reason" in out) {
      setState({ kind: "error", data: out });
    } else {
      setState({ kind: "result", data: out });
    }
  }

  // Auto-lookup when the URL carries ?q=<hash> · this is how
  //   ledger.defendableos.com/<hash>
  // resolves (the middleware rewrites the path to /ledger?q=<hash>).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q && q.trim()) {
      setQuery(q.trim());
      go(q.trim());
    }
  }, []);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    go(query);
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      {/* Ambient blueprint grid */}
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
            <span>DefendableOS</span>
            <span className="text-[9px] uppercase tracking-[0.22em] text-stone-500 font-semibold mt-0.5">
              Proof of Value · Ledger
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link to="/" className="text-stone-400 hover:text-stone-200">Home</Link>
          <Link to="/compute" className="text-stone-400 hover:text-stone-200">Compute</Link>
        </nav>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="text-[10px] uppercase tracking-[0.24em] text-honey-400/85 font-semibold">Ledger</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-stone-50">
          Every Defendable hash resolves{" "}
          <span className="font-serif italic font-normal text-honey-300">here</span>.
        </h1>
        <p className="mt-5 text-base text-stone-400 leading-relaxed max-w-2xl">
          Paste any record hash, manifest hash, validator receipt, or deed
          reference. The ledger only matches deeds that have been
          preview-published; private records are intentionally not
          discoverable.
        </p>

        {/* Search box */}
        <form onSubmit={onSubmit} className="mt-10">
          <div className="relative">
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. 4f2808b8de3cafd9...  or  DDEED-DOV-COMPUTE-000001-v2"
              className="w-full bg-stone-950 border border-stone-800 rounded-lg px-5 py-4 pr-32 font-mono text-sm text-stone-100 placeholder:text-stone-600 outline-none focus:border-honey-400/60 focus:ring-1 focus:ring-honey-400/30 transition-colors"
            />
            <button
              type="submit"
              disabled={!query.trim() || state.kind === "loading"}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded border border-honey-400/55 text-honey-200 hover:bg-honey-400/[0.08] text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {state.kind === "loading" ? "Looking up…" : "Look up"}
            </button>
          </div>
          {query.trim() && (
            <div className="mt-2 text-[11px] font-mono text-stone-500">
              {classifyInput(query) === "sha256" && "Looks like a SHA-256 hash · trying record / manifest / validator slots"}
              {classifyInput(query) === "deed_reference" && "Looks like a deed reference"}
              {classifyInput(query) === "invalid" && "Not a SHA-256 or a deed reference yet"}
            </div>
          )}
        </form>

        {/* Sample chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="text-[10px] uppercase tracking-[0.16em] text-stone-500 font-semibold self-center mr-1">try:</span>
          {SAMPLES.map((s) => (
            <button
              key={s.value}
              onClick={() => {
                setQuery(s.value);
                go(s.value);
              }}
              className="text-[11px] font-mono text-stone-400 hover:text-honey-200 border border-stone-800 hover:border-honey-400/40 rounded px-2.5 py-1 transition-colors"
              title={s.value}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mt-10">
          {state.kind === "loading" && (
            <div className="text-sm text-stone-500 font-mono">Querying api.defendableos.com…</div>
          )}

          {state.kind === "error" && <ErrorPanel error={state.data} />}

          {state.kind === "result" && state.data.kind === "NOT_FOUND" && (
            <NotFoundPanel result={state.data} />
          )}

          {state.kind === "result" && state.data.kind !== "NOT_FOUND" && (
            <ResultPanel result={state.data} />
          )}
        </div>

        <footer className="mt-20 pt-8 border-t border-stone-900 text-xs text-stone-500 leading-relaxed">
          The Defendable ledger only resolves deeds that have been
          preview-published. Records that are still private to the issuing
          organization are intentionally not discoverable. All draft records
          render with full lifecycle decomposition · we never claim issuance
          we have not earned.
        </footer>
      </main>
    </div>
  );
}

function ResultPanel({ result }: { result: LedgerLookupResult }) {
  const lc = result.lifecycle;
  const isDraft = lc?.is_draft ?? true;

  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-honey-400/[0.06] to-transparent blur-3xl pointer-events-none" />
      <div className="relative rounded-xl border border-stone-700/70 bg-gradient-to-br from-stone-900/85 to-neutral-950 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-7 py-5 border-b border-stone-800 bg-neutral-950/70">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-honey-400/80 font-semibold leading-none">
                {KIND_LABEL[result.kind]}
              </span>
              <span className="text-stone-100 font-semibold tracking-tight text-lg mt-1.5">
                {result.summary}
              </span>
            </div>
            <span
              className={`ml-auto inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] font-semibold border rounded-full px-2.5 py-1 ${
                isDraft
                  ? "text-amber-300 border-amber-500/40 bg-amber-500/[0.08]"
                  : "text-emerald-300 border-emerald-500/40 bg-emerald-500/[0.08]"
              }`}
            >
              {isDraft ? "DRAFT · NOT ISSUED · NOT PUBLISHED" : "ISSUED · PUBLISHED"}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="grid lg:grid-cols-[1fr_1fr]">
          <div className="px-7 py-5 divide-y divide-stone-800/70 lg:border-r lg:border-stone-800">
            <Row label="Deed reference" value={result.deed_reference ?? "—"} mono />
            <Row label="Asset class" value={result.asset_class ?? "—"} />
            <Row label="Asset reference" value={result.asset_reference ?? "—"} mono />
            <Row label="Matched hash" value={result.matched_hash} mono small />
            {result.manifest_version && <Row label="Manifest version" value={`v${result.manifest_version}`} />}
            {result.receipt_id && (
              <Row label="Receipt id" value={result.receipt_id} mono small />
            )}
            {result.integrity && (
              <Row
                label="Integrity"
                value={`${result.integrity.hash_algorithm} · ${result.integrity.canonicalization}`}
                mono
                small
              />
            )}
          </div>

          {lc && (
            <div className="px-7 py-5 space-y-3">
              <div className="text-[9px] font-mono uppercase tracking-[0.22em] text-stone-500 font-semibold">
                Lifecycle state
              </div>
              <StatusRow label="Record" value={lc.record_status} pending={isDraft} />
              <StatusRow label="Validator" value={lc.validator_status} pending={isDraft} />
              <StatusRow label="Publication" value={lc.publication_status} pending={isDraft} />
              <StatusRow label="Value" value={lc.value_status} pending={isDraft} />
              <StatusRow label="ENS" value={lc.ens_status} pending={isDraft} />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-7 py-4 border-t border-stone-800 bg-neutral-950/70 flex flex-wrap gap-3 items-center justify-end">
          {result.showcase_url && (
            <Link
              to={result.showcase_url}
              className="text-xs text-stone-400 hover:text-stone-200 border border-stone-700 hover:border-stone-600 rounded px-3 py-1.5 transition-colors"
            >
              Open showcase →
            </Link>
          )}
          {result.verify_url && (
            <Link
              to={result.verify_url}
              className="text-xs text-honey-300 hover:text-honey-200 border border-honey-400/45 hover:bg-honey-400/[0.08] rounded px-3 py-1.5 font-semibold transition-colors"
            >
              Open public preview →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function NotFoundPanel({ result }: { result: LedgerLookupResult }) {
  return (
    <div className="rounded-xl border border-stone-800 bg-stone-900/60 p-6">
      <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold">Not found</div>
      <div className="text-stone-300 mt-2 text-sm">{result.summary}</div>
      <div className="text-[11px] text-stone-500 mt-3 font-mono break-all">
        query: {result.matched_hash}
      </div>
    </div>
  );
}

function ErrorPanel({ error }: { error: LedgerError }) {
  return (
    <div className="rounded-xl border border-amber-500/40 bg-amber-500/[0.06] p-6">
      <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300 font-semibold">
        {error.reason === "network"
          ? "Network"
          : error.reason === "platform_unreachable"
            ? "Platform unreachable"
            : "Invalid input"}
      </div>
      <div className="text-stone-200 mt-2 text-sm">{error.message}</div>
    </div>
  );
}

function Row({
  label, value, mono, small,
}: { label: string; value: string; mono?: boolean; small?: boolean }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-3 items-baseline py-2.5">
      <span className="text-[9px] uppercase tracking-[0.18em] text-stone-500 font-semibold">{label}</span>
      <span
        className={[
          mono ? "font-mono break-all" : "",
          small ? "text-[11px]" : "text-sm",
          "text-stone-100",
        ].join(" ")}
      >
        {value}
      </span>
    </div>
  );
}

function StatusRow({
  label, value, pending,
}: { label: string; value: string; pending: boolean }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-3 items-baseline">
      <span className="text-[9px] uppercase tracking-[0.18em] text-stone-500 font-semibold">{label}</span>
      <span className={`font-mono text-[11px] ${pending ? "text-amber-300" : "text-emerald-300"}`}>
        {value}
      </span>
    </div>
  );
}
