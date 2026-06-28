# Mobile Landscape + Virtual Joystick Update

Perubahan utama:

1. Mobile akan mencoba masuk fullscreen dan mengunci orientasi ke landscape setelah pengguna menekan **Jelajahi Museum** atau **Tur Terpandu**.
2. Jika browser menolak orientation lock, overlay **Putar Ponsel** akan muncul sebagai fallback.
3. D-Pad diganti menjadi virtual analog joystick.
4. Tombol **Lihat** tetap di kanan bawah untuk membuka pameran yang berada di tengah crosshair.
5. UI mobile landscape diperkecil: logo, tombol Tutup Eksplorasi, indikator ruang, panel pameran, dan modal detail dibuat lebih ringkas.

Catatan: browser mobile hanya mengizinkan penguncian orientasi setelah gesture pengguna, dan beberapa browser tetap membutuhkan fullscreen. Karena itu kode menggunakan pendekatan best-effort plus fallback overlay.
