# Phase 1 Design: XP/Levels + Badges + Pipeline

> Date: 2026-03-03
> Status: Approved

## Decisions

| Feature | Decision |
|---------|----------|
| Scoring | Local-only (localStorage), remove Supabase entirely |
| Leaderboard | Remove completely |
| XP/Levels | 8 levels, cosmetic (no content gates) |
| Badges | 10 badges x 3 tiers = 30 unlock states |
| Pipeline | New `/pipeline` page with drag-and-drop game |
| Reset | User can reset all progress from ProgressPage |

## Remove (Supabase Cleanup)

- `src/hooks/useLeaderboard.js` - delete
- `src/lib/supabase.js` - delete
- `@supabase/supabase-js` from dependencies
- Leaderboard section from ProgressPage
- All Supabase env var references

## New Files

| File | Purpose |
|------|---------|
| `src/data/levels.js` | 8 level definitions + XP thresholds |
| `src/data/badges.js` | 10 badge definitions + unlock conditions per tier |
| `src/pages/PipelinePage.jsx` | Pipeline visualization + drag-and-drop game |
| `src/components/pipeline/PipelineVisualization.jsx` | 9-node animated SVG pipeline |
| `src/components/pipeline/DragAndDropGame.jsx` | Place-the-flag risk/cost game |
| `src/components/badges/BadgeCard.jsx` | Single badge with lock/unlock + tier |
| `src/components/badges/BadgeGrid.jsx` | Collection grid of all badges |

## Modified Files

| File | Changes |
|------|---------|
| `gameStore.js` | Add badge unlock check logic, persist badges earned |
| `ProgressPage.jsx` | Remove leaderboard, add badges + level display |
| `App.jsx` | Add `/pipeline` route |
| `Layout.jsx` | Add Pipeline to bottom nav |
| `HomePage.jsx` | Show current level + badge count |
| `package.json` | Remove `@supabase/supabase-js` |

## XP / Level System

XP = existing `score` (formula: 10 + streak x 2 per correct answer).

| Level | Title | XP Required | Icon (Lucide) |
|-------|-------|-------------|---------------|
| 1 | Cadet | 0 | Anchor |
| 2 | Apprentice | 100 | Compass |
| 3 | Officer | 300 | Shield |
| 4 | Captain | 600 | Ship |
| 5 | Commander | 1000 | Star |
| 6 | Admiral | 1500 | Crown |
| 7 | Legend | 2500 | Trophy |
| 8 | Grandmaster | 4000 | Gem |

Level display: progress bar showing XP toward next level, current title + icon.

## Badge System

### Mastery Badges (4) - per Incoterm group accuracy

| Badge | Bronze (50%) | Silver (75%) | Gold (90%) |
|-------|-------------|-------------|------------|
| Group E Master | 50% accuracy on EXW | 75% | 90% |
| Group F Master | 50% on FCA+FAS+FOB avg | 75% | 90% |
| Group C Master | 50% on CFR+CIF+CPT+CIP avg | 75% | 90% |
| Group D Master | 50% on DAP+DPU+DDP avg | 75% | 90% |

### Performance Badges (4)

| Badge | Bronze | Silver | Gold |
|-------|--------|--------|------|
| Streak Hunter | 5 consecutive | 10 | 20 |
| Sharpshooter | 70% overall accuracy | 85% | 95% |
| Speed Demon | 10 scenarios done | 50 | 100 |
| Point Collector | 500 XP | 2000 | 5000 |

### Special Badges (2)

| Badge | Bronze | Silver | Gold |
|-------|--------|--------|------|
| Perfect Run | 3 perfect scenarios | 5 | 10 |
| Globe Trotter | 5 unique scenarios | 15 | 26 (all) |

**Total: 10 badges x 3 tiers = 30 unlock states**

Badge display: card with icon, name, tier indicator (bronze/silver/gold ring), locked state (grayscale + lock icon).

## Pipeline Visualization

### 9-Node Supply Chain

```
Factory -> Packing -> Export Customs -> Origin THC ->
Ocean/Air Transport -> Dest THC -> Import Customs ->
Inland Transport -> Buyer Warehouse
```

### Features
- User selects an Incoterm from dropdown/buttons
- Pipeline animates to show seller responsibility (blue) vs buyer (orange)
- Risk transfer point shown with flag marker
- Cost transfer point shown with coin marker

### Drag-and-Drop Game
- "Place the Flag" game mode
- User drags risk flag + cost flag to correct positions on pipeline
- Scored: correct placement = points (uses gameStore)
- Progressive difficulty: starts with EXW/DDP (obvious), then FOB/CIF (tricky)

## Data Flow

```
User plays scenario -> gameStore.answerScenario()
  -> score updates (XP = score)
  -> check badge conditions -> unlock if met
  -> persist all to localStorage

ProgressPage reads:
  -> score (for level calculation)
  -> incotermsMastered (for mastery badges)
  -> streak/bestStreak (for streak badge)
  -> totalCorrect/totalAttempted (for accuracy badge)
  -> scenariosCompleted (for completion badge)
  -> badges earned (for badge grid)
```

## Reset Behavior

`resetProgress()` clears:
- Score, streak, bestStreak
- All mastery tracking
- All completed scenarios
- All earned badges
- Returns to Level 1 Cadet
