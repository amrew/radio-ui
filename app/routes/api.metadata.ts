import type { Route } from "./+types/api.metadata";

interface ShoutcastStats {
  servertitle?: string;
  songtitle?: string;
  currentlisteners?: number;
  maxlisteners?: number;
  bitrate?: number;
  samplerate?: number;
  streamstatus?: number;
  servergenre?: string;
  serverurl?: string;
}

export async function loader({ context, request }: Route.LoaderArgs) {
  const shoutcastUrl = context.cloudflare.env.SHOUTCAST_URL;

  try {
    const statsUrl = `${shoutcastUrl}/stats?json=1`;

    const response = await fetch(statsUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as ShoutcastStats;

    return {
      success: true,
      data: {
        serverTitle: data.servertitle || context.cloudflare.env.STATION_TITLE,
        currentSong: data.songtitle || "No information available",
        listeners: data.currentlisteners || 0,
        maxListeners: data.maxlisteners || 0,
        bitrate: data.bitrate || 0,
        sampleRate: data.samplerate || 0,
        status: data.streamstatus || 0,
        genre: data.servergenre || "",
        url: data.serverurl || "",
      },
    };
  } catch (error) {
    console.error("Error fetching Shoutcast metadata:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to fetch metadata",
      data: {
        serverTitle: "Radio Station",
        currentSong: "Unable to fetch metadata",
        listeners: 0,
        maxListeners: 0,
        bitrate: 0,
        sampleRate: 0,
        status: 0,
        genre: "",
        url: "",
      },
    };
  }
}
