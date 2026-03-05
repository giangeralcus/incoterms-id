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
    <div className="space-y-6 py-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{t({ id: 'Pipeline Supply Chain', en: 'Supply Chain Pipeline' }, lang)}</h1>
        <p className="text-sm text-gray-500 mt-1">
          {t({ id: 'Lihat bagaimana tiap Incoterm membagi tanggung jawab antara penjual dan pembeli', en: 'See how each Incoterm splits responsibility between seller and buyer' }, lang)}
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-2">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === id
                ? 'bg-ocean text-white'
                : 'bg-white text-gray-500 border hover:bg-gray-50'
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
                className={`px-3 py-1.5 rounded-lg text-sm font-mono font-bold transition-colors ${
                  selectedTerm === term.code
                    ? 'bg-ocean text-white'
                    : 'bg-white border text-gray-600 hover:bg-gray-50'
                }`}
              >
                {term.code}
              </button>
            ))}
          </div>

          {/* Pipeline visualization */}
          <div className="bg-white rounded-xl p-4 shadow-sm border">
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
