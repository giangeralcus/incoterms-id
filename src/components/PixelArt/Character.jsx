import { useState, useEffect } from 'react'
import PixelCanvas from './PixelCanvas.jsx'

/**
 * Character - animated pixel art character
 * @param {object} sprites - { idle: SpriteData, walk: SpriteData[], celebrate: SpriteData[] }
 * @param {string} paletteName - which palette to use
 * @param {string} state - 'idle' | 'walk' | 'celebrate'
 * @param {boolean} flipX - face left
 * @param {number} zoom - pixel scale
 * @param {number} frameInterval - ms between animation frames (default 200)
 * @param {string} className
 */
export default function Character({
  sprites,
  paletteName = 'eksportir',
  state = 'idle',
  flipX = false,
  zoom = 2,
  frameInterval = 200,
  className = '',
}) {
  const [frameIndex, setFrameIndex] = useState(0)

  useEffect(() => {
    const frames = state === 'idle' ? null : sprites[state]
    if (!frames || frames.length <= 1) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFrameIndex(0)
      return
    }
    const interval = setInterval(() => {
      setFrameIndex(prev => (prev + 1) % frames.length)
    }, frameInterval)
    return () => clearInterval(interval)
  }, [state, sprites, frameInterval])

  const currentSprite = (() => {
    if (state === 'idle') return sprites.idle
    const frames = sprites[state]
    if (!frames || frames.length === 0) return sprites.idle
    return frames[frameIndex] ?? sprites.idle
  })()

  if (!currentSprite) return null

  return (
    <PixelCanvas
      spriteData={currentSprite}
      paletteName={paletteName}
      zoom={zoom}
      flipX={flipX}
      className={className}
    />
  )
}
