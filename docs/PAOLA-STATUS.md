# Paola Adventurer — Project Status & Handoff

Last updated: 2026-07-21

This file is the memory of the project. A new chat does NOT automatically
remember our old conversation, but **everything we built lives in this
GitHub repo** — so open a new chat, tell Claude to read this file
(`docs/PAOLA-STATUS.md`), and you can keep going right where we left off.

Website: **https://paolaadventurer.com** (GitHub Pages)

---

## The brand

Paola Adventurer is a complete outdoors brand for families (camping,
archery, exploring) — not just printables. The homepage is a storefront
with a card for every product. Voice: warm, encouraging, bilingual
(English + Español), cute but trustworthy. Tagline: *Archery · Camping ·
Explore.*

Brand colors: forest `#22432f` / `#2f6b45`, terracotta `#b5562f`,
sun/gold `#e8b93f`, cream `#faf7f0`, khaki `#d8c9a3`.

---

## Products & prices

| Product | Price | Live sales page | Payhip link | Status |
|---|---|---|---|---|
| Bear Country Cheat Sheet | Free | `/bear.html` | (freebie, lead magnet) | ✅ Live |
| Kids' Outdoor Adventure Pack | $5 | `/adventure-pack/` | https://payhip.com/b/T3yrk | ✅ Live |
| Family Camping Planner | $7 (anchor $17) | `/camping-planner/` | https://payhip.com/b/cYHMy | ✅ Live |
| Camping With Kids Bundle | $9 (anchor $12) | `/bundle/` | https://payhip.com/b/3lRQs | ✅ Live |
| Archery from Zero (digital video class) | $37 launch (value $97) | `/archery/` | https://payhip.com/b/6MTgl | 🔜 Coming Soon |

Bundle = Family Camping Planner + Kids' Pack together.

Archery is a **self-paced digital video class** (online, watch anytime at
your own pace), bilingual but taught as **separate English and Spanish
classes**. Bonus = "Choose
Your Bow / Elige Tu Bow" mini-class. Audience: adult beginners and
families. Instructor: USA Archery Level 2 + NASP certified.

---

## What YOU still need to do (Paola)

1. **Set the archery price in Payhip.** Product https://payhip.com/b/6MTgl
   currently has no pricing plan. Set it to **$37**. When ready to launch,
   tell Claude to flip archery from "Coming Soon" to live (paste the link
   into `archery/index.html` `CHECKOUT_URL`).
2. **Upload your real photos to GitHub** so they show on the site:
   - `assets/paola.jpg` → "Meet Paola" photo on the homepage
   - `assets/paola-archery.jpg` → your photo on the archery page
   - (Until uploaded, the pages show the logo badge as a placeholder — no
     broken images.)
3. **Connect a payout method in Payhip** (Stripe or PayPal) so you get
   paid. One Payhip product = one link; each link can hold multiple files
   (e.g. English + Spanish PDFs + a "Start Here" guide).

---

## Payhip file uploads (what goes in each product)

- **Kids' Pack (T3yrk):** `Kids-Outdoor-Adventure-Pack.pdf`
- **Family Camping Planner (cYHMy):** `Family-Camping-Planner-EN.pdf`,
  `Planificador-Campamento-Familiar-ES.pdf`, `00-START-HERE.pdf`
- **Bundle (3lRQs):** all of the above together
- **Archery (6MTgl):** your video class files (upload when recorded)

The actual PDFs live in the repo under `products/` (kept OFF the public
website on purpose so no one can download them for free — only the sales
pages and watermarked previews are public).

---

## Repo map (where things are)

- `index.html` — homepage storefront + "Meet Paola" section
- `bear.html` — the free Bear Cheat Sheet (PWA)
- `adventure-pack/`, `camping-planner/`, `bundle/`, `archery/` — sales pages
- `shop/` — product cover images used on the homepage cards
- `assets/` — logo, icons, and (once you upload them) your photos
- `products/` — source files, the real paid PDFs, marketing copy, Pinterest pins
- `products/marketing/ig-tiktok-content-plan.txt` — Instagram/TikTok plan
- `manifest.json`, `sw.js` — makes the site installable (PWA)

Publishing = edit files → commit → open PR → merge into the default
branch. GitHub Pages then serves the update at paolaadventurer.com.

---

## Traffic plan (priority: Instagram + TikTok)

See `products/marketing/ig-tiktok-content-plan.txt` for Reel/TikTok ideas,
a caption formula, bio setup, and a weekly posting plan. The free Bear
Cheat Sheet is the lead magnet — give it away in Stories/Reels to bring
moms in, then point them to the paid products.

---

## Ideas we parked (for later)

- Instagram/TikTok pin + post specifically for the archery launch
- Bundle Pinterest pin
- Wildlife Safety Guide (a possible next product)
- About page / blog / email capture on the site

**To continue in a new chat:** say *"Read docs/PAOLA-STATUS.md and let's
keep working on Paola Adventurer."*
