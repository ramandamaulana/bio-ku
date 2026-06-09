# Bio-ku

Website link-in-bio sederhana dengan tampilan minimalis bergaya Apple. Website ini dibuat menggunakan HTML, CSS, dan JavaScript murni sehingga ringan, responsif, serta mudah disesuaikan.

## Fitur

- Desain mobile-first yang responsif
- Tampilan light mode dan dark mode
- Toggle tema dengan ikon matahari dan bulan
- Dark mode digunakan secara default saat pertama dibuka
- Pilihan tema tersimpan di browser menggunakan `localStorage`
- Delapan tombol link yang touch-friendly
- Animasi saat halaman dimuat
- Efek hover, klik ripple, dan focus outline
- Mendukung `prefers-reduced-motion` untuk aksesibilitas
- Tidak menggunakan framework, shadow, atau gradient

## Link yang Tersedia

- Instagram
- YouTube
- Portfolio
- Newsletter
- GitHub
- Discord
- Saweria
- SocialBuzz
- Email

## Struktur Project

```text
.
├── assets/
│   └── profile.png
├── index.html
├── script.js
├── styles.css
└── README.md
```

| File | Keterangan |
| --- | --- |
| `index.html` | Berisi struktur profil, toggle tema, ikon SVG, dan seluruh link. |
| `styles.css` | Mengatur tampilan, tema terang/gelap, responsivitas, serta animasi. |
| `script.js` | Mengatur toggle tema, penyimpanan tema, animasi masuk, dan efek ripple. |
| `assets/profile.png` | Foto profil yang ditampilkan pada bagian atas halaman. |

## Menjalankan Website

Website dapat langsung dibuka dengan membuka file `index.html` di browser.

Untuk menjalankannya melalui server lokal:

```bash
python3 -m http.server 8000
```

Kemudian buka:

```text
http://localhost:8000
```

## Mengubah Informasi Profil

Buka `index.html`, kemudian ubah nama dan tagline pada bagian berikut:

```html
<h1 id="profile-name">mas aril</h1>
<p>Programmer • AI Explorer • English Learner</p>
```

Untuk mengganti foto profil, ganti file `assets/profile.png` dengan gambar baru menggunakan nama file yang sama.

## Mengubah Tujuan Link

Buka `index.html`, lalu ubah nilai `href` pada tombol yang diinginkan:

```html
<a class="link-button load-item" href="https://instagram.com/username">
  ...
</a>
```

Link Portfolio dan Newsletter saat ini masih menggunakan `href="#"`. Ganti dengan URL tujuan sebenarnya sebelum website dipublikasikan.

Untuk email, ubah alamat berikut:

```html
<a class="link-button load-item" href="mailto:hello@ramandastudy.com">
```

## Pengaturan Tema

Warna light mode dan dark mode disimpan sebagai CSS custom properties di `styles.css`.

```css
:root {
  --page: #fff;
  --text: #000;
}

[data-theme="dark"] {
  --page: #000;
  --text: #f5f5f7;
}
```

Website menggunakan dark mode saat pertama dibuka. Setelah pengguna menekan tombol matahari atau bulan, tema berubah menjadi light mode dan pilihan tersebut disimpan di `localStorage`.

## Teknologi

- HTML5
- CSS3
- Vanilla JavaScript
- Inline SVG icons
- SF Pro melalui system font stack

## Deploy

Karena website ini bersifat statis, project dapat langsung di-deploy ke layanan seperti:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

Tidak diperlukan proses build atau instalasi dependency.
