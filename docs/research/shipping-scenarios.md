# Incoterms Game Scenarios - Indonesian Export/Import

> 24 realistic shipping scenarios for an educational Incoterms challenge game.
> All scenarios based on real Indonesian trade patterns, verified HS codes, and actual port pairs.
> Designed for freight forwarding professionals and logistics students.

---

## How to Use This Data

Each scenario contains fields that map directly to game JSON:

```
id, title, difficulty, direction (export/import),
commodity, hs_code, origin_port, destination_port,
container_type, cargo_value_usd, correct_incoterm,
why_correct, common_mistakes[], special_considerations[],
hint, explanation
```

Difficulty levels: Beginner (B), Intermediate (I), Advanced (A)

---

## EXPORT SCENARIOS

---

### EX-01: Teak Furniture to Rotterdam

| Field | Value |
|-------|-------|
| **Direction** | Export |
| **Difficulty** | Beginner |
| **Commodity** | Teak wood dining tables and chairs (knocked-down, flat-packed) |
| **HS Code** | 9403.60 (Other wooden furniture) |
| **Origin** | Tanjung Priok, Jakarta |
| **Destination** | Rotterdam, Netherlands |
| **Container** | 40' HC (High Cube) |
| **Cargo Value** | USD 28,000 |
| **Correct Incoterm** | **FOB Jakarta** |

**Why FOB:** Indonesian furniture exporters predominantly sell FOB. The buyer (European importer) has established freight contracts with European carriers offering better rates on Europe-bound routes. The seller handles export customs clearance and local trucking to port -- tasks they know well. Risk transfers once goods are loaded on the vessel.

**Common Mistakes:**
1. Using **EXW** -- buyer cannot perform Indonesian export customs clearance (requires local exporter license/PEB). EXW forces buyer to handle export formalities they legally cannot do as a foreign entity.
2. Using **CIF** -- seller adds freight markup (typically USD 400-1,200 per container vs buyer-negotiated rates). Small furniture exporters rarely have competitive ocean freight contracts to Europe.
3. Confusing **FOB with FCA** -- for containerized cargo, ICC technically recommends FCA, but FOB remains the dominant trade convention in Indonesian furniture exports.

**Special Considerations:**
- Wooden packaging requires ISPM-15 fumigation certificate (heat treatment stamp)
- EU requires CE marking for furniture sold to consumers
- V-Legal/SVLK (timber legality verification) document mandatory for wood products from Indonesia
- Flat-pack reduces cube utilization issues in 40'HC

**Hint:** "The European buyer has a long-term deal with Maersk. Who should arrange the ocean freight?"

---

### EX-02: Crude Palm Oil to Mumbai

| Field | Value |
|-------|-------|
| **Direction** | Export |
| **Difficulty** | Intermediate |
| **Commodity** | Crude Palm Oil (CPO) in bulk |
| **HS Code** | 1511.10 (Crude palm oil) |
| **Origin** | Belawan, Medan (North Sumatra) |
| **Destination** | Nhava Sheva (JNPT), Mumbai |
| **Container** | Bulk liquid tanker (not containerized) |
| **Cargo Value** | USD 480,000 (approx. 500 MT at ~USD 960/MT) |
| **Correct Incoterm** | **CIF Mumbai** |

**Why CIF:** Palm oil bulk trade between Indonesia and India traditionally uses CIF. Indonesian palm oil majors (Wilmar, Musim Mas, Sinar Mas) own or charter tanker vessels and have integrated logistics. Belawan is a bulk liquid terminal. The seller controls the entire chain to destination port. Indian buyers prefer CIF because Indonesian customs valuation for export uses FOB, while Indian customs valuation for import uses CIF -- matching the declared value simplifies both sides.

**Common Mistakes:**
1. Using **FOB** -- while valid, Indian CPO buyers often lack direct tanker chartering capability on the Belawan-India route. FOB works for large Indian traders but not mid-size buyers.
2. Using **CFR** instead of CIF -- omitting insurance on a USD 480K bulk cargo is risky. CIF includes minimum Institute Cargo Clauses (C) coverage. CPO is susceptible to contamination and temperature degradation.
3. Forgetting that **CIF and FOB are sea-only terms** -- correct here since this IS ocean bulk, but students often forget this restriction.

**Special Considerations:**
- Indonesia CPO export levy (Pungutan Ekspor) applies -- variable rate tied to CPO reference price, currently ~USD 33-88/MT
- Bulk liquid terminal at Belawan handles ~40% of port throughput as palm oil
- Indian import duty on CPO fluctuates (currently ~7.5% basic customs duty)
- Cargo insurance should cover contamination risk (Institute Cargo Clauses A recommended, not just C)
- Pre-shipment inspection (surveyor) required by both Indonesian export and Indian import regulations

**Hint:** "The Indonesian seller owns tanker vessels. The Indian buyer just wants the oil delivered to their port. This is a bulk liquid commodity, not a container."

---

### EX-03: Garments to Los Angeles

| Field | Value |
|-------|-------|
| **Direction** | Export |
| **Difficulty** | Beginner |
| **Commodity** | Cotton t-shirts and casual wear |
| **HS Code** | 6109.10 (T-shirts, singlets, knitted cotton) |
| **Origin** | Tanjung Emas, Semarang |
| **Destination** | Long Beach / Los Angeles, USA |
| **Container** | 40' HC |
| **Cargo Value** | USD 65,000 |
| **Correct Incoterm** | **FOB Semarang** |

**Why FOB:** Standard practice for Indonesian garment exports to the US. American importers (brands like Gap, H&M, Walmart suppliers) negotiate their own ocean freight contracts across all sourcing countries. They want control over logistics, carrier selection, and routing. The Semarang garment factory handles everything up to vessel loading.

**Common Mistakes:**
1. Using **EXW** -- same issue as furniture: foreign buyer cannot do PEB (Pemberitahuan Ekspor Barang / export declaration) in Indonesia.
2. Using **DDP** -- the garment factory has zero capability to handle US customs clearance, pay US import duties, or manage inland US trucking. DDP would require an extensive US-side logistics setup.
3. Using **CIF** when the US brand already has a master service agreement with a global forwarder -- seller's CIF quote will be more expensive.

**Special Considerations:**
- US import duty on knitted cotton t-shirts from Indonesia: ~16.5% (HS 6109.10.00)
- Generalized System of Preferences (GSP) status: Indonesia was removed from US GSP in 2020, reinstated provisions vary -- verify current status
- Buyer typically provides fabric specs; seller does CMT (Cut-Make-Trim)
- Social compliance audit (BSCI/WRAP/SA8000) often required by US brands
- Semarang is Central Java's garment hub with direct vessel calls

**Hint:** "The American buyer is a major retail brand that ships from 12 countries. They have their own freight deal."

---

### EX-04: Arabica Coffee to Hamburg

| Field | Value |
|-------|-------|
| **Direction** | Export |
| **Difficulty** | Intermediate |
| **Commodity** | Green Arabica coffee beans (Mandheling grade) |
| **HS Code** | 0901.11 (Coffee, not roasted, not decaffeinated) |
| **Origin** | Tanjung Perak, Surabaya |
| **Destination** | Hamburg, Germany |
| **Container** | 20' GP (standard) -- 320 bags x 60kg = 19,200 kg net |
| **Cargo Value** | USD 72,000 (approx. USD 3.75/kg for specialty grade) |
| **Correct Incoterm** | **FOB Surabaya** |

**Why FOB:** Indonesian coffee trade is overwhelmingly FOB. European specialty roasters and green bean traders (e.g., Neumann Kaffee, Volcafe) have their own freight arrangements. The exporter handles inland transport from Surabaya warehouses to Tanjung Perak, export clearance, and loading. Coffee exporters in Indonesia must hold an ETPIK (Eksportir Terdaftar Produk Industri Kehutanan) or specific coffee export license.

**Common Mistakes:**
1. Using **CFR or CIF** -- coffee exporters rarely arrange ocean freight to Europe. The spread between FOB and CIF for this route is USD 2,900+ per 20' container. European traders want to control this cost.
2. Using **FCA Surabaya warehouse** -- while technically more precise for container cargo, the global coffee trade convention remains FOB. Using FCA can confuse the Letter of Credit terms and doesn't match industry standard contracts (e.g., European Contract for Coffee / ECC).
3. Not understanding that **FOB price in coffee is quoted per kilogram or per pound**, not per container -- students confuse cargo value vs freight cost.

