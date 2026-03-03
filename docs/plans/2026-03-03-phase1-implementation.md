# Phase 1: XP/Levels + Badges + Pipeline Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add XP/level system (8 levels), badge system (10 badges x 3 tiers), supply chain pipeline page with drag-and-drop game, and remove all Supabase dependencies.

**Architecture:** Remove Supabase layer entirely. Extend existing Zustand gameStore with level/badge tracking. All state persists to localStorage. New `/pipeline` route with SVG-based visualization. Badge checks run on every `answerScenario()` call.

**Tech Stack:** React 19, Zustand 5, Framer Motion 12, Lucide React icons, Tailwind CSS 4, SVG for pipeline. Zero new dependencies.

---

### Task 1: Remove Supabase (cleanup)

**Files:**
- Delete: `src/hooks/useLeaderboard.js`
- Delete: `src/lib/supabase.js`
- Modify: `src/pages/ProgressPage.jsx` (remove leaderboard section)
- Modify: `package.json` (remove @supabase/supabase-js)

**Step 1: Delete Supabase files**

Delete `src/hooks/useLeaderboard.js` and `src/lib/supabase.js`.

**Step 2: Remove leaderboard from ProgressPage**

In `src/pages/ProgressPage.jsx`:
- Remove `import { useLeaderboard } from '../hooks/useLeaderboard'`
- Remove `import { supabase } from '../lib/supabase'`
- Remove the `useLeaderboard()` hook call and all its destructured vars
- Remove the `username` state and `setUsername`
- Remove the entire leaderboard section (the `{supabase && (...)}` block, approximately lines 136-216)
- Keep: stats cards, mastery bars, session stats, reset button

**Step 3: Remove supabase dependency**

```bash
npm uninstall @supabase/supabase-js
```

**Step 4: Verify build**

```bash
npx vite build
```

Expected: Build passes with 0 errors, 0 warnings. Bundle size should decrease (supabase-js removed).

**Step 5: Commit**

```bash
git add -A && git commit -m "refactor: remove Supabase integration, make app fully local"
```

---

### Task 2: Create level data + badge data

**Files:**
- Create: `src/data/levels.js`
- Create: `src/data/badges.js`

**Step 1: Create levels.js**

```javascript
// src/data/levels.js
export const LEVELS = [
  { level: 1, title: 'Cadet',       xpRequired: 0,    icon: 'Anchor' },
  { level: 2, title: 'Apprentice',  xpRequired: 100,  icon: 'Compass' },
  { level: 3, title: 'Officer',     xpRequired: 300,  icon: 'Shield' },
  { level: 4, title: 'Captain',     xpRequired: 600,  icon: 'Ship' },
  { level: 5, title: 'Commander',   xpRequired: 1000, icon: 'Star' },
  { level: 6, title: 'Admiral',     xpRequired: 1500, icon: 'Crown' },
  { level: 7, title: 'Legend',      xpRequired: 2500, icon: 'Trophy' },
  { level: 8, title: 'Grandmaster', xpRequired: 4000, icon: 'Gem' },
]

export function getLevel(xp) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].xpRequired) return LEVELS[i]
  }
  return LEVELS[0]
}

export function getNextLevel(xp) {
  const current = getLevel(xp)
  if (current.level >= LEVELS.length) return null
  return LEVELS[current.level] // next index = current.level (0-based offset)
}

export function getLevelProgress(xp) {
  const current = getLevel(xp)
  const next = getNextLevel(xp)
  if (!next) return 100 // max level
  const range = next.xpRequired - current.xpRequired
  const progress = xp - current.xpRequired
  return Math.round((progress / range) * 100)
}
```

**Step 2: Create badges.js**

