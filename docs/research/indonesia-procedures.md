# Indonesia Export & Import Procedures - Game Scenario Data

> Comprehensive reference for educational freight forwarding game
> Research date: 2026-02-22

---

## 1. EXPORT PROCEDURE FROM INDONESIA

### 1.1 Step-by-Step Process

| Step | Phase | Description | Typical Duration |
|------|-------|-------------|-----------------|
| 1 | **Booking** | Exporter/forwarder books space with shipping line (FCL) or consolidator (LCL). Receive Booking Confirmation. | 1-3 days |
| 2 | **Documentation Prep** | Prepare commercial documents: Invoice, Packing List, Sales Contract. Apply for COO if needed. | 2-5 days |
| 3 | **LARTAS Check** | Verify goods via INSW portal (insw.go.id) - check if product HS Code has export restrictions. | Same day |
| 4 | **Stuffing / Loading** | Goods stuffed into container at warehouse/factory (FCL) or delivered to CFS (LCL). | 1 day |
| 5 | **PEB Submission** | Submit Pemberitahuan Ekspor Barang (Export Declaration) electronically via CEISA/INSW. | Same day |
| 6 | **Customs Response** | Bea Cukai processes PEB. Three possible outcomes: NPE (approved), physical inspection, or document check. | 1-3 hours (green) |
| 7 | **NPE Issuance** | Nota Pelayanan Ekspor (Export Service Note) issued = cargo cleared for export. | After PEB approval |
| 8 | **Container Gate-In** | Container enters port terminal with NPE document. | Per vessel cut-off |
| 9 | **Loading to Vessel** | Terminal operator loads container onto vessel. | On vessel schedule |
| 10 | **B/L Issuance** | Shipping line issues Bill of Lading after vessel departure. | 1-3 days after sailing |

### 1.2 Required Export Documents

| Document | Indonesian Term | Issued By | Purpose |
|----------|----------------|-----------|---------|
| **PEB** | Pemberitahuan Ekspor Barang | Exporter/PPJK via CEISA | Customs export declaration |
| **NPE** | Nota Pelayanan Ekspor | Bea Cukai (Customs) | Export approval/release note |
| **Commercial Invoice** | Faktur Dagang | Exporter | Value declaration for buyer |
| **Packing List** | Daftar Pengepakan | Exporter | Cargo details (weight, dimensions, marks) |
| **Bill of Lading (B/L)** | Konosemen | Shipping Line | Title of goods, transport contract |
| **Certificate of Origin (COO/SKA)** | Surat Keterangan Asal | Kemendag / IPSKA system | Proves Indonesian origin for tariff preference |
| **Fumigation Certificate** | Sertifikat Fumigasi | Approved fumigator | Required for wood packaging (ISPM-15) |
| **Health Certificate** | Sertifikat Kesehatan | BPOM / Kementan | For food, animal, plant products |
| **Insurance Certificate** | Sertifikat Asuransi | Insurance company | Cargo insurance proof |
| **NIB** | Nomor Induk Berusaha | OSS (Online Single Submission) | Business ID, replaces old API-U/API-P/NIK |

### 1.3 Customs Clearance Process (Export)

```
Exporter prepares goods + documents
        |
        v
PEB submitted electronically (CEISA/INSW)
        |
        v
System validates: NIK active? HS Code correct? LARTAS compliant?
        |
        +---> [REJECT] Fix errors, resubmit
        |
        v
Risk-based channel assignment:
        |
        +---> GREEN: NPE issued automatically (majority of exports)
        |
        +---> YELLOW: Document review by customs officer
        |           |
        |           +---> Documents OK -> NPE issued
        |           +---> Documents NOT OK -> Correction required
        |
        +---> RED: Physical inspection of goods
                    |
                    +---> Inspection passed -> NPE issued
                    +---> Inspection failed -> Goods held/seized
```

### 1.4 LARTAS for Exports (Larangan dan Pembatasan)

