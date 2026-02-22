# Incoterms Learning Game - Design Document

> Date: 2026-02-22
> Status: Approved
> Author: Gian + Claude Code

## Overview

Interactive web-based simulator for learning Incoterms 2020 rules through realistic Indonesian export/import shipping scenarios.

## Core Concept: Scenario Simulator

Instead of passive reading, users learn by making decisions:
1. Read a shipping scenario (real Indonesian trade routes)
2. Pick the best Incoterm
3. Get immediate feedback with explanation
4. See cost/risk implications

## Architecture

### Tech Stack
- React 19 + Vite (fast dev, familiar)
- Tailwind CSS v4 (styling)
- Zustand (game state, persisted to localStorage)
- Framer Motion (animations)
- Canvas Confetti (celebrations)
- Vercel (deployment)

### Pages
| Route | Page | Purpose |
|-------|------|---------|
| `/` | HomePage | Dashboard, quick stats, feature links |
| `/learn` | LearnPage | Browse all 11 Incoterms with details |
| `/learn/:code` | IncotermDetail | Deep dive into one Incoterm |
| `/scenario` | ScenarioPage | The main game - pick Incoterm for scenarios |
| `/cost-simulator` | CostSimulator | Compare costs across Incoterms |
| `/progress` | ProgressPage | Track mastery, scores, streaks |

### Data Architecture (v1 - Static JSON)
- `incoterms.js` - All 11 Incoterms with obligations, risk/cost transfer, tips
- `scenarios.js` - 10+ shipping scenarios with correct answers and explanations
- No backend needed - all data is static, progress in localStorage

### Game Mechanics
- Score: 10 base + 2x streak bonus per correct answer
- Streak: Consecutive correct answers
- Difficulty: Beginner / Intermediate / Advanced
- Hints: 3 per scenario, can reveal progressively
- Mastery: Track accuracy per Incoterm
- Confetti: Celebration on correct answers

## Indonesian Context
- Real ports: Tanjung Priok, Tanjung Perak, Belawan, Batam FTZ
- Real commodities: Palm oil, furniture, coffee, textiles, electronics
- Real regulations: LARTAS, BPOM, customs procedures
- Real costs: THC, doc fees, B/L fees based on Indonesian market rates

## Future (v2+)
- More scenarios (20+)
- Visual responsibility map (drag-and-drop)
- Multiplayer quiz mode
- PWA for offline play
- Mobile app (React Native)
- Supabase backend for leaderboards
