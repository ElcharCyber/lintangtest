This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Bakso Lintang – Smart Purchasing & Trend Forecasting

## 1. Deskripsi Proyek

**Bakso Lintang** merupakan aplikasi berbasis website yang dirancang untuk membantu pengelolaan data penjualan, prediksi permintaan (*forecasting*), pemantauan tren pasar, pengelolaan stok bahan baku, serta penyusunan rekomendasi daftar belanja bahan baku.

Aplikasi ini dikembangkan menggunakan pendekatan **Full-Stack Web Application**, yaitu frontend dan backend dibangun dalam satu project menggunakan Next.js. Sistem menggunakan Supabase sebagai layanan database PostgreSQL untuk menyimpan dan mengelola data aplikasi.

Sistem memiliki dua jenis pengguna utama:

1. **Admin / Owner / Kasir**: Mengelola data penjualan, mengunggah laporan APOS, memantau performa bisnis, melihat hasil forecasting, memantau tren pasar, dan melihat rekomendasi pembelian bahan baku.
2. **Staf Dapur**: Menginput sisa stok fisik, memantau ketersediaan bahan baku, melihat detail bahan, dan memeriksa daftar belanja.

Fitur utama aplikasi meliputi:

- **Sales Management**: Mengunggah dan mengelola laporan penjualan dari sistem kasir APOS dalam format CSV/XLSX.
- **Demand & Sales Forecasting**: Menampilkan proyeksi penjualan dan permintaan menu untuk tujuh hari ke depan.
- **Market Trend Insights**: Menampilkan informasi tren kuliner serta perubahan harga bahan pokok atau komoditas.
- **Inventory Management**: Mengelola data dan input sisa stok fisik bahan baku.
- **Smart Purchasing**: Menghasilkan rekomendasi kebutuhan dan daftar belanja bahan baku berdasarkan hasil forecasting, resep, dan stok yang tersedia.

## 2. Teknologi yang Digunakan

| Teknologi | Fungsi |
|---|---|
| Next.js | Framework utama untuk membangun frontend dan backend aplikasi. |
| React | Membangun antarmuka pengguna berbasis komponen. |
| TypeScript | Menambahkan sistem tipe data agar kode lebih terstruktur dan mengurangi kesalahan. |
| Tailwind CSS | Mengatur styling dan tampilan aplikasi. |
| shadcn/ui | Menyediakan komponen antarmuka yang dapat dikustomisasi. |
| Iconify | Menyediakan ikon untuk kebutuhan antarmuka. |
| Node.js | Environment untuk menjalankan aplikasi Next.js. |
| npm | Mengelola package dan dependensi proyek. |
| Supabase | Menyediakan database PostgreSQL dan layanan pendukung backend. |
| Google Gemini | Mendukung pemrosesan AI untuk analisis dan ringkasan informasi tren pasar. |

**Catatan:** Supabase dan Google Gemini merupakan bagian dari integrasi backend yang dikembangkan secara bertahap. Library atau package pendukungnya perlu dipastikan telah terpasang sebelum digunakan.

## 3. Struktur Folder Proyek

Berikut struktur folder yang digunakan dalam pengembangan website Bakso Lintang dengan pendekatan Next.js Full-Stack.