| Category | Examples | Regulating Agency | Requirement |
|----------|----------|-------------------|-------------|
| **Prohibited (Larangan)** | Cultural heritage items, endangered species (CITES Appendix I), certain raw logs | Various ministries | Cannot be exported at all |
| **Restricted - Quota** | Certain minerals, sand, soil | Kemendag, ESDM | Export quota allocation required |
| **Restricted - License** | Crude Palm Oil (CPO), certain chemicals | Kemendag | ET (Eksportir Terdaftar) license required |
| **Restricted - Inspection** | Fishery products, forestry products | KKP, KLHK | Inspection certificate required |
| **Restricted - Quality** | Coffee, cocoa, spices | Kemendag, Kementan | Quality/grade certificate required |

**How to check:** Enter HS Code at insw.go.id -> system shows if item is prohibited, restricted, or free.

### 1.5 Export Duty (Bea Keluar / BK)

Most Indonesian exports have ZERO export duty. Exceptions:

| Product | Export Duty | Levy | Notes |
|---------|------------|------|-------|
| CPO (Crude Palm Oil) | US$ 74-124/MT (varies monthly) | 7.5-10% levy | Based on CPO reference price set by Kemendag |
| RBD Palm Olein (packed <=25kg) | US$ 0 | Reduced levy | Incentive for value-added processing |
| Raw minerals (unprocessed) | Progressive tariff | - | Encourages domestic smelting |
| Raw rattan | Prohibited | - | Must be processed domestically |
| Leather (raw/semi-processed) | Varies | - | Encourages domestic tanning |

### 1.6 Key Government Agencies (Export)

| Agency | Indonesian Name | Role |
|--------|----------------|------|
| **DJBC / Bea Cukai** | Direktorat Jenderal Bea dan Cukai | Customs authority - processes PEB, issues NPE |
| **Kemendag** | Kementerian Perdagangan | Trade policy, COO, export licenses, LARTAS |
| **Kementan** | Kementerian Pertanian | Agricultural export permits, quarantine |
| **KKP** | Kementerian Kelautan dan Perikanan | Fishery export permits |
| **KLHK** | Kementerian Lingkungan Hidup dan Kehutanan | Forestry products, CITES |
| **BPOM** | Badan Pengawas Obat dan Makanan | Food & drug export certificates |
| **LNSW** | Lembaga National Single Window | Manages INSW electronic platform |

---

## 2. IMPORT PROCEDURE TO INDONESIA

### 2.1 Step-by-Step Process

| Step | Phase | Description | Typical Duration |
|------|-------|-------------|-----------------|
| 1 | **Pre-shipment** | Importer obtains NIB (includes API + NIK). For LARTAS goods: obtain PI (Persetujuan Impor) and LS (Laporan Surveyor) at origin. | Days to weeks |
| 2 | **Shipping** | Goods shipped from origin. Forwarder provides pre-alert documents. | Per transit time |
| 3 | **Arrival Notice** | Shipping line sends Arrival Notice to consignee/forwarder. | 2-3 days before ETA |
| 4 | **D/O Collection** | Forwarder pays D/O fee to shipping line, collects Delivery Order (Surat Perintah Pengeluaran/DO). | 1 day |
| 5 | **PIB Preparation** | PPJK/forwarder prepares Pemberitahuan Impor Barang (Import Declaration) with HS classification and duty calculation. | 1-2 days |
| 6 | **Duty Payment** | Pay calculated duties and taxes (BM + PPN + PPh + PPnBM if applicable) via bank. Receive SSPCP. | Same day |
| 7 | **PIB Submission** | Submit PIB electronically via CEISA/INSW with SSPCP payment proof. | Same day |
| 8 | **Channel Assignment** | Customs system assigns risk channel: Green, Yellow, or Red. | Minutes to hours |
| 9 | **Customs Clearance** | Process depends on channel (see 2.3 below). | Hours to days |
| 10 | **SPPB Issuance** | Surat Persetujuan Pengeluaran Barang (Goods Release Approval) issued. | After clearance |
| 11 | **Container Release** | Present SPPB + D/O at terminal. Container released for pickup. | Same day |
| 12 | **Trucking / Delivery** | Container trucked from port to importer's warehouse. | Hours to days |

### 2.2 Required Import Documents

