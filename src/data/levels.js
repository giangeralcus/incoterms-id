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
  return LEVELS[current.level]
}

export function getLevelProgress(xp) {
  const current = getLevel(xp)
  const next = getNextLevel(xp)
  if (!next) return 100
  const range = next.xpRequired - current.xpRequired
  const progress = xp - current.xpRequired
  return Math.round((progress / range) * 100)
}
