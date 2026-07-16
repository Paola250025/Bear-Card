# Bear Country Cheat Sheet — Handoff / Context for Next Time

Read this first if you're picking this project back up in a new session. It has the "why," not just the "what" — SPEC.md has the technical detail, ROADMAP.md has what's left, this file has the context you'd otherwise have to re-derive.

## The short version
A free, bilingual, interactive bear-safety card for nervous first-time camping moms, built for Paola Adventurer as a lead magnet (not a paid product). Live at **https://paolaadventurer.com**. Originally written for one specific friend of Paola's (3 kids, first trip to Big Bear, CA) and later generalized for a wider audience.

## Accounts / identifiers referenced by this project
- **GitHub repo**: `Paola250025/Bear-Card` — GitHub Pages is configured to build from the **`claude/camping-safety-card-wrhsqo`** branch (confirmed via the repo's Actions history), not `main`. `main` is kept as a fast-forward mirror of that branch after every change, purely so the content also exists on a conventionally-named branch — but the live site actually deploys from `claude/camping-safety-card-wrhsqo`. If continuing this project, keep pushing to both, or switch the Pages source to `main` in Settings → Pages and simplify to one branch.
- **Custom domain**: `paolaadventurer.com`, registered at **GoDaddy**. DNS: 4 A records (`185.199.108.153` / `.109.153` / `.110.153` / `.111.153`) + `www` CNAME to `paola250025.github.io`. Confirmed resolving and serving correctly as of this handoff.
- **Lead form email**: `adventurerpaola@gmail.com` — receives form submissions via FormSubmit.co (no login needed for FormSubmit itself, just email activation).
- **Analytics**: GoatCounter, site code `paolaadventurer` — needs Paola to claim the free account at goatcounter.com if she hasn't yet.
- **Paola's other email** (used for this Claude session, not part of the site): `paola@homesbuyolaf.com` — distinct from the brand inbox above, noted here only to avoid confusing the two.

## Business context (why this exists)
This card is step one of a planned funnel: free trust-building tool → email list → future low-ticket "Camping From Zero" / "Archery From Zero" beginner classes (neither built yet — intentionally not built until real demand is validated via this card's lead form). Brand: **Paola Adventurer**, bilingual (Spanish primary per brand guide, though this specific card defaults to English since the original audience was English-speaking), warm/encouraging/"if I could, you can too" tone, anchor phrase "It doesn't have to be perfect, it just has to happen." Full brand guide was supplied as `CLAUDE.md` / `paola-adventurer-brand-guide.md` in the original chat uploads — not stored in this repo; ask Paola to re-share if a future session needs the full guide (colors/fonts are already baked into the CSS either way).

## Notable decisions and why (so they don't get silently re-litigated)
- **Logo**: Paola tried pasting the logo image directly into chat twice — pasted images don't save as retrievable files in this environment, only proper file attachments do. The real logo was eventually recovered by extracting it from a design-tool "bundled" HTML export (`Paola_Adventurer__Identidad.html`) she sent — those exports embed all images/fonts as base64 inside a `<script type="__bundler/manifest">` block, decodable with a small script. Worth knowing if this happens again with any other asset.
- **Tab order and naming**: reordered from "topic order" to "emotional priority" order (reassurance tabs first) and renamed a few tabs (e.g. "If You See One" → "Staying Calm") specifically because Paola flagged that the original names/order could read as paranoia-inducing rather than reassuring. This was a explicit content-tone decision, not a random reshuffle.
- **No bear-range database**: see SPEC.md — accuracy/safety concern, not a scope cut.
- **Lead form over a native share button**: Paola redirected the original "add a share button" idea into "let them fill out a form so I get their email and can sell the class later." The form now does double duty as a share-conversion tool and a testimonial collector (optional "how did your trip go" field).
- **Root domain, not subdomain**: Paola doesn't have a main website yet (sales page is on Payhip), so `paolaadventurer.com` points straight at this card. Revisit if she builds a full site later (see ROADMAP.md).

## Working conventions used in this project (for consistency if continuing)
- Every commit was pushed to `claude/camping-safety-card-wrhsqo` **and** fast-forward-merged into `main` right after, to keep both in sync — do the same rather than picking just one, until it's confirmed which branch Pages actually serves from.
- No build tooling was introduced at any point — this stays a single static `index.html` plus small asset files, deliberately, so it's editable by hand with zero setup.
- Bilingual content is always written as EN/ES pairs sitting next to each other in the source (see SPEC.md's "Bilingual system" section) — keep using that pattern for any new copy rather than introducing a translation dictionary.
