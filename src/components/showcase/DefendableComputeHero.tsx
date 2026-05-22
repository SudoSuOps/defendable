/**
 * DefendableComputeHero — flagship hero composition for /compute.
 *
 * Layout (desktop):
 *   ┌────────────────────────────────────────────────────────┐
 *   │  PROOF OF VALUE                                         │
 *   │  Proof of Value for AI Hardware                         │
 *   │  ...supporting copy + CTAs                              │
 *   └────────────────────────────────────────────────────────┘
 *       [Asset Identity]              [Validator]
 *                  ┌──────────────────────┐
 *                  │   3D GPU SCENE       │
 *                  └──────────────────────┘
 *       [Evidence Packet]             [Benchmark Receipt]
 *
 *                  [Proof of Value strip]
 *
 *   ┌────── DEFENDABLE DEED PREVIEW (full-width) ───────────┐
 *   └────────────────────────────────────────────────────────┘
 *
 * Mobile collapses to stacked sections · static GPU still renders smoothly
 * but cards stack below instead of overlaying the canvas.
 */
import { useEffect, useRef, useState } from "react";

import { DeedPreviewPanel } from "./DeedPreviewPanel";
import { FloatingEvidenceCard } from "./FloatingEvidenceCard";
import { GpuModelScene } from "./GpuModelScene";
import { ProofHeader } from "./ProofHeader";

type FocusedCard =
  | "asset"
  | "evidence"
  | "benchmark"
  | "validator"
  | "deed"
  | null;

