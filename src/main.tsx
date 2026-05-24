import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import DefendableOS from "./pages/DefendableOS";
import HoneyBox from "./pages/HoneyBox";
import DefendableCloud from "./pages/DefendableCloud";
import Pricing from "./pages/Pricing";
import Doctrine from "./pages/Doctrine";
import About from "./pages/About";
import Hack from "./pages/Hack";
import DefendableOpen from "./pages/DefendableOpen";
import DefendablePairFactory from "./pages/DefendablePairFactory";
import DefendableReports from "./pages/DefendableReports";
import VastAiUtilizationSignalRail from "./pages/reports/VastAiUtilizationSignalRail";
import DefendableAgentGrade from "./pages/DefendableAgentGrade";
import DefendTheClaw from "./pages/DefendTheClaw";
import Ledger from "./pages/Ledger";

// Code-split · /compute and /showcase/:slug pull in three.js + R3F + drei
// (~900KB JS) so we keep them out of the main landing bundle.
const DefendableCompute = lazy(() => import("./pages/DefendableCompute"));
const DefendableShowcase = lazy(() => import("./pages/DefendableShowcase"));

// Defendable CRE MarketReady · 5 routes for the Palm Grove demo.
// Code-split because each route pulls in the shared CRE shell + SVG site plan.
const DefendableCrePalmGrove = lazy(() => import("./pages/DefendableCrePalmGrove"));
const DefendableCrePalmGroveTeaser = lazy(() => import("./pages/DefendableCrePalmGroveTeaser"));
const DefendableCrePalmGroveOm = lazy(() => import("./pages/DefendableCrePalmGroveOm"));
const DefendableCrePalmGroveBuyerRoom = lazy(() => import("./pages/DefendableCrePalmGroveBuyerRoom"));
const DefendableCrePalmGroveProofRecord = lazy(() => import("./pages/DefendableCrePalmGroveProofRecord"));

function ComputeFallback() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-400 flex items-center justify-center text-sm">
      Loading Defendable Compute…
    </div>
  );
}

function CreFallback() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-400 flex items-center justify-center text-sm">
      Loading Defendable CRE…
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefendableOS />} />
        {/* ── Primary product surfaces (2026-05-24 cleanup) ── */}
        <Route path="/honeybox" element={<HoneyBox />} />
        <Route path="/cloud" element={<DefendableCloud />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* ── Doctrine + Operator surfaces (secret sauce) ── */}
        <Route path="/doctrine" element={<Doctrine />} />
        <Route path="/about" element={<About />} />
        {/* ── DefendableHack · builder rail (cracked LLM) ── */}
        <Route path="/hack" element={<Hack />} />
        {/* ── Existing surfaces (kept · linked from footer or live) ── */}
        <Route path="/open" element={<DefendableOpen />} />
        <Route path="/pair-factory" element={<DefendablePairFactory />} />
        <Route path="/reports" element={<DefendableReports />} />
        <Route path="/reports/vast-ai-utilization-signal-rail" element={<VastAiUtilizationSignalRail />} />
        <Route path="/agent-grade" element={<DefendableAgentGrade />} />
        <Route path="/defend-the-claw" element={<DefendTheClaw />} />
        <Route
          path="/compute"
          element={
            <Suspense fallback={<ComputeFallback />}>
              <DefendableCompute />
            </Suspense>
          }
        />
        <Route
          path="/showcase/:slug"
          element={
            <Suspense fallback={<ComputeFallback />}>
              <DefendableShowcase />
            </Suspense>
          }
        />
        {/* Defendable CRE MarketReady · Palm Grove Marketplace demo */}
        <Route
          path="/showcase/cre/palm-grove-marketplace"
          element={
            <Suspense fallback={<CreFallback />}>
              <DefendableCrePalmGrove />
            </Suspense>
          }
        />
        <Route
          path="/showcase/cre/palm-grove-marketplace/teaser"
          element={
            <Suspense fallback={<CreFallback />}>
              <DefendableCrePalmGroveTeaser />
            </Suspense>
          }
        />
        <Route
          path="/showcase/cre/palm-grove-marketplace/om"
          element={
            <Suspense fallback={<CreFallback />}>
              <DefendableCrePalmGroveOm />
            </Suspense>
          }
        />
        <Route
          path="/showcase/cre/palm-grove-marketplace/buyer-room"
          element={
            <Suspense fallback={<CreFallback />}>
              <DefendableCrePalmGroveBuyerRoom />
            </Suspense>
          }
        />
        <Route
          path="/showcase/cre/palm-grove-marketplace/proof-record"
          element={
            <Suspense fallback={<CreFallback />}>
              <DefendableCrePalmGroveProofRecord />
            </Suspense>
          }
        />
        <Route path="/ledger" element={<Ledger />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
