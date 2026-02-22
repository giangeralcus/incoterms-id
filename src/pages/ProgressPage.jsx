import { motion } from 'framer-motion'
import { Trophy, Target, Flame, RotateCcw, CheckCircle2, XCircle } from 'lucide-react'
import useGameStore from '../stores/gameStore'
import { INCOTERMS } from '../data/incoterms'
import { SCENARIOS } from '../data/scenarios'

export default function ProgressPage() {
  const {
    score, streak, bestStreak, totalCorrect, totalAttempted,
    scenariosCompleted, incotermsMastered, resetProgress,
  } = useGameStore()

  const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0

  const handleReset = () => {
    if (window.confirm('Reset all progress? This cannot be undone.')) {
      resetProgress()
    }
  }

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My Progress</h1>
        <button
          onClick={handleReset}
          className="text-xs text-gray-400 hover:text-danger flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl p-4 shadow-sm border text-center">
          <Trophy className="w-6 h-6 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{score}</div>
          <div className="text-xs text-gray-500">Total Points</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-xl p-4 shadow-sm border text-center">
          <Target className="w-6 h-6 text-secondary mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{accuracy}%</div>
          <div className="text-xs text-gray-500">Accuracy</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-xl p-4 shadow-sm border text-center">
          <Flame className="w-6 h-6 text-cargo mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{bestStreak}</div>
          <div className="text-xs text-gray-500">Best Streak</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-xl p-4 shadow-sm border text-center">
          <CheckCircle2 className="w-6 h-6 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{scenariosCompleted.length}/{SCENARIOS.length}</div>
          <div className="text-xs text-gray-500">Scenarios</div>
        </motion.div>
      </div>

      {/* Incoterm Mastery */}
      <div className="bg-white rounded-xl p-5 shadow-sm border">
        <h3 className="font-semibold text-gray-900 mb-4">Incoterm Mastery</h3>
        <div className="space-y-3">
          {INCOTERMS.map(term => {
            const mastery = incotermsMastered[term.code]
            const pct = mastery ? Math.round((mastery.correct / mastery.total) * 100) : 0
            const attempts = mastery ? mastery.total : 0

            return (
              <div key={term.code} className="flex items-center gap-3">
                <span className="text-lg w-8">{term.emoji}</span>
                <span className="font-mono font-bold text-sm w-10 text-primary">{term.code}</span>
                <div className="flex-1">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      className={`h-full rounded-full ${
                        pct >= 80 ? 'bg-secondary' :
                        pct >= 50 ? 'bg-accent' :
                        pct > 0 ? 'bg-danger' :
                        'bg-gray-200'
                      }`}
                    />
                  </div>
                </div>
                <span className="text-xs text-gray-500 w-16 text-right">
                  {attempts > 0 ? `${pct}% (${attempts})` : 'Not tried'}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Stats Breakdown */}
      <div className="bg-white rounded-xl p-5 shadow-sm border">
        <h3 className="font-semibold text-gray-900 mb-3">Session Stats</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Correct answers:</span>
            <span className="font-medium text-secondary">{totalCorrect}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Wrong answers:</span>
            <span className="font-medium text-danger">{totalAttempted - totalCorrect}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Total attempts:</span>
            <span className="font-medium">{totalAttempted}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Current streak:</span>
            <span className="font-medium text-accent">{streak}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
