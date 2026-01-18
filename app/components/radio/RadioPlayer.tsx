import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Howl } from "howler";
import { useTheme } from "~/contexts/ThemeContext";
import { ThemeSelector } from "./ThemeSelector";
import { RadioHeader } from "./RadioHeader";
import { NowPlaying } from "./NowPlaying";
import { PlayButton } from "./PlayButton";
import { VolumeControl } from "./VolumeControl";
import { StatusInfo } from "./StatusInfo";
import {
  HeaderLoadingFallback,
  LoadingFallback,
  PlayButtonLoadingFallback,
  VolumeControlLoadingFallback,
  StatusInfoLoadingFallback,
} from "./LoadingFallback";

const CheerfulHeader = lazy(() =>
  import("./cheerful").then((m) => ({ default: m.CheerfulHeader })),
);
const CheerfulNowPlaying = lazy(() =>
  import("./cheerful").then((m) => ({ default: m.CheerfulNowPlaying })),
);
const CheerfulPlayButton = lazy(() =>
  import("./cheerful").then((m) => ({ default: m.CheerfulPlayButton })),
);
const CheerfulVolumeControl = lazy(() =>
  import("./cheerful").then((m) => ({ default: m.CheerfulVolumeControl })),
);
const CheerfulStatusInfo = lazy(() =>
  import("./cheerful").then((m) => ({ default: m.CheerfulStatusInfo })),
);

const RetroHeader = lazy(() =>
  import("./retro").then((m) => ({ default: m.RetroHeader })),
);
const RetroNowPlaying = lazy(() =>
  import("./retro").then((m) => ({ default: m.RetroNowPlaying })),
);
const RetroPlayButton = lazy(() =>
  import("./retro").then((m) => ({ default: m.RetroPlayButton })),
);
const RetroVolumeControl = lazy(() =>
  import("./retro").then((m) => ({ default: m.RetroVolumeControl })),
);
const RetroStatusInfo = lazy(() =>
  import("./retro").then((m) => ({ default: m.RetroStatusInfo })),
);

const DarkHeader = lazy(() =>
  import("./dark").then((m) => ({ default: m.DarkHeader })),
);
const DarkNowPlaying = lazy(() =>
  import("./dark").then((m) => ({ default: m.DarkNowPlaying })),
);
const DarkPlayButton = lazy(() =>
  import("./dark").then((m) => ({ default: m.DarkPlayButton })),
);
const DarkVolumeControl = lazy(() =>
  import("./dark").then((m) => ({ default: m.DarkVolumeControl })),
);
const DarkStatusInfo = lazy(() =>
  import("./dark").then((m) => ({ default: m.DarkStatusInfo })),
);

const RadioShapePlayer = lazy(() =>
  import("./radioShape").then((m) => ({ default: m.RadioShapePlayer })),
);

const IOSHeader = lazy(() =>
  import("./ios").then((m) => ({ default: m.IOSHeader })),
);
const IOSNowPlaying = lazy(() =>
  import("./ios").then((m) => ({ default: m.IOSNowPlaying })),
);
const IOSPlayButton = lazy(() =>
  import("./ios").then((m) => ({ default: m.IOSPlayButton })),
);
const IOSVolumeControl = lazy(() =>
  import("./ios").then((m) => ({ default: m.IOSVolumeControl })),
);
const IOSStatusInfo = lazy(() =>
  import("./ios").then((m) => ({ default: m.IOSStatusInfo })),
);

const PastelHeader = lazy(() =>
  import("./pastel").then((m) => ({ default: m.PastelHeader })),
);
const PastelNowPlaying = lazy(() =>
  import("./pastel").then((m) => ({ default: m.PastelNowPlaying })),
);
const PastelPlayButton = lazy(() =>
  import("./pastel").then((m) => ({ default: m.PastelPlayButton })),
);
const PastelVolumeControl = lazy(() =>
  import("./pastel").then((m) => ({ default: m.PastelVolumeControl })),
);
const PastelStatusInfo = lazy(() =>
  import("./pastel").then((m) => ({ default: m.PastelStatusInfo })),
);

const VinylHeader = lazy(() =>
  import("./vinyl").then((m) => ({ default: m.VinylHeader })),
);
const VinylNowPlaying = lazy(() =>
  import("./vinyl").then((m) => ({ default: m.VinylNowPlaying })),
);
const VinylPlayButton = lazy(() =>
  import("./vinyl").then((m) => ({ default: m.VinylPlayButton })),
);
const VinylVolumeControl = lazy(() =>
  import("./vinyl").then((m) => ({ default: m.VinylVolumeControl })),
);
const VinylStatusInfo = lazy(() =>
  import("./vinyl").then((m) => ({ default: m.VinylStatusInfo })),
);

const IPodPlayer = lazy(() =>
  import("./ipod").then((m) => ({ default: m.IPodPlayer })),
);

const RetroRadioPlayer = lazy(() =>
  import("./retroRadio").then((m) => ({ default: m.RetroRadioPlayer })),
);

