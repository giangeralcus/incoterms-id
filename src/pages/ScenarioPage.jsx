import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Ship, Plane, MapPin, Package, DollarSign, HelpCircle, CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react'
import ShipRouteMap from '../components/ShipRouteMap'
import SceneIllustration from '../components/SceneIllustration'
import confetti from 'canvas-confetti'
import useGameStore from '../stores/gameStore'
import useLanguageStore from '../stores/languageStore'
import { translations as T, t } from '../i18n/translations'
import { INCOTERMS } from '../data/incoterms'
import { SCENARIOS } from '../data/scenarios'

function DifficultySelector({ onSelect, lang }) {
  const difficulties = [
    { key: 'beginner', label: t(T.scenario.beginner, lang), color: 'bg-green-500', desc: t(T.scenario.beginnerDesc, lang) },
    { key: 'intermediate', label: t(T.scenario.intermediate, lang), color: 'bg-amber-500', desc: t(T.scenario.intermediateDesc, lang) },
    { key: 'advanced', label: t(T.scenario.advanced, lang), color: 'bg-red-500', desc: t(T.scenario.advancedDesc, lang) },
    { key: 'all', label: t(T.scenario.mixed, lang), color: 'bg-purple-500', desc: t(T.scenario.mixedDesc, lang) },
  ]

  return (
    <div className="space-y-4 py-8">
      <h2 className="text-xl font-bold text-gray-900 text-center">{t(T.scenario.chooseDifficulty, lang)}</h2>
      <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto">
        {difficulties.map(d => (
          <button
            key={d.key}
            onClick={() => onSelect(d.key)}
            className="bg-white rounded-xl p-4 shadow-sm border hover:shadow-md transition-shadow text-left"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className={`w-3 h-3 rounded-full ${d.color}`} />
              <span className="font-semibold text-gray-900">{d.label}</span>
            </div>
            <p className="text-xs text-gray-500">{d.desc}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

function ScenarioCard({ scenario, onAnswer, lang }) {
  const [selectedIncoterm, setSelectedIncoterm] = useState(null)
  const [showHint, setShowHint] = useState(false)
  const [hintIndex, setHintIndex] = useState(0)

  const handleAnswer = () => {
    if (!selectedIncoterm) return
    const isCorrect = scenario.acceptableAnswers.includes(selectedIncoterm)
    onAnswer(selectedIncoterm, isCorrect)
    if (isCorrect) {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } })
    }
  }

  const revealHint = () => {
    setShowHint(true)
    setHintIndex(prev => Math.min(prev + 1, scenario.hints.length))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {/* Scenario Info */}
      <div className="bg-white rounded-xl p-5 shadow-sm border">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            scenario.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
            scenario.difficulty === 'intermediate' ? 'bg-amber-100 text-amber-700' :
            'bg-red-100 text-red-700'
          }`}>{t(T.scenario[scenario.difficulty], lang)}</span>
          <span className="text-xs text-gray-400">{scenario.type === 'export' ? t(T.common.export, lang) : t(T.common.import, lang)}</span>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-2">{scenario.title}</h2>

        {/* Game scene illustration */}
        <SceneIllustration scenario={scenario} />

        <p className="text-sm text-gray-600 leading-relaxed mt-3 mb-4">{scenario.description}</p>

        {/* Route Info */}
        <div className="flex items-center gap-2 text-sm bg-ocean/5 rounded-lg p-3">
          <MapPin className="w-4 h-4 text-ocean" />
          <span className="font-medium">{scenario.origin.port}</span>
          <ArrowRight className="w-3 h-3 text-gray-400" />
          <span className="font-medium">{scenario.destination.port}</span>
        </div>

        {/* Animated route map */}
        <ShipRouteMap
          origin={scenario.origin}
          destination={scenario.destination}
          transport={scenario.containerType?.startsWith('AIR') ? 'AIR' : 'SEA'}
          lang={lang}
          className="mt-3"
        />

        {/* Cargo Details */}
        <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
          <div className="bg-gray-50 rounded p-2 text-center">
            <Package className="w-3 h-3 mx-auto mb-1 text-gray-400" />
            <div className="text-gray-600">{scenario.quantity}x {scenario.containerType}</div>
          </div>
          <div className="bg-gray-50 rounded p-2 text-center">
            <DollarSign className="w-3 h-3 mx-auto mb-1 text-gray-400" />
            <div className="text-gray-600">${scenario.cargoValue.toLocaleString()}</div>
          </div>
          <div className="bg-gray-50 rounded p-2 text-center">
            <Ship className="w-3 h-3 mx-auto mb-1 text-gray-400" />
            <div className="text-gray-600">HS {scenario.hsCode}</div>
          </div>
        </div>
      </div>

      {/* Hints */}
      {showHint && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-accent/5 rounded-xl p-4 border border-accent/20"
        >
          <div className="text-xs font-semibold text-amber-700 mb-2">{t(T.scenario.hint, lang)} ({hintIndex}/{scenario.hints.length})</div>
          <ul className="space-y-1">
            {scenario.hints.slice(0, hintIndex).map((hint, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                <HelpCircle className="w-3 h-3 mt-0.5 text-amber-500 shrink-0" />
                {hint}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Answer Grid */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">{t(T.scenario.whichIncoterm, lang)}</h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
          {INCOTERMS.map(term => (
            <button
              key={term.code}
              onClick={() => setSelectedIncoterm(term.code)}
              className={`p-2 rounded-lg border text-center transition-all ${
                selectedIncoterm === term.code
                  ? 'border-primary bg-primary/10 ring-2 ring-primary/30'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <div className="text-lg">{term.emoji}</div>
              <div className="text-xs font-mono font-bold">{term.code}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={revealHint}
          disabled={hintIndex >= scenario.hints.length}
          className="flex-1 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 transition-colors"
        >
          {t(T.scenario.hint, lang)} ({hintIndex}/{scenario.hints.length})
        </button>
        <button
          onClick={handleAnswer}
          disabled={!selectedIncoterm}
          className="flex-1 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 disabled:opacity-40 transition-colors"
        >
          {t(T.scenario.submitAnswer, lang)}
        </button>
      </div>
    </motion.div>
  )
}

function ResultCard({ scenario, selectedAnswer, isCorrect, onNext, lang }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-4"
    >
      <div className={`rounded-xl p-6 border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
        <div className="flex items-center gap-3 mb-3">
          {isCorrect ? (
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          ) : (
            <XCircle className="w-8 h-8 text-red-600" />
          )}
          <div>
            <h3 className={`font-bold text-lg ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {isCorrect ? t(T.scenario.correct, lang) : t(T.scenario.notQuite, lang)}
            </h3>
            <p className="text-sm text-gray-600">
              {t(T.scenario.youSelected, lang)}: <span className="font-mono font-bold">{selectedAnswer}</span>
              {!isCorrect && <> | {t(T.scenario.bestAnswer, lang)}: <span className="font-mono font-bold text-green-700">{scenario.correctAnswer}</span></>}
            </p>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-white rounded-xl p-5 shadow-sm border">
        <h4 className="font-semibold text-gray-900 mb-2">{t(T.scenario.explanation, lang)}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{scenario.explanation}</p>
      </div>

      {/* Learning Points */}
      <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
        <h4 className="font-semibold text-primary mb-2">{t(T.scenario.keyTakeaways, lang)}</h4>
        <ul className="space-y-2">
          {scenario.learningPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onNext}
        className="w-full py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
      >
        {t(T.scenario.nextScenario, lang)} <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  )
}

export default function ScenarioPage() {
  const { answerScenario, nextScenario, scenariosCompleted, streak } = useGameStore()
  const { lang } = useLanguageStore()
  const [difficulty, setDifficulty] = useState(null)
  const [currentScenario, setCurrentScenario] = useState(null)
  const [lastResult, setLastResult] = useState(null)

  const startScenario = useCallback((diff) => {
    setDifficulty(diff)
    const filtered = diff === 'all'
      ? SCENARIOS
      : SCENARIOS.filter(s => s.difficulty === diff)
    const available = filtered.filter(s => !scenariosCompleted.includes(s.id))
    const pool = available.length > 0 ? available : filtered
    const scenario = pool[Math.floor(Math.random() * pool.length)]
    setCurrentScenario(scenario)
    setLastResult(null)
  }, [scenariosCompleted])

  const handleAnswer = (selectedIncoterm, isCorrect) => {
    answerScenario(currentScenario.id, selectedIncoterm, isCorrect)
    setLastResult({ isCorrect, selectedAnswer: selectedIncoterm })
  }

  const handleNext = () => {
    nextScenario()
    setLastResult(null)
    startScenario(difficulty)
  }

  if (!difficulty) {
    return <DifficultySelector onSelect={startScenario} lang={lang} />
  }

  return (
    <div className="py-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => { setDifficulty(null); setCurrentScenario(null); setLastResult(null) }}
          className="text-sm text-gray-500 hover:text-primary flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" /> {t(T.scenario.changeDifficulty, lang)}
        </button>
        {streak > 0 && (
          <span className="text-sm font-semibold text-accent">{streak} {t(T.common.streak, lang)}!</span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {lastResult ? (
          <ResultCard
            key="result"
            scenario={currentScenario}
            selectedAnswer={lastResult.selectedAnswer}
            isCorrect={lastResult.isCorrect}
            onNext={handleNext}
            lang={lang}
          />
        ) : currentScenario ? (
          <ScenarioCard
            key={currentScenario.id}
            scenario={currentScenario}
            onAnswer={handleAnswer}
            lang={lang}
          />
        ) : null}
      </AnimatePresence>
    </div>
  )
}
