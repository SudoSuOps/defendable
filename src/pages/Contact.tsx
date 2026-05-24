// /contact · Contact form backed by Resend via Cloudflare Pages Function.
//
// POSTs to /api/contact · which lives at functions/api/contact.ts in this
// repo and is auto-deployed by Cloudflare Pages alongside the static site.
// Resend API key MUST be set as a Cloudflare Pages env var named
// RESEND_API_KEY (project Settings → Environment variables · Production
// + Preview). Never committed to source.

import { useState } from "react";
import { Footer, Header } from "../components/SiteShell";

const SALES_EMAIL = "defense@defendableos.com";
const BUILD_EMAIL = "build@defendableos.com";

type Status = "idle" | "sending" | "ok" | "error";

export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <BackgroundGrid />
      <Header />
      <main>
        <Hero />
        <ContactSection />
        <DirectChannels />
      </main>
      <Footer />
    </div>
  );
}

function BackgroundGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(212,170,40,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,170,40,1) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  );
}

function Hero() {
  return (
    <section className="relative border-b border-stone-900/80">
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-amber-500/[0.04] via-amber-500/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-12 lg:pt-28 lg:pb-16">
        <Eyebrow>CONTACT · BUILD · DEFENSE · ACCESS</Eyebrow>
        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-50 leading-[1.05]">
          Talk{" "}
          <span className="font-serif italic font-normal text-amber-300">straight</span>.
        </h1>
        <p className="mt-8 text-lg text-stone-300 leading-relaxed max-w-2xl">
          One form · founder reads it · 24-hour reply. No discovery
          call. No 6-touchpoint cadence. No CRM auto-nurture. Pick
          the lane that fits and write what you actually want to
          ask.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    lane: "build",
    message: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body?.error || `HTTP ${res.status}`);
      }
      setStatus("ok");
      setForm({ name: "", email: "", company: "", lane: form.lane, message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Send failed");
    }
  }

  function fieldChange<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  return (
    <section className="border-b border-stone-900/80 bg-stone-950/40">
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div>
            <Eyebrow>SEND A MESSAGE</Eyebrow>
            <h2 className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100 leading-tight">
              Pick a lane.{" "}
              <span className="font-serif italic font-normal text-amber-300">Write what you want.</span>
            </h2>
            <p className="mt-5 text-sm text-stone-400 leading-relaxed">
              Form goes straight to{" "}
              <span className="font-mono text-stone-300">{SALES_EMAIL}</span>.
              We reply within 24 hours · usually faster.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              {[
                ["build", "Build · I'm a founder/dev exploring the rail · pricing · pilot · technical questions"],
                ["defense", "Defense · I'm compliance/audit/risk · need to evaluate Defendable for a real workload"],
                ["press", "Press / analyst · category briefing · interview · OpenDefense market intelligence"],
                ["partner", "Partner · insurance carrier · integrator · pack contributor · advisor"],
                ["other", "Other · whatever else"],
              ].map(([k, label]) => (
                <label key={k} className="flex items-start gap-3 cursor-pointer text-stone-400">
                  <input
                    type="radio"
                    name="lane"
                    value={k}
                    checked={form.lane === k}
                    onChange={(e) => fieldChange("lane", e.target.value)}
                    className="mt-1 accent-amber-400"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-stone-800 bg-neutral-950/60 px-6 py-7 space-y-4"
          >
            <Field label="Your name" required>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => fieldChange("name", e.target.value)}
                className={inputCls}
                autoComplete="name"
              />
            </Field>

            <Field label="Email" required>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => fieldChange("email", e.target.value)}
                className={inputCls}
                autoComplete="email"
              />
            </Field>

            <Field label="Company">
              <input
                type="text"
                value={form.company}
                onChange={(e) => fieldChange("company", e.target.value)}
                className={inputCls}
                autoComplete="organization"
                placeholder="optional"
              />
            </Field>

            <Field label="Message" required>
              <textarea
                required
                value={form.message}
                onChange={(e) => fieldChange("message", e.target.value)}
                rows={6}
                className={`${inputCls} resize-none leading-relaxed`}
                placeholder="What are you working on · what do you need from us · what's the real ask"
              />
            </Field>

            {status === "error" && (
              <div className="rounded border border-rose-500/40 bg-rose-500/[0.06] px-4 py-3 text-xs text-rose-300">
                {errorMsg || "Send failed · try again or email defense@defendableos.com directly."}
              </div>
            )}
            {status === "ok" && (
              <div className="rounded border border-emerald-500/40 bg-emerald-500/[0.06] px-4 py-3 text-xs text-emerald-300">
                Message received. Reply within 24 hours.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-5 py-3 rounded bg-amber-400 text-neutral-950 text-sm font-semibold tracking-tight hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {status === "sending" ? "Sending…" : status === "ok" ? "Sent ✓" : "Send message"}
            </button>

            <p className="text-[10px] text-stone-500 italic leading-relaxed text-center">
              No newsletter signup · no marketing nurture · no CRM auto-pilot.
              Just the founder reading your message.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function DirectChannels() {
  return (
    <section className="border-b border-stone-900/80">
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
        <Eyebrow>OR · DIRECT</Eyebrow>
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight text-stone-100 leading-tight">
          Skip the form.
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <DirectCard
            label="Build / dev questions"
            email={BUILD_EMAIL}
            note="For pilot · pricing · technical discovery · pack contributions · the maker rail."
          />
          <DirectCard
            label="Defense / institutional"
            email={SALES_EMAIL}
            note="For compliance · audit · risk · insurance carriers · enterprise procurement · advisory."
          />
        </div>
      </div>
    </section>
  );
}

function DirectCard({ label, email, note }: { label: string; email: string; note: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="rounded-xl border border-stone-800 bg-neutral-950/60 px-6 py-6 hover:border-amber-500/40 hover:bg-amber-500/[0.03] transition-colors group block"
    >
      <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-semibold">{label}</div>
      <div className="mt-2 font-mono text-amber-300 text-lg font-semibold group-hover:text-amber-200 transition-colors">
        {email}
      </div>
      <p className="mt-3 text-sm text-stone-400 leading-relaxed">{note}</p>
    </a>
  );
}

// ─── building blocks ───────────────────────────────────────────────────────
const inputCls =
  "w-full px-4 py-3 rounded bg-stone-900/80 border border-stone-800 text-stone-100 placeholder:text-stone-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 outline-none transition-colors text-sm";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.14em] text-stone-400 font-semibold mb-1.5">
        {label}{required && <span className="text-amber-400 ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
      <span className="inline-block w-6 h-px bg-amber-400/60" />
      {children}
    </div>
  );
}