```javascript
// src/data/badges.js
import { INCOTERMS } from './incoterms'

const TIERS = ['bronze', 'silver', 'gold']
const TIER_COLORS = { bronze: '#CD7F32', silver: '#C0C0C0', gold: '#FFD700' }

// Group Incoterms by their group letter
const GROUP_TERMS = {
  E: INCOTERMS.filter(t => t.group === 'E').map(t => t.code),
  F: INCOTERMS.filter(t => t.group === 'F').map(t => t.code),
  C: INCOTERMS.filter(t => t.group === 'C').map(t => t.code),
  D: INCOTERMS.filter(t => t.group === 'D').map(t => t.code),
}

export const BADGES = [
  // Mastery (4)
  {
    id: 'group-e-master',
    name: 'E-Group Master',
    description: 'Master EXW (Departure)',
    icon: 'Factory',
    thresholds: { bronze: 50, silver: 75, gold: 90 },
    check: (state) => groupAccuracy(state, GROUP_TERMS.E),
  },
  {
    id: 'group-f-master',
    name: 'F-Group Master',
    description: 'Master FCA, FAS, FOB (Main Carriage Unpaid)',
    icon: 'Ship',
    thresholds: { bronze: 50, silver: 75, gold: 90 },
    check: (state) => groupAccuracy(state, GROUP_TERMS.F),
  },
  {
    id: 'group-c-master',
    name: 'C-Group Master',
    description: 'Master CFR, CIF, CPT, CIP (Main Carriage Paid)',
    icon: 'Globe',
    thresholds: { bronze: 50, silver: 75, gold: 90 },
    check: (state) => groupAccuracy(state, GROUP_TERMS.C),
  },
  {
    id: 'group-d-master',
    name: 'D-Group Master',
    description: 'Master DAP, DPU, DDP (Arrival)',
    icon: 'MapPin',
    thresholds: { bronze: 50, silver: 75, gold: 90 },
    check: (state) => groupAccuracy(state, GROUP_TERMS.D),
  },
  // Performance (4)
  {
    id: 'streak-hunter',
    name: 'Streak Hunter',
    description: 'Achieve consecutive correct answers',
    icon: 'Flame',
    thresholds: { bronze: 5, silver: 10, gold: 20 },
    check: (state) => state.bestStreak,
  },
  {
    id: 'sharpshooter',
    name: 'Sharpshooter',
    description: 'Maintain high overall accuracy',
    icon: 'Target',
    thresholds: { bronze: 70, silver: 85, gold: 95 },
    check: (state) => state.totalAttempted > 0
      ? Math.round((state.totalCorrect / state.totalAttempted) * 100)
      : 0,
  },
  {
    id: 'speed-demon',
    name: 'Speed Demon',
    description: 'Complete many scenarios',
    icon: 'Zap',
    thresholds: { bronze: 10, silver: 50, gold: 100 },
    check: (state) => state.scenariosCompleted.length,
  },
  {
    id: 'point-collector',
    name: 'Point Collector',
    description: 'Accumulate XP points',
    icon: 'Coins',
    thresholds: { bronze: 500, silver: 2000, gold: 5000 },
    check: (state) => state.score,
  },
  // Special (2)
  {
    id: 'perfect-run',
    name: 'Perfect Run',
    description: 'Complete scenarios with no wrong answers',
    icon: 'CheckCircle',
    thresholds: { bronze: 3, silver: 5, gold: 10 },
    check: (state) => state.perfectScenarios || 0,
  },
  {
    id: 'globe-trotter',
    name: 'Globe Trotter',
    description: 'Try unique scenarios',
    icon: 'Globe2',
    thresholds: { bronze: 5, silver: 15, gold: 26 },
    check: (state) => state.scenariosCompleted.length,
  },
]

export { TIERS, TIER_COLORS }

// Helper: average accuracy across a group of Incoterm codes
function groupAccuracy(state, codes) {
  let totalCorrect = 0, totalAttempted = 0
  for (const code of codes) {
    const m = state.incotermsMastered[code]
    if (m) { totalCorrect += m.correct; totalAttempted += m.total }
  }
  return totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0
}

// Compute which tier a badge has reached
export function getBadgeTier(badge, state) {
  const value = badge.check(state)
  if (value >= badge.thresholds.gold) return 'gold'
  if (value >= badge.thresholds.silver) return 'silver'
  if (value >= badge.thresholds.bronze) return 'bronze'
  return null // locked
}

// Compute all badge states
export function computeAllBadges(state) {
  return BADGES.map(badge => ({
    ...badge,
    tier: getBadgeTier(badge, state),
    value: badge.check(state),
  }))
}
```

