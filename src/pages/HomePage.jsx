import { Link } from 'react-router-dom'
import { BookOpen, Gamepad2, Calculator, BarChart3, Ship, Award, Anchor, Compass, Shield, Star, Crown, Trophy, Gem } from 'lucide-react'
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
    <div className="space-y-9 py-4 sm:py-6">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-3xl border border-white/75 bg-white/82 backdrop-blur-xl text-center px-5 sm:px-8 py-8 sm:py-10 shadow-[0_24px_54px_rgba(12,74,110,0.15)] space-y-4"
      >
        <div className="absolute -top-16 -right-14 w-44 h-44 rounded-full bg-ocean-light/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-14 -left-16 w-44 h-44 rounded-full bg-port/20 blur-3xl pointer-events-none" />
        <div className="inline-flex items-center gap-2 bg-ocean/10 text-ocean px-4 py-2 rounded-full text-sm font-semibold border border-ocean/15">
          <Ship className="w-4 h-4" />
          {t(T.home.badge, lang)}
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 leading-tight">
          {t(T.home.title, lang)}
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          {t(T.home.subtitle, lang)}
        </p>
      </motion.div>

      {/* Character Parade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center items-end gap-4 py-3 rounded-2xl border border-white/65 bg-white/55 backdrop-blur-md"
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
          <div className="bg-white/85 rounded-2xl p-4 text-center border border-white/80 shadow-[0_10px_24px_rgba(30,64,175,0.08)]">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <LevelIcon className="w-5 h-5 text-ocean" />
              <span className="text-xs font-medium text-slate-400">Lv.{level.level}</span>
            </div>
            <div className="font-display text-lg font-bold text-ocean">{t(level.title, lang)}</div>
            <div className="mt-1.5 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-ocean rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="bg-white/85 rounded-2xl p-4 text-center border border-white/80 shadow-[0_10px_24px_rgba(30,64,175,0.08)]">
            <div className="font-display text-2xl font-bold text-primary">{score}</div>
            <div className="text-xs text-slate-500">{t(T.home.stats.points, lang)}</div>
          </div>
          <div className="bg-white/85 rounded-2xl p-4 text-center border border-white/80 shadow-[0_10px_24px_rgba(30,64,175,0.08)]">
            <div className="font-display text-2xl font-bold text-secondary">{accuracy}%</div>
            <div className="text-xs text-slate-500">{t(T.home.stats.accuracy, lang)}</div>
          </div>
          <div className="bg-white/85 rounded-2xl p-4 text-center border border-white/80 shadow-[0_10px_24px_rgba(30,64,175,0.08)]">
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <Award className="w-4 h-4 text-amber-500" />
            </div>
            <div className="font-display text-2xl font-bold text-amber-600">{badgesEarned}/{computeAllBadges(gameState).length}</div>
            <div className="text-xs text-slate-500">{t(T.home.stats.badges, lang)}</div>
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
              className="group relative block overflow-hidden rounded-2xl border border-white/75 bg-white/84 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.09)] transition-shadow hover:shadow-[0_20px_40px_rgba(15,23,42,0.13)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ocean-light/60 via-primary-light/55 to-port/55" />
              <div className={`w-11 h-11 rounded-xl ${feat.color} flex items-center justify-center mb-3 border border-white/70 shadow-sm`}>
                <feat.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-slate-900 mb-1 group-hover:text-primary transition-colors">{feat.title}</h3>
              <p className="text-sm text-slate-600">{feat.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Incoterms Quick Reference */}
      <div className="bg-white/84 rounded-2xl p-5 shadow-[0_16px_38px_rgba(15,23,42,0.1)] border border-white/75">
        <h3 className="font-display font-semibold text-slate-900 mb-3">{t(T.home.quickRef, lang)}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {INCOTERMS.map(term => (
            <Link
              key={term.code}
              to={`/learn/${term.code}`}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-white/75 border border-white/65 hover:bg-white transition-colors"
            >
              <span className="text-lg">{term.emoji}</span>
              <div>
                <div className="font-mono font-bold text-sm text-primary">{term.code}</div>
                <div className="text-[11px] text-slate-500">{t(term.name, lang)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
