# Paola Adventurer — Project Status & Handoff

Last updated: 2026-07-23

This file is the memory of the project. A new chat does NOT automatically
remember our old conversation, but **everything we built lives in this
GitHub repo** — so open a new chat, tell Claude to read this file
(`docs/PAOLA-STATUS.md`), and you can keep going right where we left off.

Website: **https://paolaadventurer.com** (GitHub Pages)
Default branch (what the live site serves): `claude/camping-safety-card-wrhsqo`

**To resume in a new chat:** say *"Read docs/PAOLA-STATUS.md and let's keep
working on Paola Adventurer."*

---

## The brand & voice

Paola Adventurer is a complete outdoors brand for families (camping,
archery, exploring) — not just printables. The homepage is a storefront
with a card for every product.

**Who it is:** The brand is **Paola** — it's her voice, her story. She
**includes her husband and family** (her husband is her adventure partner
and taught her a lot), **but she stays the center**. Her **core audience is
women / moms**.

**Her real story (use this voice everywhere):** Paola did NOT grow up doing
this — she found the outdoors **as an adult** and fell in love with being a
beginner, trying new things, and learning as she goes. She shares her real,
imperfect process (the wins AND the awkward first tries) because she
believes **the world would be a better place if we all spent more time
outside**, off the screens, together. Her signature line, which describes
her a lot: **"It doesn't have to be perfect. It just has to happen."** And:
**"If I could start from zero, so can you."**

Voice: warm, encouraging, honest, bilingual (English + Español), real
outdoors feel (not cartoonish). Tagline: *Archery · Camping · Explore.*