```text
bakso-lintang/
│
├── app/
│   ├── (pages)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── sales/
│   │   │   └── page.tsx
│   │   ├── forecasting/
│   │   │   └── page.tsx
│   │   ├── trends/
│   │   │   └── page.tsx
│   │   ├── inventory/
│   │   │   └── page.tsx
│   │   ├── shopping/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── profile/
│   │       └── page.tsx
│   │
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── route.ts
│   │   │   └── logout/
│   │   │       └── route.ts
│   │   ├── sales/
│   │   │   ├── route.ts
│   │   │   └── upload/
│   │   │       └── route.ts
│   │   ├── inventory/
│   │   │   └── route.ts
│   │   ├── forecasting/
│   │   │   └── route.ts
│   │   ├── trends/
│   │   │   └── route.ts
│   │   ├── shopping/
│   │   │   ├── route.ts
│   │   │   └── [id]/
│   │   │       └── route.ts
│   │   └── cron/
│   │       └── daily-processing/
│   │           └── route.ts
│   │
│   ├── layout.tsx
│   ├── globals.css
│   └── page.tsx
│
├── components/
│   ├── ui/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   ├── OwnerNavigation.tsx
│   │   └── StaffNavigation.tsx
│   ├── dashboard/
│   │   ├── OwnerDashboard.tsx
│   │   ├── StaffDashboard.tsx
│   │   ├── SalesSummary.tsx
│   │   ├── SalesChart.tsx
│   │   └── AIExecutiveSummary.tsx
│   ├── sales/
│   │   ├── SalesUpload.tsx
│   │   ├── SalesPreview.tsx
│   │   └── SalesHistory.tsx
│   ├── forecasting/
│   │   ├── ForecastChart.tsx
│   │   ├── ForecastSummary.tsx
│   │   └── ForecastTable.tsx
│   ├── trends/
│   │   ├── TrendFoodCard.tsx
│   │   ├── CommodityPriceCard.tsx
│   │   └── TrendSummary.tsx
│   ├── inventory/
│   │   ├── StockInputForm.tsx
│   │   ├── StockTable.tsx
│   │   └── StockStatus.tsx
│   ├── shopping/
│   │   ├── ShoppingList.tsx
│   │   ├── ShoppingItem.tsx
│   │   ├── IngredientDetail.tsx
│   │   └── ShoppingSummary.tsx
│   ├── profile/
│   │   ├── ProfileCard.tsx
│   │   └── ProfileForm.tsx
│   └── shared/
│       ├── StatCard.tsx
│       ├── PageHeader.tsx
│       ├── StatusBadge.tsx
│       └── EmptyState.tsx
│
├── hooks/
│   ├── use-mobile.ts
│   └── use-role.ts
│
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   ├── types.ts
│   ├── mock-data.ts
│   │
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   │
│   ├── services/
│   │   ├── sales.service.ts
│   │   ├── inventory.service.ts
│   │   ├── forecasting.service.ts
│   │   ├── trends.service.ts
│   │   └── shopping.service.ts
│   │
│   └── validations/
│       ├── sales.schema.ts
│       └── inventory.schema.ts
│
├── public/
│   ├── images/
│   └── logo/
│
├── .env.local
├── .gitignore
├── AGENTS.md
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

**Catatan struktur:**

- Folder `(pages)` merupakan *Route Group* dari Next.js. Nama folder dalam tanda kurung tidak muncul pada URL.
- Folder `api/` digunakan untuk menyimpan endpoint backend.
- Folder `[id]` digunakan untuk membuat *dynamic route*.
- Folder `node_modules/` tidak ditampilkan karena merupakan folder dependensi yang dibuat otomatis melalui npm.

## 4. Penjelasan Folder dan File

### A. Folder `app/`

Folder `app/` merupakan pusat pengaturan halaman, navigasi, dan endpoint API aplikasi. Next.js menggunakan sistem App Router sehingga setiap folder yang memiliki `page.tsx` dapat menjadi halaman website, sedangkan folder yang memiliki `route.ts` dapat menjadi endpoint API.

#### 1. Folder `(pages)/`

Folder ini digunakan untuk mengelompokkan seluruh halaman frontend aplikasi.

| Folder/File | Fungsi |
|---|---|
| `login/page.tsx` | Menampilkan halaman login untuk Owner/Kasir dan Staf Dapur. |
| `dashboard/page.tsx` | Menampilkan dashboard sesuai role pengguna. |
| `sales/page.tsx` | Menampilkan pengelolaan data penjualan dan upload laporan APOS. |
| `forecasting/page.tsx` | Menampilkan proyeksi penjualan dan permintaan menu selama tujuh hari. |
| `trends/page.tsx` | Menampilkan informasi tren kuliner dan perubahan harga komoditas. |
| `inventory/page.tsx` | Menampilkan input dan pemantauan stok bahan baku. |
| `shopping/page.tsx` | Menampilkan rekomendasi daftar belanja bahan baku. |
| `shopping/[id]/page.tsx` | Menampilkan detail bahan baku berdasarkan ID yang dipilih. |
| `profile/page.tsx` | Menampilkan informasi dan pengaturan profil pengguna. |

**Catatan:** Route Group `(pages)` tidak memengaruhi URL. Contohnya, `app/(pages)/dashboard/page.tsx` tetap dapat diakses melalui `/dashboard`.

#### 2. File Global pada `app/`

| File | Fungsi |
|---|---|
| `layout.tsx` | Mengatur layout utama aplikasi, metadata, dan elemen global. |
| `globals.css` | Menyimpan styling global, konfigurasi Tailwind CSS, dan aturan tampilan. |
| `page.tsx` | Menjadi halaman utama ketika pengguna mengakses URL `/`. |

#### 3. Folder `api/`

Folder `api/` merupakan bagian backend aplikasi yang menggunakan **Next.js Route Handlers**. Setiap file `route.ts` bertugas menerima dan memproses permintaan HTTP dari frontend.

| Endpoint | Method | Fungsi |
|---|---|---|
| `/api/auth/login` | POST | Memproses autentikasi pengguna. |
| `/api/auth/logout` | POST | Memproses logout pengguna. |
| `/api/sales` | GET | Mengambil data penjualan. |
| `/api/sales/upload` | POST | Menerima dan memproses file laporan APOS. |
| `/api/inventory` | GET, POST | Mengambil dan menyimpan data stok bahan baku. |
| `/api/forecasting` | GET | Mengambil hasil forecasting. |
| `/api/trends` | GET | Mengambil informasi tren pasar. |
| `/api/shopping` | GET | Mengambil rekomendasi daftar belanja. |
| `/api/shopping/[id]` | GET | Mengambil detail rekomendasi atau bahan berdasarkan ID. |
| `/api/cron/daily-processing` | POST | Menjalankan proses pengolahan data harian secara terjadwal. |

Method dan fungsi endpoint tersebut merupakan rancangan awal yang dapat disesuaikan dengan kebutuhan implementasi.

### B. Folder `components/`

Folder `components/` digunakan untuk menyimpan komponen antarmuka pengguna atau *UI Components*. Komponen dipisahkan berdasarkan fitur agar kode lebih mudah dikelola, digunakan kembali, dan dikembangkan.

#### 1. `components/ui/`

Menyimpan komponen dasar dari shadcn/ui.

Contoh:
- Button
- Card
- Table
- Checkbox
- Tooltip
- Input

Komponen ini menjadi elemen dasar untuk membangun tampilan halaman aplikasi.

#### 2. `components/layout/`

Menyimpan komponen struktur dan navigasi utama aplikasi.

| File | Fungsi |
|---|---|
| `Sidebar.tsx` | Menampilkan sidebar atau menu navigasi utama. |
| `Header.tsx` | Menampilkan header, informasi pengguna, dan navigasi atas. |
| `OwnerNavigation.tsx` | Mengatur menu navigasi khusus Owner/Kasir. |
| `StaffNavigation.tsx` | Mengatur menu navigasi khusus Staf Dapur. |

#### 3. `components/dashboard/`

Menyimpan komponen untuk halaman dashboard bisnis dan operasional.

| File | Fungsi |
|---|---|
| `OwnerDashboard.tsx` | Menampilkan dashboard bisnis untuk Owner/Kasir. |
| `StaffDashboard.tsx` | Menampilkan dashboard operasional untuk Staf Dapur. |
| `SalesSummary.tsx` | Menampilkan ringkasan informasi penjualan. |
| `SalesChart.tsx` | Menampilkan grafik penjualan. |
| `AIExecutiveSummary.tsx` | Menampilkan ringkasan analisis bisnis yang dihasilkan AI. |

#### 4. `components/sales/`

Menyimpan komponen untuk pengelolaan data penjualan.

| File | Fungsi |
|---|---|
| `SalesUpload.tsx` | Menampilkan fitur upload file CSV/XLSX laporan APOS. |
| `SalesPreview.tsx` | Menampilkan pratinjau data sebelum disimpan. |
| `SalesHistory.tsx` | Menampilkan riwayat data penjualan yang telah diunggah. |

#### 5. `components/forecasting/`

Menyimpan komponen untuk fitur prediksi permintaan dan penjualan.

| File | Fungsi |
|---|---|
| `ForecastChart.tsx` | Menampilkan grafik hasil forecasting. |
| `ForecastSummary.tsx` | Menampilkan ringkasan hasil prediksi. |
| `ForecastTable.tsx` | Menampilkan tabel proyeksi penjualan atau permintaan menu. |

#### 6. `components/trends/`

Menyimpan komponen untuk fitur pemantauan tren pasar.

| File | Fungsi |
|---|---|
| `TrendFoodCard.tsx` | Menampilkan informasi tren kuliner. |
| `CommodityPriceCard.tsx` | Menampilkan informasi harga bahan pokok atau komoditas. |
| `TrendSummary.tsx` | Menampilkan ringkasan tren dan rekomendasi AI. |

#### 7. `components/inventory/`

Menyimpan komponen untuk pengelolaan stok bahan baku.

| File | Fungsi |
|---|---|
| `StockInputForm.tsx` | Menyediakan formulir untuk menginput sisa stok fisik. |
| `StockTable.tsx` | Menampilkan tabel data stok bahan baku. |
| `StockStatus.tsx` | Menampilkan status ketersediaan stok bahan baku. |

#### 8. `components/shopping/`

Menyimpan komponen untuk fitur Smart Purchasing.

| File | Fungsi |
|---|---|
| `ShoppingList.tsx` | Menampilkan daftar rekomendasi belanja bahan baku. |
| `ShoppingItem.tsx` | Menampilkan informasi setiap item dalam daftar belanja. |
| `IngredientDetail.tsx` | Menampilkan detail kebutuhan bahan baku. |
| `ShoppingSummary.tsx` | Menampilkan ringkasan total kebutuhan belanja. |

#### 9. `components/profile/`

Menyimpan komponen untuk halaman profil pengguna.

| File | Fungsi |
|---|---|
| `ProfileCard.tsx` | Menampilkan informasi profil pengguna. |
| `ProfileForm.tsx` | Menyediakan formulir untuk mengubah informasi profil. |

#### 10. `components/shared/`

Menyimpan komponen umum yang dapat digunakan oleh beberapa halaman.

| File | Fungsi |
|---|---|
| `StatCard.tsx` | Menampilkan kartu ringkasan statistik. |
| `PageHeader.tsx` | Menampilkan judul dan deskripsi halaman. |
| `StatusBadge.tsx` | Menampilkan label status seperti tersedia, rendah, atau habis. |
| `EmptyState.tsx` | Menampilkan tampilan ketika belum ada data. |

### C. Folder `hooks/`

Folder `hooks/` digunakan untuk menyimpan Custom React Hooks, yaitu fungsi khusus yang membantu memisahkan logika interaksi dan state dari komponen tampilan.

| File | Fungsi |
|---|---|
| `use-mobile.ts` | Membantu mendeteksi kondisi tampilan mobile atau ukuran layar. |
| `use-role.ts` | Membantu membaca role pengguna, seperti Owner/Kasir dan Staf Dapur. |

Custom Hooks dapat digunakan kembali oleh beberapa komponen tanpa harus menulis ulang logika yang sama.

### D. Folder `lib/`

Folder `lib/` digunakan untuk menyimpan fungsi pendukung, konfigurasi, tipe data, layanan pengolahan data, serta validasi yang dibutuhkan aplikasi.

#### 1. File Utama

| File | Fungsi |
|---|---|
| `utils.ts` | Menyimpan fungsi utilitas yang dapat digunakan kembali, termasuk fungsi `cn()` untuk menggabungkan class CSS. |
| `constants.ts` | Menyimpan nilai konstan aplikasi, seperti nama aplikasi, role pengguna, daftar navigasi, dan label menu. |
| `types.ts` | Menyimpan definisi tipe data TypeScript untuk pengguna, penjualan, stok, forecasting, dan daftar belanja. |
| `mock-data.ts` | Menyimpan data dummy untuk kebutuhan pengembangan dan pengujian UI sebelum integrasi backend. |

#### 2. `lib/supabase/`

Folder ini digunakan untuk menyimpan konfigurasi koneksi aplikasi dengan Supabase.

| File | Fungsi |
|---|---|
| `client.ts` | Membuat konfigurasi Supabase Client untuk kebutuhan sisi browser atau frontend. |
| `server.ts` | Membuat konfigurasi Supabase Client untuk kebutuhan sisi server, seperti Route Handlers. |

Pemisahan ini membantu pengelolaan akses database berdasarkan lingkungan eksekusi aplikasi.

#### 3. `lib/services/`

Folder ini digunakan untuk menyimpan logika bisnis atau proses pengolahan data aplikasi agar tidak menumpuk di dalam file API.

| File | Fungsi |
|---|---|
| `sales.service.ts` | Mengelola proses pengolahan dan penyimpanan data penjualan. |
| `inventory.service.ts` | Mengelola data stok dan perhitungan sisa bahan baku. |
| `forecasting.service.ts` | Mengelola proses pengambilan atau pengolahan hasil forecasting. |
| `trends.service.ts` | Mengelola pengambilan dan pemrosesan informasi tren pasar. |
| `shopping.service.ts` | Mengelola perhitungan kebutuhan dan rekomendasi daftar belanja. |

#### 4. `lib/validations/`

Folder ini digunakan untuk menyimpan aturan validasi data sebelum data diproses atau disimpan ke database.

| File | Fungsi |
|---|---|
| `sales.schema.ts` | Menyimpan aturan validasi data penjualan dan laporan APOS. |
| `inventory.schema.ts` | Menyimpan aturan validasi input stok bahan baku. |

Validasi membantu memastikan data yang diterima aplikasi sesuai dengan format dan ketentuan yang ditentukan.

### E. Folder `public/`

Folder `public/` digunakan untuk menyimpan file statis yang dapat diakses langsung oleh browser.

| Folder | Fungsi |
|---|---|
| `images/` | Menyimpan gambar produk, ilustrasi, foto pendukung, dan gambar lainnya. |
| `logo/` | Menyimpan logo aplikasi Bakso Lintang. |

Contoh struktur:

```text
public/
├── images/
│   ├── bakso.png
│   ├── default-avatar.png
│   └── illustration.png
│
└── logo/
    └── logo-bakso-lintang.png
