import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Truck, Ship, Plane, Shield, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { INCOTERMS, INCOTERM_GROUPS, getIncotermByCode } from '../data/incoterms'

function IncotermDetail({ term }) {
  const groupInfo = INCOTERM_GROUPS[term.group]

  return (
    <motion.div
      key={term.code}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-3xl">{term.emoji}</span>
              <h1 className="text-2xl font-bold text-gray-900">{term.code}</h1>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                term.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                term.difficulty === 'intermediate' ? 'bg-amber-100 text-amber-700' :
                'bg-red-100 text-red-700'
              }`}>{term.difficulty}</span>
            </div>
            <p className="text-gray-500">{term.name}</p>
          </div>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            Group {term.group}: {groupInfo.name}
          </span>
        </div>

        {/* Transport Mode */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          {term.transport === 'ANY' ? (
            <>
              <Truck className="w-4 h-4" /><Ship className="w-4 h-4" /><Plane className="w-4 h-4" />
              <span>Any mode of transport</span>
            </>
          ) : (
            <>
              <Ship className="w-4 h-4" />
              <span>Sea and inland waterway only</span>
            </>
          )}
        </div>

        {/* Key Points */}
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="bg-danger/5 rounded-lg p-3">
            <div className="text-xs font-semibold text-danger mb-1">Risk Transfer</div>
            <div className="text-sm text-gray-700">{term.riskTransfer}</div>
          </div>
          <div className="bg-primary/5 rounded-lg p-3">
            <div className="text-xs font-semibold text-primary mb-1">Cost Transfer</div>
            <div className="text-sm text-gray-700">{term.costTransfer}</div>
          </div>
          <div className="bg-secondary/5 rounded-lg p-3">
            <div className="text-xs font-semibold text-secondary mb-1">Insurance</div>
            <div className="text-sm text-gray-700">{term.insurance}</div>
          </div>
        </div>
      </div>

      {/* Obligations */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border">
          <h3 className="font-semibold text-cargo mb-3 flex items-center gap-2">
            <Ship className="w-4 h-4" /> Seller's Obligations
          </h3>
          <ul className="space-y-2">
            {term.sellerObligations.map((ob, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                {ob}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border">
          <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
            <Truck className="w-4 h-4" /> Buyer's Obligations
          </h3>
          <ul className="space-y-2">
            {term.buyerObligations.map((ob, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {ob}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tips */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-secondary/5 rounded-xl p-5 border border-secondary/20">
          <h3 className="font-semibold text-secondary mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4" /> Best For
          </h3>
          <p className="text-sm text-gray-700">{term.bestFor}</p>
        </div>
        <div className="bg-accent/5 rounded-xl p-5 border border-accent/20">
          <h3 className="font-semibold text-amber-700 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> Common Mistake
          </h3>
          <p className="text-sm text-gray-700">{term.commonMistake}</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        {(() => {
          const idx = INCOTERMS.findIndex(i => i.code === term.code)
          const prev = idx > 0 ? INCOTERMS[idx - 1] : null
          const next = idx < INCOTERMS.length - 1 ? INCOTERMS[idx + 1] : null
          return (
            <>
              {prev ? (
                <Link to={`/learn/${prev.code}`} className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary">
                  <ArrowLeft className="w-4 h-4" /> {prev.code} - {prev.name}
                </Link>
              ) : <div />}
              {next ? (
                <Link to={`/learn/${next.code}`} className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary">
                  {next.code} - {next.name} <ArrowRight className="w-4 h-4" />
                </Link>
              ) : <div />}
            </>
          )
        })()}
      </div>
    </motion.div>
  )
}

export default function LearnPage() {
  const { incoterm } = useParams()
  const selectedTerm = incoterm ? getIncotermByCode(incoterm.toUpperCase()) : null

  if (selectedTerm) {
    return (
      <div>
        <Link to="/learn" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary mb-4">
          <ArrowLeft className="w-4 h-4" /> All Incoterms
        </Link>
        <AnimatePresence mode="wait">
          <IncotermDetail term={selectedTerm} />
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="space-y-6 py-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Learn Incoterms 2020</h1>
        <p className="text-gray-500 text-sm mt-1">
          Tap any Incoterm to see detailed obligations, risk/cost transfer points, and Indonesian trade context.
        </p>
      </div>

      {Object.entries(INCOTERM_GROUPS).map(([groupKey, group]) => {
        const terms = INCOTERMS.filter(t => t.group === groupKey)
        return (
          <div key={groupKey}>
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Group {groupKey}: {group.name}
            </h2>
            <p className="text-xs text-gray-400 mb-3">{group.description}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {terms.map(term => (
                <Link
                  key={term.code}
                  to={`/learn/${term.code}`}
                  className="bg-white rounded-xl p-4 shadow-sm border hover:shadow-md transition-shadow flex items-start gap-3"
                >
                  <span className="text-2xl">{term.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-primary">{term.code}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        term.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                        term.difficulty === 'intermediate' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>{term.difficulty}</span>
                    </div>
                    <div className="text-sm text-gray-700">{term.name}</div>
                    <div className="text-xs text-gray-400 mt-1 truncate">{term.bestFor}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
