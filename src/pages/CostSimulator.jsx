import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, ArrowRight, Info, DollarSign, Landmark, ChevronDown, ChevronUp, HelpCircle, Ship, BookOpen, ToggleLeft, ToggleRight } from 'lucide-react'

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

const PORT_CHARGES = [
  { label: 'Demurrage (20\')', value: 'IDR 675,000/day (days 1-4), IDR 1,350,000/day (day 5+)' },
  { label: 'Demurrage (40\')', value: 'IDR 1,135,000/day (days 1-4), IDR 2,270,000/day (day 5+)' },
  { label: 'D/O Fee', value: 'IDR 500,000 - 1,500,000' },
  { label: 'Storage', value: 'IDR 30,000 - 80,000/day/TEU' },
  { label: 'Lift On/Off', value: 'IDR 500,000 - 800,000 per move' },
  { label: 'ISPS Security', value: 'USD 5 - 15/TEU' },
]

const ABBREVIATIONS = [
  { abbr: 'BM', full: 'Bea Masuk', en: 'Import Duty' },
  { abbr: 'PPN', full: 'Pajak Pertambahan Nilai', en: 'Value Added Tax (VAT)' },
  { abbr: 'PPh 22', full: 'Pajak Penghasilan Pasal 22', en: 'Income Tax Art. 22' },
  { abbr: 'PPnBM', full: 'Pajak Penjualan Barang Mewah', en: 'Luxury Goods Tax' },
  { abbr: 'NDPBM', full: 'Nilai Dasar Perhitungan Bea Masuk', en: 'Customs Value for Duty' },
  { abbr: 'API', full: 'Angka Pengenal Importir', en: 'Importer License Number' },
  { abbr: 'PPJK', full: 'Pengusaha Pengurusan Jasa Kepabeanan', en: 'Licensed Customs Broker' },
  { abbr: 'PIB', full: 'Pemberitahuan Impor Barang', en: 'Import Declaration' },
  { abbr: 'SPPB', full: 'Surat Persetujuan Pengeluaran Barang', en: 'Goods Release Approval' },
  { abbr: 'D/O', full: 'Delivery Order', en: 'Container Release Document' },
]

function formatIDR(value) {
  return `Rp ${Math.round(value).toLocaleString('id-ID')}`
}

function Toggle({ enabled, onToggle, label }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex items-center gap-2 text-sm select-none"
    >
      {enabled ? (
        <ToggleRight className="w-6 h-6 text-primary" />
      ) : (
        <ToggleLeft className="w-6 h-6 text-gray-400" />
      )}
      <span className={enabled ? 'text-gray-900 font-medium' : 'text-gray-500'}>{label}</span>
    </button>
  )
}

function CollapsibleSection({ title, icon: Icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-5 h-5 text-accent" />}
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        )}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="px-4 pb-4"
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}

