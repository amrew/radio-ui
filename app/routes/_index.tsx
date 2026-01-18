import type { Route } from "./+types/_index";
import { RadioPlayer } from "~/components/radio";
import { getThemeFromCookie } from "~/utils/theme";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Radio Player - Live Streaming" },
    {
      name: "description",
      content: "Modern Shoutcast Radio Player",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=5",
    },
  ];
}

export async function loader({ context, request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const playingUrl = context.cloudflare.env.PLAYING_URL;
  const theme = getThemeFromCookie(request.headers.get("Cookie"));

  return {
    url,
    playingUrl,
    theme,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <RadioPlayer streamUrl={loaderData.playingUrl} />;
}
