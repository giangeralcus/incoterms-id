import BadgeCard from './BadgeCard'

export default function BadgeGrid({ badges }) {
  const earned = badges.filter(b => b.tier)
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold">Badges</h3>
        <span className="text-sm text-gray-500">
          {earned.length} / {badges.length} earned
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