**Special Considerations:**
- EU ETS (Emissions Trading System) surcharge now applies on Hamburg-bound routes -- ~USD 100-200 per TEU in 2025/2026
- Indonesian coffee requires phytosanitary certificate (from Karantina/BKIPM)
- ICO (International Coffee Organization) Certificate of Origin needed
- EU Deforestation Regulation (EUDR) requires traceability to farm plot level -- critical compliance requirement effective 2025
- 20' container preferred over 40' because coffee is heavy (19.2 MT net) -- hits weight limit before volume limit
- Moisture content must be monitored (max 12.5%) -- container rain/sweat risk on long voyages

**Hint:** "The German roaster buys from 8 origin countries. They want one freight forwarder to handle all their inbound logistics."

---

### EX-05: Electronics Assembly from Batam FTZ to Singapore

| Field | Value |
|-------|-------|
| **Direction** | Export |
| **Difficulty** | Advanced |
| **Commodity** | Assembled PCB modules and cable harnesses |
| **HS Code** | 8534.00 (Printed circuits) / 8544.42 (Connectors fitted with connectors) |
| **Origin** | Batu Ampar Port, Batam |
| **Destination** | Pasir Panjang Terminal, Singapore |
| **Container** | 20' GP |
| **Cargo Value** | USD 185,000 |
| **Correct Incoterm** | **FCA Batam** |

**Why FCA:** Batam is a Free Trade Zone (Kawasan Perdagangan Bebas). Goods manufactured in Batam FTZ for export do NOT go through standard Indonesian customs export procedures -- they exit via the FTZ authority (BP Batam). FCA is appropriate because the seller delivers goods to the carrier at a named place in Batam (factory gate or FTZ terminal). The short sea crossing to Singapore (~1 hour by ferry for documents, containers go by barge) means the buyer typically arranges the simple cross-strait transport.

**Common Mistakes:**
1. Using **FOB** -- technically FOB requires formal export clearance. Batam FTZ has a different customs regime (goods are considered "outside Indonesian customs territory"). FOB implies standard PEB which doesn't apply the same way in FTZ.
2. Using **EXW** -- the seller (Batam factory) should at minimum deliver to the FTZ terminal. EXW at factory gate creates problems because the Singapore buyer cannot easily arrange pickup from inside an Indonesian FTZ.
3. Not specifying the **named place** clearly -- "FCA Batam" is too vague. Should be "FCA [Factory Name], Batam Industrial Park" or "FCA Batu Ampar Terminal, Batam."
4. Assuming standard Indonesian export duties apply -- Batam FTZ goods are exempt from export duties and VAT.

**Special Considerations:**
- Batam FTZ treated as outside Indonesian customs territory -- no import duty on raw materials entering Batam, no export duty leaving
- Goods moving from Batam to other Indonesian provinces (e.g., Jakarta) ARE treated as imports and incur duties
- Singapore has zero import duty on most electronics
- Short transit (Batam-Singapore ~20 nautical miles) -- often same-day delivery
- Electronics may require ITAR/EAR compliance check if US-origin components are involved
- PMK No. 4/2025 updated FTZ regulations -- verify current treatment

**Hint:** "Batam is legally 'outside' Indonesia for customs purposes. The factory is 20 miles from Singapore. Think about what export clearance really means here."

---

### EX-06: Natural Rubber to Qingdao

| Field | Value |
|-------|-------|
| **Direction** | Export |
| **Difficulty** | Intermediate |
| **Commodity** | Technically Specified Rubber (TSR 20 / SIR 20) in bales |
| **HS Code** | 4001.22 (Technically specified natural rubber, TSNR) |
| **Origin** | Boom Baru Port, Palembang |
| **Destination** | Qingdao, China |
| **Container** | 20' GP -- rubber is dense (~20 MT per 20' container) |
| **Cargo Value** | USD 32,000 (approx. 20 MT at ~USD 1,600/MT) |
| **Correct Incoterm** | **FOB Palembang** |

**Why FOB:** Indonesian rubber exports to China follow the FOB convention. Chinese tire manufacturers and rubber traders arrange their own freight, often consolidating purchases from multiple Indonesian ports (Palembang, Jambi, Pontianak). SIR 20 is a commodity with transparent pricing on the Singapore Commodity Exchange (SICOM) -- FOB Indonesia is the standard pricing basis.

**Common Mistakes:**
1. Using **CIF** -- Indonesian rubber exporters (mostly small-to-medium plantation companies) do not have competitive freight rates to China. Chinese buyers with volume leverage get better rates.
2. Using **CFR** thinking it helps the seller "add value" -- the freight markup is transparent in rubber commodity markets. Buyers will simply deduct it from the CFR price to calculate effective FOB, then compare against other suppliers.
3. Overlooking that **20' containers hit weight limits** before volume -- rubber bales are extremely dense. A 40' container is rarely used because you'd exceed the maximum payload (~26 MT) before filling the space.

**Special Considerations:**
- SIR 20 = Standard Indonesian Rubber grade 20 (most traded grade)
- Indonesian rubber export levy: currently minimal but subject to government adjustment
- Rubber bales must be wrapped in polyethylene to prevent contamination
- Fumigation certificate required (methyl bromide treatment)
- South Sumatra (Palembang) is Indonesia's #1 rubber producing province
- SICOM futures pricing references FOB Indonesian port
- Container weight verification (VGM - Verified Gross Mass) critical -- overweight containers rejected

**Hint:** "This commodity has a futures exchange price quoted as 'FOB Indonesia.' The Chinese buyer purchases from 5 different ports across Sumatra and Kalimantan."

---

### EX-07: Handicrafts from Bali (Small Shipper LCL)

| Field | Value |
|-------|-------|
| **Direction** | Export |
| **Difficulty** | Beginner |
| **Commodity** | Handwoven rattan baskets, wooden carvings, batik textiles |
| **HS Code** | 4602.19 (Basketwork of rattan) / 4420.19 (Wood ornamental articles) |
| **Origin** | Benoa Port, Bali (consolidated via Surabaya) |
| **Destination** | Sydney, Australia |
| **Container** | LCL (Less than Container Load) -- 4 CBM, 800 kg |
| **Cargo Value** | USD 3,500 |
| **Correct Incoterm** | **FCA Denpasar** |

**Why FCA:** Small Bali handicraft exporters typically deliver goods to a freight forwarder's warehouse in Denpasar or the Benoa port area. The cargo is LCL (not enough to fill a container), so it will be consolidated with other shipments. FCA is the correct term because the seller delivers to the forwarder (the "carrier") at a named place. The forwarder handles consolidation, ocean freight, and deconsolidation in Sydney.

**Common Mistakes:**
1. Using **FOB** -- FOB is technically for full container loads where goods are loaded "on board" a named vessel. For LCL cargo, the seller delivers to the consolidation warehouse, not directly to the vessel. ICC recommends FCA for LCL/container cargo.
2. Using **EXW** -- the Bali artisan cannot expect an Australian buyer to pick up from a village workshop. Export clearance (PEB) is the seller's responsibility and cannot be delegated to the foreign buyer.
3. Using **CIF** -- a small exporter shipping 4 CBM has no leverage to negotiate ocean freight rates. The buyer's forwarder in Australia likely has a standing LCL consolidation service that is cheaper.
4. Not realizing **LCL has different cost dynamics** -- per-CBM rates, warehouse handling fees, deconsolidation fees at destination all apply.

**Special Considerations:**
- Bali handicrafts often routed via Surabaya (Tanjung Perak) for consolidation since Benoa has limited direct international services
- Australia requires fumigation for all wooden/plant-material items (AQIS compliance)
- Rattan products need CITES verification if species is listed
- Australia-Indonesia Comprehensive Economic Partnership Agreement (IA-CEPA) may reduce duties
- Small value shipment -- insurance sometimes skipped but risky for fragile handicrafts
- LCL minimum charge typically 1 CBM even if actual cargo is smaller

**Hint:** "The artisan drops off 6 boxes at a warehouse in Denpasar. The boxes will share a container with cargo from 4 other exporters. This is NOT a full container."

---

### EX-08: Automotive Parts to Bangkok

| Field | Value |
|-------|-------|
| **Direction** | Export |
| **Difficulty** | Intermediate |
| **Commodity** | Stamped steel brackets and rubber seals for automotive assembly |
| **HS Code** | 8708.99 (Parts and accessories for motor vehicles) |
| **Origin** | Tanjung Priok, Jakarta |
| **Destination** | Laem Chabang, Thailand |
| **Container** | 20' GP |
| **Cargo Value** | USD 42,000 |
| **Correct Incoterm** | **FCA Jakarta** |

