import { Link } from "react-router-dom";
import { Footer, Header } from "../components/SiteShell";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-24 lg:py-32">
        <div className="text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">404 · NOT FOUND</div>
        <h1 className="mt-6 text-4xl lg:text-5xl font-semibold tracking-tight text-stone-50 leading-[1.05]">
          That page isn't <span className="font-serif italic font-normal text-amber-300">deeded</span> yet.
        </h1>
        <p className="mt-6 text-lg text-stone-300 leading-relaxed">
          The URL you tried doesn't exist on defendableos.com. The
          links below cover everything that does.
        </p>
        <ul className="mt-10 grid sm:grid-cols-2 gap-3 text-sm">
          {[
            ["Home", "/"],
            ["HoneyBox", "/honeybox"],
            ["DefendableCloud", "/cloud"],
            ["How It Works", "/how-it-works"],
            ["OpenDefense · market intel", "/opendefense"],
            ["Pricing", "/pricing"],
            ["Doctrine · 12 articles", "/doctrine"],
            ["About / Operator", "/about"],
            ["DefendableHack · builder rail", "/hack"],
            ["Defend The Claw™ · free intake", "/defend-the-claw"],
            ["Contact form", "/contact"],
            ["Docs · docs.defendableos.com", "https://docs.defendableos.com"],
          ].map(([label, href]) => (
            <li key={href}>
              {href.startsWith("http") ? (
                <a href={href} className="block rounded border border-stone-800 bg-neutral-950/60 px-4 py-3 text-stone-300 hover:border-amber-500/40 hover:text-amber-300 transition-colors">{label}</a>
              ) : (
                <Link to={href} className="block rounded border border-stone-800 bg-neutral-950/60 px-4 py-3 text-stone-300 hover:border-amber-500/40 hover:text-amber-300 transition-colors">{label}</Link>
              )}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