export function DefendableComputeHero() {
  // Pointer state in normalised [-1, 1] coords · feeds both the 3D scene
  // (subtle GPU tilt) and the floating cards (parallax shift).
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [focused, setFocused] = useState<FocusedCard>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // Track pointer relative to the 3D stage so parallax stays subtle and
  // localised to where the GPU actually is.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 2 - 1;
      const y = ((e.clientY - r.top) / r.height) * 2 - 1;
      setPointer({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
    };
    const onLeave = () => setPointer({ x: 0, y: 0 });
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section className="relative px-6 py-16 lg:py-24">
      {/* Top header block · centred on a max-width container */}
      <div className="max-w-7xl mx-auto">
        <ProofHeader />
      </div>

      {/* ─── 3D stage with floating cards · desktop only overlay ──────── */}
      <div className="mt-14 max-w-7xl mx-auto">
        <div
          ref={stageRef}
          className="relative w-full h-[560px] lg:h-[640px] rounded-2xl border border-stone-800 bg-gradient-to-b from-stone-950 to-neutral-950 overflow-hidden"
        >
          {/* The 3D canvas occupies the full stage */}
          <div className="absolute inset-0">
            <GpuModelScene pointer={pointer} />
          </div>

          {/* ── Floating glass cards · positioned around the GPU ──── */}
          {/* Hidden on small screens · grid below handles mobile.    */}
          <div className="hidden lg:block">
            <FloatingEvidenceCard
              eyebrow="Asset Identity"
              title="NVIDIA RTX PRO 6000 Blackwell"
              lines={[
                { label: "Class", value: "COMPUTE_HARDWARE" },
                { label: "Category", value: "GPU_ACCELERATOR" },
                { label: "Ref", value: "DOV-COMPUTE-000001" },
              ]}
              style={{ top: "5%", left: "4%", width: 260 }}
              parallax={{ x: pointer.x, y: pointer.y, strength: 0.025 }}
              onClick={() => setFocused(focused === "asset" ? null : "asset")}
              active={focused === "asset"}
            />

            <FloatingEvidenceCard
              eyebrow="Validate the Validator"
              title="Doctrine review pipeline"
              lines={[
                { label: "Source", value: "REVIEWED", tone: "ok" },
                { label: "Input", value: "REVIEWED", tone: "ok" },
                { label: "Claim", value: "REVIEWED", tone: "ok" },
                { label: "Packaging", value: "DRAFT", tone: "pending" },
                { label: "Human", value: "REQUIRED", tone: "pending" },
              ]}
              style={{ top: "5%", right: "4%", width: 270 }}
              parallax={{ x: pointer.x, y: pointer.y, strength: 0.03 }}
              onClick={() => setFocused(focused === "validator" ? null : "validator")}
              active={focused === "validator"}
            />

            <FloatingEvidenceCard
              eyebrow="Evidence Packet"
              title="Manifest attached · 3 items"
              lines={[
                { label: "Manifest", value: "ATTACHED", tone: "ok" },
                { label: "Items", value: "3 INDEXED" },
                { label: "Privacy", value: "HASH-ONLY", tone: "pending" },
                { label: "Algorithm", value: "SHA-256" },
              ]}
              style={{ bottom: "8%", left: "4%", width: 270 }}
              parallax={{ x: pointer.x, y: pointer.y, strength: 0.035 }}
              onClick={() => setFocused(focused === "evidence" ? null : "evidence")}
              active={focused === "evidence"}
            />

            <FloatingEvidenceCard
              eyebrow="Benchmark Receipt"
              title="Performance evidence on file"
              body="Benchmark receipt indexed. Validator review pending. Performance figures withheld until human approval."
              style={{ bottom: "8%", right: "4%", width: 270 }}
              parallax={{ x: pointer.x, y: pointer.y, strength: 0.028 }}
              onClick={() => setFocused(focused === "benchmark" ? null : "benchmark")}
              active={focused === "benchmark"}
            />

            {/* Centre-top deed status chip (small) */}
            <div
              className="absolute left-1/2 top-4 -translate-x-1/2 pointer-events-none"
              style={{ transform: `translate(-50%, 0) translate3d(${(pointer.x * 12).toFixed(2)}px, ${(pointer.y * 6).toFixed(2)}px, 0)` }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/[0.08] backdrop-blur-md">
                <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-amber-300 font-semibold">
                  DRAFT · NOT ISSUED · NOT PUBLISHED
                </span>
              </div>
            </div>
          </div>

          {/* Small caption at the bottom · subtle, premium */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-stone-500">
              RTX PRO 6000 Blackwell · stylized product preview
            </div>
          </div>
        </div>

        {/* ─── Mobile/tablet · stacked card grid below the canvas ────── */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4 lg:hidden">
          <FloatingEvidenceCard
            eyebrow="Asset Identity"
            title="NVIDIA RTX PRO 6000 Blackwell"
            lines={[
              { label: "Class", value: "COMPUTE_HARDWARE" },
              { label: "Category", value: "GPU_ACCELERATOR" },
              { label: "Ref", value: "DOV-COMPUTE-000001" },
            ]}
            style={{ position: "static" }}
          />
          <FloatingEvidenceCard
            eyebrow="Validate the Validator"
            title="Doctrine review pipeline"
            lines={[
              { label: "Source", value: "REVIEWED", tone: "ok" },
              { label: "Input", value: "REVIEWED", tone: "ok" },
              { label: "Claim", value: "REVIEWED", tone: "ok" },
              { label: "Packaging", value: "DRAFT", tone: "pending" },
              { label: "Human", value: "REQUIRED", tone: "pending" },
            ]}
            style={{ position: "static" }}
          />
          <FloatingEvidenceCard
            eyebrow="Evidence Packet"
            title="Manifest attached · 3 items"
            lines={[
              { label: "Manifest", value: "ATTACHED", tone: "ok" },
              { label: "Items", value: "3 INDEXED" },
              { label: "Privacy", value: "HASH-ONLY", tone: "pending" },
              { label: "Algorithm", value: "SHA-256" },
            ]}
            style={{ position: "static" }}
          />
          <FloatingEvidenceCard
            eyebrow="Benchmark Receipt"
            title="Performance evidence on file"
            body="Benchmark receipt indexed. Validator review pending. Performance figures withheld until human approval."
            style={{ position: "static" }}
          />
        </div>
      </div>

      {/* ─── Proof of Value strip · between scene and deed ────────────── */}
      <div className="max-w-5xl mx-auto mt-10 text-center">
        <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-honey-400/80 font-semibold">
          Proof of Value
        </div>
        <p className="mt-2 text-stone-300 text-base md:text-lg leading-relaxed">
          <span className="font-serif italic text-honey-200">AIOV</span> gives the opinion.
          <span className="text-stone-400"> DefendableOS proves the value.</span>
        </p>
      </div>

      {/* ─── Deed Preview Panel · full-width below the scene ──────────── */}
      <div className="max-w-7xl mx-auto mt-14">
        <DeedPreviewPanel />
      </div>

      {/* ─── Final disclosure footer ──────────────────────────────────── */}
      <div className="max-w-3xl mx-auto mt-14 text-center">
        <p className="text-xs text-stone-500 italic leading-relaxed">
          Public preview only. The deed record above is a draft prepared for
          review. No final valuation, professional appraisal, certification,
          authentication guarantee, issued Defendable Deed, public verification
          publication, or ENS issuance has occurred.
        </p>
      </div>
    </section>
  );
}
