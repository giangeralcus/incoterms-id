/**
 * Shipping Scenarios for Incoterms Learning Game
 * Based on real Indonesian export/import routes
 * 26 scenarios: 8 beginner, 10 intermediate, 8 advanced
 */

export const SCENARIOS = [
  {
    "id": "exp-01",
    "difficulty": "beginner",
    "type": "export",
    "title": {
      "id": "Furnitur Jati ke Rotterdam",
      "en": "Teak Furniture to Rotterdam"
    },
    "description": {
      "id": "PT Mebel Jepara mengirimkan dining set jati knock down 1x40HC dari Tanjung Priok ke Rotterdam. Importir Belanda memiliki kontrak jangka panjang dengan Maersk dan broker asuransi mereka sendiri di Belanda. Mereka ingin mengendalikan ocean freight.",
      "en": "PT Mebel Jepara ships 1x40HC of knocked-down teak dining sets from Tanjung Priok to Rotterdam. The Dutch importer has a long-term contract with Maersk and their own insurance broker in the Netherlands. They want to control ocean freight."
    },
    "commodity": {
      "id": "Furnitur kayu jati (kemasan datar)",
      "en": "Teak wood furniture (flat-packed)"
    },
    "hsCode": "9403",
    "origin": {
      "port": "Tanjung Priok",
      "country": "Indonesia"
    },
    "destination": {
      "port": "Rotterdam",
      "country": "Netherlands"
    },
    "containerType": "40HC",
    "quantity": 1,
    "cargoValue": 28000,
    "currency": "USD",
    "correctAnswer": "FOB",
    "acceptableAnswers": [
      "FOB",
      "FCA"
    ],
    "explanation": {
      "id": "FOB Jakarta merupakan standar ekspor furnitur Indonesia. Pembeli Eropa telah membuat kontrak freight yang menawarkan tarif lebih baik untuk rute tujuan Eropa. Penjual menangani clearance ekspor dan angkutan truk lokal -- tugas yang mereka ketahui dengan baik. FCA secara teknis lebih tepat untuk kargo kontainer, namun FOB tetap menjadi konvensi yang dominan.",
      "en": "FOB Jakarta is standard for Indonesian furniture exports. The European buyer has established freight contracts offering better rates on Europe-bound routes. The seller handles export clearance and local trucking -- tasks they know well. FCA is technically more correct for container cargo, but FOB remains the dominant convention."
    },
    "hints": [
      {
        "id": "Pembeli Eropa memiliki kesepakatan jangka panjang dengan Maersk",
        "en": "The European buyer has a long-term deal with Maersk"
      },
      {
        "id": "Pembeli ingin menangani asuransinya sendiri",
        "en": "The buyer wants to handle their own insurance"
      },
      {
        "id": "Pikirkan siapa yang mendapatkan tarif ocean freight yang lebih baik pada rute ini",
        "en": "Think about who gets better ocean freight rates on this route"
      }
    ],
    "learningPoints": [
      {
        "id": "FOB merupakan Incoterm yang paling umum digunakan untuk ekspor Indonesia",
        "en": "FOB is the most common Incoterm for Indonesian exports"
      },
      {
        "id": "Ketika pembeli memiliki kontrak logistik global, biarkan mereka mengontrol pengiriman",
        "en": "When the buyer has global logistics contracts, let them control freight"
      },
      {
        "id": "Kemasan kayu memerlukan sertifikat fumigasi ISPM-15 untuk masuk ke UE",
        "en": "Wooden packaging requires ISPM-15 fumigation certificate for EU entry"
      }
    ]
  },
  {
    "id": "exp-02",
    "difficulty": "beginner",
    "type": "export",
    "title": {
      "id": "Pakaian ke Los Angeles",
      "en": "Garments to Los Angeles"
    },
    "description": {
      "id": "Sebuah pabrik garmen di Semarang mengekspor kaos katun berukuran 1x40HC ke jaringan ritel besar di AS. Pembeli Amerika mengirim dari 12 negara sumber dan menggunakan freight forwarder global yang mereka pilih untuk semua pengiriman masuk.",
      "en": "A Semarang garment factory exports 1x40HC of cotton t-shirts to a major US retail chain. The American buyer ships from 12 sourcing countries and uses their own nominated global freight forwarder for all inbound shipments."
    },
    "commodity": {
      "id": "Kaos katun dan pakaian kasual",
      "en": "Cotton t-shirts and casual wear"
    },
    "hsCode": "6109",
    "origin": {
      "port": "Tanjung Emas",
      "country": "Indonesia"
    },
    "destination": {
      "port": "Long Beach / Los Angeles",
      "country": "USA"
    },
    "containerType": "40HC",
    "quantity": 1,
    "cargoValue": 65000,
    "currency": "USD",
    "correctAnswer": "FOB",
    "acceptableAnswers": [
      "FOB",
      "FCA"
    ],
    "explanation": {
      "id": "FOB Semarang merupakan standar ekspor garmen Indonesia ke Amerika. Merek ritel Amerika menegosiasikan kontrak ocean freight mereka sendiri di semua negara pemasok. Penggunaan EXW akan memaksa pembeli asing untuk mengurus perizinan ekspor Indonesia (PEB), yang secara hukum tidak dapat mereka lakukan. DDP akan mengharuskan pabrik untuk mengelola bea cukai AS – yang sama sekali tidak praktis.",
      "en": "FOB Semarang is standard for Indonesian garment exports to the US. American retail brands negotiate their own ocean freight contracts across all sourcing countries. Using EXW would force the foreign buyer to handle Indonesian export clearance (PEB), which they legally cannot do. DDP would require the factory to manage US customs -- completely impractical."
    },
    "hints": [
      {
        "id": "Pembeli Amerika mengirim dari 12 negara berbeda",
        "en": "The American buyer ships from 12 different countries"
      },
      {
        "id": "Mereka menggunakan satu freight forwarder global untuk semuanya",
        "en": "They use one global freight forwarder for everything"
      },
      {
        "id": "Pembeli luar negeri tidak bisa melakukan clearance ekspor Indonesia (PEB)",
        "en": "Foreign buyers cannot do Indonesian export clearance (PEB)"
      }
    ],
    "learningPoints": [
      {
        "id": "Merek ritel besar mengendalikan pengiriman masuk di semua negara pemasok",
        "en": "Major retail brands control inbound freight across all sourcing countries"
      },
      {
        "id": "EXW hampir tidak pernah tepat untuk ekspor Indonesia -- pembeli tidak dapat mengajukan PEB",
        "en": "EXW is almost never correct for Indonesian exports -- buyers cannot file PEB"
      },
      {
        "id": "Semarang (Jawa Tengah) adalah pusat manufaktur garmen utama",
        "en": "Semarang (Central Java) is a major garment manufacturing hub"
      }
    ]
  },
  {
    "id": "exp-03",
    "difficulty": "beginner",
    "type": "export",
    "title": {
      "id": "Kerajinan Tangan dari Bali (LCL)",
      "en": "Handicrafts from Bali (LCL)"
    },
    "description": {
      "id": "Sebuah koperasi pengrajin kecil di Bali mengirimkan 4 CBM (800 kg) keranjang rotan tenunan tangan dan ukiran kayu ke sebuah butik di Sydney. Muatannya terlalu kecil untuk memenuhi sebuah kontainer. Pengrajin mengantarkan 6 dus ke gudang forwarder di Denpasar.",
      "en": "A small Bali artisan cooperative ships 4 CBM (800 kg) of handwoven rattan baskets and wooden carvings to a boutique in Sydney. The cargo is too small to fill a container. The artisan drops off 6 boxes at a forwarder warehouse in Denpasar."
    },
    "commodity": {
      "id": "Keranjang rotan dan ukiran kayu",
      "en": "Rattan baskets and wood carvings"
    },
    "hsCode": "4602",
    "origin": {
      "port": "Benoa (via Surabaya)",
      "country": "Indonesia"
    },
    "destination": {
      "port": "Sydney",
      "country": "Australia"
    },
    "containerType": "LCL",
    "quantity": 4,
    "cargoValue": 3500,
    "currency": "USD",
    "correctAnswer": "FCA",
    "acceptableAnswers": [
      "FCA"
    ],
    "explanation": {
      "id": "FCA Denpasar benar karena penjual mengirimkan barang ke gudang freight forwarder -- bukan langsung ke kapal. Untuk kargo LCL, barang digabungkan dengan pengiriman lainnya, sehingga FOB (yang berarti pemuatan di kapal) tidak berlaku. ICC merekomendasikan FCA untuk semua LCL dan kargo kontainer. EXW akan memaksa pembeli Australia untuk menangani clearance ekspor Indonesia, yang mana hal ini tidak mungkin dilakukan.",
      "en": "FCA Denpasar is correct because the seller delivers goods to a freight forwarder's warehouse -- not directly onto a vessel. For LCL cargo, goods are consolidated with other shipments, so FOB (which implies loading on board) does not apply. ICC recommends FCA for all LCL and container cargo. EXW would force the Australian buyer to handle Indonesian export clearance, which is not possible."
    },
    "hints": [
      {
        "id": "Ini BUKAN kontainer penuh -- kotak-kotak tersebut berbagi ruang dengan eksportir lain",
        "en": "This is NOT a full container -- the boxes share space with other exporters"
      },
      {
        "id": "Pengrajin mengirim ke gudang, bukan ke kapal",
        "en": "The artisan delivers to a warehouse, not to a ship"
      },
      {
        "id": "ICC merekomendasikan istilah ini dibandingkan FOB untuk kargo peti kemas/LCL",
        "en": "ICC recommends this term over FOB for containerized/LCL cargo"
      }
    ],
    "learningPoints": [
      {
        "id": "FCA berlaku untuk kargo LCL -- barang dikirim ke pengirim, bukan kapal",
        "en": "FCA is correct for LCL cargo -- goods are delivered to the forwarder, not the vessel"
      },
      {
        "id": "FOB secara teknis mengharuskan barang dimuat \"di atas kapal\" yang diberi nama kapal",
        "en": "FOB technically requires goods to be loaded \"on board\" a named vessel"
      },
      {
        "id": "Ekspor Bali sering kali melalui Surabaya (Tanjung Perak) untuk konsolidasi",
        "en": "Bali exports often route via Surabaya (Tanjung Perak) for consolidation"
      }
    ]
  },
  {
    "id": "exp-04",
    "difficulty": "beginner",
    "type": "export",
    "title": {
      "id": "Lada Putih ke Kota Ho Chi Minh",
      "en": "White Pepper to Ho Chi Minh City"
    },
    "description": {
      "id": "Seorang eksportir rempah mengirimkan 15 MT lada putih Muntok dari Pulau Bangka. Karena Bangka tidak memiliki pelabuhan peti kemas internasional, lada diangkut ke Tanjung Priok Jakarta untuk dimuat. Seorang pedagang Vietnam mengatur pengaturan freight mereka sendiri pada rute pendek ASEAN.",
      "en": "A spice exporter ships 15 MT of Muntok white pepper from Bangka Island. Since Bangka has no international container port, the pepper is ferried to Tanjung Priok Jakarta for loading. A Vietnamese trader arranges their own freight on the short ASEAN route."
    },
    "commodity": {
      "id": "Lada putih muntok (utuh, kering)",
      "en": "Muntok white pepper (whole, dried)"
    },
    "hsCode": "0904",
    "origin": {
      "port": "Tanjung Priok (via Bangka)",
      "country": "Indonesia"
    },
    "destination": {
      "port": "Cat Lai",
      "country": "Vietnam"
    },
    "containerType": "20GP",
    "quantity": 1,
    "cargoValue": 120000,
    "currency": "USD",
    "correctAnswer": "FOB",
    "acceptableAnswers": [
      "FOB"
    ],
    "explanation": {
      "id": "FOB Jakarta benar. Titik FOB harus merupakan pelabuhan muat internasional yang sebenarnya (Tanjung Priok), bukan pulau asal (Bangka). Pembeli asal Vietnam mengatur freight di jalur pendek Jakarta-HCMC. Menggunakan \"FOB Pangkal Pinang\" adalah tindakan yang salah -- tidak ada layanan kontainer internasional dari Bangka.",
      "en": "FOB Jakarta is correct. The FOB point must be the actual international loading port (Tanjung Priok), not the origin island (Bangka). The Vietnamese buyer arranges freight on the short Jakarta-HCMC lane. Using \"FOB Pangkal Pinang\" would be wrong -- there is no international container service from Bangka."
    },
    "hints": [
      {
        "id": "Pulau Bangka tidak memiliki pelabuhan internasional",
        "en": "Bangka Island does not have an international port"
      },
      {
        "id": "Lada harus menempuh perjalanan dengan kapal feri ke Jakarta terlebih dahulu",
        "en": "The pepper must travel by ferry to Jakarta first"
      },
      {
        "id": "Titik FOB harus berada di tempat kapal laut memuat muatannya",
        "en": "The FOB point must be where the ocean vessel actually loads"
      }
    ],
    "learningPoints": [
      {
        "id": "FOB point = pelabuhan muat sebenarnya, bukan asal produksi",
        "en": "FOB point = the actual loading port, not the production origin"
      },
      {
        "id": "Transportasi darat/pulau ke pelabuhan pemuatan adalah tanggung jawab penjual berdasarkan FOB",
        "en": "Inland/island transport to the loading port is the seller's responsibility under FOB"
      },
      {
        "id": "Perdagangan ASEAN (ATIGA Formulir D) dapat memenuhi syarat untuk bea preferensial 0%.",
        "en": "ASEAN trade (ATIGA Form D) can qualify for 0% preferential duty"
      }
    ]
  },
  {
    "id": "imp-01",
    "difficulty": "beginner",
    "type": "import",
    "title": {
      "id": "Elektronik Konsumen dari Shenzhen",
      "en": "Consumer Electronics from Shenzhen"
    },
    "description": {
      "id": "Sebuah toko online di Jakarta mengimpor 2 casing dan charger ponsel pintar CBM dari pemasok Alibaba di Shenzhen. Pemasok Tiongkok menawarkan untuk menangani segala sesuatunya ke pelabuhan Jakarta termasuk freight dan asuransi. Pemilik toko hanya perlu mengambil dari bea cukai.",
      "en": "A Jakarta online shop imports 2 CBM of smartphone cases and chargers from an Alibaba supplier in Shenzhen. The Chinese supplier offers to handle everything to Jakarta port including freight and insurance. The shop owner just needs to pick up from customs."
    },
    "commodity": {
      "id": "Aksesori ponsel cerdas (casing, pengisi daya)",
      "en": "Smartphone accessories (cases, chargers)"
    },
    "hsCode": "8504",
    "origin": {
      "port": "Yantian",
      "country": "China"
    },
    "destination": {
      "port": "Tanjung Priok",
      "country": "Indonesia"
    },
    "containerType": "LCL",
    "quantity": 2,
    "cargoValue": 8500,
    "currency": "USD",
    "correctAnswer": "CIF",
    "acceptableAnswers": [
      "CIF",
      "CIP"
    ],
    "explanation": {
      "id": "CIF Jakarta paling praktis bagi importir e-commerce kecil. Pemasok Shenzhen menangani freight dan asuransi -- mereka dikelilingi oleh ratusan freight forwarder dan mendapatkan tarif LCL yang kompetitif. Pembeli Indonesia hanya menangani bea cukai impor (yang memerlukan lisensi API). Jangan pernah menggunakan DDP di sini -- Pemasok Tiongkok yang menawarkan \"DDP dari pintu ke pintu\" sering kali menggunakan kurir saluran abu-abu yang mendeklarasikan barang secara tidak benar.",
      "en": "CIF Jakarta is most practical for small e-commerce importers. The Shenzhen supplier handles freight and insurance -- they are surrounded by hundreds of freight forwarders and get competitive LCL rates. The Indonesian buyer only handles import customs (which requires API license). Never use DDP here -- Chinese suppliers offering \"DDP door-to-door\" often use grey-channel couriers that improperly declare goods."
    },
    "hints": [
      {
        "id": "Pemasok menawarkan untuk menangani freight DAN asuransi",
        "en": "The supplier offers to handle freight AND insurance"
      },
      {
        "id": "Ini adalah importir e-commerce kecil yang membeli dari Alibaba",
        "en": "This is a small e-commerce importer buying from Alibaba"
      },
      {
        "id": "Pembeli hanya perlu melewati bea cukai di pihak mereka",
        "en": "The buyer just needs to clear customs on their end"
      }
    ],
    "learningPoints": [
      {
        "id": "CIF adalah istilah paling sederhana untuk importir kecil -- satu harga yang mencakup semua",
        "en": "CIF is the simplest term for small importers -- one all-inclusive price"
      },
      {
        "id": "Waspadalah terhadap tawaran \"DDP\" dari Alibaba -- sering kali berarti kurir saluran abu-abu",
        "en": "Beware of \"DDP\" offers from Alibaba -- often means grey-channel courier"
      },
      {
        "id": "Bea Cukai Indonesia mewajibkan izin impor formal (PIB) untuk barang di atas nilai de minimis",
        "en": "Indonesian customs requires formal import clearance (PIB) for goods above de minimis value"
      }
    ]
  },
  {
    "id": "imp-02",
    "difficulty": "beginner",
    "type": "import",
    "title": {
      "id": "Benang Katun dari Gujarat",
      "en": "Cotton Yarn from Gujarat"
    },
    "description": {
      "id": "Sebuah pabrik tekstil di Bandung mengimpor benang katun ring-spun berukuran 1x40HC dari pemintal India di Gujarat. India adalah produsen kapas terbesar di dunia dan pemasok India menetapkan harga per kilogram termasuk biaya pengiriman dan asuransi ke Jakarta. Pabrik mengirimkan truknya sendiri untuk mengambil dari pelabuhan.",
      "en": "A Bandung textile mill imports 1x40HC of ring-spun cotton yarn from an Indian spinner in Gujarat. India is the world's largest cotton producer and the Indian supplier quotes a per-kilogram price including freight and insurance to Jakarta. The mill sends its own truck to pick up from the port."
    },
    "commodity": {
      "id": "Benang katun pintal cincin (hitungan 30/1)",
      "en": "Ring-spun cotton yarn (30/1 count)"
    },
    "hsCode": "5205",
    "origin": {
      "port": "Mundra",
      "country": "India"
    },
    "destination": {
      "port": "Tanjung Priok",
      "country": "Indonesia"
    },
    "containerType": "40HC",
    "quantity": 1,
    "cargoValue": 45000,
    "currency": "USD",
    "correctAnswer": "CIF",
    "acceptableAnswers": [
      "CIF"
    ],
    "explanation": {
      "id": "CIF Jakarta adalah standar untuk ekspor benang kapas India ke pabrik di Indonesia. Para pemintal India telah mengintegrasikan logistik di jalur perdagangan yang sudah mapan ini. Pabrik di Bandung adalah usaha kecil dan menengah yang fokus pada produksi, bukan pengiriman internasional. CIF memberi mereka harga per kilogram yang jelas. Bea Cukai Indonesia menggunakan nilai CIF untuk penghitungan bea, sehingga ketentuan perdagangannya selaras dengan pemberitahuan pabean.",
      "en": "CIF Jakarta is standard for Indian cotton yarn exports to Indonesian mills. Indian spinners have integrated logistics on this well-established trade lane. Bandung mills are small-to-medium enterprises focused on production, not international freight. CIF gives them a clear per-kilogram cost. Indonesian customs uses CIF value for duty calculation, so the trade term aligns perfectly with the customs declaration."
    },
    "hints": [
      {
        "id": "Pemasok India mengutip harga TERMASUK pengiriman dan asuransi",
        "en": "The Indian supplier quotes a price INCLUDING freight and insurance"
      },
      {
        "id": "Pabrik tekstil fokus pada produksi, bukan logistik",
        "en": "The textile mill focuses on production, not logistics"
      },
      {
        "id": "Bea Cukai Indonesia menghitung bea berdasarkan nilai CIF",
        "en": "Indonesian customs calculates duty based on CIF value"
      }
    ],
    "learningPoints": [
      {
        "id": "Ketika penilaian pabean menggunakan CIF, pencocokan istilah perdagangan menyederhanakan deklarasi",
        "en": "When customs valuation uses CIF, matching the trade term simplifies declarations"
      },
      {
        "id": "Pembeli manufaktur kecil lebih memilih CIF karena harga yang mencakup semua",
        "en": "Small manufacturing buyers prefer CIF for all-inclusive pricing"
      },
      {
        "id": "Benang katun sangat banyak -- 40HC terisi berdasarkan volume sebelum batas berat",
        "en": "Cotton yarn is voluminous -- 40HC fills by volume before weight limit"
      }
    ]
  },
  {
    "id": "imp-03",
    "difficulty": "beginner",
    "type": "import",
    "title": {
      "id": "Kain Poliester dari Ningbo",
      "en": "Polyester Fabric from Ningbo"
    },
    "description": {
      "id": "Sebuah pabrik garmen di Jakarta mengimpor kain poliester berwarna 1x40HC dari pabrik Cina di Hangzhou. Penjual Tiongkok mengutip \"CNF Jakarta\" -- singkatan perdagangan yang umum dalam perdagangan tekstil Asia. Pabrik di Indonesia mempunyai polis asuransi kargo tahunannya sendiri.",
      "en": "A Jakarta garment factory imports 1x40HC of dyed polyester fabric from a Chinese mill in Hangzhou. The Chinese seller quotes \"CNF Jakarta\" -- a common trade shorthand in Asian textile trade. The Indonesian factory has its own annual cargo insurance policy."
    },
    "commodity": {
      "id": "Kain tenun poliester (dicelup)",
      "en": "Polyester woven fabric (dyed)"
    },
    "hsCode": "5407",
    "origin": {
      "port": "Ningbo",
      "country": "China"
    },
    "destination": {
      "port": "Tanjung Priok",
      "country": "Indonesia"
    },
    "containerType": "40HC",
    "quantity": 1,
    "cargoValue": 38000,
    "currency": "USD",
    "correctAnswer": "CFR",
    "acceptableAnswers": [
      "CFR"
    ],
    "explanation": {
      "id": "CFR Jakarta benar. \"CNF\" banyak digunakan dalam perdagangan Asia tetapi BUKAN merupakan Incoterm resmi -- singkatan yang tepat adalah \"CFR\" (Cost and Freight). Pabrik di Tiongkok ini memiliki volume freight yang besar dan menegosiasikan harga yang bersaing. Pembeli Indonesia mempunyai polis asuransi tahunan mereka sendiri, sehingga CIF akan menjadi mubazir. Selalu gunakan \"CFR\" dalam kontrak formal dan Letters of Credit, jangan pernah menggunakan \"CNF\".",
      "en": "CFR Jakarta is correct. \"CNF\" is widely used in Asian trade but is NOT an official Incoterm -- the proper abbreviation is \"CFR\" (Cost and Freight). The Chinese mill has massive freight volumes and negotiates competitive rates. The Indonesian buyer has their own annual insurance policy, so CIF would be redundant. Always use \"CFR\" in formal contracts and Letters of Credit, never \"CNF.\""
    },
    "hints": [
      {
        "id": "Penjual mengutip \"CNF\" -- tetapi apakah itu singkatan resmi Incoterms?",
        "en": "The seller quotes \"CNF\" -- but is that the official Incoterms abbreviation?"
      },
      {
        "id": "Pembeli sudah memiliki polis asuransi sendiri",
        "en": "The buyer already has their own insurance policy"
      },
      {
        "id": "Pabrik tekstil Tiongkok memiliki tarif pengiriman yang sangat kompetitif ke Indonesia",
        "en": "Chinese textile mills have very competitive freight rates to Indonesia"
      }
    ],
    "learningPoints": [
      {
        "id": "\"CNF\" adalah bahasa gaul perdagangan -- Incoterm resminya adalah \"CFR\" (Biaya dan freight)",
        "en": "\"CNF\" is trade slang -- the official Incoterm is \"CFR\" (Cost and Freight)"
      },
      {
        "id": "Jika pembeli memiliki asuransi open-cover tahunan, CIF menjadi mubazir",
        "en": "When the buyer has annual open-cover insurance, CIF is redundant"
      },
      {
        "id": "Selalu gunakan singkatan resmi Incoterms dalam kontrak dan L/C",
        "en": "Always use official Incoterms abbreviations in contracts and L/Cs"
      }
    ]
  },
  {
    "id": "exp-13",
    "difficulty": "beginner",
    "type": "export",
    "title": {
      "id": "Ekspor Garmen ke AS (FCA vs FOB)",
      "en": "Garment Export to USA (FCA vs FOB)"
    },
    "description": {
      "id": "Sebuah pabrik garmen di Jakarta mengekspor kaos berukuran 1x40HC ke Los Angeles. Pembeli dari Amerika (sebuah jaringan ritel besar) menggunakan freight forwarder yang mereka pilih sendiri untuk mengambil kontainer di Jakarta container yard (CY). Barang tidak pernah menyentuh kapal di bawah tanggung jawab penjual.",
      "en": "A Jakarta garment factory exports 1x40HC of t-shirts to Los Angeles. The American buyer (a large retail chain) uses their own nominated freight forwarder who will pick up the container at the Jakarta container yard (CY). The goods never touch the vessel under the seller's responsibility."
    },
    "commodity": {
      "id": "Kaos katun",
      "en": "Cotton T-shirts"
    },
    "hsCode": "6109",
    "origin": {
      "port": "Tanjung Priok",
      "country": "Indonesia"
    },
    "destination": {
      "port": "Los Angeles",
      "country": "USA"
    },
    "containerType": "40HC",
    "quantity": 1,
    "cargoValue": 55000,
    "currency": "USD",
    "correctAnswer": "FCA",
    "acceptableAnswers": [
      "FCA",
      "FOB"
    ],
    "explanation": {
      "id": "FCA Jakarta CY secara teknis benar karena peti kemas diserahkan di lapangan penumpukan, bukan dimuat ke kapal oleh penjual. ICC merekomendasikan FCA untuk pemindahan kontainer CY-ke-CY. FOB juga diterima secara luas dalam praktiknya, namun FCA lebih tepat. Perbedaan utama: FCA = barang dikirim ke carrier di tempat yang disebutkan; FOB = barang yang dimuat di atas kapal.",
      "en": "FCA Jakarta CY is technically correct because the container is handed over at the container yard, not loaded onto the vessel by the seller. ICC recommends FCA for CY-to-CY container moves. FOB is also widely accepted in practice, but FCA is more precise. The key distinction: FCA = goods delivered to carrier at a named place; FOB = goods loaded on board the vessel."
    },
    "hints": [
      {
        "id": "carrier pembeli mengambil di container yard (CY)",
        "en": "The buyer's forwarder picks up at the container yard (CY)"
      },
      {
        "id": "Penjual tidak memuat kontainer ke kapal",
        "en": "The seller does not load the container onto the ship"
      },
      {
        "id": "ICC merekomendasikan istilah khusus untuk serah terima kontainer di CY",
        "en": "ICC recommends a specific term for container handover at CY"
      }
    ],
    "learningPoints": [
      {
        "id": "FCA lebih tepat dibandingkan FOB untuk pemindahan kontainer CY-ke-CY",
        "en": "FCA is more appropriate than FOB for CY-to-CY container moves"
      },
      {
        "id": "FOB secara teknis berarti penjual memuat barang \"di atas\" kapal",
        "en": "FOB technically means the seller loads goods \"on board\" the vessel"
      },
      {
        "id": "Dalam praktiknya, FOB dan FCA sering digunakan secara bergantian untuk kontainer",
        "en": "In practice, FOB and FCA are often used interchangeably for containers"
      }
    ]
  },
  {
    "id": "exp-05",
    "difficulty": "intermediate",
    "type": "export",
    "title": {
      "id": "Minyak Sawit Mentah ke Mumbai",
      "en": "Crude Palm Oil to Mumbai"
    },
    "description": {
      "id": "PT Musim Mas mengekspor 500 MT CPO curah dari Belawan (Medan) ke Nhava Sheva, Mumbai. Perusahaan memiliki kapal tanker dan mengendalikan seluruh rantai logistik. Bea Cukai India menggunakan nilai CIF untuk penghitungan bea masuk, sedangkan Bea Cukai Indonesia menggunakan nilai FOB untuk ekspor.",
      "en": "PT Musim Mas exports 500 MT of bulk CPO from Belawan (Medan) to Nhava Sheva, Mumbai. The company owns tanker vessels and controls the entire logistics chain. Indian customs uses CIF value for import duty calculation, while Indonesian customs uses FOB for export."
    },
    "commodity": {
      "id": "Minyak Sawit Mentah (CPO)",
      "en": "Crude Palm Oil (CPO)"
    },
    "hsCode": "1511",
    "origin": {
      "port": "Belawan",
      "country": "Indonesia"
    },
    "destination": {
      "port": "Nhava Sheva (JNPT)",
      "country": "India"
    },
    "containerType": "Bulk/Flexi-tank",
    "quantity": 500,
    "cargoValue": 480000,
    "currency": "USD",
    "correctAnswer": "CIF",
    "acceptableAnswers": [
      "CIF"
    ],
    "explanation": {
      "id": "CIF Mumbai merupakan standar perdagangan curah minyak sawit Indonesia ke India. Perusahaan kelapa sawit Indonesia memiliki atau menyewa kapal tanker. CIF berfungsi karena: (1) penjual memiliki logistik yang terintegrasi, (2) bea cukai India menghitung bea berdasarkan nilai CIF -- mencocokkan persyaratan komersial menyederhanakan kedua sisi, (3) CPO rentan terhadap kontaminasi, sehingga asuransi CIF (minimum ICC-C) memberikan cakupan dasar.",
      "en": "CIF Mumbai is the standard for Indonesian palm oil bulk trade to India. Indonesian palm oil majors own or charter tanker vessels. CIF works because: (1) the seller has integrated logistics, (2) Indian customs calculates duty on CIF value -- matching the commercial terms simplifies both sides, (3) CPO is susceptible to contamination, so CIF insurance (minimum ICC-C) provides baseline coverage."
    },
    "hints": [
      {
        "id": "Penjual MEMILIKI kapal tanker -- mereka mengendalikan logistik",
        "en": "The seller OWNS tanker vessels -- they control the logistics"
      },
      {
        "id": "Bea Cukai India menghitung bea masuk berdasarkan nilai CIF",
        "en": "Indian customs calculates import duty on CIF value"
      },
      {
        "id": "Ini adalah komoditas cair curah, bukan dalam peti kemas",
        "en": "This is a bulk liquid commodity, not containerized"
      }
    ],
    "learningPoints": [
      {
        "id": "Ketika penjual memiliki kemampuan pengiriman terintegrasi, CIF masuk akal",
        "en": "When the seller has integrated shipping capability, CIF makes sense"
      },
      {
        "id": "Mencocokkan persyaratan perdagangan dengan metode penilaian pabean menyederhanakan deklarasi",
        "en": "Matching trade terms to customs valuation method simplifies declarations"
      },
      {
        "id": "CIF dan FOB adalah istilah khusus laut -- tepat untuk pengiriman laut dalam jumlah besar",
        "en": "CIF and FOB are sea-only terms -- correct for bulk ocean shipping"
      }
    ]
  },
  {
    "id": "exp-06",
    "difficulty": "intermediate",
    "type": "export",
    "title": {
      "id": "Kopi Arabika ke Hamburg",
      "en": "Arabica Coffee to Hamburg"
    },
    "description": {
      "id": "Seorang eksportir kopi Surabaya mengirimkan 1x20GP (320 kantong, 19.200 kg) Arabika kualitas Mandheling ke roaster spesialti Jerman. Sang pemanggang membeli dari 8 negara asal dan menggunakan satu penyedia logistik untuk semua pengiriman masuk. Kopi itu berat -- kopi mencapai batas berat kontainer sebelum memenuhi volumenya.",
      "en": "A Surabaya coffee exporter ships 1x20GP (320 bags, 19,200 kg) of Mandheling grade Arabica to a German specialty roaster. The roaster buys from 8 origin countries and uses one logistics provider for all inbound shipments. Coffee is heavy -- it hits the container weight limit before filling the volume."
    },
    "commodity": {
      "id": "Biji Kopi Arabika Hijau (Mandheling)",
      "en": "Green Arabica coffee beans (Mandheling)"
    },
    "hsCode": "0901",
    "origin": {
      "port": "Tanjung Perak",
      "country": "Indonesia"
    },
    "destination": {
      "port": "Hamburg",
      "country": "Germany"
    },
    "containerType": "20GP",
    "quantity": 1,
    "cargoValue": 72000,
    "currency": "USD",
    "correctAnswer": "FOB",
    "acceptableAnswers": [
      "FOB"
    ],
    "explanation": {
      "id": "FOB Surabaya adalah standar perdagangan kopi global. Para roaster kopi dan pedagang di Eropa mempunyai pengaturan pengaturan freight mereka sendiri. Spread FOB-CIF pada rute ini adalah USD 2.900+ per kontainer -- pembeli Eropa ingin mengendalikan biaya ini. FCA secara teknis lebih tepat untuk kontainer, namun industri kopi global (termasuk European Contract for Coffee / ECC) menggunakan FOB.",
      "en": "FOB Surabaya is the global coffee trade standard. European roasters and traders have their own freight arrangements. The FOB-CIF spread on this route is USD 2,900+ per container -- European buyers want to control this cost. FCA is technically more precise for containers, but the global coffee industry (including European Contract for Coffee / ECC) uses FOB."
    },
    "hints": [
      {
        "id": "Pemanggang Jerman membeli dari 8 negara dengan satu penyedia logistik",
        "en": "The German roaster buys from 8 countries with one logistics provider"
      },
      {
        "id": "Industri kopi memiliki konvensi perdagangan khusus untuk penetapan harga",
        "en": "The coffee industry has a specific trade convention for pricing"
      },
      {
        "id": "Kopi itu kental -- 20GP lebih disukai daripada 40GP karena batasan berat",
        "en": "Coffee is dense -- 20GP preferred over 40GP due to weight limits"
      }
    ],
    "learningPoints": [
      {
        "id": "Konvensi perdagangan komoditas (kopi, karet, minyak sawit) sebagian besar menggunakan FOB",
        "en": "Commodity trade conventions (coffee, rubber, palm oil) overwhelmingly use FOB"
      },
      {
        "id": "20GP lebih disukai untuk kargo berat seperti kopi -- batas berat tercapai sebelum volume",
        "en": "20GP is preferred for heavy cargo like coffee -- weight limit hits before volume"
      },
      {
        "id": "Peraturan Deforestasi Uni Eropa (EUDR) kini mewajibkan ketertelusuran di tingkat petani",
        "en": "EU Deforestation Regulation (EUDR) now requires farm-level traceability"
      }
    ]
  },
  {
    "id": "exp-07",
    "difficulty": "intermediate",
    "type": "export",
    "title": {
      "id": "Karet Alam ke Qingdao",
      "en": "Natural Rubber to Qingdao"
    },
    "description": {
      "id": "Sebuah pengolah karet Sumatera Selatan mengekspor 20 MT SIR 20 (Standar Karet Indonesia grade 20) dalam bentuk bal dari Palembang ke Qingdao. Produsen ban Tiongkok membeli dari 5 pelabuhan berbeda di Sumatera dan Kalimantan. Penetapan harga karet di bursa SICOM dikutip sebagai \"FOB pelabuhan Indonesia\".",
      "en": "A South Sumatra rubber processor exports 20 MT of SIR 20 (Standard Indonesian Rubber grade 20) in bales from Palembang to Qingdao. Chinese tire manufacturers buy from 5 different ports across Sumatra and Kalimantan. Rubber pricing on the SICOM exchange is quoted as \"FOB Indonesian port.\""
    },
    "commodity": {
      "id": "Karet yang Ditentukan Secara Teknis (TSR 20)",
      "en": "Technically Specified Rubber (TSR 20)"
    },
    "hsCode": "4001",
    "origin": {
      "port": "Boom Baru",
      "country": "Indonesia"
    },
    "destination": {
      "port": "Qingdao",
      "country": "China"
    },
    "containerType": "20GP",
    "quantity": 1,
    "cargoValue": 32000,
    "currency": "USD",
    "correctAnswer": "FOB",
    "acceptableAnswers": [
      "FOB"
    ],
    "explanation": {
      "id": "FOB Palembang mengikuti konvensi bursa komoditi. Penetapan harga berjangka SICOM mengacu pada \"FOB Pelabuhan Indonesia\" sebagai dasar penetapan harga. Pembeli Tiongkok menggabungkan pembelian dari beberapa pelabuhan dan mengatur pengiriman mereka sendiri. Penggunaan CIF akan bersifat transparan -- pembeli cukup mengurangi ongkos angkut dari CFR/CIF untuk menghitung FOB efektif, lalu membandingkannya dengan pemasok lain.",
      "en": "FOB Palembang follows the commodity exchange convention. SICOM futures pricing references \"FOB Indonesian port\" as the pricing basis. Chinese buyers consolidate purchases from multiple ports and arrange their own freight. Using CIF would be transparent -- buyers simply deduct freight from CFR/CIF to calculate effective FOB, then compare against other suppliers."
    },
    "hints": [
      {
        "id": "Bursa komoditas mengutip harga sebagai \"FOB pelabuhan Indonesia\"",
        "en": "The commodity exchange quotes prices as \"FOB Indonesian port\""
      },
      {
        "id": "Pembeli Tiongkok membeli dari 5 pelabuhan berbeda di Indonesia",
        "en": "The Chinese buyer purchases from 5 different Indonesian ports"
      },
      {
        "id": "Bal karet sangat padat -- 20 MT per kontainer 20GP",
        "en": "Rubber bales are extremely dense -- 20 MT per 20GP container"
      }
    ],
    "learningPoints": [
      {
        "id": "Dasar penetapan harga bursa berjangka komoditas menentukan konvensi Incoterm",
        "en": "Commodity futures exchange pricing basis determines the Incoterm convention"
      },
      {
        "id": "Ketika pembeli berkonsolidasi dari berbagai asal, mereka mengatur pengirimannya sendiri",
        "en": "When buyers consolidate from multiple origins, they arrange their own freight"
      },
      {
        "id": "VGM (Massa Kotor Terverifikasi) sangat penting untuk muatan padat yang mendekati batas berat",
        "en": "VGM (Verified Gross Mass) is critical for dense cargo near weight limits"
      }
    ]
  },
  {
    "id": "exp-08",
    "difficulty": "intermediate",
    "type": "export",
    "title": {
      "id": "Suku Cadang Mobil ke Bangkok",
      "en": "Auto Parts to Bangkok"
    },
    "description": {
      "id": "Pemasok tingkat 2 Indonesia mengirimkan braket baja stempel ke pabrik perakitan Toyota di Thailand. Tim logistik Toyota di Bangkok mengendalikan semua pengiriman masuk dari 6 negara ASEAN melalui freight forwarder yang ditunjuk (NYK Logistics). Pemasok mengirimkan suku cadang ke pusat konsolidasi NYK di Jakarta.",
      "en": "An Indonesian tier-2 supplier ships stamped steel brackets to a Toyota assembly plant in Thailand. Toyota's logistics team in Bangkok controls all inbound shipments from 6 ASEAN countries through their appointed forwarder (NYK Logistics). The supplier delivers parts to NYK's consolidation center in Jakarta."
    },
    "commodity": {
      "id": "Braket baja yang dicap dan segel karet",
      "en": "Stamped steel brackets and rubber seals"
    },
    "hsCode": "8708",
    "origin": {
      "port": "Tanjung Priok",
      "country": "Indonesia"
    },
    "destination": {
      "port": "Laem Chabang",
      "country": "Thailand"
    },
    "containerType": "20GP",
    "quantity": 1,
    "cargoValue": 42000,
    "currency": "USD",
    "correctAnswer": "FCA",
    "acceptableAnswers": [
      "FCA"
    ],
    "explanation": {
      "id": "FCA Jakarta (Gudang Logistik NYK) sudah benar. OEM otomotif mengelola rantai pasokan regional melalui penyedia logistik mereka sendiri. FCA lebih disukai daripada FOB karena merupakan moda transportasi netral -- berfungsi untuk laut, udara, atau multimoda. Pemasok melakukan pengiriman ke gudang penyedia logistik; bagian logistik OEM menangani semuanya dari sana. ASEAN FTA (ATIGA Formulir D) memenuhi syarat untuk bea masuk 0%.",
      "en": "FCA Jakarta (NYK Logistics warehouse) is correct. Automotive OEMs manage regional supply chains through their own logistics providers. FCA is preferred over FOB because it is transport-mode neutral -- works for sea, air, or multimodal. The supplier delivers to the logistics provider's warehouse; the OEM's logistics arm handles everything from there. ASEAN FTA (ATIGA Form D) qualifies for 0% duty."
    },
    "hints": [
      {
        "id": "Toyota mengontrol SEMUA pengiriman masuk dari 6 negara ASEAN",
        "en": "Toyota controls ALL inbound shipments from 6 ASEAN countries"
      },
      {
        "id": "Pemasok mengirimkan ke gudang logistik, bukan ke pelabuhan",
        "en": "The supplier delivers to a logistics warehouse, not to the port"
      },
      {
        "id": "Ini bisa dikirim melalui laut atau udara tergantung pada urgensinya",
        "en": "This could ship by sea or air depending on urgency"
      }
    ],
    "learningPoints": [
      {
        "id": "FCA bersifat netral dalam moda transportasi -- lebih disukai untuk rantai pasokan yang menggunakan banyak moda",
        "en": "FCA is transport-mode neutral -- preferred for supply chains using multiple modes"
      },
      {
        "id": "Rantai pasokan JIT otomotif memerlukan spesifikasi nama tempat yang tepat",
        "en": "Automotive JIT supply chains require precise named-place specification"
      },
      {
        "id": "ASEAN FTA (ATIGA Form D) memberikan bea masuk 0% dengan kandungan nilai regional 40%.",
        "en": "ASEAN FTA (ATIGA Form D) provides 0% duty with 40% regional value content"
      }
    ]
  },
  {
    "id": "exp-09",
    "difficulty": "intermediate",
    "type": "export",
    "title": {
      "id": "Kayu lapis ke Jeddah",
      "en": "Plywood to Jeddah"
    },
    "description": {
      "id": "Eksportir kayu lapis Indonesia mengirimkan kayu lapis keras tropis berukuran 1x20GP ke importir bahan konstruksi Saudi. Eksportir memiliki tarif angkutan yang kompetitif pada rute Jakarta-Laut Merah. Peraturan impor Saudi mengharuskan asuransi kargo laut ditempatkan pada perusahaan asuransi berlisensi Saudi.",
      "en": "An Indonesian plywood exporter ships 1x20GP of tropical hardwood plywood to a Saudi construction material importer. The exporter has competitive freight rates on the Jakarta-Red Sea route. Saudi import regulations require marine cargo insurance to be placed with a Saudi-licensed insurer."
    },
    "commodity": {
      "id": "Lembaran kayu lapis kayu keras tropis",
      "en": "Tropical hardwood plywood sheets"
    },
    "hsCode": "4412",
    "origin": {
      "port": "Tanjung Priok",
      "country": "Indonesia"
    },
    "destination": {
      "port": "Jeddah Islamic Port",
      "country": "Saudi Arabia"
    },
    "containerType": "20GP",
    "quantity": 1,
    "cargoValue": 18000,
    "currency": "USD",
    "correctAnswer": "CFR",
    "acceptableAnswers": [
      "CFR"
    ],
    "explanation": {
      "id": "CFR Jeddah benar. Eksportir Indonesia mengatur pengiriman yang kompetitif, namun pembeli Saudi HARUS mengasuransikan dengan perusahaan asuransi lokal yang berlisensi Saudi. Jika CIF digunakan, polis asuransi penjual Indonesia mungkin tidak dapat diklaim di Arab Saudi. CFR memungkinkan pembeli mengatur asuransi yang sesuai dengan peraturan lokal. Verifikasi legalitas kayu V-Legal/SVLK wajib dilakukan pada seluruh ekspor kayu Indonesia.",
      "en": "CFR Jeddah is correct. The Indonesian exporter arranges competitive freight, but the Saudi buyer MUST insure with a local Saudi-licensed insurer. If CIF were used, the Indonesian seller's insurance policy might not be claimable in Saudi Arabia. CFR lets the buyer arrange locally-compliant insurance. V-Legal/SVLK timber legality verification is mandatory for all Indonesian wood exports."
    },
    "hints": [
      {
        "id": "Arab Saudi memerlukan asuransi dari perusahaan asuransi berlisensi Saudi",
        "en": "Saudi Arabia requires insurance from a Saudi-licensed insurer"
      },
      {
        "id": "Eksportir Indonesia memiliki tarif angkutan yang bagus ke Laut Merah",
        "en": "The Indonesian exporter has good freight rates to the Red Sea"
      },
      {
        "id": "Jika penjual mengatur asuransi, pembeli mungkin tidak dapat mengklaimnya",
        "en": "If the seller arranged insurance, the buyer might not be able to claim on it"
      }
    ],
    "learningPoints": [
      {
        "id": "Beberapa negara mewajibkan asuransi dari perusahaan asuransi yang memiliki izin lokal sehingga menjadikan CIF bermasalah",
        "en": "Some countries require insurance from locally-licensed insurers -- making CIF problematic"
      },
      {
        "id": "CFR = penjual membayar ongkos angkut, pembeli mengatur asuransinya sendiri",
        "en": "CFR = seller pays freight, buyer arranges their own insurance"
      },
      {
        "id": "V-Legal/SVLK bersifat wajib bagi SELURUH ekspor produk kayu Indonesia",
        "en": "V-Legal/SVLK is mandatory for ALL Indonesian wood product exports"
      }
    ]
  },
  {
    "id": "imp-04",
    "difficulty": "intermediate",
    "type": "import",
    "title": {
      "id": "Kumparan Baja dari Busan",
      "en": "Steel Coils from Busan"
    },
    "description": {
      "id": "Sebuah distributor baja Indonesia mengimpor 500 MT gulungan baja canai panas dari pabrik Korea (POSCO). Pabrik tersebut memberikan harga yang sudah termasuk biaya pengiriman ke Surabaya. Pembeli Indonesia mempunyai polis asuransi open-cover tahunan dengan perusahaan asuransi lokal. Kumparan baja terlalu berat untuk kontainer standar.",
      "en": "An Indonesian steel distributor imports 500 MT of hot-rolled steel coils from a Korean mill (POSCO). The mill quotes a price that includes freight to Surabaya. The Indonesian buyer has an annual open-cover insurance policy with a local insurer. Steel coils are too heavy for standard containers."
    },
    "commodity": {
      "id": "Kumparan baja canai panas (HRC)",
      "en": "Hot-rolled steel coils (HRC)"
    },
    "hsCode": "7208",
    "origin": {
      "port": "Busan",
      "country": "South Korea"
    },
    "destination": {
      "port": "Tanjung Perak",
      "country": "Indonesia"
    },
    "containerType": "Breakbulk",
    "quantity": 500,
    "cargoValue": 350000,
    "currency": "USD",
    "correctAnswer": "CFR",
    "acceptableAnswers": [
      "CFR"
    ],
    "explanation": {
      "id": "CFR Surabaya merupakan standar perdagangan baja Asia. Pabrik di Korea mempunyai kontrak freight berdasarkan volume dan memasukkan biaya freight ke dalam harga mereka. Pembeli Indonesia mempertahankan polis asuransi tahunan, sehingga CIF menjadi mubazir. Baja diatur oleh LARTAS -- memerlukan PI (Persetujuan Impor) dan kepatuhan SNI. Kumparan HRC tunggal memiliki berat masing-masing 10-25 MT, memerlukan rak datar atau pengiriman breakbulk.",
      "en": "CFR Surabaya is standard for Asian steel trade. Korean mills have volume-based freight contracts and include freight in their pricing. Indonesian buyers maintain annual insurance policies, making CIF redundant. Steel is LARTAS-regulated -- requires PI (Import Approval) and SNI compliance. Single HRC coils weigh 10-25 MT each, requiring flat racks or breakbulk shipping."
    },
    "hints": [
      {
        "id": "Pabrik baja Korea mengutip harga \"termasuk pengiriman\".",
        "en": "Korean steel mills quote \"freight included\" prices"
      },
      {
        "id": "Pembeli memiliki polis asuransi tetap mereka sendiri",
        "en": "The buyer has their own standing insurance policy"
      },
      {
        "id": "Baja adalah komoditas yang diatur oleh LARTAS yang memerlukan persetujuan impor",
        "en": "Steel is a LARTAS-regulated commodity requiring import approval"
      }
    ],
    "learningPoints": [
      {
        "id": "Pabrik baja di Asia sebagian besar menjual CFR -- pembeli mengasuransikan secara terpisah",
        "en": "Asian steel mills predominantly sell CFR -- buyer insures separately"
      },
      {
        "id": "Barang-barang LARTAS (baja, tekstil, makanan) memerlukan persetujuan impor khusus",
        "en": "LARTAS items (steel, textiles, food) require specific import approvals"
      },
      {
        "id": "Kargo berat seperti gulungan baja tidak dapat menggunakan kontainer standar -- rak datar atau breakbulk",
        "en": "Heavy cargo like steel coils cannot use standard containers -- flat rack or breakbulk"
      }
    ]
  },
  {
    "id": "imp-05",
    "difficulty": "intermediate",
    "type": "import",
    "title": {
      "id": "Pelat Baja dari Tianjin",
      "en": "Steel Plates from Tianjin"
    },
    "description": {
      "id": "Sebuah galangan kapal di Surabaya mengimpor 400 MT pelat baja karbon medium dari pabrik Tiongkok untuk konstruksi kapal. Pabrik Tiongkok mengutip CFR sebagai standar. Galangan kapal memiliki polis asuransi tahunan seluas satu yard yang mencakup semua material yang masuk. Indonesia mungkin mengenakan bea anti-dumping pada produk baja Tiongkok tertentu.",
      "en": "A Surabaya shipyard imports 400 MT of medium carbon steel plates from a Chinese mill for vessel construction. The Chinese mill quotes CFR as standard. The shipyard maintains a yard-wide annual insurance policy covering all incoming materials. Indonesia may have anti-dumping duties on certain Chinese steel products."
    },
    "commodity": {
      "id": "Pelat baja karbon sedang (10-25mm)",
      "en": "Medium carbon steel plates (10-25mm)"
    },
    "hsCode": "7208",
    "origin": {
      "port": "Tianjin Xingang",
      "country": "China"
    },
    "destination": {
      "port": "Tanjung Perak",
      "country": "Indonesia"
    },
    "containerType": "Breakbulk",
    "quantity": 400,
    "cargoValue": 280000,
    "currency": "USD",
    "correctAnswer": "CFR",
    "acceptableAnswers": [
      "CFR"
    ],
    "explanation": {
      "id": "CFR Surabaya mengikuti pola yang sama dengan baja Korea. Pabrik-pabrik di Tiongkok (Baosteel, Ansteel) memiliki volume freight yang sangat besar ke Asia Tenggara. Asuransi tahunan galangan kapal membuat CIF menjadi mubazir. Jebakan utama: bea masuk anti-dumping mungkin berlaku pada baja Tiongkok -- periksa sesuai subpos HS. Juga memerlukan PI (Persetujuan Impor) dari Kementerian Perdagangan dan sertifikasi SNI.",
      "en": "CFR Surabaya follows the same pattern as Korean steel. Chinese mills (Baosteel, Ansteel) have massive freight volumes to Southeast Asia. The shipyard's annual insurance makes CIF redundant. Key trap: anti-dumping duties may apply on Chinese steel -- check per HS subheading. Also requires PI (Import Approval) from Ministry of Trade and SNI certification."
    },
    "hints": [
      {
        "id": "Pabrik baja Tiongkok juga mengutip \"termasuk pengiriman\" seperti pabrik Korea",
        "en": "Chinese steel mills also quote \"freight included\" like Korean mills"
      },
      {
        "id": "Galangan kapal memiliki polis asuransi seluas satu halaman untuk semua material yang masuk",
        "en": "The shipyard has a yard-wide insurance policy for all incoming materials"
      },
      {
        "id": "Waspadai bea masuk anti-dumping terhadap baja Tiongkok di Indonesia",
        "en": "Watch out for anti-dumping duties on Chinese steel in Indonesia"
      }
    ],
    "learningPoints": [
      {
        "id": "CFR adalah konvensi perdagangan baja yang dominan di Asia",
        "en": "CFR is the dominant steel trade convention across Asia"
      },
      {
        "id": "Bea masuk anti-dumping menambah biaya di luar bea masuk normal -- selalu periksa",
        "en": "Anti-dumping duties add cost beyond normal import duty -- always check"
      },
      {
        "id": "Berdasarkan CFR, pembeli harus menyatakan nilai asuransi secara terpisah kepada bea cukai",
        "en": "Under CFR, the buyer must separately declare insurance value to customs"
      }
    ]
  },
  {
    "id": "imp-06",
    "difficulty": "intermediate",
    "type": "import",
    "title": {
      "id": "Makanan Siap Saji dari Bangkok",
      "en": "Ready-to-Eat Food from Bangkok"
    },
    "description": {
      "id": "Distributor makanan Indonesia mengimpor bumbu mie instan dan makanan ringan buah kering dari pabrik Thailand. Penjual Thailand mengirimkan ke Indonesia setiap bulan dengan tarif pengiriman ASEAN yang kompetitif. Sejak Oktober 2024, SEMUA produk pangan yang dijual di Indonesia harus memiliki sertifikasi halal. Pembeli menangani registrasi BPOM.",
      "en": "An Indonesian food distributor imports instant noodle seasonings and dried fruit snacks from a Thai factory. The Thai seller ships to Indonesia monthly with competitive ASEAN freight rates. Since October 2024, ALL food products sold in Indonesia must have halal certification. The buyer handles BPOM registration."
    },
    "commodity": {
      "id": "Bumbu mie instan dan snack buah kering",
      "en": "Instant noodle seasonings and dried fruit snacks"
    },
    "hsCode": "2103",
    "origin": {
      "port": "Laem Chabang",
      "country": "Thailand"
    },
    "destination": {
      "port": "Tanjung Priok",
      "country": "Indonesia"
    },
    "containerType": "20GP",
    "quantity": 1,
    "cargoValue": 22000,
    "currency": "USD",
    "correctAnswer": "CIF",
    "acceptableAnswers": [
      "CIF",
      "CFR"
    ],
    "explanation": {
      "id": "CIF Jakarta menjadi standar ekspor pangan Thailand ke Indonesia. Penjual Thailand memiliki infrastruktur logistik ASEAN yang berkembang dengan baik. Pembeli Indonesia berfokus sepenuhnya pada kepatuhan terhadap peraturan: registrasi BPOM (nomor ML), sertifikasi halal wajib, dan pelabelan dalam Bahasa Indonesia. DDP salah karena penjual Thailand tidak bisa mematuhi peraturan impor pangan Indonesia.",
      "en": "CIF Jakarta is standard for Thai food exports to Indonesia. The Thai seller has well-developed ASEAN logistics infrastructure. The Indonesian buyer focuses entirely on regulatory compliance: BPOM registration (ML number), mandatory halal certification, and Bahasa Indonesia labeling. DDP is wrong because the Thai seller cannot navigate Indonesian food import regulations."
    },
    "hints": [
      {
        "id": "Pabrik Thailand mengirim ke Indonesia setiap bulan",
        "en": "The Thai factory ships to Indonesia every month"
      },
      {
        "id": "Sertifikasi halal kini menjadi hal wajib bagi SEMUA produk pangan di Indonesia",
        "en": "Halal certification is now mandatory for ALL food products in Indonesia"
      },
      {
        "id": "Pekerjaan utama pembeli adalah kepatuhan terhadap peraturan, bukan logistik",
        "en": "The buyer's main job is regulatory compliance, not logistics"
      }
    ],
    "learningPoints": [
      {
        "id": "Sertifikasi halal (UU JPH) diwajibkan untuk impor pangan sejak Oktober 2024",
        "en": "Halal certification (UU JPH) is mandatory for food imports since October 2024"
      },
      {
        "id": "BPOM ML (Registrasi Pangan Luar Negeri) harus diperoleh SEBELUM pengiriman",
        "en": "BPOM ML (Foreign Food Registration) must be obtained BEFORE shipping"
      },
      {
        "id": "Perdagangan ASEAN (ATIGA Formulir D) memberikan tarif bea preferensial",
        "en": "ASEAN trade (ATIGA Form D) provides preferential duty rates"
      }
    ]
  },
  {
    "id": "imp-07",
    "difficulty": "intermediate",
    "type": "import",
    "title": {
      "id": "Robot Industri dari Osaka",
      "en": "Industrial Robots from Osaka"
    },
    "description": {
      "id": "Sebuah pabrik mobil Indonesia mengimpor 2 robot las Fanuc (masing-masing USD 120.000) dari Jepang. Pabrikan Jepang ini menyediakan layanan siap pakai -- pengiriman ke pabrik pembeli, kemudian teknisi mereka memasang dan mengkalibrasi peralatan. Pembeli menangani bea cukai impor dengan lisensi API-P mereka sendiri.",
      "en": "An Indonesian auto factory imports 2 Fanuc welding robots (USD 120,000 each) from Japan. The Japanese manufacturer provides turnkey service -- delivery to the buyer's factory, then their engineers install and calibrate the equipment. The buyer handles import customs clearance with their own API-P license."
    },
    "commodity": {
      "id": "Robot las artikulasi (Fanuc)",
      "en": "Articulated welding robots (Fanuc)"
    },
    "hsCode": "8479",
    "origin": {
      "port": "Kobe",
      "country": "Japan"
    },
    "destination": {
      "port": "Tanjung Priok",
      "country": "Indonesia"
    },
    "containerType": "40HC",
    "quantity": 2,
    "cargoValue": 240000,
    "currency": "USD",
    "correctAnswer": "DAP",
    "acceptableAnswers": [
      "DAP"
    ],
    "explanation": {
      "id": "DAP Jakarta (pabrik pembeli) benar. Produsen peralatan Jepang menjual DAP karena menyediakan instalasi turnkey. Penjual mengirimkan robot ke pabrik menggunakan anak perusahaan logistik mereka yang berpengalaman (NYK/K-Line). CIF tidak akan cukup -- robot presisi memerlukan penanganan khusus dari pelabuhan ke pabrik. DDP salah karena perusahaan Jepang tidak bisa menjadi importir tercatat di Indonesia.",
      "en": "DAP Jakarta (buyer's factory) is correct. Japanese equipment manufacturers sell DAP because they provide turnkey installation. The seller delivers the robots to the factory using their experienced logistics subsidiary (NYK/K-Line). CIF would be insufficient -- a precision robot needs specialized port-to-factory handling. DDP is wrong because the Japanese company cannot be the importer of record in Indonesia."
    },
    "hints": [
      {
        "id": "Pabrikan mengirimkan ke pabrik DAN memasang peralatan",
        "en": "The manufacturer delivers to the factory AND installs the equipment"
      },
      {
        "id": "Robot presisi memerlukan transportasi pemantau guncangan khusus",
        "en": "Precision robots need specialized shock-monitoring transport"
      },
      {
        "id": "Hanya pembeli Indonesia yang dapat melewati bea cukai dengan lisensi API-P mereka",
        "en": "Only the Indonesian buyer can clear customs with their API-P license"
      }
    ],
    "learningPoints": [
      {
        "id": "DAP = penjual mengirimkan ke tempat yang ditentukan, tetapi pembeli menangani izin impor",
        "en": "DAP = seller delivers to a named place, but buyer handles import clearance"
      },
      {
        "id": "Penjual peralatan turnkey menggunakan DAP karena pengiriman ke pabrik merupakan bagian dari penjualan",
        "en": "Turnkey equipment sellers use DAP because delivery to factory is part of the sale"
      },
      {
        "id": "DDP tidak praktis jika penjual tidak dapat menjadi importir tercatat",
        "en": "DDP is impractical when the seller cannot be the importer of record"
      }
    ]
  },
  {
    "id": "imp-13",
    "difficulty": "intermediate",
    "type": "import",
    "title": {
      "id": "Mesin Tekstil dari Italia",
      "en": "Textile Machinery from Italy"
    },
    "description": {
      "id": "Sebuah pabrik tenun di Bandung mengimpor alat tenun rapier berkecepatan tinggi dari pabrikan Italia. Perusahaan asal Italia tersebut mengutip harga termasuk biaya pengiriman ke pelabuhan Jakarta. Pembeli Indonesia mempunyai polis asuransi kargo tahunan dan akan mengatur pengiriman truk dari pelabuhan ke Bandung (130 km). Bea masuk mesin tekstil rendah (0-5%) untuk mendorong industrialisasi.",
      "en": "A Bandung weaving factory imports a high-speed rapier loom from an Italian manufacturer. The Italian company quotes a price including freight to Jakarta port. The Indonesian buyer has an annual cargo insurance policy and will arrange trucking from the port to Bandung (130 km). Import duty on textile machinery is low (0-5%) to encourage industrialization."
    },
    "commodity": {
      "id": "Alat tenun rapier berkecepatan tinggi",
      "en": "High-speed rapier loom"
    },
    "hsCode": "8446",
    "origin": {
      "port": "Genoa",
      "country": "Italy"
    },
    "destination": {
      "port": "Tanjung Priok",
      "country": "Indonesia"
    },
    "containerType": "40HC",
    "quantity": 1,
    "cargoValue": 175000,
    "currency": "USD",
    "correctAnswer": "CFR",
    "acceptableAnswers": [
      "CFR",
      "CIF"
    ],
    "explanation": {
      "id": "CFR Jakarta benar. Pabrikan Italia ini memasukkan ongkos kirim ke dalam harga mereka -- hal yang umum untuk ekspor mesin Eropa. Pembeli Indonesia mempunyai asuransi tahunan dan akan mengatur pengiriman ke Bandung secara lokal. CIF juga dapat berfungsi namun mubazir mengingat asuransi pembeli sudah ada. DAP akan membebani kewajiban penjual secara berlebihan -- angkutan truk dari pelabuhan ke Bandung mudah dilakukan oleh pembeli lokal.",
      "en": "CFR Jakarta is correct. The Italian manufacturer includes freight in their price -- common for European machinery exports. The Indonesian buyer has annual insurance and will arrange Bandung trucking locally. CIF would also work but is redundant given the buyer's existing insurance. DAP would over-extend the seller's obligations -- port-to-Bandung trucking is straightforward for the local buyer."
    },
    "hints": [
      {
        "id": "Penjual Italia memasukkan biaya pengiriman dalam penawaran mereka",
        "en": "The Italian seller includes freight in their quote"
      },
      {
        "id": "Pembeli memiliki polis asuransi kargo sendiri",
        "en": "The buyer has their own cargo insurance policy"
      },
      {
        "id": "Pembeli akan mengatur sendiri angkutan truk sepanjang 130 km ke Bandung",
        "en": "The buyer will arrange the 130 km trucking to Bandung themselves"
      }
    ],
    "learningPoints": [
      {
        "id": "Produsen mesin Eropa sering mengutip CFR -- termasuk biaya pengiriman, pembeli mengasuransikan",
        "en": "European machinery makers often quote CFR -- freight included, buyer insures"
      },
      {
        "id": "Barang modal (mesin) dapat memenuhi syarat pengurangan bea masuk untuk mendorong industri",
        "en": "Capital goods (machinery) may qualify for reduced import duty to encourage industry"
      },
      {
        "id": "Jika pembeli memiliki asuransi tahunan, menambahkan asuransi CIF adalah biaya yang mubazir",
        "en": "When the buyer has annual insurance, adding CIF insurance is redundant cost"
      }
    ]
  },
  {
    "id": "exp-10",
    "difficulty": "advanced",
    "type": "export",
    "title": {
      "id": "Elektronik dari FTZ Batam ke Singapura",
      "en": "Electronics from Batam FTZ to Singapore"
    },
    "description": {
      "id": "Perakit elektronik di Zona Perdagangan Bebas Batam mengirimkan modul PCB ke Singapura (20 mil laut jauhnya). FTZ Batam secara hukum berada \"di luar\" wilayah pabean Indonesia -- prosedur standar ekspor (PEB) tidak berlaku. Barang keluar lewat otoritas FTZ (BP Batam), bukan standar bea cukai.",
      "en": "An electronics assembler in Batam Free Trade Zone ships PCB modules to Singapore (20 nautical miles away). Batam FTZ is legally \"outside\" Indonesian customs territory -- standard export procedures (PEB) do not apply. Goods exit via the FTZ authority (BP Batam), not standard customs."
    },
    "commodity": {
      "id": "Modul PCB dan rangkaian kabel dirakit",
      "en": "Assembled PCB modules and cable harnesses"
    },
    "hsCode": "8534",
    "origin": {
      "port": "Batu Ampar",
      "country": "Indonesia (FTZ)"
    },
    "destination": {
      "port": "Pasir Panjang",
      "country": "Singapore"
    },
    "containerType": "20GP",
    "quantity": 1,
    "cargoValue": 185000,
    "currency": "USD",
    "correctAnswer": "FCA",
    "acceptableAnswers": [
      "FCA"
    ],
    "explanation": {
      "id": "FCA Batam benar karena FTZ Batam mempunyai rezim kepabeanan yang berbeda. FOB menyiratkan clearance ekspor formal (PEB), yang tidak berlaku di FTZ. FCA sesuai karena penjual mengirimkan ke carrier di tempat yang ditentukan (pabrik atau terminal FTZ). Transportasi lintas selat yang singkat (~1 jam) berarti pembeli mengatur pengiriman tongkang/feri sederhana. EXW salah karena pembeli Singapura tidak bisa dengan mudah mengatur penjemputan dari dalam FTZ Indonesia.",
      "en": "FCA Batam is correct because Batam FTZ has a different customs regime. FOB implies formal export clearance (PEB), which doesn't apply in FTZ. FCA is appropriate because the seller delivers to the carrier at a named place (factory or FTZ terminal). The short cross-strait transport (~1 hour) means the buyer arranges the simple barge/ferry shipment. EXW is wrong because the Singapore buyer cannot easily arrange pickup from inside an Indonesian FTZ."
    },
    "hints": [
      {
        "id": "Batam secara hukum berada \"di luar\" Indonesia untuk keperluan bea cukai",
        "en": "Batam is legally \"outside\" Indonesia for customs purposes"
      },
      {
        "id": "Izin standar ekspor (PEB) tidak berlaku di FTZ",
        "en": "Standard export clearance (PEB) does not apply in FTZ"
      },
      {
        "id": "FOB menyiratkan prosedur ekspor formal -- apakah berlaku di sini?",
        "en": "FOB implies formal export procedures -- do they apply here?"
      }
    ],
    "learningPoints": [
      {
        "id": "Zona Perdagangan Bebas mengubah rezim kepabeanan -- asumsi standar Incoterm mungkin tidak berlaku",
        "en": "Free Trade Zones change the customs regime -- standard Incoterm assumptions may not apply"
      },
      {
        "id": "FCA berfungsi untuk FTZ karena tidak menyiratkan clearance ekspor standar",
        "en": "FCA works for FTZ because it does not imply standard export clearance"
      },
      {
        "id": "Barang yang berpindah dari FTZ Batam ke daratan Indonesia diperlakukan sebagai IMPOR",
        "en": "Goods moving from Batam FTZ to Indonesian mainland are treated as IMPORTS"
      }
    ]
  },
  {
    "id": "exp-11",
    "difficulty": "advanced",
    "type": "export",
    "title": {
      "id": "Udang Beku ke Tokyo (Reefer)",
      "en": "Frozen Shrimp to Tokyo (Reefer)"
    },
    "description": {
      "id": "Seorang eksportir makanan laut Makassar mengirimkan udang vannamei beku berukuran 1x20' reefer (-18C) ke Tokyo. Pembeli Jepang ingin mengasuransikan sendiri kargo tersebut dengan polis marine cargo Jepang yang komprehensif yang mencakup kerusakan reefer. Namun eksportir memesan slot reefer karena hanya sedikit carrier yang melayani rute Makassar-Tokyo.",
      "en": "A Makassar seafood exporter ships 1x20' reefer (-18C) of frozen vannamei shrimp to Tokyo. The Japanese buyer wants to insure the cargo themselves with a comprehensive Japanese marine policy covering reefer breakdown. But the exporter books the reefer slot because few carriers serve the Makassar-Tokyo route."
    },
    "commodity": {
      "id": "Udang vannamei beku (tanpa kepala, berkulit)",
      "en": "Frozen vannamei shrimp (headless, shell-on)"
    },
    "hsCode": "0306",
    "origin": {
      "port": "Soekarno-Hatta Port",
      "country": "Indonesia"
    },
    "destination": {
      "port": "Oi Container Terminal",
      "country": "Japan"
    },
    "containerType": "20GP",
    "quantity": 1,
    "cargoValue": 95000,
    "currency": "USD",
    "correctAnswer": "CFR",
    "acceptableAnswers": [
      "CFR"
    ],
    "explanation": {
      "id": "CFR Tokyo benar. Penjual mengatur pengiriman karena slot reefer dari Makassar langka -- eksportir mempunyai hubungan dengan carrier. Namun pembeli Jepang mengasuransikan secara terpisah dengan cakupan komprehensif termasuk kerusakan reefer dan pembusukan (standar CIF hanya mensyaratkan ICC-C minimum yang TIDAK TERMASUK kerusakan reefer). Jebakan utama: di bawah CFR, penjual MEMBAYAR ongkos angkut tetapi RISIKO ditransfer di pelabuhan muat. Jika udang tiba dalam keadaan dicairkan, itu risiko pembeli.",
      "en": "CFR Tokyo is correct. The seller arranges freight because reefer slots from Makassar are scarce -- the exporter has carrier relationships. But the Japanese buyer insures separately with comprehensive coverage including reefer breakdown and spoilage (standard CIF only requires minimum ICC-C which EXCLUDES reefer breakdown). Key trap: under CFR, seller PAYS freight but RISK transfers at loading port. If shrimp arrives thawed, it's the buyer's risk."
    },
    "hints": [
      {
        "id": "Pembeli menginginkan asuransi mereka sendiri yang mencakup kerusakan reefer",
        "en": "The buyer wants their own insurance that covers reefer breakdown"
      },
      {
        "id": "Slot container reefer dari Makassar langka",
        "en": "Reefer container slots from Makassar are scarce"
      },
      {
        "id": "Asuransi CIF standar (ICC-C) TIDAK mencakup kerusakan reefer",
        "en": "Standard CIF insurance (ICC-C) does NOT cover reefer breakdown"
      }
    ],
    "learningPoints": [
      {
        "id": "CFR = penjual membayar ongkos angkut, tetapi risiko ditransfer di pelabuhan asal pemuatan",
        "en": "CFR = seller pays freight, but risk transfers at origin port loading"
      },
      {
        "id": "Kargo reefer memerlukan asuransi khusus di luar cakupan minimum CIF",
        "en": "Reefer cargo needs specialized insurance beyond minimum CIF coverage"
      },
      {
        "id": "Ketika slot reefer langka, pihak yang mempunyai hubungan dengan carrier memesan angkutan barang",
        "en": "When reefer slots are scarce, the party with carrier relationships books freight"
      }
    ]
  },
  {
    "id": "exp-12",
    "difficulty": "advanced",
    "type": "export",
    "title": {
      "id": "Feronikel ke Tianjin (Jumlah besar)",
      "en": "Ferronickel to Tianjin (Bulk)"
    },
    "description": {
      "id": "Sebuah pabrik peleburan di Halmahera mengekspor 1.000 MT batangan feronikel (USD 2,4 juta) ke Tiongkok melalui kapal curah. Produsen baja tahan karat Tiongkok menyewa kapal mereka sendiri untuk rute ini -- 90% nikel Indonesia dikirim ke Tiongkok. Penting: ekspor bijih nikel mentah telah DILARANG sejak tahun 2020; hanya produk olahan seperti feronikel yang legal.",
      "en": "A smelter in Halmahera exports 1,000 MT of ferronickel ingots (USD 2.4M) to China via breakbulk carrier. Chinese stainless steel manufacturers charter their own vessels for this route -- 90% of Indonesian nickel goes to China. Important: raw nickel ore export has been BANNED since 2020; only processed products like ferronickel are legal."
    },
    "commodity": {
      "id": "Ingot Feronikel (FeNi).",
      "en": "Ferronickel (FeNi) ingots"
    },
    "hsCode": "7202",
    "origin": {
      "port": "Tanjung Priok (transloaded)",
      "country": "Indonesia"
    },
    "destination": {
      "port": "Tianjin",
      "country": "China"
    },
    "containerType": "Breakbulk",
    "quantity": 1000,
    "cargoValue": 2400000,
    "currency": "USD",
    "correctAnswer": "FOB",
    "acceptableAnswers": [
      "FOB"
    ],
    "explanation": {
      "id": "FOB Pelabuhan Indonesia sudah benar. Pembeli Tiongkok menyewa kapal curah mereka sendiri -- mereka telah mendedikasikan pengaturan pengiriman untuk arus perdagangan besar-besaran ini. Penggunaan CIF tidak ada gunanya karena pembeli sudah memiliki kapal. EXW sama sekali tidak praktis karena pabrik peleburannya berada di pulau terpencil. Pengetahuan utama: bijih nikel mentah (HS 2604) DILARANG ekspor sejak tahun 2020. Hanya produk olahan (feronikel HS 7202.60) yang legal.",
      "en": "FOB Indonesian Port is correct. Chinese buyers charter their own bulk vessels -- they have dedicated shipping arrangements for this massive trade flow. Using CIF would be pointless since the buyer already has vessels. EXW is completely impractical -- the smelter is on a remote island. Key knowledge: raw nickel ore (HS 2604) is BANNED for export since 2020. Only processed products (ferronickel HS 7202.60) are legal."
    },
    "hints": [
      {
        "id": "Tiongkok mengirimkan kapalnya sendiri untuk mengambil 90% produksi nikel Indonesia",
        "en": "China sends its own ships to pick up 90% of Indonesia's nickel output"
      },
      {
        "id": "Pabrik peleburan tersebut berada di pulau terpencil -- membutuhkan tongkang untuk mencapai pelabuhan utama",
        "en": "The smelter is on a remote island -- needs barges to reach the main port"
      },
      {
        "id": "Bijih mentah tidak boleh keluar dari Indonesia -- ini harus merupakan produk olahan",
        "en": "Raw ore cannot leave Indonesia -- this must be processed product"
      }
    ],
    "learningPoints": [
      {
        "id": "Ketika pembeli menyewa kapal, FOB adalah pilihan yang wajar",
        "en": "When buyers charter vessels, FOB is the natural choice"
      },
      {
        "id": "Indonesia melarang ekspor bijih nikel mentah pada tahun 2020 – hanya produk olahan yang diperbolehkan",
        "en": "Indonesia banned raw nickel ore exports in 2020 -- only processed products allowed"
      },
      {
        "id": "Logistik transshipment (tongkang ke pelabuhan) adalah biaya penjual berdasarkan FOB",
        "en": "Transshipment logistics (barge to port) are the seller's cost under FOB"
      }
    ]
  },
  {
    "id": "imp-08",
    "difficulty": "advanced",
    "type": "import",
    "title": {
      "id": "Mesin CNC dari Shanghai (Heavy Lift)",
      "en": "CNC Machinery from Shanghai (Heavy Lift)"
    },
    "description": {
      "id": "Sebuah pabrik UKM di Jakarta mengimpor satu mesin penggilingan CNC (12 ton, tinggi 3,2 m, USD 320,000) dari Shanghai. Pabrikan Tiongkok ini telah mengirimkan 200+ alat berat ke seluruh dunia dengan freight forwarder heavy-lift khusus. Pembeli Indonesia belum pernah mengimpor apa pun sebelumnya. Mesin tidak muat dalam kontainer standar.",
      "en": "A Jakarta SME factory imports a single CNC milling machine (12 tons, 3.2m tall, USD 320,000) from Shanghai. The Chinese manufacturer has shipped 200+ machines worldwide with specialized heavy-lift forwarders. The Indonesian buyer has never imported anything before. The machine does not fit in a standard container."
    },
    "commodity": {
      "id": "Mesin penggilingan CNC (unit tunggal)",
      "en": "CNC milling machine (single unit)"
    },
    "hsCode": "8459",
    "origin": {
      "port": "Yangshan",
      "country": "China"
    },
    "destination": {
      "port": "Tanjung Priok",
      "country": "Indonesia"
    },
    "containerType": "40OT",
    "quantity": 1,
    "cargoValue": 320000,
    "currency": "USD",
    "correctAnswer": "DAP",
    "acceptableAnswers": [
      "DAP"
    ],
    "explanation": {
      "id": "DAP Jakarta (pabrik pembeli) benar. Pabrikan asal Tiongkok itu sudah berpengalaman mengirimkan alat berat secara global. DAP berarti penjual mengirim ke pabrik -- menangani clearance ekspor, ocean freight berat, dan pengiriman darat dengan peralatan khusus (derek, trailer beralas rendah). Pembeli Indonesia menangani bea cukai impor (memerlukan lisensi API). DDP SALAH karena penjual China tidak dapat mengajukan Pemberitahuan Impor Indonesia (PIB).",
      "en": "DAP Jakarta (buyer's factory) is correct. The Chinese manufacturer has experience shipping heavy equipment globally. DAP means the seller delivers to the factory -- handling export clearance, heavy-lift ocean freight, and inland delivery with specialized equipment (crane, low-bed trailer). The Indonesian buyer handles import customs (requires API license). DDP is WRONG because the Chinese seller cannot file Indonesian import declarations (PIB)."
    },
    "hints": [
      {
        "id": "Pabrikan Tiongkok telah mengirimkan 200 mesin ke seluruh dunia",
        "en": "The Chinese manufacturer has shipped 200 machines worldwide"
      },
      {
        "id": "Pembeli Indonesia belum pernah mengimpor apa pun sebelumnya",
        "en": "The Indonesian buyer has never imported anything before"
      },
      {
        "id": "Alat berat seberat 12 ton memerlukan derek dan trailer dengan tempat tidur rendah untuk pengiriman dari pelabuhan ke pabrik",
        "en": "A 12-ton machine needs a crane and low-bed trailer for port-to-factory delivery"
      }
    ],
    "learningPoints": [
      {
        "id": "Untuk alat berat/khusus, penjual berpengalaman harus menangani logistik (DAP)",
        "en": "For heavy/specialized equipment, experienced sellers should handle logistics (DAP)"
      },
      {
        "id": "DDP tidak pernah tepat untuk impor dari Indonesia -- penjual asing tidak dapat melewati bea cukai",
        "en": "DDP is never correct for Indonesian imports -- foreign sellers cannot clear customs"
      },
      {
        "id": "Kontainer Open Top atau Flat Rack diperlukan untuk kargo berukuran besar/berat",
        "en": "Open Top or Flat Rack containers are required for oversized/heavy cargo"
      }
    ]
  },
  {
    "id": "imp-09",
    "difficulty": "advanced",
    "type": "import",
    "title": {
      "id": "Bahan Kimia Industri (Barang Berbahaya)",
      "en": "Industrial Chemicals (Dangerous Goods)"
    },
    "description": {
      "id": "Sebuah pabrik kimia Indonesia mengimpor 20 MT soda kaustik (larutan NaOH 50%) dari Rotterdam dalam tangki ISO 20'. Ini adalah IMO Kelas 8 (korosif) -- tidak semua perusahaan pelayaran menerimanya. Pabrikan Eropa (BASF/Nouryon) memiliki infrastruktur logistik bersertifikat DG dan armada tangki ISO khusus. Pembeli Indonesia membutuhkan izin impor B3 (bahan berbahaya).",
      "en": "An Indonesian chemical factory imports 20 MT of caustic soda (50% NaOH solution) from Rotterdam in a 20' ISO tank. This is IMO Class 8 (corrosive) -- not every shipping line accepts it. The European manufacturer (BASF/Nouryon) has DG-certified logistics infrastructure and specialized ISO tank fleets. The Indonesian buyer needs B3 (hazardous material) import permits."
    },
    "commodity": {
      "id": "Larutan natrium hidroksida (soda kaustik)",
      "en": "Sodium hydroxide solution (caustic soda)"
    },
    "hsCode": "2815",
    "origin": {
      "port": "Europoort",
      "country": "Netherlands"
    },
    "destination": {
      "port": "Tanjung Priok",
      "country": "Indonesia"
    },
    "containerType": "ISO Tank",
    "quantity": 1,
    "cargoValue": 15000,
    "currency": "USD",
    "correctAnswer": "CIF",
    "acceptableAnswers": [
      "CIF"
    ],
    "explanation": {
      "id": "CIF Jakarta benar. Produsen bahan kimia Eropa memiliki logistik khusus DG: gudang bersertifikat, armada tangki ISO, dan kontrak dengan carrier yang menerima DG. Pembeli Indonesia tidak dapat mengatur pengiriman DG dari Eropa -- tidak semua perusahaan pelayaran menerima IMO Kelas 8 di semua rute. DAP menggiurkan namun salah: Ditjen Bea Cukai memerlukan izin B3 Indonesia dari Kementerian Lingkungan Hidup (KLHK). Hanya importir lokal yang dapat memperolehnya.",
      "en": "CIF Jakarta is correct. European chemical manufacturers have specialized DG logistics: certified warehouses, ISO tank fleets, and contracts with DG-accepting carriers. The Indonesian buyer cannot arrange DG freight from Europe -- not all shipping lines accept IMO Class 8 on all routes. DAP is tempting but wrong: DG customs clearance requires Indonesian B3 permits from the Ministry of Environment (KLHK). Only the local importer can obtain these."
    },
    "hints": [
      {
        "id": "Ini adalah bahan kimia korosif (IMO Kelas 8) -- tidak semua kapal dapat membawanya",
        "en": "This is a corrosive chemical (IMO Class 8) -- not every ship will carry it"
      },
      {
        "id": "Pabrik Eropa memiliki armada tangki ISO dan kontrak pengiriman DG sendiri",
        "en": "The European factory has its own ISO tank fleet and DG shipping contracts"
      },
      {
        "id": "Impor Ditjen Indonesia memerlukan izin B3 dari Kementerian Lingkungan Hidup",
        "en": "Indonesian DG imports require B3 permits from the Ministry of Environment"
      }
    ],
    "learningPoints": [
      {
        "id": "Logistik barang berbahaya memerlukan infrastruktur khusus -- penjual biasanya menangani pengiriman",
        "en": "Dangerous goods logistics requires specialized infrastructure -- seller usually handles freight"
      },
      {
        "id": "Izin impor B3 (bahan berbahaya) merupakan barang LARTAS yang memerlukan persetujuan KLHK",
        "en": "B3 (hazardous material) import permits are LARTAS items requiring KLHK approval"
      },
      {
        "id": "Kontainer tangki ISO adalah peralatan yang disewakan -- memperjelas logistik pengembalian dan demurrage",
        "en": "ISO tank containers are leased equipment -- clarify return logistics and demurrage"
      }
    ]
  },
  {
    "id": "imp-10",
    "difficulty": "advanced",
    "type": "import",
    "title": {
      "id": "CKD otomotif dari Nagoya",
      "en": "Automotive CKD from Nagoya"
    },
    "description": {
      "id": "Toyota Jepang mengirimkan kit CKD (Completely Knocked Down) ke Toyota Indonesia untuk perakitan lokal -- 12x40HC per lot (USD 1,8 juta). Perusahaan induk mengelola seluruh logistik melalui Toyota Tsusho. Bea Cukai Indonesia menghitung bea atas nilai CIF. Ini adalah perdagangan intra-perusahaan sehingga pengawasan terhadap harga transfer sangat tinggi.",
      "en": "Toyota Japan ships CKD (Completely Knocked Down) kits to Toyota Indonesia for local assembly -- 12x40HC per lot (USD 1.8M). The parent company manages all logistics through Toyota Tsusho. Indonesian customs calculates duty on CIF value. This is intra-company trade so transfer pricing scrutiny is high."
    },
    "commodity": {
      "id": "Komponen CKD otomotif (sedan)",
      "en": "Automotive CKD components (sedan)"
    },
    "hsCode": "8703",
    "origin": {
      "port": "Nagoya",
      "country": "Japan"
    },
    "destination": {
      "port": "Tanjung Priok",
      "country": "Indonesia"
    },
    "containerType": "40HC",
    "quantity": 12,
    "cargoValue": 1800000,
    "currency": "USD",
    "correctAnswer": "CIF",
    "acceptableAnswers": [
      "CIF",
      "CIP"
    ],
    "explanation": {
      "id": "CIF Jakarta adalah standar untuk impor CKD otomotif. Perusahaan induk Jepang menangani freight dan asuransi melalui anak perusahaan logistiknya. CIF menciptakan dokumentasi yang bersih: Bea Cukai Indonesia menghitung bea berdasarkan nilai CIF, sehingga mencocokkan faktur komersial dengan deklarasi bea cukai akan mengurangi risiko audit. DDP salah karena anak perusahaan Indonesia harus menjadi importir tercatat (lisensi API-P). Impor CKD menggunakan Klasifikasi Pra Masuk (PKB) khusus dari bea cukai.",
      "en": "CIF Jakarta is standard for automotive CKD imports. The Japanese parent handles freight and insurance through their logistics subsidiary. CIF creates clean documentation: Indonesian customs calculates duty on CIF value, so matching the commercial invoice to the customs declaration reduces audit risk. DDP is wrong because the Indonesian subsidiary must be the importer of record (API-P license). CKD imports use special Pre-Entry Classification (PKB) from customs."
    },
    "hints": [
      {
        "id": "Perusahaan induk mengendalikan semua logistik secara global",
        "en": "The parent company controls all logistics globally"
      },
      {
        "id": "Bea Cukai Indonesia menghitung bea berdasarkan nilai CIF",
        "en": "Indonesian customs calculates duty based on CIF value"
      },
      {
        "id": "Ini adalah perusahaan yang sama di kedua belah pihak -- penentuan harga transfer itu penting",
        "en": "This is the same corporation on both sides -- transfer pricing matters"
      }
    ],
    "learningPoints": [
      {
        "id": "Perdagangan intra-perusahaan menggunakan CIF untuk menyelaraskan dengan metode penilaian bea cukai",
        "en": "Intra-company trade uses CIF to align with customs valuation methods"
      },
      {
        "id": "Impor CKD memiliki rezim kepabeanan khusus (Klasifikasi Pra Masuk/PKB)",
        "en": "CKD imports have special customs regimes (Pre-Entry Classification / PKB)"
      },
      {
        "id": "Fasilitas masterlist dari BKPM memungkinkan pengurangan bea masuk komponen CKD",
        "en": "Masterlist facility from BKPM allows reduced duty on CKD components"
      }
    ]
  },
  {
    "id": "imp-11",
    "difficulty": "advanced",
    "type": "import",
    "title": {
      "id": "API Farmasi dari Mumbai (LARTAS)",
      "en": "Pharmaceutical APIs from Mumbai (LARTAS)"
    },
    "description": {
      "id": "Sebuah produsen farmasi Indonesia mengimpor 15 MT bubuk parasetamol API dari pemasok India. Hal ini diatur oleh LARTAS: memerlukan rekomendasi impor BPOM, izin impor API dari Kementerian Kesehatan, Sertifikat Produk Farmasi, dan verifikasi GMP. Penjual India menangani logistik pada rute India-india yang sudah mapan.",
      "en": "An Indonesian pharma manufacturer imports 15 MT of paracetamol API powder from an Indian supplier. This is LARTAS-regulated: requires BPOM import recommendation, API import license from Ministry of Health, Certificate of Pharmaceutical Product, and GMP verification. The Indian seller handles logistics on the well-established India-Indonesia route."
    },
    "commodity": {
      "id": "Bubuk API Parasetamol (Acetaminophen).",
      "en": "Paracetamol (Acetaminophen) API powder"
    },
    "hsCode": "2924",
    "origin": {
      "port": "Nhava Sheva (JNPT)",
      "country": "India"
    },
    "destination": {
      "port": "Tanjung Priok",
      "country": "Indonesia"
    },
    "containerType": "20GP",
    "quantity": 1,
    "cargoValue": 52000,
    "currency": "USD",
    "correctAnswer": "CIF",
    "acceptableAnswers": [
      "CIF"
    ],
    "explanation": {
      "id": "CIF Jakarta benar. Produsen API India mendominasi pasokan global dan telah menetapkan kontrak freight. Pembeli Indonesia berfokus pada kepatuhan terhadap peraturan -- registrasi BPOM, verifikasi GMP, Sertifikat Analisis tingkat batch. DAP memang menggiurkan, namun salah: izin LARTAS di bea cukai memerlukan izin impor obat-obatan yang hanya dimiliki oleh importir Indonesia. Izin LARTAS dapat memakan waktu 2-3 minggu, jadi rencanakan biaya penyimpanan di pelabuhan.",
      "en": "CIF Jakarta is correct. Indian API manufacturers dominate global supply and have established freight contracts. The Indonesian buyer focuses on regulatory compliance -- BPOM registration, GMP verification, batch-level Certificate of Analysis. DAP is tempting but wrong: LARTAS clearance at customs requires pharmaceutical import licenses that only the Indonesian importer holds. LARTAS clearance can take 2-3 weeks, so plan for port storage costs."
    },
    "hints": [
      {
        "id": "India mendominasi pasokan API farmasi global dengan logistik yang mapan",
        "en": "India dominates global pharmaceutical API supply with established logistics"
      },
      {
        "id": "Pembeli harus mengurus BPOM, GMP, dan izin impor -- itu keahlian mereka",
        "en": "The buyer has to manage BPOM, GMP, and import license -- that's their expertise"
      },
      {
        "id": "Izin LARTAS bisa memakan waktu 2-3 minggu di pelabuhan",
        "en": "LARTAS clearance can take 2-3 weeks at the port"
      }
    ],
    "learningPoints": [
      {
        "id": "Item LARTAS tidak mengubah Incoterm -- namun menambah waktu izin selama berminggu-minggu",
        "en": "LARTAS items do not change the Incoterm -- but they add weeks of clearance time"
      },
      {
        "id": "Impor farmasi memerlukan rekomendasi BPOM + izin Kementerian Kesehatan",
        "en": "Pharmaceutical imports require BPOM recommendation + Ministry of Health license"
      },
      {
        "id": "Sertifikasi halal semakin dibutuhkan untuk bahan farmasi di Indonesia",
        "en": "Halal certification is increasingly required for pharmaceutical ingredients in Indonesia"
      }
    ]
  },
  {
    "id": "imp-12",
    "difficulty": "advanced",
    "type": "import",
    "title": {
      "id": "Semikonduktor ke FTZ Batam",
      "en": "Semiconductors to Batam FTZ"
    },
    "description": {
      "id": "Seorang perakit elektronik Batam mengimpor chip IC dan kapasitor senilai USD 520,000 dari Taiwan (Kaohsiung) untuk perakitan PCB. Batam adalah Zona Perdagangan Bebas - barang masuk TANPA membayar bea masuk atau PPN Indonesia. Produk rakitan tersebut akan diekspor kembali ke Singapura. Pemasok Taiwan sering mengirim ke Batam.",
      "en": "A Batam electronics assembler imports USD 520,000 of IC chips and capacitors from Taiwan (Kaohsiung) for PCB assembly. Batam is a Free Trade Zone -- goods enter WITHOUT paying Indonesian import duties or VAT. The assembled products will be re-exported to Singapore. The Taiwanese supplier ships to Batam frequently."
    },
    "commodity": {
      "id": "Chip IC, resistor, kapasitor",
      "en": "IC chips, resistors, capacitors"
    },
    "hsCode": "8542",
    "origin": {
      "port": "Kaohsiung",
      "country": "Taiwan"
    },
    "destination": {
      "port": "Batu Ampar",
      "country": "Indonesia (FTZ)"
    },
    "containerType": "20GP",
    "quantity": 1,
    "cargoValue": 520000,
    "currency": "USD",
    "correctAnswer": "CIF",
    "acceptableAnswers": [
      "CIF",
      "CIP"
    ],
    "explanation": {
      "id": "CIF Batam benar. Pemasok Taiwan menangani freight dan asuransi di jalur perdagangan yang sudah mapan ini. Jebakan utamanya: DDP TIDAK BERARTI di Zona Perdagangan Bebas karena tidak ada “kewajiban” yang harus dibayar. Barang FTZ Batam masuk bebas bea dan bebas PPN untuk diproses dan diekspor kembali. Izin standar bea cukai Indonesia (DJBC) tidak berlaku -- Batam menggunakan otoritas BP Batam. Jika produk jadi dijual ke daratan Indonesia (misalnya Jakarta), ITU memicu bea masuk.",
      "en": "CIF Batam is correct. The Taiwanese supplier handles freight and insurance on this established trade lane. The key trap: DDP is MEANINGLESS in a Free Trade Zone because there is no \"duty\" to pay. Batam FTZ goods enter duty-free and VAT-free for processing and re-export. Standard Indonesian customs (DJBC) clearance does not apply -- Batam uses BP Batam authority. If finished products are sold to Indonesian mainland (e.g., Jakarta), THAT triggers import duties."
    },
    "hints": [
      {
        "id": "FTZ Batam = tidak ada bea masuk dan tidak ada PPN atas barang yang akan diolah",
        "en": "Batam FTZ = no import duty and no VAT on goods for processing"
      },
      {
        "id": "DDP berarti membayar bea -- tetapi bagaimana jika tidak ada?",
        "en": "DDP implies paying duties -- but what if there are none?"
      },
      {
        "id": "Barang-barang tersebut akan dirakit dan diekspor kembali, bukan dijual di dalam negeri",
        "en": "These goods will be assembled and re-exported, not sold domestically"
      }
    ],
    "learningPoints": [
      {
        "id": "DDP tidak ada artinya di FTZ -- tidak ada bea yang harus dibayar",
        "en": "DDP is meaningless in an FTZ -- there are no duties to pay"
      },
      {
        "id": "Barang FTZ harus diekspor kembali atau digunakan dalam produksi untuk diekspor kembali",
        "en": "FTZ goods must be re-exported or used in manufacturing for re-export"
      },
      {
        "id": "Pengiriman dari FTZ ke daratan Indonesia dikenakan bea masuk seolah-olah dari luar negeri",
        "en": "Shipping from FTZ to Indonesian mainland triggers import duties as if from abroad"
      }
    ]
  }
]

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export const getScenariosByDifficulty = (difficulty) =>
  SCENARIOS.filter(s => s.difficulty === difficulty)

export const getScenariosByType = (type) =>
  SCENARIOS.filter(s => s.type === type)

export const getRandomScenario = (excludeIds = []) => {
  const available = SCENARIOS.filter(s => !excludeIds.includes(s.id))
  if (available.length === 0) return null
  return available[Math.floor(Math.random() * available.length)]
}
