import { renderSprite } from './renderer.js'

// Cache: spriteData reference + palette key + zoom → canvas
const cache = new Map()

function makeCacheKey(spriteData, paletteKey, zoom) {
  // Use the array reference identity + palette key + zoom
  return `${JSON.stringify(spriteData[0])}_${JSON.stringify(spriteData[spriteData.length - 1])}_${paletteKey}_${zoom}`
}

/**
 * Get or create a cached canvas for a sprite
 */
export function getCachedCanvas(spriteData, palette, paletteKey, zoom = 2) {
  const key = makeCacheKey(spriteData, paletteKey, zoom)
  if (cache.has(key)) return cache.get(key)
  const canvas = renderSprite(spriteData, palette, zoom)
  cache.set(key, canvas)
  return canvas
}

export function clearCache() {
  cache.clear()
}
