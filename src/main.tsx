import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import DefendableOS from "./pages/DefendableOS";

// Code-split · /compute pulls in three.js + R3F + drei (~900KB JS) so we
// keep it out of the main landing bundle.
const DefendableCompute = lazy(() => import("./pages/DefendableCompute"));

function ComputeFallback() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-400 flex items-center justify-center text-sm">
      Loading Defendable Compute…
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
