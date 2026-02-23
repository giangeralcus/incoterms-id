# Visual Responsibility Map Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add an interactive drag-and-drop responsibility map to each Incoterm detail page, letting users test their knowledge by assigning obligations to Seller or Buyer.

**Architecture:** New `ResponsibilityMap.jsx` component embedded in `LearnPage.jsx`'s `IncotermDetail` function. Uses HTML5 drag-and-drop API (no new deps). Data comes from existing `sellerObligations` / `buyerObligations` arrays in `incoterms.js`.

**Tech Stack:** React 19, Framer Motion (already installed), Tailwind v4, HTML5 Drag API

---

## Context

- Repo: `D:/GitHub Projects/_active/belajarexporimpor`
- Relevant files:
  - `src/pages/LearnPage.jsx` — contains `IncotermDetail` component, add map here
  - `src/data/incoterms.js` — `sellerObligations[]` and `buyerObligations[]` per term
  - `src/i18n/translations.js` — add new translation keys here
  - `src/stores/languageStore.js` — `lang` state (already used in LearnPage)

---

### Task 1: Add translations for map UI

**Files:**
- Modify: `src/i18n/translations.js`

**Step 1: Read translations.js to find structure**

```bash
cat src/i18n/translations.js | head -60
```

**Step 2: Add map translation keys**

In `translations.js`, find the `learn` section and add inside it:

```js
map: {
  title: { id: 'Uji Pengetahuan: Drag & Drop', en: 'Test Your Knowledge: Drag & Drop' },
  subtitle: { id: 'Seret kewajiban ke kolom Seller atau Buyer yang benar', en: 'Drag each obligation to the correct Seller or Buyer column' },
  seller: { id: 'Seller', en: 'Seller' },
  buyer: { id: 'Buyer', en: 'Buyer' },
  checkBtn: { id: 'Cek Jawaban', en: 'Check Answers' },
  resetBtn: { id: 'Ulangi', en: 'Reset' },
  correct: { id: 'Benar!', en: 'Correct!' },
  wrong: { id: 'Salah', en: 'Wrong' },
  score: { id: 'Skor', en: 'Score' },
  obligationsPool: { id: 'Kewajiban (drag ke kolom yang benar)', en: 'Obligations (drag to correct column)' },
},
```

**Step 3: Verify no syntax errors**

```bash
cd "D:/GitHub Projects/_active/belajarexporimpor" && npm run lint 2>&1 | tail -10
```

Expected: No errors

**Step 4: Commit**

```bash
git add src/i18n/translations.js
git commit -m "feat: add i18n keys for responsibility map"
```

---

### Task 2: Create ResponsibilityMap component

**Files:**
- Create: `src/components/ResponsibilityMap.jsx`

**Step 1: Create the component**