Brand colors: forest `#22432f` / `#2f6b45`, terracotta `#b5562f`,
sun/gold `#e8b93f`, cream `#faf7f0`, khaki `#d8c9a3`.
Fonts: Bitter (headings), Nunito / Work Sans / Oswald (body),
Fredoka / Baloo (kids' pack only).

---

## Products & prices

| Product | Price | Live sales page | Payhip link | Status |
|---|---|---|---|---|
| Bear Country Cheat Sheet | Free | `/bear.html` | (freebie, lead magnet) | ✅ Live |
| Kids' Outdoor Adventure Pack | $5 | `/adventure-pack/` | https://payhip.com/b/T3yrk | ✅ Live |
| Family Camping Planner | $7 (anchor $17) | `/camping-planner/` | https://payhip.com/b/cYHMy | ✅ Live |
| Camping With Kids Bundle | $9 (anchor $12) | `/bundle/` | https://payhip.com/b/3lRQs | ✅ Live |
| Leave It Better · Déjalo Mejor | $9 (anchor $24) | `/leave-it-better/` | https://payhip.com/b/FQSRe | ✅ Live |
| Emergency-Ready Kit · Lista para Todo | $9 (anchor $24) | `/emergency-kit/` | https://payhip.com/b/R8nDm | ✅ Live |
| Archery from Zero — English class | $37 launch (value $97) | `/archery/` | (needs product, see below) | 🔜 Coming Soon |
| Archery from Zero — Clase en español | $37 launch (value $97) | `/archery/` | (needs product, see below) | 🔜 Coming Soon |

Bundle = Family Camping Planner + Kids' Pack together.

### Emergency-Ready Kit (newest, LIVE — Payhip R8nDm, $9 / value $24)
A 12-page bilingual "be ready for anything" kit for families. Structured
around **5 essentials "buckets"** (the sales copy promises 5 buckets, and
the checklists inside follow that same 5-bucket style for consistency). The
camping list includes poison oak treatment, sunscreen, chapstick, and bug
spray. Delivered as **TWO separate PDFs (EN + ES) + a "Start Here" page**
(the Start Here has NO flags — it uses A/B markers to tell people which file
to download). Source + generated PDFs + the two Payhip cover images
(`cover-payhip-EN.png` / `cover-payhip-ES.png`) are archived on branch
**`claude/emergency-kit-source`** (kept off the public site).

### Leave It Better · Déjalo Mejor (LIVE — Payhip FQSRe, $9 / value $24)
15-page printable "camping kindness & clean-up kit" for families ages 4-10.
Teaches parents (good-neighbor rules) AND kids (Junior Ranger badges, Trash
Treasure Hunt, Leave No Trace bingo, family pledge, certificate). Two PDFs
(EN + ES) + Start Here. Source archived on branch
**`claude/leave-it-better-source`**.

### Archery (Coming Soon — the big one)
A **self-paced digital video class** (online, watch anytime). It is **TWO
separate Payhip products**, one English + one Spanish (NOT one bilingual
product). **Launch English first**, then Spanish. Each includes its own
matching-language bonus: "Choose Your Bow" (EN) / "Elige tu Arco" (ES).
Audience: adult beginners and families. Instructor: USA Archery Level 2 +
NASP certified. The archery page has **two buy buttons** (EN + ES), each
wired to its own `CHECKOUT_URL_EN` / `CHECKOUT_URL_ES` in
`archery/index.html`, so English can launch while Spanish stays Coming Soon.

**Email waitlist:** the archery page collects emails and sends each signup
to **adventurerpaola@gmail.com** via FormSubmit.co. ⚠️ **One-time
activation:** submit the form once yourself; FormSubmit emails an activation
link to adventurerpaola@gmail.com — click it once and the waitlist is live
forever. Coming Soon buttons scroll people to this form.

---

## Photos (DONE — real photos are live)

Paola's real photos are uploaded and optimized (no more cartoon feel). All
in `assets/`, used as green-overlay hero backgrounds + gallery/portrait:

| File | Where it's used |
|---|---|
| `hero-home.jpg` | Home page top hero background |
| `paola.jpg` | "Meet Paola" (home) + About portrait |
| `paola-archery.jpg` | Archery page + About gallery |
| `camping-band.jpg` | Home quote band + About gallery |
| `camping-hero.jpg` | About page hero background |
| `archery-hero.jpg` | Archery page hero background |
| `family-camp.jpg` | About gallery |
| `kids-archery.jpg` | About gallery |
| `tent-setup.jpg` | About gallery |
| `forest-camp.jpg` | About gallery |

**Optimization note for future photos:** there is no imagemagick in this
env. To resize, use Playwright Chromium (canvas → `toDataURL('image/jpeg',
0.82)` at a target width) and write the base64 to a `.jpg` file. HEIC files
are NOT web-displayable — the raw `IMG_*.HEIC` files still sitting in
`assets/` are unused leftovers and can be deleted (only the named `.jpg`
files are referenced). GitHub web upload caps at 25MB/file; to get usable
JPGs from an iPhone, email photos to yourself at "Large" size.

**Photo hero pattern (CSS):**
`background:linear-gradient(rgba(34,67,47,.62),rgba(34,67,47,.82)),
url('/assets/NAME.jpg') center 30%/cover, var(--forest);` — green overlay +
photo + solid-color fallback. Note absolute `/assets/...` paths resolve on
the LIVE site (site root) but not via local `file://`.

---

## EN/ES language toggle

The Emergency Kit sales page uses a full **EN/ES toggle** button. Pattern:
two containers `<div id="lang-en">` / `<div id="lang-es" hidden>`, a nav
`.langtoggle` with EN|ES buttons, a `setLang(l)` JS function that toggles
`hidden`, updates the `.active` class, sets `document.documentElement.lang`,
and saves the choice to `localStorage 'pa_lang'`. It defaults to the saved
value or `navigator.language` (es → Spanish). **Requires** the CSS rule
`[hidden]{display:none !important;}`.

Paola LIKES this toggle. **Still to add it to:** home page, camping-planner,
adventure-pack, bundle (these currently show EN + ES stacked rather than a
toggle). Every product page has a "Shop all / Ver toda la tienda" back
button; the Spanish wording was fixed to be consistent.

---

## Pages that are LIVE

- `index.html` — homepage storefront + "From the Trail Journal" blog
  teasers + camping-band quote band ("It doesn't have to be perfect...") +
  "Meet Paola" section (now with a "Read our story · Nuestra historia →"
  link to `/about/`)
- `about/` — **About / Our Story page (NEW).** Paola's authentic bilingual
  story, centered on her (audience women/moms), husband + family included,
  signature quote, and a 6-photo gallery.
- `bear.html` — free Bear Cheat Sheet (PWA)
- `adventure-pack/`, `camping-planner/`, `bundle/`, `leave-it-better/`,
  `emergency-kit/`, `archery/` — sales pages (all have real-photo heroes)
- `blog/` — blog index + 4 articles: `camping-with-kids-first-time`,
  `teach-kids-leave-no-trace`, `try-outdoors-comfort-zone`,
  `emergency-ready-beginners` (its CTA links to `/emergency-kit/`)
- `shop/` — product cover images for the homepage cards
- `assets/` — logo, icons, photos
- `manifest.json`, `sw.js` — PWA (installable site)

**Note:** the paid PDFs / product source files are NOT on the default branch
(kept off the public site so nobody downloads them free). They live on the
archive branches `claude/emergency-kit-source` and
`claude/leave-it-better-source`, plus older product folders in history.

---

## How to publish (the reliable flow)

Always branch FRESH from the default branch to avoid squash-merge
divergence:
1. `git fetch origin claude/camping-safety-card-wrhsqo`
2. `git checkout -B <new-branch> origin/claude/camping-safety-card-wrhsqo`
   (commit or stash working changes first — this can discard uncommitted
   edits)
3. edit → `git add` → `git commit`
4. `git push -u origin <new-branch>`
5. `mcp__github__create_pull_request` (base =
   `claude/camping-safety-card-wrhsqo`)
6. `mcp__github__merge_pull_request` with `merge_method: "squash"`

GitHub Pages then serves the update at paolaadventurer.com. Load the
`mcp__github__*` tools via ToolSearch when needed. Repo:
`Paola250025/Bear-Card`.

---

## What YOU still need to do (Paola)

1. **Archery Payhip products.** Create TWO products (English first) at $37.
   Then tell Claude to paste the English link into `CHECKOUT_URL_EN` (later
   the Spanish into `CHECKOUT_URL_ES`) in `archery/index.html` to flip it
   from Coming Soon to live.
2. **Activate the archery waitlist** (one time): open the archery page,
   submit the email form once, click the FormSubmit activation link sent to
   adventurerpaola@gmail.com.
3. **Payout method in Payhip** (Stripe or PayPal) so you get paid.
4. **Upload archery video files** to the archery Payhip products once
   recorded.

---

## Reviews — how they work (IMPORTANT)

Two paths, use both:
1. **Manual featured reviews (site is static, so this is how they appear on
   the site):** the `/review/` form emails each submission to
   adventurerpaola@gmail.com. It does NOT auto-publish. To show one, Paola
   pastes the text here and Claude hand-adds it to the "What families are
   saying" section on the home page (`index.html`, class `.testi` — copy a
   `.t` card block: stars + `<p>` quote + `.who` name). This gives Paola
   full control of what's shown.