```

Contoh pemanggilan gambar:

```tsx
<img
  src="/logo/logo-bakso-lintang.png"
  alt="Logo Bakso Lintang"
/>
```

File yang disimpan di dalam `public/` dapat diakses menggunakan path URL yang dimulai dengan `/`.

### F. Folder `node_modules/`

Folder `node_modules/` merupakan tempat penyimpanan seluruh package atau library yang dibutuhkan oleh proyek.

Contoh package:
- Next.js
- React
- Tailwind CSS
- shadcn/ui dan dependensinya
- Iconify
- TypeScript
- Package pendukung Supabase dan validasi apabila sudah dipasang.

Folder ini dibuat secara otomatis ketika menjalankan perintah `npm install`.

**Catatan penting:**
- Tidak perlu mengedit file di dalam `node_modules/` secara manual.
- Jangan mengunggah folder ini ke GitHub.
- Folder ini dapat dibuat kembali menggunakan `npm install` berdasarkan `package.json` dan `package-lock.json`.

### G. File `.env.local`

File `.env.local` digunakan untuk menyimpan konfigurasi dan kredensial yang diperlukan aplikasi, seperti koneksi Supabase dan API Key Gemini.

Contoh konfigurasi:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
GEMINI_API_KEY=
CRON_SECRET=
```