```jsx
// src/components/ResponsibilityMap.jsx
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, RotateCcw, GripVertical } from 'lucide-react'
import { translations as T, t } from '../i18n/translations'

export default function ResponsibilityMap({ term, lang }) {
  // Build shuffled pool from both obligation arrays
  const buildItems = useCallback(() => {
    const all = [
      ...term.sellerObligations.map((ob, i) => ({ id: `S-${i}`, text: ob, correct: 'S' })),
      ...term.buyerObligations.map((ob, i) => ({ id: `B-${i}`, text: ob, correct: 'B' })),
    ]
    // Fisher-Yates shuffle
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[all[i], all[j]] = [all[j], all[i]]
    }
    return all
  }, [term])

  const [pool, setPool] = useState(() => buildItems())
  const [sellerCol, setSellerCol] = useState([])
  const [buyerCol, setBuyerCol] = useState([])
  const [dragging, setDragging] = useState(null) // { id, from }
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState(null)

  function reset() {
    setPool(buildItems())
    setSellerCol([])
    setBuyerCol([])
    setDragging(null)
    setChecked(false)
    setScore(null)
  }

  // Returns the item array for a given zone name
  function getZone(name) {
    if (name === 'pool') return pool
    if (name === 'S') return sellerCol
    if (name === 'B') return buyerCol
    return []
  }

  function setZone(name, items) {
    if (name === 'pool') setPool(items)
    else if (name === 'S') setSellerCol(items)
    else if (name === 'B') setBuyerCol(items)
  }

  function handleDragStart(e, item, from) {
    setDragging({ item, from })
    e.dataTransfer.effectAllowed = 'move'
  }

  function handleDrop(e, to) {
    e.preventDefault()
    if (!dragging || dragging.from === to) return
    const { item, from } = dragging
    setZone(from, getZone(from).filter(i => i.id !== item.id))
    setZone(to, [...getZone(to), item])
    setDragging(null)
  }

  function handleDragOver(e) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  function checkAnswers() {
    const allPlaced = [...sellerCol, ...buyerCol]
    const correct = allPlaced.filter(i => {
      if (i.correct === 'S') return sellerCol.find(s => s.id === i.id)
      return buyerCol.find(b => b.id === i.id)
    }).length
    setScore({ correct, total: allPlaced.length })
    setChecked(true)
  }

  function itemColor(item, col) {
    if (!checked) return 'bg-white border-gray-200'
    const isCorrect = item.correct === col
    return isCorrect
      ? 'bg-green-50 border-green-300'
      : 'bg-red-50 border-red-300'
  }

  const allPlaced = sellerCol.length + buyerCol.length
  const totalItems = pool.length + sellerCol.length + buyerCol.length

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">{t(T.learn.map.title, lang)}</h3>
          <p className="text-xs text-gray-500 mt-0.5">{t(T.learn.map.subtitle, lang)}</p>
        </div>
        <button
          onClick={reset}
          className="text-xs text-gray-400 hover:text-primary flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" />
          {t(T.learn.map.resetBtn, lang)}
        </button>
      </div>

      {/* Score badge */}
      {checked && score !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`text-center py-2 rounded-lg text-sm font-semibold ${
            score.correct === score.total
              ? 'bg-green-100 text-green-700'
              : 'bg-amber-100 text-amber-700'
          }`}
        >
          {t(T.learn.map.score, lang)}: {score.correct}/{score.total}
          {score.correct === score.total && ' 🎉'}
        </motion.div>
      )}

      {/* Pool */}
      {pool.length > 0 && (
        <div>
          <p className="text-xs font-medium text-gray-500 mb-2">{t(T.learn.map.obligationsPool, lang)}</p>
          <div
            onDrop={e => handleDrop(e, 'pool')}
            onDragOver={handleDragOver}
            className="min-h-12 flex flex-wrap gap-2 p-2 rounded-lg border-2 border-dashed border-gray-200 bg-gray-50"
          >
            <AnimatePresence>
              {pool.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  draggable
                  onDragStart={e => handleDragStart(e, item, 'pool')}
                  className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 cursor-grab active:cursor-grabbing shadow-sm hover:border-primary hover:shadow-md transition-all"
                >
                  <GripVertical className="w-3 h-3 text-gray-300 shrink-0" />
                  <span className="max-w-xs">{item.text}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Two columns */}
      <div className="grid grid-cols-2 gap-3">
        {['S', 'B'].map(col => (
          <div
            key={col}
            onDrop={e => handleDrop(e, col)}
            onDragOver={handleDragOver}
            className={`min-h-32 rounded-lg border-2 border-dashed p-2 transition-colors ${
              col === 'S'
                ? 'border-cargo/40 bg-cargo/5'
                : 'border-primary/40 bg-primary/5'
            }`}
          >
            <div className={`text-xs font-bold mb-2 ${col === 'S' ? 'text-cargo' : 'text-primary'}`}>
              {col === 'S' ? t(T.learn.map.seller, lang) : t(T.learn.map.buyer, lang)}
            </div>
            <div className="space-y-1.5">
              <AnimatePresence>
                {(col === 'S' ? sellerCol : buyerCol).map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: col === 'S' ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    draggable={!checked}
                    onDragStart={e => handleDragStart(e, item, col)}
                    className={`flex items-start gap-1.5 border rounded-lg px-2 py-1.5 text-xs cursor-grab active:cursor-grabbing transition-all ${itemColor(item, col)}`}
                  >
                    {checked ? (
                      item.correct === col
                        ? <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0 mt-0.5" />
                        : <XCircle className="w-3 h-3 text-red-500 shrink-0 mt-0.5" />
                    ) : (
                      <GripVertical className="w-3 h-3 text-gray-300 shrink-0 mt-0.5" />
                    )}
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {/* Check button */}
      {allPlaced > 0 && allPlaced === totalItems && !checked && (
        <motion.button
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={checkAnswers}
          className="w-full py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          {t(T.learn.map.checkBtn, lang)}
        </motion.button>
      )}
    </div>
  )
}
```

