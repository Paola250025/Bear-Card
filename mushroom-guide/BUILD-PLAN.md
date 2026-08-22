# Mushroom Guide — Interactive Rebuild Plan

## WHAT'S DONE
- `mushroom-guide/index.html` — Current interactive guide with SVG illustrations, bilingual EN/ES, region filter. Working but needs rebuild.
- `mushroom-guide/en/mushroom-guide-en.md` — Full English guide content (committed)
- `mushroom-guide/es/mushroom-guide-es.md` — Full Spanish guide content (committed)
- `mushroom-guide/sales/payhip-sales-page.html` — Payhip copy-paste sales page (committed)
- `mushroom-guide/ads/social-media-ads.md` — 3 ad concepts + 3 Reel scripts, EN/ES (committed)
- `mushroom-guide/en/The-Hikers-Mushroom-Guide-EN.pdf` — Generated PDF (committed)
- `mushroom-guide/es/Guia-de-Hongos-para-Senderistas-ES.pdf` — Generated PDF (committed)
- `mushroom-guide/generate-pdfs.py` — PDF generation script (committed)

## WHAT'S NEXT — Rebuild index.html with paywall + photos

### Architecture Decision
- **No PDFs** — Interactive web page is the product
- **3 free mushrooms visible** then paywall for remaining 7
- **Unlock code** after Payhip purchase (JS hash check, localStorage persistence)
- **Real photos** from Wikimedia Commons (CC licensed, loaded from upload.wikimedia.org)
- **Bilingual EN/ES** toggle (same pattern as rest of site)

### Free vs Locked Mushrooms
FREE (always visible — gives value + creates urgency):
1. Chanterelle (edible) — shows value
2. Morel (edible) — another valuable find
3. Death Cap (deadly) — shows danger, creates urgency for remaining toxics

LOCKED (require unlock code):
4. Chicken of the Woods (edible)
5. Hen of the Woods / Maitake (edible)
6. Lion's Mane (edible)
7. Oyster Mushroom (edible)
8. Porcini (edible)
9. Destroying Angel (deadly)
10. Jack O'Lantern (toxic)

### Why This Split Converts Best (Low-Ticket Psychology)
- 2 edibles prove the guide's value ("I want more of these!")
- 1 deadly toxic creates fear/urgency ("What are the OTHER deadly ones?!")
- 5 more edibles + 2 more toxics locked = massive curiosity gap
- At $9, the decision becomes "is it worth a latte to know all 10?" — YES

### Paywall UX
- Region filter works for free (all regions accessible)
- First 3 cards in results are ALWAYS the free mushrooms
- Remaining cards show: name visible, photo blurred, lock icon overlay
- CTA on locked cards: "Unlock Full Guide — $9"
- Unlock modal: code input + "Get Your Code" (Payhip link) + "Already have a code?"
- After unlock: localStorage('mushroom_unlocked', 'true'), all cards visible

### Unlock Code System
Codes (Paola puts one on Payhip thank-you page):
- TRAILGUIDE → JS hash: -1583839050
- MUSHROOM10 → JS hash: -738341769
- HIKERGUIDE → JS hash: 1026505637

JS hash function:
```javascript
function _h(s){var h=0;for(var i=0;i<s.length;i++){h=((h<<5)-h)+s.charCodeAt(i);h|=0;}return h;}
var _v=[-1583839050,-738341769,1026505637];
function checkCode(c){return _v.indexOf(_h(c.toUpperCase().trim()))!==-1;}
```

### Photo URLs (Wikimedia Commons, CC Licensed)
All URLs use 600px thumbnails. On GitHub Pages these load fine (external images allowed).

1. Chanterelle:
   https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Chanterelle_Cantharellus_cibarius.jpg/600px-Chanterelle_Cantharellus_cibarius.jpg

2. Morel:
   https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Morchella_esculenta_300405.jpg/600px-Morchella_esculenta_300405.jpg

