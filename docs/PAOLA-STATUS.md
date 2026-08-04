# Paola Adventurer — Project Status & Handoff

Last updated: 2026-07-30

This file is the memory of the project. A new chat does NOT automatically
remember our old conversation, but **everything we built lives in this
GitHub repo** — so open a new chat, tell Claude to read this file
(`docs/PAOLA-STATUS.md`), and you can keep going right where we left off.

Website: **https://paolaadventurer.com** (GitHub Pages)
Default branch (what the live site serves): **`main`**
(Changed on 2026-07-30 from `claude/camping-safety-card-wrhsqo` to `main`.
Paola switched it in GitHub Settings → Pages. All deploys now go to `main`.)

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
| Unplugged Camp Challenge: Explorer | — | `/unplugged-explorer/` | https://payhip.com/b/9y3IF | ✅ Live |
| Unplugged Camp Challenge: Trailblazer | — | `/unplugged-trailblazer/` | https://payhip.com/b/BI9o6 | ✅ Live |
| Unplugged Camp Challenge: Bundle | — | `/unplugged-bundle/` | https://payhip.com/b/u6iCr | ✅ Live |
| Archery from Zero — English class | $37 launch (value $97) | `/archery/` | (needs product, see below) | 🔜 Coming Soon |
| Archery from Zero — Clase en español | $37 launch (value $97) | `/archery/` | (needs product, see below) | 🔜 Coming Soon |

Bundle = Family Camping Planner + Kids' Pack together.

