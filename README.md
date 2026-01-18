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

### What is Wrangler?

**Wrangler** is the official CLI tool for Cloudflare Workers. It helps you develop, test, and deploy applications to Cloudflare's edge network.

This project runs on **Cloudflare Workers**, which means your radio player will be deployed globally across Cloudflare's network for ultra-fast performance worldwide.

#### First Time Setup

If this is your first time working with Cloudflare Workers, you'll need to:

1. **Create a Cloudflare account** (free tier available):
   - Visit [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
   - Sign up for a free account

2. **Login to Wrangler**:
   ```bash
   npx wrangler login
   ```
   This will open your browser to authenticate with Cloudflare.

3. **Verify your login**:
   ```bash
   npx wrangler whoami
   ```
   You should see your Cloudflare account email.

#### Understanding `wrangler.jsonc`

The `wrangler.jsonc` file contains your Worker configuration:

```jsonc
{
  "name": "alanshor-radio",           // Your Worker's name
  "compatibility_date": "2025-04-04", // Cloudflare runtime version
  "vars": {
    "STATION_TITLE": "Radio Al Anshar Jogja",  // Your radio station name
    "SHOUTCAST_URL": "http://...",              // Your Shoutcast server URL
    "DEFAULT_THEME": "minimalist"               // Default UI theme
  }
}
```

**To customize for your own radio station**, edit these values in `wrangler.jsonc`:
- `STATION_TITLE`: Your radio station's name
- `SHOUTCAST_URL`: Your Shoutcast/Icecast server URL
- `DEFAULT_THEME`: Choose from these themes:
  - `minimalist` - Clean, minimal design
  - `cheerful` - Bright and colorful
  - `retro` - Vintage aesthetic
  - `dark` - Dark mode
  - `radio` - Classic radio style
  - `ios` - iOS-inspired design
  - `pastel` - Soft pastel colors
  - `vinyl` - Vinyl record style
  - `ipod` - iPod-inspired design
  - `retroradio` - Retro radio aesthetic

### Development

Start the development server:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Configuration

Radio stream configuration is managed in `wrangler.jsonc`:

- `STATION_TITLE`: Your radio station's display name
- `SHOUTCAST_URL`: Your Shoutcast/Icecast server URL (e.g., `http://yourserver.com:8080`)
- `DEFAULT_THEME`: Default UI theme - choose from `minimalist`, `cheerful`, `retro`, `dark`, `radio`, `ios`, `pastel`, `vinyl`, `ipod`, or `retroradio`

**Note**: The app automatically generates a proxy URL from your `SHOUTCAST_URL` to handle CORS and streaming optimization.

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