3. Chicken of the Woods:
   https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Chicken_of_the_Woods_Laetiporus_sulphureus.jpg/600px-Chicken_of_the_Woods_Laetiporus_sulphureus.jpg

4. Hen of the Woods:
   https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Grifola_frondosa.jpg/600px-Grifola_frondosa.jpg

5. Lion's Mane:
   https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lions_Mane_Mushroom_Durham_NC.jpg/600px-Lions_Mane_Mushroom_Durham_NC.jpg

6. Oyster:
   https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Pleurotus_ostreatus.jpg/600px-Pleurotus_ostreatus.jpg

7. Porcini:
   https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Boletus_edulis_EtgM.jpg/600px-Boletus_edulis_EtgM.jpg

8. Death Cap:
   https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Amanita_phalloides_-_deathcap.JPG/600px-Amanita_phalloides_-_deathcap.JPG

9. Destroying Angel:
   https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Amanita_verna_(destroying_angel_mushroom).jpg/600px-Amanita_verna_(destroying_angel_mushroom).jpg

10. Jack O'Lantern:
    https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jack_O'_Lantern_Mushroom_Closeup;_Omphalotus_olearius.JPG/600px-Jack_O'_Lantern_Mushroom_Closeup;_Omphalotus_olearius.JPG

### Photo Attribution (required for CC license)
Add a collapsible attribution section in the footer:
"Photos from Wikimedia Commons. Licensed under Creative Commons (CC BY-SA). See individual image pages for photographer credits."

### Photo Fallback
If any Wikimedia URL is wrong or fails to load, use `onerror` handler to show a colored background with mushroom name (graceful degradation). Paola can replace with her own photos later.

### Payhip Integration
- Checkout URL: needs to be set by Paola (placeholder: `var CHECKOUT_URL = 'https://payhip.com/b/XXXXX';`)
- Thank-you page on Payhip should show: "Your access code: TRAILGUIDE"
- Paola can change the code — just update the hash values in the JS

### Design System (match existing Paola Adventurer site)
- Colors: --forest:#22432f, --forest2:#2f6b45, --terra:#b5562f, --crema:#faf7f0, --khaki:#d8c9a3, --cafe:#3a322a, --sun:#e8b93f, --muted:#7c7361
- Fonts: Bitter (headings), Oswald (nav/labels), Nunito (body)
- Navbar: sticky, #163024 bg, gold border, Oswald links, EN/ES langtoggle
- Cards: white bg, rounded corners, khaki border, hover lift effect
- Bilingual: #lang-en / #lang-es with hidden toggle, localStorage('pa_lang')

### Branch
All work on: `claude/ig-reel-caption-hook-sat335`
Deploy branch: `claude/camping-safety-card-wrhsqo` (needs merge after rebuild)

### Key Files in Repo to Reference
- `/home/user/Bear-Card/index.html` — Homepage (design patterns, nav structure, card layout)
- `/home/user/Bear-Card/mushroom-guide/index.html` — Current interactive guide (to be rebuilt)
- `/root/.claude/skills/synced/paola-adventurer-marketing/SKILL.md` — Brand guidelines
- `/root/.claude/skills/synced/paola-adventurer-marketing/assets/payhip-copy-template.html` — Payhip template

### Implementation Checklist
- [ ] Rewrite index.html with photo cards instead of SVGs
- [ ] Add paywall logic (3 free, 7 locked)
- [ ] Add locked card UI (blur, lock icon, CTA overlay)
- [ ] Add unlock code modal with hash verification
- [ ] Add Payhip checkout CTA buttons
- [ ] Wire localStorage for persistent unlock state
- [ ] Keep bilingual EN/ES with all locked/unlock UI translated
- [ ] Add photo attribution footer
- [ ] Add image onerror fallbacks
- [ ] Test in browser
- [ ] Commit and push
- [ ] Merge to deploy branch when ready
