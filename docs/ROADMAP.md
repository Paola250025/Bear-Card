# Bear Country Cheat Sheet — Roadmap

## Status: live and functional
Shipped, tested, and shared. Custom domain confirmed working. This is not a "half-done prototype" — treat anything below as optional future work, not a punch list that has to happen before it's usable.

## Done
- Full bilingual content, 9 tabs, reordered for emotional priority
- Real logo in header with proper contrast backing
- PWA install (home screen icon + manifest)
- Print/Save as PDF
- Interactive, persistent checklists and trip-info fields (localStorage, on-device only)
- Area search tool routing to authoritative sources
- Lead capture form → `adventurerpaola@gmail.com` (via FormSubmit)
- Analytics wired in (GoatCounter, code `paolaadventurer`)
- Social preview tags (Open Graph/Twitter)
- Custom domain `paolaadventurer.com` live over HTTPS

## Open loops — need Paola's action, not more building
These aren't code work, they're account/verification steps on Paola's end:
1. **Confirm FormSubmit is activated** — check `adventurerpaola@gmail.com` for the one-time activation email and click it, if not already done. Until then, form submissions silently don't arrive.
2. **Claim the GoatCounter account** — sign up free at goatcounter.com with site code `paolaadventurer` so analytics actually start recording. The script is already live; the account just needs to be claimed.
3. **Double-check "Enforce HTTPS"** is checked in GitHub → Settings → Pages, now that the custom domain is verified.

## Explicitly decided, not gaps
Worth remembering these were deliberate calls, so they don't get "fixed" by accident later:
- **No static bear-range yes/no lookup** — decided against this for accuracy reasons (see SPEC.md). Don't add one without a genuinely authoritative data source.
- **No hard sales pitch for the future class** — the lead form is soft ("I'll let you know when it opens"), no price shown anywhere, since no price has been set and none should be invented.
- **Root domain, not a subdomain** — `paolaadventurer.com` points straight at this card because Paola doesn't have a main website yet (her sales page lives on Payhip). If a full multi-page site gets built on this domain later, this card should move to a subdomain (e.g. `camping.paolaadventurer.com`) to free up the root — see "Later, maybe" below.

## Open question, never resolved
Em dashes ("—") are used throughout the body copy as a stylistic device. Paola asked to "remove all -" in one message, which was interpreted as scoped to tab names only (which have since been renamed without dashes). It was never confirmed whether she also wants the em dashes removed from the paragraph text. **Ask before doing a full rewrite of the prose style** — that's a large, low-reversibility content change, not a quick fix.

## Ideas discussed but not built (no action needed unless asked)
- Native share button (`navigator.share`) — superseded by the lead capture form idea; not built.
- Bundling this into a paid "pre-trip prep pack" product — discussed as the one scenario where charging for this content would make sense, but it's a different, bigger product than what exists today.
- Autoresponder email back to moms who submit the lead form (FormSubmit may support this on a paid tier — not investigated).
- A "solid background" (non-transparent) variant of the logo may exist per the brand guide's mention of `logo-badge.png` alongside `logo-badge-transparent.png` — only the transparent version was ever actually recovered and used. Not urgent; current header treatment (cream backing plate) works fine with the transparent version.

## Later, maybe (real business decisions, not technical debt)
- Move this card to a subdomain once/if a full paolaadventurer.com website gets built, so the root domain is free for that.
- Expand into the "Camping From Zero" / "Archery From Zero" class funnel this card was always meant to feed — per the original project notes, validate real demand (the lead form is step one of that) before building either class out.
