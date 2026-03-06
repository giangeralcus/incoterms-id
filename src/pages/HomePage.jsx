import { Link } from 'react-router-dom'
import { BookOpen, Gamepad2, Calculator, BarChart3, Ship, Award, Anchor, Compass, Shield, Star, Crown, Trophy, Gem, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import useGameStore from '../stores/gameStore'
import useLanguageStore from '../stores/languageStore'
import { translations as T, t } from '../i18n/translations'
import { INCOTERMS } from '../data/incoterms'
import Character from '../components/PixelArt/Character'
import { CHARACTERS } from '../data/characters'
import { getLevel, getLevelProgress } from '../data/levels'
import { computeAllBadges } from '../data/badges'

const LEVEL_ICONS = { Anchor, Compass, Shield, Ship, Star, Crown, Trophy, Gem }

export default function HomePage() {
  const { score, totalCorrect, totalAttempted } = useGameStore()
  const { lang } = useLanguageStore()
  const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0
  const gameState = useGameStore.getState()
  const level = getLevel(score)
  const progress = getLevelProgress(score)
  const badgesEarned = computeAllBadges(gameState).filter(b => b.tier).length
  const LevelIcon = LEVEL_ICONS[level.icon] || Anchor

  const features = [
    {
      to: '/learn',
      icon: BookOpen,
      title: t(T.home.features.learn.title, lang),
      description: t(T.home.features.learn.desc, lang),
      color: 'bg-[#e9f3ff] text-primary',
    },
    {
      to: '/scenario',
      icon: Gamepad2,
      title: t(T.home.features.play.title, lang),
      description: t(T.home.features.play.desc, lang),
      color: 'bg-[#ecf7ff] text-[#0a84ff]',
    },
    {
      to: '/cost-simulator',
      icon: Calculator,
      title: t(T.home.features.cost.title, lang),
      description: t(T.home.features.cost.desc, lang),
      color: 'bg-[#f1f0ff] text-[#5e5ce6]',
    },
    {
      to: '/progress',
      icon: BarChart3,
      title: t(T.home.features.progress.title, lang),
      description: t(T.home.features.progress.desc, lang),
      color: 'bg-[#f2f4f7] text-[#3a3a3c]',
    },
  ]

  return (
    <div className="space-y-9 py-5 sm:py-7">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="glass-card-hero relative overflow-hidden text-center px-5 sm:px-8 py-10 sm:py-12 space-y-5"
      >
        <div className="absolute -top-14 -right-14 w-48 h-48 rounded-full bg-[#5ac8fa]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-20 w-52 h-52 rounded-full bg-[#0071e3]/18 blur-3xl pointer-events-none" />
        <div className="inline-flex items-center gap-2 bg-[#e9f3ff] text-primary px-4 py-2 rounded-full text-sm font-semibold border border-[#b8dbff]">
          <Ship className="w-4 h-4" />
          {t(T.home.badge, lang)}
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-semibold text-[#1d1d1f] leading-tight">
          {t(T.home.title, lang)}
        </h1>
        <p className="text-[#6e6e73] max-w-2xl mx-auto text-[15px] sm:text-base">
          {t(T.home.subtitle, lang)}
        </p>
        <div className="flex flex-wrap justify-center gap-2.5 pt-1">
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0062c7] transition-colors"
          >
            {t(T.home.features.learn.title, lang)}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/scenario"
            className="inline-flex items-center gap-2 rounded-full border border-[#00000014] bg-white px-5 py-2.5 text-sm font-semibold text-[#1d1d1f] hover:bg-[#f6f6f8] transition-colors"
          >
            {t(T.home.features.play.title, lang)}
          </Link>
        </div>
      </motion.div>

      {/* Character Parade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center items-end gap-4 py-3 rounded-2xl border border-[#00000010] bg-[rgba(255,255,255,0.7)] backdrop-blur-xl"
      >
        {(['eksportir', 'importir', 'agent', 'customs', 'trader']).map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i }}
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
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
        >
          <div className="glass-card rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <LevelIcon className="w-5 h-5 text-primary" />
              <span className="text-xs font-medium text-[#8e8e93]">Lv.{level.level}</span>
            </div>
            <div className="font-display text-lg font-semibold text-[#1d1d1f]">{t(level.title, lang)}</div>
            <div className="mt-1.5 h-1.5 bg-[#ececf1] rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center">
            <div className="font-display text-2xl font-bold text-primary">{score}</div>
            <div className="text-xs text-[#6e6e73]">{t(T.home.stats.points, lang)}</div>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center">
            <div className="font-display text-2xl font-bold text-[#0a84ff]">{accuracy}%</div>
            <div className="text-xs text-[#6e6e73]">{t(T.home.stats.accuracy, lang)}</div>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <Award className="w-4 h-4 text-amber-500" />
            </div>
            <div className="font-display text-2xl font-bold text-amber-600">{badgesEarned}/{computeAllBadges(gameState).length}</div>
            <div className="text-xs text-[#6e6e73]">{t(T.home.stats.badges, lang)}</div>
          </div>
        </motion.div>
      )}

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        {features.map((feat, i) => (
          <motion.div
            key={feat.to}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.08 * i, duration: 0.28 }}
          >
            <Link
              to={feat.to}
              className="glass-card glass-card-hover group relative block overflow-hidden rounded-2xl p-5"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#5ac8fa] via-[#0071e3] to-[#5e5ce6]" />
              <div className={`w-11 h-11 rounded-xl ${feat.color} flex items-center justify-center mb-3 border border-[#00000010] shadow-sm`}>
                <feat.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-[#1d1d1f] mb-1 group-hover:text-primary transition-colors">{feat.title}</h3>
              <p className="text-sm text-[#6e6e73]">{feat.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Incoterms Quick Reference */}
      <div className="glass-card rounded-2xl p-5">
        <h3 className="font-display font-semibold text-[#1d1d1f] mb-3">{t(T.home.quickRef, lang)}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {INCOTERMS.map(term => (
            <Link
              key={term.code}
              to={`/learn/${term.code}`}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-[rgba(255,255,255,0.9)] border border-[#00000010] hover:bg-white transition-colors"
            >
              <span className="text-lg">{term.emoji}</span>
              <div>
                <div className="font-mono font-bold text-sm text-primary">{term.code}</div>
                <div className="text-[11px] text-[#6e6e73]">{t(term.name, lang)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
