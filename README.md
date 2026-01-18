# Radio Al Anshar Jogja - Live Streaming Radio Player

Modern web-based radio player for Radio Al Anshar Jogja live streaming.

## Fitur

- 🎵 **Live Audio Streaming** - Stream langsung dari Radio Al Anshar Jogja
- ▶️ **Modern Audio Player** - Kontrol play/pause dengan UI yang intuitif
- 📱 **Responsive Design** - Tampilan optimal di mobile dan desktop
- 🎨 **Theme Support** - Dukungan tema terang dan gelap
- ☁️ **Cloudflare Workers** - Deploy ke edge untuk performa maksimal dan latensi rendah
- 🔊 **Howler.js Audio Engine** - Audio playback yang handal dan cross-browser

## Teknologi

- **Framework**: React Router v7
- **Audio Library**: Howler.js
- **Styling**: Tailwind CSS v4 + DaisyUI
- **Deployment**: Cloudflare Workers
- **TypeScript**: Full type safety

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Configuration

Radio stream configuration is managed in `wrangler.jsonc`:

- `STATION_TITLE`: Radio station name
- `SHOUTCAST_URL`: Shoutcast server URL
- `PLAYING_URL`: Streaming proxy URL

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

This project uses [Tailwind CSS](https://tailwindcss.com/) v4 and [DaisyUI](https://daisyui.com/) for styling.

---

Built with ❤️ using React Router and Cloudflare Workers.
