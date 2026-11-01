# Website PT Triyasa Mitra Teknologi

Website company profile + CMS untuk PT Triyasa Mitra Teknologi. Desain mengikuti **Triyasa Design System** (token warna, tipografi, motion, dan komponen).

- **Frontend & CMS:** Next.js 16 + Payload CMS 3 dalam satu aplikasi. Panel admin di `/admin` (Bahasa Indonesia).
- **Database:** PostgreSQL 16.
- **Media:** disimpan lokal di folder `media/` (di Docker: volume `media`).
- **Animasi:** GSAP (ScrollTrigger, SplitText) + Lenis, menghormati pengaturan *reduce motion*.
- **Deploy:** Docker Compose (Postgres + aplikasi) di VPS bersama project lain; Caddy opsional.

---

## 1. Yang bisa diatur dari CMS

| Menu CMS | Isi |
|---|---|
| **Konten → Halaman** | Beranda, Tentang Kami, Layanan, Klien & Mitra, Kontak, Kebijakan Privasi, dan halaman baru. Setiap halaman = Hero + susunan blok. |
| **Konten → Layanan** | 6 lini layanan: hero, cakupan, "cocok untuk", blok tambahan, FAQ, SEO. |
| **Konten → Media** | Upload foto, video, logo, PDF (maks 25 MB). Gambar otomatis dibuat ukuran WebP. Teks alt wajib. |
| **Konten → Klien / Mitra / FAQ** | Logo klien & mitra (bisa disembunyikan), daftar FAQ. |
| **Penjualan → Leads** | Semua kiriman form konsultasi, dengan status Baru → Dihubungi → Penawaran → Deal. |
| **Pengaturan → Pengaturan Situs** | Logo, nomor WhatsApp, telepon, email, alamat, jam layanan, media sosial, SEO default. |
| **Pengaturan → Menu Atas / Footer** | Isi navbar dan footer. |
| **Pengaturan → Widget Chat** | Teks tombol, sapaan, jam layanan, pilihan menu chat (ke WhatsApp / Kontak). |
| **Pengaturan → Pengumuman** | Bar tipis di atas navbar (promo/info). |
| **Pengaturan → Bagian Bersama** | Alur kerja standar, CTA penutup, teks form. |

**Blok yang tersedia untuk halaman:** Grid Layanan, Bento 2×2, Statement, Statistik, Strip logo (marquee/grid), Alur kerja, Daftar poin, Teks + gambar, Foto/video, Denah jangkauan WiFi/RFID, Banner promo, FAQ, Teks bebas, Kontak + form, CTA.

**Tips menulis judul:** apit 2–4 kata kunci dengan bintang agar berwarna biru, misalnya `Satu mitra untuk *seluruh kebutuhan IT* Anda`.

**Alur kerja editor:** ubah → klik ikon mata (Pratinjau Langsung) untuk melihat hasil → *Publikasikan perubahan*. Bisa juga dijadwalkan. Riwayat versi ada di tab *Versi*.

**Peran pengguna:** Admin (semua akses), Editor (konten & media), Sales (hanya leads). Pengguna pertama yang mendaftar di `/admin` otomatis menjadi Admin.

### Placeholder yang harus diganti sebelum rilis

- [ ] **Pengaturan Situs → Identitas → Logo**: masih placeholder teks "TRIYASA". Logo dari deck sudah ada di Media bila ingin dipakai sementara; idealnya upload SVG/PNG versi mendatar.
- [ ] **Pengaturan Situs → Kontak**: nomor WhatsApp (`6280000000000`), telepon (`+62 800-0000-0000`), email (`halo@triyasa.example`), jam layanan.
- [ ] **Pengaturan Situs → SEO default → Alamat website** setelah domain aktif.
- [ ] **Klien**: pastikan setiap klien sudah mengizinkan logonya tampil (centang "Klien sudah mengizinkan…", atau matikan "Tampilkan di website").
- [ ] **Kebijakan Privasi**: teks masih draf, tinjau bersama penasihat hukum (UU PDP No. 27/2022).
- [ ] Foto proyek asli untuk hero layanan dan blok Teks + gambar.

---

## 2. Menjalankan di komputer lokal

