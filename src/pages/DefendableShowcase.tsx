/**
 * /showcase/:slug — per-asset showcase · data-driven from the platform API.
 *
 * Fetches a public deed via /api/v1/public/verify/{slug}, maps it into
 * ShowcaseProps with mapPublicRecordToProps(), and renders the same hero
 * composition used by the static /compute demo · doctrine-locked draft
 * language travels through correctly.
 *
 * States rendered:
 *   loading      → "Fetching record · resolving evidence packet"
 *   not found    → graceful "we don't see this publicly" panel
 *   unreachable  → platform-offline state (no fake data)
 *   ok           → full hero with bridge-mapped props
 */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { DefendableComputeHero } from "../components/showcase/DefendableComputeHero";
import {
  fetchPublicRecord,
  mapPublicRecordToProps,
  type PublicRecord,
  type ShowcaseProps,
} from "../lib/showcaseBridge";

type State =
  | { kind: "loading" }
  | { kind: "ok"; props: ShowcaseProps; record: PublicRecord }
  | { kind: "not_found" }
  | { kind: "unreachable" };

export default function DefendableShowcase() {
  const { slug = "" } = useParams<{ slug: string }>();
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    let cancelled = false;
    if (!slug) {
      setState({ kind: "not_found" });
      return;
    }
    (async () => {
      try {
        const record = await fetchPublicRecord(slug);
        if (cancelled) return;
        if (!record) {
          setState({ kind: "not_found" });
          return;
        }
        setState({ kind: "ok", props: mapPublicRecordToProps(record), record });
      } catch {
        if (!cancelled) setState({ kind: "unreachable" });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

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
            <span>DefendableOS</span>
            <span className="text-[9px] uppercase tracking-[0.22em] text-stone-500 font-semibold mt-0.5">
              Proof of Value · Showcase
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link to="/" className="text-stone-400 hover:text-stone-200">Home</Link>
          <Link to="/compute" className="text-stone-400 hover:text-stone-200">Compute</Link>
          <Link to="/ledger" className="text-stone-400 hover:text-stone-200">Ledger</Link>
          {slug && (
            <Link
              to={`/verify/${slug}`}
              className="text-honey-300 font-semibold hover:text-honey-200"
            >
              Open public preview →
            </Link>
          )}
        </nav>
      </header>

      <main className="relative z-10">
        {state.kind === "loading" && <LoadingState slug={slug} />}
        {state.kind === "not_found" && <NotFoundState slug={slug} />}
        {state.kind === "unreachable" && <UnreachableState slug={slug} />}
        {state.kind === "ok" && <DefendableComputeHero {...state.props} />}
      </main>

      <footer className="relative z-10 px-6 py-8 border-t border-stone-900/80 mt-12">
        <div className="max-w-7xl mx-auto text-xs text-stone-500 leading-relaxed">
          © 2026 Swarm and Bee LLC · DBA Swarm & Bee AI · D-U-N-S 138652395.
          DefendableOS™, Proof of Value™, Validate the Validator™, AIOV™ and
          Defendable Deed™ are unregistered trademarks.
        </div>
      </footer>
    </div>
  );
}

function LoadingState({ slug }: { slug: string }) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold font-mono">
        Resolving
      </div>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-stone-100">
        Fetching record…
      </h1>
      <p className="mt-4 text-sm text-stone-400 leading-relaxed font-mono">
        Slug · {slug}
      </p>
      <div className="mt-8 h-1 w-full bg-stone-900 rounded overflow-hidden">
        <div className="h-1 w-1/3 bg-honey-400/60 animate-pulse" />
      </div>
    </section>
  );
}

function NotFoundState({ slug }: { slug: string }) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold font-mono">
        Not found
      </div>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-stone-100">
        No public record matches this slug.
      </h1>
      <p className="mt-4 text-sm text-stone-400 leading-relaxed">
        Records that have not been preview-published are intentionally not
        discoverable through the showcase. If you have the slug from a deed
        owner, ask them to confirm the preview has been published.
      </p>
      <p className="mt-2 text-xs text-stone-600 font-mono">Slug · {slug}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/ledger"
          className="inline-flex items-center gap-2 px-5 py-3 rounded border border-stone-700 text-stone-300 hover:border-stone-600 text-sm transition-colors"
        >
          Try the ledger →
        </Link>
        <Link
          to="/compute"
          className="inline-flex items-center gap-2 px-5 py-3 rounded border border-honey-400/55 text-honey-200 hover:bg-honey-400/[0.08] text-sm font-semibold transition-colors"
        >
          See the compute demo →
        </Link>
      </div>
    </section>
  );
}

function UnreachableState({ slug }: { slug: string }) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300 font-semibold font-mono">
        Platform unreachable
      </div>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-stone-100">
        Could not reach the DefendableOS platform.
      </h1>
      <p className="mt-4 text-sm text-stone-400 leading-relaxed">
        The showcase is a live render against the platform API at
        <span className="font-mono"> api.defendableos.com</span>. Try again in a moment.
      </p>
      <p className="mt-2 text-xs text-stone-600 font-mono">Slug · {slug}</p>
    </section>
  );
}
