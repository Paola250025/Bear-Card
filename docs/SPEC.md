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
sw.js                              service worker, offline caching
version.json                       build id, powers the auto-update check
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
10 tabs, ordered by emotional priority (reassurance first, procedural content after) rather than alphabetically or by topic. The tab buttons are laid out as a clean 2-column CSS grid (`.tabs { display:grid; grid-template-columns:1fr 1fr }`) so all pills are equal-width and rows stay even — this replaced the earlier ragged `flex-wrap` layout once there were enough tabs to look messy. Panel order in the HTML is independent of tab-button order (panels are shown by `id`), so the buttons can be reordered for looks without touching the content.
1. **For You, Mama** (default/first tab) — reassurance stat (<1 bear-related death per year in North America, with a bold label directly under the number so it reads at a glance rather than requiring the full paragraph) + solo-parent protocol
2. **Essentials** (`id="packing"`) — camping-with-kids packing list, deliberately scoped to the *commonly-forgotten* items (not the obvious tent/sleeping-bag basics), grouped into 5 saveable checklists: bedtime savers, the wet/muddy-kid kit, tiny fix-everything items, kid first-aid, and a "no signal out there" list. Uses the same `.check-item` persistence as the other checklists.
3. **Feel Ready & Enjoy** — confidence tips + "make it fun" activity list
4. **For The Kids** — STOP / STAY / NO RUNNING / BIG & LOUD rule
5. **Store Food Right** — food storage rules (bear box / car trunk)
6. **Staying Calm** — what to do if you see a bear (renamed from "If You See One" — softened wording)
7. **Know Your Area** — search tool + links to USGS/NPS (see "Why no bear-range database" below)
8. **Just In Case** — offline-saved trip info fields + first aid + separated-from-group protocol
9. **Fun Facts** — black bear facts, California-sourced stats
10. **Questions, Answered** — FAQ for first-timer worries beyond bears (rain, sleep, forgetting gear, boredom, cold feet)

Below all tabs, persistent across every tab: the lead-capture form ("Want A Hand Before Your First Trip?").

## Bilingual system
Every user-facing text node is duplicated with `data-lang="en"` / `data-lang="es"` attributes (not a JS dictionary — deliberate choice so translations sit next to their English original in the source, easy to spot-check). JS `setLang(lang)` toggles `display` on all `[data-lang]` elements, swaps input placeholders via matching `data-ph-en`/`data-ph-es` attributes, and persists the choice to `localStorage` (`bearCardLang`). Default language is English; Spanish is fully translated in neutral (non-regional) Spanish per the brand guide.

## Interactive / stateful features
All persistence is via `localStorage` — nothing is sent anywhere except the lead form (see below). Data stays on the visitor's own device/browser only.

- **Checklists** (`.check-item`, keyed by `data-key`): click to toggle checked/unchecked, persists via `localStorage` key `bearCardCheck_<key>`. EN and ES versions of the same item share one key so state syncs across language toggle.
- **Trip-info fields** (`.trip-field`, keyed by `data-key`): campsite/site number, nearest ranger station, emergency contact. Persists via `localStorage` key `bearCardTrip_<key>`.
- **Print / Save as PDF**: `printCard()` forces all panels visible (normally only the active tab shows), triggers `window.print()`, then reverts. Dedicated `@media print` stylesheet strips colors/nav/lead-form for a clean printout.
- **Check Your Area**: text input + button that opens a new tab to a Google search for `<query> black bear activity sightings`, plus static links to the USGS official range map and NPS bear safety page.

## Lead capture form
Fields: name (optional), email (required), "how did your trip go?" (optional textarea — doubles as a testimonial/story collector). Submits via `fetch()` to `https://formsubmit.co/ajax/adventurerpaola@gmail.com`. **Requires one-time activation**: the first submission ever triggers FormSubmit to email `adventurerpaola@gmail.com` with an activation link — until that's clicked, submissions won't arrive. After that, it's fully automatic, no dashboard/account needed.

## Analytics
GoatCounter script tag is already wired in with site code `paolaadventurer` — but **the account itself still needs to be claimed** at goatcounter.com (free, just an email) before any data starts recording. Tracks: page views (automatic) + custom events for each tab click (`tab-<id>`) and each successful lead form submission (`lead-form-submit`).

## PWA / home-screen install
`manifest.json` + `apple-touch-icon.png` + theme-color meta let visitors add the card to their phone's home screen as an app icon (iOS: Share → Add to Home Screen; Android: ⋮ menu → Add to Home screen), opening full-screen with no browser chrome.

