# MediBook — Aplikasi Booking Klinik Online

Aplikasi web untuk booking konsultasi dokter secara online: cari dokter berdasarkan spesialisasi, lihat jadwal praktik, pilih tanggal & jam yang tersedia, isi data pasien, dan kelola riwayat booking.

**Live demo:** https://medibook-ing.netlify.app/

## Fitur

- Pencarian & filter dokter (spesialisasi, rating, ketersediaan, favorit)
- Kalender booking yang mengikuti jadwal praktik masing-masing dokter
- Slot jam otomatis dihasilkan dari jam praktik dokter yang dipilih
- Ubah jadwal, batalkan booking, dan beri ulasan setelah konsultasi selesai
- Notifikasi pengingat booking mendatang
- Data booking & favorit tersimpan otomatis di browser

## Struktur File

```
medibook/
├── index.html   # Struktur halaman
├── style.css    # Seluruh styling
├── script.js    # Logika aplikasi (state, kalender, booking flow, dst.)
└── README.md
```

## Tech Stack

- HTML5, CSS3 (custom properties / design tokens, tanpa framework)
- JavaScript murni (vanilla, tanpa library)
- Font: Fraunces, Plus Jakarta Sans, DM Mono (Google Fonts)

## Menjalankan secara lokal

Karena tidak ada proses build, cukup buka `index.html` langsung di browser, atau jalankan local server sederhana:

```bash
python3 -m http.server 8000
```

lalu buka `http://localhost:8000`.

## Catatan Desain

Palet warna dan tipografi mengikuti [Design System](https://designsystem-ku.netlify.app/) pribadi agar konsisten dengan project lain di portfolio.