| Document | Indonesian Term | Issued By | Purpose |
|----------|----------------|-----------|---------|
| **PIB** | Pemberitahuan Impor Barang | Importer/PPJK via CEISA | Customs import declaration |
| **SPPB** | Surat Persetujuan Pengeluaran Barang | Bea Cukai | Goods release approval |
| **SSPCP** | Surat Setoran Pabean, Cukai, dan Pajak | Bank | Proof of duty/tax payment |
| **D/O** | Delivery Order / Surat Perintah Pengeluaran | Shipping Line | Authorization to release container from terminal |
| **B/L (Original)** | Bill of Lading | Shipping Line | Title document, required for D/O exchange |
| **Commercial Invoice** | Faktur Dagang | Exporter/Seller | Value basis for duty calculation |
| **Packing List** | Daftar Pengepakan | Exporter/Seller | Weight, quantity, description |
| **PI** | Persetujuan Impor | Kemendag | Import approval for LARTAS goods |
| **LS** | Laporan Surveyor | Appointed surveyor (SGS, Sucofindo, etc.) | Pre-shipment inspection report |
| **Insurance Policy** | Polis Asuransi | Insurance company | Required for CIF value calculation |
| **NIB** | Nomor Induk Berusaha | OSS system | Business ID (replaces old API/NIK) |

### 2.3 Import Duty Calculation

**Base formula:**

```
Customs Value (Nilai Pabean) = CIF Value (in IDR)
   CIF = Cost (FOB) + Insurance + Freight

Import Duty (BM) = Customs Value x BM tariff rate (0%-150%, per HS Code)

Tax Base (Nilai Impor) = Customs Value + BM

PPN (VAT) = Tax Base x 11% (standard goods)
         or Tax Base x 12% (luxury goods subject to PPnBM)

PPnBM (Luxury Tax) = Tax Base x 10%-95% (only for luxury goods)

PPh 22 (Income Tax) = Tax Base x 2.5% (with API/NIB)
                    or Tax Base x 7.5% (without API/NIB)
                    or Tax Base x 5.0% (certain goods at 15%/25% BM rate)

TOTAL PAYMENT = BM + PPN + PPnBM (if applicable) + PPh 22
```

**Worked example (standard import):**

| Component | Calculation | Amount (IDR) |
|-----------|-------------|--------------|
| CIF Value | US$ 10,000 x 15,800 | 158,000,000 |
| BM (Import Duty) @ 10% | 158,000,000 x 10% | 15,800,000 |
| Tax Base (Nilai Impor) | 158,000,000 + 15,800,000 | 173,800,000 |
| PPN (VAT) @ 11% | 173,800,000 x 11% | 19,118,000 |
| PPh 22 @ 2.5% | 173,800,000 x 2.5% | 4,345,000 |
| **Total Duties & Taxes** | | **39,263,000** |
| **Effective rate on CIF** | | **~24.8%** |

### 2.4 Red / Yellow / Green Channel System

| Channel | Indonesian | Criteria | Process | Timeline |
|---------|-----------|----------|---------|----------|
| **Green (Jalur Hijau)** | SPJH | Low-risk importer, compliant history, non-LARTAS goods | Document verification only, auto-release | Hours (same day) |
| **Yellow (Jalur Kuning)** | SPJK | Medium risk, first-time importer, incomplete docs | Document examination by officer, may request additional docs | 1-3 days |
| **Red (Jalur Merah)** | SPJM | High risk, LARTAS goods, new importer, random audit, intelligence | Full physical inspection + document examination | 3-7 days |
| **MITA Priority** | Jalur Prioritas | AEO-certified companies, excellent track record | Fastest clearance, minimal checks | Hours |

**Factors affecting channel assignment:**
- Importer's compliance profile/history
- HS Code risk level
- Country of origin
- Value declared vs historical data
- LARTAS commodity flags
- Random selection for audit
- Customs intelligence/tip-offs

### 2.5 Pre-Shipment Inspection (Verifikasi/Pemeriksaan Teknis)

