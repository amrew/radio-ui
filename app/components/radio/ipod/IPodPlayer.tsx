import {
  Play,
  Square,
  SkipBack,
  SkipForward,
  Pause,
  Users,
  Activity,
  Radio,
  Mic2Icon,
} from "lucide-react";

interface Metadata {
  serverTitle: string;
  currentSong: string;
  listeners: number;
  maxListeners: number;
  bitrate: number;
  sampleRate: number;
  status: number;
  genre?: string;
}

interface IPodPlayerProps {
  isPlaying: boolean;
  isLoading: boolean;
  volume: number;
  isMuted: boolean;
  isServerOnline: boolean;
  metadata: Metadata;
  onTogglePlay: () => void;
  onVolumeChange: (volume: number) => void;
  onToggleMute: () => void;
}

export function IPodPlayer({
  isPlaying,
  isLoading,
  isServerOnline,
  metadata,
  onTogglePlay,
}: IPodPlayerProps) {
  const volumeLevel = 0;

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* iPod Body */}
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-[2.5rem] p-6 shadow-2xl border-4 border-gray-300 relative">
        {/* Screen Area */}
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 mb-6 shadow-inner border-2 border-gray-700">
          {/* Screen Display */}
          <div className="bg-gradient-to-b from-green-200 to-green-100 rounded-lg p-4 min-h-[280px] font-mono text-black border-2 border-green-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-black">
              <div className="flex items-center gap-1">
                <Radio className="w-4 h-4" strokeWidth={2.5} />
                <span className="text-xs font-bold uppercase tracking-wide">
                  Radio
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div
                  className={`w-2 h-2 rounded-full ${isServerOnline ? "bg-black animate-pulse" : "bg-gray-400"}`}
                />
                <span className="text-[10px] font-bold">
                  {isServerOnline ? "LIVE" : "OFF"}
                </span>
              </div>
            </div>

            {/* Station Info */}
            <div className="mb-4">
              <div className="text-xs font-bold mb-1 uppercase tracking-wide">
                Station:
              </div>
              <div className="text-sm font-black truncate">
                {metadata.serverTitle}
              </div>
            </div>

            {/* Now Playing */}
            <div className="mb-4">
              <div className="flex items-center gap-1 mb-1">
                <Mic2Icon className="w-3 h-3" strokeWidth={2.5} />
                <div className="text-xs font-bold uppercase tracking-wide">
                  Now Playing:
                </div>
              </div>
              <div className="text-sm font-bold leading-tight h-12 overflow-hidden">
                {metadata.currentSong}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold">
              <div className="bg-black/10 rounded p-2">
                <Users className="w-3 h-3 mx-auto mb-1" strokeWidth={2.5} />
                <div>{metadata.listeners}</div>
                <div className="text-[8px] opacity-70">LSTNRS</div>
              </div>
              <div className="bg-black/10 rounded p-2">
                <Activity className="w-3 h-3 mx-auto mb-1" strokeWidth={2.5} />
                <div>{metadata.bitrate}</div>
                <div className="text-[8px] opacity-70">KBPS</div>
              </div>
              <div className="bg-black/10 rounded p-2">
                <Radio className="w-3 h-3 mx-auto mb-1" strokeWidth={2.5} />
                <div>{(metadata.sampleRate / 1000).toFixed(1)}</div>
                <div className="text-[8px] opacity-70">KHZ</div>
              </div>
            </div>

            {/* Playback Status */}
            <div className="mt-4 pt-3 border-t-2 border-black text-center">
              <div className="text-xs font-bold">
                {isLoading ? (
                  <span className="animate-pulse">LOADING...</span>
                ) : isPlaying ? (
                  <span className="flex items-center justify-center gap-1">
                    <span className="inline-block w-1 h-3 bg-black animate-pulse" />
                    <span className="inline-block w-1 h-3 bg-black animate-pulse delay-75" />
                    <span className="inline-block w-1 h-3 bg-black animate-pulse delay-150" />
                    <span className="ml-2">PLAYING</span>
                  </span>
                ) : (
                  <span>PAUSED</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Click Wheel */}
        <div className="relative">
          {/* Outer Ring */}
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 shadow-2xl border-4 border-gray-400 relative">
            {/* Touch Surface */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner">
              {/* Center Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button
                  onClick={onTogglePlay}
                  disabled={isLoading || !isServerOnline}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 active:from-gray-400 active:to-gray-500 disabled:from-gray-300 disabled:to-gray-400 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg border-2 border-gray-400 flex items-center justify-center transition-all"
                  title={!isServerOnline ? "Server is offline" : ""}
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-gray-500/30 border-t-gray-700 rounded-full animate-spin" />
                  ) : isPlaying ? (
                    <Pause
                      className="w-7 h-7 text-gray-700"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ) : (
                    <Play
                      className="w-7 h-7 ml-0.5 text-gray-700"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  )}
                </button>
              </div>

              {/* Control Buttons on Wheel */}
              {/* Top - Menu (Decorative) */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2">
                <div className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">
                  Menu
                </div>
              </div>

              {/* Right - Next (Decorative) */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <SkipForward
                  className="w-5 h-5 text-gray-600"
                  strokeWidth={2}
                />
              </div>

              {/* Bottom - Play/Pause Label */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                <div className="text-[10px] font-bold text-gray-600 uppercase tracking-wider flex items-center gap-1">
                  <Play className="w-3 h-3" strokeWidth={2} />
                  <Pause className="w-3 h-3" strokeWidth={2} />
                </div>
              </div>

              {/* Left - Previous (Decorative) */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2">
                <SkipBack className="w-5 h-5 text-gray-600" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>

        {/* iPod Logo */}
        <div className="text-center mt-4">
          <div className="text-xs font-bold text-gray-600 tracking-wider">
            iPod
          </div>
        </div>
      </div>
    </div>
  );
}
