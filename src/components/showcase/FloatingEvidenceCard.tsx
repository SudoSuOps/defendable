/**
 * FloatingEvidenceCard — a single glass UI panel that sits next to the 3D
 * scene. Cards are HTML, not in-canvas, so text stays crisp and accessible.
 *
 * Each card has a small honey-gold eyebrow label, a title, and a tight
 * factual body. Optional `lines` for status-style decomposition (label · value).
 */
import type { CSSProperties } from "react";

type Tone = "neutral" | "ok" | "pending";

interface FloatingEvidenceCardProps {
  eyebrow: string;
  title: string;
  body?: string;
  lines?: Array<{ label: string; value: string; tone?: Tone }>;
  /** Absolute positioning · use any of top/right/bottom/left. */
  style?: CSSProperties;
  /** Subtle parallax offset (0..1) of the cursor · 0.04 yields ~12px shift. */
  parallax?: { x: number; y: number; strength?: number };
  /** Optional click handler — used to focus a card to the front. */
  onClick?: () => void;
  /** Active state · adds a stronger border + glow. */
  active?: boolean;
  className?: string;
}

export function FloatingEvidenceCard({
  eyebrow,
  title,
  body,
  lines,
  style,
  parallax,
  onClick,
  active = false,
  className,
}: FloatingEvidenceCardProps) {
  const strength = parallax?.strength ?? 0.04;
  const tx = parallax ? `${(parallax.x * 100 * strength).toFixed(2)}px` : "0px";
  const ty = parallax ? `${(parallax.y * 100 * strength).toFixed(2)}px` : "0px";

  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={{
        ...style,
        transform: `translate3d(${tx}, ${ty}, 0)`,
      }}
      className={[
        "absolute backdrop-blur-md rounded-xl px-5 py-4 select-none",
        "transition-all duration-300 ease-out",
        active
          ? "border border-honey-400/55 bg-stone-900/72 shadow-[0_24px_60px_-24px_rgba(212,170,40,0.35)]"
          : "border border-stone-700/40 bg-stone-900/55 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.6)]",
        "hover:border-honey-400/40 hover:bg-stone-900/70",
        onClick ? "cursor-pointer" : "",
        className ?? "",
      ].join(" ")}
    >
      <div className="text-[9px] font-mono uppercase tracking-[0.24em] text-honey-300/80 font-semibold">
        {eyebrow}
      </div>
      <div className="text-stone-100 text-sm font-semibold tracking-tight mt-1.5 leading-tight">
        {title}
      </div>
      {body && (
        <div className="text-xs text-stone-400 mt-2 leading-relaxed">{body}</div>
      )}
      {lines && lines.length > 0 && (
        <div className="mt-3 space-y-1.5">
          {lines.map((l, i) => (
            <div key={i} className="grid grid-cols-[110px_1fr] gap-2 text-[11px]">
              <span className="text-[9px] uppercase tracking-[0.16em] text-stone-500 font-semibold">
                {l.label}
              </span>
              <span
                className={[
                  "font-mono leading-snug",
                  l.tone === "ok" ? "text-emerald-300" : "",
                  l.tone === "pending" ? "text-amber-300" : "",
                  !l.tone || l.tone === "neutral" ? "text-stone-200" : "",
                ].join(" ")}
              >
                {l.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
