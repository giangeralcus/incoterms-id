import { INCOTERMS } from './incoterms'

const GROUP_TERMS = {
  E: INCOTERMS.filter(t => t.group === 'E').map(t => t.code),
  F: INCOTERMS.filter(t => t.group === 'F').map(t => t.code),
  C: INCOTERMS.filter(t => t.group === 'C').map(t => t.code),
  D: INCOTERMS.filter(t => t.group === 'D').map(t => t.code),
}

function groupAccuracy(state, codes) {
  let totalCorrect = 0, totalAttempted = 0
  for (const code of codes) {
    const m = state.incotermsMastered[code]
    if (m) { totalCorrect += m.correct; totalAttempted += m.total }
  }
  return totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0
}

export const BADGES = [
  // Mastery (4)
  {
    id: 'group-e-master', name: 'E-Group Master',
    description: 'Master EXW (Departure)',
    icon: 'Factory',
    thresholds: { bronze: 50, silver: 75, gold: 90 },
    check: (state) => groupAccuracy(state, GROUP_TERMS.E),
  },
  {
    id: 'group-f-master', name: 'F-Group Master',
    description: 'Master FCA, FAS, FOB',
    icon: 'Ship',
    thresholds: { bronze: 50, silver: 75, gold: 90 },
    check: (state) => groupAccuracy(state, GROUP_TERMS.F),
  },
  {
    id: 'group-c-master', name: 'C-Group Master',
    description: 'Master CFR, CIF, CPT, CIP',
    icon: 'Globe',
    thresholds: { bronze: 50, silver: 75, gold: 90 },
    check: (state) => groupAccuracy(state, GROUP_TERMS.C),
  },
  {
    id: 'group-d-master', name: 'D-Group Master',
    description: 'Master DAP, DPU, DDP',
    icon: 'MapPin',
    thresholds: { bronze: 50, silver: 75, gold: 90 },
    check: (state) => groupAccuracy(state, GROUP_TERMS.D),
  },
  // Performance (4)
  {
    id: 'streak-hunter', name: 'Streak Hunter',
    description: 'Achieve consecutive correct answers',
    icon: 'Flame',
    thresholds: { bronze: 5, silver: 10, gold: 20 },
    check: (state) => state.bestStreak,
  },
  {
    id: 'sharpshooter', name: 'Sharpshooter',
    description: 'Maintain high overall accuracy',
    icon: 'Target',
    thresholds: { bronze: 70, silver: 85, gold: 95 },
    check: (state) => state.totalAttempted > 0
      ? Math.round((state.totalCorrect / state.totalAttempted) * 100) : 0,
  },
  {
    id: 'speed-demon', name: 'Speed Demon',
    description: 'Complete many scenarios',
    icon: 'Zap',
    thresholds: { bronze: 10, silver: 50, gold: 100 },
    check: (state) => state.scenariosCompleted.length,
  },
  {
    id: 'point-collector', name: 'Point Collector',
    description: 'Accumulate XP points',
    icon: 'Coins',
    thresholds: { bronze: 500, silver: 2000, gold: 5000 },
    check: (state) => state.score,
  },
  // Special (2)
  {
    id: 'perfect-run', name: 'Perfect Run',
    description: 'Complete scenarios with zero mistakes',
    icon: 'CheckCircle',
    thresholds: { bronze: 3, silver: 5, gold: 10 },
    check: (state) => state.perfectScenarios || 0,
  },
  {
    id: 'globe-trotter', name: 'Globe Trotter',
    description: 'Try unique scenarios',
    icon: 'Globe2',
    thresholds: { bronze: 5, silver: 15, gold: 26 },
    check: (state) => state.scenariosCompleted.length,
  },
]

export function getBadgeTier(badge, state) {
  const value = badge.check(state)
  if (value >= badge.thresholds.gold) return 'gold'
  if (value >= badge.thresholds.silver) return 'silver'
  if (value >= badge.thresholds.bronze) return 'bronze'
  return null
}

export function computeAllBadges(state) {
  return BADGES.map(badge => ({
    ...badge,
    tier: getBadgeTier(badge, state),
    value: badge.check(state),
  }))
}