**Why FCA:** Automotive parts trade within ASEAN often uses FCA because the OEM (Original Equipment Manufacturer) buyer -- typically a Japanese auto manufacturer's Thai assembly plant (Toyota, Honda, Suzuki) -- manages a regional supply chain with their own logistics provider (e.g., NYK Logistics, MOL Logistics). The Indonesian tier-2 supplier delivers to the logistics provider's consolidation center in Jakarta. The OEM's logistics arm handles everything from there.

**Common Mistakes:**
1. Using **FOB** -- while FOB works for sea freight, automotive OEMs increasingly use multimodal transport (sea + truck to inland factory). FCA is transport-mode neutral and works whether the shipment goes by sea, air, or multimodal.
2. Using **DDP Bangkok** -- the Indonesian parts supplier has zero capability to clear Thai customs or pay Thai import duties. DDP is unrealistic for a tier-2 supplier.
3. Using **CPT** -- while the seller could arrange freight to Laem Chabang, the OEM buyer has contracted rates across their entire ASEAN supply chain that are far cheaper than anything the small supplier can negotiate.
4. Not specifying **"FCA [Logistics Provider Warehouse], Jakarta"** -- precision on the named place is critical for automotive JIT (Just-in-Time) supply chains.

**Special Considerations:**
- ASEAN Free Trade Area (AFTA/ATIGA) -- 0% import duty if Form D Certificate of Origin is provided and Rules of Origin met (40% Regional Value Content)
- Automotive parts require strict quality documentation (PPAP, ISIR, material certificates)
- JIT delivery means precise scheduling -- delays can halt an assembly line (penalties of ~USD 10,000/minute)
- Parts may be shipped in returnable packaging (metal bins) -- Incoterm should clarify packaging ownership
- Bangkok is inland from Laem Chabang -- total transit includes ~2 hours truck from port to factory

**Hint:** "Toyota's logistics team in Bangkok controls all inbound shipments from 6 ASEAN countries. The supplier just needs to get the parts to Toyota's appointed forwarder in Jakarta."

---

### EX-09: Frozen Shrimp to Tokyo (Reefer)

| Field | Value |
|-------|-------|
| **Direction** | Export |
| **Difficulty** | Advanced |
| **Commodity** | Frozen vannamei shrimp (headless, shell-on) |
| **HS Code** | 0306.17 (Frozen shrimps and prawns) |
| **Origin** | Makassar (Soekarno-Hatta Port), South Sulawesi |
| **Destination** | Tokyo (Oi Container Terminal) |
| **Container** | 20' Reefer at -18C |
| **Cargo Value** | USD 95,000 |
| **Correct Incoterm** | **CFR Tokyo** |

**Why CFR:** Indonesian seafood exporters to Japan commonly use CFR. The Japanese market has strict food safety requirements (MHLW inspection) and the buyer handles insurance separately with comprehensive Japanese marine insurance that covers the full supply chain including cold chain breakdown. The Indonesian exporter arranges freight because Makassar-Tokyo reefer services are limited and the exporter has relationships with carriers offering reefer slots. CFR means the seller pays freight to Tokyo, but risk transfers at Makassar loading.

**Common Mistakes:**
1. Using **CIF** instead of CFR -- Japanese seafood importers prefer to arrange their own insurance under Institute Cargo Clauses (A) with specific reefer breakdown and spoilage coverage. CIF only requires minimum Clauses (C) which excludes reefer breakdown.
2. Using **FOB** -- reefer container slots from Makassar are scarce. The exporter with a local carrier relationship can secure space more reliably than a Japanese buyer trying to book reefer slots remotely from Tokyo.
3. Forgetting **reefer-specific costs** -- plug-in charges at origin terminal (USD 100-200), pre-trip inspection (PTI), genset if needed for inland transport. These must be clearly allocated between buyer and seller.
4. Not understanding **risk vs cost split** -- under CFR, the seller PAYS freight but RISK transfers at loading port. If shrimp arrives thawed in Tokyo, whose problem is it? The buyer's (after loading).

**Special Considerations:**
- Japan requires: Health Certificate from BKIPM (Indonesia Fish Quarantine), certificate of analysis for antibiotics/residues
- Japan's MHLW (Ministry of Health, Labour and Welfare) may inspect at port -- rejection rate ~1-2% for Indonesian shrimp
- Cold chain integrity critical: -18C must be maintained from processing plant to vessel to discharge. Temperature logger in container.
- Makassar has limited direct reefer services to Japan -- may transship via Surabaya or Singapore
- Reefer container costs ~1.5-2x dry container rates
- VGM (Verified Gross Mass) required -- reefer tare weight is higher than dry container (~3,800 kg vs ~2,200 kg)

**Hint:** "The Japanese buyer wants to insure the cargo themselves with their own policy that covers reefer breakdown. But the seller books the reefer slot because few carriers serve the Makassar route."

---

### EX-10: Processed Nickel to Tianjin

| Field | Value |
|-------|-------|
| **Direction** | Export |
| **Difficulty** | Advanced |
| **Commodity** | Ferronickel (FeNi) in ingots |
| **HS Code** | 7202.60 (Ferronickel) |
| **Origin** | Halmahera / transloaded at Tanjung Priok, Jakarta |
| **Destination** | Tianjin, China |
| **Container** | Breakbulk / bulk carrier (not containerized -- heavy cargo) |
| **Cargo Value** | USD 2,400,000 (approx. 1,000 MT at ~USD 2,400/MT) |
| **Correct Incoterm** | **FOB Indonesian Port** |

**Why FOB:** Indonesian ferronickel exports to China use FOB because Chinese stainless steel manufacturers and trading houses charter their own bulk vessels. ~90% of Indonesian nickel exports go to China, and the large Chinese buyers have dedicated shipping arrangements. The smelter in Halmahera (Morowali or Weda Bay) loads onto barges to a transshipment point, then onto ocean-going bulk carriers. FOB is standard in commodity metal trade.

**Common Mistakes:**
1. Using **CIF** -- Chinese nickel buyers charter vessels specifically for this route. They have freight rates far below anything an Indonesian smelter could negotiate for a single shipment.
2. Using **EXW** -- the smelter is on a remote island (Halmahera/Sulawesi). "Ex Works smelter" would mean the Chinese buyer somehow arranges barges, local port handling, and Indonesian export clearance from a remote location -- completely impractical.
3. Confusing **raw nickel ore** (HS 2604, BANNED for export since 2020) with **processed ferronickel** (HS 7202.60, legal to export). Students must understand Indonesia's downstream processing policy.
4. Not accounting for **transshipment** -- cargo often moves by barge from remote smelter to a main port before ocean vessel loading. The FOB point must be clearly defined.

**Special Considerations:**
- Indonesia BANNED raw nickel ore exports (HS 2604) since January 2020 -- only processed nickel products (ferronickel, nickel matte, nickel pig iron) can be exported
- Export duty may apply depending on processing level and current regulations
- Ministry of Energy and Mineral Resources (ESDM) export recommendation required
- Surveyor inspection (quantity and quality) at loading port is mandatory
- High-value cargo (USD 2.4M) -- Letter of Credit typically required
- LME (London Metal Exchange) nickel price is reference for ferronickel pricing
- Environmental scrutiny: Chinese buyers increasingly require ESG documentation

**Hint:** "China buys 90% of Indonesia's nickel output and sends their own ships. Raw ore cannot leave Indonesia -- this must be processed product."

---

### EX-11: Spices (White Pepper) to Ho Chi Minh City

| Field | Value |
|-------|-------|
| **Direction** | Export |
| **Difficulty** | Beginner |
| **Commodity** | Muntok white pepper (whole, dried) |
| **HS Code** | 0904.12 (Pepper, crushed or ground) / 0904.11 (Pepper, neither crushed nor ground) |
| **Origin** | Pangkal Pinang (Bangka Island), consolidated via Tanjung Priok Jakarta |
| **Destination** | Cat Lai Port, Ho Chi Minh City, Vietnam |
| **Container** | 20' GP -- LCL or FCL depending on volume (scenario: FCL, 15 MT) |
| **Cargo Value** | USD 120,000 (approx. USD 8,000/MT for Muntok white pepper) |
| **Correct Incoterm** | **FOB Jakarta** |

**Why FOB:** Standard for Indonesian spice exports. Bangka Island's Muntok white pepper is a premium global product. Vietnamese buyers (re-processors or traders) arrange their own freight on the short ASEAN route. Jakarta serves as the consolidation point since Bangka has no international container port. The exporter handles inland logistics from Bangka to Jakarta and export clearance.