**Step 3: Verify no import errors**

```bash
npx vite build
```

Expected: Build passes (files created but not yet imported anywhere).

**Step 4: Commit**

```bash
git add src/data/levels.js src/data/badges.js
git commit -m "feat: add level definitions (8 levels) and badge definitions (10 badges x 3 tiers)"
```

---

### Task 3: Extend gameStore with badge + level support

**Files:**
- Modify: `src/stores/gameStore.js`

**Step 1: Update gameStore**

Add to gameStore state:
- `perfectScenarios: 0` - count of scenarios completed without any wrong answer
- `badgesEarned: {}` - map of badge ID -> highest tier earned
- Track per-scenario wrong answer count for perfect run detection

Key changes:
- In `answerScenario()`: track `currentScenarioWrong` flag per scenario
- In `nextScenario()` (which marks completion): if no wrong answers in that scenario, increment `perfectScenarios`
- Add `checkBadges()` action that computes all badge states and updates `badgesEarned`
- Call `checkBadges()` after every `answerScenario()`
- `resetProgress()`: also reset `perfectScenarios` and `badgesEarned`

The store should NOT import badge definitions directly (to avoid circular deps). Instead, expose state and let UI components compute badges via `computeAllBadges(state)`.

Actually simpler: store `perfectScenarios` count and let `computeAllBadges()` in badges.js handle all checks from state. No badge tracking needed in store - compute on render.

New state fields:
```javascript
perfectScenarios: 0,      // scenarios completed with 0 wrong answers
currentScenarioWrong: false, // flag: did user get a wrong answer in current scenario
```

In `answerScenario()`:
```javascript
if (!isCorrect) {
  set({ currentScenarioWrong: true })
}
```

In `nextScenario()`:
```javascript
if (!get().currentScenarioWrong) {
  set(s => ({ perfectScenarios: s.perfectScenarios + 1 }))
}
set({ currentScenarioWrong: false })
```

In `resetProgress()`:
```javascript
set({
  score: 0, streak: 0, bestStreak: 0,
  totalCorrect: 0, totalAttempted: 0,
  scenariosCompleted: [], incotermsMastered: {},
  perfectScenarios: 0, currentScenarioWrong: false,
})
```

**Step 2: Verify build**

```bash
npx vite build
```

**Step 3: Commit**

```bash
git add src/stores/gameStore.js
git commit -m "feat: extend gameStore with perfectScenarios tracking for badge system"
```

---

### Task 4: Redesign ProgressPage (levels + badges)

**Files:**
- Modify: `src/pages/ProgressPage.jsx`
- Create: `src/components/badges/BadgeCard.jsx`
- Create: `src/components/badges/BadgeGrid.jsx`

**Step 1: Create BadgeCard component**

```jsx
// src/components/badges/BadgeCard.jsx
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

const TIER_RING = {
  bronze: 'ring-amber-600',
  silver: 'ring-gray-400',
  gold: 'ring-yellow-400',
}
const TIER_BG = {
  bronze: 'bg-amber-50',
  silver: 'bg-gray-50',
  gold: 'bg-yellow-50',
}
const TIER_LABEL = { bronze: 'Bronze', silver: 'Silver', gold: 'Gold' }

export default function BadgeCard({ badge }) {
  const { name, description, icon, tier, value, thresholds } = badge
  const Icon = Icons[icon] || Icons.Award
  const locked = !tier

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`rounded-xl p-3 text-center ${
        locked ? 'bg-gray-100 opacity-50' : TIER_BG[tier]
      } ${!locked ? `ring-2 ${TIER_RING[tier]}` : ''}`}
    >
      <div className="flex justify-center mb-2">
        {locked ? (
          <Icons.Lock className="w-8 h-8 text-gray-400" />
        ) : (
          <Icon className="w-8 h-8" style={{ color: tier === 'gold' ? '#FFD700' : tier === 'silver' ? '#A0A0A0' : '#CD7F32' }} />
        )}
      </div>
      <p className="text-xs font-semibold truncate">{name}</p>
      {!locked && <p className="text-[10px] text-gray-500">{TIER_LABEL[tier]}</p>}
      <p className="text-[10px] text-gray-400 mt-1">{description}</p>
      <div className="text-[10px] text-gray-400 mt-1">
        {value} / {thresholds[tier || 'bronze']}
      </div>
    </motion.div>
  )
}
```

