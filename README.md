# Minahasa Digital Museum

Minahasa Digital Museum adalah museum virtual berbasis web yang menampilkan 29 pameran tentang sejarah, budaya, dan ingatan kolektif Minahasa. Proyek ini menggunakan Three.js, WebGL, JavaScript, HTML, CSS, audio, cahaya, navigasi ruang 3D, dan panel pameran interaktif.

Museum ini dirancang sebagai pengalaman edukatif dua bahasa: Indonesia dan Inggris. Beberapa istilah lokal/Minahasa seperti `tou`, `wanua`, `Kawanua`, `watu`, `walak`, `tonaas`, `waruga`, `Mapalus`, `Kabasaran`, `waraney`, dan `Si Tou Timou Tumou Tou` digunakan sebagai jembatan budaya. Untuk publikasi resmi, teks dan istilah lokal sebaiknya ditinjau kembali bersama penutur, peneliti, dan budayawan Minahasa.

## Fitur utama

- Galeri 3D yang dapat dijelajahi langsung dari browser.
- 29 pameran dengan alur cerita dari asal-usul Minahasa menuju era modern.
- Panel detail pameran dengan gambar, teks kuratorial, konteks, makna, dan petunjuk interaksi.
- Tur terpandu otomatis berdasarkan urutan cerita.
- Mode eksplorasi bebas dengan kontrol desktop dan kontrol ponsel.
- Kontrol mobile baru: D-Pad untuk bergerak, geser layar untuk melihat sekitar, dan tombol `Lihat` untuk membuka pameran.
- Dukungan GitHub Pages tanpa proses build.

## Struktur penting

```text
index.html
src/
  css/style.css
  data/artworks.json
  js/main.js
  js/modules/
  assets/images/minahasa/
  assets/audio/
docs/
scripts/
```

## Menjalankan secara lokal

Jangan membuka `index.html` dengan double-click. Jalankan server lokal dari folder proyek:

```bash
python3 -m http.server 8000
```

Di Windows, gunakan:

```bash
python -m http.server 8000
```

Lalu buka:

```text
http://localhost:8000
```

## Validasi data pameran

Setiap kali mengubah `src/data/artworks.json`, jalankan:

```bash
node scripts/validate-artworks.js
```

Untuk cek dasar struktur proyek:

```bash
node scripts/smoke-test.js
```

## Publikasi GitHub Pages

Pastikan file berikut berada di root repository:

```text
.nojekyll
index.html
src/
docs/
README.md
```

Di GitHub, buka:

```text
Settings → Pages → Deploy from a branch → main → /root → Save
```

Situs akan tersedia di alamat seperti:

```text
https://USERNAME.github.io/minahasa-virtual-museum/
```

## Catatan atribusi gambar

Gambar dalam folder `src/assets/images/minahasa/` berasal dari paket gambar yang perlu dilengkapi atribusi. Simpan dan tampilkan informasi atribusi dari dokumen manifest/attribution ketika museum dipublikasikan secara resmi.

## Kredit

- Konsep adaptasi: Minahasa Digital Museum
- Dasar teknis: proyek virtual museum Three.js/WebGL
- Teknologi: Three.js, WebGL, JavaScript, HTML, CSS
- Tujuan: edukasi, budaya, sejarah, dan dokumentasi digital