### Install helper (`#installBar` / `#installModal`)
Added after a real user couldn't save the card: she'd opened the link **inside Instagram's in-app browser**, which cannot add anything to the home screen — the fix is to open it in a real browser first. Since Instagram is the main traffic source, this hits a lot of visitors, so the page now guides them:
- A dismissible bottom bar ("Save this to your phone…") appears ~1.2s after load, unless already installed (`display-mode: standalone` / `navigator.standalone`) or previously dismissed (`localStorage` `bearCardInstallDismissed`).
- Tapping **How?** does the right thing per environment:
  - **Android/desktop Chrome:** fires the captured `beforeinstallprompt` event for a one-tap native install.
  - **In-app browser** (detected via UA: `Instagram|FBAN|FBAV|FB_IAB|Line|Twitter|Pinterest|Snapchat|TikTok|musical_ly|MicroMessenger`): a modal telling them to open in Chrome/Safari first.
  - **iOS Safari:** a modal with the Share → Add to Home Screen steps (iOS never fires `beforeinstallprompt`).
  - **Other Android:** the ⋮ → Add to Home screen steps.
- Instruction copy is bilingual (built in JS from a `TIPS` object keyed by tip + language), em-dash-free like the rest of the card. Verified across simulated iPhone Safari, Android Chrome, Instagram in-app, and installed/standalone.

## Offline support
`sw.js` (service worker) precaches the app shell (HTML, manifest, icons, logo) the first time someone visits with signal, so it keeps working with zero signal after that, not just when installed as a home-screen icon. Strategy: page navigations are network-first with a 3-second timeout race, falling back to the cached copy — this matters for real campsite conditions where the connection isn't fully offline, just slow/spotty, so it doesn't leave someone staring at a blank screen waiting on a stalling request. Every other asset (icons, manifest) is cache-first. Registered from `index.html` via `navigator.serviceWorker.register('sw.js')`, guarded by a feature check so it's a no-op on unsupported browsers. Tested end-to-end (installed, then fully simulated-offline, confirmed the page still renders full content).

To force a fresh cache after a future content update, bump the `CACHE_NAME` version string at the top of `sw.js` (currently `bear-card-v2`) — the `activate` handler automatically deletes old-named caches.

## Auto-update (so nobody ever has to clear a cache by hand)
The problem this solves: an installed home-screen PWA can keep showing a stale version because iOS resumes it from memory without a fresh network navigation, so visitors (and people Paola shares the link with) could sit on old content indefinitely.

How it works:
- `version.json` holds a single `build` string (e.g. `"2026-07-18-2"`). The same value is hard-coded in `index.html` as `window.APP_BUILD`.
- On page load, on `focus`, and on `visibilitychange` → visible, the page fetches `version.json` (`cache: 'no-store'` + a `?t=` cache-buster). If the server's `build` differs from `window.APP_BUILD`, it calls `location.reload()` once — which, because navigations are network-first, pulls the fresh HTML.
- `sw.js` explicitly **bypasses** `version.json` (early `return` in the `fetch` handler) so the version check is never answered from cache.
- Loop safety: the target build is recorded in `sessionStorage` (`reloadedForBuild`); the page reloads at most once per shipped build, so even if `version.json` and `APP_BUILD` are ever left out of sync, nobody gets trapped in a reload loop.
- The SW registration also calls `reg.update()` on visibility so the worker itself refreshes too.

**Deploy step for any future content change:** bump BOTH `version.json`'s `build` and `window.APP_BUILD` in `index.html` to the same new value (keep them in sync). That's what makes every open app pick up the change automatically. (Optionally also bump `CACHE_NAME` in `sw.js`, but the version check is the mechanism that actually pushes updates.)

## Social preview
Open Graph + Twitter Card meta tags (`og:title`, `og:description`, `og:image`, `twitter:*`) so pasting the link into texts/WhatsApp/social apps shows a real preview card (logo + title + description) instead of a bare link. Image used: `assets/icon-512.png`.

## Why no bear-range "yes/no" database
Deliberately did not build a static "does my state/area have bears" lookup. Spot-checked a few SEO listicle sources during development and found factual contradictions (one claimed Wyoming has no black bears, which is false). For a safety-relevant claim, decided it's more honest to route users to authoritative live sources (USGS range map, NPS, a live search) than to maintain a hand-curated database that could be silently wrong.

## Brand compliance
Colors, fonts, and visual language follow `Paola Adventurer — Brand Guide` (OKLCH palette: forest green, terracotta, crema, khaki, café oscuro; Bitter/Oswald/Work Sans; 14–20px card radius, 100px pill radius, soft shadow spec). No emoji, no gradients, per brand rules. Anchor phrase in the footer matches the brand's stated anchor: *"It doesn't have to be perfect, it just has to happen."* / *"No tiene que ser perfecto, tiene que pasar."*
