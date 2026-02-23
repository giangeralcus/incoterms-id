// src/components/SceneIllustration.jsx
// Animated game scene illustration for each scenario
// Shows warehouse → truck → ship/plane → destination based on scenario context
import { motion } from 'framer-motion'

// Animated floating element
function Float({ children, delay = 0, range = 6 }) {
  return (
    <motion.g
      animate={{ y: [0, -range, 0] }}
      transition={{ duration: 2.8 + delay * 0.4, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.g>
  )
}

// Export scene: warehouse on left, cargo in middle, ship on right
function ExportScene() {
  return (
    <svg width="100%" height="80" viewBox="0 0 360 80" preserveAspectRatio="xMidYMid meet" className="block">
      {/* Sky */}
      <rect width="360" height="80" fill="#f0f9ff" rx="8" />

      {/* Ground line */}
      <rect x="0" y="62" width="360" height="18" rx="0" fill="#e2e8f0" />

      {/* Factory/warehouse */}
      <rect x="18" y="30" width="60" height="34" fill="#94a3b8" rx="3" />
      <rect x="14" y="24" width="68" height="12" fill="#64748b" rx="3" />
      {/* Door */}
      <rect x="36" y="48" width="14" height="16" fill="#475569" rx="1" />
      {/* Windows */}
      <rect x="22" y="34" width="10" height="8" fill="#bae6fd" rx="1" />
      <rect x="68" y="34" width="10" height="8" fill="#bae6fd" rx="1" />
      {/* Chimney */}
      <rect x="64" y="12" width="8" height="16" fill="#94a3b8" />
      {/* Smoke */}
      <Float delay={0} range={4}>
        <ellipse cx="68" cy="10" rx="7" ry="5" fill="white" opacity="0.7" />
        <ellipse cx="74" cy="6" rx="5" ry="4" fill="white" opacity="0.5" />
      </Float>

      {/* Truck */}
      <Float delay={0.5} range={3}>
        <rect x="132" y="44" width="52" height="20" fill="#f97316" rx="3" />
        <rect x="162" y="36" width="26" height="12" fill="#fb923c" rx="2" />
        {/* Wheels */}
        <circle cx="144" cy="64" r="7" fill="#374151" />
        <circle cx="144" cy="64" r="4" fill="#6b7280" />
        <circle cx="170" cy="64" r="7" fill="#374151" />
        <circle cx="170" cy="64" r="4" fill="#6b7280" />
        {/* Cargo box on truck */}
        <rect x="134" y="36" width="26" height="10" fill="#fbbf24" rx="1" />
        <text x="147" y="44" textAnchor="middle" fontSize="7" fill="#92400e">📦</text>
      </Float>

      {/* Arrows */}
      <path d="M 84 54 L 128 54" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arr)" />
      <path d="M 190 54 L 236 54" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arr)" />

      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
        </marker>
      </defs>

      {/* Ship */}
      <Float delay={1} range={5}>
        {/* Hull */}
        <path d="M 244 56 L 246 50 L 308 50 L 316 56 L 310 60 L 250 60 Z" fill="#1e40af" />
        {/* Superstructure */}
        <rect x="260" y="40" width="32" height="12" fill="#3b82f6" rx="2" />
        {/* Bridge */}
        <rect x="272" y="34" width="16" height="8" fill="#60a5fa" rx="1" />
        {/* Containers on deck */}
        <rect x="248" y="43" width="10" height="8" fill="#ea580c" rx="1" />
        <rect x="260" y="43" width="10" height="8" fill="#f97316" rx="1" />
        {/* Funnel */}
        <rect x="285" y="30" width="6" height="10" fill="#1d4ed8" />
        {/* Flag */}
        <text x="310" y="48" fontSize="10">🇮🇩</text>
      </Float>

      {/* Water */}
      <path d="M 236 60 Q 268 64 300 60 Q 332 56 360 60 L 360 80 L 236 80 Z" fill="#bae6fd" opacity="0.6" />
    </svg>
  )
}

// Import scene: ship on left, customs in middle, warehouse/store on right
function ImportScene() {
  return (
    <svg width="100%" height="80" viewBox="0 0 360 80" preserveAspectRatio="xMidYMid meet" className="block">
      {/* Sky */}
      <rect width="360" height="80" fill="#f0fdf4" rx="8" />
      {/* Ground */}
      <rect x="0" y="62" width="360" height="18" fill="#e2e8f0" />

      {/* Ship arriving */}
      <Float delay={0} range={4}>
        <path d="M 12 56 L 14 50 L 76 50 L 84 56 L 78 60 L 18 60 Z" fill="#1e40af" />
        <rect x="28" y="40" width="32" height="12" fill="#3b82f6" rx="2" />
        <rect x="40" y="34" width="16" height="8" fill="#60a5fa" rx="1" />
        <rect x="16" y="43" width="10" height="8" fill="#7c3aed" rx="1" />
        <rect x="28" y="43" width="10" height="8" fill="#8b5cf6" rx="1" />
        <text x="78" y="48" fontSize="10">🌏</text>
      </Float>

      {/* Water */}
      <path d="M 0 60 Q 32 64 64 60 Q 96 56 128 60 L 128 80 L 0 80 Z" fill="#bae6fd" opacity="0.6" />

      {/* Arrows */}
      <path d="M 88 54 L 128 54" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arr2)" />
      <path d="M 222 54 L 262 54" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arr2)" />

      <defs>
        <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
        </marker>
      </defs>

      {/* Customs building */}
      <Float delay={0.3} range={2}>
        <rect x="132" y="28" width="88" height="36" fill="#f1f5f9" rx="4" />
        <rect x="128" y="22" width="96" height="10" fill="#e2e8f0" rx="2" />
        {/* Customs sign */}
        <text x="176" y="42" textAnchor="middle" fontSize="8" fill="#64748b" fontWeight="bold">CUSTOMS</text>
        <text x="176" y="54" textAnchor="middle" fontSize="14">🏛️</text>
        {/* Flag on customs */}
        <text x="222" y="22" fontSize="10">🇮🇩</text>
      </Float>

      {/* Warehouse/store */}
      <Float delay={0.8} range={3}>
        <rect x="268" y="28" width="70" height="36" fill="#a3e635" rx="3" />
        <rect x="264" y="22" width="78" height="10" fill="#84cc16" rx="3" />
        {/* Store sign */}
        <text x="303" y="42" textAnchor="middle" fontSize="8" fill="#365314" fontWeight="bold">STORE</text>
        <text x="303" y="56" textAnchor="middle" fontSize="14">🏪</text>
      </Float>
    </svg>
  )
}

export default function SceneIllustration({ scenario }) {
  if (!scenario) return null
  return (
    <div className="rounded-lg overflow-hidden mt-3">
      {scenario.type === 'export'
        ? <ExportScene commodity={scenario.commodity} />
        : <ImportScene commodity={scenario.commodity} />
      }
    </div>
  )
}
