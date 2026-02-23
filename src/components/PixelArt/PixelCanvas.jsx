import { useEffect, useRef } from 'react'
import { getCachedCanvas } from '../../lib/pixel/index.js'
import { PALETTES } from '../../lib/pixel/colorize.js'

/**
 * PixelCanvas - renders a single sprite frame to canvas
 * @param {string[][]} spriteData - the sprite 2D array
 * @param {string} paletteName - key into PALETTES object
 * @param {number} zoom - pixel scale (default 2)
 * @param {boolean} flipX - mirror horizontally (for left-facing)
 * @param {string} className - CSS classes
 */
export default function PixelCanvas({ spriteData, paletteName = 'eksportir', zoom = 2, flipX = false, className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current || !spriteData) return
    const palette = PALETTES[paletteName] ?? {}
    const cached = getCachedCanvas(spriteData, palette, paletteName, zoom)
    const canvas = canvasRef.current
    canvas.width = cached.width
    canvas.height = cached.height
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(cached, 0, 0)
  }, [spriteData, paletteName, zoom, flipX])

  return (
    <canvas
      ref={canvasRef}
      style={{
        imageRendering: 'pixelated',
        transform: flipX ? 'scaleX(-1)' : undefined,
      }}
      className={className}
    />
  )
}