**Step 2: Verify lint passes**

```bash
cd "D:/GitHub Projects/_active/belajarexporimpor" && npm run lint 2>&1 | tail -10
```

Expected: No errors

**Step 3: Commit**

```bash
git add src/components/ResponsibilityMap.jsx
git commit -m "feat: add ResponsibilityMap drag-and-drop component"
```

---

### Task 3: Integrate map into LearnPage

**Files:**
- Modify: `src/pages/LearnPage.jsx`

**Step 1: Add import at top of LearnPage.jsx**

After the existing imports, add:

```jsx
import ResponsibilityMap from '../components/ResponsibilityMap'
```

**Step 2: Add map inside IncotermDetail function**

In `LearnPage.jsx`, find the `IncotermDetail` component. It renders several sections (Header, Obligations, Tips, etc.). Add the ResponsibilityMap AFTER the obligations section (after the `<div className="grid sm:grid-cols-2 gap-4">` obligations block):

```jsx
{/* Responsibility Map - interactive test */}
<ResponsibilityMap term={term} lang={lang} />
```

**Step 3: Verify in browser**

```bash
cd "D:/GitHub Projects/_active/belajarexporimpor" && npm run dev -- --port 5173
```

Navigate to `http://localhost:5173/learn/EXW`
- Obligation cards should appear in pool below the header section
- Drag a card to Seller or Buyer column - should move
- Drag all cards → "Cek Jawaban" button appears
- Click check → cards turn green/red, score shows

**Step 4: Test with at least 3 Incoterms**

Check `/learn/FOB`, `/learn/DDP`, `/learn/CIF` - map should render correctly for each.

**Step 5: Commit**

```bash
git add src/pages/LearnPage.jsx
git commit -m "feat: integrate ResponsibilityMap into LearnPage"
```

---

### Task 4: Fix S/B badge legend in CostSimulator

**Files:**
- Modify: `src/pages/CostSimulator.jsx`

**Context:** Users see "S" and "B" in the cost table but don't know they mean Seller/Buyer. Need a small legend.

**Step 1: Find the comparison table section in CostSimulator.jsx**

Look for where `COMPARE_TERMS` is mapped to render the table header row.

**Step 2: Add legend above the table**

Before the `<table>` element in the comparison section, add:

```jsx
{/* Legend */}
<div className="flex gap-4 text-xs mb-2">
  <span className="flex items-center gap-1">
    <span className="inline-block w-5 h-5 rounded text-center font-bold bg-cargo/10 text-cargo leading-5">S</span>
    {lang === 'id' ? 'Seller (Penjual)' : 'Seller'}
  </span>
  <span className="flex items-center gap-1">
    <span className="inline-block w-5 h-5 rounded text-center font-bold bg-primary/10 text-primary leading-5">B</span>
    {lang === 'id' ? 'Buyer (Pembeli)' : 'Buyer'}
  </span>
  <span className="flex items-center gap-1 text-gray-400">
    Costs in USD
  </span>
</div>
```

**Step 3: Verify in browser**

Navigate to `http://localhost:5173/cost-simulator`
- Legend "S = Seller, B = Buyer, Costs in USD" should appear above the comparison table

**Step 4: Commit**

```bash
git add src/pages/CostSimulator.jsx
git commit -m "fix: add S/B legend and USD label to cost comparison table"
```

---

### Task 5: Build verification

**Step 1: Run production build**

```bash
cd "D:/GitHub Projects/_active/belajarexporimpor" && npm run build 2>&1
```

Expected: `dist/` created, no build errors, no TS/lint errors

**Step 2: Preview build**

```bash
npm run preview -- --port 5174
```

Navigate to `http://localhost:5174/learn/FOB` and verify map works in production build.

**Step 3: Final commit if any fixes needed, else done**

```bash
git push origin main
```
