# Jadwal Jumat - Jadwal Khotib Jumat

Aplikasi web untuk menampilkan jadwal sholat Jumat untuk para ustadz di masjid-masjid Ma'had Al-Anshar.

## Fitur

- 📅 **Tampilan Jadwal Jumat Terdekat** - Otomatis menampilkan jadwal Jumat yang akan datang
- ⬅️➡️ **Navigasi Swipe** - Geser kanan/kiri untuk melihat jadwal Jumat berikutnya atau sebelumnya
- 🔍 **Pencarian Ustadz** - Cari jadwal berdasarkan nama ustadz
- 🕌 **21 Masjid** - Menampilkan jadwal untuk 21 masjid tetap
- 📱 **Responsive Design** - Tampilan optimal di mobile dan desktop
- ☁️ **Cloudflare Workers** - Deploy ke edge untuk performa maksimal
- 💾 **D1 Database** - Database SQLite di Cloudflare

## Teknologi

- **Framework**: React Router v7
- **Database**: Cloudflare D1 (SQLite)
- **ORM**: Drizzle ORM
- **Styling**: Tailwind CSS v4 + DaisyUI
- **Deployment**: Cloudflare Workers

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Database Setup

1. **Run migrations** (creates tables):
```bash
npm run db:migrate
```

2. **Import seed data** (populates with mosque, ustadz, and schedule data):
```bash
npx wrangler d1 execute DB --local --file=scripts/seed.sql
```

### Development

Start the development server:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Using the Application

- **View Schedule**: The app automatically shows the nearest upcoming Friday
- **Navigate**: Click arrow buttons or swipe left/right to see other Fridays
- **Search**: Type an ustadz name in the search box to find all their schedules
- **Reserve List**: Cadangan Umum (reserve ustadz) are shown at the bottom

## Previewing the Production Build

Preview the production build locally:

```bash
npm run preview
```

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

Deployment is done using the Wrangler CLI.

To build and deploy directly to production:

```sh
npm run deploy
```

To deploy a preview URL:

```sh
npx wrangler versions upload
```

You can then promote a version to production after verification or roll it out progressively.

```sh
npx wrangler versions deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