Butuh Node.js 22, pnpm 10, dan PostgreSQL 16.

```bash
cp .env.example .env          # isi DATABASE_URL, PAYLOAD_SECRET, PREVIEW_SECRET
pnpm install
pnpm dev                      # http://localhost:3000 dan /admin
pnpm seed                     # isi konten awal (sekali, saat database kosong)
```

Perintah lain:

```bash
pnpm seed --reset             # hapus dan isi ulang konten awal
pnpm generate:types           # perbarui src/payload-types.ts setelah mengubah skema
pnpm payload migrate:create nama-perubahan   # buat migrasi setelah mengubah skema
pnpm tokens                   # bangun ulang src/styles/tokens.css dari design/tokens.json
pnpm build && pnpm start      # uji mode produksi
```

> Di mode dev, perubahan skema langsung diterapkan ke database. Untuk produksi, **selalu buat migrasi** (`pnpm payload migrate:create ...`) dan commit file di `src/migrations/`. Migrasi berjalan otomatis saat aplikasi produksi menyala.

---

## 3. Deploy ke VPS (148.230.102.29)

Repository: https://github.com/pandeyoga/TMTWEB · Folder di VPS: `/opt/triyasa-web`

VPS ini juga menjalankan project lain, jadi website ini **tidak memakai port 80/443**. Website jalan di port sendiri, otomatis mulai dari **8080**, misalnya `http://148.230.102.29:8080`. Semua container, volume, dan network bernama `triyasa-web_*`, dan database tidak dibuka ke luar.

| Skrip | Dijalankan di | Fungsi |
|---|---|---|
| `deploy/install.sh` | VPS, sekali | Pasang git, clone repo ke `/opt/triyasa-web`, lalu jalankan `setup-vps.sh`. |
| `deploy/setup-vps.sh` | VPS (aman diulang) | Cek server, pasang Docker bila belum ada, tambah swap bila perlu, pilih port kosong, buat `.env` dengan secret acak, build & jalankan, isi konten awal, buat super admin. |
| `deploy/update.sh` | VPS, setiap update | Backup database, ambil kode terbaru, build ulang, cek website aktif. |
| `deploy/push.sh "pesan" [--deploy]` | Komputer Anda | Commit + push; dengan `--deploy` sekaligus menjalankan `update.sh` di VPS lewat SSH. |
| `deploy/backup.sh` | VPS | Backup database + media ke `/opt/triyasa-backups` (14 hari). |
| `deploy/status.sh` | VPS | Status container, URL, dan log terakhir. |
| `deploy/diagnose.sh` | VPS | Kumpulkan info lengkap untuk troubleshooting (tanpa secret). |

### Instalasi pertama (satu perintah)

Login ke VPS (`ssh root@148.230.102.29`), lalu:

```bash
curl -fsSL https://raw.githubusercontent.com/pandeyoga/TMTWEB/main/deploy/install.sh | ADMIN_PASSWORD='PASSWORD-ADMIN' bash
```

Di akhir, skrip menampilkan alamat website dan CMS, misalnya:

- Website: `http://148.230.102.29:8080`
- CMS: `http://148.230.102.29:8080/admin`, login `admin@triyasa.co.id`

Jika website tidak bisa dibuka dari luar, buka port tersebut (TCP) di firewall panel penyedia VPS (misalnya Hostinger hPanel → VPS → Firewall).

**Segera ganti password admin** setelah login (klik avatar → Akun). Situs masih HTTP tanpa domain.

### Update berikutnya

```bash
# di komputer Anda
bash deploy/push.sh "pesan perubahan"
# lalu di VPS
cd /opt/triyasa-web && bash deploy/update.sh
```

Atau sekaligus dari komputer (butuh akses SSH ke VPS): `bash deploy/push.sh "pesan perubahan" --deploy`.

`update.sh` memakai `git reset --hard`, jadi jangan mengedit kode langsung di VPS. File `.env`, database, dan media tidak tersentuh.

### Website tidak bisa dibuka?

1. Pastikan membuka **dengan port**: `http://148.230.102.29:8080` (port ada di baris `APP_PORT` di `/opt/triyasa-web/.env`).
2. Jalankan diagnosa di VPS dan kirimkan hasilnya:
   ```bash
   curl -fsSL https://raw.githubusercontent.com/pandeyoga/TMTWEB/main/deploy/diagnose.sh | bash
   ```
