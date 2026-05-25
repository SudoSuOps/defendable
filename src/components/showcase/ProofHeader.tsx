/**
 * ProofHeader — top headline + supporting copy + CTAs.
 *
 * Data-driven via bridge props · same component renders the compute
 * headline, the CRE headline, the equipment headline, etc.
 */
import type { ShowcaseProps } from "../../lib/showcaseBridge";

type Props = Pick<
  ShowcaseProps,
  | "headlineEyebrow"
  | "headlineMain"
  | "headlineAccent"
  | "supportingCopy"
  | "exploreRecordHref"
  | "pilotMailtoSubject"
>;

export function ProofHeader({
  headlineEyebrow,
  headlineMain,
  headlineAccent,
  supportingCopy,
  exploreRecordHref,
  pilotMailtoSubject,
}: Props) {
  // Split the headline so the accent phrase gets serif-italic styling.
  // If the accent isn't found in the headline, render the headline whole.
  const idx = headlineMain.indexOf(headlineAccent);
  const before = idx >= 0 ? headlineMain.slice(0, idx) : headlineMain;
  const after = idx >= 0 ? headlineMain.slice(idx + headlineAccent.length) : "";

  return (
    <div className="max-w-4xl">
      <div className="text-[10px] uppercase tracking-[0.24em] text-honey-400/85 font-semibold">
        {headlineEyebrow}
      </div>
      <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-stone-50">
        {before}
        {idx >= 0 && (
          <span className="font-serif italic font-normal text-honey-300">{headlineAccent}</span>
        )}
        {after}.
      </h1>
      <p className="mt-7 text-base md:text-lg text-stone-300 leading-relaxed max-w-3xl">
        {supportingCopy}
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-3">
        <a
          href={exploreRecordHref}
          className="inline-flex items-center gap-2 px-5 py-3 rounded border border-honey-400/55 text-honey-200 hover:bg-honey-400/[0.08] text-sm font-semibold tracking-tight transition-colors"
        >
          Explore the record →
        </a>
        <a
          href={`mailto:build@swarmandbee.ai?subject=${pilotMailtoSubject}`}
          className="inline-flex items-center gap-2 px-5 py-3 rounded border border-stone-700 text-stone-300 hover:border-stone-600 hover:text-stone-100 text-sm transition-colors"
        >
          Request a pilot
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
