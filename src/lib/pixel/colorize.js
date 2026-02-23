/**
 * Colorize a template key using a palette
 * Template keys: K=skin, H=hair, S=shirt, P=pants, O=shoes
 * Returns hex color or original value if not a template key
 */
export function colorizeKey(key, palette) {
  if (!key || key === '') return null
  if (palette && palette[key]) return palette[key]
  return key // already a hex color like '#FF0000'
}

/**
 * Default palettes for characters
 * Each palette maps template keys to hex colors
 */
export const PALETTES = {
  eksportir: { K: '#FDBCB4', H: '#2C1810', S: '#1565C0', P: '#37474F', O: '#212121' },
  importir:  { K: '#FDBCB4', H: '#1A237E', S: '#2E7D32', P: '#4E342E', O: '#212121' },
  agent:     { K: '#FFCC80', H: '#3E2723', S: '#E65100', P: '#263238', O: '#212121' },
  customs:   { K: '#FFCC80', H: '#212121', S: '#0D47A1', P: '#0D47A1', O: '#212121' },
  trader:    { K: '#FDBCB4', H: '#8D6E63', S: '#F5F5F5', P: '#607D8B', O: '#212121' },
}