**Step 2: Create BadgeGrid component**

```jsx
// src/components/badges/BadgeGrid.jsx
import BadgeCard from './BadgeCard'

export default function BadgeGrid({ badges }) {
  const earned = badges.filter(b => b.tier)
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold">Badges</h3>
        <span className="text-sm text-gray-500">
          {earned.length} / {badges.length} earned
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {badges.map(badge => (
          <BadgeCard key={badge.id} badge={badge} />
        ))}
      </div>
    </div>
  )
}
```

**Step 3: Redesign ProgressPage**

Update `src/pages/ProgressPage.jsx` to:
1. Import `getLevel`, `getNextLevel`, `getLevelProgress` from levels.js
2. Import `computeAllBadges` from badges.js
3. Add level display section at top (icon + title + XP progress bar)
4. Keep existing stats cards + mastery bars
5. Replace leaderboard with `<BadgeGrid badges={computeAllBadges(gameState)} />`
6. Keep reset button at bottom

Layout order:
```
[Level Card: Icon + Title + XP Bar]
[Stats Cards: Score, Accuracy, Best Streak, Scenarios]
[Incoterm Mastery Bars]
[Badge Grid]
[Reset Button]
```

**Step 4: Verify build + visual check**

```bash
npx vite build && npx vite preview
```

Open http://localhost:4173/progress and verify layout.

**Step 5: Commit**

```bash
git add src/components/badges/ src/pages/ProgressPage.jsx
git commit -m "feat: redesign ProgressPage with level display and badge grid"
```

---

### Task 5: Update HomePage with level summary

**Files:**
- Modify: `src/pages/HomePage.jsx`

**Step 1: Add level + badge count to HomePage**

In the existing "Your Progress" section (conditional on `totalAttempted > 0`):
- Show current level icon + title
- Show badge count (X/10 earned)
- Keep existing stats (scenarios, accuracy, points)

Small addition, no structural changes needed.

**Step 2: Verify build**

```bash
npx vite build
```

**Step 3: Commit**

```bash
git add src/pages/HomePage.jsx
git commit -m "feat: show level and badge count on HomePage"
```

---

### Task 6: Pipeline data + constants

**Files:**
- Create: `src/data/pipeline.js`

**Step 1: Create pipeline data**

```javascript
// src/data/pipeline.js

export const PIPELINE_STAGES = [
  { id: 'factory', label: 'Factory', icon: 'Factory', x: 0 },
  { id: 'packing', label: 'Packing', icon: 'Package', x: 1 },
  { id: 'export', label: 'Export Customs', icon: 'FileCheck', x: 2 },
  { id: 'thc-origin', label: 'Origin THC', icon: 'Container', x: 3 },
  { id: 'transport', label: 'Main Transport', icon: 'Ship', x: 4 },
  { id: 'thc-dest', label: 'Dest THC', icon: 'Container', x: 5 },
  { id: 'import', label: 'Import Customs', icon: 'FileCheck', x: 6 },
  { id: 'inland', label: 'Inland Transport', icon: 'Truck', x: 7 },
  { id: 'buyer', label: 'Buyer', icon: 'Building2', x: 8 },
]

// Maps each Incoterm to where risk and cost transfer
// Index = position in PIPELINE_STAGES (0-8)
export const INCOTERM_PIPELINE = {
  EXW: { risk: 0, cost: 0, seller: [0], buyer: [1,2,3,4,5,6,7,8] },
  FCA: { risk: 1, cost: 1, seller: [0,1], buyer: [2,3,4,5,6,7,8] },
  FAS: { risk: 3, cost: 3, seller: [0,1,2,3], buyer: [4,5,6,7,8] },
  FOB: { risk: 3, cost: 3, seller: [0,1,2,3], buyer: [4,5,6,7,8] },
  CFR: { risk: 3, cost: 5, seller: [0,1,2,3,4,5], buyer: [6,7,8] },
  CIF: { risk: 3, cost: 5, seller: [0,1,2,3,4,5], buyer: [6,7,8] },
  CPT: { risk: 1, cost: 5, seller: [0,1,2,3,4,5], buyer: [6,7,8] },
  CIP: { risk: 1, cost: 5, seller: [0,1,2,3,4,5], buyer: [6,7,8] },
  DAP: { risk: 7, cost: 7, seller: [0,1,2,3,4,5,6,7], buyer: [8] },
  DPU: { risk: 7, cost: 7, seller: [0,1,2,3,4,5,6,7], buyer: [8] },
  DDP: { risk: 8, cost: 8, seller: [0,1,2,3,4,5,6,7,8], buyer: [] },
}

// Game levels for drag-and-drop (progressive difficulty)
export const PIPELINE_GAME_LEVELS = [
  { terms: ['EXW', 'DDP'], label: 'Round 1: Extremes' },
  { terms: ['FOB', 'CIF'], label: 'Round 2: Popular Terms' },
  { terms: ['FCA', 'DAP'], label: 'Round 3: Modern Favorites' },
  { terms: ['CFR', 'CPT'], label: 'Round 4: C-Terms Trap' },
  { terms: ['FAS', 'CIP', 'DPU'], label: 'Round 5: Full Challenge' },
]
```

