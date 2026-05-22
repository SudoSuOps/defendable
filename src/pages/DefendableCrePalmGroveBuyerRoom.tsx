/**
 * /showcase/cre/palm-grove-marketplace/buyer-room
 *
 * Defendable Room · Controlled Buyer Diligence Preview.
 *
 * Strict demo · no backend submission · no fake access grant. The form
 * is a UI demonstration only; submit reveals an inline disclosure panel
 * citing PALM_GROVE.disclosure.buyerRoomIntake. All document tiles are
 * gated with safe placeholder status labels. The illustrative-demo
 * checkbox MUST be checked before the submit button enables.
 */
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { CrePageShell } from "../components/cre/CrePageShell";
import { PALM_GROVE } from "../lib/cre/palmGrove";

type BuyerType =
  | "Owner-Principal"
  | "Buyer-Side Broker"
  | "Investment Sales Broker"
  | "Institutional Investor"
  | "Researcher"
  | "Other";

const BUYER_TYPES: BuyerType[] = [
  "Owner-Principal",
  "Buyer-Side Broker",
  "Investment Sales Broker",
  "Institutional Investor",
  "Researcher",
  "Other",
];

export default function DefendableCrePalmGroveBuyerRoom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [buyerType, setBuyerType] = useState<BuyerType>("Owner-Principal");
  const [message, setMessage] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!acknowledged) return;
    // Intentionally NO fetch · NO backend write · NO fake API call.
    // This route is a UI demonstration only.
    setSubmitted(true);
  }

  return (
    <CrePageShell showHeroDisclosure>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative px-6 pt-14 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-honey-400/80 font-semibold">
            Defendable CRE · Buyer Room Preview
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-stone-100 leading-[1.05]">
            Defendable Room
          </h1>
          <p className="mt-4 text-lg text-stone-300 leading-snug">
            <span className="font-serif italic text-honey-200">
              Controlled Buyer Diligence Preview
            </span>
          </p>
          <p className="mt-6 max-w-2xl text-stone-400 leading-relaxed">
            An illustrative preview of how a permissioned diligence workspace
            could be presented to qualified counterparties. Approved-claims
            controls remain in force, source evidence is never published, and
            access is gated until a Buyer Room operator approves the request.
          </p>

          {/* Large amber state chip */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-md border border-amber-500/40 bg-amber-500/[0.08] px-5 py-3">
            <span
              aria-hidden
              className="inline-block w-2 h-2 rounded-full bg-amber-300"
            />
            <span className="text-[11px] md:text-xs font-mono uppercase tracking-[0.24em] text-amber-300 font-semibold">
              {PALM_GROVE.disclosure.buyerRoomState}
            </span>
          </div>
        </div>
      </section>

      {/* ─── Two-column body ───────────────────────────────────────────── */}
      <section className="px-6 pb-16 border-t border-stone-900/80 pt-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-10">
          {/* LEFT · document categories */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-honey-400/80 font-semibold">
              Diligence Materials
            </div>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100">
              Document Categories
            </h2>
            <p className="mt-3 max-w-xl text-sm text-stone-400 leading-relaxed">
              Nine illustrative document tiles representing the structure of a
              controlled diligence room. Status labels demonstrate the access
              gating · no underlying files are exposed in this demonstration.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {PALM_GROVE.buyerRoomDocs.map((doc) => (
                <DocCard key={doc.name} name={doc.name} status={doc.status} />
              ))}
            </div>

            {/* Security note */}
            <div className="mt-10 rounded-lg border border-stone-700/60 bg-stone-950/60 p-5">
              <div className="text-[9px] font-mono uppercase tracking-[0.22em] text-honey-400/80 font-semibold">
                Security Note
              </div>
              <div className="mt-2 text-stone-100 text-sm font-semibold">
                Private diligence materials remain permissioned.
              </div>
              <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                Public marketing pages expose approved fields and proof
                references only. Underlying source documents stay behind the
                Buyer Room access boundary. The Defendable record references
                evidence by SHA-256 hash — the file itself is never published.
              </p>
            </div>
          </div>

          {/* RIGHT · access request form */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-honey-400/80 font-semibold">
              Access Request
            </div>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100">
              Request Buyer Room Preview
            </h2>
            <p className="mt-3 text-sm text-stone-400 leading-relaxed">
              This form is part of an illustrative product demonstration. It
              does not submit to any backend service and does not grant access
              to real transaction materials.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 rounded-xl border border-stone-700/60 bg-stone-950/60 p-6 space-y-5"
              noValidate={false}
              aria-label="Buyer Room access request form"
            >
              <FormField label="Name" htmlFor="bf-name">
                <input
                  id="bf-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded border border-stone-700 bg-neutral-950/70 px-3 py-2 text-sm text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-honey-400/55"
                  placeholder="Jane Operator"
                  autoComplete="name"
                />
              </FormField>

              <FormField label="Work email" htmlFor="bf-email">
                <input
                  id="bf-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded border border-stone-700 bg-neutral-950/70 px-3 py-2 text-sm text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-honey-400/55"
                  placeholder="jane@firm.example"
                  autoComplete="email"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  title="Enter a valid work email."
                />
              </FormField>

              <FormField label="Company" htmlFor="bf-company">
                <input
                  id="bf-company"
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded border border-stone-700 bg-neutral-950/70 px-3 py-2 text-sm text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-honey-400/55"
                  placeholder="Firm name"
                  autoComplete="organization"
                />
              </FormField>

              <FormField label="Buyer type" htmlFor="bf-buyer-type">
                <select
                  id="bf-buyer-type"
                  required
                  value={buyerType}
                  onChange={(e) => setBuyerType(e.target.value as BuyerType)}
                  className="w-full rounded border border-stone-700 bg-neutral-950/70 px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-honey-400/55"
                >
                  {BUYER_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-neutral-950 text-stone-100">
                      {t}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField label="Message" htmlFor="bf-message">
                <textarea
                  id="bf-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded border border-stone-700 bg-neutral-950/70 px-3 py-2 text-sm text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-honey-400/55 resize-y"
                  placeholder="Notes on your interest, mandate, or coverage."
                />
              </FormField>

              <label className="flex items-start gap-3 rounded-md border border-stone-800 bg-neutral-950/50 p-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acknowledged}
                  onChange={(e) => setAcknowledged(e.target.checked)}
                  className="mt-0.5 h-4 w-4 accent-honey-400 cursor-pointer"
                  aria-required="true"
                />
                <span className="text-xs text-stone-300 leading-relaxed">
                  I understand this is an illustrative product demonstration
                  and does not grant access to real transaction materials.
                </span>
              </label>

              <button
                type="submit"
                disabled={!acknowledged}
                className={[
                  "w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-sm font-semibold transition-colors",
                  acknowledged
                    ? "border border-honey-400/55 bg-honey-400/[0.10] text-honey-100 hover:bg-honey-400/[0.18]"
                    : "border border-stone-800 bg-stone-900/40 text-stone-600 cursor-not-allowed",
                ].join(" ")}
                aria-disabled={!acknowledged}
              >
                Submit Access Request (Demo)
              </button>

              <p className="text-[10px] text-stone-500 italic leading-relaxed">
                No data is transmitted. This page demonstrates the request
                surface only.
              </p>
            </form>

            {/* Submission status panel · inline · post-submit */}
            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className="mt-5 rounded-xl border border-amber-500/40 bg-amber-500/[0.08] p-5"
              >
                <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-amber-300 font-semibold">
                  Demo Notice
                </div>
                <div className="mt-2 text-stone-100 text-sm font-semibold">
                  Request received (illustrative only)
                </div>
                <p className="mt-2 text-sm text-stone-300 leading-relaxed">
                  {PALM_GROVE.disclosure.buyerRoomIntake}
                </p>
                <p className="mt-3 text-[11px] text-stone-500 italic">
                  No record was created. No notification was sent. No
                  permissions were granted.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTAs ───────────────────────────────────────────────── */}
      <section className="px-6 py-14 border-t border-stone-900/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
          <Link
            to="/showcase/cre/palm-grove-marketplace"
            className="inline-flex items-center gap-2 px-5 py-3 rounded border border-stone-700 text-stone-300 hover:border-stone-600 text-sm transition-colors"
          >
            ← Back to Property Experience
          </Link>
          <Link
            to="/showcase/cre/palm-grove-marketplace/teaser"
            className="inline-flex items-center gap-2 px-5 py-3 rounded border border-honey-400/55 text-honey-200 hover:bg-honey-400/[0.08] text-sm font-semibold transition-colors"
          >
            View Teaser Sheet →
          </Link>
          <Link
            to="/showcase/cre/palm-grove-marketplace/proof-record"
            className="inline-flex items-center gap-2 px-5 py-3 rounded text-stone-400 hover:text-stone-200 text-sm transition-colors"
          >
            Explore Draft Proof Record
          </Link>
        </div>
      </section>
    </CrePageShell>
  );
}

/* ─── Subcomponents ─────────────────────────────────────────────────── */

type DocStatus =
  | "Preview Available"
  | "Restricted Pending Approval"
  | "Evidence-Gated"
  | "Illustrative Placeholder";

function DocCard({ name, status }: { name: string; status: string }) {
  const s = status as DocStatus;
  const tone = STATUS_TONE[s] ?? STATUS_TONE["Illustrative Placeholder"];
  return (
    <div className="rounded-lg border border-stone-800 bg-stone-950/60 p-4 h-full flex flex-col justify-between">
      <div>
        <div className="text-stone-100 text-sm font-semibold leading-snug">
          {name}
        </div>
      </div>
      <div className="mt-4">
        <span
          className={[
            "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1",
            "text-[9px] font-mono uppercase tracking-[0.18em] font-semibold",
            tone.classes,
          ].join(" ")}
        >
          <span
            aria-hidden
            className={`inline-block w-1.5 h-1.5 rounded-full ${tone.dot}`}
          />
          {status}
        </span>
      </div>
    </div>
  );
}

const STATUS_TONE: Record<DocStatus, { classes: string; dot: string }> = {
  "Preview Available": {
    classes: "border-emerald-500/40 bg-emerald-500/[0.08] text-emerald-300",
    dot: "bg-emerald-400",
  },
  "Restricted Pending Approval": {
    classes: "border-amber-500/40 bg-amber-500/[0.08] text-amber-300",
    dot: "bg-amber-300",
  },
  "Evidence-Gated": {
    classes: "border-stone-600/60 bg-stone-700/[0.15] text-stone-300",
    dot: "bg-stone-400",
  },
  "Illustrative Placeholder": {
    classes: "border-honey-400/45 bg-honey-400/[0.08] text-honey-200",
    dot: "bg-honey-300",
  },
};

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-[10px] font-mono uppercase tracking-[0.22em] text-stone-400 font-semibold mb-1.5"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
