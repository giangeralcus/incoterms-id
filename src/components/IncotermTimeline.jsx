// src/components/IncotermTimeline.jsx
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, RotateCcw } from 'lucide-react'
import { t } from '../i18n/translations'

// Risk transfer point as fraction of journey (0 = seller door, 1 = buyer door)
const TRANSFER_POINTS = {
  EXW: 0.02,  // At seller's premises — buyer does everything
  FCA: 0.20,  // At carrier/terminal, after export clearance
  FAS: 0.30,  // At quay, alongside vessel
  FOB: 0.38,  // On board vessel, port of origin
  CFR: 0.38,  // Risk same as FOB (seller pays freight)
  CIF: 0.38,  // Risk same as FOB (seller pays freight + insurance)
  CPT: 0.20,  // Risk same as FCA (seller pays freight)
  CIP: 0.20,  // Risk same as FCA (seller pays freight + insurance)
  DAP: 0.82,  // At named destination, before import customs
  DPU: 0.88,  // At destination, after unloading
  DDP: 0.98,  // Fully at buyer destination, duties paid
}

// Who pays freight per incoterm: 'seller' | 'buyer' | 'split'
const FREIGHT_PAYER = {
  EXW: 'buyer', FCA: 'buyer', FAS: 'buyer', FOB: 'buyer',
  CFR: 'seller', CIF: 'seller', CPT: 'seller', CIP: 'seller',
  DAP: 'seller', DPU: 'seller', DDP: 'seller',
}

const STAGES = [
  { pos: 0,    en: 'Factory',   id: 'Pabrik',    icon: '🏭' },
  { pos: 0.20, en: 'Terminal',  id: 'Terminal',  icon: '🚛' },
  { pos: 0.38, en: 'Port',      id: 'Pelabuhan', icon: '⚓' },
  { pos: 0.62, en: 'Ocean',     id: 'Laut',      icon: '🌊' },
  { pos: 0.82, en: 'Dest.',     id: 'Tujuan',    icon: '🏗️' },
  { pos: 0.98, en: 'Warehouse', id: 'Gudang',    icon: '📦' },
]

