import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, ArrowRight, Info } from 'lucide-react'

const COST_COMPONENTS = [
  { key: 'factory', label: 'Ex-Factory Cost', category: 'origin' },
  { key: 'inlandOrigin', label: 'Inland Transport (Origin)', category: 'origin' },
  { key: 'exportClearance', label: 'Export Customs Clearance', category: 'origin' },
  { key: 'thcOrigin', label: 'THC Origin', category: 'origin' },
  { key: 'docFee', label: 'Documentation Fee', category: 'origin' },
  { key: 'blFee', label: 'B/L Fee', category: 'freight' },
  { key: 'oceanFreight', label: 'Ocean Freight', category: 'freight' },
  { key: 'insurance', label: 'Cargo Insurance', category: 'freight' },
  { key: 'thcDest', label: 'THC Destination', category: 'destination' },
  { key: 'importClearance', label: 'Import Customs Clearance', category: 'destination' },
  { key: 'importDuty', label: 'Import Duty', category: 'destination' },
  { key: 'vat', label: 'VAT / PPN', category: 'destination' },
  { key: 'inlandDest', label: 'Inland Transport (Dest)', category: 'destination' },
]

// Who pays: S=Seller, B=Buyer for each Incoterm
const RESPONSIBILITY = {
  EXW:  { factory: 'S', inlandOrigin: 'B', exportClearance: 'B', thcOrigin: 'B', docFee: 'B', blFee: 'B', oceanFreight: 'B', insurance: 'B', thcDest: 'B', importClearance: 'B', importDuty: 'B', vat: 'B', inlandDest: 'B' },
  FCA:  { factory: 'S', inlandOrigin: 'S', exportClearance: 'S', thcOrigin: 'B', docFee: 'S', blFee: 'B', oceanFreight: 'B', insurance: 'B', thcDest: 'B', importClearance: 'B', importDuty: 'B', vat: 'B', inlandDest: 'B' },
  FAS:  { factory: 'S', inlandOrigin: 'S', exportClearance: 'S', thcOrigin: 'S', docFee: 'S', blFee: 'B', oceanFreight: 'B', insurance: 'B', thcDest: 'B', importClearance: 'B', importDuty: 'B', vat: 'B', inlandDest: 'B' },
  FOB:  { factory: 'S', inlandOrigin: 'S', exportClearance: 'S', thcOrigin: 'S', docFee: 'S', blFee: 'S', oceanFreight: 'B', insurance: 'B', thcDest: 'B', importClearance: 'B', importDuty: 'B', vat: 'B', inlandDest: 'B' },
  CFR:  { factory: 'S', inlandOrigin: 'S', exportClearance: 'S', thcOrigin: 'S', docFee: 'S', blFee: 'S', oceanFreight: 'S', insurance: 'B', thcDest: 'B', importClearance: 'B', importDuty: 'B', vat: 'B', inlandDest: 'B' },
  CIF:  { factory: 'S', inlandOrigin: 'S', exportClearance: 'S', thcOrigin: 'S', docFee: 'S', blFee: 'S', oceanFreight: 'S', insurance: 'S', thcDest: 'B', importClearance: 'B', importDuty: 'B', vat: 'B', inlandDest: 'B' },
  CPT:  { factory: 'S', inlandOrigin: 'S', exportClearance: 'S', thcOrigin: 'S', docFee: 'S', blFee: 'S', oceanFreight: 'S', insurance: 'B', thcDest: 'B', importClearance: 'B', importDuty: 'B', vat: 'B', inlandDest: 'B' },
  CIP:  { factory: 'S', inlandOrigin: 'S', exportClearance: 'S', thcOrigin: 'S', docFee: 'S', blFee: 'S', oceanFreight: 'S', insurance: 'S', thcDest: 'B', importClearance: 'B', importDuty: 'B', vat: 'B', inlandDest: 'B' },
  DAP:  { factory: 'S', inlandOrigin: 'S', exportClearance: 'S', thcOrigin: 'S', docFee: 'S', blFee: 'S', oceanFreight: 'S', insurance: 'S', thcDest: 'S', importClearance: 'B', importDuty: 'B', vat: 'B', inlandDest: 'S' },
  DPU:  { factory: 'S', inlandOrigin: 'S', exportClearance: 'S', thcOrigin: 'S', docFee: 'S', blFee: 'S', oceanFreight: 'S', insurance: 'S', thcDest: 'S', importClearance: 'B', importDuty: 'B', vat: 'B', inlandDest: 'S' },
  DDP:  { factory: 'S', inlandOrigin: 'S', exportClearance: 'S', thcOrigin: 'S', docFee: 'S', blFee: 'S', oceanFreight: 'S', insurance: 'S', thcDest: 'S', importClearance: 'S', importDuty: 'S', vat: 'S', inlandDest: 'S' },
}