| Aspect | Detail |
|--------|--------|
| **What** | Technical inspection of goods at country of origin before shipment |
| **Document** | LS (Laporan Surveyor / Surveyor Report) |
| **Appointed Surveyors** | SGS, Sucofindo, Cotecna, Bureau Veritas, KSO Surveyor Indonesia |
| **Required For** | LARTAS goods (textiles, chemicals, minerals, electronics, consumer goods, etc.) |
| **Checks** | Quantity, quality, HS Code accuracy, compliance with Indonesian standards (SNI) |
| **Validity** | LS must be uploaded to INSW; PIB rejected if LS missing for LARTAS goods |
| **2025 Update** | Permendag 20-23/2025 expanded LS requirements to more product categories |

### 2.6 LARTAS for Imports

| Category | Examples | Regulating Agency | Requirement |
|----------|----------|-------------------|-------------|
| **Prohibited** | Used clothing, hazardous waste (B3), certain plastic waste, right-hand-drive vehicles | Kemendag, KLHK | Cannot be imported |
| **SNI Mandatory** | Electronics, toys, textiles, steel, tires, ceramic tiles | BSN / Kemenperindag | Must have SNI certificate |
| **Halal Certification** | Food, beverages, cosmetics, pharmaceuticals | BPJPH | Halal certificate required |
| **Quarantine** | Animals, plants, food products | Kementan (Barantan) | Quarantine inspection at port |
| **Registered Importer** | Certain industrial goods, consumer goods | Kemendag | IT (Importir Terdaftar) status required |
| **Import Approval** | Chemicals, explosives precursors, telecommunications equipment | Various | PI (Persetujuan Impor) from relevant ministry |
| **Narcotics Precursor** | Certain chemicals | BNN / Kemenperin | Special permit |

---

## 3. COMMON INDONESIAN PORTS

### 3.1 Major Sea Ports

| Port | City | UN/LOCODE | Throughput (TEU) | Region | Key Features |
|------|------|-----------|-----------------|--------|-------------|
| **Tanjung Priok** | Jakarta | IDJKT | ~7.6M (2024) | Java (North) | Indonesia's busiest port, 50%+ national transshipment. JICT + NPCT1 terminals. 76 berths, 16,853m quay. |
| **Tanjung Perak** | Surabaya | IDSUB | ~4.1M (2023) | East Java | 2nd busiest, gateway to eastern Indonesia. Surabaya Container Terminal (SCT). |
| **Belawan / BICT** | Medan | IDBLW | ~410K | North Sumatra | Largest port outside Java. Belawan New Container Terminal expansion to 1.4M TEU. |
| **Tanjung Emas** | Semarang | IDSMG | ~896K (2024) | Central Java | Gateway for Central Java industrial zone. Growing 15% YoY. |
| **Makassar (Soekarno-Hatta)** | Makassar | IDMAK | ~500K | South Sulawesi | Main cargo hub for Sulawesi and eastern Indonesia. |
| **Tanjung Intan** | Cilacap | IDCIL | ~100K | Central Java (South) | Cement, fertilizer, oil. Limited container. |
| **Bitung** | Bitung | IDBTT | ~200K | North Sulawesi | Growing hub for northern/eastern Indonesia routes. |
| **Balikpapan** | Balikpapan | IDBPN | ~150K | East Kalimantan | Oil/gas, coal, general cargo. Near new capital (IKN). |

### 3.2 Major Airports (Cargo)

| Airport | City | IATA | Cargo Volume | Key Features |
|---------|------|------|-------------|-------------|
| **Soekarno-Hatta** | Jakarta (Tangerang) | CGK | Largest in Indonesia | Main international air cargo hub. Cargo Terminal 1 & 2. |
| **Juanda** | Surabaya | SUB | 2nd largest | East Java air cargo gateway. |
| **Kualanamu** | Medan (Deli Serdang) | KNO | 3rd largest | North Sumatra cargo hub. Replaced old Polonia airport. |
| **Ngurah Rai** | Bali (Denpasar) | DPS | Significant | Tourism + perishables (seafood, handicrafts). |
| **Sultan Hasanuddin** | Makassar | UPG | Growing | Eastern Indonesia air cargo hub. |

### 3.3 Free Trade Zones (FTZ / Kawasan Perdagangan Bebas)

