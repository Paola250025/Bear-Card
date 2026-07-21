# Kids' Outdoor Adventure Pack

A bilingual (EN/ES) 8-page printable product for the Paola Adventurer brand.

## Files
- `Kids-Outdoor-Adventure-Pack.pdf` — the finished product customers download.
- `pack.html` — editable source of the PDF. Edit, then regenerate the PDF.
- `payhip-sales-copy.html` — ready-to-paste Payhip listing (ES + EN) with copy buttons.
- `instagram-ads.txt` — Meta/Instagram ad copy with A/B hooks.

## Pricing
Launch $12 · compare-at $29. Bonus: free Bear Country Cheat Sheet link.

## Regenerate the PDF after editing pack.html
```
node topdf.js   # uses playwright + chromium to print pack.html -> PDF
```
(Recreate topdf.js with a Playwright script that loads pack.html and calls page.pdf at 8.5x11in.)