**Step 2: Commit**

```bash
git add src/data/pipeline.js
git commit -m "feat: add pipeline stage definitions and Incoterm-to-pipeline mappings"
```

---

### Task 7: Pipeline visualization component

**Files:**
- Create: `src/components/pipeline/PipelineVisualization.jsx`

**Step 1: Build the SVG pipeline**

Creates a horizontal 9-node pipeline with:
- Nodes as circles with icons (Lucide)
- Connector lines between nodes
- Seller nodes colored blue, buyer nodes colored orange
- Risk flag (red) and cost flag (green) markers at transfer points
- Animated transition when switching Incoterms (Framer Motion)

Props: `{ incoterm }` - string code like 'FOB'

The component should:
1. Read `PIPELINE_STAGES` and `INCOTERM_PIPELINE[incoterm]`
2. Render horizontal SVG (responsive width, fixed height ~200px)
3. Color each node: seller = blue (#3B82F6), buyer = orange (#F97316)
4. Place animated flag markers at risk/cost transfer points
5. Show labels below each node
6. Animate color transitions on Incoterm change

**Step 2: Verify renders in isolation**

Add temporary test in PipelinePage (next task).

**Step 3: Commit**

```bash
git add src/components/pipeline/PipelineVisualization.jsx
git commit -m "feat: add animated pipeline visualization component"
```

---

### Task 8: Drag-and-drop game component

**Files:**
- Create: `src/components/pipeline/DragAndDropGame.jsx`

**Step 1: Build the drag-and-drop game**

Game flow:
1. Show pipeline with 9 nodes (no colors, neutral gray)
2. Show the Incoterm name being tested
3. User drags "Risk Flag" to where they think risk transfers
4. User drags "Cost Flag" to where they think cost transfers
5. Submit -> check against INCOTERM_PIPELINE data
6. Show correct answer with animation
7. Score: both correct = 20pts, one correct = 10pts, none = 0pts
8. Next round button

Implementation approach:
- Use HTML drag-and-drop API (onDragStart, onDrop, onDragOver)
- Two draggable flags at bottom
- 9 drop zones (one per pipeline node)
- On drop: record position
- Submit button checks against INCOTERM_PIPELINE[term].risk and .cost
- Uses `gameStore.addPoints()` (new simple action) for scoring

Alternative (simpler, mobile-friendly): Use **tap-to-place** instead of drag-and-drop.
- User taps "Place Risk Flag" button, then taps a node
- User taps "Place Cost Flag" button, then taps a node
- More reliable on mobile than HTML drag-and-drop

**Step 2: Commit**

```bash
git add src/components/pipeline/DragAndDropGame.jsx
git commit -m "feat: add pipeline drag-and-drop game component"
```

---

### Task 9: PipelinePage (new route)

**Files:**
- Create: `src/pages/PipelinePage.jsx`
- Modify: `src/App.jsx` (add route)
- Modify: `src/components/layout/Layout.jsx` (add nav item)

**Step 1: Create PipelinePage**

Two-tab layout:
- **Explore tab**: Incoterm selector (11 buttons) + PipelineVisualization
- **Game tab**: DragAndDropGame with progressive rounds

```jsx
// src/pages/PipelinePage.jsx
import { useState } from 'react'
import { INCOTERMS } from '../data/incoterms'
import PipelineVisualization from '../components/pipeline/PipelineVisualization'
import DragAndDropGame from '../components/pipeline/DragAndDropGame'

export default function PipelinePage() {
  const [tab, setTab] = useState('explore') // 'explore' | 'game'
  const [selectedTerm, setSelectedTerm] = useState('FOB')
  // ... render tabs, Incoterm buttons, visualization/game
}
```

**Step 2: Add route to App.jsx**

```javascript
{ path: 'pipeline', element: <PipelinePage /> }
```

**Step 3: Add to bottom navigation in Layout.jsx**

Add Pipeline icon (GitBranch or Route from Lucide) to the 5-item bottom nav. This makes 6 items. If too crowded, replace one or use a "More" menu. Alternative: keep 5 nav items, add Pipeline as a card on HomePage instead.

Decision: Replace the bottom nav's "Biaya" (cost-simulator) with "Pipeline" since pipeline is more engaging. Cost simulator remains accessible from HomePage card. This keeps 5 nav items.

**Step 4: Verify build + visual check**

```bash
npx vite build && npx vite preview
```

Navigate to /pipeline and verify both tabs work.

**Step 5: Commit**

```bash
git add src/pages/PipelinePage.jsx src/App.jsx src/components/layout/Layout.jsx
git commit -m "feat: add Pipeline page with explore and game modes"
```

---

### Task 10: Integration testing + polish

**Files:**
- Various small fixes across components

**Step 1: Full app walkthrough**

1. Navigate every route: /, /learn, /learn/FOB, /scenario, /cost-simulator, /progress, /pipeline
2. Play a scenario -> verify XP increases -> verify level updates
3. Get 5 correct in a row -> verify Streak Hunter badge unlocks
4. Check reset -> verify everything clears
5. Check language toggle (ID/EN) works on new components

**Step 2: Playwright smoke test on live site**

After push:
- Navigate all routes via Playwright
- Take screenshots
- Verify security headers still present

**Step 3: Final commit + push**

```bash
git add -A && git commit -m "polish: integration fixes and cleanup"
git push origin main
```

---

## Task Dependencies

```
Task 1 (Remove Supabase) ─── independent
Task 2 (Data files) ──────── independent
Task 3 (gameStore) ────────── depends on Task 2 concepts
Task 4 (ProgressPage) ─────── depends on Tasks 1, 2, 3
Task 5 (HomePage) ──────────── depends on Task 2
Task 6 (Pipeline data) ────── independent
Task 7 (Pipeline viz) ─────── depends on Task 6
Task 8 (DnD game) ──────────── depends on Tasks 6, 7
Task 9 (PipelinePage) ─────── depends on Tasks 7, 8
Task 10 (Integration) ──────── depends on ALL above
```

## Parallelization Opportunities

**Batch A (can run in parallel):**
- Task 1 (Remove Supabase)
- Task 2 (Data files)
- Task 6 (Pipeline data)

**Batch B (after Batch A):**
- Task 3 (gameStore) — needs Task 2
- Task 5 (HomePage) — needs Task 2
- Task 7 (Pipeline viz) — needs Task 6

**Batch C (after Batch B):**
- Task 4 (ProgressPage) — needs Tasks 1, 2, 3
- Task 8 (DnD game) — needs Tasks 6, 7

**Batch D (after Batch C):**
- Task 9 (PipelinePage) — needs Tasks 7, 8

**Batch E (final):**
- Task 10 (Integration) — needs ALL