2. **Payhip verified reviews (auto):** Paola enables Reviews in Payhip
   (Settings → Reviews, or per product). Real buyers get a review request
   email; those star reviews show automatically on the Payhip product page.
   (Paola chose this option; still needs to turn it on.)

**Live reviews on the home page:** Andrea (mom of 3, ★★★★★) — first real
review, added 2026-07-24. Mentions the Kids' Outdoor Adventure Pack and
bear-season prep with little ones.

---

## Recently completed (2026-07-23/24)

- Home **nav menu** (Printables · Classes · Start Here · Blog · My Story ·
  FAQ), announcement bar, hero CTAs, email capture band (FormSubmit →
  Gmail), testimonials section, IG + Pinterest links (real URLs).
- New pages: `/faq/`, `/review/`, `/quiz/` (Start Here product finder) — all
  bilingual with the EN/ES toggle.
- SEO: `robots.txt`, `sitemap.xml`, Product JSON-LD on every sales page +
  FAQ JSON-LD. **Done.**
- **EN/ES toggle DONE** on adventure-pack, camping-planner, bundle (full
  Spanish translations). About page reworded to "My Story / Mi Historia".
- Blog: new bilingual advocacy post `/blog/public-lands-recreation-access/`
  ("Our Public Lands Are Worth Fighting For", EN default + ES toggle).

## Ideas parked / next up (tell Claude when ready)

- **EN/ES toggle** still needed on: the **home page** and the **archery**
  page (bilingual back button + copy).
- **Pinterest "Save" buttons** on blog images (parked).
- **More blog posts** (Paola supplies topics she's excited about).
- **Emergency Kit marketing:** full Payhip product description + Pinterest /
  Instagram content.
- **Paola task:** register the site in Google Search Console + submit the
  sitemap. Enable Payhip reviews.
- **Google shows an OLD cached description** for paolaadventurer.com
  ("Go from idea to live site in minutes. Get 50 free credits") — leftover
  from the previous website-builder "coming soon" page. The current site's
  meta description is already correct; home now has canonical + WebSite/
  Organization JSON-LD. FIX: in Google Search Console, use URL Inspection →
  Request Indexing on https://paolaadventurer.com and submit sitemap.xml,
  then wait days/weeks for Google to re-crawl. (Site already ranks #1 for
  "paola adventurer".) Need to know the domain registrar to help verify.
- **GitHub repo About description**: Paola to edit at
  github.com/Paola250025/Bear-Card (gear next to About) so the repo doesn't
  compete in brand search; uncheck "Use your GitHub Pages website".
- **Traffic:** Instagram + TikTok is the priority. The free Bear Cheat Sheet
  is the lead magnet — give it away in Stories/Reels, then point to paid
  products.
- Align the archery page copy with the polished brand voice.
- Possible future product: Wildlife Safety Guide.
- Clean up unused `IMG_*.HEIC` files in `assets/`.
