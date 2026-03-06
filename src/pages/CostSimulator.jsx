import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, Info, Landmark, ChevronDown, ChevronUp, HelpCircle, Ship, BookOpen, ToggleLeft, ToggleRight } from 'lucide-react'
import useLanguageStore from '../stores/languageStore'
import { translations as T, t } from '../i18n/translations'
import Character from '../components/PixelArt/Character'
import { CHARACTERS } from '../data/characters'

const COST_COMPONENTS = [
  { key: 'factory', labelKey: 'factory', category: 'origin' },
  { key: 'inlandOrigin', labelKey: 'inlandOrigin', category: 'origin' },
  { key: 'exportClearance', labelKey: 'exportClearance', category: 'origin' },
  { key: 'thcOrigin', labelKey: 'thcOrigin', category: 'origin' },
  { key: 'docFee', labelKey: 'docFee', category: 'origin' },
  { key: 'blFee', labelKey: 'blFee', category: 'freight' },
  { key: 'oceanFreight', labelKey: 'oceanFreight', category: 'freight' },
  { key: 'insurance', labelKey: 'insurance', category: 'freight' },
  { key: 'thcDest', labelKey: 'thcDest', category: 'destination' },
  { key: 'importClearance', labelKey: 'importClearance', category: 'destination' },
  { key: 'importDuty', labelKey: 'importDuty', category: 'destination' },
  { key: 'vat', labelKey: 'vat', category: 'destination' },
  { key: 'inlandDest', labelKey: 'inlandDest', category: 'destination' },
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

const LEGAL_BASICS = [
  {
    title: {
      id: 'Landasan utama kepabeanan',
      en: 'Core customs legal framework',
    },
    detail: {
      id: 'Kegiatan ekspor-impor di Indonesia mengacu pada UU Kepabeanan: UU No. 10 Tahun 1995 yang telah diubah melalui UU No. 17 Tahun 2006.',
      en: 'Export-import activities in Indonesia are governed by the Customs Law: Law No. 10/1995 as amended by Law No. 17/2006.',
    },
  },
  {
    title: {
      id: 'Kewajiban pemberitahuan pabean',
      en: 'Customs declaration obligations',
    },
    detail: {
      id: 'Dalam impor untuk dipakai, importir wajib menyampaikan pemberitahuan pabean serta memenuhi ketentuan larangan/pembatasan (lartas) yang berlaku.',
      en: 'For import for use, importers must submit customs declarations and comply with applicable prohibition/restriction (lartas) rules.',
    },
  },
  {
    title: {
      id: 'Registrasi pelaku usaha',
      en: 'Business registration',
    },
    detail: {
      id: 'Pelaku usaha perlu registrasi kepabeanan sebelum proses impor/ekspor formal agar dapat mengakses layanan kepabeanan.',
      en: 'Businesses need customs registration before formal import/export processes so they can access customs services.',
    },
  },
  {
    title: {
      id: 'Klasifikasi HS/BTKI menentukan pungutan',
      en: 'HS/BTKI classification determines import charges',
    },
    detail: {
      id: 'Tarif bea masuk dan pajak impor dihitung berdasarkan klasifikasi HS/BTKI, termasuk kemungkinan tarif preferensi FTA jika syarat asal barang terpenuhi.',
      en: 'Import duty and import taxes are calculated from HS/BTKI classification, including potential FTA preferential rates if rules of origin are met.',
    },
  },
]

const LEGAL_REFERENCES = [
  {
    label: { id: 'UU No. 10 Tahun 1995 (Kepabeanan)', en: 'Law No. 10/1995 (Customs)' },
    url: 'https://jdih.dpr.go.id/setjen/detail-dokumen/tipe/uu/id/502',
  },
  {
    label: { id: 'UU No. 17 Tahun 2006 (Perubahan UU Kepabeanan)', en: 'Law No. 17/2006 (Amendment to Customs Law)' },
    url: 'https://jdih.dpr.go.id/setjen/detail-dokumen/tipe/uu/id/73',
  },
  {
    label: { id: 'DJBC - Ketentuan Kepabeanan di Bidang Impor', en: 'DGCE - Customs Provisions in Imports' },
    url: 'https://www.beacukai.go.id/faq/ketentuan-kepabeanan-di-bidang-impor.html',
  },
  {
    label: { id: 'DJBC - Registrasi Kepabeanan', en: 'DGCE - Customs Registration' },
    url: 'https://www.beacukai.go.id/faq/registrasi-kepabeanan.html',
  },
  {
    label: { id: 'DJBC - BTKI dan Tarif', en: 'DGCE - BTKI and Tariff' },
    url: 'https://www.beacukai.go.id/btki-dan-tarif',
  },
  {
    label: { id: 'INSW Portal Nasional', en: 'National INSW Portal' },
    url: 'https://www.insw.go.id',
  },
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
        <ToggleLeft className="w-6 h-6 text-[#8e8e93]" />
      )}
      <span className={enabled ? 'text-[#1d1d1f] font-medium' : 'text-[#6e6e73]'}>{label}</span>
    </button>
  )
}

