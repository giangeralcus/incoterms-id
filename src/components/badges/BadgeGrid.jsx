import BadgeCard from './BadgeCard'
import useLanguageStore from '../../stores/languageStore'
import { t } from '../../i18n/translations'

export default function BadgeGrid({ badges }) {
  const { lang } = useLanguageStore()
  const earned = badges.filter(b => b.tier)
  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display text-lg font-semibold text-[#1d1d1f]">{t({ id: 'Lencana', en: 'Badges' }, lang)}</h3>
        <span className="text-sm text-[#6e6e73]">
          {earned.length} / {badges.length} {t({ id: 'terbuka', en: 'earned' }, lang)}
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
        {badges.map(badge => (
          <BadgeCard key={badge.id} badge={badge} />
        ))}
      </div>
    </div>
  )
}
