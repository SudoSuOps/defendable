/**
 * CanvasErrorBoundary — keeps the page alive when WebGL / three.js fails.
 *
 * Without this, a single three.js context error (no WebGL, blocked by
 * extension, low-power-mode iOS, etc.) bubbles up and crashes the whole
 * React hero. With it, we fall back to a marketing-grade CSS render that
 * carries the same information density as the 3D scene.
 */
import { Component, ReactNode } from "react";

interface Props {
  fallback: ReactNode;
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class CanvasErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    if (typeof console !== "undefined") {
      console.warn("[GpuScene] WebGL/Three.js render failed · falling back.", error);
    }
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

/** Synchronous WebGL availability probe · runs once on first render. */
export function hasWebGL(): boolean {
  if (typeof document === "undefined") return false; // SSR
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      (canvas.getContext as any)("experimental-webgl")
    );
  } catch {
    return false;
  }
}

interface StaticGpuFallbackProps {
  /** Same data-bag the 3D plaque consumes · keeps the fallback in sync */
  plaque?: {
    deedReference: string;
    statusLine: string;
    recordHashShort: string;
    operatorAskDisplay?: string | null;
  };
}

/**
 * StaticGpuFallback — marketing-grade CSS render of the RTX PRO 6000 +
 * brass museum plaque, used when WebGL is unavailable. Sits inside the
 * same 560-640px canvas frame as the 3D scene so layout stays identical.
 */
