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
| Leave It Better · Déjalo Mejor | $9 (anchor $24) | `/leave-it-better/` | https://payhip.com/b/FQSRe | ✅ Live |
| Archery from Zero — English class | $37 launch (value $97) | `/archery/` | (TWO products, see below) | 🔜 Coming Soon |
| Archery from Zero — Clase en español | $37 launch (value $97) | `/archery/` | (TWO products, see below) | 🔜 Coming Soon |

Bundle = Family Camping Planner + Kids' Pack together.

Archery is a **self-paced digital video class** (online, watch anytime at
your own pace). It is **TWO separate Payhip products**, one in English and
one in Spanish (not one bilingual product). **Focus first on English**, then
Spanish. Each language product includes its own matching-language bonus:
"Choose Your Bow" (EN) / "Elige tu Arco" (ES). Audience: adult beginners and
families. Instructor: USA Archery Level 2 + NASP certified.

The archery page has **two buy buttons** (English + Español), each wired to
its own link so English can launch while Spanish stays Coming Soon:
- `archery/index.html` → `CHECKOUT_URL_EN` = English Payhip link
- `archery/index.html` → `CHECKOUT_URL_ES` = Spanish Payhip link

**Leave It Better · Déjalo Mejor** (new, $9 / value $24): a 15-page
printable "camping kindness & clean-up kit" for families, ages 4-10. Teaches
parents (good-neighbor rules: noise, music, quiet hours, lights, pets, fire)
AND kids (Junior Ranger badges, Trash Treasure Hunt, Leave No Trace bingo,
Spot & Fix game, family pledge, certificate). Two separate PDFs (EN + ES) +
a Start Here page. The 3 finished PDFs were sent to Paola to upload to ONE
Payhip product; source + PDFs are archived on branch
`claude/leave-it-better-source` (kept off the public site). To launch: create
the Payhip product ($9), then paste its link into `CHECKOUT_URL` in
`leave-it-better/index.html`.

**Email waitlist:** the archery page collects emails ("Be the first to
know") and sends each signup to **adventurerpaola@gmail.com** via
FormSubmit.co (free, no account). ⚠️ **One-time activation:** submit the
form once yourself with any email; FormSubmit sends an activation link to
adventurerpaola@gmail.com — click it once and the waitlist is live forever.
Coming Soon buttons scroll people to this form.

---

## What YOU still need to do (Paola)

1. **Create the archery Payhip products.** Make **TWO** products, English
   first: set each to **$37**. Then tell Claude to paste the English link
   into `CHECKOUT_URL_EN` (and later the Spanish link into `CHECKOUT_URL_ES`)
   in `archery/index.html` to flip it from Coming Soon to live.
2. **Activate the archery waitlist** (one time): open the archery page,
   submit the email form once, then click the activation link FormSubmit
   sends to adventurerpaola@gmail.com. After that every signup arrives in
   your inbox automatically.
3. **Upload your real photos to GitHub** so they show on the site:
   - `assets/paola.jpg` → "Meet Paola" photo on the homepage
   - `assets/paola-archery.jpg` → your photo on the archery page
   - (Until uploaded, the pages show the logo badge as a placeholder — no
     broken images.)
4. **Connect a payout method in Payhip** (Stripe or PayPal) so you get
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