Keterangan:
- `NEXT_PUBLIC_SUPABASE_URL`: URL project Supabase.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Anon key untuk kebutuhan koneksi Supabase dari sisi aplikasi.
- `SUPABASE_SERVICE_ROLE_KEY`: Service role key untuk kebutuhan server dengan hak akses khusus.
- `GEMINI_API_KEY`: API Key untuk mengakses layanan Google Gemini.
- `CRON_SECRET`: Secret untuk melindungi endpoint proses terjadwal.

**Keamanan:** Jangan membagikan atau mengunggah nilai kredensial tersebut ke GitHub. Khusus `SUPABASE_SERVICE_ROLE_KEY`, `GEMINI_API_KEY`, dan `CRON_SECRET`, penggunaannya harus dibatasi pada sisi server.

## 5. Penjelasan File Konfigurasi Utama

| File | Fungsi |
|---|---|
| `.gitignore` | Menentukan file dan folder yang tidak perlu dimasukkan ke Git. |
| `.env.local` | Menyimpan variabel lingkungan dan kredensial aplikasi. |
| `AGENTS.md` | Menyimpan petunjuk atau aturan kerja untuk agen coding yang digunakan dalam proyek. |
| `components.json` | Menyimpan konfigurasi shadcn/ui, termasuk lokasi komponen dan pengaturan style. |
| `eslint.config.mjs` | Mengatur aturan pemeriksaan kualitas dan konsistensi kode menggunakan ESLint. |
| `next-env.d.ts` | Menyediakan deklarasi tipe lingkungan Next.js untuk TypeScript. |
| `next.config.ts` | Menyimpan konfigurasi khusus Next.js. |
| `package.json` | Menyimpan informasi proyek, daftar dependensi, dan perintah npm. |
| `package-lock.json` | Mengunci versi dependensi agar instalasi package lebih konsisten. |
| `tsconfig.json` | Mengatur konfigurasi TypeScript. |
| `README.md` | Menyimpan dokumentasi proyek dan penjelasan struktur folder. |