export function StaticGpuFallback({ plaque }: StaticGpuFallbackProps = {}) {
  const deedReference = plaque?.deedReference ?? "DDEED-DOV-COMPUTE-000001-v3";
  const statusLine = plaque?.statusLine ?? "DRAFT REVIEW RECORD · NOT ISSUED";
  const recordHashShort = plaque?.recordHashShort ?? "";
  const operatorAskDisplay = plaque?.operatorAskDisplay ?? null;

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 38%, rgba(212,170,40,0.08) 0%, rgba(28,22,12,0.45) 22%, rgba(12,14,17,1) 70%)",
      }}
    >
      {/* ─── Stage floor · subtle reflection band ───────────────────── */}
      <div
        aria-hidden
        className="absolute left-0 right-0"
        style={{
          bottom: 0,
          height: "38%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.85) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute left-0 right-0 mx-auto"
        style={{
          bottom: "32%",
          height: 2,
          background:
            "linear-gradient(to right, transparent 0%, rgba(212,170,40,0.5) 50%, transparent 100%)",
          filter: "blur(0.5px)",
        }}
      />

      {/* ─── 3D-perspective GPU stage ────────────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          style={{
            perspective: "1100px",
            perspectiveOrigin: "50% 40%",
          }}
        >
          <CssGpuRender />
        </div>
      </div>

      {/* ─── Brass museum plaque · HTML version of the 3D plaque ─────── */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: "8%", width: "min(560px, 88%)" }}>
        <BrassPlaqueCss
          deedReference={deedReference}
          statusLine={statusLine}
          recordHashShort={recordHashShort}
          operatorAskDisplay={operatorAskDisplay}
        />
      </div>

      {/* ─── Vignette + grain · same grading as the 3D path ──────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)",
          mixBlendMode: "multiply",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
          mixBlendMode: "overlay",
        }}
      />

      {/* ─── Subtle WebGL hint · tiny, no scolding ──────────────────── */}
      <div className="absolute right-3 bottom-3 text-[9px] font-mono uppercase tracking-[0.18em] text-stone-500/80 pointer-events-none">
        STATIC PREVIEW · WEBGL UNAVAILABLE
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────
 * CssGpuRender · the 2D RTX PRO 6000 silhouette built from CSS gradients
 * ────────────────────────────────────────────────────────────────────── */
function CssGpuRender() {
  return (
    <div
      style={{
        transform: "rotateX(14deg) rotateY(-22deg) translateZ(0)",
        transformStyle: "preserve-3d",
        width: "min(520px, 78vw)",
        height: "180px",
        position: "relative",
        filter: "drop-shadow(0 22px 28px rgba(0,0,0,0.55))",
      }}
    >
      {/* Main shroud */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 8,
          background:
            "linear-gradient(160deg, #2a2f37 0%, #1c1f24 30%, #14171b 65%, #0d0f12 100%)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.6)",
        }}
      />

      {/* Top cap with highlight rim */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 18,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 50%, transparent 100%)",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      />

      {/* Heatsink fin stack (18 fins) */}
      <div
        style={{
          position: "absolute",
          inset: "20px 50px 30px 50px",
          background:
            "repeating-linear-gradient(90deg, #07080a 0, #07080a 3px, #1a1d22 3px, #1a1d22 6px)",
          opacity: 0.95,
          borderRadius: 2,
          boxShadow: "inset 0 0 14px rgba(0,0,0,0.6)",
        }}
      />

      {/* Honey-gold side bevel strips */}
      <div
        style={{
          position: "absolute",
          left: 60,
          right: 60,
          top: 18,
          height: 2,
          background:
            "linear-gradient(to right, transparent 0%, rgba(212,170,40,0.6) 50%, transparent 100%)",
          boxShadow: "0 0 6px rgba(212,170,40,0.4)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 60,
          right: 60,
          bottom: 28,
          height: 2,
          background:
            "linear-gradient(to right, transparent 0%, rgba(212,170,40,0.55) 50%, transparent 100%)",
          boxShadow: "0 0 6px rgba(212,170,40,0.35)",
        }}
      />

      {/* DEFENDABLE · COMPUTE wordmark */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          textAlign: "center",
          fontSize: 9,
          letterSpacing: "0.32em",
          color: "rgba(212,170,40,0.55)",
          fontFamily: "ui-monospace, SFMono-Regular, monospace",
          textShadow: "0 0 8px rgba(212,170,40,0.25)",
          pointerEvents: "none",
        }}
      >
        DEFENDABLE · COMPUTE
      </div>

      {/* Two intake fans */}
      <CssFan style={{ left: "12%", top: "20%" }} />
      <CssFan style={{ right: "12%", top: "20%" }} />

      {/* PCIe edge fingers · prominent gold strip */}
      <div
        style={{
          position: "absolute",
          left: 50,
          right: 50,
          bottom: -10,
          height: 8,
          background:
            "linear-gradient(180deg, #d4aa28 0%, #b48c1a 50%, #7d6328 100%)",
          borderRadius: 1.5,
          boxShadow: "0 0 10px rgba(212,170,40,0.4)",
        }}
      />
      {/* PCIe finger separations */}
      <div
        style={{
          position: "absolute",
          left: 50,
          right: 50,
          bottom: -8,
          height: 6,
          background:
            "repeating-linear-gradient(90deg, transparent 0 6px, rgba(0,0,0,0.55) 6px 7px)",
        }}
      />

      {/* Rear I/O bracket */}
      <div
        style={{
          position: "absolute",
          left: -8,
          top: 18,
          bottom: 18,
          width: 14,
          background: "linear-gradient(90deg, #1c2025 0%, #0e1013 100%)",
          borderRadius: 2,
          boxShadow: "inset 0 0 4px rgba(0,0,0,0.7)",
        }}
      />
      {/* DP port slots */}
      {[20, 50, 80, 110].map((y, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: -6,
            top: y,
            width: 10,
            height: 10,
            background: "#040506",
            borderRadius: 1.5,
            boxShadow: "inset 0 0 2px rgba(0,0,0,0.9)",
          }}
        />
      ))}

      {/* 12V-2x6 power connector tab top-right */}
      <div
        style={{
          position: "absolute",
          right: 16,
          top: -4,
          width: 36,
          height: 18,
          background: "linear-gradient(180deg, #1a1c1f 0%, #08090b 100%)",
          borderRadius: 2,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      />

      {/* Heat-glow rear vents · simulate the emissive backplate */}
      <div
        style={{
          position: "absolute",
          left: 50,
          right: 50,
          top: -2,
          height: 4,
          background:
            "repeating-linear-gradient(90deg, transparent 0 18px, rgba(255,122,61,0.6) 18px 26px)",
          filter: "blur(1px)",
        }}
      />
    </div>
  );
}

