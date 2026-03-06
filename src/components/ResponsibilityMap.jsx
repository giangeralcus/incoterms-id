import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, RotateCcw, GripVertical } from 'lucide-react'
import { translations as T, t } from '../i18n/translations'

export default function ResponsibilityMap({ term, lang }) {
  // Build shuffled pool from both obligation arrays
  const buildItems = useCallback(() => {
    const all = [
      ...term.sellerObligations.map((ob, i) => ({ id: `S-${i}`, text: ob, correct: 'S' })),
      ...term.buyerObligations.map((ob, i) => ({ id: `B-${i}`, text: ob, correct: 'B' })),
    ]
    // Fisher-Yates shuffle
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[all[i], all[j]] = [all[j], all[i]]
    }
    return all
  }, [term])

  const [pool, setPool] = useState(() => buildItems())
  const [sellerCol, setSellerCol] = useState([])
  const [buyerCol, setBuyerCol] = useState([])
  const [dragging, setDragging] = useState(null) // { item, from }
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState(null)

  // Rebuild pool when term changes
   
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPool(buildItems())
    setSellerCol([])
    setBuyerCol([])
    setDragging(null)
    setChecked(false)
    setScore(null)
  }, [term, buildItems])

  function reset() {
    setPool(buildItems())
    setSellerCol([])
    setBuyerCol([])
    setDragging(null)
    setChecked(false)
    setScore(null)
  }

  // Returns the item array for a given zone name
  function getZone(name) {
    if (name === 'pool') return pool
    if (name === 'S') return sellerCol
    if (name === 'B') return buyerCol
    return []
  }

  function setZone(name, items) {
    if (name === 'pool') setPool(items)
    else if (name === 'S') setSellerCol(items)
    else if (name === 'B') setBuyerCol(items)
  }

  function handleDragStart(e, item, from) {
    setDragging({ item, from })
    e.dataTransfer.effectAllowed = 'move'
  }

  function handleDrop(e, to) {
    e.preventDefault()
    if (!dragging || dragging.from === to) return
    const { item, from } = dragging
    setZone(from, getZone(from).filter(i => i.id !== item.id))
    setZone(to, [...getZone(to), item])
    setDragging(null)
  }

  function handleDragOver(e) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  function checkAnswers() {
    const allPlaced = [...sellerCol, ...buyerCol]
    const correct = allPlaced.filter(i => {
      if (i.correct === 'S') return sellerCol.find(s => s.id === i.id)
      return buyerCol.find(b => b.id === i.id)
    }).length
    setScore({ correct, total: allPlaced.length })
    setChecked(true)
  }

  function itemColor(item, col) {
    if (!checked) return 'bg-white border-gray-200'
    const isCorrect = item.correct === col
    return isCorrect
      ? 'bg-green-50 border-green-300'
      : 'bg-red-50 border-red-300'
  }

  const allPlaced = sellerCol.length + buyerCol.length
  const totalItems = pool.length + sellerCol.length + buyerCol.length

  return (
    <div className="glass-card p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display font-semibold text-[#1d1d1f]">{t(T.learn.map.title, lang)}</h3>
          <p className="text-xs text-[#6e6e73] mt-0.5">{t(T.learn.map.subtitle, lang)}</p>
        </div>
        <button
          onClick={reset}
          className="text-xs text-[#8e8e93] hover:text-primary flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" />
          {t(T.learn.map.resetBtn, lang)}
        </button>
      </div>

      {/* Score badge */}
      {checked && score !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`text-center py-2 rounded-lg text-sm font-semibold ${
            score.correct === score.total
              ? 'bg-green-100 text-green-700'
              : 'bg-amber-100 text-amber-700'
          }`}
        >
          {t(T.learn.map.score, lang)}: {score.correct}/{score.total}
        </motion.div>
      )}

      {/* Pool */}
      {pool.length > 0 && (
        <div>
          <p className="text-xs font-medium text-[#6e6e73] mb-2">{t(T.learn.map.obligationsPool, lang)}</p>
          <div
            onDrop={e => handleDrop(e, 'pool')}
            onDragOver={handleDragOver}
            className="min-h-12 flex flex-wrap gap-2 p-2 rounded-xl border-2 border-dashed border-[#00000014] bg-[rgba(245,245,247,0.6)]"
          >
            <AnimatePresence>
              {pool.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  draggable
                  onDragStart={e => handleDragStart(e, item, 'pool')}
                  className="flex items-center gap-1.5 bg-[rgba(255,255,255,0.9)] border border-[#00000010] rounded-xl px-3 py-1.5 text-xs text-[#1d1d1f] cursor-grab active:cursor-grabbing shadow-sm hover:border-primary hover:shadow-md transition-all"
                >
                  <GripVertical className="w-3 h-3 text-gray-300 shrink-0" />
                  <span className="max-w-xs">{t(item.text, lang)}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Two columns */}
      <div className="grid grid-cols-2 gap-3">
        {['S', 'B'].map(col => (
          <div
            key={col}
            onDrop={e => handleDrop(e, col)}
            onDragOver={handleDragOver}
            className={`min-h-32 rounded-xl border-2 border-dashed p-2 transition-colors ${
              col === 'S'
                ? 'border-cargo/40 bg-cargo/5'
                : 'border-primary/40 bg-primary/5'
            }`}
          >
            <div className={`text-xs font-bold mb-2 ${col === 'S' ? 'text-cargo' : 'text-primary'}`}>
              {col === 'S' ? t(T.learn.map.seller, lang) : t(T.learn.map.buyer, lang)}
            </div>
            <div className="space-y-1.5">
              <AnimatePresence>
                {(col === 'S' ? sellerCol : buyerCol).map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: col === 'S' ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    draggable={!checked}
                    onDragStart={e => handleDragStart(e, item, col)}
                    className={`flex items-start gap-1.5 border rounded-xl px-2 py-1.5 text-xs cursor-grab active:cursor-grabbing transition-all ${itemColor(item, col)}`}
                  >
                    {checked ? (
                      item.correct === col
                        ? <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0 mt-0.5" />
                        : <XCircle className="w-3 h-3 text-red-500 shrink-0 mt-0.5" />
                    ) : (
                      <GripVertical className="w-3 h-3 text-gray-300 shrink-0 mt-0.5" />
                    )}
                    <span>{t(item.text, lang)}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {/* Check button */}
      {allPlaced > 0 && allPlaced === totalItems && !checked && (
        <motion.button
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={checkAnswers}
          className="w-full py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          {t(T.learn.map.checkBtn, lang)}
        </motion.button>
      )}
    </div>
  )
}
