---
name: paola-adventurer
description: >-
  Foundational brand reference for Paola Adventurer — an outdoor/adventure
  personal brand (archery, camping, exploring) selling low-ticket digital
  classes. Use this whenever building, editing, or writing ANYTHING for the
  Paola Adventurer brand: websites and sales pages, product copy, class
  content, video scripts, social posts, brand graphics, or answering
  questions about the brand's identity, products, voice, or hosting setup.
  Covers who Paola is, the visual identity (OKLCH palette, Bitter/Oswald/Work
  Sans, vintage-badge logo), writing voice, the live products, and how the
  sites are hosted. Complements the sales/marketing skill — this one is the
  identity + business + tech source of truth; use both together for sales work.
---

# Paola Adventurer — Brand Source of Truth

## What the brand is

Personal outdoor brand run by **Paola** offering **low-ticket digital classes**
in archery, camping, and outdoor living. Impulse-buy pricing, no sales calls,
no long funnels.

- **Handle:** @paolaadventurer (Instagram is the main traffic source)
- **Domain:** paolaadventurer.com (owned)
- **Tagline:** "Aventura sin miedo" / "Adventure without fear"
- **Scope:** Archery · Camping · Explore (the logo says this explicitly — don't
  narrow the brand to archery only)
- **Business model:** low-ticket digital products, typical range $9–$47 USD
- **Audience:** beginner women and families who want to try something outdoors
  that feels intimidating. "If I could, you can too."

Paola is also a multi-project entrepreneur (real estate in Southern California
with Olaf; Paola Adventurer is the outdoor personal brand). For anything under
this brand, the face and voice is **Paola herself**, not an impersonal company.

## Voice & tone

Warm, encouraging, adventurous, practical. A capable woman inviting beginners
in. Never technical or manual-like, never pushy or cheesy.

Pedagogy when a product teaches something: remove beginner shame first, one
concept at a time, quick early wins, normalize mistakes. Per-product anchor
phrase, e.g. "It doesn't have to be perfect, it just has to happen" / "No tiene
que ser perfecto, tiene que pasar."

**Language:** Spanish primary, English secondary — bilingual by default unless
told otherwise. Neutral Spanish, no regionalisms (no "vos", "che", "órale",
"chido"). Use "tú." English should read equally well in the US, UK, or
Australia.

### Anti-AI writing rules (audit every draft against these)

Banned phrases: "In today's world", "In the digital age", "Nowadays", "It is
important to highlight", "Dive into", "Revolutionary", "Empower", "Without a
doubt", "It is not X, it is Y", "Unlock", "Take X to the next level".

Banned patterns: opening with a rhetorical question; ending with a moral or
motivational call; lists of 3 where every item has the same structure; em
dashes everywhere.

How Paola actually writes: direct (main idea in the first sentence); concrete
(real numbers and examples before abstractions); paragraphs of 3 sentences max.

"Done" means ready to copy, paste, publish, or send — and it does not sound
generic or AI-written.

## Visual identity

Rustic, robust, warm minimalism. Vintage-outdoor, not corporate or
minimalist-tech.

**Colors (OKLCH — use directly in modern CSS, do not convert to hex):**

| Role | Value |
|---|---|
| Primary — Verde Bosque (forest green) | `oklch(32% 0.07 150)` |
| Accent — Terracota (burnt orange/rust) | `oklch(55% 0.14 35)` |
| Background — Crema | `oklch(97% 0.014 85)` |
| Neutral — Khaki | `oklch(80% 0.045 80)` |
| Text — Café Oscuro | `oklch(24% 0.02 50)` (muted: `/ 0.7`) |

Rule: max 1–2 background colors per piece. No decorative gradients.

**Typography (Google Fonts):**
- **Bitter** (serif) — headings, 700–900, italic for quotes/anchor phrases
- **Oswald** (condensed) — labels, buttons, nav; UPPERCASE, letter-spacing 1–4px
- **Work Sans** — body copy