## 6. Alur Hubungan Antar-Folder dan Sistem

Secara umum, aplikasi Bakso Lintang menggunakan alur komunikasi antara pengguna, frontend, backend, database, dan layanan AI.

```text
                    PENGGUNA
                       |
                       v
                 FRONTEND (UI)
                app/(pages)/
                components/
                       |
                       v
                BACKEND (API)
                  app/api/
                       |
                       v
               BUSINESS LOGIC
                lib/services/
                       |
              +--------+--------+
              |                 |
              v                 v
           SUPABASE         LAYANAN AI
         PostgreSQL        Google Gemini
              |                 |
              +--------+--------+
                       |
                       v
                 HASIL PROSES
                       |
                       v
               FRONTEND (UI)
                       |
                       v
                 PENGGUNA
```

Penjelasan alurnya:

1. Pengguna mengakses halaman website melalui frontend.
2. Pengguna melakukan aktivitas, seperti mengunggah laporan APOS atau menginput sisa stok fisik.
3. Frontend mengirimkan permintaan ke backend melalui endpoint API.
4. Backend menerima permintaan dan menjalankan logika bisnis melalui folder `lib/services/`.
5. Backend berkomunikasi dengan Supabase untuk mengambil atau menyimpan data.
6. Layanan AI digunakan sesuai kebutuhan, misalnya untuk membantu analisis dan ringkasan tren pasar.
7. Hasil pemrosesan dikirimkan kembali ke frontend untuk ditampilkan kepada pengguna.

