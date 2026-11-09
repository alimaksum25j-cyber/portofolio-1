# 🚀 Ali Maksum — Creative Fullstack Developer & 3D WebGL Specialist Portfolio

Sebuah website portofolio modern berkinerja tinggi dengan tema futuristik gelap (`#050510`), visualisasi interaktif **Three.js (React Three Fiber)**, efek **GSAP**, dan **Lenis Smooth Scroll**.

---

## ✨ Fitur Utama
1. **Scene 3D WebGL Interaktif**: Mesh geometris cyber core interaktif dengan efek rotasi, cincin neon mengorbit, dan ribuan partikel spasial yang merespons pergerakan kursor mouse.
2. **Tema Futuristik & Glassmorphism**: Palet warna dark `#050510` berpadu aksen neon cyan (`#00f0ff`) dan purple (`#a855f7`), efek grain lembut, serta custom scrollbar.
3. **Smooth Scroll Lenis**: Pengalaman scroll yang sangat halus disinkronkan dengan GSAP ScrollTrigger.
4. **Navigasi Cerdas (Navbar)**:
   - Efek glassmorphism dan blur backdrop.
   - Deteksi scroll otomatis (sembunyi saat scroll ke bawah, muncul saat scroll ke atas).
   - Indikator menu aktif sesuai posisi section di viewport.
   - Menu drawer fullscreen animasi untuk mobile.
5. **Kursor Neon Kustom**: Dot presisi dengan cincin trailing yang membesar saat menyentuh tombol/link interaktif (otomatis dinonaktifkan di layar sentuh).
6. **Preloader Cyber**: Animasi boot persentase (0–100%) dan logo inisial sebelum masuk ke halaman utama.
7. **Showcase Proyek Lengkap**:
   - Filter kategori (*Semua*, *Web 3D*, *Fullstack*, *UI/Frontend*).
   - Efek hover 3D tilt, zoom preview, dan glow.
   - Modal detail interaktif dengan galeri gambar, spesifikasi teknis, dan fitur unggulan.
8. **Timeline Karir & Edukasi**: Garis vertikal bercahaya neon dengan node pencapaian karir dan pendidikan.
9. **Sertifikasi & Kredensial**: Grid sertifikat resmi dengan lightbox modal pratinjau resolusi tinggi.
10. **Formulir Kontak**: Dilengkapi validasi form instan, efek selebrasi confetti, serta tautan langsung WhatsApp dan Email.
11. **Aksesibilitas & Performa**: Menghormati preferensi `prefers-reduced-motion` dan dioptimalkan untuk skor Google Lighthouse tinggi.

---

## 🛠️ Tech Stack
- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS v3 + Custom Cyberpunk utilities
- **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations**: GSAP, Canvas Confetti
- **Smooth Scroll**: Lenis (`lenis`)
- **Icons**: Lucide React (`lucide-react`)

---

## 💻 Menjalankan di Komputer Lokal (Localhost)

### 1. Prasyarat
- Pastikan **Node.js LTS** (v18 ke atas) sudah terpasang.

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Jalankan Server Pengembangan (Dev Server)
```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000) (atau port yang ditampilkan di terminal).

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil build siap rilis akan berada di folder `dist/`.

---

## 🌐 Panduan Deploy ke Vercel & Netlify

### Opsi A: Deploy ke Vercel (Sangat Direkomendasikan)
1. Push repositori ini ke akun **GitHub / GitLab / Bitbucket** milikmu:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio Ali Maksum 3D"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```
2. Buka [https://vercel.com](https://vercel.com) dan login.
3. Klik **"Add New Project"** lalu impor repositori GitHub yang baru saja dibuat.
4. Di bagian **Framework Preset**, pilih **Vite**.
5. Klik tombol **"Deploy"**. Vercel akan otomatis meng-compile dan memberikan URL gratis (misal: `ali-maksum.vercel.app`).

### Opsi B: Deploy ke Netlify
1. Buka [https://app.netlify.com](https://app.netlify.com) dan login.
2. Pilih **"Add new site"** -> **"Import an existing project"**.
3. Hubungkan dengan repositori GitHub Anda.
4. Konfigurasi build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Klik **"Deploy site"**.

---

## 🔗 Menghubungkan ke Custom Domain (Misal: `alimaksum.dev`)
1. Beli domain di penyedia domain (seperti Niagahoster, DomaiNesia, Namecheap, atau Cloudflare).
2. Di dashboard **Vercel**:
   - Masuk ke project -> Tab **Settings** -> **Domains**.
   - Masukkan domain Anda: `alimaksum.dev` dan `www.alimaksum.dev`.
3. Di panel DNS penyedia domain Anda, tambahkan record berikut:
   - **A Record**:
     - Host: `@` (atau kosong)
     - Target / Value: `76.76.21.21`
   - **CNAME Record**:
     - Host: `www`
     - Target / Value: `cname.vercel-dns.com`
4. Tunggu propagasi DNS (biasanya 5–30 menit), dan situs Anda otomatis aktif dengan sertifikat HTTPS SSL gratis!
