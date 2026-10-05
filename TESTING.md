# Dokumentasi Testing — Katalog Produk Responsif

Tugas ini mewajibkan bukti tampilan halaman di **3 breakpoint berbeda**
(mobile, tablet, desktop). Screenshot harus kamu ambil sendiri dari
browser karena tampilannya perlu dicek langsung — panduannya ada di
bawah.

## Breakpoint yang diuji

| Breakpoint | Lebar layar | Grid produk | Navbar |
|---|---|---|---|
| Mobile     | 375px  | 1 kolom | Hamburger (menu tertutup) |
| Tablet     | 768px  | 2 kolom | Hamburger (di bawah lg/992px) |
| Desktop    | 1280px | 3–4 kolom | Menu terbuka penuh |

## Cara mengambil screenshot (Google Chrome)

1. Buka `index.html` di Chrome.
2. Tekan `F12` atau klik kanan → **Inspect** untuk membuka DevTools.
3. Klik ikon **Toggle device toolbar** (ikon HP/tablet) atau tekan
   `Ctrl+Shift+M` (Windows) / `Cmd+Shift+M` (Mac).
4. Di bagian atas, klik dropdown ukuran layar → pilih **Responsive**,
   lalu ketik lebar sesuai tabel di atas (375, 768, 1280).
5. Screenshot halaman penuh: klik menu titik tiga (⋮) di device
   toolbar → **Capture full size screenshot**. Atau screenshot manual
   dengan `Windows + Shift + S` / `Cmd + Shift + 4`.
6. Simpan file dengan nama yang jelas, misalnya:
   - `screenshot-mobile-375px.png`
   - `screenshot-tablet-768px.png`
   - `screenshot-desktop-1280px.png`
7. Taruh ketiga file itu di folder `screenshots/` pada repo-mu, lalu
   sertakan di README atau laporan tugas.

## Yang perlu dicek di setiap breakpoint

- [ ] Grid produk berubah jumlah kolom sesuai tabel di atas.
- [ ] Navbar menampilkan hamburger di mobile & tablet, menu penuh di
      desktop.
- [ ] Gambar produk tetap proporsional, tidak gepeng/terpotong aneh.
- [ ] Ukuran judul/harga (yang pakai `clamp()`) terlihat proporsional
      di semua lebar layar, tidak kekecilan atau kebesaran.
- [ ] Footer tetap rapi dan tidak ada elemen yang tumpang tindih.

## Cara push ke GitHub

```bash
git init
git add .
git commit -m "Tugas Rutin 3: Katalog Produk Responsif"
git branch -M main
git remote add origin https://github.com/username/nama-repo.git
git push -u origin main
```

Ganti `username/nama-repo` dengan repository GitHub kamu sendiri.
