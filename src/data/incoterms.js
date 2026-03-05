/**
 * Incoterms 2020 - Complete Reference Data
 * Source: ICC Incoterms 2020 rules
 * Enriched with Indonesian trade context
 */

export const INCOTERM_GROUPS = {
  "E": {
    "name": {
      "id": "Departure",
      "en": "Departure"
    },
    "description": {
      "id": "Penjual menyediakan barang di lokasi penjual.",
      "en": "Seller makes goods available at their premises"
    }
  },
  "F": {
    "name": {
      "id": "Main Carriage Unpaid",
      "en": "Main Carriage Unpaid"
    },
    "description": {
      "id": "Penjual menyerahkan barang ke carrier yang ditunjuk pembeli.",
      "en": "Seller delivers to carrier nominated by buyer"
    }
  },
  "C": {
    "name": {
      "id": "Main Carriage Paid",
      "en": "Main Carriage Paid"
    },
    "description": {
      "id": "Penjual mengatur dan membayar freight utama.",
      "en": "Seller contracts and pays for main carriage"
    }
  },
  "D": {
    "name": {
      "id": "Arrival",
      "en": "Arrival"
    },
    "description": {
      "id": "Penjual menanggung biaya dan risiko sampai tujuan.",
      "en": "Seller bears all costs and risks to destination"
    }
  }
}

export const TRANSPORT_MODES = {
  "ANY": {
    "id": "Semua moda transportasi",
    "en": "Any mode of transport"
  },
  "SEA": {
    "id": "Khusus laut dan perairan pedalaman",
    "en": "Sea and inland waterway only"
  }
}

