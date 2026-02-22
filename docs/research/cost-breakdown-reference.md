# Cost Breakdown by Incoterm - Indonesian Context

> Source: Research Agent 3 (2026-02-22)
> Covers: Cost components, tax stack, rate ranges, common mistakes

## Indonesian Import Tax Stack

| Tax | Rate | Base | Notes |
|-----|------|------|-------|
| BM (Bea Masuk / Import Duty) | 0-150% | CIF value | Based on HS code tariff |
| PPh 22 (Income Tax) | 2.5% (with API) / 7.5% (without API) | CIF + BM | Creditable against annual tax |
| PPN (VAT) | 12% (since 2025) | CIF + BM + PPh22 base | Standard rate |
| PPnBM (Luxury Goods Tax) | 10-200% | CIF + BM | Only for luxury goods |

**Tax calculation order:** CIF value -> + BM -> = NDPBM -> + PPh22 -> + PPN -> + PPnBM (if applicable)

## Cost Components per Shipment (Jakarta -> Rotterdam, 20' FCL)

| Component | Typical USD | Category |
|-----------|-------------|----------|
| Ex-Factory Cost | 10,000 | Origin |
| Inland Transport (Origin) | 100-250 | Origin |
| Export Customs Clearance | 50-100 | Origin |
| THC Origin (Tanjung Priok) | 150-250 | Origin |
| Documentation Fee | 30-50 | Origin |
| B/L Fee | 50-75 | Freight |
| Ocean Freight | 800-2,000 | Freight |
| Cargo Insurance | 0.3-0.5% of CIF | Freight |
| THC Destination | 200-350 | Destination |
| Import Customs Clearance | 75-150 | Destination |
| Import Duty | Varies by HS code | Destination |
| VAT / PPN | 12% of NDPBM | Destination |
| Inland Transport (Dest) | 200-500 | Destination |

## Indonesian Port-Specific Charges

### Demurrage & Detention (Hapag-Lloyd Indonesia, 2025)

| Container | Free Days | Rate (Days 1-4) | Rate (Day 5+) |
|-----------|-----------|------------------|----------------|
| 20' GP | 4 days | IDR 675,000/day | IDR 1,350,000/day |
| 40' GP/HC | 3 days | IDR 1,135,000/day | IDR 2,270,000/day |

### Common Additional Charges

| Charge | Description | Typical Range |
|--------|-------------|---------------|
| D/O Fee (Delivery Order) | Carrier fee to release container | IDR 500,000 - 1,500,000 |
| Lift On/Lift Off | Container handling at depot | IDR 500,000 - 800,000 per move |
| Storage | Port storage beyond free days | IDR 30,000 - 80,000/day/TEU |
| BAF (Bunker Adj. Factor) | Fuel surcharge | Included in freight or $50-200 |
| CAF (Currency Adj. Factor) | Currency fluctuation surcharge | 0-5% of freight |
| ISPS (Security) | Port security surcharge | $5-15/TEU |

## PPJK (Customs Brokerage) Fee Structure

| Component | Description |
|-----------|-------------|
| Handling Fee | Core customs clearance: PIB filing to SPPB issuance |
| EDI Transfer Fee | Electronic data submission to customs |
| Document Fee | Printing and processing |
| Trucking | Container transport from port to warehouse |
| Port/Airport Fees | Lift on/off, storage, other operator charges |

Note: PPJK fees exclude import duties, VAT, D/O fees, and storage.

## Common Cost Mistakes by Incoterm

| Incoterm | Common Mistake | Reality |
|----------|---------------|---------|
| EXW | "Cheapest for seller" | Buyer often pays more due to poor local rates |
| FOB | "All-inclusive to ship" | Buyer still pays freight + insurance + import |
| CIF | "Insurance covers everything" | CIF insurance is minimum (ICC Clause C only) |
| CIF | "Seller bears transit risk" | Risk transfers at ORIGIN port, not destination |
| DAP | "All costs included" | Buyer still pays import duty + VAT + unloading |
| DDP | "No costs for buyer" | Buyer may still pay unloading + after-delivery costs |

## Indonesian Logistics Glossary

| Abbreviation | Full Term | Description |
|-------------|-----------|-------------|
| PPJK | Pengusaha Pengurusan Jasa Kepabeanan | Licensed customs broker |
| PEB | Pemberitahuan Ekspor Barang | Export Declaration |
| PIB | Pemberitahuan Impor Barang | Import Declaration |
| SPPB | Surat Persetujuan Pengeluaran Barang | Customs Release Certificate |
| NIK | Nomor Identitas Kepabeanan | Customs Registration Number |
| API-U | Angka Pengenal Importir Umum | General Import License |
| API-P | Angka Pengenal Importir Produsen | Producer Import License |
| NIB | Nomor Induk Berusaha | Business Registration Number (replaces API+NIK via OSS) |
| LARTAS | Larangan dan Pembatasan | Prohibited and Restricted goods |
| LS | Laporan Surveyor | Surveyor Report (pre-shipment inspection) |
| THC | Terminal Handling Charge | Port container handling fee |
| D/O | Delivery Order | Carrier release document |
| B/L | Bill of Lading | Transport document (title of goods) |
| NDPBM | Nilai Dasar Perhitungan Bea Masuk | Customs Value for duty calculation |
| SKA | Surat Keterangan Asal | Certificate of Origin |
| PE | Pemberitahuan Ekspor (form) | Export notification |
| RKSP | Rencana Kedatangan Sarana Pengangkut | Vessel arrival manifest |
| DO Fee | Delivery Order Fee | Fee to collect DO from carrier |
| LO/LI | Lift On / Lift In | Container handling charges |
