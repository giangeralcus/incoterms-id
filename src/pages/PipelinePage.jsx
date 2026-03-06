import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, Gamepad2 } from 'lucide-react'
import { INCOTERMS } from '../data/incoterms'
import PipelineVisualization from '../components/pipeline/PipelineVisualization'
import DragAndDropGame from '../components/pipeline/DragAndDropGame'
import useLanguageStore from '../stores/languageStore'
import { t } from '../i18n/translations'

const TABS = [
  { id: 'explore', label: { id: 'Eksplorasi', en: 'Explore' }, icon: Eye },
  { id: 'game', label: { id: 'Game', en: 'Game' }, icon: Gamepad2 },
]

export default function PipelinePage() {
  const [tab, setTab] = useState('explore')
  const [selectedTerm, setSelectedTerm] = useState('FOB')
  const { lang } = useLanguageStore()

  return (
    <div className="space-y-9 py-5 sm:py-7">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1d1d1f]">{t({ id: 'Pipeline Supply Chain', en: 'Supply Chain Pipeline' }, lang)}</h1>
        <p className="text-[15px] text-[#6e6e73] mt-1">
          {t({ id: 'Lihat bagaimana tiap Incoterm membagi tanggung jawab antara penjual dan pembeli', en: 'See how each Incoterm splits responsibility between seller and buyer' }, lang)}
        </p>
      </motion.div>

      {/* Tab switcher */}
      <div className="flex gap-2">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              tab === id
                ? 'bg-[#e9f3ff] text-primary border border-primary/20'
                : 'bg-white/60 text-[#6e6e73] border border-[#00000010] hover:bg-white/80'
            }`}
          >
            <Icon className="w-4 h-4" />
            {t(label, lang)}
          </button>
        ))}
      </div>

      {tab === 'explore' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          {/* Incoterm selector */}
          <div className="flex flex-wrap gap-2">
            {INCOTERMS.map(term => (
              <button
                key={term.code}
                onClick={() => setSelectedTerm(term.code)}
                className={`px-3 py-1.5 rounded-full text-sm font-mono font-bold transition-colors ${
                  selectedTerm === term.code
                    ? 'bg-[#e9f3ff] text-primary border border-primary/20'
                    : 'bg-white/60 border border-[#00000010] text-[#6e6e73] hover:bg-white/80'
                }`}
              >
                {term.code}
              </button>
            ))}
          </div>

          {/* Pipeline visualization */}
          <div className="glass-card p-5">
            <PipelineVisualization incoterm={selectedTerm} />
          </div>
        </motion.div>
      )}

      {tab === 'game' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <DragAndDropGame />
        </motion.div>
      )}
    </div>
  )
}