interface Metadata {
  serverTitle: string;
  currentSong: string;
  listeners: number;
  maxListeners: number;
  bitrate: number;
  sampleRate: number;
  status: number;
  genre: string;
  url: string;
}

interface RadioPlayerProps {
  streamUrl: string;
}

export function RadioPlayer({ streamUrl }: RadioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [metadata, setMetadata] = useState<Metadata>({
    serverTitle: "Loading...",
    currentSong: "Fetching metadata...",
    listeners: 0,
    maxListeners: 0,
    bitrate: 0,
    sampleRate: 0,
    status: 0,
    genre: "",
    url: "",
  });
  const soundRef = useRef<Howl | null>(null);
  const animationRef = useRef<number[]>([]);

  useEffect(() => {
    soundRef.current = new Howl({
      src: [streamUrl],
      html5: true,
      format: ["mp3", "aac"],
      volume: volume,
      onplay: () => {
        setIsLoading(false);
      },
      onload: () => {
        setIsLoading(false);
      },
      onloaderror: (id, error) => {
        console.error("Load error:", error);
        setIsLoading(false);
      },
      onplayerror: (id, error) => {
        console.error("Play error:", error);
        setIsLoading(false);
      },
    });

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, [streamUrl]);

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.volume(isMuted ? 0 : volume);
    }
  }, [volume, isMuted]);

  useEffect(() => {
    const interval = setInterval(() => {
      animationRef.current = Array.from({ length: 5 }, () =>
        isPlaying ? Math.random() * 100 : 0,
      );
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch("/api/metadata");
        const result = (await response.json()) as {
          success: boolean;
          data?: Metadata;
        };
        if (result.success && result.data) {
          setMetadata(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch metadata:", error);
      }
    };

    fetchMetadata();

    let interval: number | null = setInterval(fetchMetadata, 10000);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (interval) {
          clearInterval(interval);
          interval = null;
        }
      } else {
        fetchMetadata();
        if (!interval) {
          interval = setInterval(fetchMetadata, 10000);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (interval) clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const isServerOnline = metadata.status === 1;

  const togglePlay = () => {
    if (!soundRef.current || !isServerOnline) return;

    if (isPlaying) {
      soundRef.current.stop();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      soundRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const { theme } = useTheme();

  // Theme component mapping for better maintainability
  const themeComponents = {
    cheerful: {
      Header: CheerfulHeader,
      NowPlaying: CheerfulNowPlaying,
      PlayButton: CheerfulPlayButton,
      VolumeControl: CheerfulVolumeControl,
      StatusInfo: CheerfulStatusInfo,
    },
    retro: {
      Header: RetroHeader,
      NowPlaying: RetroNowPlaying,
      PlayButton: RetroPlayButton,
      VolumeControl: RetroVolumeControl,
      StatusInfo: RetroStatusInfo,
    },
    dark: {
      Header: DarkHeader,
      NowPlaying: DarkNowPlaying,
      PlayButton: DarkPlayButton,
      VolumeControl: DarkVolumeControl,
      StatusInfo: DarkStatusInfo,
    },
    ios: {
      Header: IOSHeader,
      NowPlaying: IOSNowPlaying,
      PlayButton: IOSPlayButton,
      VolumeControl: IOSVolumeControl,
      StatusInfo: IOSStatusInfo,
    },
    pastel: {
      Header: PastelHeader,
      NowPlaying: PastelNowPlaying,
      PlayButton: PastelPlayButton,
      VolumeControl: PastelVolumeControl,
      StatusInfo: PastelStatusInfo,
    },
    vinyl: {
      Header: VinylHeader,
      NowPlaying: VinylNowPlaying,
      PlayButton: VinylPlayButton,
      VolumeControl: VinylVolumeControl,
      StatusInfo: VinylStatusInfo,
    },
    minimalist: {
      Header: RadioHeader,
      NowPlaying: NowPlaying,
      PlayButton: PlayButton,
      VolumeControl: VolumeControl,
      StatusInfo: StatusInfo,
    },
  };

  // Theme styling configuration
  const themeStyles = {
    cheerful: {
      container:
        "min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 dark:from-blue-950 dark:via-purple-950 dark:to-indigo-950 flex items-center justify-center p-4 sm:p-6",
      card: "bg-white/90 dark:bg-base-200/90 backdrop-blur-sm rounded-3xl border-4 border-purple-300 dark:border-purple-700 overflow-hidden shadow-2xl shadow-purple-500/20",
    },
    retro: {
      container:
        "min-h-screen bg-amber-200 dark:bg-amber-950 flex items-center justify-center p-4 sm:p-6",
      card: "bg-amber-50 dark:bg-black border-8 border-amber-800 dark:border-amber-600 overflow-hidden shadow-[8px_8px_0px_0px_rgba(120,53,15,1)]",
    },
    dark: {
      container:
        "min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center justify-center p-4 sm:p-6",
      card: "bg-gradient-to-b from-gray-900 to-black backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden shadow-2xl shadow-cyan-500/10",
    },
    ios: {
      container:
        "min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-950 dark:to-black flex items-center justify-center p-4 sm:p-6",
      card: "bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden shadow-2xl",
    },
    pastel: {
      container:
        "min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-pink-950 dark:via-purple-950 dark:to-blue-950 flex items-center justify-center p-4 sm:p-6",
      card: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border-4 border-pink-300 dark:border-pink-800 overflow-hidden shadow-2xl shadow-pink-300/30 dark:shadow-pink-900/30",
    },
    vinyl: {
      container:
        "min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center justify-center p-4 sm:p-6",
      card: "bg-gradient-to-b from-gray-900 to-black backdrop-blur-sm rounded-2xl border-2 border-yellow-600/40 overflow-hidden shadow-2xl shadow-yellow-600/20",
    },
    minimalist: {
      container:
        "min-h-screen bg-base-300 flex items-center justify-center p-4 sm:p-6",
      card: "bg-base-200/80 backdrop-blur-sm rounded-2xl border border-base-300 overflow-hidden",
    },
  };

  // Get components for current theme (fallback to minimalist)
  const currentTheme =
    theme === "radio" || theme === "ipod" || theme === "retroradio"
      ? "minimalist"
      : theme;
  const components =
    themeComponents[currentTheme] || themeComponents.minimalist;
  const styles = themeStyles[currentTheme] || themeStyles.minimalist;

  const Header = components.Header;
  const NowPlayingComponent = components.NowPlaying;
  const PlayButtonComponent = components.PlayButton;
  const VolumeControlComponent = components.VolumeControl;
  const StatusInfoComponent = components.StatusInfo;
  const containerClass = styles.container;
  const cardClass = styles.card;

  // iPod Classic theme uses completely different layout
  if (theme === "ipod") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-black flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md relative">
          <ThemeSelector />
          <Suspense
            fallback={
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 animate-pulse">
                <div className="h-96 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-slate-400/30 border-t-slate-400 rounded-full animate-spin"></div>
                </div>
              </div>
            }
          >
            <IPodPlayer
              isPlaying={isPlaying}
              isLoading={isLoading}
              volume={volume}
              isMuted={isMuted}
              isServerOnline={isServerOnline}
              metadata={metadata}
              onTogglePlay={togglePlay}
              onVolumeChange={handleVolumeChange}
              onToggleMute={toggleMute}
            />
          </Suspense>
        </div>
      </div>
    );
  }

  // Retro Radio theme uses completely different layout
  if (theme === "retroradio") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-2xl relative">
          <ThemeSelector />
          <Suspense
            fallback={
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 animate-pulse">
                <div className="h-96 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
                </div>
              </div>
            }
          >
            <RetroRadioPlayer
              isPlaying={isPlaying}
              isLoading={isLoading}
              volume={volume}
              isMuted={isMuted}
              isServerOnline={isServerOnline}
              metadata={metadata}
              onTogglePlay={togglePlay}
              onVolumeChange={handleVolumeChange}
              onToggleMute={toggleMute}
            />
          </Suspense>
        </div>
      </div>
    );
  }

  // Radio Shape theme uses completely different layout
  if (theme === "radio") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-950 via-stone-900 to-black flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md relative">
          <ThemeSelector />
          <Suspense
            fallback={
              <div className="bg-orange-900/50 backdrop-blur-sm rounded-3xl p-8 animate-pulse">
                <div className="h-64 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-orange-400/30 border-t-orange-400 rounded-full animate-spin"></div>
                </div>
              </div>
            }
          >
            <RadioShapePlayer
              streamUrl={streamUrl}
              metadata={metadata}
              isPlaying={isPlaying}
              isLoading={isLoading}
              volume={volume}
              isMuted={isMuted}
              onTogglePlay={togglePlay}
              onVolumeChange={handleVolumeChange}
              onToggleMute={toggleMute}
              isServerOnline={isServerOnline}
            />
          </Suspense>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <div className="w-full max-w-sm relative">
        <ThemeSelector />
        <div className={cardClass}>
          <Suspense fallback={<HeaderLoadingFallback />}>
            <Header serverTitle={metadata.serverTitle} genre={metadata.genre} />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <NowPlayingComponent currentSong={metadata.currentSong} />
          </Suspense>

          <div className="px-6 py-8 space-y-6">
            <Suspense fallback={<PlayButtonLoadingFallback />}>
              <PlayButtonComponent
                isPlaying={isPlaying}
                isLoading={isLoading}
                isDisabled={!isServerOnline}
                onToggle={togglePlay}
              />
            </Suspense>

            {/* <Suspense fallback={<VolumeControlLoadingFallback />}>
              <VolumeControlComponent
                volume={volume}
                isMuted={isMuted}
                onVolumeChange={handleVolumeChange}
                onToggleMute={toggleMute}
              />
            </Suspense> */}

            <Suspense fallback={<StatusInfoLoadingFallback />}>
              <StatusInfoComponent
                isOnline={isServerOnline}
                listeners={metadata.listeners}
                maxListeners={metadata.maxListeners}
                bitrate={metadata.bitrate}
                sampleRate={metadata.sampleRate}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
