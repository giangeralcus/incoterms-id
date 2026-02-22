# Gamified Learning UX Patterns - Research

> Source: Research Agent 5 (2026-02-22)
> Covers: Game mechanics, UI patterns, successful examples, React libraries, data architecture

## 1. Game Mechanics That Teach

### Scenario-Based Learning
- Present real trade situations, not abstract definitions
- 3 scenario types: **Selection** (pick Incoterm), **Consequence** (predict outcome), **Comparison** (which is better)
- Wrong answers should show *what goes wrong* (e.g., "EXW but buyer can't handle export clearance - 2 week delay")
- Each scenario teaches exactly one concept

### Immediate Feedback (Hattie's meta-analysis)
1. Instant visual signal (green/red within 200ms)
2. Brief explanation (1-2 sentences, 3-5 seconds)
3. "Learn more" expandable section
4. Comparison table: picked vs correct answer
- **Anti-pattern:** Never show only "Correct!" or "Wrong, answer was X" - explanation IS the learning moment

### Progressive Difficulty (Flow State)

| Level | Name | Content | Unlock |
|-------|------|---------|--------|
| 1 | Foundations | EXW vs DDP (extremes) | Start |
| 2 | FOB & Friends | FOB, FCA, FAS | Level 1 @ 70% |
| 3 | The C Terms | CFR, CIF, CPT, CIP | Level 2 @ 70% |
| 4 | DAP/DPU/DDP | Delivery terms | Level 3 @ 70% |
| 5 | Mixed Scenarios | Real-world cases | Level 4 @ 70% |
| 6 | Expert Challenge | Edge cases, 2020 changes | Level 5 @ 80% |
| Boss | Trade Simulator | Full negotiation | All @ 80% |

### Spaced Repetition (Leitner System)
- Box 1 (new/failed): Review every session
- Box 2: Every 2 sessions
- Box 3: Every 4 sessions
- Box 4: Every 8 sessions
- Box 5 (mastered): Every 16 sessions
- Correct = move up one box, Wrong = drop to Box 1

### Score/Streak System (Duolingo research)

| Mechanic | Purpose | Implementation |
|----------|---------|---------------|
| Points | Immediate reward | 10 base + 5 bonus first try |
| Streak | Daily engagement | Days in a row with 1+ level |
| Streak freeze | Prevent frustration | 1 free/week |
| Accuracy % | Mastery tracking | Per-level and overall |
| XP bar | Progress visualization | Points to level up |
| Achievements | Milestone celebration | Badges |

**Anti-patterns to avoid:**
- No "lives/hearts" that block progress (Duolingo's most criticized feature)
- No leaderboards for solo learning (creates anxiety)
- No negative points (discourages experimentation)

## 2. UI/UX Patterns

### Visual Progress
- Progress bar per level (horizontal, Tailwind utilities)
- Skill tree / level map (game overworld style)
- Mastery radar chart (Recharts spider chart for 11 Incoterms)

### Interactive Diagrams (Core to Incoterms teaching)
1. **Responsibility timeline**: Factory -> Export -> Loading -> Carriage -> Discharge -> Import -> Warehouse
2. **Drag-and-drop matching**: Drag Incoterm labels to correct position
3. **Cost comparison calculator**: Interactive sliders showing cost changes
4. **Click-to-reveal cards**: Flip card for full details

### Side-by-Side Comparison
- Critical for confusing pairs: FOB vs FCA, CIF vs CIP, DAP vs DPU
- `grid grid-cols-2 gap-4` with `bg-amber-50` for differences

### Animation Guidelines
**Animate:** Page transitions, correct/wrong feedback, card flips, progress fills, level unlock
**Don't animate:** Reading content, navigation menus, form inputs

### Mobile-First
- Min tap target: 44x44px (Apple HIG) / 48x48dp (Material)
- Min body text: 16px
- Bottom navigation bar (thumb-friendly)
- Side-by-side stacks vertical on mobile (`grid-cols-1 md:grid-cols-2`)

## 3. Successful Examples

### Duolingo
- **Adopt:** Bite-sized levels (5-10 min), mixed question types, streaks, mistake-based review
- **Avoid:** Hearts/lives, excessive animation noise, ads/upsell

### Brilliant.org
- **Adopt:** Interactive manipulation, "predict before reveal", visual-first explanations, step-by-step breakdowns

### Kahoot
- **Adopt:** Optional timed mode, colorful answer buttons, instant results
- **Avoid:** Mandatory time pressure, default sound

### Codecademy
- **Adopt:** Split-screen (scenario left, interaction right), progressive hints (3 levels), "learn by deciding"

## 4. Recommended Libraries

| Concern | Library | Bundle (gzipped) |
|---------|---------|-------------------|
| Animation | Framer Motion | ~13KB |
| Drag & Drop | @dnd-kit | ~8KB |
| Charts | Recharts | ~35KB (lazy) |
| Celebration | canvas-confetti | ~3KB |
| State | Zustand + persist | ~1KB |
| PWA | vite-plugin-pwa | Build-time only |

Core gameplay bundle: ~25KB (Recharts lazy-loaded on stats page only)

## 5. Data Architecture

### Question Types
| Type | Interaction |
|------|------------|
| multiple-choice | Click/tap option |
| multi-select | Check multiple boxes |
| drag-match | Drag and drop to categories |
| ordering | Drag to reorder |
| consequence | Multiple choice with story outcome |
| comparison | Identify true/false differences |
| fill-blank | Type or select from dropdown |

### Mastery Tracking Per Concept
- Track per-concept (not per-question) - multiple questions can test same concept
- Concept taxonomy: `exw-basics`, `fob-risk-transfer`, `fob-vs-fca`, etc.
- Enables spaced repetition targeting specific weak areas

## 6. v2 Enhancement Ideas

### Responsibility Timeline Diagram
Interactive horizontal diagram per Incoterm showing where cost and risk transfer along the supply chain.

### Drag-and-Drop Exercises
Using @dnd-kit for matching Incoterms to obligations, sorting by risk level.

### PWA for Offline Play
vite-plugin-pwa with CacheFirst strategy for level data. All gameplay works offline since state is localStorage.

### Dark Mode
Tailwind `class` strategy. Correct/incorrect colors must pass WCAG AA in both modes. Never rely on color alone - always include icons.