**Common Mistakes:**
1. Using **FOB Pangkal Pinang** -- there is no international container shipping service from Pangkal Pinang. Cargo must be trucked/ferried to Jakarta first. The FOB point should be the actual loading port (Tanjung Priok).
2. Using **CIF** for an intra-ASEAN short route -- Vietnam buyer can get cheaper freight on the Jakarta-HCMC lane (5-7 days transit, high frequency).
3. Confusing HS code **0904.11 (whole) vs 0904.12 (crushed/ground)** -- different duty rates at destination. Whole pepper is typically what Indonesia exports in bulk.

**Special Considerations:**
- Muntok white pepper is a geographical indication product from Bangka-Belitung
- Phytosanitary certificate required (Karantina Tumbuhan)
- ASEAN trade: ATIGA Form D for 0% preferential duty in Vietnam
- Pepper is hygroscopic -- container must be clean, dry, free from previous cargo odors
- Desiccant bags recommended inside container to prevent moisture damage
- ASTA (American Spice Trade Association) cleanliness specs often referenced even for non-US trade

**Hint:** "Bangka Island doesn't have an international port. The pepper travels by ferry to Jakarta before it gets on an ocean vessel."

---

### EX-12: Plywood to Jeddah

| Field | Value |
|-------|-------|
| **Direction** | Export |
| **Difficulty** | Intermediate |
| **Commodity** | Tropical hardwood plywood sheets (2440 x 1220mm) |
| **HS Code** | 4412.31 (Plywood with tropical wood outer ply) |
| **Origin** | Tanjung Priok, Jakarta |
| **Destination** | Jeddah Islamic Port, Saudi Arabia |
| **Container** | 20' GP (heavy -- plywood is dense, ~22 MT per 20') |
| **Cargo Value** | USD 18,000 |
| **Correct Incoterm** | **CFR Jeddah** |

**Why CFR:** Middle Eastern plywood buyers typically buy on CFR terms. Indonesian plywood exporters are large enough to arrange competitive freight to the Red Sea (well-established trade lane). Saudi buyers prefer CFR because it gives them a landed cost comparison across suppliers from Indonesia, Malaysia, and China. The buyer arranges their own insurance -- Saudi import regulations may require insurance from a Saudi-licensed insurer.

**Common Mistakes:**
1. Using **CIF** -- Saudi Arabia and many Middle Eastern countries require marine cargo insurance to be placed with a local insurer. If the Indonesian seller arranges insurance (CIF), the Saudi buyer may not be able to claim under it. CFR lets the buyer insure locally.
2. Using **FOB** when the buyer has no logistics capability -- small Saudi construction material importers often lack the ability to arrange freight from Southeast Asia. CFR is simpler for them.
3. Forgetting **V-Legal/SVLK** -- Indonesia's timber legality verification system is mandatory for all wood product exports. Without it, the shipment will be blocked at Indonesian customs.

**Special Considerations:**
- V-Legal (SVLK) document mandatory -- enforced at export
- SASO (Saudi Standards, Metrology and Quality Organization) conformity may be required
- Plywood for construction in Saudi Arabia must meet specific formaldehyde emission standards
- 20' container preferred over 40' due to weight density (same as rubber/coffee -- hits weight before volume)
- Jeddah has multiple terminals -- specify exact terminal in shipping instructions
- Saudi customs valuation uses CIF value for duty calculation (like Indonesia for imports)

**Hint:** "The Saudi buyer must insure cargo with a Saudi insurance company. The Indonesian exporter has good freight rates on the Jakarta-Red Sea route."

---

## IMPORT SCENARIOS

---

### IM-01: CNC Machinery from Shanghai (Heavy Lift)

