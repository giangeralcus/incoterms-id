# Supabase Leaderboard Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a global leaderboard to the Progress page. Users submit their score anonymously (just a username) and see top 10 scores in real-time via Supabase Realtime.

**Architecture:** New Supabase project (free tier, separate from main business project). Single table `scores`. Anonymous INSERT via anon key (no auth). `useLeaderboard` hook handles fetch + realtime subscription. UI added to bottom of ProgressPage.

**Tech Stack:** Supabase JS v2 (`@supabase/supabase-js`), React 19, Tailwind v4

---

## Context

- Repo: `D:/GitHub Projects/_active/belajarexporimpor`
- New Supabase project: **SEPARATE** from `awwzmxehjnjvjfcfvpym` (main business)
- Files to touch:
  - `src/stores/gameStore.js` — read score/accuracy/scenariosCompleted from here
  - `src/pages/ProgressPage.jsx` — add leaderboard section at bottom
  - `.env.local` — new Supabase credentials (gitignored)

---

### Task 1: Create new Supabase project

**Step 1: Create the project via Supabase MCP**

Use the Supabase MCP tool to create a new project:

```
Tool: mcp__plugin_supabase_supabase__create_project
Parameters:
  name: "belajarexporimpor"
  region: "ap-southeast-1"  (Singapore - closest to Indonesia)
  organization_id: (get from list_organizations first)
```

If MCP fails, create manually at https://supabase.com/dashboard → New Project.

**Step 2: Get project URL and anon key**

```
Tool: mcp__plugin_supabase_supabase__get_project_url
Tool: mcp__plugin_supabase_supabase__get_publishable_keys
```

Note the values:
- `VITE_SUPABASE_URL=https://<project-ref>.supabase.co`
- `VITE_SUPABASE_ANON_KEY=<anon-key>`

**Step 3: Create .env.local**

```bash
cd "D:/GitHub Projects/_active/belajarexporimpor"
cat > .env.local << 'EOF'
VITE_SUPABASE_URL=https://REPLACE_ME.supabase.co
VITE_SUPABASE_ANON_KEY=REPLACE_ME
EOF
```

Replace `REPLACE_ME` with actual values from Step 2.

**Step 4: Verify .env.local is gitignored**

```bash
cat .gitignore | grep env
```

If `.env.local` is NOT in `.gitignore`, add it:

```bash
echo ".env.local" >> .gitignore
git add .gitignore
git commit -m "chore: gitignore .env.local"
```

---

### Task 2: Create scores table in Supabase

**Step 1: Run migration via Supabase MCP**

```
Tool: mcp__plugin_supabase_supabase__apply_migration
SQL:
```

```sql
-- Create scores table
CREATE TABLE public.scores (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  username text NOT NULL CHECK (char_length(username) >= 2 AND char_length(username) <= 20),
  score integer NOT NULL CHECK (score >= 0),
  accuracy integer NOT NULL CHECK (accuracy >= 0 AND accuracy <= 100),
  scenarios_completed integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.scores ENABLE ROW LEVEL SECURITY;

-- Anyone can read top scores (for leaderboard)
CREATE POLICY "anon_read_scores"
  ON public.scores FOR SELECT
  TO anon
  USING (true);

-- Anyone can insert their own score (anonymous submission)
CREATE POLICY "anon_insert_scores"
  ON public.scores FOR INSERT
  TO anon
  WITH CHECK (true);

-- No update or delete for anon (scores are permanent)

-- Index for fast leaderboard query
CREATE INDEX idx_scores_score_desc ON public.scores (score DESC);
```

**Step 2: Verify table was created**

```
Tool: mcp__plugin_supabase_supabase__execute_sql
SQL: SELECT count(*) FROM public.scores;
```

Expected: `count = 0` (empty table)

**Step 3: Test insert via SQL**

```
Tool: mcp__plugin_supabase_supabase__execute_sql
SQL: INSERT INTO public.scores (username, score, accuracy, scenarios_completed)
     VALUES ('TestUser', 250, 85, 10)
     RETURNING *;
```

Expected: Row returned with generated `id` and `created_at`

**Step 4: Commit migration note**

```bash
# Create migrations folder for reference
mkdir -p supabase/migrations
cat > supabase/migrations/20260223000000_create_scores.sql << 'EOF'
-- See plan: docs/plans/2026-02-23-supabase-leaderboard.md
-- Applied to belajarexporimpor Supabase project (separate from main business project)
CREATE TABLE public.scores (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  username text NOT NULL CHECK (char_length(username) >= 2 AND char_length(username) <= 20),
  score integer NOT NULL CHECK (score >= 0),
  accuracy integer NOT NULL CHECK (accuracy >= 0 AND accuracy <= 100),
  scenarios_completed integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now() NOT NULL
);
ALTER TABLE public.scores ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_read_scores" ON public.scores FOR SELECT TO anon USING (true);
CREATE POLICY "anon_insert_scores" ON public.scores FOR INSERT TO anon WITH CHECK (true);
CREATE INDEX idx_scores_score_desc ON public.scores (score DESC);
EOF

git add supabase/migrations/
git commit -m "chore: add scores table migration reference"
```