function CollapsibleSection({ title, icon: Icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-[rgba(0,0,0,0.02)] transition-colors"
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-5 h-5 text-accent" />}
          <h3 className="font-display font-semibold text-[#1d1d1f]">{title}</h3>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-[#8e8e93]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#8e8e93]" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="px-4 pb-4 overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function CostSimulator() {
  const { lang } = useLanguageStore()
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
    <div className="space-y-8 py-5 sm:py-7">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1d1d1f] flex items-center gap-2">
            <Calculator className="w-6 h-6 text-accent" />
            {t(T.cost.title, lang)}
          </h1>
          <p className="text-[#6e6e73] text-[15px] mt-1">
            {t(T.cost.subtitle, lang)}
          </p>
        </div>
        <Character
          sprites={CHARACTERS['customs']}
          paletteName="customs"
          state="idle"
          zoom={2}
        />
      </div>

      {/* Cost Inputs */}
      <div className="glass-card p-5">
        <h3 className="font-display font-semibold text-[#1d1d1f] mb-3">{t(T.cost.costComponents, lang)}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {COST_COMPONENTS.map(comp => (
            <div key={comp.key}>
              <label className="text-xs text-[#6e6e73] block mb-1">{t(T.costLabels[comp.labelKey], lang)}</label>
              <input
                type="number"
                value={costs[comp.key]}
                onChange={e => setCosts({ ...costs, [comp.key]: Number(e.target.value) })}
                className="w-full apple-input"
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
                : 'bg-[rgba(245,245,247,0.6)] text-[#8e8e93] border border-[#00000010]'
            }`}
          >
            {term}
          </button>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="glass-card overflow-hidden overflow-x-auto relative">
        <div className="absolute inset-x-0 top-0 h-[2px] gradient-accent" />
        {/* Legend */}
        <div className="flex gap-4 text-xs mb-2 px-3 pt-4">
          <span className="flex items-center gap-1">
            <span className="inline-block w-5 h-5 rounded text-center font-bold bg-cargo/10 text-cargo leading-5">S</span>
            {t(T.common.seller, lang)}
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-5 h-5 rounded text-center font-bold bg-primary/10 text-primary leading-5">B</span>
            {t(T.common.buyer, lang)}
          </span>
          <span className="flex items-center gap-1 text-[#8e8e93]">
            {t(T.cost.costsInUsd, lang)}
          </span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 text-[#6e6e73] font-medium text-xs">{t(T.cost.costComponent, lang)}</th>
              {selectedTerms.map(term => (
                <th key={term} className="p-3 text-center font-mono font-bold text-primary text-xs">{term}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COST_COMPONENTS.map(comp => (
              <tr key={comp.key} className="border-b last:border-0 hover:bg-[rgba(0,0,0,0.02)] transition-colors">
                <td className="p-3 text-[#1d1d1f] text-xs">{t(T.costLabels[comp.labelKey], lang)}</td>
                {selectedTerms.map(term => {
                  const who = RESPONSIBILITY[term][comp.key]
                  return (
                    <td key={term} className={`p-3 text-center text-xs font-medium ${
                      who === 'S' ? 'bg-cargo/5 text-cargo' : 'bg-primary/5 text-primary'
                    }`}>
                      <span className="font-bold">{who}</span>
                      <span className="text-[#8e8e93] ml-1">${costs[comp.key]}</span>
                    </td>
                  )
                })}
              </tr>
            ))}
            {/* Totals */}
            <tr className="border-t-2 bg-[#e9f3ff]/30">
              <td className="p-3 font-semibold text-[#1d1d1f] text-xs">{t(T.cost.sellerTotal, lang)}</td>
              {selectedTerms.map(term => (
                <td key={term} className="p-3 text-center font-bold text-cargo text-xs">
                  ${calcTotal(term, 'S').toLocaleString()}
                </td>
              ))}
            </tr>
            <tr className="bg-[#e9f3ff]/30">
              <td className="p-3 font-semibold text-[#1d1d1f] text-xs">{t(T.cost.buyerTotal, lang)}</td>
              {selectedTerms.map(term => (
                <td key={term} className="p-3 text-center font-bold text-primary text-xs">
                  ${calcTotal(term, 'B').toLocaleString()}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-[#e9f3ff] rounded-2xl p-4 border border-[#b8dbff]/50 flex items-start gap-2">
        <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
        <p className="text-xs text-[#1d1d1f]">
          {t(T.cost.note, lang)}
        </p>
      </div>

      {/* Section A: Indonesian Import Tax Calculator */}
      <div className="glass-card overflow-hidden">
        <div className="p-5 border-b border-[#00000010]">
          <h2 className="font-display text-lg font-semibold text-[#1d1d1f] flex items-center gap-2">
            <Landmark className="w-5 h-5 text-accent" />
            {t(T.cost.taxCalc, lang)}
          </h2>
          <p className="text-[#6e6e73] text-xs mt-1">
            {t(T.cost.taxNote, lang)}
          </p>
        </div>

        <div className="p-5 space-y-5">
          {/* Calculator Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-[#6e6e73] block mb-1">{t(T.cost.cifValue, lang)} (USD)</label>
              <input
                type="number"
                value={cifUSD}
                onChange={e => setCifUSD(Number(e.target.value) || 0)}
                className="w-full apple-input"
                min="0"
              />
            </div>
            <div>
              <label className="text-xs text-[#6e6e73] block mb-1">{t(T.cost.exchangeRate, lang)}</label>
              <input
                type="number"
                value={exchangeRate}
                onChange={e => setExchangeRate(Number(e.target.value) || 0)}
                className="w-full apple-input"
                min="0"
              />
            </div>
            <div>
              <label className="text-xs text-[#6e6e73] block mb-1">
                {t(T.cost.dutyRate, lang)}
              </label>
              <input
                type="number"
                value={dutyRate}
                onChange={e => setDutyRate(Number(e.target.value) || 0)}
                className="w-full apple-input"
                min="0"
                max="150"
                step="0.1"
              />
              <p className="text-[10px] text-[#8e8e93] mt-1">{t(T.cost.dutyRateNote, lang)}</p>
            </div>
            <div className="space-y-3 pt-1">
              <Toggle
                enabled={hasAPI}
                onToggle={() => setHasAPI(!hasAPI)}
                label={hasAPI
                  ? `${t(T.cost.hasApi, lang)} (PPh 22 = 2.5%)`
                  : `${t(T.cost.hasApi, lang)} (PPh 22 = 7.5%)`
                }
              />
              <Toggle
                enabled={isLuxury}
                onToggle={() => setIsLuxury(!isLuxury)}
                label={t(T.cost.isLuxury, lang)}
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
              <label className="text-xs text-[#6e6e73] block mb-1">{t(T.cost.ppnbmRate, lang)}</label>
              <input
                type="number"
                value={ppnbmRate}
                onChange={e => setPpnbmRate(Number(e.target.value) || 0)}
                className="w-full apple-input"
                min="0"
                max="200"
                step="1"
              />
              <p className="text-[10px] text-[#8e8e93] mt-1">{t(T.cost.ppnbmHint, lang)}</p>
            </motion.div>
          )}

          {/* Calculation Results */}
          <div className="bg-[rgba(245,245,247,0.5)] rounded-2xl p-5 font-mono text-sm space-y-1">
            <div className="font-display text-xs font-semibold text-[#8e8e93] uppercase tracking-wider mb-3">Calculation</div>
            <div className="flex justify-between text-[#1d1d1f]">
              <span>{t(T.cost.cifIdr, lang)}</span>
              <span>{formatIDR(cifIDR)}</span>
            </div>

            <div className="flex justify-between text-[#1d1d1f]">
              <span>+ {t(T.cost.beaMasuk, lang)} @ {dutyRate}%</span>
              <span>{formatIDR(beaMasuk)}</span>
            </div>

            <div className="border-t border-[#00000010] my-1" />

            <div className="flex justify-between text-[#1d1d1f] font-semibold">
              <span>= {t(T.cost.ndpbm, lang)}</span>
              <span>{formatIDR(ndpbm)}</span>
            </div>

            <div className="border-t border-[#00000010] my-1" />

            <div className="flex justify-between text-[#1d1d1f]">
              <span>+ {t(T.cost.pph22, lang)} @ {pph22Rate}%</span>
              <span>{formatIDR(pph22)}</span>
            </div>

            <div className="flex justify-between text-[#1d1d1f]">
              <span>+ {t(T.cost.ppn, lang)} @ 12%</span>
              <span>{formatIDR(ppn)}</span>
            </div>

            {isLuxury && (
              <div className="flex justify-between text-[#1d1d1f]">
                <span>+ {t(T.cost.ppnbm, lang)} @ {ppnbmRate}%</span>
                <span>{formatIDR(ppnbm)}</span>
              </div>
            )}

            <div className="border-t-2 border-[#00000010] my-2" />

            <div className="flex justify-between text-cargo font-bold">
              <span>{t(T.cost.totalTax, lang)}</span>
              <span>{formatIDR(totalTax)}</span>
            </div>

            <div className="flex justify-between text-primary font-bold text-base">
              <span>{t(T.cost.totalLanded, lang)}</span>
              <span>{formatIDR(totalLandedCost)}</span>
            </div>

            <div className="flex justify-between text-[#8e8e93] text-xs mt-1">
              <span>{t(T.cost.effectiveRate, lang)}</span>
              <span>{effectiveRate.toFixed(1)}%</span>
            </div>
          </div>

          {/* Calculator Notes */}
          <div className="bg-[#fff8e1] rounded-2xl p-4 border border-[#f0d28a]/50 flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
            <div className="text-xs text-[#7a4d00] space-y-1">
              <p>{t(T.cost.taxLinePph22, lang)}</p>
              <p>{t(T.cost.taxLinePpn, lang)}</p>
              <p>{t(T.cost.taxLineHs, lang)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section B: Port Charges Quick Reference */}
      <CollapsibleSection title={t(T.cost.portCharges, lang)} icon={Ship} defaultOpen={false}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4 text-[#6e6e73] font-normal text-xs">{t(T.cost.chargeHeader, lang)}</th>
                <th className="text-left py-2 text-[#6e6e73] font-normal text-xs">{t(T.cost.rangeHeader, lang)}</th>
              </tr>
            </thead>
            <tbody>
              {PORT_CHARGES.map((charge, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-2 pr-4 text-xs font-medium text-[#1d1d1f]">{charge.label}</td>
                  <td className="py-2 text-xs text-[#6e6e73] font-mono">{charge.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 bg-[#e9f3ff] rounded-2xl p-3 border border-[#b8dbff]/50 flex items-start gap-2">
          <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <p className="text-xs text-[#1d1d1f]">
            {t(T.cost.portNote, lang)}
          </p>
        </div>
      </CollapsibleSection>

      {/* Section C: Common Abbreviations */}
      <CollapsibleSection title={t(T.cost.glossary, lang)} icon={BookOpen} defaultOpen={false}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
          {ABBREVIATIONS.map((item, i) => (
            <div key={i} className="flex items-baseline gap-2 py-1.5 border-b border-[#00000008] last:border-0">
              <span className="font-mono font-bold text-primary text-xs w-14 shrink-0">{item.abbr}</span>
              <div className="text-xs">
                <span className="text-[#1d1d1f]">{item.full}</span>
                <span className="text-[#8e8e93] ml-1">({item.en})</span>
              </div>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Section D: Customs Legal Basics */}
      <CollapsibleSection title={t(T.cost.legalBasics, lang)} icon={HelpCircle} defaultOpen={false}>
        <p className="text-xs text-[#6e6e73] mb-3">{t(T.cost.legalIntro, lang)}</p>

        <div className="space-y-2">
          {LEGAL_BASICS.map((item, index) => (
            <div key={`legal-basic-${index}`} className="rounded-lg border border-[#00000008] bg-[rgba(245,245,247,0.5)] p-3">
              <h4 className="text-xs font-semibold text-[#1d1d1f]">{t(item.title, lang)}</h4>
              <p className="mt-1 text-xs text-[#6e6e73]">{t(item.detail, lang)}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-2xl border border-[#f0d28a]/50 bg-[#fff8e1] p-3 text-xs text-[#7a4d00]">
          {t(T.cost.legalDisclaimer, lang)}
        </div>

        <div className="mt-3">
          <h4 className="text-xs font-semibold text-[#1d1d1f] mb-2">{t(T.cost.legalSources, lang)}</h4>
          <ul className="space-y-1">
            {LEGAL_REFERENCES.map((ref, index) => (
              <li key={`legal-ref-${index}`}>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  {t(ref.label, lang)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </CollapsibleSection>
    </div>
  )
}