### Unplugged Camp Challenges (LIVE — added 2026-07-30)
Screen-free outdoor challenge cards for families. Two age tiers:
**Explorer** (ages 11–14, $5) and **Trailblazer** (ages 15–17, $7), each
with 15 challenges across fire, cooking, bushcraft, nature & adventure
categories.
A **Bundle** combines both. Sales pages are bilingual (EN/ES toggle).
Each sales page shows only **3 example challenges + a teaser** ("+ 12
more...") — intentionally NOT giving away all 15 on the page. These are
**digital/printable products with NO refunds** — no money-back guarantee
on any of these pages (Paola's explicit rule: "remove any - ALWAYS" for
guarantee sections on digital products).

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
| `paola.jpg` | About portrait (both EN/ES) |
| `paola-compound-range.jpg` | Home "Meet Paola" portrait |
| `paola-draw-closeup.jpg` | Archery page "Meet Paola" portrait (EN + ES) |
| `paola-recurve-full.jpg` | Archery page hero background + About gallery |
| `paola-recurve-target.jpg` | About gallery |
| `paola-sourdough.jpg` | Sourdough blog featured photo + og:image |
| `paola-archery.jpg` | (legacy, still in assets) |
| `camping-band.jpg` | Home quote band + About gallery |
| `camping-hero.jpg` | About page hero background |
| `archery-hero.jpg` | (legacy, replaced by paola-recurve-full on archery page) |
| `family-camp.jpg` | About gallery |
| `family-archery-range.jpg` | About gallery |
| `teaching-kid-archery.jpg` | About gallery |
| `kids-archery.jpg` | About gallery |
| `tent-setup.jpg` | (legacy, still in assets) |
| `forest-camp.jpg` | (legacy, still in assets) |

**HEIC/raw cleanup DONE (2026-07-28):** deleted 14 unused files (~42MB) —
7 HEIC originals + 7 raw uploads. Only named `.jpg` files remain.

**Optimization note for future photos:** there is no imagemagick in this
env. To resize, use Playwright Chromium (canvas → `toDataURL('image/jpeg',
0.82)` at a target width) and write the base64 to a `.jpg` file. GitHub
web upload caps at 25MB/file; to get usable JPGs from an iPhone, email
photos to yourself at "Large" size.

**Photo hero pattern (CSS):**
`background:linear-gradient(rgba(34,67,47,.62),rgba(34,67,47,.82)),
url('/assets/NAME.jpg') center 30%/cover, var(--forest);` — green overlay +
photo + solid-color fallback. Note absolute `/assets/...` paths resolve on
the LIVE site (site root) but not via local `file://`.

---

## EN/ES language toggle (DONE everywhere)

All pages now use a full **EN/ES toggle** button. Pattern:
two containers `<div id="lang-en">` / `<div id="lang-es" hidden>`, a nav
`.langtoggle` with EN|ES buttons, a `setLang(l)` JS function that toggles
`hidden`, updates the `.active` class, sets `document.documentElement.lang`,
and saves the choice to `localStorage 'pa_lang'`. It defaults to the saved
value or `navigator.language` (es → Spanish). **Requires** the CSS rule
`[hidden]{display:none !important;}`.

Pages with toggle: **home**, **archery**, **emergency-kit**, **adventure-pack**,
**camping-planner**, **bundle**, **faq**, **quiz**, **review**, **about**,
and all **blog** posts. Every product page has a "Shop all / Ver toda la
tienda" back button; the Spanish wording is consistent.

---

## Pages that are LIVE

- `index.html` — homepage storefront + "From the Trail Journal" blog
  teasers + camping-band quote band ("It doesn't have to be perfect...") +
  "Meet Paola" section (now with a "Read our story · Nuestra historia →"
  link to `/about/`)
- `about/` — **About / Our Story page.** Paola's authentic bilingual
  story, centered on her (audience women/moms), husband + family included,
  signature quote, and a **9-photo gallery** (expanded 2026-07-28).
- `bear.html` — free Bear Cheat Sheet (PWA)
- `adventure-pack/`, `camping-planner/`, `bundle/`, `leave-it-better/`,
  `emergency-kit/`, `archery/` — sales pages (all have real-photo heroes)
- `unplugged-explorer/`, `unplugged-trailblazer/`, `unplugged-bundle/` —
  Unplugged Camp Challenge sales pages (bilingual, NO guarantee sections)
- `blog/` — blog index + **9 articles**: `camping-with-kids-first-time`,
  `teach-kids-leave-no-trace`, `try-outdoors-comfort-zone`,
  `emergency-ready-beginners` (CTA → `/emergency-kit/`),
  `what-to-pack-camping-with-kids`, `screen-free-activities-for-kids-by-age`,
  `how-to-start-archery-beginner`, `public-lands-recreation-access`,
  `why-i-bake-sourdough` (featured photo: `paola-sourdough.jpg`)
- `shop/` — product cover images for the homepage cards
- `assets/` — logo, icons, photos
- `manifest.json`, `sw.js` — PWA (installable site)

**Note:** the paid PDFs / product source files are NOT on the default branch
(kept off the public site so nobody downloads them free). They live on the
archive branches `claude/emergency-kit-source` and
`claude/leave-it-better-source`, plus older product folders in history.

---

## How to publish (the reliable flow)

**GitHub Pages now deploys from `main` (changed 2026-07-30).**

Option A — direct push to `main` (simplest for small changes):
1. `git fetch origin main`
2. `git checkout main && git pull origin main`
3. edit → `git add` → `git commit`
4. `git push -u origin main`

Option B — PR workflow (for larger changes):
1. `git fetch origin main`
2. `git checkout -B <new-branch> origin/main`
3. edit → `git add` → `git commit`
4. `git push -u origin <new-branch>`
5. `mcp__github__create_pull_request` (base = `main`)
6. `mcp__github__merge_pull_request` with `merge_method: "squash"`

GitHub Pages then serves the update at paolaadventurer.com. Load the
`mcp__github__*` tools via ToolSearch when needed. Repo:
`Paola250025/Bear-Card`.

**Known issue — unrelated git histories:** Feature branches created
before the switch to `main` may have no common ancestor with `main`.
PRs from these branches get a 405 on squash merge. Workaround: cherry-pick
commits directly onto `main` instead of merging the PR. This happened
with PR #75 on 2026-07-30.

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

## Recently completed (2026-07-31)

- **`/free/` page completely rebuilt:**
  - Removed email gate — Bear Cheat Sheet is now free, no signup required
  - Removed the iframe embed (was showing a confusing page-within-a-page
    with double headers and double nav bars)
  - Two CTA buttons: **"Open My Free Guide"** (opens bear.html) and
    **"Save to My Device"** (opens bear.html?save=1, auto-triggers install)
  - Both buttons in EN and ES
  - Removed MailerLite newsletter form (too crowded)
  - MailerLite is still on the homepage email band — just not on `/free/`
- **Browser-specific install instructions added to `bear.html`:**
  - Detects exact browser: Chrome, Edge, Safari Mac, Firefox, iOS, Android,
    and in-app browsers (Instagram/Facebook/TikTok etc.)
  - **Chrome**: "three-dot menu → Save and share → Install page as app"
  - **Edge**: "three-dot menu → Apps → Install this site as an app"
  - **Safari Mac**: "File → Add to Dock"
  - **Firefox**: can't install as app, falls back to Print/Save as PDF
  - **iOS**: Share button → Add to Home Screen
  - **Android**: three-dot menu → Add to Home screen / Install app
  - **In-app browsers**: tells user to open in a real browser first
  - `?save=1` parameter auto-triggers the install flow and resets any
    previous dismissal of the install bar
  - If Chrome/Edge fires `beforeinstallprompt`, the native install popup
    appears automatically; otherwise falls to manual instructions
  - Install bar text adapts: "Save this guide" on desktop vs
    "Save this to your phone" on mobile
- **Service worker cache at v13**, version.json at `2026-07-31-1`

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

## Recently completed (2026-07-24, session 2)

- **3 new bilingual blog posts** (EN default + ES toggle, each with a Save
  to Pinterest button): `what-to-pack-camping-with-kids`,
  `screen-free-activities-for-kids-by-age`, `how-to-start-archery-beginner`
  (distinctive, coach-authority angle). Blog now has 7 posts.
- **Pinterest Save buttons** added to ALL blog posts (old + new) and a
  floating Save button on ALL product pages. **Done.**
- Pinterest: Paola set up a **business account** ("Paola Adventurer
  Outdoors", @PaolaAdventurer) and **verified the domain** — done.
- **MailerLite connected** (account `2529939`, embedded form `HSJy2W`):
  universal script + form on `/free/` and the home email band (replaced
  FormSubmit). `/free/` now **reveals the interactive Bear guide inline**
  (embeds bear.html in an iframe) right after signup — no redirect, no PDF.
  Detection = MutationObserver on the `.signup` box watching for
  MailerLite's success element + a fallback that fires when the email input
  disappears.
- Home SEO: canonical + og:site_name + WebSite/Organization JSON-LD.
- Google Search Console: verified via GoDaddy, sitemap submitted, home
  re-index requested (waiting on Google to drop the old cached description).
- **About page mobile fixes:** hero is now a clean forest gradient (removed
  the busy photo bg Paola disliked); portrait (her phone photo) is a small
  round image on mobile; gallery is a tidy 2-col square grid. Paola likes
  the family gallery photos — keep them.
- Bumped service worker cache to **v5** (caching kept showing Paola stale
  pages — always tell her to hard-refresh / use incognito after a deploy).

### Paola's open to-dos in MailerLite (told her)
- Verify her MailerLite email; turn OFF double opt-in for instant delivery.
- Optional: set a welcome automation email with the guide.

## Recently completed (2026-07-28)

- **7 new optimized photos** placed across the site: `family-archery-range`,
  `paola-sourdough`, `teaching-kid-archery`, `paola-recurve-target`,
  `paola-draw-closeup`, `paola-recurve-full`, `paola-compound-range`.
- **Archery page:** hero bg → `paola-recurve-full.jpg` (center top), "Meet
  Paola" portrait → `paola-draw-closeup.jpg` (both EN + ES).
- **About page:** gallery expanded from 6 → 9 photos, grid height adjusted,
  `object-position:top` on full-body photo to prevent head cropping.
- **Home page:** "Meet Paola" portrait → `paola-compound-range.jpg`.
- **Sourdough blog:** added featured photo `paola-sourdough.jpg` (EN + ES),
  updated og:image + Pinterest pin media.
- **HEIC/raw cleanup:** deleted 14 unused files (~42MB) from `assets/`.
- **Service worker cache bumped to v7.**
- **Closed stale PR #29** (blog articles already merged via other PRs).
- **Payhip descriptions written:** Emergency-Ready Kit (EN + ES) and
  Camping With Kids Bundle (EN + ES) — short, sales-psychology copy ready
  to paste. Family Camping Planner and Kids' Adventure Pack descriptions
  are fine as-is. Leave It Better could use a light polish later but isn't
  urgent.

## Recently completed (2026-07-30)

- **GitHub Pages switched to deploy from `main` branch.** Paola changed
  this in GitHub Settings → Pages (was `claude/camping-safety-card-wrhsqo`).
  All future deploys go straight to `main` — no more fast-forwarding.
- **3 new Unplugged Camp Challenge products launched:** Explorer (ages 4-8),
  Trailblazer (ages 9-14), and a 2-in-1 Bundle. Full bilingual sales pages
  (EN/ES toggle) at `/unplugged-explorer/`, `/unplugged-trailblazer/`,
  `/unplugged-bundle/`. Payhip checkout links wired up.
- **Shop card image fixes on homepage (`index.html`):**
  - Explorer photo: added `object-position:center 20%` to show kid's face
    (portrait photo was getting head-cropped by the 16/10 aspect ratio)
  - Trailblazer photo: added `object-position:center 15%` to show teen's
    face (same issue, applied to both EN and ES cards)
  - Bundle: replaced emoji gradient placeholder with a proper branded image
    (`shop/unplugged-bundle.png`) — 1200x1200 card matching the existing
    design system (forest green bg, colorful stripe, gold badge, two product
    cards side by side)
- **Sales pages trimmed — no longer giving away all content.** Each
  "What's Inside" section now shows only 3 example challenges + a teaser
  line ("+ 12 more across fire, cooking, bushcraft, nature & adventure")
  instead of listing all 15. Applied to all 3 pages, both EN and ES.
- **All guarantee/money-back sections REMOVED** from Explorer, Trailblazer,
  and Bundle pages (both EN and ES). Paola's rule: **"remove any - ALWAYS"**
  — these are digital/printable products with NO refunds. Also removed the
  unused `.guar` CSS rules from all 3 pages.
- **Service worker cache bumped to v12** (`sw.js` → `bear-card-v12`).
- **version.json bumped to `2026-07-30-3`** for cache busting.
- **PR #75** was created but couldn't squash-merge (unrelated git histories
  between the feature branch and `main`). Resolved by cherry-picking commit
  `e2ab029` directly onto `main`. Deployment confirmed successful.

### Shop card image generation notes (for future reference)
- Brand card design: forest green (#22432f) background, colorful stripe at
  top (alternating terracotta/khaki/green/gold blocks), gold (#e8b93f) circle
  badge with emoji, white serif title (Bitter font), gold subtitle italic,
  gold pill with uppercase text, emoji row at bottom, paolaadventurer.com
  footer.
- Single products: 1600x1000 or 1200x900. Bundles: 1200x1200.
- Generated with Playwright Chromium: `executablePath:
  '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'`, requires
  `NODE_PATH=/opt/node22/lib/node_modules`.
- Portrait photos (1512x2016) in 16/10 landscape cards need
  `object-position` CSS to show faces (e.g. `center 20%` or `center 15%`).

## Recently completed (2026-07-28, session 2)

- **EN/ES toggle DONE on home page** (`index.html`): full Spanish translation
  of announce bar, header, 7 product cards, quote band, blog teasers, "Meet
  Paola" section, testimonials, and email signup. Nav link text switches
  dynamically ("Printables"↔"Imprimibles", etc.). Uses same pattern as other
  pages: `<div id="lang-en">` / `<div id="lang-es" hidden>`, `setLang(l)` JS
  with localStorage + browser-language detection, `.langtoggle` nav buttons.
- **Archery page already had full EN/ES toggle** — no changes needed.
- **Service worker cache bumped to v7.**
- **Payhip descriptions written:** Emergency-Ready Kit (EN + ES) and Camping
  With Kids Bundle (EN + ES) — short, sales-psychology copy. Descriptions for
  Family Camping Planner and Kids' Adventure Pack are fine as-is. Leave It
  Better could use a light polish later.
- **All changes merged to live** via squash-merge PRs.

### LinkedIn (Real Estate — separate from Paola Adventurer)

Paola also has a real estate career with **Manna Realty** (DRE# 02116904),
working alongside her husband **Olaf** (35+ years experience, has his own
LinkedIn). Decision: **keep LinkedIn strictly real estate** — do NOT mention
Paola Adventurer on LinkedIn. The two brands serve different audiences.

**LinkedIn profile optimized (2026-07-28):**
- Headline: `Real Estate Agent | Buyers & Sellers | EN/ES | Inland Empire · LA · Orange County`
- About section: bilingual, personal story, combined experience angle
- Experience: Manna Realty, started 2018-2020
- Skills: Real Estate, Negotiation, First-Time Homebuyers, Bilingual EN/ES,
  Market Analysis, Client Relations, Contract Negotiation, CMA, Open Houses,
  Buyer Representation
- Services added on LinkedIn
- Custom URL set

**LinkedIn posting strategy:**
- 3-4 posts/week: Mon, Wed, Fri at 8-10 AM. No weekends.
- Format: short lines, white space, end with a question, 3-5 hashtags max.
- Photos: Paola/Olaf at work or properties, never generic stock.
- On non-posting days (Tue/Thu): engage on others' posts (15 min).
- Content pillars: market data, buyer education, myth-busting, team intro.

**6 LinkedIn posts written (ready to schedule):**
1. Mon Jul 28 — Rates ~6.6%, "marry the house, date the rate" angle
2. Wed Jul 30 — OC inventory at 2026 high (5,165 homes), buyer opportunity
3. Fri Aug 1 — "Should I wait for rates to drop?" (most common Q)
4. Mon Aug 4 — Price comparison: IE $630K / LA $845K / OC $1.47M
5. Wed Aug 6 — Market shifting toward buyers (homes sitting longer)
6. Fri Aug 8 — Team intro (Paola + Olaf, 40+ combined years, bilingual)

**Market data sourced (July 2026):**
- 30-year fixed rates: 6.58-6.88%
- OC median: $1,470,000 (up 3.7% YoY)
- LA County median: $845,410
- Inland Empire median: $629,950
- OC inventory: 5,165 (new 2026 high)
- Trend: slightly shifting toward buyers

---

## Ideas parked / next up (tell Claude when ready)

- **Welcome automation email** in MailerLite (deliver guide + intro).
- **More blog posts** (Paola supplies topics she's excited about).
- **Paola task:** Enable Payhip reviews (Settings → Reviews).
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
- **LinkedIn next batch of posts** (week 3-4): continue the market-data +
  value format. Research fresh rates/inventory before writing.
- **Olaf's LinkedIn profile** could get the same optimization treatment.
- **Leave It Better Payhip description** — light polish (not urgent).
- **Enforce HTTPS** — was unchecked in Paola's GitHub Pages screenshot
  (2026-07-30). She should check it in Settings → Pages.
- **Unplugged products need prices in the status file** — Paola hasn't
  confirmed exact pricing yet. Update the products table when she does.
- **Service worker cache** is at **v12** as of 2026-07-30. Bump it on
  every content change (edit `sw.js` CACHE_NAME + `version.json` build).

---

## IMPORTANT RULES (apply to ALL future work)

1. **NO money-back guarantees on ANY digital/printable product.** Paola's
   words: "remove any - ALWAYS." These are digital products with no refunds.
   Never add a guarantee section. If a template or pattern includes one,
   remove it.
2. **Sales pages should NOT list all product contents.** Show ~3 examples +
   a teaser ("+ 12 more..."). Don't give away the full product on the
   free page.
3. **GitHub Pages deploys from `main`.** Don't push to or reference the old
   `claude/camping-safety-card-wrhsqo` branch for deployment.
4. **Brand photos use `object-position`** when placed in landscape cards to
   show faces. Always check cropping when adding portrait photos.
