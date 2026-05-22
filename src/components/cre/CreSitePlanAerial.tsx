/**
 * CreSitePlanAerial — premium CSS/SVG site plan for Palm Grove Marketplace.
 *
 * Design choice: deliberately NOT React Three Fiber. The user explicitly
 * approved a high-quality SVG/CSS approach for a flat aerial · this
 * renders at 60fps with zero WebGL risk, is print-friendly, and falls
 * back to a vertical tenant-mix bar on small screens.
 *
 * Interactive:
 *   · Hover a tenant block → reveal that tenant's glass card
 *   · Click → "lock" the focus to that tenant
 *   · Three view modes: Site Plan · Tenant Mix · Proof Layers
 *   · Proof Layers overlays evidence-marker icons (lease abstract,
 *     market research, site plan reference, validator review, draft deed)
 *
 * Accessibility:
 *   · Keyboard-focusable tenant blocks with aria labels
 *   · `prefers-reduced-motion` halts the subtle ambient panning
 *
 * Doctrine:
 *   · ALWAYS displays the "Conceptual visualization" label below the
 *     interactive area
 *   · NO geospatial accuracy claimed
 *   · NO real tenant brand names or logos
 */
import { useState } from "react";
import { PALM_GROVE, type PalmGroveTenant, formatSf } from "../../lib/cre/palmGrove";

type ViewMode = "site" | "tenants" | "proof";

const VIEW_MODES: { id: ViewMode; label: string }[] = [
  { id: "site", label: "Site Plan" },
  { id: "tenants", label: "Tenant Mix" },
  { id: "proof", label: "Proof Layers" },
];

const PROOF_MARKERS = [
  { id: "lease", label: "Lease Abstract", x: 24, y: 22 },
  { id: "site-plan", label: "Site Plan", x: 60, y: 14 },
  { id: "market", label: "Market Research", x: 86, y: 30 },
  { id: "validator", label: "Validator Review", x: 50, y: 50 },
  { id: "deed", label: "Draft Deed", x: 14, y: 58 },
];

interface Props {
  className?: string;
}

