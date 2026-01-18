import {
  Play,
  Square,
  Volume2,
  VolumeX,
  Radio,
  Users,
  Activity,
  Music2,
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
  genre: string;
  url: string;
}

interface RadioShapePlayerProps {
  streamUrl: string;
  metadata: Metadata;
  isPlaying: boolean;
  isLoading: boolean;
  volume: number;
  isMuted: boolean;
  onTogglePlay: () => void;
  onVolumeChange: (volume: number) => void;
  onToggleMute: () => void;
  isServerOnline: boolean;
}

export function RadioShapePlayer({
  streamUrl,
  metadata,
  isPlaying,
  isLoading,
  volume,
  isMuted,
  onTogglePlay,
  onVolumeChange,
  onToggleMute,
  isServerOnline,
}: RadioShapePlayerProps) {
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onVolumeChange(parseFloat(e.target.value));
  };

  const volumeLevel = isMuted ? 0 : volume;

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Radio Body - Bentuk Radio Klasik */}
      <div className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-orange-950 rounded-3xl p-8 shadow-2xl border-8 border-orange-950">
        {/* Texture Wood Effect */}
        <div
          className="absolute inset-0 rounded-3xl opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
          }}
        />

        {/* Speaker Grill - Bagian Atas */}
        <div className="relative mb-6 bg-gradient-to-br from-gray-800 to-black rounded-2xl p-6 border-4 border-gray-900 shadow-inner">
          {/* Grill Pattern */}
          <div className="absolute inset-0 grid grid-cols-12 gap-1 p-2">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="bg-gray-700 rounded-full opacity-40" />
            ))}
          </div>

          {/* Display Area */}
          <div className="relative z-10 text-center space-y-2">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Radio className="w-5 h-5 text-orange-400" strokeWidth={2} />
              <h2 className="text-orange-400 text-sm font-bold uppercase tracking-wider">
                {metadata.serverTitle}
              </h2>
            </div>

            {/* Now Playing Display */}
            <div className="bg-black/80 rounded-lg p-3 border-2 border-orange-900">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Mic2Icon
                  className="w-4 h-4 text-green-400 animate-pulse"
                  strokeWidth={2}
                />
                <span className="text-green-400 text-xs font-mono uppercase">
                  Now Playing
                </span>
              </div>
              <p className="text-green-300 text-sm font-mono leading-tight">
                {metadata.currentSong}
              </p>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="relative space-y-6">
          {/* Play Button - Tombol Besar di Tengah */}
          <div className="flex justify-center">
            <button
              onClick={onTogglePlay}
              disabled={isLoading || !isServerOnline}
              className="relative w-32 h-32 rounded-full bg-gradient-to-br from-red-600 via-red-700 to-red-900 hover:from-red-500 hover:via-red-600 hover:to-red-800 disabled:from-gray-600 disabled:to-gray-800 text-white transition-all duration-200 active:scale-95 disabled:cursor-not-allowed flex items-center justify-center shadow-2xl border-8 border-red-950"
              style={{
                boxShadow:
                  "inset 0 2px 4px rgba(255,255,255,0.2), 0 8px 16px rgba(0,0,0,0.5)",
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/10" />
              {isLoading ? (
                <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
              ) : isPlaying ? (
                <Square
                  className="w-12 h-12 relative z-10"
                  fill="currentColor"
                  strokeWidth={0}
                />
              ) : (
                <Play
                  className="w-12 h-12 ml-1 relative z-10"
                  fill="currentColor"
                  strokeWidth={0}
                />
              )}
            </button>
          </div>

          {/* Volume Knob Area */}
          {/* <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-center">
                <span className="text-orange-300 text-xs font-bold uppercase tracking-wider">
                  Volume
                </span>
              </div>
              <div className="bg-black/40 rounded-xl p-4 border-2 border-orange-900">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volumeLevel}
                  onChange={handleVolumeChange}
                  className="w-full h-2 bg-orange-950 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #ea580c 0%, #ea580c ${volumeLevel * 100}%, #451a03 ${volumeLevel * 100}%, #451a03 100%)`,
                  }}
                />
                <div className="text-center mt-2">
                  <span className="text-orange-400 text-lg font-bold font-mono">
                    {Math.round(volumeLevel * 100)}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-center">
                <span className="text-orange-300 text-xs font-bold uppercase tracking-wider">
                  Mute
                </span>
              </div>
              <div className="bg-black/40 rounded-xl p-4 border-2 border-orange-900 flex items-center justify-center">
                <button
                  onClick={onToggleMute}
                  className={`w-16 h-16 rounded-full transition-all transform hover:scale-110 active:scale-95 ${
                    isMuted || volume === 0
                      ? "bg-gray-700 text-gray-400"
                      : "bg-gradient-to-br from-orange-500 to-orange-700 text-white shadow-lg"
                  }`}
                  style={{
                    boxShadow: isMuted
                      ? "none"
                      : "inset 0 2px 4px rgba(255,255,255,0.2), 0 4px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-8 h-8 mx-auto" strokeWidth={2} />
                  ) : (
                    <Volume2 className="w-8 h-8 mx-auto" strokeWidth={2} />
                  )}
                </button>
              </div>
            </div>
          </div> */}

          {/* Status Indicators */}
          <div className="bg-black/40 rounded-xl p-4 border-2 border-orange-900">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <div
                  className={`w-3 h-3 rounded-full mx-auto mb-1 ${
                    isServerOnline
                      ? "bg-green-500 animate-pulse shadow-lg shadow-green-500/50"
                      : "bg-red-500"
                  }`}
                />
                <span className="text-orange-300 text-xs font-bold uppercase block">
                  {isServerOnline ? "Live" : "Off"}
                </span>
              </div>
              <div>
                <Users
                  className="w-4 h-4 mx-auto mb-1 text-orange-400"
                  strokeWidth={2}
                />
                <span className="text-orange-300 text-xs font-mono">
                  {metadata.listeners}/{metadata.maxListeners}
                </span>
              </div>
              <div>
                <Activity
                  className="w-4 h-4 mx-auto mb-1 text-orange-400"
                  strokeWidth={2}
                />
                <span className="text-orange-300 text-xs font-mono">
                  {metadata.bitrate}kbps
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