export default function IncotermTimeline({ term, lang }) {
  const [key, setKey] = useState(0)  // bump to restart animation
  const [playing, setPlaying] = useState(false)
  const [done, setDone] = useState(false)

  const tp = TRANSFER_POINTS[term.code] ?? 0.5
  const freightPayer = FREIGHT_PAYER[term.code] ?? 'split'
  const insuranceEn = t(term.insurance, 'en')

   
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPlaying(false)
    setDone(false)
    setKey(k => k + 1)
  }, [term.code])

  function play() {
    setDone(false)
    setKey(k => k + 1)
    setPlaying(true)
  }

  function reset() {
    setPlaying(false)
    setDone(false)
    setKey(k => k + 1)
  }

  // Animation duration per segment (slower at transfer point for dramatic pause)
  const totalDuration = 4.0
  const pauseFraction = 0.08  // fraction of duration spent pausing at transfer
  const sellerDuration = tp * totalDuration * (1 - pauseFraction)
  const pauseDuration = totalDuration * pauseFraction
  const buyerDuration = (1 - tp) * totalDuration * (1 - pauseFraction)

  return (
    <div className="glass-card p-5 space-y-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display font-semibold text-[#1d1d1f]">
            {lang === 'id' ? 'Alur Perjalanan Kargo' : 'Cargo Journey'}
          </h3>
          <p className="text-xs text-[#6e6e73] mt-0.5">
            {lang === 'id'
              ? 'Tekan Animasi untuk melihat kapan risiko berpindah'
              : 'Press Animate to see where risk transfers'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={reset}
            className="text-[#8e8e93] hover:text-[#1d1d1f] p-1.5 rounded-full hover:bg-white/60 transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={play}
            disabled={playing}
            className="text-xs bg-primary text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-primary/90 disabled:opacity-50 transition-colors"
          >
            <Play className="w-3 h-3" />
            {lang === 'id' ? 'Animasi' : 'Animate'}
          </button>
        </div>
      </div>

      {/* Seller / Buyer labels */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-cargo" />
          <span className="text-xs font-semibold text-cargo">
            {lang === 'id' ? 'Penjual (Seller)' : 'Seller'}
          </span>
        </div>
        <div className="text-xs text-[#8e8e93]">
          {lang === 'id' ? 'transfer risiko' : 'risk transfer'}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold text-primary">
            {lang === 'id' ? 'Pembeli (Buyer)' : 'Buyer'}
          </span>
          <span className="w-3 h-3 rounded-sm bg-primary" />
        </div>
      </div>

      {/* Timeline track */}
      <div className="relative" style={{ height: '64px' }}>

        {/* Base track */}
        <div className="absolute left-0 right-0 top-7 h-4 rounded-full bg-gray-100 overflow-hidden">
          {/* Seller zone */}
          <div
            className="absolute left-0 top-0 h-full bg-cargo/25 rounded-l-full"
            style={{ width: `${tp * 100}%` }}
          />
          {/* Buyer zone */}
          <div
            className="absolute top-0 h-full bg-primary/25 rounded-r-full"
            style={{ left: `${tp * 100}%`, right: 0 }}
          />
        </div>

        {/* Animated fill — seller side */}
        {playing && (
          <motion.div
            key={`fill-seller-${key}`}
            className="absolute left-0 top-7 h-4 bg-cargo/60 rounded-l-full origin-left"
            style={{ width: `${tp * 100}%` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: sellerDuration, ease: 'easeOut', delay: 0.2 }}
          />
        )}

        {/* Animated fill — buyer side */}
        {playing && (
          <motion.div
            key={`fill-buyer-${key}`}
            className="absolute top-7 h-4 bg-primary/60 rounded-r-full origin-left"
            style={{ left: `${tp * 100}%`, right: 0 }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: buyerDuration,
              ease: 'easeOut',
              delay: 0.2 + sellerDuration + pauseDuration,
            }}
          />
        )}

        {/* Transfer point vertical line */}
        <div
          className="absolute top-0 bottom-0 flex flex-col items-center"
          style={{ left: `${tp * 100}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-px h-full bg-danger/40" />
        </div>

        {/* Stage dots */}
        {STAGES.map(stage => (
          <div
            key={stage.pos}
            className="absolute top-7 h-4 flex items-center"
            style={{ left: `${stage.pos * 100}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 z-10" />
          </div>
        ))}

        {/* Animated ship icon */}
        <motion.div
          key={`ship-${key}`}
          className="absolute top-4 text-lg z-20 select-none"
          style={{ transform: 'translateX(-50%)' }}
          initial={{ left: '0%' }}
          animate={playing ? {
            left: [`0%`, `${tp * 100}%`, `${tp * 100}%`, '100%'],
          } : { left: '0%' }}
          transition={playing ? {
            duration: totalDuration,
            times: [0, tp * (1 - pauseFraction), tp * (1 - pauseFraction) + pauseFraction, 1],
            ease: ['easeOut', 'easeIn', 'easeIn', 'easeOut'],
          } : {}}
          onAnimationComplete={() => {
            if (playing) {
              setPlaying(false)
              setDone(true)
            }
          }}
        >
          {term.transport === 'ANY' ? '✈️' : '🚢'}
        </motion.div>

        {/* Transfer pulse flash */}
        {playing && (
          <motion.div
            key={`pulse-${key}`}
            className="absolute top-4 w-8 h-8 rounded-full bg-danger/30 z-10"
            style={{
              left: `${tp * 100}%`,
              transform: 'translate(-50%, -25%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 0], opacity: [0, 0.8, 0] }}
            transition={{
              delay: 0.2 + sellerDuration,
              duration: pauseDuration * 3,
              ease: 'easeOut',
            }}
          />
        )}
      </div>

      {/* Stage labels */}
      <div className="relative" style={{ height: '20px' }}>
        {STAGES.map(stage => (
          <div
            key={stage.pos}
            className="absolute text-center"
            style={{
              left: `${stage.pos * 100}%`,
              transform: 'translateX(-50%)',
              width: '52px',
            }}
          >
            <span className="text-xs text-[#8e8e93] leading-none">
              {lang === 'id' ? stage.id : stage.en}
            </span>
          </div>
        ))}
      </div>

      {/* Transfer info cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-cargo/10 rounded-lg p-3">
          <div className="text-xs font-semibold text-cargo mb-1">
            {lang === 'id' ? 'Seller menanggung' : 'Seller bears'}
          </div>
          <div className="text-xs text-[#6e6e73] leading-relaxed">
            {t(term.costTransferPoint || term.costTransfer, lang)}
          </div>
        </div>
        <div className="bg-primary/10 rounded-lg p-3">
          <div className="text-xs font-semibold text-primary mb-1">
            {lang === 'id' ? 'Buyer menanggung' : 'Buyer bears'}
          </div>
          <div className="text-xs text-[#6e6e73] leading-relaxed">
            {t(term.riskTransferPoint || term.riskTransfer, lang)}
          </div>
        </div>
      </div>

      {/* Freight badge */}
      <AnimatePresence>
        {(done || !playing) && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`text-xs rounded-lg px-3 py-2 font-medium flex items-center gap-2 ${
              freightPayer === 'seller'
                ? 'bg-cargo/10 text-cargo'
                : 'bg-primary/10 text-primary'
            }`}
          >
            <span>🚚</span>
            {lang === 'id'
              ? `Freight dibayar: ${freightPayer === 'seller' ? 'Seller' : 'Buyer'}`
              : `Freight paid by: ${freightPayer === 'seller' ? 'Seller' : 'Buyer'}`
            }
            {insuranceEn !== 'None required' && (
              <span className="ml-auto opacity-60">
                🛡️ {lang === 'id' ? 'Asuransi wajib' : 'Insurance req.'}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
