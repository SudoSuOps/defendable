// POST /api/early-access
//
// DefendableOS early-access intake form handler. Routes inbound submissions
// to a Discord webhook for operator triage.
//
// Security:
//   · Webhook URL is a SECRET CF Pages env var · never exposed client-side
//   · Honeypot field "company_url" catches naive bots
//   · Server validates length + email format + sanitizes for Discord display
//   · No persistent storage · Discord is the only sink
//
// Body shape:
//   {
//     name: string (2-80 chars)
//     email: string (valid email · 5-256 chars)
//     message: string (any length, optional)
//     tier?: string (free-form context label)
//     matter_type?: string (free-form)
//     source?: string ("defendableos-early-access")
//     company_url?: string  ← HONEYPOT · must be empty
//   }

interface Env {
  DEFENDABLE_DISCORD_WEBHOOK?: string;
  // Fallback to LEGALSNIPER channel if dedicated env not set (matches operator pattern)
  LEGALSNIPER_DISCORD_WEBHOOK?: string;
}

interface ContactPayload {
  name: string;
  email: string;
  message: string;
  tier?: string;
  matter_type?: string;
  source?: string;
  company_url?: string;  // honeypot
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "X-Service": "defendable-early-access",
    },
  });
}

// Strip Discord markdown control chars + zero-width + bidi chars to prevent
// formatting hijacks / link confusion in the embed display.
function sanitize(s: string, maxLen: number): string {
  const cleaned = s
    .replace(/[​-‍⁨-⁯﻿]/g, "")     // zero-width + bidi
    .replace(/[`*_~|>]/g, (c) => `\\${c}`)                  // escape Discord md
    .trim();
  return cleaned.slice(0, maxLen);
}

function validEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) && s.length <= 256;
}

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  const webhook =
    ctx.env.DEFENDABLE_DISCORD_WEBHOOK || ctx.env.LEGALSNIPER_DISCORD_WEBHOOK;
  if (!webhook) {
    return jsonResponse({
      ok: false,
      error:
        "Early access intake is being prepared. Contact integration coming soon. Email build@swarmandbee.ai directly.",
    }, 503);
  }

  let payload: ContactPayload;
  try {
    payload = await ctx.request.json();
  } catch {
    return jsonResponse({ ok: false, error: "invalid JSON body" }, 400);
  }

  // Honeypot · bots fill all fields · humans don't see it
  if (payload.company_url && payload.company_url.length > 0) {
    return jsonResponse({ ok: true, queued: true });
  }

  if (!payload.name || payload.name.trim().length < 2 || payload.name.length > 80) {
    return jsonResponse({ ok: false, error: "name must be 2-80 chars" }, 400);
  }
  if (!validEmail(payload.email)) {
    return jsonResponse({ ok: false, error: "valid email required" }, 400);
  }

  const cleanName = sanitize(payload.name, 80);
  const cleanEmail = sanitize(payload.email, 256);
  const cleanMessage = sanitize(payload.message || "(none)", 4000);
  const cleanTier = payload.tier ? sanitize(payload.tier, 32) : "—";
  const cleanMatter = payload.matter_type ? sanitize(payload.matter_type, 64) : "—";
  const cleanSource = payload.source ? sanitize(payload.source, 64) : "defendableos-early-access";

  const ip = ctx.request.headers.get("CF-Connecting-IP") || "unknown";
  const ua = ctx.request.headers.get("User-Agent") || "unknown";
  const country = ctx.request.headers.get("CF-IPCountry") || "—";

  const embed = {
    title: "DefendableOS · Early Access · new submission",
    description: cleanMessage,
    color: 0xd4a017,  // honey-gold · matches brand
    fields: [
      { name: "From",       value: `**${cleanName}**`, inline: true },
      { name: "Email",      value: cleanEmail,         inline: true },
      { name: "Country",    value: country,            inline: true },
      { name: "Asset Class", value: cleanMatter,       inline: true },
      { name: "Tier",       value: cleanTier,          inline: true },
      { name: "Source",     value: cleanSource,        inline: true },
    ],
    footer: { text: `from ${cleanSource} · IP ${ip.slice(0, 24)} · UA ${ua.slice(0, 80)}` },
    timestamp: new Date().toISOString(),
  };

  const discordPayload = {
    username: "DefendableOS Bot",
    avatar_url: "https://defendableos.com/og-image.png",
    embeds: [embed],
  };

  try {
    const r = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    });
    if (!r.ok) {
      const text = await r.text();
      return jsonResponse({
        ok: false,
        error: `Discord rejected the message: ${r.status}`,
        detail: text.slice(0, 200),
      }, 502);
    }
  } catch (e: unknown) {
    return jsonResponse({
      ok: false,
      error: `Discord unreachable: ${e instanceof Error ? e.message : String(e)}`,
    }, 502);
  }

  return jsonResponse({
    ok: true,
    queued: true,
    message:
      "Early access intake received. We'll reply at the email you provided · usually within 24 hours.",
  });
};