**Logo:** vintage circular badge ("Escudo Vintage") — archer silhouette,
mountain, tent, campfire, vertical arrow splitting the design, "PAOLA
ADVENTURER · ARCHERY · CAMPING · EXPLORE." Transparent PNG for colored/photo
backgrounds; solid PNG otherwise. PA monogram square (Bitter 900, cream on
forest green) for favicons/stickers. In this repo:
`assets/logo-badge-transparent.png`, `assets/icon-192.png`, `assets/icon-512.png`.

**Visual language:** card radius 14–20px; pill radius 100px; image radius 16px;
soft shadow `0 6px 20px oklch(24% 0.02 50 / 0.12)`; pill labels in Oswald
uppercase (terracotta or forest bg, cream text); thin arrow motif for archery
flavor, used sparingly. Generous whitespace. Real photos of Paola in action, not
stock. Never: emoji, decorative gradients, generic-corporate polish, AI-slop
tropes (sparkle/lightbulb icons, fake polish).

## Products & sites

Everything is hosted on **GitHub Pages** (free, static) under
`paolaadventurer.com`, DNS at GoDaddy. Repo: `Paola250025/Bear-Card`.

| Product | Type | URL | Notes |
|---|---|---|---|
| **Bear Country Cheat Sheet** | Free lead magnet | `paolaadventurer.com/` (root, `index.html`) | Bilingual bear-safety card for nervous camping moms. Lead capture via FormSubmit → adventurerpaola@gmail.com. Analytics: GoatCounter (`paolaadventurer`). PWA + offline (sw.js). |
| **Archery From Zero** | Paid digital class | `paolaadventurer.com/archery/` (`archery/index.html`) | 15-lesson beginner archery class. Sales page on GitHub; **video delivery on Payhip, payment via Stripe**. Launch price $37 (anchor $89). $100 bonus ("What Bow Should I Choose?"). No refunds. |

**Hosting/tech stack:** GitHub Pages (static, no backend), Payhip for digital
product hosting + delivery, Stripe for payments, FormSubmit for lead forms,
GoatCounter for analytics. No build step — files in the repo are served as-is.
Fonts loaded via Google Fonts `<link>`. CNAME file sets the custom domain.

**Product-specific facts to respect** (from Paola, not invented):
- Archery From Zero: $37 launch / $89 anchor, $100 bonus value, lifetime access,
  15 lessons, no refunds (self-study, all sales final — stated plainly, not
  apologetically). Credentials: USA Archery Level 2, NASP Instructor.
- No fabricated testimonials — Paola has student photos, not written quotes. Use
  photos as proof instead of inventing quotes.

## Sales psychology (apply by default on any sales piece)

1. Pain → reframe → solution in the first lines. Name the specific beginner
   fear, remove the shame ("the problem isn't you"), then present the product.
2. Price anchor — show launch price next to a higher "real value."
3. Stack bonuses instead of cutting price further; give the bonus an explicit
   dollar value.
4. Low-friction guarantee where the product allows it — but honor
   product-specific decisions (Archery From Zero is explicitly no-refund).
5. FAQ as objection-handling, not neutral info.
6. First-person CTA ("I want my first class", not "Buy now").
7. Specificity over vagueness ("Learn X in 20 minutes" beats "Learn about X").

Use whichever fit the format — an IG ad needs hook + pain + CTA, not an FAQ.
(For the full marketing playbook and deliverable formats, defer to the
`paola-adventurer-marketing` skill.)

## Before delivering anything, check

- Is every price/value figure from Paola, or invented? If invented, ask first.
- Does Spanish avoid regionalisms? Does English read well in US/UK/AU?
- Does it sound like Paola talking to a friend, not a manual or a pushy seller?
- Does the visual match this guide (OKLCH palette, Bitter/Oswald/Work Sans,
  vintage badge, real photos) instead of a generic corporate default?
- If the product involves outdoor physical activity, is there a safety notice?
- Ask clear questions before building something important; don't assume key
  info (price, product name, platform, cross-sell bonus) — ask.