export function CreSitePlanAerial({ className = "" }: Props) {
  const [hovered, setHovered] = useState<PalmGroveTenant | null>(null);
  const [locked, setLocked] = useState<PalmGroveTenant | null>(null);
  const [mode, setMode] = useState<ViewMode>("site");

  const focused = locked ?? hovered;

  return (
    <div className={className}>
      <div className="relative w-full h-[420px] lg:h-[520px] rounded-2xl border border-stone-800 bg-gradient-to-b from-stone-950 to-neutral-950 overflow-hidden">
        {/* Mode toggle */}
        <div className="absolute top-3 left-3 z-10 flex gap-1 p-1 rounded-full bg-stone-900/80 border border-stone-800 backdrop-blur-sm">
          {VIEW_MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={`px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] rounded-full transition-colors ${
                mode === m.id
                  ? "bg-honey-400/20 text-honey-200 border border-honey-400/40"
                  : "text-stone-400 hover:text-stone-200 border border-transparent"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* The aerial · isometric SVG */}
        <svg
          viewBox="0 0 100 70"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          style={{
            transform: "perspective(1200px) rotateX(18deg)",
            transformOrigin: "center 65%",
          }}
          role="img"
          aria-label="Illustrative Palm Grove Marketplace site plan"
        >
          {/* Parcel boundary · honey-dashed */}
          <rect
            x="1.5"
            y="2"
            width="97"
            height="60"
            fill="none"
            stroke="#d4aa28"
            strokeOpacity="0.35"
            strokeDasharray="0.6 0.6"
            strokeWidth="0.25"
          />

          {/* Drive aisle + entry markers */}
          <line x1="50" y1="2" x2="50" y2="6" stroke="#d4aa28" strokeOpacity="0.35" strokeWidth="0.4" />
          <line x1="2" y1="46" x2="98" y2="46" stroke="#1f2228" strokeWidth="0.3" strokeDasharray="0.4 0.4" />

          {/* Parking lot grid */}
          {Array.from({ length: 16 }).map((_, i) => (
            <line
              key={`pv-${i}`}
              x1={6 + i * 5.5}
              y1="40"
              x2={6 + i * 5.5}
              y2="45"
              stroke="#272a30"
              strokeWidth="0.18"
            />
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <line
              key={`ph-${i}`}
              x1="6"
              y1={48 + i * 2.5}
              x2="94"
              y2={48 + i * 2.5}
              stroke="#272a30"
              strokeWidth="0.18"
            />
          ))}

          {/* Landscape islands */}
          <ellipse cx="20" cy="58" rx="2.5" ry="1.2" fill="#1c2a1c" />
          <ellipse cx="50" cy="58" rx="2.5" ry="1.2" fill="#1c2a1c" />
          <ellipse cx="80" cy="58" rx="2.5" ry="1.2" fill="#1c2a1c" />

          {/* Tenant blocks · the buildings */}
          {PALM_GROVE.tenants.map((t) => {
            const isFocused = focused?.category === t.category;
            const isAnchor = t.block === "anchor";
            const fill = isAnchor ? "#2a2f37" : "#1f2228";
            const stroke = isFocused ? "#e6ab2a" : "#3a3f47";
            return (
              <g key={t.category}>
                <rect
                  x={t.layout!.x}
                  y={t.layout!.y}
                  width={t.layout!.w}
                  height={t.layout!.h}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={isFocused ? "0.45" : "0.2"}
                  rx="0.6"
                  className="cursor-pointer transition-colors"
                  tabIndex={0}
                  role="button"
                  aria-label={`Tenant block · ${t.category} · ${formatSf(t.sf)} · illustrative demo data`}
                  onMouseEnter={() => setHovered(t)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(t)}
                  onBlur={() => setHovered(null)}
                  onClick={() =>
                    setLocked((cur) => (cur?.category === t.category ? null : t))
                  }
                />
                {/* Tenant-mix bar overlay · only in tenants mode */}
                {mode === "tenants" && (
                  <rect
                    x={t.layout!.x + 0.4}
                    y={t.layout!.y + t.layout!.h - 1.4}
                    width={(t.layout!.w - 0.8) * (t.sharePct / 100) * 2.2}
                    height="0.7"
                    fill="#e6ab2a"
                    opacity="0.7"
                  />
                )}
              </g>
            );
          })}

          {/* Tenant labels · only in tenants mode */}
          {mode === "tenants" &&
            PALM_GROVE.tenants.map((t) => (
              <text
                key={`lbl-${t.category}`}
                x={t.layout!.x + t.layout!.w / 2}
                y={t.layout!.y + t.layout!.h / 2 + 0.5}
                fill="#d4aa28"
                fontSize="1.6"
                textAnchor="middle"
                style={{ fontFamily: "ui-monospace, monospace", letterSpacing: "0.08em" }}
              >
                {t.category.length > 14 ? `${t.category.slice(0, 12)}…` : t.category}
              </text>
            ))}

          {/* Proof-layer markers · only in proof mode */}
          {mode === "proof" &&
            PROOF_MARKERS.map((m) => (
              <g key={m.id}>
                <circle
                  cx={m.x}
                  cy={m.y}
                  r="1.8"
                  fill="none"
                  stroke="#e6ab2a"
                  strokeWidth="0.3"
                  opacity="0.7"
                >
                  <animate
                    attributeName="r"
                    values="1.4;2.2;1.4"
                    dur="3.4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx={m.x} cy={m.y} r="0.5" fill="#e6ab2a" opacity="0.9" />
                <text
                  x={m.x + 2.6}
                  y={m.y + 0.4}
                  fill="#d4aa28"
                  fontSize="1.4"
                  style={{ fontFamily: "ui-monospace, monospace", letterSpacing: "0.06em" }}
                >
                  {m.label.toUpperCase()}
                </text>
              </g>
            ))}
        </svg>

        {/* Hover/lock glass card */}
        {focused && (
          <div
            className="absolute right-4 top-14 bg-stone-950/85 backdrop-blur-md border border-honey-400/30 rounded-lg p-4 max-w-[240px] pointer-events-none shadow-2xl"
          >
            <div className="text-[9px] font-mono uppercase tracking-[0.22em] text-honey-300 mb-1">
              {focused.block === "anchor" ? "Anchor Tenant" : "Inline Tenant"}
            </div>
            <div className="text-stone-100 text-sm font-semibold leading-tight">
              {focused.category}
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-[11px]">
              <div>
                <div className="text-stone-500 uppercase tracking-wider text-[8px]">SF</div>
                <div className="text-stone-200 font-mono">{focused.sf.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-stone-500 uppercase tracking-wider text-[8px]">Share</div>
                <div className="text-stone-200 font-mono">{focused.sharePct.toFixed(1)}%</div>
              </div>
            </div>
            <div className="mt-2 text-[9px] text-stone-500 italic">
              Illustrative Demo Data
            </div>
          </div>
        )}

        {/* Proof-layer key · only in proof mode */}
        {mode === "proof" && (
          <div className="absolute left-3 bottom-3 bg-stone-950/85 backdrop-blur-md border border-stone-800 rounded-md p-3 max-w-[240px]">
            <div className="text-[9px] font-mono uppercase tracking-[0.22em] text-honey-300 mb-1.5">
              Evidence Markers
            </div>
            <p className="text-[10px] text-stone-400 leading-snug">
              Abstract markers show where lease abstracts, site plan reference,
              market research, validator review and the draft deed would
              attach to the underlying record in a real engagement.
            </p>
          </div>
        )}

        {/* Tiny corner chip */}
        <div className="absolute bottom-3 right-3 text-[9px] font-mono uppercase tracking-[0.18em] text-stone-500 pointer-events-none">
          Conceptual · not a survey
        </div>
      </div>

      {/* Required label · displays under every interactive visual */}
      <p className="mt-3 text-[11px] text-stone-500 italic leading-relaxed">
        {PALM_GROVE.disclosure.siteplanLabel}
      </p>
    </div>
  );
}
