// SSR-lite middleware for defendableos.com
//
// Injects route-specific <title> · <meta description> · canonical · OG ·
// Twitter Card · JSON-LD · and a body fallback into the HTML response so
// crawlers see the full product story even before the React app boots.
//
// The React SPA still hydrates for human visitors; this fills in the
// initial response for indexing.

import { getRouteContent } from "./_lib/seo-content";

interface Env {
  ASSETS?: { fetch: (req: Request) => Promise<Response> };
}

const SITE = "https://defendableos.com";

function escAttr(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Subdomain routing · single-purpose subdomains rewrite to their canonical
 * apex route before the SPA boots. The HTML response is identical to the
 * apex route's HTML; a tiny inline `<script>` swaps the browser URL via
 * history.replaceState BEFORE the main bundle loads so React Router reads
 * the canonical path and there is no flash of the landing page.
 *
 *   ledger.defendableos.com/        → /ledger
 *   ledger.defendableos.com/<hash>  → /ledger?q=<hash>
 *   ledger.defendableos.com/compute → /compute (transparent passthrough)
 *
 * Returns { rewrittenPath, replaceTarget } when a rewrite applies.
 * `rewrittenPath` is used to fetch the static shell + run SSR meta;
 * `replaceTarget` is the URL string the inline script will history-replace
 * to so the browser sees the canonical subdomain URL (or the apex URL with
 * the query attached).
 */
function resolveSubdomain(
  host: string,
  path: string,
  search: string,
): { rewrittenPath: string; replaceTarget: string } | null {
  if (host === "ledger.defendableos.com") {
    if (path === "/") {
      return { rewrittenPath: "/ledger", replaceTarget: "/ledger" };
    }
    // Already on /ledger or another whitelisted route · pass through.
    if (
      path === "/ledger" ||
      path.startsWith("/ledger/") ||
      path.startsWith("/compute") ||
      path.startsWith("/showcase/") ||
      path.startsWith("/verify/")
    ) {
      return { rewrittenPath: path, replaceTarget: `${path}${search}` };
    }
    // Anything else under ledger.* is treated as a hash/deed-ref shortcut.
    const candidate = path.replace(/^\//, "").split("/")[0];
    if (candidate) {
      const q = encodeURIComponent(candidate);
      return {
        rewrittenPath: `/ledger`,
        replaceTarget: `/ledger?q=${q}`,
      };
    }
  }
  return null;
}

export const onRequest: PagesFunction<Env> = async (ctx) => {
  const url = new URL(ctx.request.url);
  const path = url.pathname;
  const host = url.hostname;
  const search = url.search;

  // Pass-through: API routes, static assets, anything not the React shell
  if (
    path.startsWith("/api/") ||
    path.startsWith("/assets/") ||
    /\.(css|js|svg|png|jpg|jpeg|gif|webp|ico|txt|xml|json|woff|woff2|map)$/i.test(path)
  ) {
    return ctx.next();
  }

  // Subdomain canonical rewrite · runs BEFORE we fetch the static shell,
  // so the SSR meta + content match the canonical apex route.
  const subdomainRewrite = resolveSubdomain(host, path, search);
  const effectivePath = subdomainRewrite?.rewrittenPath ?? path;

  // Get the underlying response from the static asset handler (React shell)
  const response = await ctx.next();
  const contentType = response.headers.get("Content-Type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  // Compute the route-specific SSR content · use the rewritten path so the
  // ledger subdomain root gets ledger meta + body fallback (not landing).
  let pathContent: Awaited<ReturnType<typeof getRouteContent>> = null;
  try {
    pathContent = await getRouteContent(ctx.request.url, host, effectivePath);
  } catch (err) {
    console.error("[middleware] getRouteContent failed:", err);
  }

  const title = pathContent?.title ?? "DefendableOS · Proof of Value";
  const description = pathContent?.description ?? "The operating system for evidence-backed valuation, provenance, and market-ready ownership.";
  // Canonical URL is the apex form of the route · subdomains don't get
  // their own canonical so Google doesn't index ledger.* and apex/ledger
  // as duplicates.
  const canonical = `${SITE}${effectivePath}${search}`;
  const ogImage = `${SITE}/og-image.png`;

  // Build JSON-LD script tags
  const jsonLdHtml = (pathContent?.jsonLdBlocks ?? [])
    .map((b) => `<script type="application/ld+json">${JSON.stringify(b)}</script>`)
    .join("\n");

  // Build the SSR head injection
  const headInject = `
    <title>${escAttr(title)}</title>
    <meta name="description" content="${escAttr(description)}" />
    <link rel="canonical" href="${escAttr(canonical)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escAttr(canonical)}" />
    <meta property="og:title" content="${escAttr(title)}" />
    <meta property="og:description" content="${escAttr(description)}" />
    <meta property="og:image" content="${escAttr(ogImage)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escAttr(title)}" />
    <meta name="twitter:description" content="${escAttr(description)}" />
    <meta name="twitter:image" content="${escAttr(ogImage)}" />
    <meta name="robots" content="index, follow" />
    ${jsonLdHtml}
  `.trim();

  // Body fallback — crawlers that don't run JS still see real content
  const bodyInject = pathContent?.bodyHtml
    ? `<div id="ssr-content" hidden aria-hidden="true">${pathContent.bodyHtml}</div>`
    : "";

  // Stitch the SSR additions into the React shell
  let html = await response.text();

  // Replace title (the shell ships a default; we override per-route)
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escAttr(title)}</title>`);

  // Inject after the existing meta description (or just after the opening head if not present)
  if (/<meta name="description"[^>]*>/i.test(html)) {
    html = html.replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${escAttr(description)}" />`);
  }

  // Inject the full head additions (canonical, OG, Twitter, JSON-LD)
  html = html.replace(/<\/head>/i, `${headInject}\n</head>`);

  // Inject the crawler bodyHtml right before #root so it's part of initial response
  if (bodyInject) {
    html = html.replace(/<div id="root"><\/div>/i, `${bodyInject}\n<div id="root"></div>`);
  }

  // Subdomain URL rewrite · runs BEFORE the SPA bundle, so React Router
  // reads the canonical path on first render. The browser address bar
  // stays on the subdomain · the URL inside React is the apex path.
  if (subdomainRewrite) {
    const targetUrl = JSON.stringify(subdomainRewrite.replaceTarget);
    const rewriteScript = `<script>(function(){try{var t=${targetUrl};if(t&&typeof history!=="undefined"&&typeof history.replaceState==="function"){var cur=location.pathname+location.search;if(cur!==t){history.replaceState(null,"",t);}}}catch(e){}})();</script>`;
    // Insert just before the main module script so it executes first.
    html = html.replace(/<script type="module"/i, `${rewriteScript}\n<script type="module"`);
  }

  return new Response(html, {
    status: response.status,
    headers: {
      ...Object.fromEntries(response.headers),
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
};
