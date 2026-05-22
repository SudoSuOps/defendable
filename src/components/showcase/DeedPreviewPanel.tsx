/**
 * DeedPreviewPanel — deed-record preview · doctrine-locked.
 *
 * Data-driven via ShowcaseProps. Honors isDraft for badge wording, label
 * text ("Draft generated" vs "Issued at"), disclaimer visibility, etc.
 */
import type { ShowcaseProps } from "../../lib/showcaseBridge";

const DRAFT_DISCLAIMER =
  "Draft evidence and analysis record prepared for review. " +
  "No final valuation, professional appraisal, certification, " +
  "authentication guarantee, deed issuance, or ENS publication has occurred.";

type Props = Pick<
  ShowcaseProps,
  | "deedReference"
  | "draftGeneratedAt"
  | "manifestSha256"
  | "validatorReceiptSha256"
  | "validatorStatus"
  | "ensIdentity"
  | "ensStatus"
  | "recordStatus"
  | "publicationStatus"
  | "valueStatus"
  | "isDraft"
  | "assetName"
  | "assetClass"
  | "operatorAskPriceUsd"
  | "operatorAskCurrency"
  | "operatorAskLabel"
  | "operatorAskDoctrineNote"
>;

export function DeedPreviewPanel({
  deedReference,
  draftGeneratedAt,
  manifestSha256,
  validatorReceiptSha256,
  validatorStatus,
  ensIdentity,
  ensStatus,
  recordStatus,
  publicationStatus,
  valueStatus,
  isDraft,
  assetName,
  assetClass,
  operatorAskPriceUsd,
  operatorAskCurrency,
  operatorAskLabel,
  operatorAskDoctrineNote,
}: Props) {
  const hasAsk = typeof operatorAskPriceUsd === "number" && operatorAskPriceUsd > 0;
  const askDisplay = hasAsk
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: operatorAskCurrency || "USD",
        maximumFractionDigits: 0,
      }).format(operatorAskPriceUsd)
    : null;
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-honey-400/[0.07] to-transparent blur-3xl pointer-events-none" />

      <div className="relative rounded-xl border border-stone-700/60 bg-gradient-to-br from-stone-900/85 to-neutral-950 shadow-2xl overflow-hidden">
        {/* Header band */}
        <div className="px-7 py-5 border-b border-stone-800 bg-neutral-950/70">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="inline-flex w-7 h-7 rounded border border-honey-400/40 items-center justify-center text-honey-300">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M3 2h6l3 3v8H3z" />
                <path d="M5 6h5M5 8h5M5 10h3" strokeWidth="1" opacity="0.7" />
              </svg>
            </span>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-honey-400/80 font-semibold leading-none">
                Defendable Deed
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-stone-400 font-semibold mt-1.5">
                Proof of Value Record{isDraft ? " · Draft" : ""}
              </div>
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

        {/* Operator asking · only when set · doctrine label always visible */}
        {hasAsk && (
          <div className="px-7 py-5 border-b border-stone-800 bg-gradient-to-br from-honey-500/[0.06] to-transparent">
            <div className="flex items-baseline gap-4 flex-wrap">
              <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-honey-400/80 font-semibold">
                {operatorAskLabel || "Operator asking"}
              </div>
              <div className="font-serif text-3xl md:text-4xl text-honey-200 tracking-tight leading-none">
                {askDisplay}
              </div>
              <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-stone-500">
                {operatorAskCurrency} · operator claim only
              </div>
            </div>
            <p className="mt-3 text-[11px] text-stone-500 leading-relaxed max-w-3xl italic">
              {operatorAskDoctrineNote}
            </p>
          </div>
        )}

        {/* Two-column body */}
        <div className="grid lg:grid-cols-[1.1fr_1fr]">
          <div className="px-7 py-5 divide-y divide-stone-800/70 lg:border-r lg:border-stone-800">
            <Row label="Deed reference" value={deedReference} mono />
            <Row label={isDraft ? "Draft generated" : "Issued at"} value={draftGeneratedAt} />
            <Row label="Asset" value={assetName} />
            <Row label="Asset class" value={assetClass} />
            <Row label="Manifest hash" value={manifestSha256} mono />
            <Row label="Validator receipt" value={validatorReceiptSha256} mono />
            <Row label={isDraft ? "ENS identity (reserved)" : "ENS identity"} value={ensIdentity} mono />
            <Row label="ENS status" value={ensStatus} pending />
          </div>

          <div className="px-7 py-5 space-y-3">
            <div className="text-[9px] font-mono uppercase tracking-[0.22em] text-stone-500 font-semibold">
              Lifecycle state
            </div>
            <StatusRow label="Record" value={recordStatus} pending={isDraft} />
            <StatusRow label="Validator" value={validatorStatus} pending={isDraft} />
            <StatusRow label="Publication" value={publicationStatus} pending={isDraft} />
            <StatusRow label="Value" value={valueStatus} pending={isDraft} />
            <StatusRow label="ENS" value={ensStatus} pending={isDraft} />
            <StatusRow label="Human approval" value={isDraft ? "REQUIRED" : "GRANTED"} pending={isDraft} />
          </div>
        </div>

        {isDraft && (
          <div className="px-7 py-4 border-t border-stone-800 bg-neutral-950/70">
            <p className="text-[11px] text-stone-500 leading-relaxed italic max-w-3xl">
              {DRAFT_DISCLAIMER}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({
  label, value, mono, pending,
}: { label: string; value: string; mono?: boolean; pending?: boolean }) {
  return (
    <div className="grid grid-cols-[170px_1fr] gap-3 items-baseline py-2.5">
      <span className="text-[9px] uppercase tracking-[0.18em] text-stone-500 font-semibold">{label}</span>
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

function StatusRow({
  label, value, pending = true,
}: { label: string; value: string; pending?: boolean }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-3 items-baseline">
      <span className="text-[9px] uppercase tracking-[0.18em] text-stone-500 font-semibold">{label}</span>
      <span className={`font-mono text-[11px] ${pending ? "text-amber-300" : "text-emerald-300"}`}>
        {value}
      </span>
    </div>
  );
}
