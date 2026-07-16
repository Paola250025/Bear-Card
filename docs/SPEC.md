# Bear Country Cheat Sheet — Spec

## What it is
A single-page, self-contained bilingual (EN/ES) web card that helps nervous first-time camping moms feel prepared for bear country. Built for Paola Adventurer as a free lead magnet — not a paid product. Live at **https://paolaadventurer.com**.

## Tech stack
- One file: `index.html` — HTML + CSS + vanilla JS, no framework, no build step, no npm dependencies.
- Fonts: Google Fonts (Bitter, Oswald, Work Sans), loaded via `<link>`.
- Hosting: GitHub Pages, repo `Paola250025/Bear-Card`.
- Custom domain: `paolaadventurer.com` via `CNAME` file in repo root + GoDaddy DNS (4 A records to GitHub's IPs + `www` CNAME to `paola250025.github.io`). Confirmed working.
- Two third-party services, both free, both client-side only (no backend, no server code anywhere in this project):
  - **FormSubmit.co** — powers the lead capture form, emails submissions to `adventurerpaola@gmail.com`.
  - **GoatCounter** — cookie-free visit analytics, site code `paolaadventurer`.

## File structure
```
index.html                        the whole site
manifest.json                     PWA manifest (home-screen install)
apple-touch-icon.png              180x180 iOS home-screen icon
CNAME                             GitHub Pages custom domain config
assets/
  logo-badge-transparent.png      real Paola Adventurer logo (extracted from a design-tool export)
  icon-192.png / icon-512.png     home-screen + og:image icons, generated from the real logo
docs/
  SPEC.md, ROADMAP.md, HANDOFF.md this documentation
```
No `src/`, no build output — what's in the repo is exactly what's served.

## Content structure
9 tabs, ordered by emotional priority (reassurance first, procedural content after) rather than alphabetically or by topic:
1. **For You, Mama** (default/first tab) — reassurance stat (<1 bear-related death per year in North America, with a bold label directly under the number so it reads at a glance rather than requiring the full paragraph) + solo-parent protocol
2. **Feel Ready & Enjoy** — confidence tips + "make it fun" activity list
3. **Staying Calm** — what to do if you see a bear (renamed from "If You See One" — softened wording)
4. **Store Food Right** — food storage rules (bear box / car trunk)
5. **For The Kids** — STOP / STAY / NO RUNNING / BIG & LOUD rule
6. **Know Your Area** — search tool + links to USGS/NPS (see "Why no bear-range database" below)
7. **Just In Case** — offline-saved trip info fields + first aid + separated-from-group protocol
8. **Fun Facts** — black bear facts, California-sourced stats
9. **Questions, Answered** — FAQ for first-timer worries beyond bears (rain, sleep, forgetting gear, boredom, cold feet)

Below all tabs, persistent across every tab: the lead-capture form ("Want A Hand Before Your First Trip?").

## Bilingual system
Every user-facing text node is duplicated with `data-lang="en"` / `data-lang="es"` attributes (not a JS dictionary — deliberate choice so translations sit next to their English original in the source, easy to spot-check). JS `setLang(lang)` toggles `display` on all `[data-lang]` elements, swaps input placeholders via matching `data-ph-en`/`data-ph-es` attributes, and persists the choice to `localStorage` (`bearCardLang`). Default language is English; Spanish is fully translated in neutral (non-regional) Spanish per the brand guide.

## Interactive / stateful features
All persistence is via `localStorage` — nothing is sent anywhere except the lead form (see below). Data stays on the visitor's own device/browser only.

- **Checklists** (`.check-item`, keyed by `data-key`): click to toggle checked/unchecked, persists via `localStorage` key `bearCardCheck_<key>`. EN and ES versions of the same item share one key so state syncs across language toggle.
- **Trip-info fields** (`.trip-field`, keyed by `data-key`): campsite/site number, nearest ranger station, emergency contact. Persists via `localStorage` key `bearCardTrip_<key>`.
- **Print / Save as PDF**: `printCard()` forces all 9 panels visible (normally only the active tab shows), triggers `window.print()`, then reverts. Dedicated `@media print` stylesheet strips colors/nav/lead-form for a clean printout.
- **Check Your Area**: text input + button that opens a new tab to a Google search for `<query> black bear activity sightings`, plus static links to the USGS official range map and NPS bear safety page.

## Lead capture form
Fields: name (optional), email (required), "how did your trip go?" (optional textarea — doubles as a testimonial/story collector). Submits via `fetch()` to `https://formsubmit.co/ajax/adventurerpaola@gmail.com`. **Requires one-time activation**: the first submission ever triggers FormSubmit to email `adventurerpaola@gmail.com` with an activation link — until that's clicked, submissions won't arrive. After that, it's fully automatic, no dashboard/account needed.

## Analytics
GoatCounter script tag is already wired in with site code `paolaadventurer` — but **the account itself still needs to be claimed** at goatcounter.com (free, just an email) before any data starts recording. Tracks: page views (automatic) + custom events for each tab click (`tab-<id>`) and each successful lead form submission (`lead-form-submit`).

## PWA / home-screen install
`manifest.json` + `apple-touch-icon.png` + theme-color meta let visitors add the card to their phone's home screen as an app icon (iOS: Share → Add to Home Screen; Android: ⋮ menu → Add to Home screen), opening full-screen with no browser chrome.

**Known limitation: this is not yet fully offline-capable.** There's no service worker, so the home-screen icon makes it *look* like an app but doesn't guarantee the page loads with zero signal, especially on a first open after being offline. What *does* work offline already (once the page has loaded at least once): all `localStorage` features (checklists, trip-info fields) — those never touch the network at all. What doesn't yet: guaranteed page load itself when opening cold with no signal. Since this card is meant to be used at a campsite, adding a proper service worker (cache the app shell on first visit, so every later open works with zero signal) is a natural next step — discussed with Paola, not yet built. See ROADMAP.md.

## Social preview
Open Graph + Twitter Card meta tags (`og:title`, `og:description`, `og:image`, `twitter:*`) so pasting the link into texts/WhatsApp/social apps shows a real preview card (logo + title + description) instead of a bare link. Image used: `assets/icon-512.png`.

## Why no bear-range "yes/no" database
Deliberately did not build a static "does my state/area have bears" lookup. Spot-checked a few SEO listicle sources during development and found factual contradictions (one claimed Wyoming has no black bears, which is false). For a safety-relevant claim, decided it's more honest to route users to authoritative live sources (USGS range map, NPS, a live search) than to maintain a hand-curated database that could be silently wrong.

## Brand compliance
Colors, fonts, and visual language follow `Paola Adventurer — Brand Guide` (OKLCH palette: forest green, terracotta, crema, khaki, café oscuro; Bitter/Oswald/Work Sans; 14–20px card radius, 100px pill radius, soft shadow spec). No emoji, no gradients, per brand rules. Anchor phrase in the footer matches the brand's stated anchor: *"It doesn't have to be perfect, it just has to happen."* / *"No tiene que ser perfecto, tiene que pasar."*