| Zone | Location | Gov. Regulation | Area (Ha) | Key Sectors |
|------|----------|----------------|-----------|-------------|
| **Batam** | Riau Islands | PP 62/2019 | ~100,000 | Electronics, shipyard, oil & gas support, logistics hub |
| **Bintan** | Riau Islands | PP 47/2007 | ~23,000 | Tourism, manufacturing, agro-industry |
| **Karimun** | Riau Islands | PP 48/2007 | ~3,500 | Maritime services, heavy industry, shipyard |
| **Sabang** | Aceh | PP 83/2010 | ~1,500 | Logistics hub, marine tourism |

**FTZ Benefits:**
- 0% Import Duty on goods entering FTZ
- 0% PPN (VAT) within FTZ
- No excise duty
- Simplified customs procedures

**FTZ Customs Rules:**
- Goods moving from FTZ to Indonesian mainland (TLDDP) = treated as import (duties apply)
- Goods moving from mainland to FTZ = treated as export
- FTZ to other countries = direct export (no additional duties)
- Must hold business license from BP Kawasan (Zone Management Agency)
- Electronic submission via CEISA/INSW still required

---

## 4. INDONESIAN CUSTOMS TERMINOLOGY

### 4.1 Core Abbreviations

| Abbreviation | Full Name (Indonesian) | English | Description |
|-------------|----------------------|---------|-------------|
| **DJBC** | Direktorat Jenderal Bea dan Cukai | Directorate General of Customs and Excise | Indonesian customs authority |
| **PEB** | Pemberitahuan Ekspor Barang | Export Goods Declaration | Electronic export customs declaration |
| **PIB** | Pemberitahuan Impor Barang | Import Goods Declaration | Electronic import customs declaration |
| **NPE** | Nota Pelayanan Ekspor | Export Service Note | Export release approval document |
| **SPPB** | Surat Persetujuan Pengeluaran Barang | Goods Release Approval Letter | Import release approval document |
| **SSPCP** | Surat Setoran Pabean, Cukai, dan Pajak | Customs, Excise and Tax Payment Slip | Proof of duty/tax payment |
| **PPJK** | Pengusaha Pengurusan Jasa Kepabeanan | Customs Brokerage Service Company | Licensed customs broker |
| **EMKL** | Ekspedisi Muatan Kapal Laut | Sea Cargo Expedition | Freight forwarding company |
| **NIK** | Nomor Identitas Kepabeanan | Customs Identity Number | Customs registration (now via NIB) |
| **NIB** | Nomor Induk Berusaha | Master Business Number | Unified business ID via OSS system |
| **API-U** | Angka Pengenal Importir Umum | General Importer ID | License for general trading importers (now part of NIB) |
| **API-P** | Angka Pengenal Importir Produsen | Producer Importer ID | License for manufacturer importers (now part of NIB) |
| **ET** | Eksportir Terdaftar | Registered Exporter | Required for certain restricted exports |
| **IT** | Importir Terdaftar | Registered Importer | Required for certain restricted imports |
| **PI** | Persetujuan Impor | Import Approval | Specific approval for LARTAS goods |
| **LS** | Laporan Surveyor | Surveyor Report | Pre-shipment inspection certificate |
| **INSW** | Indonesia National Single Window | - | Electronic trade facilitation platform |
| **CEISA** | - | Customs-Excise Information System and Automation | DJBC's electronic customs processing system |
| **OSS** | Online Single Submission | - | Business licensing system (replaces manual permits) |

### 4.2 Channel/Lane Abbreviations

| Abbreviation | Full Name | English |
|-------------|-----------|---------|
| **SPJH** | Surat Pemberitahuan Jalur Hijau | Green Lane Notification |
| **SPJK** | Surat Pemberitahuan Jalur Kuning | Yellow Lane Notification |
| **SPJM** | Surat Pemberitahuan Jalur Merah | Red Lane Notification |
| **MITA** | Mitra Utama Kepabeanan | Priority Partner (AEO equivalent) |

### 4.3 Tax/Duty Abbreviations

