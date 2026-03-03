export const PIPELINE_STAGES = [
  { id: 'factory', label: 'Factory', icon: 'Factory', x: 0 },
  { id: 'packing', label: 'Packing', icon: 'Package', x: 1 },
  { id: 'export', label: 'Export Customs', icon: 'FileCheck', x: 2 },
  { id: 'thc-origin', label: 'Origin THC', icon: 'Container', x: 3 },
  { id: 'transport', label: 'Main Transport', icon: 'Ship', x: 4 },
  { id: 'thc-dest', label: 'Dest THC', icon: 'Container', x: 5 },
  { id: 'import', label: 'Import Customs', icon: 'FileCheck', x: 6 },
  { id: 'inland', label: 'Inland Transport', icon: 'Truck', x: 7 },
  { id: 'buyer', label: 'Buyer', icon: 'Building2', x: 8 },
]

// Maps each Incoterm to where risk and cost transfer in the pipeline
// risk/cost = index in PIPELINE_STAGES where transfer happens
// seller = indices the seller is responsible for
// buyer = indices the buyer is responsible for
export const INCOTERM_PIPELINE = {
  EXW: { risk: 0, cost: 0, seller: [0], buyer: [1,2,3,4,5,6,7,8] },
  FCA: { risk: 1, cost: 1, seller: [0,1], buyer: [2,3,4,5,6,7,8] },
  FAS: { risk: 3, cost: 3, seller: [0,1,2,3], buyer: [4,5,6,7,8] },
  FOB: { risk: 3, cost: 3, seller: [0,1,2,3], buyer: [4,5,6,7,8] },
  CFR: { risk: 3, cost: 5, seller: [0,1,2,3,4,5], buyer: [6,7,8] },
  CIF: { risk: 3, cost: 5, seller: [0,1,2,3,4,5], buyer: [6,7,8] },
  CPT: { risk: 1, cost: 5, seller: [0,1,2,3,4,5], buyer: [6,7,8] },
  CIP: { risk: 1, cost: 5, seller: [0,1,2,3,4,5], buyer: [6,7,8] },
  DAP: { risk: 7, cost: 7, seller: [0,1,2,3,4,5,6,7], buyer: [8] },
  DPU: { risk: 7, cost: 7, seller: [0,1,2,3,4,5,6,7], buyer: [8] },
  DDP: { risk: 8, cost: 8, seller: [0,1,2,3,4,5,6,7,8], buyer: [] },
}

// Progressive game rounds for drag-and-drop
export const PIPELINE_GAME_LEVELS = [
  { terms: ['EXW', 'DDP'], label: 'Round 1: Extremes' },
  { terms: ['FOB', 'CIF'], label: 'Round 2: Popular Terms' },
  { terms: ['FCA', 'DAP'], label: 'Round 3: Modern Favorites' },
  { terms: ['CFR', 'CPT'], label: 'Round 4: C-Terms Trap' },
  { terms: ['FAS', 'CIP', 'DPU'], label: 'Round 5: Full Challenge' },
]