export default function CostSimulator() {
  const [costs, setCosts] = useState(DEFAULT_COSTS)
  const [selectedTerms, setSelectedTerms] = useState(COMPARE_TERMS)

  // Tax calculator state
  const [cifUSD, setCifUSD] = useState(10000)
  const [exchangeRate, setExchangeRate] = useState(15500)
  const [dutyRate, setDutyRate] = useState(5)
  const [hasAPI, setHasAPI] = useState(true)
  const [isLuxury, setIsLuxury] = useState(false)
  const [ppnbmRate, setPpnbmRate] = useState(20)

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

  // Tax calculations
  const cifIDR = cifUSD * exchangeRate
  const beaMasuk = cifIDR * (dutyRate / 100)
  const ndpbm = cifIDR + beaMasuk
  const pph22Rate = hasAPI ? 2.5 : 7.5
  const pph22 = ndpbm * (pph22Rate / 100)
  const ppn = ndpbm * 0.12
  const ppnbm = isLuxury ? ndpbm * (ppnbmRate / 100) : 0
  const totalTax = beaMasuk + pph22 + ppn + ppnbm
  const totalLandedCost = cifIDR + totalTax
  const effectiveRate = cifIDR > 0 ? (totalTax / cifIDR * 100) : 0

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

      {/* ───────────────────── NEW SECTIONS BELOW ───────────────────── */}

      {/* Section A: Indonesian Import Tax Calculator */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-5 border-b">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Landmark className="w-5 h-5 text-accent" />
            Indonesian Import Tax Calculator
          </h2>
          <p className="text-gray-500 text-xs mt-1">
            Calculate Bea Masuk, PPN, PPh 22, and PPnBM based on Indonesian customs regulations (2025/2026).
          </p>
        </div>

        <div className="p-5 space-y-5">
          {/* Calculator Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500 block mb-1">CIF Value (USD)</label>
              <input
                type="number"
                value={cifUSD}
                onChange={e => setCifUSD(Number(e.target.value) || 0)}
                className="w-full border rounded-lg px-3 py-2 text-sm"
                min="0"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Exchange Rate (IDR/USD)</label>
              <input
                type="number"
                value={exchangeRate}
                onChange={e => setExchangeRate(Number(e.target.value) || 0)}
                className="w-full border rounded-lg px-3 py-2 text-sm"
                min="0"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">
                Import Duty Rate (%)
              </label>
              <input
                type="number"
                value={dutyRate}
                onChange={e => setDutyRate(Number(e.target.value) || 0)}
                className="w-full border rounded-lg px-3 py-2 text-sm"
                min="0"
                max="150"
                step="0.1"
              />
              <p className="text-[10px] text-gray-400 mt-1">Varies by HS code (0-150%)</p>
            </div>
            <div className="space-y-3 pt-1">
              <Toggle
                enabled={hasAPI}
                onToggle={() => setHasAPI(!hasAPI)}
                label={hasAPI ? 'Has API license (PPh 22 = 2.5%)' : 'No API license (PPh 22 = 7.5%)'}
              />
              <Toggle
                enabled={isLuxury}
                onToggle={() => setIsLuxury(!isLuxury)}
                label="Luxury goods (PPnBM applies)"
              />
            </div>
          </div>

          {/* PPnBM Rate - only visible when luxury toggle is on */}
          {isLuxury && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="sm:w-1/2"
            >
              <label className="text-xs text-gray-500 block mb-1">PPnBM Rate (%)</label>
              <input
                type="number"
                value={ppnbmRate}
                onChange={e => setPpnbmRate(Number(e.target.value) || 0)}
                className="w-full border rounded-lg px-3 py-2 text-sm"
                min="0"
                max="200"
                step="1"
              />
              <p className="text-[10px] text-gray-400 mt-1">Luxury Goods Tax rate (10-200%)</p>
            </motion.div>
          )}

          {/* Calculation Results */}
          <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm space-y-1">
            <div className="flex justify-between text-gray-700">
              <span>CIF Value (IDR)</span>
              <span>{formatIDR(cifIDR)}</span>
            </div>

            <div className="flex justify-between text-gray-700">
              <span>+ Bea Masuk (Import Duty) @ {dutyRate}%</span>
              <span>{formatIDR(beaMasuk)}</span>
            </div>

            <div className="border-t border-dashed border-gray-300 my-1" />

            <div className="flex justify-between text-gray-900 font-semibold">
              <span>= NDPBM (Customs Value)</span>
              <span>{formatIDR(ndpbm)}</span>
            </div>

            <div className="border-t border-dashed border-gray-300 my-1" />

            <div className="flex justify-between text-gray-700">
              <span>+ PPh 22 (Income Tax) @ {pph22Rate}%</span>
              <span>{formatIDR(pph22)}</span>
            </div>

            <div className="flex justify-between text-gray-700">
              <span>+ PPN (VAT) @ 12%</span>
              <span>{formatIDR(ppn)}</span>
            </div>

            {isLuxury && (
              <div className="flex justify-between text-gray-700">
                <span>+ PPnBM (Luxury Tax) @ {ppnbmRate}%</span>
                <span>{formatIDR(ppnbm)}</span>
              </div>
            )}

            <div className="border-t-2 border-gray-400 my-2" />

            <div className="flex justify-between text-cargo font-bold">
              <span>TOTAL TAX</span>
              <span>{formatIDR(totalTax)}</span>
            </div>

            <div className="flex justify-between text-primary font-bold text-base">
              <span>TOTAL LANDED COST</span>
              <span>{formatIDR(totalLandedCost)}</span>
            </div>

            <div className="flex justify-between text-gray-400 text-xs mt-1">
              <span>Effective tax rate on CIF</span>
              <span>{effectiveRate.toFixed(1)}%</span>
            </div>
          </div>

          {/* Calculator Notes */}
          <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
            <div className="text-xs text-amber-700 space-y-1">
              <p>
                <strong>PPh 22</strong> is a prepaid income tax (creditable against annual PPh).
                Rate is 2.5% with API/NIB or 7.5% without.
              </p>
              <p>
                <strong>PPN</strong> is 12% (since 2025). Base = NDPBM (CIF + BM).
              </p>
              <p>
                Actual rates depend on HS Code classification. Check INSW (insw.go.id) for your product.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section B: Port Charges Quick Reference */}
      <CollapsibleSection title="Indonesian Port Charges Reference" icon={Ship} defaultOpen={false}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4 text-gray-500 font-normal text-xs">Charge</th>
                <th className="text-left py-2 text-gray-500 font-normal text-xs">Typical Range</th>
              </tr>
            </thead>
            <tbody>
              {PORT_CHARGES.map((charge, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-2 pr-4 text-xs font-medium text-gray-700">{charge.label}</td>
                  <td className="py-2 text-xs text-gray-600 font-mono">{charge.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 bg-blue-50 rounded-lg p-3 flex items-start gap-2">
          <Info className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
          <p className="text-xs text-blue-700">
            Rates shown are for Tanjung Priok (Jakarta). Other ports may differ.
            Free days vary by shipping line (typically 3-4 days for demurrage, 4-7 days for detention).
          </p>
        </div>
      </CollapsibleSection>

      {/* Section C: Common Abbreviations */}
      <CollapsibleSection title="Common Abbreviations Glossary" icon={BookOpen} defaultOpen={false}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
          {ABBREVIATIONS.map((item, i) => (
            <div key={i} className="flex items-baseline gap-2 py-1.5 border-b border-gray-100 last:border-0">
              <span className="font-mono font-bold text-primary text-xs w-14 shrink-0">{item.abbr}</span>
              <div className="text-xs">
                <span className="text-gray-700">{item.full}</span>
                <span className="text-gray-400 ml-1">({item.en})</span>
              </div>
            </div>
          ))}
        </div>
      </CollapsibleSection>
    </div>
  )
}
