import { motion } from 'framer-motion'
import {
  Factory, Ship, Globe, MapPin, Flame, Target, Zap, Coins,
  CheckCircle, Globe2, Lock, Award,
} from 'lucide-react'

const BADGE_ICONS = { Factory, Ship, Globe, MapPin, Flame, Target, Zap, Coins, CheckCircle, Globe2, Award }

const TIER_RING = {
  bronze: 'ring-amber-600',
  silver: 'ring-gray-400',
  gold: 'ring-yellow-400',
}
const TIER_BG = {
  bronze: 'bg-amber-50',
  silver: 'bg-gray-50',
  gold: 'bg-yellow-50',
}
const TIER_LABEL = { bronze: 'Bronze', silver: 'Silver', gold: 'Gold' }

export default function BadgeCard({ badge }) {
  const { name, description, icon, tier, value, thresholds } = badge
  const Icon = BADGE_ICONS[icon] || Award
  const locked = !tier

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`rounded-xl p-3 text-center ${
        locked ? 'bg-gray-100 opacity-50' : TIER_BG[tier]
      } ${!locked ? `ring-2 ${TIER_RING[tier]}` : ''}`}
    >
      <div className="flex justify-center mb-2">
        {locked ? (
          <Lock className="w-8 h-8 text-gray-400" />
        ) : (
          <Icon className="w-8 h-8" style={{ color: tier === 'gold' ? '#FFD700' : tier === 'silver' ? '#A0A0A0' : '#CD7F32' }} />
        )}
      </div>
      <p className="text-xs font-semibold truncate">{name}</p>
      {!locked && <p className="text-[10px] text-gray-500">{TIER_LABEL[tier]}</p>}
      <p className="text-[10px] text-gray-400 mt-1">{description}</p>
      <div className="text-[10px] text-gray-400 mt-1">
        {value} / {thresholds[tier || 'bronze']}
      </div>
    </motion.div>
  )
}
