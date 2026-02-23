# Handover - 2026-02-24

## What We Worked On
- Pixel art character system: full implementation and integration across all 5 pages
- 3-agent parallel codebase audit (pixel art components, page integration, general quality)
- P1 bug fix in PixelCanvas.jsx
- Commit + push to GitHub (b77f74a)

## What Got Done

### Pixel Art Character System (NEW — fully implemented)

**Library files created:**
- `src/lib/pixel/colorize.js` — PALETTES object: 5 characters (eksportir=blue, importir=green, agent=orange, customs=navy, trader=white), each mapping K/H/S/P/O keys to hex colors
- `src/lib/pixel/spriteCache.js` — LRU sprite cache keyed by `{paletteName}-{zoom}`
- `src/lib/pixel/renderer.js` — renderSprite(spriteData, palette, zoom): draws pixel art to OffscreenCanvas
- `src/lib/pixel/index.js` — getCachedCanvas() public API combining cache + renderer
- `src/components/PixelArt/PixelCanvas.jsx` — renders single sprite frame to canvas element; applies flipX via CSS transform
- `src/components/PixelArt/Character.jsx` — animated character: state machine (idle/walk/celebrate), cycles frames via setInterval
- `src/components/PixelArt/index.js` — re-export barrel

**Data file created:**
- `src/data/characters.js` — sprite data for all 5 characters
  - Sprite format: 2D string array `string[][]`, 24 rows × 16 cols
  - Color keys: K=skin, H=hair, S=shirt, P=pants, O=shoes, `''`=transparent, `'#222222'`=eyes
  - Structure: `UPPER` (rows 0-15) + `LEGS_IDLE`/`LEGS_WALK0`/`LEGS_WALK1` (rows 16-23)
  - Combined via spread: `const IDLE = [...UPPER, ...LEGS_IDLE]`
  - All 5 characters share the SAME sprites object — palette (colorize.js) differentiates appearance
  - `export const CHARACTERS = { eksportir: sprites, importir: sprites, agent: sprites, customs: sprites, trader: sprites }`
  - `const sprites = { idle: IDLE, walk: [WALK_0, WALK_1], celebrate: [IDLE] }`

**Pages modified:**
- `src/pages/HomePage.jsx` — parade of all 5 characters walking between hero and quick stats; staggered frameInterval (220 + i*30)
- `src/pages/ScenarioPage.jsx` — contextual character in route info bar (eksportir for export, importir for import, state=walk, zoom=2); eksportir celebrating in ResultCard when isCorrect=true
- `src/pages/LearnPage.jsx` — agent walking at right of title in list view; trader idle in top-right of detail view (IncotermDetail)
- `src/pages/CostSimulator.jsx` — customs character idle at right of page title
- `src/pages/ProgressPage.jsx` — score-conditional: eksportir celebrating when score > 0, trader idle when score = 0

**Bug fix applied:**
- `src/components/PixelArt/PixelCanvas.jsx:26` — added `flipX` to useEffect dependency array (was missing)

**Build result:** ✓ built in 1.98s, 13 files, 2204 modules. Only pre-existing chunk size warning (515KB > 500KB limit).

**Git commit:** `b77f74a` — pushed to `main` on `https://github.com/giangeralcus/belajarexporimpor`

**Dev server:** runs at `http://localhost:5173`

## What Didn't Work (and How We Fixed It)

| Problem | Root Cause | Fix |
|---------|-----------|-----|
| Agent B hit output token limit when writing characters.js | `CLAUDE_CODE_MAX_OUTPUT_TOKENS = 12000` — sprite data too large for single LLM response | Used Write tool directly with JS spread pattern (`[...UPPER, ...LEGS_IDLE]`) to share body data across frames, dramatically reducing file size |
| characters.js was not created in prior session | Same token limit issue as above — agent failed mid-write | Re-executed in new session using Write tool, not subagent |
| vite-plugin-pwa ERR_MODULE_NOT_FOUND (prior session concern) | Not actually missing — was a misleading error | Verified `node_modules/vite-plugin-pwa` present; build passes cleanly |

## Key Decisions

