/**
 * Bilingual translations (Indonesian + English)
 * Key convention: page.section.element
 */

export const translations = {
  // === COMMON / SHARED ===
  common: {
    appName: { id: 'Belajar Ekspor Impor', en: 'Learn Export Import' },
    points: { id: 'poin', en: 'pts' },
    streak: { id: 'streak', en: 'streak' },
    next: { id: 'Selanjutnya', en: 'Next' },
    back: { id: 'Kembali', en: 'Back' },
    reset: { id: 'Reset', en: 'Reset' },
    export: { id: 'Ekspor', en: 'Export' },
    import: { id: 'Impor', en: 'Import' },
    seller: { id: 'Penjual', en: 'Seller' },
    buyer: { id: 'Pembeli', en: 'Buyer' },
  },

  // === NAVIGATION ===
  nav: {
    home: { id: 'Beranda', en: 'Home' },
    learn: { id: 'Belajar', en: 'Learn' },
    play: { id: 'Main', en: 'Play' },
    costs: { id: 'Biaya', en: 'Costs' },
    progress: { id: 'Progres', en: 'Progress' },
  },

  // === HOME PAGE ===
  home: {
    badge: { id: 'Freight Forwarding Indonesia', en: 'Indonesian Freight Forwarding' },
    title: { id: 'Belajar Ekspor Impor', en: 'Learn Export Import' },
    subtitle: {
      id: 'Kuasai Incoterms 2020 lewat skenario interaktif berdasarkan rute perdagangan nyata Indonesia. Belajar sambil bermain, bukan cuma membaca.',
      en: 'Master Incoterms 2020 through interactive scenarios based on real Indonesian trade routes. Learn by doing, not just reading.',
    },
    stats: {
      points: { id: 'Poin', en: 'Points' },
      accuracy: { id: 'Akurasi', en: 'Accuracy' },
      scenarios: { id: 'Skenario', en: 'Scenarios' },
    },
    features: {
      learn: {
        title: { id: 'Pelajari Incoterms', en: 'Learn Incoterms' },
        desc: { id: 'Kuasai 11 aturan Incoterms 2020 dengan panduan visual', en: 'Master all 11 Incoterms 2020 rules with visual guides' },
      },
      play: {
        title: { id: 'Main Skenario', en: 'Play Scenarios' },
        desc: { id: 'Pilih Incoterm yang tepat untuk skenario pengiriman nyata Indonesia', en: 'Pick the right Incoterm for real Indonesian shipping scenarios' },
      },
      cost: {
        title: { id: 'Simulator Biaya', en: 'Cost Simulator' },
        desc: { id: 'Bandingkan total biaya di bawah Incoterm yang berbeda', en: 'Compare total costs under different Incoterms' },
      },
      progress: {
        title: { id: 'Progres Saya', en: 'My Progress' },
        desc: { id: 'Pantau tingkat penguasaan dan streak belajar kamu', en: 'Track your mastery level and learning streak' },
      },
    },
    quickRef: { id: '11 Incoterms 2020 Sekilas', en: '11 Incoterms 2020 at a Glance' },
  },

  // === LEARN PAGE ===
  learn: {
    title: { id: 'Pelajari Incoterms 2020', en: 'Learn Incoterms 2020' },
    subtitle: {
      id: 'Ketuk Incoterm mana saja untuk melihat detail kewajiban, titik transfer risiko/biaya, dan konteks perdagangan Indonesia.',
      en: 'Tap any Incoterm to see detailed obligations, risk/cost transfer points, and Indonesian trade context.',
    },
    allIncoterms: { id: 'Semua Incoterms', en: 'All Incoterms' },
    group: { id: 'Grup', en: 'Group' },
    sellerOb: { id: 'Kewajiban Penjual', en: "Seller's Obligations" },
    buyerOb: { id: 'Kewajiban Pembeli', en: "Buyer's Obligations" },
    bestFor: { id: 'Paling Cocok Untuk', en: 'Best For' },
    commonMistake: { id: 'Kesalahan Umum', en: 'Common Mistake' },
    riskTransfer: { id: 'Transfer Risiko', en: 'Risk Transfer' },
    costTransfer: { id: 'Transfer Biaya', en: 'Cost Transfer' },
    insurance: { id: 'Asuransi', en: 'Insurance' },
    indonesianExample: { id: 'Contoh Indonesia', en: 'Indonesian Example' },
    keyTrap: { id: 'Jebakan Utama', en: 'Key Trap' },
    confusedWith: { id: 'Sering Tertukar Dengan', en: 'Often Confused With' },
    changes2020: { id: 'Perubahan 2020', en: '2020 Changes' },
    map: {
      title: { id: 'Uji Pengetahuan: Drag & Drop', en: 'Test Your Knowledge: Drag & Drop' },
      subtitle: { id: 'Seret kewajiban ke kolom Seller atau Buyer yang benar', en: 'Drag each obligation to the correct Seller or Buyer column' },
      seller: { id: 'Seller', en: 'Seller' },
      buyer: { id: 'Buyer', en: 'Buyer' },
      checkBtn: { id: 'Cek Jawaban', en: 'Check Answers' },
      resetBtn: { id: 'Ulangi', en: 'Reset' },
      correct: { id: 'Benar!', en: 'Correct!' },
      wrong: { id: 'Salah', en: 'Wrong' },
      score: { id: 'Skor', en: 'Score' },
      obligationsPool: { id: 'Kewajiban (drag ke kolom yang benar)', en: 'Obligations (drag to correct column)' },
    },
  },

  // === SCENARIO / PLAY PAGE ===
  scenario: {
    chooseDifficulty: { id: 'Pilih Tingkat Kesulitan', en: 'Choose Difficulty' },
    beginner: { id: 'Pemula', en: 'Beginner' },
    intermediate: { id: 'Menengah', en: 'Intermediate' },
    advanced: { id: 'Lanjutan', en: 'Advanced' },
    mixed: { id: 'Campuran', en: 'Mixed' },
    beginnerDesc: { id: 'Incoterms umum, skenario jelas', en: 'Common Incoterms, clear scenarios' },
    intermediateDesc: { id: 'Skenario rumit, banyak jawaban valid', en: 'Tricky scenarios, multiple valid answers' },
    advancedDesc: { id: 'Situasi kompleks, DG, LARTAS, FTZ', en: 'Complex situations, DG, LARTAS, FTZ' },
    mixedDesc: { id: 'Kesulitan acak', en: 'Random difficulty' },
    changeDifficulty: { id: 'Ubah kesulitan', en: 'Change difficulty' },
    whichIncoterm: { id: 'Incoterm mana yang paling tepat?', en: 'Which Incoterm fits best?' },
    hint: { id: 'Petunjuk', en: 'Hint' },
    submitAnswer: { id: 'Kirim Jawaban', en: 'Submit Answer' },
    correct: { id: 'Benar!', en: 'Correct!' },
    notQuite: { id: 'Kurang tepat...', en: 'Not quite...' },
    youSelected: { id: 'Kamu pilih', en: 'You selected' },
    bestAnswer: { id: 'Jawaban terbaik', en: 'Best answer' },
    explanation: { id: 'Penjelasan', en: 'Explanation' },
    keyTakeaways: { id: 'Poin Penting', en: 'Key Takeaways' },
    nextScenario: { id: 'Skenario Berikutnya', en: 'Next Scenario' },
  },

  // === COST SIMULATOR ===
  cost: {
    title: { id: 'Simulator Biaya', en: 'Cost Simulator' },
    subtitle: {
      id: 'Lihat bagaimana pengiriman yang sama berbeda biayanya di bawah setiap Incoterm. Edit biaya sesuai skenario kamu.',
      en: 'See how the same shipment costs differ under each Incoterm. Edit costs to match your scenario.',
    },
    costComponents: { id: 'Komponen Biaya (USD)', en: 'Cost Components (USD)' },
    costComponent: { id: 'Komponen Biaya', en: 'Cost Component' },
    sellerTotal: { id: 'Total Penjual', en: 'Seller Total' },
    buyerTotal: { id: 'Total Pembeli', en: 'Buyer Total' },
    sellerPays: { id: 'S = Penjual bayar', en: 'S = Seller pays' },
    buyerPays: { id: 'B = Pembeli bayar', en: 'B = Buyer pays' },
    note: {
      id: 'Catatan: Ini model yang disederhanakan. Biaya sebenarnya bervariasi berdasarkan rute, carrier, musim, dan negosiasi.',
      en: 'Note: This is a simplified model. Real costs vary by route, carrier, season, and negotiation.',
    },
    // Tax Calculator
    taxCalc: { id: 'Kalkulator Pajak Impor Indonesia', en: 'Indonesian Import Tax Calculator' },
    cifValue: { id: 'Nilai CIF', en: 'CIF Value' },
    exchangeRate: { id: 'Kurs (IDR/USD)', en: 'Exchange Rate (IDR/USD)' },
    dutyRate: { id: 'Tarif Bea Masuk (%)', en: 'Import Duty Rate (%)' },
    dutyRateNote: { id: 'Bervariasi per kode HS (0-150%)', en: 'Varies by HS code (0-150%)' },
    hasApi: { id: 'Punya izin API/NIB?', en: 'Has API license?' },
    isLuxury: { id: 'Barang mewah?', en: 'Luxury goods?' },
    ppnbmRate: { id: 'Tarif PPnBM (%)', en: 'PPnBM Rate (%)' },
    cifIdr: { id: 'Nilai CIF (IDR)', en: 'CIF Value (IDR)' },
    beaMasuk: { id: 'Bea Masuk', en: 'Import Duty (BM)' },
    ndpbm: { id: 'NDPBM (Nilai Dasar)', en: 'NDPBM (Customs Value)' },
    pph22: { id: 'PPh 22 (Pajak Penghasilan)', en: 'PPh 22 (Income Tax)' },
    ppn: { id: 'PPN (Pajak Pertambahan Nilai)', en: 'PPN (VAT)' },
    ppnbm: { id: 'PPnBM (Barang Mewah)', en: 'PPnBM (Luxury Tax)' },
    totalTax: { id: 'TOTAL PAJAK', en: 'TOTAL TAX' },
    totalLanded: { id: 'TOTAL BIAYA MENDARAT', en: 'TOTAL LANDED COST' },
    effectiveRate: { id: 'Tarif efektif', en: 'Effective tax rate' },
    taxNote: {
      id: 'PPh 22 dapat dikreditkan terhadap pajak tahunan. Tarif PPN 12% berlaku sejak 2025.',
      en: 'PPh 22 is creditable against annual tax. PPN rate of 12% effective since 2025.',
    },
    // Port charges
    portCharges: { id: 'Referensi Biaya Pelabuhan', en: 'Port Charges Reference' },
    portNote: { id: 'Tarif tipikal untuk Tanjung Priok, Jakarta', en: 'Typical rates for Tanjung Priok, Jakarta' },
    // Glossary
    glossary: { id: 'Singkatan Umum', en: 'Common Abbreviations' },
  },

  // === PROGRESS PAGE ===
  progress: {
    title: { id: 'Progres Saya', en: 'My Progress' },
    totalPoints: { id: 'Total Poin', en: 'Total Points' },
    accuracy: { id: 'Akurasi', en: 'Accuracy' },
    bestStreak: { id: 'Streak Terbaik', en: 'Best Streak' },
    scenarios: { id: 'Skenario', en: 'Scenarios' },
    incotermMastery: { id: 'Penguasaan Incoterm', en: 'Incoterm Mastery' },
    notTried: { id: 'Belum dicoba', en: 'Not tried' },
    sessionStats: { id: 'Statistik Sesi', en: 'Session Stats' },
    correctAnswers: { id: 'Jawaban benar:', en: 'Correct answers:' },
    wrongAnswers: { id: 'Jawaban salah:', en: 'Wrong answers:' },
    totalAttempts: { id: 'Total percobaan:', en: 'Total attempts:' },
    currentStreak: { id: 'Streak saat ini:', en: 'Current streak:' },
    resetConfirm: { id: 'Reset semua progres? Ini tidak bisa dibatalkan.', en: 'Reset all progress? This cannot be undone.' },
  },

  // === COST COMPONENT LABELS ===
  costLabels: {
    factory: { id: 'Biaya Ex-Pabrik', en: 'Ex-Factory Cost' },
    inlandOrigin: { id: 'Transport Darat (Asal)', en: 'Inland Transport (Origin)' },
    exportClearance: { id: 'Customs Clearance Ekspor', en: 'Export Customs Clearance' },
    thcOrigin: { id: 'THC Asal', en: 'THC Origin' },
    docFee: { id: 'Biaya Dokumen', en: 'Documentation Fee' },
    blFee: { id: 'Biaya B/L', en: 'B/L Fee' },
    oceanFreight: { id: 'Freight Laut', en: 'Ocean Freight' },
    insurance: { id: 'Asuransi Kargo', en: 'Cargo Insurance' },
    thcDest: { id: 'THC Tujuan', en: 'THC Destination' },
    importClearance: { id: 'Customs Clearance Impor', en: 'Import Customs Clearance' },
    importDuty: { id: 'Bea Masuk', en: 'Import Duty' },
    vat: { id: 'PPN', en: 'VAT / PPN' },
    inlandDest: { id: 'Transport Darat (Tujuan)', en: 'Inland Transport (Dest)' },
  },
}

/**
 * Helper to get a translated string
 * @param {object} obj - Translation object with {id, en}
 * @param {string} lang - 'id' or 'en'
 */
export const t = (obj, lang) => obj?.[lang] || obj?.en || ''
