import { useState, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Factory,
  Package,
  FileCheck,
  Container,
  Ship,
  Truck,
  Building2,
  Flag,
  Coins,
  Check,
  X,
  ArrowRight,
  RotateCcw,
  Trophy,
  Sparkles,
} from 'lucide-react'
import {
  PIPELINE_STAGES,
  INCOTERM_PIPELINE,
  PIPELINE_GAME_LEVELS,
} from '../../data/pipeline'
import useGameStore from '../../stores/gameStore'

const ICONS = { Factory, Package, FileCheck, Container, Ship, Truck, Building2 }

// Split pipeline into two rows for mobile: 5 top, 4 bottom
const TOP_ROW = PIPELINE_STAGES.slice(0, 5)
const BOTTOM_ROW = PIPELINE_STAGES.slice(5)

/* ------------------------------------------------------------------ */
/*  GameNode                                                          */
/* ------------------------------------------------------------------ */

function GameNode({
  stage,
  index,
  riskPlacement,
  costPlacement,
  placingMode,
  submitted,
  correctRisk,
  correctCost,
  onTap,
}) {
  const Icon = ICONS[stage.icon]
  const hasRisk = riskPlacement === index
  const hasCost = costPlacement === index
  const isActive = placingMode !== null && !submitted

  // Determine border color based on state
  let borderColor = 'border-gray-300'
  let bgColor = 'bg-gray-100'
  let ringClass = ''

  if (submitted) {
    // After submit: show correct/wrong feedback
    const riskCorrectHere = correctRisk === index
    const costCorrectHere = correctCost === index
    const riskWrongHere = hasRisk && correctRisk !== index
    const costWrongHere = hasCost && correctCost !== index

    if (riskCorrectHere || costCorrectHere) {
      borderColor = 'border-emerald-400'
      bgColor = 'bg-emerald-50'
    }
    if (riskWrongHere || costWrongHere) {
      borderColor = 'border-red-400'
      bgColor = 'bg-red-50'
    }
    // If both a correct answer and a wrong placement land here
    if ((riskCorrectHere || costCorrectHere) && (riskWrongHere || costWrongHere)) {
      borderColor = 'border-amber-400'
      bgColor = 'bg-amber-50'
    }
  } else {
    if (hasRisk && hasCost) {
      borderColor = 'border-amber-400'
      bgColor = 'bg-amber-50'
    } else if (hasRisk) {
      borderColor = 'border-red-400'
      bgColor = 'bg-red-50'
    } else if (hasCost) {
      borderColor = 'border-green-400'
      bgColor = 'bg-green-50'
    }
  }

  if (isActive && !hasRisk && !hasCost) {
    ringClass =
      placingMode === 'risk'
        ? 'ring-2 ring-red-200 ring-offset-1'
        : 'ring-2 ring-green-200 ring-offset-1'
  }

  return (
    <div className="flex flex-col items-center gap-0.5 relative">
      {/* Flag indicators above node */}
      <div className="flex items-center justify-center gap-0.5 h-5">
        <AnimatePresence>
          {hasRisk && (
            <motion.div
              key="risk-flag"
              initial={{ scale: 0, y: 6 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0 }}
              className="flex items-center justify-center w-4 h-4 rounded-full bg-red-100 border border-red-300"
            >
              <Flag className="w-2.5 h-2.5 text-red-600" />
            </motion.div>
          )}
          {hasCost && (
            <motion.div
              key="cost-flag"
              initial={{ scale: 0, y: 6 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0 }}
              className="flex items-center justify-center w-4 h-4 rounded-full bg-green-100 border border-green-300"
            >
              <Coins className="w-2.5 h-2.5 text-green-600" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show correct answer markers after submission */}
        {submitted && correctRisk === index && riskPlacement !== index && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center w-4 h-4 rounded-full bg-red-500"
          >
            <Flag className="w-2.5 h-2.5 text-white" />
          </motion.div>
        )}
        {submitted && correctCost === index && costPlacement !== index && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500"
          >
            <Coins className="w-2.5 h-2.5 text-white" />
          </motion.div>
        )}
      </div>

      {/* Node circle */}
      <motion.button
        type="button"
        onClick={() => onTap(index)}
        disabled={submitted}
        whileTap={isActive ? { scale: 0.9 } : {}}
        className={`
          w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center
          border-2 shadow-sm transition-colors
          ${bgColor} ${borderColor} ${ringClass}
          ${isActive ? 'cursor-pointer active:scale-95' : ''}
          ${submitted ? 'cursor-default' : ''}
          ${!isActive && !submitted ? 'cursor-default' : ''}
        `}
      >
        {Icon && (
          <Icon
            className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${
              submitted ? 'text-gray-500' : 'text-gray-600'
            }`}
            strokeWidth={2}
          />
        )}
      </motion.button>

      {/* Label */}
      <span className="text-[9px] sm:text-[10px] leading-tight text-center text-gray-500 max-w-12 sm:max-w-14">
        {stage.label}
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  ConnectorDot (simple line between nodes)                          */
/* ------------------------------------------------------------------ */

function GameConnector() {
  return (
    <div className="h-0.5 flex-1 min-w-2 sm:min-w-3 self-center mt-3 rounded-full bg-gray-200" />
  )
}

/* ------------------------------------------------------------------ */
/*  GamePipelineRow                                                   */
/* ------------------------------------------------------------------ */

function GamePipelineRow({
  stages,
  riskPlacement,
  costPlacement,
  placingMode,
  submitted,
  correctRisk,
  correctCost,
  onTap,
}) {
  return (
    <div className="flex items-start justify-between gap-0">
      {stages.map((stage, i) => (
        <div key={stage.id} className="contents">
          <GameNode
            stage={stage}
            index={stage.x}
            riskPlacement={riskPlacement}
            costPlacement={costPlacement}
            placingMode={placingMode}
            submitted={submitted}
            correctRisk={correctRisk}
            correctCost={correctCost}
            onTap={onTap}
          />
          {i < stages.length - 1 && <GameConnector />}
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Result Flash Overlay                                              */
/* ------------------------------------------------------------------ */

function ResultFlash({ pointsEarned }) {
  const color =
    pointsEarned === 20
      ? 'from-emerald-500/20'
      : pointsEarned === 10
        ? 'from-amber-500/20'
        : 'from-red-500/20'

  const icon =
    pointsEarned === 20 ? (
      <Sparkles className="w-6 h-6 text-emerald-500" />
    ) : pointsEarned === 10 ? (
      <Check className="w-6 h-6 text-amber-500" />
    ) : (
      <X className="w-6 h-6 text-red-500" />
    )

  const label =
    pointsEarned === 20
      ? 'Perfect!'
      : pointsEarned === 10
        ? 'Half right!'
        : 'Not quite...'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`
        flex items-center justify-center gap-2 py-2 px-4 rounded-xl
        bg-gradient-to-r ${color} to-transparent
      `}
    >
      {icon}
      <span className="text-sm font-semibold text-gray-700">
        {label} +{pointsEarned} pts
      </span>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Round Summary                                                     */
/* ------------------------------------------------------------------ */

function RoundSummary({ roundLabel, roundScore, maxScore, onNext, isFinal }) {
  const pct = maxScore > 0 ? Math.round((roundScore / maxScore) * 100) : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-4 py-6"
    >
      <Trophy className="w-10 h-10 text-amber-500" />
      <h3 className="text-lg font-bold text-gray-800">{roundLabel} Complete!</h3>
      <div className="text-center">
        <p className="text-2xl font-bold text-indigo-600">
          {roundScore}/{maxScore} pts
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {pct >= 80
            ? 'Excellent!'
            : pct >= 50
              ? 'Good job!'
              : 'Keep practicing!'}
        </p>
      </div>
      <button
        type="button"
        onClick={onNext}
        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 active:scale-95 transition-all"
      >
        {isFinal ? (
          <>
            <Trophy className="w-4 h-4" /> See Final Score
          </>
        ) : (
          <>
            Next Round <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Game Complete Screen                                              */
/* ------------------------------------------------------------------ */

function GameComplete({ totalScore, maxTotalScore, onPlayAgain }) {
  const pct =
    maxTotalScore > 0 ? Math.round((totalScore / maxTotalScore) * 100) : 0

  let grade = 'D'
  if (pct >= 90) grade = 'S'
  else if (pct >= 80) grade = 'A'
  else if (pct >= 60) grade = 'B'
  else if (pct >= 40) grade = 'C'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-4 py-8"
    >
      <motion.div
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Trophy className="w-14 h-14 text-amber-500" />
      </motion.div>
      <h2 className="text-xl font-bold text-gray-800">Game Complete!</h2>
      <div className="text-center">
        <p className="text-3xl font-extrabold text-indigo-600">
          {totalScore}/{maxTotalScore}
        </p>
        <p className="text-sm text-gray-500 mt-1">Total Points</p>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.4 }}
        className={`
          w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black
          ${grade === 'S'
            ? 'bg-gradient-to-br from-amber-400 to-yellow-500 text-white'
            : grade === 'A'
              ? 'bg-gradient-to-br from-emerald-400 to-green-500 text-white'
              : grade === 'B'
                ? 'bg-gradient-to-br from-blue-400 to-indigo-500 text-white'
                : grade === 'C'
                  ? 'bg-gradient-to-br from-orange-400 to-amber-500 text-white'
                  : 'bg-gradient-to-br from-gray-400 to-gray-500 text-white'
          }
        `}
      >
        {grade}
      </motion.div>
      <p className="text-sm text-gray-500">
        {pct >= 90
          ? 'You truly understand Incoterms!'
          : pct >= 80
            ? 'Great knowledge of risk & cost transfer!'
            : pct >= 60
              ? 'Solid understanding, keep it up!'
              : pct >= 40
                ? 'Good start, try again to improve!'
                : 'Practice makes perfect!'}
      </p>
      <button
        type="button"
        onClick={onPlayAgain}
        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 active:scale-95 transition-all"
      >
        <RotateCcw className="w-4 h-4" /> Play Again
      </button>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Game Component                                               */
/* ------------------------------------------------------------------ */

export default function DragAndDropGame() {
  const addPipelinePoints = useGameStore((s) => s.addPipelinePoints)

  const [currentRound, setCurrentRound] = useState(0)
  const [currentTermIndex, setCurrentTermIndex] = useState(0)
  const [placingMode, setPlacingMode] = useState(null) // 'risk' | 'cost' | null
  const [riskPlacement, setRiskPlacement] = useState(null) // index 0-8
  const [costPlacement, setCostPlacement] = useState(null) // index 0-8
  const [submitted, setSubmitted] = useState(false)
  const [pointsEarned, setPointsEarned] = useState(0)
  const [roundScore, setRoundScore] = useState(0)
  const [totalGameScore, setTotalGameScore] = useState(0)
  const [showRoundSummary, setShowRoundSummary] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)

  const round = PIPELINE_GAME_LEVELS[currentRound]
  const currentTerm = round?.terms[currentTermIndex]
  const pipeline = currentTerm ? INCOTERM_PIPELINE[currentTerm] : null

  // Max possible score
  const maxTotalScore = useMemo(
    () =>
      PIPELINE_GAME_LEVELS.reduce(
        (sum, level) => sum + level.terms.length * 20,
        0
      ),
    []
  )
  const maxRoundScore = round ? round.terms.length * 20 : 0

  // Handle flag button toggle
  const handleFlagSelect = useCallback(
    (mode) => {
      if (submitted) return
      setPlacingMode((prev) => (prev === mode ? null : mode))
    },
    [submitted]
  )

  // Handle node tap
  const handleNodeTap = useCallback(
    (index) => {
      if (submitted || placingMode === null) return
      if (placingMode === 'risk') {
        setRiskPlacement(index)
      } else {
        setCostPlacement(index)
      }
      // Auto-deselect after placing
      setPlacingMode(null)
    },
    [submitted, placingMode]
  )

  // Check answer
  const handleCheck = useCallback(() => {
    if (!pipeline || riskPlacement === null || costPlacement === null) return

    const riskCorrect = riskPlacement === pipeline.risk
    const costCorrect = costPlacement === pipeline.cost

    let pts = 0
    if (riskCorrect && costCorrect) pts = 20
    else if (riskCorrect || costCorrect) pts = 10

    setPointsEarned(pts)
    setRoundScore((prev) => prev + pts)
    setTotalGameScore((prev) => prev + pts)
    addPipelinePoints(pts)
    setSubmitted(true)
  }, [pipeline, riskPlacement, costPlacement, addPipelinePoints])

  // Next term
  const handleNext = useCallback(() => {
    const nextIndex = currentTermIndex + 1
    if (nextIndex < round.terms.length) {
      // More terms in this round
      setCurrentTermIndex(nextIndex)
      setPlacingMode(null)
      setRiskPlacement(null)
      setCostPlacement(null)
      setSubmitted(false)
      setPointsEarned(0)
    } else {
      // Round complete
      setShowRoundSummary(true)
    }
  }, [currentTermIndex, round])

  // Next round
  const handleNextRound = useCallback(() => {
    const nextRound = currentRound + 1
    if (nextRound < PIPELINE_GAME_LEVELS.length) {
      setCurrentRound(nextRound)
      setCurrentTermIndex(0)
      setPlacingMode(null)
      setRiskPlacement(null)
      setCostPlacement(null)
      setSubmitted(false)
      setPointsEarned(0)
      setRoundScore(0)
      setShowRoundSummary(false)
    } else {
      setShowRoundSummary(false)
      setGameComplete(true)
    }
  }, [currentRound])

  // Play again
  const handlePlayAgain = useCallback(() => {
    setCurrentRound(0)
    setCurrentTermIndex(0)
    setPlacingMode(null)
    setRiskPlacement(null)
    setCostPlacement(null)
    setSubmitted(false)
    setPointsEarned(0)
    setRoundScore(0)
    setTotalGameScore(0)
    setShowRoundSummary(false)
    setGameComplete(false)
  }, [])

  const bothPlaced = riskPlacement !== null && costPlacement !== null

  // ---- Render -------------------------------------------------------

  if (gameComplete) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
        <GameComplete
          totalScore={totalGameScore}
          maxTotalScore={maxTotalScore}
          onPlayAgain={handlePlayAgain}
        />
      </div>
    )
  }

  if (showRoundSummary) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
        <RoundSummary
          roundLabel={round.label}
          roundScore={roundScore}
          maxScore={maxRoundScore}
          onNext={handleNextRound}
          isFinal={currentRound === PIPELINE_GAME_LEVELS.length - 1}
        />
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 font-medium">
            {round.label} &middot; {currentTermIndex + 1}/{round.terms.length}
          </p>
          <h3 className="text-lg font-bold text-gray-800 mt-0.5">
            Where does{' '}
            <span className="text-indigo-600">{currentTerm}</span>{' '}
            transfer?
          </h3>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Score</p>
          <p className="text-lg font-bold text-indigo-600">{totalGameScore}</p>
        </div>
      </div>

      {/* Instruction */}
      {!submitted && (
        <p className="text-xs text-gray-500">
          Select a flag below, then tap the pipeline stage where it transfers.
        </p>
      )}

      {/* Pipeline nodes -- desktop: single row */}
      <div className="hidden sm:block">
        <div className="flex items-start justify-between gap-0 px-1">
          {PIPELINE_STAGES.map((stage, i) => (
            <div key={stage.id} className="contents">
              <GameNode
                stage={stage}
                index={stage.x}
                riskPlacement={riskPlacement}
                costPlacement={costPlacement}
                placingMode={placingMode}
                submitted={submitted}
                correctRisk={submitted ? pipeline.risk : null}
                correctCost={submitted ? pipeline.cost : null}
                onTap={handleNodeTap}
              />
              {i < PIPELINE_STAGES.length - 1 && <GameConnector />}
            </div>
          ))}
        </div>
      </div>

      {/* Pipeline nodes -- mobile: two rows */}
      <div className="sm:hidden space-y-1">
        <GamePipelineRow
          stages={TOP_ROW}
          riskPlacement={riskPlacement}
          costPlacement={costPlacement}
          placingMode={placingMode}
          submitted={submitted}
          correctRisk={submitted ? pipeline.risk : null}
          correctCost={submitted ? pipeline.cost : null}
          onTap={handleNodeTap}
        />
        <div className="flex justify-end pr-6">
          <div className="w-0.5 h-3 rounded-full bg-gray-200" />
        </div>
        <GamePipelineRow
          stages={BOTTOM_ROW}
          riskPlacement={riskPlacement}
          costPlacement={costPlacement}
          placingMode={placingMode}
          submitted={submitted}
          correctRisk={submitted ? pipeline.risk : null}
          correctCost={submitted ? pipeline.cost : null}
          onTap={handleNodeTap}
        />
      </div>

      {/* Flag placement buttons */}
      {!submitted && (
        <div className="flex items-center justify-center gap-3">
          <motion.button
            type="button"
            onClick={() => handleFlagSelect('risk')}
            whileTap={{ scale: 0.95 }}
            animate={
              placingMode === 'risk'
                ? { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.2 } }
                : {}
            }
            className={`
              flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm
              border-2 transition-all
              ${
                placingMode === 'risk'
                  ? 'border-red-500 bg-red-50 text-red-700 shadow-md shadow-red-100'
                  : riskPlacement !== null
                    ? 'border-red-200 bg-red-50/50 text-red-400'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-red-300 hover:bg-red-50/30'
              }
            `}
          >
            <Flag className="w-4 h-4" />
            {riskPlacement !== null ? 'Risk Placed' : 'Place Risk'}
          </motion.button>

          <motion.button
            type="button"
            onClick={() => handleFlagSelect('cost')}
            whileTap={{ scale: 0.95 }}
            animate={
              placingMode === 'cost'
                ? { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.2 } }
                : {}
            }
            className={`
              flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm
              border-2 transition-all
              ${
                placingMode === 'cost'
                  ? 'border-green-500 bg-green-50 text-green-700 shadow-md shadow-green-100'
                  : costPlacement !== null
                    ? 'border-green-200 bg-green-50/50 text-green-400'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-green-300 hover:bg-green-50/30'
              }
            `}
          >
            <Coins className="w-4 h-4" />
            {costPlacement !== null ? 'Cost Placed' : 'Place Cost'}
          </motion.button>
        </div>
      )}

      {/* Check / Result / Next */}
      <AnimatePresence mode="wait">
        {!submitted && bothPlaced && (
          <motion.div
            key="check"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex justify-center"
          >
            <button
              type="button"
              onClick={handleCheck}
              className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 active:scale-95 transition-all"
            >
              <Check className="w-4 h-4" /> Check Answer
            </button>
          </motion.div>
        )}

        {submitted && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-3"
          >
            <ResultFlash pointsEarned={pointsEarned} />

            {/* Correct answer text */}
            <div className="text-center text-xs text-gray-500 space-y-0.5">
              <p>
                <Flag className="w-3 h-3 text-red-500 inline-block mr-0.5 -mt-0.5" />
                Risk transfers at{' '}
                <span className="font-semibold text-gray-700">
                  {PIPELINE_STAGES[pipeline.risk].label}
                </span>
                {riskPlacement === pipeline.risk ? (
                  <Check className="w-3 h-3 text-emerald-500 inline-block ml-1 -mt-0.5" />
                ) : (
                  <X className="w-3 h-3 text-red-500 inline-block ml-1 -mt-0.5" />
                )}
              </p>
              <p>
                <Coins className="w-3 h-3 text-green-500 inline-block mr-0.5 -mt-0.5" />
                Cost transfers at{' '}
                <span className="font-semibold text-gray-700">
                  {PIPELINE_STAGES[pipeline.cost].label}
                </span>
                {costPlacement === pipeline.cost ? (
                  <Check className="w-3 h-3 text-emerald-500 inline-block ml-1 -mt-0.5" />
                ) : (
                  <X className="w-3 h-3 text-red-500 inline-block ml-1 -mt-0.5" />
                )}
              </p>
            </div>

            {/* Next button */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 active:scale-95 transition-all"
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Round progress bar */}
      <div className="pt-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-gray-400 whitespace-nowrap">
            Round {currentRound + 1}/{PIPELINE_GAME_LEVELS.length}
          </span>
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-indigo-400 rounded-full"
              initial={false}
              animate={{
                width: `${((currentRound * round.terms.length + currentTermIndex + (submitted ? 1 : 0)) / PIPELINE_GAME_LEVELS.reduce((s, l) => s + l.terms.length, 0)) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
