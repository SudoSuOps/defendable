/**
 * DefendableComputeHero — flagship showcase composition.
 *
 * Data-driven via the ShowcaseProps interface. /compute uses safe
 * compute-hardware defaults · /showcase/{slug} fetches a real deed and
 * passes its props in (see lib/showcaseBridge.ts:mapPublicRecordToProps).
 *
 * The 3D scene currently always renders the procedural GPU. Future asset
 * classes (CRE, equipment, luxury, datasets) will swap in their own scene
 * keyed off props.sceneKind.
 */
import { useEffect, useMemo, useRef, useState } from "react";

import { COMPUTE_DEFAULT_PROPS, type ShowcaseProps } from "../../lib/showcaseBridge";
import {
  CanvasErrorBoundary,
  StaticGpuFallback,
  hasWebGL,
} from "./CanvasErrorBoundary";
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

export function DefendableComputeHero(propsIn: Partial<ShowcaseProps> = {}) {
  const props: ShowcaseProps = { ...COMPUTE_DEFAULT_PROPS, ...propsIn };

  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [focused, setFocused] = useState<FocusedCard>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const webglOk = useMemo(() => hasWebGL(), []);

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

  const badgeText = props.isDraft
    ? "DRAFT · NOT ISSUED · NOT PUBLISHED"
    : "ISSUED · PUBLISHED";

  const itemPlural = props.evidenceItemCount === 1 ? "item" : "items";

  const operatorAskDisplay =
    typeof props.operatorAskPriceUsd === "number" && props.operatorAskPriceUsd > 0
      ? new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: props.operatorAskCurrency || "USD",
          maximumFractionDigits: 0,
        }).format(props.operatorAskPriceUsd)
      : null;

  const plaque = {
    deedReference: props.deedReference,
    statusLine: props.isDraft
      ? "DRAFT REVIEW RECORD · NOT ISSUED"
      : "ISSUED · PUBLICLY VERIFIED",
    recordHashShort: props.recordHash.slice(0, 12),
    operatorAskDisplay,
  };

  return (
    <section className="relative px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <ProofHeader {...props} />
      </div>

      <div className="mt-14 max-w-7xl mx-auto">
        <div
          ref={stageRef}
          className="relative w-full h-[560px] lg:h-[640px] rounded-2xl border border-stone-800 bg-gradient-to-b from-stone-950 to-neutral-950 overflow-hidden"
        >
          <div className="absolute inset-0">
            {webglOk ? (
              <CanvasErrorBoundary fallback={<StaticGpuFallback plaque={plaque} />}>
                <GpuModelScene pointer={pointer} plaque={plaque} />
              </CanvasErrorBoundary>
            ) : (
              <StaticGpuFallback plaque={plaque} />
            )}
          </div>

          {/* Cinematic stage grading · vignette + film grain · CSS overlay so
              it never touches the WebGL context */}
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
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "3px 3px",
              mixBlendMode: "overlay",
            }}
          />

          {/* Desktop floating cards */}
          <div className="hidden lg:block">
            <FloatingEvidenceCard
              eyebrow="Asset Identity"
              title={props.assetName}
              lines={[
                { label: "Class", value: props.assetClass },
                { label: "Category", value: props.category },
                { label: "Ref", value: props.assetReference },
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
                {
                  label: "Packaging",
                  value: props.isDraft ? "DRAFT" : "ISSUED",
                  tone: props.isDraft ? "pending" : "ok",
                },
                {
                  label: "Human",
                  value: props.isDraft ? "REQUIRED" : "GRANTED",
                  tone: props.isDraft ? "pending" : "ok",
                },
              ]}
              style={{ top: "5%", right: "4%", width: 270 }}
              parallax={{ x: pointer.x, y: pointer.y, strength: 0.03 }}
              onClick={() => setFocused(focused === "validator" ? null : "validator")}
              active={focused === "validator"}
            />

            <FloatingEvidenceCard
              eyebrow="Evidence Packet"
              title={`Manifest attached · ${props.evidenceItemCount} ${itemPlural}`}
              lines={[
                { label: "Manifest", value: "ATTACHED", tone: "ok" },
                { label: "Items", value: `${props.evidenceItemCount} INDEXED` },
                { label: "Privacy", value: "HASH-ONLY", tone: "pending" },
                { label: "Algorithm", value: "SHA-256" },
              ]}
              style={{ bottom: "8%", left: "4%", width: 270 }}
              parallax={{ x: pointer.x, y: pointer.y, strength: 0.035 }}
              onClick={() => setFocused(focused === "evidence" ? null : "evidence")}
              active={focused === "evidence"}
            />

            <FloatingEvidenceCard
              eyebrow={props.performanceCardEyebrow}
              title={props.performanceCardTitle}
              body={props.performanceCardBody}
              style={{ bottom: "8%", right: "4%", width: 270 }}
              parallax={{ x: pointer.x, y: pointer.y, strength: 0.028 }}
              onClick={() => setFocused(focused === "benchmark" ? null : "benchmark")}
              active={focused === "benchmark"}
            />

            {/* Centre-top status chip */}
            <div
              className="absolute left-1/2 top-4 -translate-x-1/2 pointer-events-none"
              style={{
                transform: `translate(-50%, 0) translate3d(${(pointer.x * 12).toFixed(2)}px, ${(pointer.y * 6).toFixed(2)}px, 0)`,
              }}
            >
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md ${
                  props.isDraft
                    ? "border-amber-500/40 bg-amber-500/[0.08]"
                    : "border-emerald-500/40 bg-emerald-500/[0.08]"
                }`}
              >
                <span
                  className={`text-[9px] font-mono uppercase tracking-[0.22em] font-semibold ${
                    props.isDraft ? "text-amber-300" : "text-emerald-300"
                  }`}
                >
                  {badgeText}
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-stone-500">
              {props.assetName} · stylized product preview
            </div>
          </div>
        </div>

        {/* Mobile · stacked card grid */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4 lg:hidden">
          <FloatingEvidenceCard
            eyebrow="Asset Identity"
            title={props.assetName}
            lines={[
              { label: "Class", value: props.assetClass },
              { label: "Category", value: props.category },
              { label: "Ref", value: props.assetReference },
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
              { label: "Packaging", value: props.isDraft ? "DRAFT" : "ISSUED", tone: props.isDraft ? "pending" : "ok" },
              { label: "Human", value: props.isDraft ? "REQUIRED" : "GRANTED", tone: props.isDraft ? "pending" : "ok" },
            ]}
            style={{ position: "static" }}
          />
          <FloatingEvidenceCard
            eyebrow="Evidence Packet"
            title={`Manifest attached · ${props.evidenceItemCount} ${itemPlural}`}
            lines={[
              { label: "Manifest", value: "ATTACHED", tone: "ok" },
              { label: "Items", value: `${props.evidenceItemCount} INDEXED` },
              { label: "Privacy", value: "HASH-ONLY", tone: "pending" },
              { label: "Algorithm", value: "SHA-256" },
            ]}
            style={{ position: "static" }}
          />
          <FloatingEvidenceCard
            eyebrow={props.performanceCardEyebrow}
            title={props.performanceCardTitle}
            body={props.performanceCardBody}
            style={{ position: "static" }}
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 text-center">
        <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-honey-400/80 font-semibold">
          Proof of Value
        </div>
        <p className="mt-2 text-stone-300 text-base md:text-lg leading-relaxed">
          <span className="font-serif italic text-honey-200">AIOV</span> gives the opinion.
          <span className="text-stone-400"> DefendableOS proves the value.</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-14">
        <DeedPreviewPanel {...props} />
      </div>

      <div className="max-w-3xl mx-auto mt-14 text-center">
        <p className="text-xs text-stone-500 italic leading-relaxed">
          {props.isDraft
            ? "Public preview only. The deed record above is a draft prepared for review. No final valuation, professional appraisal, certification, authentication guarantee, issued Defendable Deed, public verification publication, or ENS issuance has occurred."
            : "Public verification record. This deed has cleared all draft conditions and is publicly anchored."}
        </p>
      </div>
    </section>
  );
}
