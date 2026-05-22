/**
 * ProofHeader — the top headline + supporting copy + CTAs.
 *
 * Microcopy lifted from the spec verbatim. Draft-safe.
 */
export function ProofHeader() {
  return (
    <div className="max-w-4xl">
      <div className="text-[10px] uppercase tracking-[0.24em] text-honey-400/85 font-semibold">
        Proof of Value
      </div>
      <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-stone-50">
        Proof of Value for{" "}
        <span className="font-serif italic font-normal text-honey-300">AI Hardware</span>.
      </h1>
      <p className="mt-7 text-base md:text-lg text-stone-300 leading-relaxed max-w-3xl">
        DefendableOS transforms GPUs, servers, and AI infrastructure into
        evidence-backed, market-ready asset records — with validator receipts,
        manifest integrity, and draft deed packaging designed to travel with
        the asset.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-3">
        <a
          href="/verify/ddeed-dov-compute-000001-v2"
          className="inline-flex items-center gap-2 px-5 py-3 rounded border border-honey-400/55 text-honey-200 hover:bg-honey-400/[0.08] text-sm font-semibold tracking-tight transition-colors"
        >
          Explore the record →
        </a>
        <a
          href="mailto:build@swarmandbee.ai?subject=Defendable%20Compute%20pilot"
          className="inline-flex items-center gap-2 px-5 py-3 rounded border border-stone-700 text-stone-300 hover:border-stone-600 hover:text-stone-100 text-sm transition-colors"
        >
          Request a compute pilot
        </a>
      </div>
      <p className="mt-8 text-xs text-stone-500 italic max-w-2xl leading-relaxed">
        AIOV gives the opinion. DefendableOS proves the value. Records on this
        page are draft previews · no final valuation, professional appraisal,
        certification, deed issuance, or ENS publication has occurred.
      </p>
    </div>
  );
}
