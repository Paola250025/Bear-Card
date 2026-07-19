# Paola Adventurer — Bilingual Archery Presentations · STATUS

_Last saved: 2026-07-19 (end of day 1). Resume here tomorrow._

## The goal
Recording decks + scripts for 2 courses, each in EN and ES (4 sets total):
1. **Choose Your Bow / Elige Tu Arco** — 5-episode mini-series
2. **Archery From Zero / Arquería Desde Cero** — 10 lessons

Format: talking-head (OBS) + b-roll, personal/warm. **Two pieces per set:**
- **Canva deck** = only the on-screen graphic cards students see.
- **PDF script** = word-for-word talking-head lines + b-roll cues (Paola records from this).

## Brand
- Forest green `#2F5A3F` (primary) · Terracotta `#C1683F` (accent, a rusty red-orange) · Warm cream `#F6F1E3` · Off-white `#FAF9F5` · near-black green `#1E2E22` (text)
- Canva brand kit id: `kAF91CJ2p9s`
- Logo: PENDING — Paola drops PA Adventurer logo onto Slide 1 in Canva (on EMPTY space, don't replace a shape); then I read its ID and place it on all title cards.

## CURRENT DECK — Choose Your Bow (English) — 20 cards  ← USE THIS ONE
- **Edit:** https://www.canva.com/d/bIZpOGN74FwBbd0
- **View:** https://www.canva.com/d/PCKJYCfSgt6sdLa
- design id `DAHPze4yIjA` · 20 slides · generated with Brand Kit

### Earlier iterations (superseded — can ignore/delete in Canva)
- 14-card lean version: edit https://www.canva.com/d/0ZJnkTrsR-wI8VQ · id `DAHPzfupeHg`
- 30-card first version: edit https://www.canva.com/d/xzyvmlGENwzej0r · id `DAHPzQVX4nE`

### The 20 cards (student-facing)
1 Cover · 2 Ep1 title · 3 Three wild facts · 4 Meet the 3 bows ·
5 Ep2 title · 6 Recurve history · 7 Recurve parts · 8 Recurve who-it's-for ·
9 Ep3 title · 10 Genesis history · 11 Genesis parts · 12 Genesis who-it's-for ·
13 Ep4 title · 14 Compound history · 15 Compound parts · 16 Compound who-it's-for ·
17 Ep5 title · 18 4-question framework · 19 Quick reference table · 20 Final CTA

## SCRIPT (piece #2) — DONE for Choose Your Bow (English)
- **Branded PDF:** presentations/choose-your-bow-en/ChooseYourBow_EN_Script.pdf (also delivered in chat)
- Source: presentations/choose-your-bow-en/ChooseYourBow_EN_Script_and_Shotlist.md
- Covers all beats (word-for-word SAY + B-ROLL). Complete regardless of deck size.

## KEY DECISIONS (agreed with Paola)
- Build order: Choose Your Bow (EN) first as master template, then clone the other 3.
- Deck = student-facing cards only; scripts live in the PDF (keeps teleprompter off students' screens).
- Deck size: **20 cards** (Paola's choice after seeing 30 and 14).
- Style: original/brand look using her brand colors (Brand Kit).
- Reminder for Paola: students never watch "slides" — they watch her VIDEO; the deck cards just pop up on screen ~20 times.

## OPEN QUESTION FROM PAOLA (end of day)
- "why red?" — likely the terracotta brand accent (#C1683F, reads red-orange). If any TRUE red appears, it's AI-added; audit all 20 slides and recolor to brand palette during copy cleanup.

## APPROACH CHANGE (day 2) — IMPORTANT
Canva's AI auto-generator kept overriding the brand (it produced a RED cover, inserted its
own stock bow photos, reworded copy, and never used the logo — and its API can't recolor
shape fills, add text boxes, or place the logo). So we STOPPED using Canva's generator.
New method: render the cards ourselves as HTML -> PDF/PNG with full pixel control, in exact
brand colors. Paola has no logo file (pasted images don't save to disk), so I built a
PAOLA ADVENTURER emblem (SVG coin: mountain/tent/arrow/sun/banner) into every card.
Build script: presentations/choose-your-bow-en/cards/build-cards.py

## DECK 1 — Choose Your Bow (English) — CARDS DONE ✅
- 20 brand cards: presentations/choose-your-bow-en/cards/ (PDF + 20 PNGs) — delivered in chat
- Script PDF: presentations/choose-your-bow-en/ChooseYourBow_EN_Script.pdf — delivered
- Both use exact brand palette + self-made emblem. NOT Canva.

## KNOWN CANVA LIMITATIONS
- Generator REWRITES card text into its own words → must fix each card's copy to exact lines via replace_text.
- Each generation re-designs layout (why decks looked different across runs). To keep 4 decks consistent, finalize ONE and mirror it.
- API cannot: add text boxes, delete pages, or write hidden speaker notes.
- Logo can only be placed once it exists on a slide in Paola's Canva.

## NEXT STEPS
1. ~~Deck 1 cards~~ ✅ DONE (self-rendered brand cards).
2. **Elige Tu Arco (ES)** — Spanish version of the 20 cards (reuse build-cards.py, translate content) + Spanish script PDF.
3. **Archery From Zero (EN)** — cards from the 10-lesson guide + script PDF.
4. **Arquería Desde Cero (ES)** — Spanish version + script PDF.
5. Optional: if Paola ever gets the real logo file to me, swap the emblem for her illustrated badge across all cards.

## SOURCE MATERIAL (extracted from Paola's PDFs)
- presentations/source-guides/ELIGE_ARCO.txt — Choose Your Bow full guide (EN+ES, 5 episodes)
- presentations/source-guides/ARQUERIA_CERO.txt — Archery From Zero full guide (EN+ES, 10 lessons)
