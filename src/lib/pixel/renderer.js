import { colorizeKey } from './colorize.js'

/**
 * Render a sprite (2D array of color keys/hex) to an HTMLCanvasElement
 * @param {string[][]} spriteData - 2D array, rows × cols
 * @param {object} palette - maps template keys to hex colors
 * @param {number} zoom - integer pixel scale (default 2)
 * @returns {HTMLCanvasElement}
 */
export function renderSprite(spriteData, palette = {}, zoom = 2) {
  const rows = spriteData.length
  const cols = spriteData[0]?.length ?? 0
  const canvas = document.createElement('canvas')
  canvas.width = cols * zoom
  canvas.height = rows * zoom
  const ctx = canvas.getContext('2d')

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const key = spriteData[r][c]
      if (!key || key === '') continue
      const color = colorizeKey(key, palette)
      if (!color) continue
      ctx.fillStyle = color
      ctx.fillRect(c * zoom, r * zoom, zoom, zoom)
    }
  }
  return canvas
}
