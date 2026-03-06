import { motion } from 'framer-motion'
import {
  Factory, Ship, Globe, MapPin, Flame, Target, Zap, Coins,
  CheckCircle, Globe2, Lock, Award,
} from 'lucide-react'
import useLanguageStore from '../../stores/languageStore'
import { t } from '../../i18n/translations'

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
const TIER_LABEL = {
  bronze: { id: 'Perunggu', en: 'Bronze' },
  silver: { id: 'Perak', en: 'Silver' },
  gold: { id: 'Emas', en: 'Gold' },
}

export default function BadgeCard({ badge }) {
  const { lang } = useLanguageStore()
  const { name, description, icon, tier, value, thresholds } = badge
  const Icon = BADGE_ICONS[icon] || Award
  const locked = !tier

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`rounded-xl p-3 text-center ${
        locked ? 'bg-[rgba(245,245,247,0.5)] opacity-60' : `glass-card ${TIER_BG[tier]}`
      } ${!locked ? `ring-2 ${TIER_RING[tier]}` : ''}`}
    >
      <div className="flex justify-center mb-2">
        {locked ? (
          <Lock className="w-8 h-8 text-gray-400" />
        ) : (
          <Icon className="w-8 h-8" style={{ color: tier === 'gold' ? '#FFD700' : tier === 'silver' ? '#A0A0A0' : '#CD7F32' }} />
        )}
      </div>
      <p className="font-display text-xs font-semibold truncate">{t(name, lang)}</p>
      {!locked && <p className="text-[10px] text-[#6e6e73]">{t(TIER_LABEL[tier], lang)}</p>}
      <p className="text-[10px] text-[#8e8e93] mt-1">{t(description, lang)}</p>
      <div className="text-[10px] text-[#8e8e93] mt-1">
        {value} / {thresholds[tier || 'bronze']}
      </div>
    </motion.div>
  )
}
