import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useGameStore = create(
  persist(
    (set, get) => ({
      // Player progress
      score: 0,
      streak: 0,
      bestStreak: 0,
      scenariosCompleted: [],
      incotermsMastered: {},
      totalCorrect: 0,
      totalAttempted: 0,

      // Current session
      currentScenario: null,
      selectedAnswer: null,
      showResult: false,

      // Actions
      answerScenario: (scenarioId, selectedIncoterm, isCorrect) => {
        const state = get()
        const newStreak = isCorrect ? state.streak + 1 : 0
        const points = isCorrect ? 10 + (newStreak * 2) : 0

        // Deep clone mastery to avoid mutation
        const mastery = {}
        for (const key in state.incotermsMastered) {
          mastery[key] = { ...state.incotermsMastered[key] }
        }
        if (!mastery[selectedIncoterm]) {
          mastery[selectedIncoterm] = { correct: 0, total: 0 }
        }
        mastery[selectedIncoterm].total += 1
        if (isCorrect) mastery[selectedIncoterm].correct += 1

        set({
          score: state.score + points,
          streak: newStreak,
          bestStreak: Math.max(state.bestStreak, newStreak),
          totalCorrect: state.totalCorrect + (isCorrect ? 1 : 0),
          totalAttempted: state.totalAttempted + 1,
          scenariosCompleted: [...new Set([...state.scenariosCompleted, scenarioId])],
          showResult: true,
          selectedAnswer: selectedIncoterm,
          incotermsMastered: mastery,
        })
      },

      nextScenario: () => set({ currentScenario: null, selectedAnswer: null, showResult: false }),

      resetProgress: () => set({
        score: 0,
        streak: 0,
        bestStreak: 0,
        scenariosCompleted: [],
        incotermsMastered: {},
        totalCorrect: 0,
        totalAttempted: 0,
      }),
    }),
    {
      name: 'belajar-ekspor-impor-progress',
    }
  )
)

export default useGameStore
