// /verify/:slug · public verification stub for crawlable deed pages.
//
// SSR middleware (functions/_middleware.ts) injects the real per-slug
// content for crawlers via functions/_lib/seo-content.ts buildVerifyContent().
// This React page renders the same shape for human visitors arriving
// without server-side enrichment (e.g., direct navigation).

import { useParams } from "react-router-dom";
import { Footer, Header } from "../components/SiteShell";

export default function VerifyDeed() {
  const { slug = "" } = useParams<{ slug: string }>();
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">DEFENDABLE VERIFY · PUBLIC PROOF</div>
        <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 leading-[1.05]">
          Defendable Verify ·{" "}
          <span className="font-mono text-amber-300 text-2xl md:text-3xl">{slug || "—"}</span>
        </h1>

        <p className="mt-6 text-base text-stone-300 leading-relaxed">
          Public verification page for a Defendable record. Renders the
          doctrine-correct lifecycle status fields:
          <strong className="text-stone-100"> record_status</strong> ·
          <strong className="text-stone-100"> validator_status</strong> ·
          <strong className="text-stone-100"> publication_status</strong> ·
          <strong className="text-stone-100"> value_status</strong> ·
          <strong className="text-stone-100"> ens_status</strong>.
          <code className="font-mono text-amber-300"> issued_at</code> is{" "}
          <em className="font-serif text-stone-200">null</em> until a draft
          clears every issuance prerequisite.
        </p>

        <div className="mt-10 rounded-xl border border-stone-800 bg-neutral-950/60 px-6 py-6 font-mono text-sm space-y-2">
          <div className="flex justify-between"><span className="text-stone-500">record_status</span><span className="text-amber-300">DRAFT_REVIEW_RECORD</span></div>
          <div className="flex justify-between"><span className="text-stone-500">validator_status</span><span className="text-stone-300">PASSED_FOR_DRAFT_PACKAGING</span></div>
          <div className="flex justify-between"><span className="text-stone-500">publication_status</span><span className="text-stone-300">NOT_PUBLISHED</span></div>
          <div className="flex justify-between"><span className="text-stone-500">value_status</span><span className="text-stone-300">WITHHELD_PENDING_VALIDATOR_REVIEW</span></div>
          <div className="flex justify-between"><span className="text-stone-500">ens_status</span><span className="text-stone-300">RESERVED_NOT_ISSUED</span></div>
        </div>

        <p className="mt-8 text-sm text-stone-400 leading-relaxed">
          The <code className="font-mono text-amber-300">record_hash</code> is
          SHA-256 over <code className="font-mono text-stone-300">DEFENDABLE_CANONICAL_JSON_V1</code>.
          The same canonical evidence backs the cinematic{" "}
          <a href={`/showcase/${slug}`} className="text-amber-300 underline hover:text-amber-200">/showcase/{slug}</a>{" "}
          surface. Lookup by deed reference, manifest hash, validator receipt, or full record hash at{" "}
          <a href="/ledger" className="text-amber-300 underline hover:text-amber-200">/ledger</a>.
        </p>

        <p className="mt-8 text-xs text-stone-500 italic leading-relaxed">
          For full schema details see{" "}
          <a href="https://docs.defendableos.com/deed" className="text-amber-300/80 hover:text-amber-300">docs.defendableos.com/deed</a>{" "}
          · for the doctrine see{" "}
          <a href="/doctrine" className="text-amber-300/80 hover:text-amber-300">/doctrine</a>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
