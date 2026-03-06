import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { ArrowLeft, ArrowRight, Truck, Ship, Plane, Shield, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { INCOTERMS, INCOTERM_GROUPS, TRANSPORT_MODES, getIncotermByCode } from '../data/incoterms'
import useLanguageStore from '../stores/languageStore'
import { translations as T, t } from '../i18n/translations'
import ResponsibilityMap from '../components/ResponsibilityMap'
import IncotermTimeline from '../components/IncotermTimeline'
import Character from '../components/PixelArt/Character'
import { CHARACTERS } from '../data/characters'

function IncotermDetail({ term, lang }) {
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
      <div className="glass-card p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-3xl">{term.emoji}</span>
              <h1 className="font-display text-2xl font-semibold text-[#1d1d1f]">{term.code}</h1>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                term.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                term.difficulty === 'intermediate' ? 'bg-amber-100 text-amber-700' :
                'bg-red-100 text-red-700'
              }`}>{t(T.scenario[term.difficulty], lang)}</span>
            </div>
            <p className="text-[#6e6e73]">{t(term.name, lang)}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {t(T.learn.group, lang)} {term.group}: {t(groupInfo.name, lang)}
            </span>
            <Character
              sprites={CHARACTERS['trader']}
              paletteName="trader"
              state="idle"
              zoom={2}
            />
          </div>
        </div>

        {/* Transport Mode */}
        <div className="flex items-center gap-2 text-sm text-[#6e6e73] mb-4">
          {term.transport === 'ANY' ? (
            <>
              <Truck className="w-4 h-4" /><Ship className="w-4 h-4" /><Plane className="w-4 h-4" />
              <span>{t(TRANSPORT_MODES.ANY, lang)}</span>
            </>
          ) : (
            <>
              <Ship className="w-4 h-4" />
              <span>{t(TRANSPORT_MODES.SEA, lang)}</span>
            </>
          )}
        </div>

        {/* Key Points */}
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="bg-danger/5 rounded-xl p-3">
            <div className="text-xs font-semibold text-danger mb-1">{t(T.learn.riskTransfer, lang)}</div>
            <div className="text-sm text-[#1d1d1f]">{t(term.riskTransfer, lang)}</div>
          </div>
          <div className="bg-primary/5 rounded-xl p-3">
            <div className="text-xs font-semibold text-primary mb-1">{t(T.learn.costTransfer, lang)}</div>
            <div className="text-sm text-[#1d1d1f]">{t(term.costTransfer, lang)}</div>
          </div>
          <div className="bg-secondary/5 rounded-xl p-3">
            <div className="text-xs font-semibold text-secondary mb-1">{t(T.learn.insurance, lang)}</div>
            <div className="text-sm text-[#1d1d1f]">{t(term.insurance, lang)}</div>
          </div>
        </div>
      </div>

      {/* Interactive Journey Timeline */}
      <IncotermTimeline term={term} lang={lang} />

      {/* Obligations */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="glass-card p-5">
          <h3 className="font-display font-semibold text-cargo mb-3 flex items-center gap-2">
            <Ship className="w-4 h-4" /> {t(T.learn.sellerOb, lang)}
          </h3>
<ul className="space-y-2">
            {term.sellerObligations.map((ob, idx) => (
              <li key={`seller-ob-${idx}`} className="flex items-start gap-2 text-sm text-[#1d1d1f]">
                <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                {t(ob, lang)}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-card p-5">
          <h3 className="font-display font-semibold text-primary mb-3 flex items-center gap-2">
            <Truck className="w-4 h-4" /> {t(T.learn.buyerOb, lang)}
          </h3>
<ul className="space-y-2">
            {term.buyerObligations.map((ob, idx) => (
              <li key={`buyer-ob-${idx}`} className="flex items-start gap-2 text-sm text-[#1d1d1f]">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {t(ob, lang)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Responsibility Map - interactive test */}
      <ResponsibilityMap term={term} lang={lang} />

      {/* Tips */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-secondary/5 rounded-2xl p-5 border border-secondary/20">
          <h3 className="font-display font-semibold text-secondary mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4" /> {t(T.learn.bestFor, lang)}
          </h3>
          <p className="text-sm text-[#1d1d1f]">{t(term.bestFor, lang)}</p>
        </div>
        <div className="bg-accent/5 rounded-2xl p-5 border border-accent/20">
          <h3 className="font-display font-semibold text-amber-700 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> {t(T.learn.commonMistake, lang)}
          </h3>
          <p className="text-sm text-[#1d1d1f]">{t(term.commonMistake, lang)}</p>
        </div>
      </div>

      {/* Enriched Sections */}
      {term.indonesianExample && (
        <div className="bg-red-50/50 rounded-2xl p-5 border border-red-100">
          <h3 className="font-display font-semibold text-red-700 mb-2 flex items-center gap-2">
            <span className="text-lg">&#x1F1EE;&#x1F1E9;</span> {t(T.learn.indonesianExample, lang)}
          </h3>
          <p className="text-sm text-[#1d1d1f]">{t(term.indonesianExample, lang)}</p>
        </div>
      )}

      {term.keyTrap && (
        <div className="bg-amber-50/50 rounded-2xl p-5 border border-amber-200">
          <h3 className="font-display font-semibold text-amber-700 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> {t(T.learn.keyTrap, lang)}
          </h3>
          <p className="text-sm text-[#1d1d1f]">{t(term.keyTrap, lang)}</p>
        </div>
      )}

      {term.confusedWith && term.confusedWith.length > 0 && (
        <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100">
          <h3 className="font-display font-semibold text-blue-700 mb-3">{t(T.learn.confusedWith, lang)}</h3>
<div className="flex flex-wrap gap-2">
            {term.confusedWith.map((item) => (
              <span key={item} className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {term.changes2020 && (
        <div className="bg-purple-50/50 rounded-2xl p-5 border border-purple-100">
          <h3 className="font-display font-semibold text-purple-700 mb-2">{t(T.learn.changes2020, lang)}</h3>
          <p className="text-sm text-[#1d1d1f]">{t(term.changes2020, lang)}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        {(() => {
          const idx = INCOTERMS.findIndex(i => i.code === term.code)
          const prev = idx > 0 ? INCOTERMS[idx - 1] : null
          const next = idx < INCOTERMS.length - 1 ? INCOTERMS[idx + 1] : null
          return (
            <>
              {prev ? (
                <Link to={`/learn/${prev.code}`} className="flex items-center gap-2 text-sm text-[#6e6e73] hover:text-primary">
                  <ArrowLeft className="w-4 h-4" /> {prev.code} - {t(prev.name, lang)}
                </Link>
              ) : <div />}
              {next ? (
                <Link to={`/learn/${next.code}`} className="flex items-center gap-2 text-sm text-[#6e6e73] hover:text-primary">
                  {next.code} - {t(next.name, lang)} <ArrowRight className="w-4 h-4" />
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
  const { lang } = useLanguageStore()
  const selectedTerm = incoterm ? getIncotermByCode(incoterm.toUpperCase()) : null

  if (selectedTerm) {
    return (
      <div>
        <Link to="/learn" className="inline-flex items-center gap-1 text-sm text-[#6e6e73] hover:text-primary mb-4">
          <ArrowLeft className="w-4 h-4" /> {t(T.learn.allIncoterms, lang)}
        </Link>
        <LayoutGroup>
          <AnimatePresence mode="wait">
            <IncotermDetail key={selectedTerm.code} term={selectedTerm} lang={lang} />
          </AnimatePresence>
        </LayoutGroup>
      </div>
    )
  }

  return (
    <div className="space-y-9 py-5 sm:py-7">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1d1d1f]">{t(T.learn.title, lang)}</h1>
          <p className="text-[#6e6e73] text-sm mt-1">
            {t(T.learn.subtitle, lang)}
          </p>
        </div>
        <Character
          sprites={CHARACTERS['agent']}
          paletteName="agent"
          state="walk"
          zoom={2}
        />
      </div>

      {Object.entries(INCOTERM_GROUPS).map(([groupKey, group]) => {
        const terms = INCOTERMS.filter(tm => tm.group === groupKey)
        return (
          <div key={groupKey}>
            <h2 className="text-sm font-semibold text-[#8e8e93] uppercase tracking-wider mb-2">
              {t(T.learn.group, lang)} {groupKey}: {t(group.name, lang)}
            </h2>
            <p className="text-xs text-[#8e8e93] mb-3">{t(group.description, lang)}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {terms.map((term, i) => (
                <motion.div
                  key={term.code}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i }}
                >
                <Link
                  to={`/learn/${term.code}`}
                  className="glass-card glass-card-hover p-4 relative overflow-hidden flex items-start gap-3"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] gradient-accent rounded-t-2xl" />
                  <span className="text-2xl">{term.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-primary">{term.code}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        term.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                        term.difficulty === 'intermediate' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>{t(T.scenario[term.difficulty], lang)}</span>
                    </div>
                    <div className="text-sm text-[#1d1d1f]">{t(term.name, lang)}</div>
                    <div className="text-xs text-[#8e8e93] mt-1 truncate">{t(term.bestFor, lang)}</div>
                  </div>
                </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
