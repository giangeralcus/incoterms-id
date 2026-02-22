# Belajar Ekspor Impor

Simulator interaktif untuk belajar Incoterms 2020 & ekspor-impor Indonesia. Belajar sambil bermain lewat skenario pengiriman nyata.

> Read in English: [README.md](README.md)

## Fitur

- **Pelajari Incoterms 2020** - 11 aturan lengkap dengan panduan visual, kewajiban penjual/pembeli, titik transfer risiko/biaya, dan contoh perdagangan Indonesia
- **Main Skenario** - Pilih Incoterm yang tepat untuk 26 skenario pengiriman nyata dari/ke Indonesia (pemula, menengah, lanjutan)
- **Simulator Biaya** - Bandingkan biaya penjual vs pembeli + Kalkulator Pajak Impor Indonesia (BM, PPh22, PPN, PPnBM)
- **Progres Saya** - Pantau penguasaan per Incoterm, akurasi, streak, dan skor
- **Dwibahasa** - Tersedia dalam Bahasa Indonesia dan English, bisa diganti kapan saja lewat tombol di header

## Tech Stack

| Komponen | Teknologi |
|----------|-----------|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v4 |
| State | Zustand (disimpan di localStorage) |
| Animasi | Framer Motion |
| Ikon | Lucide React |
| i18n | Zustand + objek terjemahan (tanpa library tambahan) |
| Deploy | Vercel |

## Cara Mulai

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser. Klik tombol **EN/ID** di header untuk ganti bahasa.

## Konteks

Bagian dari ekosistem pembelajaran Gian untuk bisnis freight forwarding GPIndo. Ditujukan untuk siapa saja yang ingin memahami Incoterms 2020, proses ekspor-impor, dan perhitungan pajak impor Indonesia.