`node_modules/` menyediakan library dan dependensi yang digunakan oleh aplikasi selama proses pengembangan dan build.

## 7. Panduan Pengembangan

Agar struktur proyek tetap rapi dan mudah dikembangkan oleh seluruh anggota tim, berikut beberapa aturan yang perlu diperhatikan:

1. Simpan halaman dan route frontend di dalam `app/(pages)/`.
2. Simpan endpoint backend di dalam `app/api/`.
3. Simpan komponen tampilan berdasarkan fitur di dalam `components/`.
4. Gunakan folder `components/ui/` untuk komponen dasar dari shadcn/ui.
5. Simpan Custom React Hooks di dalam `hooks/`.
6. Simpan fungsi pendukung, tipe data, dan konfigurasi di dalam `lib/`.
7. Simpan konfigurasi koneksi Supabase di dalam `lib/supabase/`.
8. Simpan logika bisnis di dalam `lib/services/`.
9. Simpan aturan validasi data di dalam `lib/validations/`.
10. Simpan gambar dan aset statis di dalam `public/`.
11. Hindari mengedit isi `node_modules/` secara manual.
12. Gunakan nama file yang jelas dan konsisten.
13. Pisahkan tampilan dan akses fitur berdasarkan role Owner/Kasir dan Staf Dapur.
14. Gunakan data dummy terlebih dahulu selama tahap pengembangan UI apabila backend belum tersedia.
15. Jangan menyimpan API Key atau kredensial sensitif secara langsung di dalam kode frontend.

