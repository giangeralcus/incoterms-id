# Open Source Deepening Design - incoterms.id

> Date: 2026-03-04
> Status: APPROVED (Phase 1 ready for execution)
> Approach: B (Content-Led) - content + foundation in parallel, then new pages

## Current State

- 6 pages, 11/11 Incoterms, 26 scenarios, gamification (XP/levels/badges)
- PWA deployed at incoterms.id (Vercel)
- Repo: public at github.com/giangeralcus/incoterms-id
- i18n: UI labels translated ID/EN, but all educational CONTENT is English-only
- Cost Simulator not in nav (hidden)

## Phase 1: Foundation + Indonesian Content (NEXT SESSION)

### Batch A: Open-Source Foundation
- [ ] Add MIT LICENSE file
- [ ] Add CONTRIBUTING.md (how to contribute, dev setup, PR guidelines)
- [ ] Add .github/ISSUE_TEMPLATE/ (bug report, feature request, content improvement)
- [ ] Add CODE_OF_CONDUCT.md
- [ ] Update README.md with screenshots, badges (build status, license, PRs welcome)

### Batch B: Full Indonesian Translation
- [ ] Translate all 11 Incoterms in `data/incoterms.js` (name, bestFor, commonMistake, obligations, indonesianExample, keyTrap, confusedWith, changes2020, insuranceDetail)
- [ ] Translate all 26 scenarios in `data/scenarios.js` (title, description, explanation, hints, learningPoints)
- [ ] Translate pipeline stage labels in `data/pipeline.js`
- [ ] Translate badge names/descriptions in `data/badges.js`
- [ ] Translate level names in `data/levels.js`
- [ ] Make content language-aware: wrap all content strings with `{id: "...", en: "..."}` pattern
- [ ] Update `t()` helper or create `tc()` (translate content) to resolve content by language

### Batch C: Nav + i18n Fixes
- [ ] Add Cost Simulator to bottom nav (6th item or reorganize to 5 with different grouping)
- [ ] Fix `<html lang>` to dynamically switch based on language toggle
- [ ] Ensure OG meta tags reflect current language

## Phase 2: New Educational Pages (FUTURE)

### Export/Import Procedures Page
- Step-by-step export procedure (10 steps from indonesia-procedures.md research)
- Step-by-step import procedure
- Required documents checklist with interactive progress tracking
- Regulatory body references (DJBC, INSW, CEISA)

### Document Templates Page
- PEB (Pemberitahuan Ekspor Barang) - structure explanation + visual sample
- PIB (Pemberitahuan Impor Barang) - structure explanation
- COO (Certificate of Origin) - types (Form E, Form D, Form AK, etc.)
- B/L (Bill of Lading) - anatomy of a B/L
- Commercial Invoice - required fields for Indonesian customs
- Packing List - format guide

### HS Code Explorer
- Searchable HS code lookup (6-digit international + 8-digit Indonesian BTKI)
- Tariff rates (BM, PPh22, PPN) per code
- LARTAS requirements per code
- Source: hs_codes, hs_tariffs, hs_chapters tables from Supabase (read-only, could be static JSON export)

## Phase 3: Polish (FUTURE)
- Better README with screenshots/demo GIF
- Contributor onboarding guide
- SEO optimization for Indonesian search terms ("incoterms adalah", "cara ekspor barang", "prosedur impor indonesia")
- Consider Hacktoberfest participation

## Technical Notes

### i18n Content Strategy
Current: `data/incoterms.js` has flat English strings
Target: Each content field becomes `{ id: "...", en: "..." }` object
Helper: `tc(field)` resolves based on `languageStore.lang`

Example:
```js
// Before
bestFor: "Small shipments, samples, or when buyer has their own logistics"

// After
bestFor: {
  id: "Pengiriman kecil, sampel, atau ketika pembeli punya logistik sendiri",
  en: "Small shipments, samples, or when buyer has their own logistics"
}
```

### Nav Reorganization Options
1. Keep 5 items, replace Pipeline with Costs (Pipeline accessible from Learn detail)
2. Add 6th item (may feel crowded on small phones)
3. Group: Home | Learn | Play (scenario+pipeline) | Tools (costs) | Progress

### Recommended team structure for Phase 1
- Agent 1: Open-source foundation files (Batch A)
- Agent 2: Indonesian content translation (Batch B - largest task)
- Agent 3: Nav/i18n fixes (Batch C)
