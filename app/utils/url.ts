export function getProxyUrl(url: string) {
  const radioUrlInstance = new URL(url);
  const host = radioUrlInstance.hostname;
  const port = radioUrlInstance.port;
  const playingUrl = `https://proxy.dev.al-faidah.com/stations/${host}/${port}/radio.mp3?sid=1`;
  return playingUrl;
}