---

### Task 3: Install Supabase JS client

**Files:**
- Modify: `package.json` (auto by npm)
- Create: `src/lib/supabase.js`

**Step 1: Install package**

```bash
cd "D:/GitHub Projects/_active/belajarexporimpor" && npm install @supabase/supabase-js 2>&1 | tail -5
```

Expected: Package added to dependencies

**Step 2: Create supabase client**

```js
// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase env vars missing — leaderboard disabled')
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null
```

**Step 3: Verify lint**

```bash
npm run lint 2>&1 | tail -5
```

Expected: No errors

**Step 4: Commit**

```bash
git add src/lib/supabase.js package.json package-lock.json
git commit -m "feat: add Supabase client for leaderboard"
```

---

### Task 4: Create useLeaderboard hook

**Files:**
- Create: `src/hooks/useLeaderboard.js`

**Step 1: Create the hook**

```js
// src/hooks/useLeaderboard.js
import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'

export function useLeaderboard() {
  const [scores, setScores] = useState([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const fetchTopScores = useCallback(async () => {
    if (!supabase) return
    setLoading(true)
    setError(null)
    const { data, error: err } = await supabase
      .from('scores')
      .select('id, username, score, accuracy, scenarios_completed, created_at')
      .order('score', { ascending: false })
      .limit(10)
    setLoading(false)
    if (err) { setError(err.message); return }
    setScores(data || [])
  }, [])

  // Real-time subscription
  useEffect(() => {
    if (!supabase) return
    fetchTopScores()
    const channel = supabase
      .channel('scores-realtime')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'scores' }, () => {
        fetchTopScores()
      })
      .subscribe()
    return () => { supabase.removeChannel(channel) }
  }, [fetchTopScores])

  const submitScore = useCallback(async ({ username, score, accuracy, scenariosCompleted }) => {
    if (!supabase || submitted) return
    // Sanitize username
    const clean = username.replace(/[<>]/g, '').trim().slice(0, 20)
    if (clean.length < 2) { setError('Username minimal 2 karakter'); return }
    setSubmitting(true)
    setError(null)
    const { error: err } = await supabase
      .from('scores')
      .insert({ username: clean, score, accuracy, scenarios_completed: scenariosCompleted })
    setSubmitting(false)
    if (err) { setError(err.message); return }
    setSubmitted(true)
    fetchTopScores()
  }, [submitted, fetchTopScores])

  return { scores, loading, submitting, submitted, error, submitScore }
}
```

**Step 2: Verify lint**

```bash
cd "D:/GitHub Projects/_active/belajarexporimpor" && npm run lint 2>&1 | tail -5
```

Expected: No errors

**Step 3: Commit**

```bash
git add src/hooks/useLeaderboard.js
git commit -m "feat: add useLeaderboard hook with realtime subscription"
```

---

### Task 5: Add i18n keys for leaderboard

**Files:**
- Modify: `src/i18n/translations.js`

**Step 1: Add leaderboard keys**

Find the `progress` section in translations.js and add:

```js
leaderboard: {
  title: { id: 'Papan Peringkat Global', en: 'Global Leaderboard' },
  subtitle: { id: 'Top 10 skor tertinggi', en: 'Top 10 all-time scores' },
  submitTitle: { id: 'Masukkan Skormu', en: 'Submit Your Score' },
  usernamePlaceholder: { id: 'Username (2-20 karakter)', en: 'Username (2-20 chars)' },
  submitBtn: { id: 'Submit Skor', en: 'Submit Score' },
  submitting: { id: 'Menyimpan...', en: 'Submitting...' },
  submitted: { id: 'Skor tersimpan!', en: 'Score submitted!' },
  rank: { id: '#', en: '#' },
  player: { id: 'Pemain', en: 'Player' },
  score: { id: 'Skor', en: 'Score' },
  accuracy: { id: 'Akurasi', en: 'Accuracy' },
  scenarios: { id: 'Skenario', en: 'Scenarios' },
  loading: { id: 'Memuat...', en: 'Loading...' },
  offline: { id: 'Leaderboard tidak tersedia (offline mode)', en: 'Leaderboard unavailable (offline mode)' },
  noScores: { id: 'Belum ada skor. Jadilah yang pertama!', en: 'No scores yet. Be the first!' },
  minScore: { id: 'Selesaikan minimal 1 skenario dulu!', en: 'Complete at least 1 scenario first!' },
},
```

**Step 2: Commit**

```bash
git add src/i18n/translations.js
git commit -m "feat: add i18n keys for leaderboard"
```

---

### Task 6: Add leaderboard UI to ProgressPage

**Files:**
- Modify: `src/pages/ProgressPage.jsx`

**Step 1: Add imports at top of ProgressPage.jsx**

```jsx
import { useState } from 'react'
import { Globe, Medal, Send } from 'lucide-react'
import { useLeaderboard } from '../hooks/useLeaderboard'
```

**Step 2: Inside the ProgressPage component, add hook call**

After the existing destructuring from `useGameStore()`, add:

```jsx
const { scores, loading, submitting, submitted, error, submitScore } = useLeaderboard()
const [username, setUsername] = useState('')
const canSubmit = totalAttempted > 0 && !submitted
```

**Step 3: Add leaderboard section at the bottom of the return JSX**

After the existing Incoterm Mastery section, add:

```jsx
{/* Leaderboard */}
{supabase ? (
  <div className="bg-white rounded-xl p-5 shadow-sm border space-y-4">
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5 text-primary" />
      <h3 className="font-semibold text-gray-900">{t(T.progress.leaderboard.title, lang)}</h3>
      <span className="text-xs text-gray-400 ml-auto">{t(T.progress.leaderboard.subtitle, lang)}</span>
    </div>

    {/* Submit form */}
    {canSubmit && (
      <div className="bg-primary/5 rounded-lg p-3 space-y-2">
        <p className="text-xs font-medium text-primary">{t(T.progress.leaderboard.submitTitle, lang)}</p>
        <div className="flex gap-2">
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value.slice(0, 20))}
            placeholder={t(T.progress.leaderboard.usernamePlaceholder, lang)}
            maxLength={20}
            className="flex-1 text-sm border rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            onClick={() => submitScore({ username, score, accuracy, scenariosCompleted: scenariosCompleted.length })}
            disabled={submitting || username.trim().length < 2}
            className="flex items-center gap-1 px-3 py-1.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-3 h-3" />
            {submitting ? t(T.progress.leaderboard.submitting, lang) : t(T.progress.leaderboard.submitBtn, lang)}
          </button>
        </div>
        {error && <p className="text-xs text-danger">{error}</p>}
      </div>
    )}

    {submitted && (
      <motion.p className="text-xs text-secondary text-center py-1">
        {t(T.progress.leaderboard.submitted, lang)}
      </motion.p>
    )}

    {totalAttempted === 0 && (
      <p className="text-xs text-gray-400 text-center py-2">{t(T.progress.leaderboard.minScore, lang)}</p>
    )}

    {/* Top 10 table */}
    {loading ? (
      <p className="text-xs text-gray-400 text-center py-4">{t(T.progress.leaderboard.loading, lang)}</p>
    ) : scores.length === 0 ? (
      <p className="text-xs text-gray-400 text-center py-4">{t(T.progress.leaderboard.noScores, lang)}</p>
    ) : (
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-xs text-gray-500">
              <th className="text-left pb-2 w-8">#</th>
              <th className="text-left pb-2">{t(T.progress.leaderboard.player, lang)}</th>
              <th className="text-right pb-2">{t(T.progress.leaderboard.score, lang)}</th>
              <th className="text-right pb-2 hidden sm:table-cell">{t(T.progress.leaderboard.accuracy, lang)}</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((s, i) => (
              <tr key={s.id} className={`border-b border-gray-50 ${i < 3 ? 'font-medium' : ''}`}>
                <td className="py-2 text-xs text-gray-400">
                  {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`}
                </td>
                <td className="py-2 text-gray-900 truncate max-w-24">{s.username}</td>
                <td className="py-2 text-right font-mono text-primary">{s.score.toLocaleString()}</td>
                <td className="py-2 text-right text-gray-500 hidden sm:table-cell">{s.accuracy}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
) : (
  <div className="bg-gray-50 rounded-xl p-4 text-center text-xs text-gray-400">
    {t(T.progress.leaderboard.offline, lang)}
  </div>
)}
```

**Step 4: Add supabase import at top of ProgressPage.jsx**

```jsx
import { supabase } from '../lib/supabase'
```

**Step 5: Verify in browser**

```bash
cd "D:/GitHub Projects/_active/belajarexporimpor" && npm run dev -- --port 5173
```

Navigate to `http://localhost:5173/progress`
- If `.env.local` has valid credentials: leaderboard section shows with submit form
- If no credentials yet: shows "Leaderboard unavailable (offline mode)"

After playing 1+ scenarios, username input + Submit button should appear.

**Step 6: Test submit flow**

1. Play a scenario in `/scenario` page
2. Go to `/progress`
3. Enter username (min 2 chars)
4. Click Submit Skor
5. Your score should appear in the leaderboard

**Step 7: Commit**

```bash
git add src/pages/ProgressPage.jsx
git commit -m "feat: add leaderboard UI to ProgressPage with realtime updates"
```

---

### Task 7: Build verification

**Step 1: Run build**

```bash
cd "D:/GitHub Projects/_active/belajarexporimpor" && npm run build 2>&1
```

Expected: Build succeeds. If Supabase env vars missing, build still succeeds (supabase client returns null, UI shows offline mode).

**Step 2: Verify env vars not leaked into git**

```bash
git status
git diff --cached
```

Expected: `.env.local` NOT in staged files.

**Step 3: Push**

```bash
git push origin main
```

---

## Deployment Notes

When deploying to Vercel:
1. Go to Vercel project settings → Environment Variables
2. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
3. Redeploy

Supabase free tier limits:
- 500MB database
- 2GB bandwidth/month
- Sufficient for leaderboard with thousands of entries
