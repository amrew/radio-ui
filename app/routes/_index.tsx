import type { Route } from "./+types/_index";
import { RadioPlayer } from "~/components/radio";
import { getThemeFromCookie } from "~/utils/theme";
import { getProxyUrl } from "~/utils/url";

export function meta(args: Route.MetaArgs) {
  return [
    { title: `${args.loaderData.stationTitle}` },
    {
      name: "description",
      content: `${args.loaderData.stationTitle} - Radio Live Streaming`,
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=5",
    },
  ];
}

export async function loader({ context, request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const stationUrl = context.cloudflare.env.SHOUTCAST_URL;
  const stationTitle = context.cloudflare.env.STATION_TITLE;
  const defaultTheme = context.cloudflare.env.DEFAULT_THEME;

  const theme = getThemeFromCookie(request.headers.get("Cookie"), defaultTheme);
  const playingUrl = getProxyUrl(stationUrl);
  return {
    url,
    playingUrl,
    theme,
    stationTitle,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <RadioPlayer streamUrl={loaderData.playingUrl} />;
}