// Default costs (USD) for Jakarta -> Rotterdam 20'
const DEFAULT_COSTS = {
  factory: 10000,
  inlandOrigin: 150,
  exportClearance: 75,
  thcOrigin: 200,
  docFee: 40,
  blFee: 60,
  oceanFreight: 1200,
  insurance: 120,
  thcDest: 280,
  importClearance: 100,
  importDuty: 500,
  vat: 1100,
  inlandDest: 300,
}

const COMPARE_TERMS = ['EXW', 'FOB', 'CIF', 'DAP', 'DDP']

export default function CostSimulator() {
  const [costs, setCosts] = useState(DEFAULT_COSTS)
  const [selectedTerms, setSelectedTerms] = useState(COMPARE_TERMS)

  const toggleTerm = (term) => {
    setSelectedTerms(prev =>
      prev.includes(term) ? prev.filter(t => t !== term) : [...prev, term]
    )
  }

  const calcTotal = (term, who) => {
    return COST_COMPONENTS.reduce((sum, comp) => {
      if (RESPONSIBILITY[term][comp.key] === who) {
        return sum + (costs[comp.key] || 0)
      }
      return sum
    }, 0)
  }

  return (
    <div className="space-y-6 py-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-accent" />
          Cost Simulator
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          See how the same shipment costs differ under each Incoterm. Edit costs to match your scenario.
        </p>
      </div>

      {/* Cost Inputs */}
      <div className="bg-white rounded-xl p-5 shadow-sm border">
        <h3 className="font-semibold text-gray-900 mb-3">Cost Components (USD)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {COST_COMPONENTS.map(comp => (
            <div key={comp.key}>
              <label className="text-xs text-gray-500 block mb-1">{comp.label}</label>
              <input
                type="number"
                value={costs[comp.key]}
                onChange={e => setCosts({ ...costs, [comp.key]: Number(e.target.value) })}
                className="w-full border rounded-lg px-3 py-1.5 text-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Term Selector */}
      <div className="flex flex-wrap gap-2">
        {Object.keys(RESPONSIBILITY).map(term => (
          <button
            key={term}
            onClick={() => toggleTerm(term)}
            className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-colors ${
              selectedTerms.includes(term)
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-400'
            }`}
          >
            {term}
          </button>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 text-gray-500 font-normal text-xs">Cost Component</th>
              {selectedTerms.map(term => (
                <th key={term} className="p-3 text-center font-mono font-bold text-primary text-xs">{term}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COST_COMPONENTS.map(comp => (
              <tr key={comp.key} className="border-b last:border-0">
                <td className="p-3 text-gray-700 text-xs">{comp.label}</td>
                {selectedTerms.map(term => {
                  const who = RESPONSIBILITY[term][comp.key]
                  return (
                    <td key={term} className={`p-3 text-center text-xs font-medium ${
                      who === 'S' ? 'bg-cargo/5 text-cargo' : 'bg-primary/5 text-primary'
                    }`}>
                      <span className="font-bold">{who}</span>
                      <span className="text-gray-400 ml-1">${costs[comp.key]}</span>
                    </td>
                  )
                })}
              </tr>
            ))}
            {/* Totals */}
            <tr className="border-t-2 bg-gray-50">
              <td className="p-3 font-semibold text-gray-900 text-xs">Seller Total</td>
              {selectedTerms.map(term => (
                <td key={term} className="p-3 text-center font-bold text-cargo text-xs">
                  ${calcTotal(term, 'S').toLocaleString()}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 font-semibold text-gray-900 text-xs">Buyer Total</td>
              {selectedTerms.map(term => (
                <td key={term} className="p-3 text-center font-bold text-primary text-xs">
                  ${calcTotal(term, 'B').toLocaleString()}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-cargo/20 border border-cargo/30" />
          S = Seller pays
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-primary/20 border border-primary/30" />
          B = Buyer pays
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 flex items-start gap-2">
        <Info className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
        <p className="text-xs text-blue-700">
          Note: This is a simplified model. Real costs vary by route, carrier, season, and negotiation.
          The responsibility matrix follows Incoterms 2020 standard obligations. Some charges
          (like THC) may be allocated differently based on local port customs.
        </p>
      </div>
    </div>
  )
}