function CssFan({ style }: { style: React.CSSProperties }) {
  return (
    <div
      style={{
        ...style,
        position: "absolute",
        width: 100,
        height: 100,
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 50% 50%, #0a0c0f 0%, #14171b 38%, #0a0b0d 60%, #07080a 100%)",
        border: "1.5px solid rgba(212,170,40,0.18)",
        boxShadow:
          "inset 0 0 14px rgba(0,0,0,0.85), 0 0 1px rgba(212,170,40,0.4)",
      }}
    >
      {/* Inner ring lip */}
      <div
        style={{
          position: "absolute",
          inset: 6,
          borderRadius: "50%",
          border: "1px solid rgba(212,170,40,0.22)",
        }}
      />
      {/* Hub */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 24,
          height: 24,
          marginLeft: -12,
          marginTop: -12,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #1a1d22 0%, #08090b 70%, #050608 100%)",
          boxShadow: "inset 0 0 4px rgba(212,170,40,0.4)",
        }}
      />
      {/* Hub centre glow dot */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          borderRadius: "50%",
          background: "#d4aa28",
          boxShadow: "0 0 6px rgba(212,170,40,0.7)",
        }}
      />
      {/* 9 blade strokes (subtle radial spokes) */}
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 38,
            height: 2,
            marginLeft: 0,
            marginTop: -1,
            background:
              "linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            transform: `rotate(${i * 40}deg) translateX(8px)`,
            transformOrigin: "0 50%",
            opacity: 0.6,
            borderRadius: 1,
          }}
        />
      ))}
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────
 * BrassPlaqueCss · HTML version of the 3D museum placard.
 * ────────────────────────────────────────────────────────────────────── */
function BrassPlaqueCss({
  deedReference,
  statusLine,
  recordHashShort,
  operatorAskDisplay,
}: {
  deedReference: string;
  statusLine: string;
  recordHashShort: string;
  operatorAskDisplay: string | null;
}) {
  return (
    <div
      style={{
        background:
          "linear-gradient(160deg, #c79a3a 0%, #a37c25 35%, #7d6429 65%, #5a4a1d 100%)",
        borderTop: "1px solid rgba(255,225,160,0.45)",
        borderBottom: "1px solid rgba(0,0,0,0.55)",
        borderRadius: 6,
        padding: "14px 22px 16px",
        boxShadow:
          "0 8px 24px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.4)",
        transform: "perspective(1100px) rotateX(8deg)",
        transformOrigin: "center top",
      }}
    >
      <div
        className="text-center font-mono"
        style={{
          fontSize: 10,
          letterSpacing: "0.32em",
          color: "#1d1610",
          textShadow: "0 1px 0 rgba(255,235,180,0.35)",
        }}
      >
        PROOF OF VALUE
      </div>
      <div
        className="text-center font-mono mt-1"
        style={{
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: "0.04em",
          color: "#1d1610",
          textShadow: "0 1px 0 rgba(255,235,180,0.35)",
        }}
      >
        {deedReference}
      </div>
      <div
        className="text-center font-mono mt-1"
        style={{
          fontSize: 10,
          letterSpacing: "0.04em",
          color: "#2a1f0d",
        }}
      >
        NVIDIA RTX PRO 6000 BLACKWELL
      </div>
      <div
        className="text-center font-mono mt-2"
        style={{
          fontSize: 9,
          letterSpacing: "0.24em",
          color: "#3b2c12",
        }}
      >
        {statusLine}
      </div>
      <div
        className="text-center font-mono mt-1"
        style={{
          fontSize: 9,
          letterSpacing: "0.2em",
          color: "#5a4520",
        }}
      >
        SHA-256 · {recordHashShort}…
      </div>

      {operatorAskDisplay && (
        <>
          <div
            className="text-center font-mono mt-3"
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#1d1610",
              textShadow: "0 1px 0 rgba(255,235,180,0.35)",
            }}
          >
            OPERATOR ASKING · {operatorAskDisplay}
          </div>
          <div
            className="text-center font-mono mt-0.5"
            style={{
              fontSize: 8,
              letterSpacing: "0.22em",
              color: "#5a4520",
            }}
          >
            OPERATOR CLAIM ONLY · NOT VALIDATED
          </div>
        </>
      )}
    </div>
  );
}