| Abbreviation | Full Name | English | Typical Rate |
|-------------|-----------|---------|-------------|
| **BM** | Bea Masuk | Import Duty | 0%-150% (per HS Code) |
| **BK** | Bea Keluar | Export Duty | Varies (CPO, minerals) |
| **PPN** | Pajak Pertambahan Nilai | Value Added Tax (VAT) | 11% (standard) / 12% (luxury) |
| **PPnBM** | Pajak Penjualan Barang Mewah | Luxury Goods Sales Tax | 10%-95% |
| **PPh 22** | Pajak Penghasilan Pasal 22 | Income Tax Article 22 | 2.5% / 7.5% / 5% |
| **BMTP** | Bea Masuk Tindakan Pengamanan | Safeguard Duty | Varies |
| **BMAD** | Bea Masuk Anti-Dumping | Anti-Dumping Duty | Varies |
| **BMI** | Bea Masuk Imbalan | Countervailing Duty | Varies |

### 4.4 Other Key Terms

| Term | Meaning |
|------|---------|
| **Kawasan Pabean** | Customs area (port/airport under customs control) |
| **Kawasan Berikat (KB)** | Bonded Zone - manufacturing area with duty deferral |
| **Gudang Berikat (GB)** | Bonded Warehouse - storage with duty deferral |
| **TLDDP** | Tempat Lain Dalam Daerah Pabean (Other Places in Customs Territory = mainland Indonesia) |
| **Manifest** | Inward/Outward manifest filed by carrier |
| **BC 1.1** | Inward manifest document code |
| **BC 2.0** | PIB document code |
| **BC 3.0** | PEB document code |
| **NLE** | National Logistics Ecosystem (port community system) |
| **Barantan** | Badan Karantina (Quarantine Agency under Kementan) |
| **SNI** | Standar Nasional Indonesia (Indonesian National Standard) |
| **BPJPH** | Badan Penyelenggara Jaminan Produk Halal (Halal Product Assurance Agency) |

---

## 5. TYPICAL CHARGES BREAKDOWN

### 5.1 Ocean Freight Components

| Charge | Abbreviation | Description | Typical Range |
|--------|-------------|-------------|--------------|
| **Ocean Freight** | O/F | Base shipping cost, port-to-port | US$ 500-5,000+ per TEU (volatile) |
| **Bunker Adjustment Factor** | BAF / BUC | Fuel surcharge, fluctuates with oil prices | US$ 100-800 per TEU |
| **Currency Adjustment Factor** | CAF | Currency fluctuation surcharge | 0-10% of O/F |
| **Peak Season Surcharge** | PSS | High-demand period surcharge | US$ 100-1,000 per TEU |
| **War Risk Surcharge** | WRS | For routes through conflict zones | US$ 0-100 per TEU |
| **Emergency Bunker Surcharge** | EBS | Emergency fuel price surcharge | US$ 50-300 per TEU |
| **General Rate Increase** | GRI | Carrier rate increase announcement | Varies |
| **Low Sulphur Surcharge** | LSS | IMO 2020 low-sulphur fuel compliance | US$ 50-200 per TEU |

### 5.2 Local Charges at Indonesian Ports

#### Export Side (Origin)

| Charge | Description | Typical Range (per container) |
|--------|-------------|------------------------------|
| **THC (Origin)** | Terminal Handling Charge at load port | US$ 100-250 (20') / US$ 150-400 (40') |
| **Doc Fee** | Bill of Lading documentation fee | US$ 35-75 |
| **Seal Fee** | Container seal cost | US$ 10-20 |
| **LSS** | Low Sulphur Surcharge | US$ 30-50 per TEU |
| **VGM** | Verified Gross Mass filing (SOLAS) | US$ 15-30 |
| **ISPS** | Port security surcharge | US$ 5-15 |
| **Lift On** | Loading container onto chassis at CY | IDR 500,000-1,500,000 |
| **Customs Clearance (Export)** | PPJK handling fee for PEB filing | IDR 750,000-2,500,000 |
| **EDI Fee** | Electronic data interchange to customs | IDR 100,000-250,000 |
| **Trucking (port area)** | Container pickup from CY | IDR 1,500,000-5,000,000 |

#### Import Side (Destination)

