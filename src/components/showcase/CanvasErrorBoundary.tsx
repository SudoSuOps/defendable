/**
 * CanvasErrorBoundary — keeps the page alive when WebGL / three.js fails.
 *
 * Without this, a single three.js context error (no WebGL, blocked by
 * extension, low-power-mode iOS, etc.) bubbles up and crashes the whole
 * React hero. With it, we fall back to a tasteful static stage so the
 * cards, headline, and deed preview all keep rendering.
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
    // Keep it silent in production · we don't want a red toast for a
    // graphics-context drop. A future iteration could ship this to a
    // Sentry-style sink.
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

/** Static stage that replaces the Canvas when 3D fails or is unsupported. */
export function StaticGpuFallback() {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(212,170,40,0.10) 0%, rgba(20,22,26,0.95) 35%, rgba(10,10,10,1) 100%)",
      }}
    >
      <div className="flex flex-col items-center text-center px-8">
        {/* CSS-only GPU silhouette · graphite block with honey strip */}
        <div className="relative w-[280px] h-[100px] rounded-md border border-stone-700/70 bg-gradient-to-br from-stone-900 to-neutral-950 shadow-2xl">
          <div className="absolute inset-2 rounded-sm border border-stone-800 bg-neutral-950 flex items-center justify-center">
            <div className="flex gap-2">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[2px] h-12 bg-stone-800"
                  style={{ opacity: 0.4 + (i % 3) * 0.2 }}
                />
              ))}
            </div>
          </div>
          <div className="absolute left-6 right-6 bottom-0 h-[3px] bg-honey-400/80 rounded-full" />
        </div>
        <div className="mt-8 text-[10px] uppercase tracking-[0.24em] text-honey-400/80 font-semibold font-mono">
          NVIDIA RTX PRO 6000 Blackwell · simplified preview
        </div>
        <div className="mt-2 text-xs text-stone-500 max-w-md">
          Your browser declined to start a 3D context. The evidence-backed
          record below renders without 3D and is the canonical artifact.
        </div>
      </div>
    </div>
  );
}
