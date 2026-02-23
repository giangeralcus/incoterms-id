import { Link } from 'react-router-dom'
import { BookOpen, Gamepad2, Calculator, BarChart3, Ship } from 'lucide-react'
import { motion } from 'framer-motion'
import useGameStore from '../stores/gameStore'
import useLanguageStore from '../stores/languageStore'
import { translations as T, t } from '../i18n/translations'
import { INCOTERMS } from '../data/incoterms'
import Character from '../components/PixelArt/Character'
import { CHARACTERS } from '../data/characters'

export default function HomePage() {
  const { score, totalCorrect, totalAttempted, scenariosCompleted } = useGameStore()
  const { lang } = useLanguageStore()
  const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0

  const features = [
    {
      to: '/learn',
      icon: BookOpen,
      title: t(T.home.features.learn.title, lang),
      description: t(T.home.features.learn.desc, lang),
      color: 'bg-primary/10 text-primary',
    },
    {
      to: '/scenario',
      icon: Gamepad2,
      title: t(T.home.features.play.title, lang),
      description: t(T.home.features.play.desc, lang),
      color: 'bg-secondary/10 text-secondary',
    },
    {
      to: '/cost-simulator',
      icon: Calculator,
      title: t(T.home.features.cost.title, lang),
      description: t(T.home.features.cost.desc, lang),
      color: 'bg-accent/10 text-accent',
    },
    {
      to: '/progress',
      icon: BarChart3,
      title: t(T.home.features.progress.title, lang),
      description: t(T.home.features.progress.desc, lang),
      color: 'bg-port/10 text-port',
    },
  ]

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
          {t(T.home.badge, lang)}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          {t(T.home.title, lang)}
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          {t(T.home.subtitle, lang)}
        </p>
      </motion.div>

      {/* Character Parade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center items-end gap-4 py-2"
      >
        {(['eksportir', 'importir', 'agent', 'customs', 'trader']).map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <Character
              sprites={CHARACTERS[name]}
              paletteName={name}
              state="walk"
              zoom={3}
              frameInterval={220 + i * 30}
            />
          </motion.div>
        ))}
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
            <div className="text-xs text-gray-500">{t(T.home.stats.points, lang)}</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
            <div className="text-2xl font-bold text-secondary">{accuracy}%</div>
            <div className="text-xs text-gray-500">{t(T.home.stats.accuracy, lang)}</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
            <div className="text-2xl font-bold text-port">{scenariosCompleted.length}/{INCOTERMS.length * 2}</div>
            <div className="text-xs text-gray-500">{t(T.home.stats.scenarios, lang)}</div>
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
        <h3 className="font-semibold text-gray-900 mb-3">{t(T.home.quickRef, lang)}</h3>
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
