export const PIPELINE_STAGES = [
  { id: 'factory', label: { id: 'Pabrik', en: 'Factory' }, icon: 'Factory', x: 0 },
  { id: 'packing', label: { id: 'Pengepakan', en: 'Packing' }, icon: 'Package', x: 1 },
  { id: 'export', label: { id: 'Bea Cukai Ekspor', en: 'Export Customs' }, icon: 'FileCheck', x: 2 },
  { id: 'thc-origin', label: { id: 'THC Asal', en: 'Origin THC' }, icon: 'Container', x: 3 },
  { id: 'transport', label: { id: 'Transport Utama', en: 'Main Transport' }, icon: 'Ship', x: 4 },
  { id: 'thc-dest', label: { id: 'THC Tujuan', en: 'Dest THC' }, icon: 'Container', x: 5 },
  { id: 'import', label: { id: 'Bea Cukai Impor', en: 'Import Customs' }, icon: 'FileCheck', x: 6 },
  { id: 'inland', label: { id: 'Transport Darat', en: 'Inland Transport' }, icon: 'Truck', x: 7 },
  { id: 'buyer', label: { id: 'Pembeli', en: 'Buyer' }, icon: 'Building2', x: 8 },
]

// Maps each Incoterm to where risk and cost transfer in the pipeline
// risk/cost = index in PIPELINE_STAGES where transfer happens
// seller = indices the seller is responsible for
// buyer = indices the buyer is responsible for
export const INCOTERM_PIPELINE = {
  EXW: { risk: 0, cost: 0, seller: [0], buyer: [1,2,3,4,5,6,7,8] },
  FCA: { risk: 2, cost: 2, seller: [0,1,2], buyer: [3,4,5,6,7,8] },
  FAS: { risk: 2, cost: 2, seller: [0,1,2], buyer: [3,4,5,6,7,8] },
  FOB: { risk: 3, cost: 3, seller: [0,1,2,3], buyer: [4,5,6,7,8] },
  CFR: { risk: 3, cost: 5, seller: [0,1,2,3,4,5], buyer: [6,7,8] },
  CIF: { risk: 3, cost: 5, seller: [0,1,2,3,4,5], buyer: [6,7,8] },
  CPT: { risk: 2, cost: 5, seller: [0,1,2,3,4,5], buyer: [6,7,8] },
  CIP: { risk: 2, cost: 5, seller: [0,1,2,3,4,5], buyer: [6,7,8] },
  DAP: { risk: 7, cost: 7, seller: [0,1,2,3,4,5,6,7], buyer: [8] },
  DPU: { risk: 7, cost: 7, seller: [0,1,2,3,4,5,6,7], buyer: [8] },
  DDP: { risk: 8, cost: 8, seller: [0,1,2,3,4,5,6,7,8], buyer: [] },
}

// Progressive game rounds for drag-and-drop
export const PIPELINE_GAME_LEVELS = [
  { terms: ['EXW', 'DDP'], label: { id: 'Ronde 1: Dua Ekstrem', en: 'Round 1: Extremes' } },
  { terms: ['FOB', 'CIF'], label: { id: 'Ronde 2: Term Populer', en: 'Round 2: Popular Terms' } },
  { terms: ['FCA', 'DAP'], label: { id: 'Ronde 3: Favorit Modern', en: 'Round 3: Modern Favorites' } },
  { terms: ['CFR', 'CPT'], label: { id: 'Ronde 4: Jebakan C-Terms', en: 'Round 4: C-Terms Trap' } },
  { terms: ['FAS', 'CIP', 'DPU'], label: { id: 'Ronde 5: Tantangan Penuh', en: 'Round 5: Full Challenge' } },
]
