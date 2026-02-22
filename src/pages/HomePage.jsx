import { Link } from 'react-router-dom'
import { BookOpen, Gamepad2, Calculator, BarChart3, Ship } from 'lucide-react'
import { motion } from 'framer-motion'
import useGameStore from '../stores/gameStore'
import { INCOTERMS } from '../data/incoterms'

const features = [
  {
    to: '/learn',
    icon: BookOpen,
    title: 'Learn Incoterms',
    description: 'Master all 11 Incoterms 2020 rules with visual guides',
    color: 'bg-primary/10 text-primary',
  },
  {
    to: '/scenario',
    icon: Gamepad2,
    title: 'Play Scenarios',
    description: 'Pick the right Incoterm for real Indonesian shipping scenarios',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    to: '/cost-simulator',
    icon: Calculator,
    title: 'Cost Simulator',
    description: 'Compare total costs under different Incoterms',
    color: 'bg-accent/10 text-accent',
  },
  {
    to: '/progress',
    icon: BarChart3,
    title: 'My Progress',
    description: 'Track your mastery level and learning streak',
    color: 'bg-port/10 text-port',
  },
]

export default function HomePage() {
  const { score, totalCorrect, totalAttempted, scenariosCompleted } = useGameStore()
  const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0

  return (
    <div className="space-y-8 py-4">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3"
      >
        <div className="inline-flex items-center gap-2 bg-ocean/10 text-ocean px-4 py-2 rounded-full text-sm font-medium">
          <Ship className="w-4 h-4" />
          Indonesian Freight Forwarding
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Belajar Ekspor Impor
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Master Incoterms 2020 through interactive scenarios based on real Indonesian trade routes.
          Learn by doing, not just reading.
        </p>
      </motion.div>

      {/* Quick Stats */}
      {totalAttempted > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-3"
        >
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
            <div className="text-2xl font-bold text-primary">{score}</div>
            <div className="text-xs text-gray-500">Points</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
            <div className="text-2xl font-bold text-secondary">{accuracy}%</div>
            <div className="text-xs text-gray-500">Accuracy</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
            <div className="text-2xl font-bold text-port">{scenariosCompleted.length}/{INCOTERMS.length * 2}</div>
            <div className="text-xs text-gray-500">Scenarios</div>
          </div>
        </motion.div>
      )}

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        {features.map((feat, i) => (
          <motion.div
            key={feat.to}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <Link
              to={feat.to}
              className="block bg-white rounded-xl p-5 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className={`w-10 h-10 rounded-lg ${feat.color} flex items-center justify-center mb-3`}>
                <feat.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{feat.title}</h3>
              <p className="text-sm text-gray-500">{feat.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Incoterms Quick Reference */}
      <div className="bg-white rounded-xl p-5 shadow-sm border">
        <h3 className="font-semibold text-gray-900 mb-3">11 Incoterms 2020 at a Glance</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {INCOTERMS.map(term => (
            <Link
              key={term.code}
              to={`/learn/${term.code}`}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg">{term.emoji}</span>
              <div>
                <div className="font-mono font-bold text-sm text-primary">{term.code}</div>
                <div className="text-[11px] text-gray-400">{term.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