| Field | Value |
|-------|-------|
| **Direction** | Import |
| **Difficulty** | Advanced |
| **Commodity** | CNC milling machine (single unit, 12 tons, 3.2m tall) |
| **HS Code** | 8459.61 (Milling machines, CNC) |
| **Origin** | Shanghai (Yangshan Deep Water Port), China |
| **Destination** | Tanjung Priok, Jakarta |
| **Container** | Open Top 40' or Flat Rack (oversized/heavy lift) |
| **Cargo Value** | USD 320,000 |
| **Correct Incoterm** | **DAP Jakarta (Buyer's Factory)** |

**Why DAP:** Heavy machinery imports from China to Indonesia commonly use DAP. The Chinese manufacturer has experience shipping heavy equipment globally and works with specialized heavy-lift forwarders. DAP means the seller delivers the machine to the buyer's factory in Jakarta -- handling export clearance, ocean freight, and inland delivery -- but the buyer handles import customs clearance and pays import duties. This is practical because only the Indonesian buyer (as registered importer/API holder) can clear goods through Indonesian customs.

**Common Mistakes:**
1. Using **DDP** -- the Chinese seller CANNOT perform Indonesian import customs clearance. DDP requires the seller to handle import duties and clearance, but Indonesian customs regulations require a local importer (API-U or API-P license holder) to file the PIB (import declaration).
2. Using **CIF** -- delivery ends at the port. A 12-ton CNC machine needs specialized lifting equipment (crane, low-bed trailer) for port-to-factory delivery. If CIF is used, the Indonesian buyer must separately arrange heavy-lift inland transport, which they may not have expertise in.
3. Using **FOB** -- the Indonesian SME buyer likely has no logistics network in China and cannot arrange heavy-lift container loading in Shanghai.
4. Not specifying **exact delivery address** -- "DAP Jakarta" is insufficient. Should be "DAP [Factory Address], Cikarang Industrial Estate, Bekasi" with specific access requirements (loading dock height, crane availability).

**Special Considerations:**
- Open Top or Flat Rack container required -- standard containers cannot accommodate 3.2m height or 12-ton point load
- Heavy-lift surcharges apply at both origin and destination terminals
- Indonesian import duty on CNC machines: ~5% (HS 8459) -- may qualify for capital goods tariff exemption under Masterlist facility
- Importer must hold API (Angka Pengenal Importir) license
- Pre-shipment inspection by surveyor (Sucofindo/SGS) may be required for machinery above certain value threshold
- Insurance should cover inland transport risks (not just port-to-port)
- Need to verify whether factory access road can handle a low-bed trailer with 12-ton load

**Hint:** "The Chinese manufacturer has shipped 200 machines worldwide. The Indonesian buyer has never imported anything before. A 12-ton machine doesn't fit in a standard container."

---

### IM-02: Steel Coils from Busan to Surabaya

| Field | Value |
|-------|-------|
| **Direction** | Import |
| **Difficulty** | Intermediate |
| **Commodity** | Hot-rolled steel coils (HRC) |
| **HS Code** | 7208.27 (Hot-rolled iron/steel, thickness < 3mm) |
| **Origin** | Busan, South Korea |
| **Destination** | Tanjung Perak, Surabaya |
| **Container** | Breakbulk or 20' flat rack (steel coils too heavy for standard containers) |
| **Cargo Value** | USD 350,000 (approx. 500 MT at ~USD 700/MT) |
| **Correct Incoterm** | **CFR Surabaya** |

**Why CFR:** Korean steel mills (POSCO, Hyundai Steel) typically sell CFR to Indonesian buyers. The mills have volume-based freight contracts on the Korea-Indonesia route and include freight in their pricing. Indonesian steel distributors prefer CFR because they can compare landed cost offers from Korea, Japan, China, and India directly. Insurance is arranged separately by the Indonesian buyer, often under an annual open-cover policy.

**Common Mistakes:**
1. Using **CIF** -- similar to the Saudi plywood case, some Indonesian importers prefer to insure with local insurers for easier claims processing. More importantly, steel trading practice in Asia is predominantly CFR.
2. Using **FOB** -- the Korean mill's FOB price would require the Indonesian buyer to negotiate ocean freight for breakbulk/heavy-lift cargo from Busan, which is complex and outside their expertise.
3. Not realizing **steel imports require PI (Persetujuan Impor / Import Approval)** -- this is a LARTAS-regulated commodity in Indonesia. Without PI, the cargo will be stuck at customs.
4. Using standard **40' containers** -- single HRC coils weigh 10-25 MT each. They must be loaded on flat racks or shipped breakbulk. Container floor loading capacity is only ~4.5 MT/m.

**Special Considerations:**
- LARTAS: Steel is regulated -- requires PI (Import Approval) from Ministry of Trade + SNI (Indonesian National Standard) compliance
- Indonesian safeguard duties and anti-dumping duties may apply on Korean HRC (verify current rates)
- Indonesia-Korea CEPA (IK-CEPA) may provide preferential tariff rates
- Survey at loading port (weight/quality) mandatory
- Steel coils require proper lashing and chocking -- shifting cargo is extremely dangerous
- Indonesian customs uses CIF value for duty calculation -- under CFR, buyer must declare insurance value separately

**Hint:** "Korean steel mills quote prices 'delivered to your port, freight included.' The Indonesian buyer has a standing insurance policy with a local insurer."

---

### IM-03: Consumer Electronics from Shenzhen (E-commerce)

| Field | Value |
|-------|-------|
| **Direction** | Import |
| **Difficulty** | Beginner |
| **Commodity** | Smartphone accessories (cases, chargers, screen protectors) |
| **HS Code** | 8504.40 (Static converters/chargers) / 3926.90 (Phone cases, plastic) |
| **Origin** | Yantian, Shenzhen, China |
| **Destination** | Tanjung Priok, Jakarta |
| **Container** | LCL (2 CBM, 300 kg) or small parcel consolidation |
| **Cargo Value** | USD 8,500 |
| **Correct Incoterm** | **CIF Jakarta** |

**Why CIF:** For small e-commerce importers buying from Chinese suppliers, CIF is the most practical term. The Shenzhen supplier handles everything to Jakarta port -- booking freight, arranging insurance, managing export clearance. The Indonesian importer only needs to handle import customs clearance (which they must do anyway as the API holder). Chinese suppliers on Alibaba/1688 predominantly quote CIF or FOB. For small volumes (LCL), CIF is simpler because the Chinese supplier is collocated with hundreds of freight forwarders in Shenzhen.

**Common Mistakes:**
1. Using **DDP** -- Chinese suppliers often quote "DDP door-to-door" on Alibaba, but this is misleading. They typically use a grey-channel courier (jastip/titip) that may not properly declare goods. Legitimate DDP requires the Chinese seller to have an Indonesian import license, which they don't have.
2. Using **EXW** -- the small Indonesian importer has no logistics presence in China. Arranging pickup from a Shenzhen factory, then export clearance, then freight booking for 2 CBM LCL from Indonesia is impractical and expensive.
3. Not understanding **de minimis threshold** -- Indonesian customs allows duty-free import for goods valued at USD 3 or below per shipment (as of 2023 regulation). This USD 8,500 shipment is well above that threshold.
4. Confusing **courier/postal imports with formal imports** -- this cargo value requires formal import clearance (PIB) with API license, not postal/express entry.

**Special Considerations:**
- Electronics may require SDPPI (Sertifikat Kesesuaian dari Direktorat Jenderal Sumber Daya dan Perangkat Pos dan Informatika) type approval for wireless/Bluetooth devices
- SNI certification may be required for chargers (safety standards)
- LARTAS: Permendag 23/2025 updated consumer goods import regulations -- cluster-based requirements
- Indonesian import duty: phone cases ~15%, chargers ~0-5% (verify per HS subheading)
- VAT 11% + Income Tax (PPh 22) 2.5% on CIF value at import
- Many small importers are Authorized Economic Operators (AEO) or use undername import services

**Hint:** "A Jakarta online shop is buying accessories from an Alibaba supplier. The supplier offers to handle everything to the port. The shop owner just needs to pick up from customs."

---

### IM-04: Industrial Chemicals from Rotterdam (Dangerous Goods)

| Field | Value |
|-------|-------|
| **Direction** | Import |
| **Difficulty** | Advanced |
| **Commodity** | Sodium hydroxide (caustic soda) solution, 50% concentration |
| **HS Code** | 2815.12 (Sodium hydroxide in aqueous solution) |
| **Origin** | Rotterdam (Europoort), Netherlands |
| **Destination** | Tanjung Priok, Jakarta |
| **Container** | 20' ISO Tank Container (IMO class 8 -- corrosive) |
| **Cargo Value** | USD 15,000 (approx. 20 MT at ~USD 750/MT) |
| **Correct Incoterm** | **CIF Jakarta** |

**Why CIF:** European chemical manufacturers (e.g., Nouryon, BASF) selling to Indonesian industrial buyers typically use CIF. The European seller has specialized dangerous goods logistics infrastructure: DG-certified warehouses, ISO tank container fleets, and freight contracts with carriers that accept IMO Class 8 cargo. The Indonesian buyer (a mid-size manufacturing company) has no capability to arrange DG freight from Europe.

**Common Mistakes:**
1. Using **FOB** -- dangerous goods require specialized booking with DG-accepting carriers. Not all shipping lines accept IMO Class 8 on all routes. The European seller has existing DG logistics contracts; the Indonesian buyer does not.
2. Using **DAP** -- while the seller can deliver to Jakarta port, DG customs clearance in Indonesia requires specific B3 (Bahan Berbahaya dan Beracun) import permits from the Ministry of Environment. Only the local importer can obtain these.
3. Using **DDP** -- same as DAP issue but worse. The European seller cannot clear Indonesian DG customs.
4. Not accounting for **ISO tank container return logistics** -- ISO tanks are leased equipment. The Incoterm should clarify who pays demurrage/detention and return shipping of the empty tank.

**Special Considerations:**
- IMO Class 8 (Corrosive) -- requires IMDG Code documentation, DG declaration, and DG-approved stowage plan
- Indonesia: B3 import permit from KLHK (Ministry of Environment and Forestry) required
- LARTAS regulated -- INSW check mandatory before customs clearance
- ISO tank container must be certified for the specific chemical (tank lining compatibility)
- Emergency response: MSDS/SDS must accompany shipment in multiple languages
- Indonesian port DG handling charges are higher than standard cargo (+30-50%)
- Empty ISO tank must be cleaned (heel removal) before return -- cost allocation between buyer/seller
- Temperature monitoring may be needed (caustic soda viscosity increases in cold)

**Hint:** "This is a corrosive chemical. Not every ship will carry it. The European factory has its own fleet of ISO tanks and DG shipping contracts. The Indonesian factory just needs it delivered to the port."

---

### IM-05: Automotive CKD from Nagoya to Jakarta

| Field | Value |
|-------|-------|
| **Direction** | Import |
| **Difficulty** | Advanced |
| **Commodity** | Completely Knocked Down (CKD) automotive components for sedan assembly |
| **HS Code** | 8703.23 (Motor cars, 1500-3000cc, CKD) / 8708 (Parts) |
| **Origin** | Nagoya Port, Japan |
| **Destination** | Tanjung Priok, Jakarta (then to Karawang assembly plant) |
| **Container** | Multiple 40' HC (10-15 containers per lot, mixed parts) |
| **Cargo Value** | USD 1,800,000 (per lot of ~12 containers) |
| **Correct Incoterm** | **CIF Jakarta** |

**Why CIF:** Japanese automotive OEMs (Toyota, Honda, Suzuki, Daihatsu) selling CKD kits to their Indonesian assembly subsidiaries use CIF. The parent company in Japan controls the entire supply chain through their logistics subsidiary (e.g., Toyota Tsusho, Honda Trading). CIF is used because the Japanese parent handles freight and insurance as part of their global logistics program, and Indonesian customs calculates import duty on CIF value. This creates clean documentation alignment between the commercial invoice (CIF) and the customs declaration (PIB).

**Common Mistakes:**
1. Using **FOB** -- while the Indonesian subsidiary technically COULD arrange freight (it's the same corporate group), CIF creates a cleaner customs valuation. Indonesian customs (DJBC) scrutinizes CKD imports heavily for transfer pricing. Matching commercial invoice terms to customs valuation method reduces audit risk.
2. Using **DDP** -- even though this is intra-company trade, the Indonesian entity must be the importer of record and handle customs clearance with their own Masterlist and API-P (Producer Importer) license.
3. Treating CKD as a **single HS code** -- a CKD lot contains thousands of different parts. Indonesian customs classifies CKD under a special regime (Pre-Entry Classification / PKB) that groups all parts under the complete vehicle HS code with a specific CKD duty rate (~5-15% depending on local content commitments).
4. Not understanding **Masterlist facility** -- CKD importers operate under a customs facility that allows reduced/zero duty on components committed to local assembly.

**Special Considerations:**
- CKD duty rate is determined by Pre-Entry Classification (Penetapan Klasifikasi Barang / PKB) from Indonesian customs
- Masterlist facility from BKPM (Investment Coordinating Board) required -- lists all CKD components with agreed duty rates
- Transfer pricing documentation critical -- intra-company pricing must be at arm's length
- JIT sequencing: containers must arrive in specific order for assembly line sequence
- Bonded zone (Kawasan Berikat) at assembly plant may apply -- further duty deferral
- Indonesian government local content requirements: minimum 20-40% local content ratio for assembled vehicles
- Insurance: typically group policy under parent company's global marine cargo program

**Hint:** "Toyota Japan sends parts to Toyota Indonesia for assembly. The parent company manages all logistics globally. Indonesian customs calculates duty based on CIF value. It's the same corporation on both sides."

---

### IM-06: Pharmaceutical APIs from Mumbai (LARTAS)

| Field | Value |
|-------|-------|
| **Direction** | Import |
| **Difficulty** | Advanced |
| **Commodity** | Paracetamol (Acetaminophen) Active Pharmaceutical Ingredient, powder form |
| **HS Code** | 2924.29 (Cyclic amides -- paracetamol) |
| **Origin** | Nhava Sheva (JNPT), Mumbai, India |
| **Destination** | Tanjung Priok, Jakarta |
| **Container** | 20' GP (palletized drums, 15 MT) |
| **Cargo Value** | USD 52,000 |
| **Correct Incoterm** | **CIF Jakarta** |

**Why CIF:** Indian pharmaceutical API manufacturers (e.g., Granules India, Aarti Industries) selling to Indonesian pharma companies typically use CIF. India dominates global API supply and Indian sellers have established freight contracts on the India-Indonesia route. The Indonesian buyer (a pharmaceutical manufacturer) focuses on regulatory compliance -- BPOM registration, GMP verification, and import permits -- rather than logistics. CIF simplifies procurement by providing one all-inclusive price.

**Common Mistakes:**
1. Using **DAP** -- while it seems helpful, the regulatory complexity at Indonesian customs for pharmaceuticals means the buyer MUST handle clearance with their own pharmaceutical import licenses. DAP would have the seller deliver to a point past customs, but the seller cannot navigate Indonesian pharma regulations.
2. Using **FOB** -- the Indonesian pharma company is not a logistics expert. Arranging freight from Mumbai for a specialized commodity (pharmaceutical-grade, temperature-sensitive storage) is outside their capability.
3. Ignoring the **cold chain requirement** -- while paracetamol API is stable at room temperature, some pharma APIs require temperature control. Students should always check the product's storage requirements before selecting container type and Incoterm.
4. Not realizing **LARTAS clearance can take 2-3 weeks** -- the Incoterm doesn't change, but the buyer must plan for extended port storage (demurrage/detention costs).

**Special Considerations:**
- LARTAS regulated: Requires BPOM (National Agency of Drug and Food Control) import recommendation
- API import license from Ministry of Health
- Certificate of Pharmaceutical Product (CPP) from India's CDSCO
- Certificate of Analysis (CoA) for each batch -- must match specifications in Indonesian drug master file
- GMP (Good Manufacturing Practice) certificate of the Indian manufacturer, verified by BPOM
- Halal certification increasingly required for pharmaceutical ingredients in Indonesia
- Port storage in bonded warehouse may be needed while LARTAS clearance processed
- Indonesian customs applies CIF valuation -- aligns with standard pharma import declaration

**Hint:** "The Indonesian pharma factory needs to register the Indian API with BPOM and get import recommendations before the cargo even ships. The Indian supplier handles everything to the port."

---

### IM-07: Steel Plates from Tianjin to Surabaya

| Field | Value |
|-------|-------|
| **Direction** | Import |
| **Difficulty** | Intermediate |
| **Commodity** | Medium carbon steel plates (10-25mm thickness) for shipbuilding |
| **HS Code** | 7208.51 (Flat-rolled iron/steel, width >= 600mm, thickness > 10mm) |
| **Origin** | Tianjin Xingang Port, China |
| **Destination** | Tanjung Perak, Surabaya |
| **Container** | Breakbulk (steel plates on flat rack or ship's hold) |
| **Cargo Value** | USD 280,000 (approx. 400 MT at ~USD 700/MT) |
| **Correct Incoterm** | **CFR Surabaya** |

**Why CFR:** Chinese steel mills (Baosteel, Ansteel, HBIS) quote CFR as standard for Indonesian buyers. The mills have massive freight volume from Tianjin/Qingdao to Southeast Asia and negotiate freight rates that individual Indonesian buyers cannot match. Indonesian shipyard buyers handle their own insurance (often under a yard-wide annual policy). CFR gives a transparent landed cost for comparison across Chinese, Japanese, and Korean steel suppliers.

**Common Mistakes:**
1. Using **CIF** -- Indonesian shipyards and steel distributors maintain annual open-cover insurance policies. Adding CIF insurance is redundant and inflexible (minimum CIF coverage under Clauses C doesn't cover all risks the shipyard wants covered).
2. Using **FOB** -- the Surabaya shipyard has no logistics infrastructure in China. Arranging breakbulk freight loading at Tianjin for heavy steel plates requires specialized port handling.
3. Forgetting **anti-dumping duties** -- Indonesia has imposed anti-dumping duties on certain Chinese steel products. The HS code subheading determines whether anti-dumping applies. Students must check current tariff schedule.
4. Not understanding **PI (Import Approval) requirement** -- same as HRC coils, steel plates are LARTAS regulated.

**Special Considerations:**
- LARTAS: Persetujuan Impor (PI) from Ministry of Trade mandatory for steel imports
- SNI (Indonesian National Standard) certification for steel products
- Anti-dumping duty: Indonesia has active anti-dumping measures on some Chinese flat steel products -- check per HS subheading
- Inspection at loading port (Tianjin) by appointed surveyor for weight and quality
- Indonesian customs CIF valuation: under CFR, buyer must declare insurance value
- Surabaya shipyard proximity to Tanjung Perak reduces inland transport cost
- Steel plates require proper dunnage and lashing to prevent shifting during voyage

**Hint:** "Chinese steel mills quote 'delivered to your port, you insure.' The Surabaya shipyard has its own insurance policy that covers all incoming materials."

---

### IM-08: Cotton Yarn from Gujarat to Bandung

| Field | Value |
|-------|-------|
| **Direction** | Import |
| **Difficulty** | Beginner |
| **Commodity** | Ring-spun cotton yarn, 30/1 count (for weaving) |
| **HS Code** | 5205.24 (Cotton yarn, single, combed, 192-232 dtex) |
| **Origin** | Mundra Port, Gujarat, India |
| **Destination** | Tanjung Priok, Jakarta (then trucked to Bandung textile mills) |
| **Container** | 40' HC (cotton yarn is voluminous -- fills cube before weight) |
| **Cargo Value** | USD 45,000 |
| **Correct Incoterm** | **CIF Jakarta** |

**Why CIF:** Indian cotton yarn exporters commonly sell CIF to Indonesian textile mills. India is the world's largest cotton producer and Indian yarn spinners have integrated logistics through well-established trade lanes to Indonesia. Bandung (West Java) is Indonesia's textile manufacturing hub. The mills focus on production, not international logistics. CIF gives them a clear per-kilogram cost for yarn procurement.

**Common Mistakes:**
1. Using **DAP Bandung** -- while the ultimate destination is Bandung, having the Indian seller arrange inland trucking from Jakarta port to Bandung (130 km, 3-4 hours) adds unnecessary complexity. Indonesian local trucking is cheaply and easily arranged by the buyer.
2. Using **FOB** -- Bandung textile mills are small-to-medium enterprises without international freight management capability.
3. Using **CPT** instead of CIF -- CPT is multimodal-compatible, but the standard trade convention for yarn remains CIF (sea freight). Using CPT might confuse documentary credit terms at the buyer's bank.
4. Not checking **textile safeguard measures** -- Indonesia periodically imposes safeguard duties on imported yarns to protect domestic spinning industry.

**Special Considerations:**
- Indonesia textile imports require PI (Import Approval) from Ministry of Trade
- Safeguard duty on cotton yarn varies -- currently check per HS subheading
- India-Indonesia FTA (AI-CEPA) may provide preferential duty rate
- Cotton yarn is voluminous: 40' HC can hold ~22 MT but only fills to ~18-20 MT before cubing out
- Yarn cones must be properly palletized and shrink-wrapped to prevent moisture and damage
- Bandung is inland and uphill from Jakarta -- trucking costs are consistent and predictable
- Indonesian customs uses CIF value for duty calculation -- matches the trade term perfectly

**Hint:** "A Bandung weaving factory buys yarn from India every month. The Indian supplier quotes a price that includes freight and insurance to Jakarta. The factory sends its own truck to pick up from the port."

---

### IM-09: Semiconductor Components from Kaohsiung to Batam FTZ

| Field | Value |
|-------|-------|
| **Direction** | Import |
| **Difficulty** | Advanced |
| **Commodity** | IC chips, resistors, capacitors for PCB assembly |
| **HS Code** | 8542.31 (Electronic integrated circuits, processors/controllers) |
| **Origin** | Kaohsiung Port, Taiwan |
| **Destination** | Batu Ampar Port, Batam (FTZ) |
| **Container** | 20' GP (electronics -- light but high value) |
| **Cargo Value** | USD 520,000 |
| **Correct Incoterm** | **CIF Batam** |

**Why CIF:** Taiwanese semiconductor suppliers (TSMC supply chain, ASE Group component distributors) commonly sell CIF to Batam electronics assemblers. The Taiwanese supplier handles freight and insurance because they ship to Batam frequently (established trade lane). Batam FTZ means the goods enter WITHOUT paying Indonesian import duties or VAT -- they are processed/assembled and re-exported (typically to Singapore or globally). CIF provides a complete cost basis for the Batam assembler's cost accounting.

**Common Mistakes:**
1. Using **DDP** -- there is no "duty" to pay in Batam FTZ. DDP implies the seller pays import duties, but FTZ goods are duty-exempt. DDP is meaningless in an FTZ context.
2. Assuming standard **Indonesian customs clearance applies** -- Batam FTZ has separate customs procedures under BP Batam authority, not standard DJBC import clearance.
3. Using **DAP** -- the seller is Taiwanese and has no presence in Batam. Arranging delivery beyond the port within Batam requires local logistics knowledge that the Taiwanese supplier lacks.
4. Not understanding that **re-export rules apply** -- goods imported into Batam FTZ duty-free MUST be re-exported or used in manufacturing for re-export. If the finished product is sold to Indonesian domestic market (e.g., Jakarta), it becomes a "domestic import" and duties apply at that point.

**Special Considerations:**
- Batam FTZ: duty-free, VAT-free for goods imported for processing and re-export
- BP Batam authority handles FTZ customs, not standard DJBC
- If finished goods are shipped from Batam to Indonesian mainland (e.g., Jakarta), they are treated as IMPORTS and full duties apply
- Electronics components are ESD (Electrostatic Discharge) sensitive -- require proper packaging and handling
- High value per kg -- air freight may be viable for urgent orders (Batam has Hang Nadim Airport)
- Taiwan-Indonesia does not have a formal FTA, but Batam FTZ neutralizes this for re-export manufacturing
- Insurance critical due to high value -- Institute Cargo Clauses (A) recommended for electronics

**Hint:** "Batam is a Free Trade Zone -- no import duty. The goods will be assembled into products and shipped to Singapore. Think about what 'import clearance' means in an FTZ."

---

### IM-10: Ready-to-Eat Food from Bangkok (Halal Certification)

| Field | Value |
|-------|-------|
| **Direction** | Import |
| **Difficulty** | Intermediate |
| **Commodity** | Instant noodle seasoning packets, canned curry paste, dried fruit snacks |
| **HS Code** | 2103.90 (Mixed condiments/seasonings) / 2008.19 (Prepared nuts/fruits) |
| **Origin** | Laem Chabang, Thailand |
| **Destination** | Tanjung Priok, Jakarta |
| **Container** | 20' GP |
| **Cargo Value** | USD 22,000 |
| **Correct Incoterm** | **CIF Jakarta** |

**Why CIF:** Thai food exporters selling to Indonesian food distributors use CIF as standard. Thailand has a well-developed food export infrastructure with competitive freight rates on the short Bangkok-Jakarta route (7-10 days transit). The Thai seller handles logistics through experienced ASEAN freight forwarders. The Indonesian food importer focuses on regulatory compliance -- BPOM registration, halal certification, and label compliance.

**Common Mistakes:**
1. Using **DDP** -- Thai food exporters cannot navigate Indonesian food import regulations (BPOM ML registration, halal certification, Bahasa Indonesia labeling requirements). The Indonesian importer must handle these.
2. Using **FOB** -- for small food importers, arranging freight from Thailand is unnecessary complexity when the Thai supplier quotes CIF routinely.
3. Forgetting that **halal certification is mandatory** -- since October 2024, all food and beverage products sold in Indonesia must have halal certification. The Incoterm doesn't change, but the import cannot proceed without it.
4. Not accounting for **BPOM clearance time** -- food products require ML (Registration Number for Foreign Food) from BPOM before import. First-time imports can take months for registration.

**Special Considerations:**
- Halal certification mandatory (UU JPH / Halal Product Law): product must have halal certificate from recognized halal body (e.g., CICOT for Thailand, recognized by BPJPH Indonesia)
- BPOM ML (Foreign Food Registration Number) must be obtained BEFORE shipping
- Labels must include Bahasa Indonesia translation, nutrition facts, halal logo, and BPOM ML number
- ASEAN Trade in Goods Agreement (ATIGA): preferential duty with Form D Certificate of Origin
- Food products require phytosanitary/health certificate from Thai authorities
- Temperature and humidity control during transit -- some snack products are moisture-sensitive
- Indonesian customs may require laboratory testing at port for first-time imports from a new supplier

**Hint:** "The Thai food factory ships to Indonesia every month. But the Indonesian distributor needs to handle halal certification and BPOM registration -- the Thai factory can't do that."

---

### IM-11: Industrial Robots from Osaka to Jakarta

| Field | Value |
|-------|-------|
| **Direction** | Import |
| **Difficulty** | Intermediate |
| **Commodity** | Articulated welding robots (Fanuc/Yaskawa) for automotive factory |
| **HS Code** | 8479.50 (Industrial robots, not elsewhere specified) |
| **Origin** | Osaka (Kobe Port), Japan |
| **Destination** | Tanjung Priok, Jakarta |
| **Container** | 40' HC (2 robots per container, specialized crating) |
| **Cargo Value** | USD 240,000 (2 units at ~USD 120,000 each) |
| **Correct Incoterm** | **DAP Jakarta (Buyer's Factory)** |

**Why DAP:** Japanese industrial equipment manufacturers sell DAP because they provide turnkey installation services. The robot price includes delivery to the buyer's factory, where Japanese engineers will install and commission the equipment. DAP means the seller handles everything except import customs clearance and duties. The Japanese manufacturer uses their logistics subsidiary (e.g., NYK, K-Line Logistics) experienced in heavy/delicate equipment handling.

**Common Mistakes:**
1. Using **CIF** -- delivery to port is insufficient. Industrial robots need specialized handling from port to factory (shock monitoring, climate control in transit). The Japanese manufacturer's logistics team manages this as part of the equipment sale.
2. Using **DDP** -- the Japanese company cannot be the importer of record in Indonesia. Import clearance requires Indonesian API holder.
3. Using **FOB** -- the Indonesian auto factory has no expertise in shipping delicate robotics from Japan. Mishandling could damage calibration worth thousands of dollars in rework.
4. Not including **commissioning** in the contract scope -- the Incoterm covers physical delivery, but the commercial contract should also specify installation, calibration, and training separately.

**Special Considerations:**
- Robots may qualify for capital goods duty exemption under Masterlist facility (BKPM)
- Import duty on industrial robots: ~0-5% (Indonesian government encourages industrial automation)
- IJ-EPA (Indonesia-Japan Economic Partnership Agreement) provides preferential rates with Form JIEPA
- Specialized crating: anti-vibration, humidity-controlled packaging for precision robotics
- Insurance should cover transit AND installation period (marine + erection all-risks)
- After-sales service contract usually tied to equipment purchase
- Commissioning timeline: 2-4 weeks on-site by Japanese engineers
- Buyer must prepare factory floor (power, compressed air, safety fencing) before delivery

**Hint:** "Fanuc sends robots worldwide with their own logistics team. They deliver to your factory, then their engineers come to install and calibrate. But you clear customs yourself."

---

### IM-12: Polyester Fabric from Hangzhou to Jakarta

| Field | Value |
|-------|-------|
| **Direction** | Import |
| **Difficulty** | Beginner |
| **Commodity** | Polyester woven fabric, dyed, for garment manufacturing |
| **HS Code** | 5407.52 (Woven polyester fabric, dyed, width >= 85cm) |
| **Origin** | Ningbo, China |
| **Destination** | Tanjung Priok, Jakarta |
| **Container** | 40' HC (fabric rolls are voluminous) |
| **Cargo Value** | USD 38,000 |
| **Correct Incoterm** | **CNF (CFR) Jakarta** |

**Why CFR:** Chinese textile exporters predominantly quote "CNF" (trade shorthand for CFR - Cost and Freight). The fabric mill in Hangzhou/Shaoxing (China's textile capital) has massive freight volumes on the China-Indonesia route and negotiates competitive rates. Indonesian garment manufacturers handle their own insurance. CFR is the established convention in the Asia-Pacific textile trade.

**Common Mistakes:**
1. Using **"CNF"** in formal documents instead of the proper Incoterms abbreviation **"CFR"** -- "CNF" is widely used in Asian trade but is NOT an official Incoterm. Formal contracts and L/Cs should use "CFR."
2. Using **CIF** -- similar to steel, Indonesian textile mills typically have annual open-cover insurance policies. CIF insurance from the Chinese seller would be redundant.
3. Using **FOB** for a small garment factory -- arranging freight from Ningbo requires logistics expertise. The Chinese mill quotes CFR as default.
4. Not checking **textile safeguard duties** -- Indonesia has imposed safeguard measures on Chinese polyester fabric imports to protect domestic textile industry. These can add 15-25% to the import cost.

**Special Considerations:**
- LARTAS: Textile imports require PI (Import Approval) from Ministry of Trade
- Safeguard duty on polyester fabric from China: check current rate (periodically imposed)
- SNI certification may be required for certain textile products
- Fabric rolls must be wrapped in poly to prevent water damage in container
- Fabric quality inspection at origin (China) recommended -- AQL sampling standard
- Container stuffing: rolls standing upright to prevent crushing
- ACFTA (ASEAN-China FTA) Form E for preferential tariff rate

**Hint:** "The Chinese fabric mill quotes 'CNF Jakarta' -- a common trade term in Asia. But the official Incoterms abbreviation is different. The Jakarta garment factory has its own cargo insurance."

---

## SUMMARY REFERENCE TABLE

| ID | Scenario | Direction | Correct Incoterm | Difficulty | Container | Key Lesson |
|----|----------|-----------|-----------------|------------|-----------|------------|
| EX-01 | Furniture to Rotterdam | Export | FOB | Beginner | 40'HC | Buyer controls freight when they have global logistics |
| EX-02 | Palm Oil to Mumbai | Export | CIF | Intermediate | Bulk tanker | Integrated sellers (own ships) sell CIF |
| EX-03 | Garments to LA | Export | FOB | Beginner | 40'HC | Major brands control inbound freight |
| EX-04 | Coffee to Hamburg | Export | FOB | Intermediate | 20'GP | Commodity trade convention; weight > volume |
| EX-05 | Electronics Batam-Singapore | Export | FCA | Advanced | 20'GP | FTZ changes export clearance rules |
| EX-06 | Rubber to Qingdao | Export | FOB | Intermediate | 20'GP | Commodity exchange pricing basis = FOB |
| EX-07 | Handicrafts Bali (LCL) | Export | FCA | Beginner | LCL | FCA for LCL; FOB is for FCL on-board |
| EX-08 | Auto Parts to Bangkok | Export | FCA | Intermediate | 20'GP | OEM buyer controls ASEAN supply chain |
| EX-09 | Frozen Shrimp to Tokyo | Export | CFR | Advanced | 20'Reefer | Seller books reefer; buyer insures separately |
| EX-10 | Ferronickel to Tianjin | Export | FOB | Advanced | Breakbulk | Buyer charters vessels; export ban on raw ore |
| EX-11 | White Pepper to HCMC | Export | FOB | Beginner | 20'GP | FOB point = actual loading port, not origin |
| EX-12 | Plywood to Jeddah | Export | CFR | Intermediate | 20'GP | Middle East: buyer insures locally |
| IM-01 | CNC Machine from Shanghai | Import | DAP | Advanced | Open Top/Flat Rack | Heavy lift needs seller logistics; buyer clears customs |
| IM-02 | Steel Coils from Busan | Import | CFR | Intermediate | Breakbulk/Flat Rack | Steel mills quote CFR; buyer has own insurance |
| IM-03 | Electronics from Shenzhen | Import | CIF | Beginner | LCL | Small importers need all-inclusive pricing |
| IM-04 | Chemicals from Rotterdam (DG) | Import | CIF | Advanced | ISO Tank | DG logistics requires seller expertise |
| IM-05 | Auto CKD from Nagoya | Import | CIF | Advanced | 40'HC x12 | Intra-company trade; customs valuation alignment |
| IM-06 | Pharma APIs from Mumbai | Import | CIF | Advanced | 20'GP | LARTAS complexity; seller handles logistics |
| IM-07 | Steel Plates from Tianjin | Import | CFR | Intermediate | Breakbulk | Same as IM-02 pattern; anti-dumping watch |
| IM-08 | Cotton Yarn from Gujarat | Import | CIF | Beginner | 40'HC | Volume > weight; standard textile trade |
| IM-09 | Semiconductors to Batam FTZ | Import | CIF | Advanced | 20'GP | FTZ = no duty; DDP meaningless |
| IM-10 | Food from Bangkok (Halal) | Import | CIF | Intermediate | 20'GP | Halal mandatory; BPOM before shipping |
| IM-11 | Robots from Osaka | Import | DAP | Intermediate | 40'HC | Turnkey delivery; specialized handling |
| IM-12 | Polyester from Ningbo | Import | CFR | Beginner | 40'HC | CNF vs CFR terminology trap |

---

## INCOTERM DISTRIBUTION IN SCENARIOS

| Incoterm | Count | Scenarios |
|----------|-------|-----------|
| FOB | 6 | EX-01, EX-03, EX-04, EX-06, EX-10, EX-11 |
| FCA | 3 | EX-05, EX-07, EX-08 |
| CIF | 8 | EX-02, IM-03, IM-04, IM-05, IM-06, IM-08, IM-09, IM-10 |
| CFR | 5 | EX-09, EX-12, IM-02, IM-07, IM-12 |
| DAP | 2 | IM-01, IM-11 |

**Deliberately excluded from correct answers (but appear as common mistakes):**
- EXW -- never correct because foreign buyers cannot do Indonesian export clearance
- DDP -- never correct for imports because foreign sellers cannot do Indonesian import clearance
- DPU -- not represented (uncommon in Indonesian trade)
- FAS -- not represented (minimal usage outside bulk grain/coal)
- CIP/CPT -- not represented as correct answers (but valid alternatives in some scenarios)

---

## DIFFICULTY DISTRIBUTION

| Level | Count | IDs |
|-------|-------|-----|
| Beginner | 7 | EX-01, EX-03, EX-07, EX-11, IM-03, IM-08, IM-12 |
| Intermediate | 9 | EX-02, EX-04, EX-06, EX-08, EX-12, IM-02, IM-07, IM-10, IM-11 |
| Advanced | 8 | EX-05, EX-09, EX-10, IM-01, IM-04, IM-05, IM-06, IM-09 |

---

## GAME DESIGN NOTES

### Scoring Suggestion
- Correct Incoterm: +100 points
- Correct Incoterm + correct reasoning: +50 bonus
- Partial credit (acceptable alternative, e.g., FOB instead of FCA for containers): +40 points
- Common mistake selected: 0 points + educational explanation shown
- Hint used: -20 point penalty

### Progressive Difficulty
- **Levels 1-8** (Beginner): Clear-cut FOB/CIF scenarios, standard containerized cargo
- **Levels 9-16** (Intermediate): CFR vs CIF distinctions, ASEAN FTA considerations, LARTAS awareness
- **Levels 17-24** (Advanced): FTZ rules, DG logistics, CKD customs regimes, multimodal/heavy-lift

### Key Learning Themes
1. **EXW is almost never correct for Indonesian trade** -- export clearance requires local presence
2. **DDP is almost never correct for Indonesian imports** -- import clearance requires API license holder
3. **FOB vs FCA** -- FOB for conventional vessel loading, FCA for container/multimodal
4. **CIF vs CFR** -- who controls insurance? Buyer's annual policy vs seller's per-shipment coverage
5. **FTZ changes everything** -- Batam FTZ nullifies standard customs procedures
6. **LARTAS adds time, not a different Incoterm** -- but students must know it affects logistics planning
7. **Weight vs volume** -- commodity choice determines container type and loading pattern
