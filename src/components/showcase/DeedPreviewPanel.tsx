/**
 * DeedPreviewPanel — the bottom/side deed-record preview.
 *
 * Doctrine-locked language. This is a DRAFT. No issued_at. No final value.
 * Use "Draft generated" not "Issued at". Use PASSED_FOR_DRAFT_PACKAGING.
 */

const DRAFT_DISCLAIMER =
  "Draft evidence and analysis record prepared for review. " +
  "No final valuation, professional appraisal, certification, " +
  "authentication guarantee, deed issuance, or ENS publication has occurred.";

interface DeedPreviewPanelProps {
  deedReference?: string;
  draftGeneratedAt?: string;
  manifestHash?: string;
  validatorReceipt?: string;
  ensIdentity?: string;
}

export function DeedPreviewPanel({
  deedReference = "DDEED-DOV-COMPUTE-000001-v2",
  draftGeneratedAt = "2026-05-22T16:29:45Z",
  manifestHash = "01fdc5920a6ac419d0e510135a92e9e0ee4ac689cb04ac21c74daeba526c6be3",
  validatorReceipt = "f71cc446abe480dcb0e046bb90ddede4a48b46aa411b793171e4932e8f57fd14",
  ensIdentity = "ddeed-dov-compute-000001.swarmbee.defendable.eth",
}: DeedPreviewPanelProps) {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-honey-400/[0.07] to-transparent blur-3xl pointer-events-none" />

      <div className="relative rounded-xl border border-stone-700/60 bg-gradient-to-br from-stone-900/85 to-neutral-950 shadow-2xl overflow-hidden">
        {/* Header band */}
        <div className="px-7 py-5 border-b border-stone-800 bg-neutral-950/70">
          <div className="flex items-center gap-3 mb-2">
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
                Proof of Value Record · Draft
              </div>
            </div>
            <span className="ml-auto inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] text-amber-300 font-semibold border border-amber-500/40 bg-amber-500/[0.08] rounded-full px-2.5 py-1">
              DRAFT · NOT ISSUED · NOT PUBLISHED
            </span>
          </div>
        </div>

        {/* Two-column body */}
        <div className="grid lg:grid-cols-[1.1fr_1fr]">
          {/* Field rows */}
          <div className="px-7 py-5 divide-y divide-stone-800/70 lg:border-r lg:border-stone-800">
            <Row label="Deed reference" value={deedReference} mono />
            <Row label="Draft generated" value={draftGeneratedAt} />
            <Row label="Asset" value="RTX PRO 6000 Blackwell" />
            <Row label="Manifest hash" value={manifestHash} mono />
            <Row label="Validator receipt" value={validatorReceipt} mono />
            <Row label="ENS identity (reserved)" value={ensIdentity} mono />
            <Row label="ENS status" value="RESERVED_NOT_ISSUED" pending />
          </div>

          {/* Lifecycle decomposition */}
          <div className="px-7 py-5 space-y-3">
            <div className="text-[9px] font-mono uppercase tracking-[0.22em] text-stone-500 font-semibold">
              Lifecycle state
            </div>
            <StatusRow label="Record" value="DRAFT_REVIEW_RECORD" pending />
            <StatusRow label="Validator" value="PASSED_FOR_DRAFT_PACKAGING" pending />
            <StatusRow label="Publication" value="NOT_PUBLISHED" pending />
            <StatusRow label="Value" value="WITHHELD_PENDING_VALIDATOR_REVIEW" pending />
            <StatusRow label="ENS" value="RESERVED_NOT_ISSUED" pending />
            <StatusRow label="Human approval" value="REQUIRED" pending />
          </div>
        </div>

        {/* Footer disclaimer */}
        <div className="px-7 py-4 border-t border-stone-800 bg-neutral-950/70">
          <p className="text-[11px] text-stone-500 leading-relaxed italic max-w-3xl">
            {DRAFT_DISCLAIMER}
          </p>
        </div>
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
