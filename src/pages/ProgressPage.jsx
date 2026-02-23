import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Target, Flame, RotateCcw, CheckCircle2, XCircle, Globe, Send } from 'lucide-react'
import useGameStore from '../stores/gameStore'
import { INCOTERMS } from '../data/incoterms'
import { SCENARIOS } from '../data/scenarios'
import useLanguageStore from '../stores/languageStore'
import { translations as T, t } from '../i18n/translations'
import { supabase } from '../lib/supabase'
import { useLeaderboard } from '../hooks/useLeaderboard'

export default function ProgressPage() {
  const {
    score, streak, bestStreak, totalCorrect, totalAttempted,
    scenariosCompleted, incotermsMastered, resetProgress,
  } = useGameStore()
  const { lang } = useLanguageStore()
  const { scores, loading: lbLoading, submitting, submitted, error: lbError, submitScore } = useLeaderboard()
  const [username, setUsername] = useState('')

  const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0
  const canSubmit = totalAttempted > 0 && !submitted

  const handleReset = () => {
    if (window.confirm(t(T.progress.resetConfirm, lang))) {
      resetProgress()
    }
  }

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">{t(T.progress.title, lang)}</h1>
        <button
          onClick={handleReset}
          className="text-xs text-gray-400 hover:text-danger flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" /> {t(T.common.reset, lang)}
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl p-4 shadow-sm border text-center">
          <Trophy className="w-6 h-6 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{score}</div>
          <div className="text-xs text-gray-500">{t(T.progress.totalPoints, lang)}</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-xl p-4 shadow-sm border text-center">
          <Target className="w-6 h-6 text-secondary mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{accuracy}%</div>
          <div className="text-xs text-gray-500">{t(T.progress.accuracy, lang)}</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-xl p-4 shadow-sm border text-center">
          <Flame className="w-6 h-6 text-cargo mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{bestStreak}</div>
          <div className="text-xs text-gray-500">{t(T.progress.bestStreak, lang)}</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-xl p-4 shadow-sm border text-center">
          <CheckCircle2 className="w-6 h-6 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{scenariosCompleted.length}/{SCENARIOS.length}</div>
          <div className="text-xs text-gray-500">{t(T.progress.scenarios, lang)}</div>
        </motion.div>
      </div>

      {/* Incoterm Mastery */}
      <div className="bg-white rounded-xl p-5 shadow-sm border">
        <h3 className="font-semibold text-gray-900 mb-4">{t(T.progress.incotermMastery, lang)}</h3>
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
                  {attempts > 0 ? `${pct}% (${attempts})` : t(T.progress.notTried, lang)}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Stats Breakdown */}
      <div className="bg-white rounded-xl p-5 shadow-sm border">
        <h3 className="font-semibold text-gray-900 mb-3">{t(T.progress.sessionStats, lang)}</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">{t(T.progress.correctAnswers, lang)}</span>
            <span className="font-medium text-secondary">{totalCorrect}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">{t(T.progress.wrongAnswers, lang)}</span>
            <span className="font-medium text-danger">{totalAttempted - totalCorrect}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">{t(T.progress.totalAttempts, lang)}</span>
            <span className="font-medium">{totalAttempted}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">{t(T.progress.currentStreak, lang)}</span>
            <span className="font-medium text-accent">{streak}</span>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      {supabase ? (
        <div className="bg-white rounded-xl p-5 shadow-sm border space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-gray-900">{t(T.progress.leaderboard.title, lang)}</h3>
            <span className="text-xs text-gray-400 ml-auto">{t(T.progress.leaderboard.subtitle, lang)}</span>
          </div>

          {/* Submit form */}
          {canSubmit && (
            <div className="bg-primary/5 rounded-lg p-3 space-y-2">
              <p className="text-xs font-medium text-primary">{t(T.progress.leaderboard.submitTitle, lang)}</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value.slice(0, 20))}
                  placeholder={t(T.progress.leaderboard.usernamePlaceholder, lang)}
                  maxLength={20}
                  className="flex-1 text-sm border rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <button
                  onClick={() => submitScore({ username, score, accuracy, scenariosCompleted: scenariosCompleted.length })}
                  disabled={submitting || username.trim().length < 2}
                  className="flex items-center gap-1 px-3 py-1.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-3 h-3" />
                  {submitting ? t(T.progress.leaderboard.submitting, lang) : t(T.progress.leaderboard.submitBtn, lang)}
                </button>
              </div>
              {lbError && <p className="text-xs text-danger">{lbError}</p>}
            </div>
          )}

          {submitted && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-secondary text-center py-1">
              {t(T.progress.leaderboard.submitted, lang)}
            </motion.p>
          )}

          {totalAttempted === 0 && (
            <p className="text-xs text-gray-400 text-center py-2">{t(T.progress.leaderboard.minScore, lang)}</p>
          )}

          {/* Top 10 table */}
          {lbLoading ? (
            <p className="text-xs text-gray-400 text-center py-4">{t(T.progress.leaderboard.loading, lang)}</p>
          ) : scores.length === 0 ? (
            <p className="text-xs text-gray-400 text-center py-4">{t(T.progress.leaderboard.noScores, lang)}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-xs text-gray-500">
                    <th className="text-left pb-2 w-8">#</th>
                    <th className="text-left pb-2">{t(T.progress.leaderboard.player, lang)}</th>
                    <th className="text-right pb-2">{t(T.progress.leaderboard.score, lang)}</th>
                    <th className="text-right pb-2 hidden sm:table-cell">{t(T.progress.leaderboard.accuracy, lang)}</th>
                  </tr>
                </thead>
                <tbody>
                  {scores.map((s, i) => (
                    <tr key={s.id} className={`border-b border-gray-50 ${i < 3 ? 'font-medium' : ''}`}>
                      <td className="py-2 text-xs text-gray-400">
                        {i === 0 ? '\u{1F947}' : i === 1 ? '\u{1F948}' : i === 2 ? '\u{1F949}' : `${i + 1}`}
                      </td>
                      <td className="py-2 text-gray-900 truncate max-w-24">{s.username}</td>
                      <td className="py-2 text-right font-mono text-primary">{s.score.toLocaleString()}</td>
                      <td className="py-2 text-right text-gray-500 hidden sm:table-cell">{s.accuracy}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-xl p-4 text-center text-xs text-gray-400">
          {t(T.progress.leaderboard.offline, lang)}
        </div>
      )}
    </div>
  )
}
