import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import DefendableOS from "./pages/DefendableOS";
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
