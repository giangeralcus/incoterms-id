// src/components/ShipRouteMap.jsx
// Animated trade route visualization — ship/plane follows curved ocean path
import { useState } from 'react'
import { motion } from 'framer-motion'

const FLAGS = {
  Indonesia: '🇮🇩', Netherlands: '🇳🇱', USA: '🇺🇸', Germany: '🇩🇪',
  Japan: '🇯🇵', China: '🇨🇳', Singapore: '🇸🇬', Australia: '🇦🇺',
  UAE: '🇦🇪', 'United Arab Emirates': '🇦🇪', UK: '🇬🇧', 'United Kingdom': '🇬🇧',
  Belgium: '🇧🇪', Malaysia: '🇲🇾', Thailand: '🇹🇭', Vietnam: '🇻🇳',
  India: '🇮🇳', Bangladesh: '🇧🇩', 'Sri Lanka': '🇱🇰', France: '🇫🇷',
  Italy: '🇮🇹', 'South Korea': '🇰🇷', Korea: '🇰🇷', Taiwan: '🇹🇼',
  Philippines: '🇵🇭', Brazil: '🇧🇷', Canada: '🇨🇦', Mexico: '🇲🇽',
  'Saudi Arabia': '🇸🇦', Turkey: '🇹🇷', Egypt: '🇪🇬', 'South Africa': '🇿🇦',
}

// SVG canvas dimensions
const W = 400
const H = 110

// Path from left port (x=48, y=72) to right port (x=352, y=72)
// Arc peaks at 22% height for sea, 30% for air
const SEA_PATH = `M 48,72 Q 200,18 352,72`
const AIR_PATH = `M 48,72 Q 200,8 352,72`

export default function ShipRouteMap({ origin, destination, transport = 'SEA', lang, className = '' }) {
  const [animKey, setAnimKey] = useState(0)
  const [hasPlayed, setHasPlayed] = useState(false)

  const originFlag = FLAGS[origin?.country] ?? '📦'
  const destFlag = FLAGS[destination?.country] ?? '📦'
  const isAir = transport === 'AIR'
  const vehicle = isAir ? '✈️' : '🚢'
  const pathD = isAir ? AIR_PATH : SEA_PATH

  function replay() {
    setAnimKey(k => k + 1)
    setHasPlayed(false)
  }

  return (
    <div className={`rounded-xl overflow-hidden border border-blue-200 ${className}`}
      style={{ background: 'linear-gradient(to bottom, #e0f2fe 0%, #bae6fd 60%, #7dd3fc 100%)' }}
    >
      {/* Ocean scene */}
      <div className="relative select-none">
        <svg
          width="100%"
          height={H}
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Decorative clouds */}
          <ellipse cx="120" cy="22" rx="28" ry="10" fill="white" opacity="0.5" />
          <ellipse cx="108" cy="26" rx="18" ry="9" fill="white" opacity="0.5" />
          <ellipse cx="280" cy="18" rx="22" ry="8" fill="white" opacity="0.5" />
          <ellipse cx="270" cy="22" rx="14" ry="7" fill="white" opacity="0.5" />

          {/* Ocean waves */}
          <path d={`M 0,${H - 16} Q 50,${H - 22} 100,${H - 16} Q 150,${H - 10} 200,${H - 16} Q 250,${H - 22} 300,${H - 16} Q 350,${H - 10} 400,${H - 16} L 400,${H} L 0,${H} Z`}
            fill="rgba(56, 189, 248, 0.4)" />
          <path d={`M 0,${H - 8} Q 40,${H - 14} 80,${H - 8} Q 120,${H - 2} 160,${H - 8} Q 200,${H - 14} 240,${H - 8} Q 280,${H - 2} 320,${H - 8} Q 360,${H - 14} 400,${H - 8} L 400,${H} L 0,${H} Z`}
            fill="rgba(14, 165, 233, 0.3)" />

          {/* Dashed route line */}
          <path
            d={pathD}
            fill="none"
            stroke="rgba(99,102,241,0.45)"
            strokeWidth="1.8"
            strokeDasharray="7,5"
          />

          {/* Animated vehicle following motion path */}
          <motion.g
            key={animKey}
            style={{
              offsetPath: `path("${pathD}")`,
              offsetDistance: '0%',
              offsetRotate: isAir ? 'auto' : '0deg',
            }}
            animate={{ offsetDistance: ['0%', '100%'] }}
            transition={{ duration: 3.2, ease: 'easeInOut', delay: 0.3 }}
            onAnimationComplete={() => setHasPlayed(true)}
          >
            <text
              x="-12" y="12"
              fontSize="22"
              style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.2))' }}
            >
              {vehicle}
            </text>
          </motion.g>

          {/* Origin port dot */}
          <circle cx="48" cy="72" r="7" fill="#ea580c" opacity="0.9" />
          <circle cx="48" cy="72" r="11" fill="#ea580c" opacity="0.2" />

          {/* Destination port dot */}
          <circle cx="352" cy="72" r="7" fill="#1e40af" opacity="0.9" />
          <circle cx="352" cy="72" r="11" fill="#1e40af" opacity="0.2" />

          {/* Origin flag */}
          <text x="48" y="52" textAnchor="middle" fontSize="16">{originFlag}</text>

          {/* Destination flag */}
          <text x="352" y="52" textAnchor="middle" fontSize="16">{destFlag}</text>
        </svg>

        {/* Replay button — bottom right of SVG area */}
        {hasPlayed && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={replay}
            className="absolute top-1.5 right-2 text-xs text-blue-600 bg-white/70 hover:bg-white/90 px-2 py-0.5 rounded-full backdrop-blur-sm transition-colors"
          >
            ↺
          </motion.button>
        )}
      </div>

      {/* Port labels */}
      <div className="flex justify-between items-start px-3 py-2 bg-white/50 text-xs">
        <div className="text-left max-w-[45%]">
          <div className="font-semibold text-cargo truncate">{origin?.port}</div>
          <div className="text-gray-500 truncate">{origin?.country}</div>
        </div>
        <div className="text-gray-400 text-center px-1 pt-0.5">
          {isAir ? '✈ air' : '⛵ sea'}
        </div>
        <div className="text-right max-w-[45%]">
          <div className="font-semibold text-primary truncate">{destination?.port}</div>
          <div className="text-gray-500 truncate">{destination?.country}</div>
        </div>
      </div>
    </div>
  )
}
