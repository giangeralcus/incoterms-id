import BadgeCard from './BadgeCard'
import useLanguageStore from '../../stores/languageStore'
import { t } from '../../i18n/translations'

export default function BadgeGrid({ badges }) {
  const { lang } = useLanguageStore()
  const earned = badges.filter(b => b.tier)
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold">{t({ id: 'Lencana', en: 'Badges' }, lang)}</h3>
        <span className="text-sm text-gray-500">
          {earned.length} / {badges.length} {t({ id: 'terbuka', en: 'earned' }, lang)}
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {badges.map(badge => (
          <BadgeCard key={badge.id} badge={badge} />
        ))}
      </div>
    </div>
  )
}
