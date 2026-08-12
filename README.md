# Website Azmi Adi Parira

Landing page pribadi bertema **glassmorphism**, lengkap dengan tombol *Lihat CV* dan *Lihat Portofolio*, foto formal, serta animasi (aurora bergerak, partikel mengambang, efek tilt pada foto, dan scroll-reveal).

## Struktur folder

```
azmi-website/
├── index.html          -> halaman utama
├── css/
│   └── style.css        -> semua styling & animasi
├── js/
│   └── script.js         -> interaksi & animasi (particles, reveal, tilt)
├── assets/
│   ├── foto-formal.jpg   -> GANTI dengan foto formal aslimu (format JPG, rasio 1:1)
│   ├── favicon.svg       -> ikon tab browser (vektor)
│   └── favicon.png       -> ikon tab browser (fallback)
└── README.md
```

## Cara mengganti foto

1. Siapkan foto formal kamu, **format JPG**, **rasio 1:1** (misalnya 800x800 px atau 1000x1000 px).
2. Beri nama file tersebut **`foto-formal.jpg`**.
3. Ganti (timpa) file `assets/foto-formal.jpg` yang sekarang (masih berupa placeholder) dengan foto barumu.
4. Simpan — refresh browser, foto langsung berubah. Tidak perlu edit HTML/CSS.

## Cara mengganti link CV / Portofolio

Buka `index.html`, cari dua tempat berikut (masing-masing muncul 2x — di hero dan di footer) lalu ganti URL-nya:

```html
<a class="btn btn-primary" href="LINK_CV_KAMU" ...>Lihat CV</a>
<a class="btn btn-secondary" href="LINK_PORTOFOLIO_KAMU" ...>Lihat Portofolio</a>
```

Saat ini sudah terisi otomatis dengan:
- CV: link Google Drive kamu
- Portofolio: link Canva kamu

## Cara membuka website

Cukup buka file `index.html` dengan double-click di browser (Chrome/Edge/Firefox).

Untuk hasil terbaik (supaya semua file termuat sempurna), disarankan membuka lewat local server, misalnya:

```bash
# masuk ke folder website
cd azmi-website

# jalankan server sederhana (butuh Python)
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000` di browser.

## Cara mengunggah online (opsional)

Kamu bisa upload folder ini ke layanan gratis seperti **Netlify**, **Vercel**, atau **GitHub Pages** agar website bisa diakses lewat internet — cukup drag & drop seluruh folder `azmi-website`.
