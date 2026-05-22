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

export const onRequest: PagesFunction<Env> = async (ctx) => {
  const url = new URL(ctx.request.url);
  const path = url.pathname;
  const host = url.hostname;

  // Pass-through: API routes, static assets, anything not the React shell
  if (
    path.startsWith("/api/") ||
    path.startsWith("/assets/") ||
    /\.(css|js|svg|png|jpg|jpeg|gif|webp|ico|txt|xml|json|woff|woff2|map)$/i.test(path)
  ) {
    return ctx.next();
  }

  // Get the underlying response from the static asset handler (React shell)
  const response = await ctx.next();
  const contentType = response.headers.get("Content-Type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  // Compute the route-specific SSR content
  let pathContent: Awaited<ReturnType<typeof getRouteContent>> = null;
  try {
    pathContent = await getRouteContent(ctx.request.url, host, path);
  } catch (err) {
    console.error("[middleware] getRouteContent failed:", err);
  }

  const title = pathContent?.title ?? "DefendableOS · Proof of Value";
  const description = pathContent?.description ?? "The operating system for evidence-backed valuation, provenance, and market-ready ownership.";
  const canonical = `${SITE}${path}`;
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

  return new Response(html, {
    status: response.status,
    headers: {
      ...Object.fromEntries(response.headers),
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
};