## 8. Perintah Menjalankan Proyek

Pastikan terminal berada di direktori utama proyek.

**Menginstal dependensi:**

```bash
npm install
```

**Menjalankan development server:**

```bash
npm run dev
```

**Membuka website:**

```text
http://localhost:3000
```

**Melakukan pengecekan production build:**

```bash
npm run build
```

**Menjalankan aplikasi hasil build:**

```bash
npm run start
```

## 9. Catatan Pengembangan

Struktur folder ini digunakan sebagai fondasi pengembangan website Bakso Lintang dengan pendekatan Full-Stack menggunakan Next.js.

Pada tahap awal, halaman aplikasi dapat menggunakan dummy data untuk membangun dan menguji tampilan antarmuka. Setelah itu, pengembangan dapat dilanjutkan dengan integrasi backend melalui Next.js Route Handlers dan Supabase sebagai database.

Pengembangan fitur lanjutan meliputi:

1. Integrasi upload dan pemrosesan laporan penjualan APOS.
2. Integrasi autentikasi dan pengaturan hak akses berdasarkan role pengguna.
3. Pengelolaan data stok bahan baku dan resep atau *Bill of Materials* (BOM).
4. Pengembangan proses forecasting untuk memproyeksikan permintaan menu.
5. Integrasi AI untuk membantu pemantauan tren kuliner dan perubahan harga komoditas.
6. Pengembangan perhitungan kebutuhan bahan baku dan rekomendasi Smart Purchasing.
7. Pengembangan proses pengolahan data harian secara terjadwal melalui endpoint Cron.

Untuk proses forecasting yang membutuhkan model atau library khusus, pengolahan dapat dikembangkan sebagai layanan terpisah apabila kebutuhan teknisnya tidak sesuai dijalankan langsung di Next.js.

**Tujuan utama struktur ini adalah menjaga kode frontend dan backend tetap terorganisasi, memisahkan tanggung jawab setiap bagian sistem, mempermudah integrasi database dan AI, serta memudahkan kolaborasi seluruh anggota tim dalam mengembangkan aplikasi Bakso Lintang.**#   l i n t a n g t e s t  
 