| Decision | Rationale |
|---------|-----------|
| All 5 characters share one `sprites` object | Sprite shape is identical for all characters — only color palette differs. Saves ~5x memory and avoids code duplication |
| Palette via `colorize.js` color key substitution | Separates shape (sprite data) from color (palette) — single sprite set works for all characters |
| JS spread for frame construction (`[...UPPER, ...LEGS_X]`) | Avoids repeating 16-row UPPER body in every frame; reduces characters.js size significantly |
| `celebrate` state maps to `[IDLE]` (single frame) | Deliberate — celebrate is a static "arms up" pose. Animation not needed for this state |
| `flipX` via CSS `transform: scaleX(-1)` not canvas flip | Simpler, avoids re-draw; canvas content is always right-facing, CSS mirrors it |
| Character zoom=2 across most pages, zoom=3 on HomePage parade | parade deserves more visual weight; detail pages keep characters subtle |

## Lessons & Gotchas

- **Token limit workaround**: If a file is too large for a subagent to write (characters.js was ~300+ lines of sprite data), write it directly from main agent using the Write tool. Do NOT retry the same subagent.
- **Module-level constants = stable refs**: `CHARACTERS.eksportir` is a module-level constant — passing it as `sprites` prop doesn't cause Character.jsx interval restarts. P2 issue from audit is not a real issue.
- **CostSimulator i18n debt**: 6 hardcoded strings NOT wrapped in `t()`: "Costs in USD" (line 241), "Luxury Goods Tax rate (%)" (line 234), "PPh 22" (line 395), "PPN" (line 463), "Import Duty" (line 464), "COGS" (line 496) — pre-existing, not from this session.
- **celebrate=[IDLE]**: If a more dynamic celebrate animation is wanted, add separate celebrate frames to characters.js (e.g., alternating arm-raise poses). Currently only 1 frame.
- **Chunk size warning**: Pre-existing, 515KB > 500KB limit. Consider code-splitting (dynamic import) in a future performance pass.
- **LearnPage character variety**: Both list view (agent-walk) and detail view (trader-idle) use different characters — intentional trader=learner, agent=navigator persona split.

## Files Touched

**Created:**
- `src/lib/pixel/colorize.js`
- `src/lib/pixel/index.js`
- `src/lib/pixel/renderer.js`
- `src/lib/pixel/spriteCache.js`
- `src/components/PixelArt/Character.jsx`
- `src/components/PixelArt/PixelCanvas.jsx`
- `src/components/PixelArt/index.js`
- `src/data/characters.js`
- `HANDOVER-2026-02-22.md` (archived old handover)

**Modified:**
- `src/pages/HomePage.jsx` — character parade added
- `src/pages/ScenarioPage.jsx` — contextual character + celebrate
- `src/pages/LearnPage.jsx` — agent + trader characters
- `src/pages/CostSimulator.jsx` — customs character
- `src/pages/ProgressPage.jsx` — score-conditional character

## Next Steps

1. **[P1] Fix CostSimulator i18n** — wrap 6 hardcoded strings in `t()`: "Costs in USD", "Luxury Goods Tax rate (%)", "PPh 22", "PPN", "Import Duty", "COGS". Requires adding keys to `src/i18n/translations.js`.
2. **[P2] Celebrate animation frames** — if desired, add actual celebrate frames to `characters.js` (currently `celebrate: [IDLE]` = static). Would need new `LEGS_CELEBRATE0/1` variants.
3. **[P2] Chunk size** — 515KB > 500KB. Consider `import()` code-splitting for CostSimulator or ScenarioPage (heaviest pages).
4. **[P3] Character.jsx sprites stability** — if parents ever pass inline `sprites` objects (not module constants), the animation interval restarts unnecessarily. Fix: use `useRef` to track frames inside interval. Not needed now.
5. **[P3] LearnPage character variety** — currently trader idle for ALL incoterm detail pages. Could map term.group or difficulty to different characters.
6. **Test visually** at `http://localhost:5173` — check parade on HomePage, walk/celebrate on ScenarioPage, idle characters on other pages.

## Open Questions

- **CostSimulator i18n**: Fix now or leave for dedicated i18n pass? (6 strings, pre-existing debt)
- **Celebrate animation**: Want dynamic celebrate frames (new sprite data needed) or keep static IDLE?
- **Chunk splitting**: Worth addressing the 515KB warning now, or leave for production optimization phase?
- **`belajarexporimpor` project status**: Is this a personal learning tool, or is there a deployment target (Vercel, Netlify, etc.)? The PWA config (vite-plugin-pwa) suggests deployment is planned.