3. Jika dari VPS `curl http://127.0.0.1:8080` berhasil tetapi dari luar tidak, buka port tersebut di firewall panel penyedia VPS.

### Reset password admin

```bash
cd /opt/triyasa-web
docker compose --profile tools run --rm -e ADMIN_EMAIL=admin@triyasa.co.id -e ADMIN_PASSWORD='password-baru' seed sh -c 'corepack enable pnpm && pnpm create-admin --reset-password'
```

### Saat domain sudah siap

Jika port 80/443 sudah dipakai web server project lain (misalnya nginx), tambahkan domain lewat web server itu:

1. Arahkan DNS **A record** domain ke `148.230.102.29`.
2. Ikuti `deploy/nginx-domain.conf.example`: salin ke `/etc/nginx/sites-available/`, sesuaikan domain dan port, aktifkan, lalu `certbot --nginx -d domain-anda`.
3. Di `/opt/triyasa-web/.env` ubah `SITE_URL=https://domain-anda` dan `APP_BIND=127.0.0.1` (port tidak lagi terbuka ke publik), lalu `docker compose up -d`.
4. Di CMS: **Pengaturan Situs → SEO default → Alamat website** = `https://domain-anda`, lalu daftarkan `https://domain-anda/sitemap.xml` di Google Search Console.

Jika suatu saat VPS khusus untuk website ini (port 80/443 kosong), Caddy bawaan bisa dipakai: isi `COMPOSE_PROFILES=caddy`, `SITE_ADDRESS=domain-anda`, dan `APP_BIND=127.0.0.1` di `.env`, lalu `docker compose up -d`.

> `SITE_URL` harus sama persis dengan alamat yang dipakai untuk membuka website (termasuk port). Jika berbeda, login admin dan live preview bisa gagal.

### Backup

Jalankan `bash deploy/backup.sh` di VPS, atau jadwalkan harian lewat `crontab -e`:

```cron
30 2 * * * cd /opt/triyasa-web && bash deploy/backup.sh >> /var/log/triyasa-backup.log 2>&1
```

Perintah manual:

```bash
# Database
docker compose exec db pg_dump -U triyasa triyasa | gzip > backup-db-$(date +%F).sql.gz
# Media
docker run --rm -v triyasa-web_media:/m -v "$PWD":/b alpine tar czf /b/backup-media-$(date +%F).tar.gz -C /m .
```

Simpan backup di luar server (misalnya object storage), dan jadwalkan harian dengan `cron`.

Restore database:

```bash
gunzip -c backup-db-YYYY-MM-DD.sql.gz | docker compose exec -T db psql -U triyasa triyasa
```

### Notifikasi email untuk lead baru (opsional)

Isi `LEAD_NOTIFY_EMAIL` dan variabel `SMTP_*` di `.env`, lalu `docker compose up -d`. Tanpa SMTP, lead tetap tersimpan di CMS.

---

## 4. Struktur kode

```
design/tokens.json        Token dari Triyasa Design System
src/styles/               tokens.css (generated), components.css, site.css
src/collections/          Halaman, Layanan, Media, Klien, Mitra, FAQ, Leads, Pengguna
src/globals/              Pengaturan Situs, Menu, Footer, Widget Chat, Pengumuman, Bagian Bersama
src/blocks/               Definisi blok page builder
src/components/           Komponen frontend (Navbar, Hero, NetworkCanvas, ChatWidget, ContactForm, Motion, blok)
src/app/(frontend)/       Rute website
src/app/(payload)/        Panel admin & API
src/migrations/           Migrasi database produksi
src/seed/                 Konten awal + logo dari deck
Dockerfile, docker-compose.yml, Caddyfile   Deploy VPS
```

## 5. Analytics

Widget chat dan form mengirim event `chat_open`, `chat_whatsapp`, `chat_contact`, dan `generate_lead` ke `dataLayer`/`gtag` bila Google Tag Manager atau GA4 dipasang. Tambahkan script GTM di `src/app/(frontend)/layout.tsx` setelah ID tersedia.