| Charge | Description | Typical Range (per container) |
|--------|-------------|------------------------------|
| **THC (Destination)** | Terminal Handling Charge at discharge port | US$ 150-420 (20') / US$ 200-550 (40') |
| **D/O Fee** | Delivery Order fee from shipping line | IDR 750,000-2,500,000 |
| **Doc Fee** | Import document processing | US$ 35-75 |
| **Lift Off** | Unloading from chassis at CY | IDR 500,000-1,500,000 |
| **Customs Clearance (Import)** | PPJK handling fee for PIB filing | IDR 1,500,000-5,000,000 |
| **EDI Fee** | Electronic data interchange | IDR 100,000-250,000 |
| **Storage** | Container storage at port (after free time) | IDR 40,000-120,000 per TEU/day |
| **Demurrage** | Container at port past free time (to shipping line) | IDR 675,000/day (20') or IDR 1,135,000/day (40') |
| **Detention** | Container outside port past free time | IDR 675,000-1,350,000/day (20') |
| **ISPS** | Port security surcharge | US$ 5-15 |
| **Quarantine Inspection** | If required for agricultural/food goods | IDR 500,000-3,000,000 |

### 5.3 Trucking Within Indonesia

| Route | Container Size | Estimated Cost (IDR) | Notes |
|-------|---------------|---------------------|-------|
| Tanjung Priok - Jakarta Industrial Area | 20' | 2,000,000 - 5,000,000 | Within city |
| Tanjung Priok - Cikarang/Bekasi | 20' | 4,000,000 - 7,000,000 | Industrial corridor |
| Tanjung Priok - Bandung | 20' | 8,000,000 - 12,000,000 | Mountain pass |
| Tanjung Perak - Surabaya Industrial Area | 20' | 2,000,000 - 4,000,000 | Within city |
| Tanjung Perak - Pasuruan/Malang | 20' | 5,000,000 - 8,000,000 | East Java corridor |
| Belawan - Medan Industrial Area | 20' | 2,000,000 - 4,000,000 | Within city |
| Cross-Java (Jakarta - Surabaya) | 20' | 12,000,000 - 18,000,000 | ~800km, toll road |
| Medan - Jakarta (inter-island truck+ferry) | 20' | 27,000,000 - 35,000,000 | Multi-modal |

**Notes on trucking:**
- 40' containers typically 20-40% more expensive than 20'
- Overweight permits (>30 tons gross) add IDR 1,000,000-3,000,000
- Toll fees on Java toll roads add IDR 500,000-2,000,000
- Weekend/holiday surcharges may apply
- Fuel surcharge fluctuates with diesel prices

### 5.4 Customs Brokerage Fees (PPJK)

| Service | Typical Range (IDR) | Notes |
|---------|---------------------|-------|
| **Import clearance handling** | 1,500,000 - 5,000,000 | PIB filing through SPPB |
| **Export clearance handling** | 750,000 - 2,500,000 | PEB filing through NPE |
| **EDI transmission** | 100,000 - 250,000 | Per declaration |
| **Document printing/admin** | 100,000 - 300,000 | Per shipment |
| **Red channel assistance** | 1,000,000 - 3,000,000 | Additional for physical inspection |
| **LARTAS document handling** | 500,000 - 2,000,000 | PI/LS coordination |
| **HS Code consultation** | 500,000 - 1,500,000 | Classification advice |
| **Customs audit assistance** | Negotiable | Post-clearance audit support |

### 5.5 Complete Cost Simulation: Sea Import FCL 20' to Jakarta

| Cost Item | Amount (IDR) | Amount (USD approx) |
|-----------|-------------|-------------------|
| **Ocean Freight (Shanghai-Jakarta)** | | ~800 |
| **Origin Charges (China side)** | | ~250 |
| THC Origin | | 150 |
| Doc Fee + Seal | | 50 |
| BAF/LSS | | 50 |
| **Destination Charges (Jakarta)** | | |
| THC Destination | 5,500,000 | ~350 |
| D/O Fee | 1,500,000 | ~95 |
| Doc Fee | 500,000 | ~32 |
| Lift Off | 800,000 | ~51 |
| ISPS | 100,000 | ~6 |
| **Customs Clearance** | | |
| PPJK Handling Fee | 2,500,000 | ~158 |
| EDI Fee | 200,000 | ~13 |
| **Import Duties & Taxes** | | |
| BM (Import Duty) @ 10% | 12,640,000 | ~800 |
| PPN (VAT) @ 11% | 15,270,400 | ~966 |
| PPh 22 @ 2.5% | 3,470,000 | ~220 |
| **Trucking (Priok to Cikarang)** | 5,500,000 | ~348 |
| **Insurance** | 500,000 | ~32 |
| **TOTAL LANDED COST** | | **~4,121** |

*(Based on CIF value US$ 8,000, HS Code with 10% BM rate, exchange rate ~15,800 IDR/USD)*

---

## 6. GAME SCENARIO QUICK REFERENCE

### 6.1 Typical Timeline: Export from Jakarta

| Day | Event |
|-----|-------|
| D-7 | Booking confirmed with shipping line |
| D-5 | Documents prepared, COO applied |
| D-3 | Container picked up from depot, stuffed at factory |
| D-2 | PEB submitted to customs via CEISA |
| D-2 | NPE received (green channel) |
| D-1 | Container gate-in at Tanjung Priok (before cut-off) |
| D-0 | Vessel departs |
| D+2 | B/L issued by shipping line |

### 6.2 Typical Timeline: Import to Jakarta

| Day | Event |
|-----|-------|
| D-5 | Pre-alert documents received from origin forwarder |
| D-3 | Arrival notice from shipping line |
| D-2 | D/O collected, PIB prepared |
| D-1 | Duties paid, PIB submitted |
| D-0 | **Vessel arrives** at Tanjung Priok |
| D+1 | Container discharged, channel assigned |
| D+1 | Green channel: SPPB same day |
| D+1-3 | Yellow channel: document review 1-3 days |
| D+1-7 | Red channel: physical inspection 3-7 days |
| D+2 | (Green) Container released, trucked to warehouse |
| D+2 | Container returned empty to depot |

### 6.3 Risk Events for Game Scenarios

| Event | Impact | Resolution |
|-------|--------|------------|
| **Red channel assigned** | +3-7 days delay, extra inspection fees | Cooperate with inspection, provide documents |
| **HS Code mismatch** | Duty recalculation, possible penalty (100-1000% of duty shortfall) | Correct PIB, pay difference + penalty |
| **Missing LARTAS document** | Goods held at port, demurrage accruing | Obtain PI/LS retroactively or re-export |
| **Container damage** | Insurance claim, survey required | File claim with insurance, Lloyd's agent survey |
| **Port congestion** | Vessel waiting at anchorage, delayed discharge | Wait; consider alternative port if severe |
| **Customs valuation dispute** | Customs sets higher value than declared | Provide supporting docs or accept customs value |
| **Demurrage/detention** | Extra costs IDR 675K-2.27M per day | Speed up clearance, negotiate free time extension |
| **SNI non-compliance** | Goods cannot be released | Apply for SNI certificate or re-export |
| **Document discrepancy** | B/L vs Invoice vs Packing List mismatch | Amend documents at origin, issue correction letter |
| **Overweight container** | Rejected at gate, trucking violations | Repack or obtain overweight permit |

### 6.4 Key Regulations Reference

| Regulation | Subject |
|-----------|---------|
| UU No. 17/2006 | Customs Law (amendment to UU 10/1995) |
| UU No. 7/2014 | Trade Law |
| PP No. 34/2016 | Import Duty Tariff |
| PMK No. 4/2025 | Updated import duty rates for e-commerce/consignment |
| PMK No. 25/2025 | Updated customs declaration rules (e-seals) |
| Permendag No. 20-23/2025 | Updated LARTAS requirements (chemicals, textiles, consumer goods, industrial goods) |
| Permendag No. 47/2025 | Updated prohibited imports list (effective Jan 2026) |
| PER-5/BC/2025 | Revised customs declaration protocols |

---

*Sources: DJBC (beacukai.go.id), INSW (insw.go.id), Kemendag, Emerhub, Cekindo, DHL Indonesia, SGS, Ship4wd, Customspedia, InvestinAsia, trade.gov, various freight forwarder publications. Research date: February 2026.*