export const INCOTERMS = [
  {
    "code": "EXW",
    "name": {
      "id": "Ex Works",
      "en": "Ex Works"
    },
    "group": "E",
    "transport": "ANY",
    "riskTransfer": {
      "id": "Di tempat penjual ketika barang diserahkan kepada pembeli",
      "en": "At seller's premises when goods are placed at buyer's disposal"
    },
    "costTransfer": {
      "id": "Di tempat penjual",
      "en": "At seller's premises"
    },
    "insurance": {
      "id": "Tidak ada yang diperlukan",
      "en": "None required"
    },
    "sellerObligations": [
      {
        "id": "Menyediakan barang di tempat yang disebutkan (pabrik, gudang, dll.)",
        "en": "Make goods available at named premises (factory, warehouse, etc.)"
      },
      {
        "id": "Menyediakan faktur komersial dan dokumentasi pengepakan",
        "en": "Provide commercial invoice and packing documentation"
      },
      {
        "id": "Membantu formalitas ekspor atas permintaan dan biaya pembeli",
        "en": "Assist with export formalities at buyer's request and cost"
      },
      {
        "id": "Mengemas barang agar layak untuk transportasi",
        "en": "Package goods suitable for transport"
      },
      {
        "id": "Memberikan informasi kepada pembeli untuk mengatur asuransi (jika diminta)",
        "en": "Provide information for buyer to arrange insurance (if requested)"
      },
      {
        "id": "Beritahu pembeli bila barang siap diambil",
        "en": "Notify buyer when goods are ready for collection"
      }
    ],
    "buyerObligations": [
      {
        "id": "Ambil barang dari tempat penjual pada tanggal/waktu yang disepakati",
        "en": "Collect goods from seller's premises at agreed date/time"
      },
      {
        "id": "Mengatur dan membayar SEMUA transportasi dari lokasi ke tujuan",
        "en": "Arrange and pay for ALL transport from premises to destination"
      },
      {
        "id": "Menangani bea cukai EKSPOR (PEB) di negara penjual",
        "en": "Handle EXPORT customs clearance (PEB) in seller's country"
      },
      {
        "id": "Menangani bea cukai IMPOR (PIB) di negara sendiri",
        "en": "Handle IMPORT customs clearance (PIB) in own country"
      },
      {
        "id": "Menanggung semua risiko sejak barang tersedia",
        "en": "Bear all risks from the moment goods are at disposal"
      },
      {
        "id": "Atur dan bayar asuransi jika diinginkan",
        "en": "Arrange and pay for insurance if desired"
      }
    ],
    "bestFor": {
      "id": "Penjualan domestik atau ketika pembeli memiliki agen lokal di negara penjual yang dapat menangani clearance ekspor",
      "en": "Domestic sales or when buyer has a local agent in seller's country who can handle export clearance"
    },
    "commonMistake": {
      "id": "Pembeli asing berasumsi bahwa mereka dapat dengan mudah menangani clearance ekspor di Indonesia - namun pengajuan PEB memerlukan NIK (Nomor Pabean) dan pengetahuan lokal tentang sistem CEISA",
      "en": "Foreign buyers assume they can easily handle export clearance in Indonesia - but PEB submission requires NIK (Customs ID) and local knowledge of CEISA system"
    },
    "difficulty": "beginner",
    "emoji": "🏭",
    "indonesianExample": {
      "id": "PT Furniture Jaya Jepara menjual jati ke pembeli asal Australia. Agen pembeli di Indonesia mengambil dari bengkel, mengatur pengiriman dengan truk ke Semarang/Tanjung Emas, dan menangani penyerahan PEB melalui CEISA.",
      "en": "PT Furniture Jaya Jepara sells teak to an Australian buyer. Buyer's Indonesian agent collects from workshop, arranges trucking to Semarang/Tanjung Emas, and handles PEB submission through CEISA."
    },
    "keyTrap": {
      "id": "Pembeli harus menangani EKSPOR dari negara penjual - tidak praktis untuk sebagian besar perdagangan internasional. ICC merekomendasikan FCA sebagai gantinya.",
      "en": "Buyer must handle EXPORT from seller's country - impractical for most international trade. ICC recommends FCA instead."
    },
    "riskTransferPoint": {
      "id": "Ketika barang ditempatkan sesuai keinginan pembeli di tempat yang disebutkan (TIDAK dimuat ke kendaraan apa pun)",
      "en": "When goods are placed at buyer's disposal at the named place (NOT loaded onto any vehicle)"
    },
    "costTransferPoint": {
      "id": "Di tempat penjual - pembeli membayar semuanya mulai dari pengambilan dan seterusnya",
      "en": "At seller's premises - buyer pays everything from collection onward"
    },
    "confusedWith": [
      "FCA"
    ],
    "confusionReason": {
      "id": "Keduanya merupakan istilah \"penjemputan\", namun FCA mencakup clearance ekspor oleh penjual yang jauh lebih praktis untuk penjualan internasional",
      "en": "Both are \"pickup\" terms, but FCA includes export clearance by seller which is far more practical for international sales"
    },
    "changes2020": {
      "id": "Tidak ada perubahan besar. ICC terus merekomendasikan FCA dibandingkan EXW untuk perdagangan internasional.",
      "en": "No major changes. ICC continues to recommend FCA over EXW for international trade."
    },
    "transportRestriction": {
      "id": "Cara apa pun - namun jarang praktis untuk perdagangan internasional karena pembeli harus menangani ekspor dari negara penjual",
      "en": "Any mode - but rarely practical for international trade since buyer must handle export from seller's country"
    },
    "insuranceDetail": {
      "id": "Tidak ada kewajiban asuransi bagi salah satu pihak. Pembeli menanggung semua risiko pengambilan dan harus mengatur cakupannya sendiri.",
      "en": "No insurance obligation for either party. Buyer bears all risk from pickup and should arrange own coverage."
    }
  },
  {
    "code": "FCA",
    "name": {
      "id": "Free Carrier",
      "en": "Free Carrier"
    },
    "group": "F",
    "transport": "ANY",
    "riskTransfer": {
      "id": "Ketika barang diserahkan kepada carrier di tempat yang disebutkan",
      "en": "When goods are handed to the carrier at the named place"
    },
    "costTransfer": {
      "id": "Di tempat pengiriman yang disebutkan (tempat penjual atau tempat lain yang disepakati)",
      "en": "At named place of delivery (seller's premises or other agreed point)"
    },
    "insurance": {
      "id": "Tidak ada yang diperlukan",
      "en": "None required"
    },
    "sellerObligations": [
      {
        "id": "Mengirimkan barang ke carrier di tempat yang disepakati (CY, gudang, atau lokasi)",
        "en": "Deliver goods to carrier at named place (CY, warehouse, or premises)"
      },
      {
        "id": "Mengurus clearance EKSPOR (PEB, NPE di Indonesia)",
        "en": "Clear goods for EXPORT (PEB, NPE in Indonesia)"
      },
      {
        "id": "Memberikan dokumen transportasi yang membuktikan pengiriman ke carrier",
        "en": "Provide transport document proving delivery to carrier"
      },
      {
        "id": "Menanggung biaya dan risiko hingga pengiriman ke carrier",
        "en": "Bear costs and risks up to delivery to carrier"
      },
      {
        "id": "Membantu pembeli mendapatkan B/L on-board jika diminta (opsi baru tahun 2020)",
        "en": "Assist buyer in obtaining on-board B/L if requested (2020 new option)"
      },
      {
        "id": "Memberikan informasi bagi pembeli untuk mengatur freight dan asuransi",
        "en": "Provide information for buyer to arrange carriage and insurance"
      }
    ],
    "buyerObligations": [
      {
        "id": "Nominasikan carrier dan beri tahu penjual tentang rincian carrier dan tanggal pengiriman",
        "en": "Nominate carrier and notify seller of carrier details and delivery date"
      },
      {
        "id": "Mengatur dan membayar angkutan utama dari tempat yang disebutkan",
        "en": "Arrange and pay for main carriage from named place"
      },
      {
        "id": "Menangani pengurusan bea cukai impor (PIB) di negara tujuan",
        "en": "Handle import customs clearance (PIB) in destination country"
      },
      {
        "id": "Menanggung semua risiko setelah barang dikirim ke carrier",
        "en": "Bear all risks after goods delivered to carrier"
      },
      {
        "id": "Dapat menginstruksikan carrier untuk menerbitkan B/L on-board kepada penjual (untuk transaksi L/C)",
        "en": "Can instruct carrier to issue on-board B/L to seller (for L/C transactions)"
      }
    ],
    "bestFor": {
      "id": "Istilah F paling serbaguna. Penggantian FOB yang direkomendasikan ICC dengan kargo dalam peti kemas. Berfungsi untuk moda transportasi apa pun.",
      "en": "Most versatile F-term. ICC-recommended replacement for FOB with containerized cargo. Works for any transport mode."
    },
    "commonMistake": {
      "id": "Menggunakan FOB untuk pengiriman kontainer ketika FCA lebih sesuai - dengan FOB, transfer risiko di atas kapal, namun kontainer diserahkan di CY jauh sebelum pemuatan",
      "en": "Using FOB for container shipments when FCA is more appropriate - with FOB, risk transfers on board vessel, but containers are handed over at CY well before loading"
    },
    "difficulty": "beginner",
    "emoji": "📦",
    "indonesianExample": {
      "id": "PT Spice Indo Surabaya menjual rempah-rempah melalui Tanjung Perak. Penjual mengirimkan peti kemas yang diisi ke terminal CY, menyelesaikan ekspor melalui CEISA, dan pengalihan risiko ketika carrier menerima peti kemas tersebut.",
      "en": "PT Spice Indo Surabaya sells spices via Tanjung Perak. Seller delivers stuffed container to the terminal CY, clears export through CEISA, and risk transfers when carrier receives the container."
    },
    "keyTrap": {
      "id": "Lokasi pengalihan risiko berbeda-beda, bergantung pada DIMANA pengiriman dilakukan: di tempat penjual = dimuat di kendaraan pembeli; di tempat lain = di angkutan penjual, dibongkar.",
      "en": "Risk transfer location differs depending on WHERE delivery happens: at seller's premises = loaded on buyer's vehicle; elsewhere = on seller's transport, unloaded."
    },
    "riskTransferPoint": {
      "id": "Di tempat penjual: ketika dimuat ke kendaraan pengumpul pembeli. Di tempat lain (CY, terminal): ketika berada di kendaraan penjual, siap dibongkar oleh pembeli.",
      "en": "At seller's premises: when loaded onto buyer's collecting vehicle. At other place (CY, terminal): when on seller's vehicle, at buyer's disposal for unloading."
    },
    "costTransferPoint": {
      "id": "Di tempat pengiriman yang disebutkan - penjual membayar transportasi lokal ke titik tersebut ditambah clearance ekspor",
      "en": "At the named place of delivery - seller pays local transport to that point plus export clearance"
    },
    "confusedWith": [
      "FOB"
    ],
    "confusionReason": {
      "id": "Keduanya adalah istilah \"F\" di mana pembeli mengatur freight utama, namun FOB hanya berlaku di laut dan pengalihan risiko dilakukan di atas kapal, sedangkan FCA dapat digunakan untuk moda apa pun",
      "en": "Both are \"F\" terms where buyer arranges main carriage, but FOB is sea-only and risk transfers on board vessel, while FCA works for any mode"
    },
    "changes2020": {
      "id": "BARU: Pembeli dapat menginstruksikan carrier untuk menerbitkan B/L on-board kepada penjual. Memecahkan masalah Letter of Credit di mana bank memerlukan B/L on-board namun pengiriman FCA dilakukan sebelum pemuatan.",
      "en": "NEW: Buyer can instruct carrier to issue on-board B/L to seller. Solves the Letter of Credit problem where banks require on-board B/L but FCA delivery happens before loading."
    },
    "transportRestriction": {
      "id": "Moda transportasi apa pun termasuk multimoda. Lebih disukai daripada FOB untuk kargo dalam peti kemas.",
      "en": "Any mode of transport including multimodal. Preferred over FOB for containerized cargo."
    },
    "insuranceDetail": {
      "id": "Tidak ada kewajiban asuransi. Pembeli harus mengatur asuransi kargo sejak titik pengiriman dan seterusnya karena mereka menanggung risiko.",
      "en": "No insurance obligation. Buyer should arrange cargo insurance from point of delivery onward since they bear risk."
    }
  },
  {
    "code": "FAS",
    "name": {
      "id": "Free Alongside Ship",
      "en": "Free Alongside Ship"
    },
    "group": "F",
    "transport": "SEA",
    "riskTransfer": {
      "id": "Ketika barang ditempatkan di samping kapal di pelabuhan pengapalan yang disebutkan",
      "en": "When goods are placed alongside the vessel at named port of shipment"
    },
    "costTransfer": {
      "id": "Di samping kapal di pelabuhan pengapalan",
      "en": "Alongside the vessel at port of shipment"
    },
    "insurance": {
      "id": "Tidak ada yang diperlukan",
      "en": "None required"
    },
    "sellerObligations": [
      {
        "id": "Mengirimkan barang di samping kapal di pelabuhan yang disebutkan (di dermaga atau tongkang)",
        "en": "Deliver goods alongside the vessel at the named port (on quay or barge)"
      },
      {
        "id": "Mengurus clearance EKSPOR (PEB/NPE di Indonesia)",
        "en": "Clear goods for EXPORT (PEB/NPE in Indonesia)"
      },
      {
        "id": "Berikan bukti pengiriman di samping kapal",
        "en": "Provide proof of delivery alongside vessel"
      },
      {
        "id": "Menanggung semua biaya dan risiko di samping kapal",
        "en": "Bear all costs and risks to the point alongside vessel"
      },
      {
        "id": "Memberikan informasi kepada pembeli untuk mengatur asuransi",
        "en": "Provide information for buyer to arrange insurance"
      }
    ],
    "buyerObligations": [
      {
        "id": "Nominasikan kapal dan beri tahu penjual nama kapal, titik pemuatan, dan tanggal pengiriman",
        "en": "Nominate vessel and notify seller of vessel name, loading point, and delivery date"
      },
      {
        "id": "Bayar untuk memuat KE kapal dan semua biaya selanjutnya",
        "en": "Pay for loading ONTO the vessel and all subsequent costs"
      },
      {
        "id": "Menangani bea cukai impor di negara tujuan",
        "en": "Handle import customs clearance in destination country"
      },
      {
        "id": "Menanggung semua risiko begitu barang berada di samping kapal",
        "en": "Bear all risks once goods are alongside the vessel"
      },
      {
        "id": "Atur dan bayar asuransi jika diinginkan",
        "en": "Arrange and pay for insurance if desired"
      }
    ],
    "bestFor": {
      "id": "Kargo breakbulk, kargo curah, kargo proyek yang dimuat dengan derek kapal - BUKAN untuk barang dalam peti kemas",
      "en": "Breakbulk cargo, bulk cargo, project cargo loaded by ship's crane - NOT for containerized goods"
    },
    "commonMistake": {
      "id": "Menggunakan FAS untuk kargo dalam peti kemas - peti kemas dikirim ke CY, bukan di samping kapal. FAS adalah untuk kargo yang ditempatkan secara fisik di dermaga sebelah kapal.",
      "en": "Using FAS for containerized cargo - containers go to the CY, not alongside the ship. FAS is for cargo physically placed on the quay next to the vessel."
    },
    "difficulty": "intermediate",
    "emoji": "⚓",
    "indonesianExample": {
      "id": "PT Kayu Nusantara mengekspor kayu bulat dari pelabuhan Banjarmasin. Kayu gelondongan ditempatkan di dermaga di samping kapal curah, dan derek kapal pembeli memuatnya ke kapal.",
      "en": "PT Kayu Nusantara exports timber logs from Banjarmasin port. Logs are placed on the quay alongside the bulk carrier, and the buyer's vessel crane loads them on board."
    },
    "keyTrap": {
      "id": "Kata \"di samping\" berarti secara fisik berada di samping kapal di dermaga - bukan di halaman peti kemas atau gerbang terminal.",
      "en": "The word \"alongside\" means physically next to the vessel on the wharf - not at a container yard or terminal gate."
    },
    "riskTransferPoint": {
      "id": "Ketika barang secara fisik ditempatkan di samping kapal yang disebutkan namanya di tempat berlabuh yang disepakati di pelabuhan pengapalan",
      "en": "When goods are physically placed alongside the named vessel at the agreed berth in the port of shipment"
    },
    "costTransferPoint": {
      "id": "Di samping kapal - pembeli membayar pemuatan ke kapal ditambah semua biaya selanjutnya",
      "en": "Alongside the vessel - buyer pays loading onto vessel plus all subsequent costs"
    },
    "confusedWith": [
      "FOB"
    ],
    "confusionReason": {
      "id": "Keduanya merupakan F-term khusus laut, namun risiko FAS berpindah DI SELURUH kapal (sebelum pemuatan), sementara FOB mentransfer DI ATAS (setelah pemuatan)",
      "en": "Both are sea-only F-terms, but FAS risk transfers ALONGSIDE the ship (before loading), while FOB transfers ON BOARD (after loading)"
    },
    "changes2020": {
      "id": "Tidak ada perubahan besar sejak tahun 2010. Tetap menjadi istilah khusus untuk bulk/breakbulk.",
      "en": "No major changes from 2010. Remains a niche term for bulk/breakbulk."
    },
    "transportRestriction": {
      "id": "HANYA jalur laut dan perairan pedalaman. Jangan sekali-kali digunakan untuk kontainer, udara, atau multimoda.",
      "en": "Sea and inland waterway ONLY. Never use for containers, air, or multimodal."
    },
    "insuranceDetail": {
      "id": "Tidak ada kewajiban asuransi. Pembeli menanggung risiko dari samping kapal dan harus mengatur asuransi kargo laut.",
      "en": "No insurance obligation. Buyer bears risk from alongside vessel and should arrange marine cargo insurance."
    }
  },
  {
    "code": "FOB",
    "name": {
      "id": "Free On Board",
      "en": "Free On Board"
    },
    "group": "F",
    "transport": "SEA",
    "riskTransfer": {
      "id": "Ketika barang berada di atas kapal di pelabuhan pengapalan yang disebutkan",
      "en": "When goods are on board the vessel at named port of shipment"
    },
    "costTransfer": {
      "id": "Di atas kapal di pelabuhan pengapalan",
      "en": "On board the vessel at port of shipment"
    },
    "insurance": {
      "id": "Tidak ada yang diperlukan",
      "en": "None required"
    },
    "sellerObligations": [
      {
        "id": "Memuat barang DI ATAS kapal yang ditunjuk oleh pembeli di pelabuhan yang ditentukan",
        "en": "Load goods ON BOARD the vessel nominated by buyer at named port"
      },
      {
        "id": "Mengurus clearance EKSPOR (PEB, NPE di Indonesia)",
        "en": "Clear goods for EXPORT (PEB, NPE in Indonesia)"
      },
      {
        "id": "Memberikan B/L atau dokumen freight sebagai bukti penyerahan di kapal",
        "en": "Provide B/L or transport document as proof of delivery on board"
      },
      {
        "id": "Membayar semua biaya hingga dan termasuk pemuatan ke kapal",
        "en": "Pay all charges up to and including loading onto vessel"
      },
      {
        "id": "Menanggung segala resiko sampai barang melewati pagar kapal",
        "en": "Bear all risks until goods pass the ship's rail"
      },
      {
        "id": "Beritahu pembeli bahwa barang telah dimuat",
        "en": "Notify buyer that goods have been loaded"
      }
    ],
    "buyerObligations": [
      {
        "id": "Nominasikan kapal dan beri tahu penjual nama kapal dan tanggal pemuatan",
        "en": "Nominate vessel and notify seller of vessel name and loading dates"
      },
      {
        "id": "Bayar ocean freight dan semua biaya mulai dari pemuatan dan seterusnya",
        "en": "Pay ocean freight and all costs from loading onward"
      },
      {
        "id": "Menangani bea cukai impor di tempat tujuan (PIB, PPJK di Indonesia)",
        "en": "Handle import customs clearance at destination (PIB, PPJK in Indonesia)"
      },
      {
        "id": "Mengatur dan membayar asuransi kargo (sangat disarankan)",
        "en": "Arrange and pay for cargo insurance (strongly recommended)"
      },
      {
        "id": "Menanggung semua risiko setelah barang berada di pelabuhan asal",
        "en": "Bear all risks once goods are on board at origin port"
      }
    ],
    "bestFor": {
      "id": "Incoterm terpopuler untuk ekspor curah Indonesia (CPO, batu bara, karet). Standar ocean freight tradisional.",
      "en": "The most popular Incoterm for Indonesian bulk exports (CPO, coal, rubber). Traditional sea freight standard."
    },
    "commonMistake": {
      "id": "Penggunaan FOB untuk pemindahan peti kemas CY-ke-CY - secara teknis salah karena peti kemas diserahkan ke terminal sebelum pemuatan kapal, sehingga menciptakan celah di mana tidak ada seorang pun yang menanggung risiko. Gunakan FCA sebagai gantinya.",
      "en": "Using FOB for CY-to-CY container moves - technically wrong because containers are handed to terminal before vessel loading, creating a gap where no one bears risk. Use FCA instead."
    },
    "difficulty": "beginner",
    "emoji": "🚢",
    "indonesianExample": {
      "id": "PT Kelapa Sawit Dumai mengekspor CPO dalam bentuk kapal tanker curah dari Belawan. Transfer risiko ketika minyak dipompa ke kapal. Pembeli India mengatur kapal dan asuransinya sendiri.",
      "en": "PT Kelapa Sawit Dumai exports CPO in bulk tanker from Belawan. Risk transfers when oil is pumped on board. The Indian buyer arranges their own vessel and insurance."
    },
    "keyTrap": {
      "id": "FOB adalah Incoterm #1 yang disalahgunakan secara global - FOB hanya boleh digunakan untuk barang yang dimuat secara fisik ke kapal, bukan untuk kontainer yang melewati terminal CY.",
      "en": "FOB is the #1 misused Incoterm globally - it should only be used for goods physically loaded onto a vessel, not for containers that go through a terminal CY."
    },
    "riskTransferPoint": {
      "id": "Ketika barang secara fisik berada di atas kapal yang disebutkan di pelabuhan pengapalan yang disebutkan",
      "en": "When goods are physically on board the named vessel at the named port of shipment"
    },
    "costTransferPoint": {
      "id": "Di atas kapal - pembeli membayar ongkos angkut, asuransi, dan semua biaya sejak saat itu",
      "en": "On board the vessel - buyer pays freight, insurance, and all costs from that point"
    },
    "confusedWith": [
      "FCA",
      "CFR"
    ],
    "confusionReason": {
      "id": "FOB vs FCA: keduanya diserahkan ke carrier yang ditunjuk pembeli, namun FOB hanya berlaku di laut. FOB vs CFR: titik risiko yang sama, tetapi penjual CFR juga membayar ongkos angkut.",
      "en": "FOB vs FCA: both hand off to buyer's carrier, but FOB is sea-only. FOB vs CFR: same risk point, but CFR seller also pays freight."
    },
    "changes2020": {
      "id": "Tidak ada perubahan aturan besar. ICC terus menekankan FCA dibandingkan FOB untuk kontainer.",
      "en": "No major rule changes. ICC continues emphasizing FCA over FOB for containers."
    },
    "transportRestriction": {
      "id": "HANYA jalur laut dan perairan pedalaman. Untuk transportasi kontainer, udara, atau multimoda, gunakan FCA sebagai gantinya.",
      "en": "Sea and inland waterway ONLY. For containers, air, or multimodal transport, use FCA instead."
    },
    "insuranceDetail": {
      "id": "Tidak ada kewajiban asuransi bagi salah satu pihak. Pembeli menanggung risiko transit dan harus mengatur asuransi kargo laut dari pelabuhan muat.",
      "en": "No insurance obligation for either party. Buyer bears transit risk and should arrange marine cargo insurance from loading port."
    }
  },
  {
    "code": "CFR",
    "name": {
      "id": "Cost and Freight",
      "en": "Cost and Freight"
    },
    "group": "C",
    "transport": "SEA",
    "riskTransfer": {
      "id": "Saat barang berada di atas kapal di pelabuhan pengiriman (sama seperti FOB!)",
      "en": "When goods are on board the vessel at port of shipment (same as FOB!)"
    },
    "costTransfer": {
      "id": "Penjual membayar biaya pengiriman ke pelabuhan tujuan",
      "en": "Seller pays freight to destination port"
    },
    "insurance": {
      "id": "Tidak ada yang diperlukan (pembeli harus mengaturnya)",
      "en": "None required (buyer should arrange)"
    },
    "sellerObligations": [
      {
        "id": "Muat barang ke kapal dan bayar ocean freight ke pelabuhan tujuan",
        "en": "Load goods on board and pay ocean freight to destination port"
      },
      {
        "id": "Mengurus clearance EKSPOR (PEB/NPE di Indonesia)",
        "en": "Clear goods for EXPORT (PEB/NPE in Indonesia)"
      },
      {
        "id": "Menyediakan dokumen freight (B/L) yang mencakup freight ke tujuan",
        "en": "Provide transport document (B/L) covering carriage to destination"
      },
      {
        "id": "Menanggung biaya pemuatan di pelabuhan asal",
        "en": "Bear loading costs at origin port"
      },
      {
        "id": "Memberikan informasi kepada pembeli untuk mengatur asuransi",
        "en": "Provide information for buyer to arrange insurance"
      },
      {
        "id": "Beritahu pembeli bila barang telah dimuat",
        "en": "Notify buyer when goods have been loaded"
      }
    ],
    "buyerObligations": [
      {
        "id": "Menanggung risiko sejak barang berada di kapal di ORIGIN (kritis!)",
        "en": "Bear risk from the moment goods are on board at ORIGIN (critical!)"
      },
      {
        "id": "Menangani pengurusan bea cukai impor di tempat tujuan (PIB)",
        "en": "Handle import customs clearance at destination (PIB)"
      },
      {
        "id": "Bayar untuk bongkar muat di tempat tujuan (kecuali termasuk dalam ketentuan liner)",
        "en": "Pay for unloading at destination (unless included in liner terms)"
      },
      {
        "id": "Atur dan bayar asuransi kargo - ini BUKAN tugas penjual!",
        "en": "Arrange and pay for cargo insurance - this is NOT seller's duty!"
      },
      {
        "id": "Membayar biaya tambahan apa pun yang tidak termasuk dalam biaya pengiriman",
        "en": "Pay any additional costs not included in freight"
      }
    ],
    "bestFor": {
      "id": "Ketika penjual dapat menegosiasikan tarif pengiriman yang lebih baik daripada pembeli. Umum untuk perdagangan baja dan tekstil di Asia.",
      "en": "When seller can negotiate better freight rates than buyer. Common for Asian steel and textile trades."
    },
    "commonMistake": {
      "id": "Pembeli berasumsi penjual menanggung risiko transit karena penjual membayar ongkos angkut - SALAH! Transfer risiko di pelabuhan muat, transfer biaya di tempat tujuan. Mereka berpisah di titik berbeda!",
      "en": "Buyer assumes seller covers transit risk because seller pays freight - WRONG! Risk transfers at loading port, cost transfers at destination. They split at different points!"
    },
    "difficulty": "intermediate",
    "emoji": "🌊",
    "indonesianExample": {
      "id": "Importir baja Surabaya membeli HRC coil dari China di CFR Tanjung Perak. Pabrik di Tiongkok membayar ongkos angkut, namun risiko berpindah ketika kumparan dimuat di Shanghai. Pembeli Indonesia harus mengatur asuransi sendiri.",
      "en": "A Surabaya steel importer buys HRC coils from China on CFR Tanjung Perak. The Chinese mill pays freight, but risk transfers when coils are loaded in Shanghai. Indonesian buyer must arrange own insurance."
    },
    "keyTrap": {
      "id": "Pembagian risiko dan biaya pada poin BERBEDA! Penjual membayar biaya pengiriman ke tujuan, namun menanggung risiko transfer di pelabuhan asal pemuatan. Pembeli tidak diasuransikan selama transit kecuali mereka membeli polis sendiri.",
      "en": "Risk and cost split at DIFFERENT points! Seller pays freight to destination, but risk transfers at origin port loading. Buyer is uninsured during transit unless they buy their own policy."
    },
    "riskTransferPoint": {
      "id": "Di atas kapal di pelabuhan pengapalan (identik dengan FOB)",
      "en": "On board the vessel at the port of shipment (identical to FOB)"
    },
    "costTransferPoint": {
      "id": "Pelabuhan tujuan - penjual membayar ongkos angkut, pembeli membayar bongkar + impor + pedalaman",
      "en": "Destination port - seller pays freight, buyer pays unloading + import + inland"
    },
    "confusedWith": [
      "CIF",
      "FOB"
    ],
    "confusionReason": {
      "id": "CFR vs CIF: identik kecuali CIF mencakup asuransi minimum. CFR vs FOB: titik risiko yang sama, tetapi penjual CFR membayar ongkos angkut.",
      "en": "CFR vs CIF: identical except CIF includes minimum insurance. CFR vs FOB: same risk point, but CFR seller pays freight."
    },
    "changes2020": {
      "id": "Tidak ada perubahan besar. Konsolidasi biaya di A9/B9 untuk kejelasan.",
      "en": "No major changes. Cost consolidation in A9/B9 for clarity."
    },
    "transportRestriction": {
      "id": "HANYA jalur laut dan perairan pedalaman. Untuk multimodal, gunakan CPT saja.",
      "en": "Sea and inland waterway ONLY. For multimodal, use CPT instead."
    },
    "insuranceDetail": {
      "id": "Tidak ada kewajiban asuransi untuk penjual. Pembeli menanggung risiko transit dari tempat asal dan HARUS mengatur asuransi kargo laut sendiri. Inilah jebakan kuncinya.",
      "en": "No insurance obligation for seller. Buyer bears transit risk from origin and MUST arrange own marine cargo insurance. This is the key trap."
    }
  },
  {
    "code": "CIF",
    "name": {
      "id": "Cost, Insurance and Freight",
      "en": "Cost, Insurance and Freight"
    },
    "group": "C",
    "transport": "SEA",
    "riskTransfer": {
      "id": "Pada saat barang berada di atas kapal di pelabuhan pengapalan",
      "en": "When goods are on board the vessel at port of shipment"
    },
    "costTransfer": {
      "id": "Penjual membayar biaya pengiriman DAN asuransi ke pelabuhan tujuan",
      "en": "Seller pays freight AND insurance to destination port"
    },
    "insurance": {
      "id": "DIPERLUKAN: Klausul Kargo Institut Minimum (C) - cakupan dasar saja",
      "en": "REQUIRED: Minimum Institute Cargo Clauses (C) - basic coverage only"
    },
    "sellerObligations": [
      {
        "id": "Muat barang ke kapal dan bayar ocean freight ke pelabuhan tujuan",
        "en": "Load goods on board and pay ocean freight to destination port"
      },
      {
        "id": "Mengatur dan membayar asuransi MINIMUM (khusus ICC Klausul C)",
        "en": "Arrange and pay for MINIMUM insurance (ICC Clause C only)"
      },
      {
        "id": "Asuransi harus mencakup setidaknya 110% dari nilai CIF",
        "en": "Insurance must cover at least 110% of CIF value"
      },
      {
        "id": "Mengurus clearance EKSPOR (PEB/NPE)",
        "en": "Clear goods for EXPORT (PEB/NPE)"
      },
      {
        "id": "Memberikan sertifikat asuransi B/L + kepada pembeli",
        "en": "Provide B/L + insurance certificate to buyer"
      },
      {
        "id": "Beri tahu pembeli ketika barang dimuat dan berikan rincian asuransi",
        "en": "Notify buyer when goods loaded and provide insurance details"
      }
    ],
    "buyerObligations": [
      {
        "id": "Menanggung risiko sejak barang berada di kapal di pelabuhan ASAL",
        "en": "Bear risk from moment goods are on board at ORIGIN port"
      },
      {
        "id": "Menangani pengurusan bea cukai impor (PIB via PPJK di Indonesia)",
        "en": "Handle import customs clearance (PIB via PPJK in Indonesia)"
      },
      {
        "id": "Bayar bongkar di pelabuhan tujuan",
        "en": "Pay for unloading at destination port"
      },
      {
        "id": "Pertimbangkan untuk membeli asuransi TAMBAHAN di luar ICC(C) minimum",
        "en": "Consider purchasing ADDITIONAL insurance beyond minimum ICC(C)"
      },
      {
        "id": "Membayar bea masuk (BM), PPN, PPh22",
        "en": "Pay import duties (BM), PPN, PPh22"
      }
    ],
    "bestFor": {
      "id": "Umum untuk perdagangan komoditas (kopi, kakao, rempah-rempah). Pembeli mendapat asuransi dasar termasuk. Populer untuk transaksi impor Indonesia.",
      "en": "Common for commodity trades (coffee, cocoa, spices). Buyer gets basic insurance included. Popular for Indonesian import transactions."
    },
    "commonMistake": {
      "id": "Dengan asumsi asuransi CIF mencakup semuanya - ICC Klausul C adalah cakupan MINIMUM (hanya kebakaran, tenggelam, tabrakan). Ini TIDAK mencakup pencurian, pencurian, kerusakan akibat air, atau penanganan yang kasar.",
      "en": "Assuming CIF insurance covers everything - ICC Clause C is MINIMUM coverage (fire, sinking, collision only). It does NOT cover theft, pilferage, water damage, or rough handling."
    },
    "difficulty": "beginner",
    "emoji": "🛡️",
    "indonesianExample": {
      "id": "Eksportir kopi Indonesia menjual CIF Hamburg. Penjual membayar ongkos angkut ditambah asuransi ICC(C) minimum. Pembeli Jerman sebaiknya mempertimbangkan untuk meningkatkan ke ICC(A) untuk cakupan komprehensif mengenai kopi spesial bernilai tinggi.",
      "en": "Indonesian coffee exporter sells CIF Hamburg. Seller pays freight plus minimum ICC(C) insurance. German buyer should consider upgrading to ICC(A) for comprehensive coverage on high-value specialty coffee."
    },
    "keyTrap": {
      "id": "Asuransi CIF hanya pertanggungan MINIMUM (ICC-C: kebakaran, tenggelam, tabrakan, pembuangan). Pembeli sering kali terlambat menyadari bahwa pencurian, kerusakan akibat air, dan penanganan yang kasar TIDAK ditanggung.",
      "en": "CIF insurance is MINIMUM coverage only (ICC-C: fire, sinking, collision, jettison). Buyers often discover too late that theft, water damage, and rough handling are NOT covered."
    },
    "riskTransferPoint": {
      "id": "Di atas kapal di pelabuhan pengapalan (sama seperti FOB dan CFR)",
      "en": "On board the vessel at the port of shipment (same as FOB and CFR)"
    },
    "costTransferPoint": {
      "id": "Pelabuhan tujuan - penjual membayar ongkos angkut + asuransi minimum, pembeli membayar bongkar + impor + pedalaman",
      "en": "Destination port - seller pays freight + minimum insurance, buyer pays unloading + import + inland"
    },
    "confusedWith": [
      "CIP",
      "CFR"
    ],
    "confusionReason": {
      "id": "CIF vs CIP: CIF hanya beroperasi di laut dengan asuransi dasar ICC(C); CIP adalah mode apa pun dengan ICC(A) semua risiko. CIF vs CFR: yang membedakan hanyalah CIF sudah termasuk asuransi minimum.",
      "en": "CIF vs CIP: CIF is sea-only with basic ICC(C) insurance; CIP is any-mode with all-risk ICC(A). CIF vs CFR: only difference is CIF includes minimum insurance."
    },
    "changes2020": {
      "id": "Asuransi CIF tetap di ICC Klausul C (dasar). Berbeda dengan CIP yang UPGRADE menjadi ICC(A) pada tahun 2020.",
      "en": "CIF insurance stays at ICC Clause C (basic). This is different from CIP which was UPGRADED to ICC(A) in 2020."
    },
    "transportRestriction": {
      "id": "HANYA jalur laut dan perairan pedalaman. Untuk multimoda atau udara, gunakan CIP saja.",
      "en": "Sea and inland waterway ONLY. For multimodal or air, use CIP instead."
    },
    "insuranceDetail": {
      "id": "Penjual HARUS mengatur ICC Klausul C (dasar: kebakaran, ledakan, tenggelam, tabrakan, pembuangan, rata-rata umum). Minimal 110% dari nilai CIF. TIDAK mencakup gempa bumi, petir, pencurian, pencucian ke laut.",
      "en": "Seller MUST arrange ICC Clause C (basic: fire, explosion, sinking, collision, jettison, general average). Minimum 110% of CIF value. Does NOT cover earthquake, lightning, theft, washing overboard."
    }
  },
  {
    "code": "CPT",
    "name": {
      "id": "Carriage Paid To",
      "en": "Carriage Paid To"
    },
    "group": "C",
    "transport": "ANY",
    "riskTransfer": {
      "id": "Saat barang diserahkan ke carrier pertama",
      "en": "When goods are handed to the first carrier"
    },
    "costTransfer": {
      "id": "Penjual membayar freight ke tujuan yang disebutkan",
      "en": "Seller pays carriage to named destination"
    },
    "insurance": {
      "id": "Tidak ada yang diperlukan",
      "en": "None required"
    },
    "sellerObligations": [
      {
        "id": "Mengirimkan barang ke carrier pertama dan membayar freight ke tujuan",
        "en": "Deliver goods to the first carrier and pay carriage to destination"
      },
      {
        "id": "Mengurus clearance EKSPOR",
        "en": "Clear goods for EXPORT"
      },
      {
        "id": "Memberikan dokumen transportasi yang mencakup freight ke tujuan yang disepakati",
        "en": "Provide transport document covering carriage to agreed destination"
      },
      {
        "id": "Menanggung biaya pemuatan dan penanganan di tempat asal",
        "en": "Bear loading and handling costs at origin"
      },
      {
        "id": "Memberikan informasi kepada pembeli untuk mengatur asuransi",
        "en": "Provide information for buyer to arrange insurance"
      }
    ],
    "buyerObligations": [
      {
        "id": "Menanggung risiko dari pengiriman ke carrier pertama (BUKAN dari tujuan!)",
        "en": "Bear risk from delivery to first carrier (NOT from destination!)"
      },
      {
        "id": "Menangani bea cukai impor di tempat tujuan",
        "en": "Handle import customs clearance at destination"
      },
      {
        "id": "Atur dan bayar asuransi jika diinginkan (sangat disarankan)",
        "en": "Arrange and pay for insurance if desired (strongly recommended)"
      },
      {
        "id": "Membayar pembongkaran di tempat tujuan kecuali termasuk dalam kontrak freight",
        "en": "Pay for unloading at destination unless included in carriage contract"
      }
    ],
    "bestFor": {
      "id": "Transportasi multimoda atau angkutan udara dimana penjual membayar biaya freight. CFR versi \"mode apa pun\".",
      "en": "Multimodal transport or air freight where seller pays carriage. The \"any-mode\" version of CFR."
    },
    "commonMistake": {
      "id": "Tidak menyadari risiko dan pengalihan biaya di titik BERBEDA - risiko di maskapai pertama, biaya di tempat tujuan. Perangkap yang sama seperti CFR tetapi untuk multimodal.",
      "en": "Not realizing risk and cost transfer at DIFFERENT points - risk at first carrier, cost at destination. Same trap as CFR but for multimodal."
    },
    "difficulty": "intermediate",
    "emoji": "✈️",
    "indonesianExample": {
      "id": "Eksportir elektronik Jakarta mengirim melalui angkutan udara bandara CPT Munich. Penjual membayar ongkos kirim, namun risiko berpindah saat barang diserahkan ke maskapai penerbangan di Soekarno-Hatta. Pembeli harus mengasuransikan.",
      "en": "Jakarta electronics exporter ships via air freight CPT Munich airport. Seller pays airfreight, but risk transfers when goods are handed to the airline at Soekarno-Hatta. Buyer should insure."
    },
    "keyTrap": {
      "id": "Seperti CFR, risiko dan biaya dibagi pada titik yang berbeda. Risiko berpindah ke pembeli saat diserahkan ke carrier PERTAMA, meskipun penjual membayar seluruh biaya sampai ke tujuan.",
      "en": "Like CFR, risk and cost split at different points. Risk transfers to buyer at the FIRST carrier, even though seller pays all the way to destination."
    },
    "riskTransferPoint": {
      "id": "Saat barang diserahkan ke carrier pertama (atau freight forwarder)",
      "en": "When goods are delivered to the first carrier (or freight forwarder)"
    },
    "costTransferPoint": {
      "id": "Nama tujuan - penjual membayar biaya freight ke titik tersebut",
      "en": "Named destination - seller pays carriage costs to that point"
    },
    "confusedWith": [
      "CFR",
      "CIP"
    ],
    "confusionReason": {
      "id": "CPT vs CFR: konsep yang sama, tetapi CPT berfungsi untuk mode apa pun. CPT vs CIP: identik kecuali CIP menambahkan asuransi wajib semua risiko.",
      "en": "CPT vs CFR: same concept, but CPT works for any mode. CPT vs CIP: identical except CIP adds mandatory all-risk insurance."
    },
    "changes2020": {
      "id": "Konsolidasi biaya di A9/B9 untuk kejelasan. Tidak ada perubahan besar lainnya.",
      "en": "Cost consolidation in A9/B9 for clarity. No other major changes."
    },
    "transportRestriction": {
      "id": "Moda transportasi apa pun termasuk multimoda. Gunakan ini sebagai pengganti CFR bila transportasi tidak murni melalui laut.",
      "en": "Any mode of transport including multimodal. Use this instead of CFR when transport is not purely sea."
    },
    "insuranceDetail": {
      "id": "Tidak ada kewajiban asuransi untuk penjual. Pembeli mempunyai risiko mulai dari carrier pertama dan seterusnya dan harus mempertimbangkan untuk mengatur asuransi kargo.",
      "en": "No insurance obligation for seller. Buyer is at risk from first carrier onward and should strongly consider arranging cargo insurance."
    }
  },
  {
    "code": "CIP",
    "name": {
      "id": "Carriage and Insurance Paid To",
      "en": "Carriage and Insurance Paid To"
    },
    "group": "C",
    "transport": "ANY",
    "riskTransfer": {
      "id": "Saat barang diserahkan ke carrier pertama",
      "en": "When goods are handed to the first carrier"
    },
    "costTransfer": {
      "id": "Penjual membayar freight DAN asuransi ke tujuan yang disebutkan",
      "en": "Seller pays carriage AND insurance to named destination"
    },
    "insurance": {
      "id": "DIPERLUKAN: Institute Cargo Clauses (A) - cakupan SEMUA RISIKO (ditingkatkan pada tahun 2020!)",
      "en": "REQUIRED: Institute Cargo Clauses (A) - ALL RISKS coverage (upgraded in 2020!)"
    },
    "sellerObligations": [
      {
        "id": "Mengirimkan barang ke carrier pertama dan membayar freight ke tujuan",
        "en": "Deliver goods to the first carrier and pay carriage to destination"
      },
      {
        "id": "Mengatur dan membayar asuransi SEMUA RISIKO - ICC Klausul A",
        "en": "Arrange and pay for ALL RISKS insurance - ICC Clause A"
      },
      {
        "id": "Asuransi harus mencakup setidaknya 110% dari nilai CIP",
        "en": "Insurance must cover at least 110% of CIP value"
      },
      {
        "id": "Mengurus clearance EKSPOR",
        "en": "Clear goods for EXPORT"
      },
      {
        "id": "Memberikan dokumen transportasi + sertifikat asuransi",
        "en": "Provide transport document + insurance certificate"
      },
      {
        "id": "Beri tahu pembeli tentang rincian pengiriman dan asuransi",
        "en": "Notify buyer of delivery and insurance details"
      }
    ],
    "buyerObligations": [
      {
        "id": "Menanggung risiko dari pengiriman ke carrier pertama",
        "en": "Bear risk from delivery to first carrier"
      },
      {
        "id": "Menangani bea cukai impor di tempat tujuan",
        "en": "Handle import customs clearance at destination"
      },
      {
        "id": "Membayar pembongkaran di tempat tujuan kecuali termasuk dalam kontrak freight",
        "en": "Pay for unloading at destination unless included in carriage contract"
      }
    ],
    "bestFor": {
      "id": "Transportasi multimoda dengan asuransi komprehensif. Angkutan udara + asuransi. Versi CIF \"mode apa saja, asuransi yang lebih baik\".",
      "en": "Multimodal transport with comprehensive insurance. Air freight + insurance. The \"any-mode, better insurance\" version of CIF."
    },
    "commonMistake": {
      "id": "Membingungkan asuransi CIP (ICC-A, semua risiko) dengan asuransi CIF (ICC-C, dasar). CIP ditingkatkan pada tahun 2020 sehingga memerlukan cakupan yang jauh lebih tinggi.",
      "en": "Confusing CIP insurance (ICC-A, all risks) with CIF insurance (ICC-C, basic). CIP was upgraded in 2020 to require much higher coverage."
    },
    "difficulty": "intermediate",
    "emoji": "🔒",
    "indonesianExample": {
      "id": "Koperasi pengrajin kecil di Bali mengekspor tekstil tenunan tangan CIP Sydney. Menggunakan truk Bali→Surabaya lalu laut→Sydney. CIP menyediakan asuransi semua risiko ICC(A) yang mencakup seluruh perjalanan multimoda.",
      "en": "Small Bali artisan cooperative exports handwoven textiles CIP Sydney. Uses truck Bali→Surabaya then sea→Sydney. CIP provides ICC(A) all-risk insurance covering the entire multimodal journey."
    },
    "keyTrap": {
      "id": "CIP 2020 mensyaratkan ICC Clause A (all-risk) - ini merupakan standar yang LEBIH TINGGI dibandingkan CIF yang hanya mensyaratkan ICC Clause C (dasar). Banyak orang yang belum mengetahui perubahan tahun 2020 ini.",
      "en": "CIP 2020 requires ICC Clause A (all-risks) - this is a HIGHER standard than CIF which only requires ICC Clause C (basic). Many people don't know about this 2020 change."
    },
    "riskTransferPoint": {
      "id": "Saat barang dikirim ke carrier pertama (sama seperti CPT)",
      "en": "When goods are delivered to the first carrier (same as CPT)"
    },
    "costTransferPoint": {
      "id": "Nama tujuan - penjual membayar freight + asuransi semua risiko ke titik tersebut",
      "en": "Named destination - seller pays carriage + all-risk insurance to that point"
    },
    "confusedWith": [
      "CIF"
    ],
    "confusionReason": {
      "id": "Keduanya mencakup asuransi yang dibayar penjual, namun CIF = hanya laut + ICC(C) dasar, sedangkan CIP = mode apa pun + ICC(A) semua risiko. CIP adalah asuransi yang lebih baik.",
      "en": "Both include seller-paid insurance, but CIF = sea-only + basic ICC(C), while CIP = any-mode + all-risk ICC(A). CIP is strictly better insurance."
    },
    "changes2020": {
      "id": "PERUBAHAN UTAMA: Asuransi ditingkatkan dari ICC Clause C menjadi ICC Clause A (all-risk). Ini merupakan perubahan asuransi terbesar di Incoterms 2020.",
      "en": "MAJOR CHANGE: Insurance upgraded from ICC Clause C to ICC Clause A (all-risks). This is the biggest insurance change in Incoterms 2020."
    },
    "transportRestriction": {
      "id": "Moda transportasi apa pun termasuk multimoda. Lebih disukai daripada CIF untuk pengiriman dalam peti kemas, udara, atau multimoda.",
      "en": "Any mode of transport including multimodal. Preferred over CIF for containerized, air, or multimodal shipments."
    },
    "insuranceDetail": {
      "id": "Penjual HARUS mengatur ICC Klausul A (semua risiko: mencakup semuanya KECUALI perang, pemogokan, sifat buruk yang melekat, penundaan). Minimal 110% dari nilai CIP. Ini adalah cakupan yang komprehensif.",
      "en": "Seller MUST arrange ICC Clause A (all-risks: covers everything EXCEPT war, strikes, inherent vice, delay). Minimum 110% of CIP value. This is comprehensive coverage."
    }
  },
  {
    "code": "DAP",
    "name": {
      "id": "Delivered at Place",
      "en": "Delivered at Place"
    },
    "group": "D",
    "transport": "ANY",
    "riskTransfer": {
      "id": "Ketika barang ditempatkan sesuai keinginan pembeli di tempat tujuan yang ditentukan, siap untuk dibongkar",
      "en": "When goods are placed at buyer's disposal at named destination, ready for unloading"
    },
    "costTransfer": {
      "id": "Penjual menanggung semua biaya ke tujuan (tidak termasuk bea masuk/izin)",
      "en": "Seller bears all costs to destination (excluding import duties/clearance)"
    },
    "insurance": {
      "id": "Tidak ada yang diperlukan (tetapi penjual menanggung risiko, jadi sangat disarankan)",
      "en": "None required (but seller bears risk, so strongly advised)"
    },
    "sellerObligations": [
      {
        "id": "Mengirimkan barang ke tujuan yang disebutkan, siap untuk dibongkar dari kendaraan yang tiba",
        "en": "Deliver goods to the named destination, ready for unloading from arriving vehicle"
      },
      {
        "id": "Menanggung SEMUA risiko dan biaya selama seluruh transportasi ke tujuan",
        "en": "Bear ALL risks and costs during entire transport to destination"
      },
      {
        "id": "Mengurus clearance EKSPOR",
        "en": "Clear goods for EXPORT"
      },
      {
        "id": "Mengatur dan membayar semua transportasi (laut, darat, multimoda)",
        "en": "Arrange and pay for all transport (ocean, inland, multimodal)"
      },
      {
        "id": "Atur asuransi (tidak wajib tetapi sangat disarankan karena penjual menanggung risiko)",
        "en": "Arrange insurance (not required but strongly recommended since seller bears risk)"
      },
      {
        "id": "Berikan dokumen yang memungkinkan pembeli untuk menerima pengiriman",
        "en": "Provide documents enabling buyer to take delivery"
      }
    ],
    "buyerObligations": [
      {
        "id": "Bongkar barang dari kendaraan yang tiba di tempat tujuan",
        "en": "Unload goods from arriving vehicle at destination"
      },
      {
        "id": "Menangani pengurusan bea cukai IMPOR (PIB via PPJK di Indonesia)",
        "en": "Handle IMPORT customs clearance (PIB via PPJK in Indonesia)"
      },
      {
        "id": "Membayar bea masuk (BM), PPN (12%), PPh22 (2,5%/7,5%)",
        "en": "Pay import duties (BM), PPN (12%), PPh22 (2.5%/7.5%)"
      },
      {
        "id": "Menanggung risiko hanya pada saat barang sudah siap di tempat tujuan",
        "en": "Bear risk only from the point goods are at disposal at destination"
      }
    ],
    "bestFor": {
      "id": "Pengiriman pintu tempat pembeli menangani izin impor. Sangat umum terjadi pada impor KE Indonesia dimana penjual asing melakukan pengiriman ke pelabuhan/gudang.",
      "en": "Door delivery where buyer handles import clearance. Very common for imports INTO Indonesia where foreign seller delivers to port/warehouse."
    },
    "commonMistake": {
      "id": "Penjual meremehkan penundaan dan biaya di tempat tujuan. Perizinan bea cukai Indonesia dapat memakan waktu 3-7 hari (saluran merah), dan biaya demurrage terakumulasi dengan cepat.",
      "en": "Seller underestimates delays and costs at destination. Indonesian customs clearance can take 3-7 days (red channel), and demurrage charges accumulate fast."
    },
    "difficulty": "intermediate",
    "emoji": "🏠",
    "indonesianExample": {
      "id": "Penjual mesin asal Tiongkok mengantarkan DAP ke pabrik pembeli di Kawasan Industri Cikarang. Pembeli Indonesia menangani semua bea cukai melalui PPJK mereka, membayar BM+PPN+PPh22.",
      "en": "Chinese machinery seller delivers DAP to buyer's factory in Cikarang Industrial Estate. The Indonesian buyer handles all customs clearance through their PPJK, pays BM+PPN+PPh22."
    },
    "keyTrap": {
      "id": "Penjual menanggung risiko sampai ke tujuan tetapi TIDAK menangani izin impor. Jika terjadi keterlambatan bea cukai, pembeli menunda tetapi barang penjual tertahan dan beresiko.",
      "en": "Seller bears risk all the way to destination but does NOT handle import clearance. If customs delays happen, the buyer delays but the seller's goods are stuck and at risk."
    },
    "riskTransferPoint": {
      "id": "Di tempat tujuan yang disebutkan, ketika barang sudah berada di tangan pembeli dengan kendaraan yang tiba, siap untuk dibongkar",
      "en": "At the named place of destination, when goods are at buyer's disposal on the arriving vehicle, ready for unloading"
    },
    "costTransferPoint": {
      "id": "Di tempat tujuan - penjual membayar semua biaya transportasi. Pembeli hanya membayar pembongkaran + izin impor + bea + pengiriman lokal.",
      "en": "At destination - seller pays all transport costs. Buyer pays only unloading + import clearance + duties + local delivery."
    },
    "confusedWith": [
      "DDP",
      "DPU"
    ],
    "confusionReason": {
      "id": "DAP vs DDP: Pembeli DAP menyelesaikan impor, penjual DDP menyelesaikan impor. DAP vs DPU : Barang DAP siap bongkar, penjual DPU juga bongkar.",
      "en": "DAP vs DDP: DAP buyer clears import, DDP seller clears import. DAP vs DPU: DAP goods ready for unloading, DPU seller also unloads."
    },
    "changes2020": {
      "id": "Tidak ada perubahan besar dari tahun 2010.",
      "en": "No major changes from 2010."
    },
    "transportRestriction": {
      "id": "Moda transportasi apa pun. Dapat mengirim ke tempat mana pun yang disebutkan (pelabuhan, terminal, gudang, pabrik).",
      "en": "Any mode of transport. Can deliver to any named place (port, terminal, warehouse, factory)."
    },
    "insuranceDetail": {
      "id": "Tidak ada kewajiban kontrak, tetapi penjual menanggung risiko selama transit. Penjual harus mengatur asuransi kargo yang komprehensif. Pembeli hanya membutuhkan perlindungan mulai dari pembongkaran dan seterusnya.",
      "en": "No contractual obligation, but seller bears risk during entire transit. Seller should arrange comprehensive cargo insurance. Buyer only needs coverage from unloading onward."
    }
  },
  {
    "code": "DPU",
    "name": {
      "id": "Delivered at Place Unloaded",
      "en": "Delivered at Place Unloaded"
    },
    "group": "D",
    "transport": "ANY",
    "riskTransfer": {
      "id": "Ketika barang dibongkar di tempat tujuan yang disebutkan",
      "en": "When goods are unloaded at named destination"
    },
    "costTransfer": {
      "id": "Penjual menanggung semua biaya termasuk bongkar muat di tempat tujuan",
      "en": "Seller bears all costs including unloading at destination"
    },
    "insurance": {
      "id": "Tidak ada yang diperlukan (tetapi penjual menanggung risiko, jadi sangat disarankan)",
      "en": "None required (but seller bears risk, so strongly advised)"
    },
    "sellerObligations": [
      {
        "id": "Mengirim DAN BONGKAR barang di tempat tujuan yang disebutkan",
        "en": "Deliver AND UNLOAD goods at the named destination"
      },
      {
        "id": "Menanggung SEMUA resiko dan biaya termasuk pembongkaran di tempat tujuan",
        "en": "Bear ALL risks and costs including unloading at destination"
      },
      {
        "id": "Mengurus clearance EKSPOR",
        "en": "Clear goods for EXPORT"
      },
      {
        "id": "Atur semua transportasi ke tujuan",
        "en": "Arrange all transport to destination"
      },
      {
        "id": "Pastikan penjual memiliki kemampuan dan peralatan untuk membongkar di tempat tujuan",
        "en": "Ensure seller has capability and equipment to unload at destination"
      },
      {
        "id": "Memberikan dokumen yang memungkinkan pembeli untuk mengambil alih barang yang dibongkar",
        "en": "Provide documents enabling buyer to take over unloaded goods"
      }
    ],
    "buyerObligations": [
      {
        "id": "Menangani pengurusan bea cukai IMPOR (PIB) dan membayar semua bea/pajak",
        "en": "Handle IMPORT customs clearance (PIB) and pay all duties/taxes"
      },
      {
        "id": "Tanggung resiko hanya SETELAH barang dibongkar di tempat tujuan",
        "en": "Bear risk only AFTER goods are unloaded at destination"
      },
      {
        "id": "Bantu penjual dengan izin apa pun yang diperlukan untuk pembongkaran jika perlu",
        "en": "Assist seller with any permits needed for unloading if necessary"
      }
    ],
    "bestFor": {
      "id": "Ketika penjual dapat mengatur pembongkaran di tempat tujuan (memiliki peralatan, agen lokal). Kargo proyek, alat berat.",
      "en": "When seller can arrange unloading at destination (has equipment, local agent). Project cargo, heavy machinery."
    },
    "commonMistake": {
      "id": "Ini adalah SATU-SATUNYA Incoterm dimana penjual harus membongkar barang di tempat tujuan. Pastikan penjual benar-benar memiliki kemampuan bongkar muat di sana.",
      "en": "This is the ONLY Incoterm where seller must unload at destination. Make sure seller actually has unloading capability there."
    },
    "difficulty": "advanced",
    "emoji": "🏗️",
    "indonesianExample": {
      "id": "Eksportir alat berat asal Jerman mengantarkan DPU ke pabrik PT Semen Indonesia di Tuban. Penjual mengatur kru derek dan tali-temali untuk menurunkan peralatan dari truk.",
      "en": "German heavy machinery exporter delivers DPU to PT Semen Indonesia's factory in Tuban. Seller arranges crane and rigging crew to unload the equipment from the truck."
    },
    "keyTrap": {
      "id": "DPU adalah SATU-SATUNYA istilah D yang mewajibkan penjual untuk membongkar. Jika penjual tidak dapat mengatur pembongkaran (crane, forklift, tenaga kerja) di lokasi pembeli, jangan gunakan DPU - gunakan DAP saja.",
      "en": "DPU is the ONLY D-term requiring seller to unload. If the seller cannot arrange unloading (crane, forklift, labor) at the buyer's location, do not use DPU - use DAP instead."
    },
    "riskTransferPoint": {
      "id": "Setelah barang diturunkan dari alat carrier yang tiba di tempat tujuan yang ditentukan",
      "en": "After goods are unloaded from the arriving means of transport at the named destination"
    },
    "costTransferPoint": {
      "id": "Setelah bongkar di tempat tujuan - penjual membayar biaya angkut + bongkar. Pembeli membayar izin impor + bea masuk.",
      "en": "After unloading at destination - seller pays transport + unloading. Buyer pays import clearance + duties."
    },
    "confusedWith": [
      "DAP",
      "DAT (old name)"
    ],
    "confusionReason": {
      "id": "DPU berganti nama dari DAT (Delivered at Terminal) pada tahun 2020. Berbeda dengan DAP, DPU termasuk bongkar muat. Berbeda dengan DAT lama, DPU dapat berada di mana saja - bukan hanya di terminal.",
      "en": "DPU was renamed from DAT (Delivered at Terminal) in 2020. Unlike DAP, DPU includes unloading. Unlike old DAT, DPU can be any place - not just a terminal."
    },
    "changes2020": {
      "id": "DIGANTI NAMAnya dari DAT (Dikirim di Terminal) menjadi DPU (Dikirim di Tempat Bongkar). Tujuan sekarang bisa di mana saja, bukan hanya terminal - pabrik, gudang, lokasi konstruksi, dll.",
      "en": "RENAMED from DAT (Delivered at Terminal) to DPU (Delivered at Place Unloaded). Destination can now be ANY place, not just a terminal - factory, warehouse, construction site, etc."
    },
    "transportRestriction": {
      "id": "Moda transportasi apa pun. Tujuan dapat dimana saja (terminal pelabuhan, gudang, pabrik, lokasi konstruksi).",
      "en": "Any mode of transport. Destination can be any place (port terminal, warehouse, factory, construction site)."
    },
    "insuranceDetail": {
      "id": "Tidak ada kewajiban kontrak, namun penjual menanggung risiko melalui pembongkaran. Asuransi komprehensif sangat disarankan untuk penjual.",
      "en": "No contractual obligation, but seller bears risk through unloading. Comprehensive insurance strongly recommended for seller."
    }
  },
  {
    "code": "DDP",
    "name": {
      "id": "Delivered Duty Paid",
      "en": "Delivered Duty Paid"
    },
    "group": "D",
    "transport": "ANY",
    "riskTransfer": {
      "id": "Ketika barang diserahkan kepada pembeli di tempat tujuan, telah disetujui untuk diimpor",
      "en": "When goods are placed at buyer's disposal at destination, cleared for import"
    },
    "costTransfer": {
      "id": "Penjual menanggung SEMUA biaya termasuk bea masuk, pajak, dan izin",
      "en": "Seller bears ALL costs including import duties, taxes, and clearance"
    },
    "insurance": {
      "id": "Tidak ada yang diperlukan (tetapi penjual menanggung risiko maksimum)",
      "en": "None required (but seller bears maximum risk)"
    },
    "sellerObligations": [
      {
        "id": "Kirim barang sampai tujuan, DIBERSIHKAN UNTUK IMPORT",
        "en": "Deliver goods to destination, CLEARED FOR IMPORT"
      },
      {
        "id": "Menanggung SEMUA risiko dan SEMUA biaya dari pintu ke pintu",
        "en": "Bear ALL risks and ALL costs door-to-door"
      },
      {
        "id": "Menangani clearance ekspor di negara asal (PEB)",
        "en": "Handle EXPORT clearance in origin country (PEB)"
      },
      {
        "id": "Menangani pengurusan IMPOR di negara tujuan (PIB)",
        "en": "Handle IMPORT clearance in destination country (PIB)"
      },
      {
        "id": "Membayar bea masuk (BM), PPN (PPN 12%), pajak penghasilan (PPh22), pajak barang mewah (PPnBM bila berlaku)",
        "en": "Pay import duties (BM), VAT (PPN 12%), income tax (PPh22), luxury tax (PPnBM if applicable)"
      },
      {
        "id": "Mengatur asuransi yang komprehensif (sangat disarankan mengingat risiko maksimal)",
        "en": "Arrange comprehensive insurance (strongly recommended given maximum risk)"
      }
    ],
    "buyerObligations": [
      {
        "id": "Menerima barang di tempat tujuan yang disebutkan",
        "en": "Receive goods at named destination"
      },
      {
        "id": "Bongkar barang dari kendaraan yang datang",
        "en": "Unload goods from arriving vehicle"
      },
      {
        "id": "Kewajiban minimal - kenyamanan maksimal bagi pembeli",
        "en": "Minimal obligations - maximum convenience for buyer"
      }
    ],
    "bestFor": {
      "id": "Kewajiban penjual maksimum (kebalikan dari EXW). E-commerce, perdagangan intra-perusahaan, ketika penjual menginginkan kendali penuh atas rantai logistik.",
      "en": "Maximum seller obligation (opposite of EXW). E-commerce, intra-company trade, when seller wants full control of logistics chain."
    },
    "commonMistake": {
      "id": "Di Indonesia, penjual asing TIDAK BISA langsung menangani izin impor tanpa NIK (ID Pabean) dan izin API. Mereka harus menunjuk PPJK (broker bea cukai) setempat untuk bertindak atas nama mereka.",
      "en": "In Indonesia, foreign sellers CANNOT directly handle import clearance without NIK (Customs ID) and API license. They must appoint a local PPJK (customs broker) to act on their behalf."
    },
    "difficulty": "advanced",
    "emoji": "🎯",
    "indonesianExample": {
      "id": "Perusahaan induk Jepang mengirimkan suku cadang otomotif DDP ke anak perusahaannya di Indonesia di Cikarang. Mereka menggunakan agen PPJK setempat untuk pengurusan bea cukai dan membayar semua bea termasuk PPN dan PPh22.",
      "en": "Japanese parent company ships automotive parts DDP to their Indonesian subsidiary in Cikarang. They use a local PPJK agent for customs clearance and pay all duties including PPN and PPh22."
    },
    "keyTrap": {
      "id": "Penjual harus terdaftar sebagai importir atau memiliki agen lokal di negara pembeli. Di Indonesia, yang dimaksud adalah pendaftaran NIK/API atau penunjukan PPJK yang berizin.",
      "en": "Seller must be registered as importer or have a local agent in buyer's country. In Indonesia, this means NIK/API registration or appointing a licensed PPJK."
    },
    "riskTransferPoint": {
      "id": "Di tempat tujuan yang disebutkan, ketika barang sudah berada di tangan pembeli, telah disetujui untuk diimpor dan siap untuk dibongkar",
      "en": "At the named destination, when goods are at buyer's disposal, cleared for import and ready for unloading"
    },
    "costTransferPoint": {
      "id": "Penjual membayar SEMUANYA: transportasi, asuransi, clearance ekspor, izin impor, bea, pajak. Pembeli hanya membayar bongkar.",
      "en": "Seller pays EVERYTHING: transport, insurance, export clearance, import clearance, duties, taxes. Buyer pays only unloading."
    },
    "confusedWith": [
      "DAP"
    ],
    "confusionReason": {
      "id": "Keduanya mengantarkan ke tujuan, namun pembeli DAP menangani izin dan bea impor, sedangkan penjual DDP menangani semuanya. DDP adalah DAP + izin impor + bea masuk.",
      "en": "Both deliver to destination, but DAP buyer handles import clearance and duties, while DDP seller handles everything. DDP is DAP + import clearance + duties."
    },
    "changes2020": {
      "id": "Transportasi sendiri sekarang secara eksplisit diperbolehkan. Persyaratan transportasi terkait keamanan ditambahkan. Tidak ada perubahan besar lainnya.",
      "en": "Own transport now explicitly allowed. Security-related transport requirements added. No other major changes."
    },
    "transportRestriction": {
      "id": "Moda transportasi apa pun. Penjual harus memiliki kemampuan impor atau perwakilan lokal di negara tujuan.",
      "en": "Any mode of transport. Seller must have import capability or local representation in destination country."
    },
    "insuranceDetail": {
      "id": "Tidak ada kewajiban kontrak, namun penjual menanggung risiko maksimum dari pintu ke pintu. Asuransi semua risiko yang komprehensif sangat disarankan. Penjual harus mempertimbangkan cakupan ICC(A).",
      "en": "No contractual obligation, but seller bears maximum risk door-to-door. Comprehensive all-risk insurance strongly recommended. Seller should consider ICC(A) coverage."
    }
  }
]

export const getIncotermByCode = (code) => INCOTERMS.find(i => i.code === code)
export const getIncotermsByGroup = (group) => INCOTERMS.filter(i => i.group === group)
export const getIncotermsByTransport = (mode) => INCOTERMS.filter(i => i.transport === mode)
