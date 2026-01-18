import {
  Play,
  Pause,
  Volume2,
  VolumeX,
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

interface RetroRadioPlayerProps {
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

export function RetroRadioPlayer({
  isPlaying,
  isLoading,
  volume,
  isMuted,
  isServerOnline,
  metadata,
  onTogglePlay,
  onVolumeChange,
  onToggleMute,
}: RetroRadioPlayerProps) {
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onVolumeChange(parseFloat(e.target.value));
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Retro Radio Body - Portable Radio Style */}
      <div className="relative bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 rounded-2xl p-6 shadow-2xl border-4 border-slate-950">
        {/* Metal Texture Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]" />

        {/* Top Handle */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-slate-800 to-slate-900 rounded-t-full border-4 border-slate-950 shadow-lg" />

        <div className="relative space-y-4">
          {/* Display Screen */}
          <div className="bg-gradient-to-br from-slate-950 to-black rounded-xl p-4 border-4 border-slate-800 shadow-inner">
            {/* LCD Display */}
            <div className="bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 rounded-lg p-4 border-2 border-cyan-900/50 shadow-lg">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Radio className="w-4 h-4 text-cyan-400" strokeWidth={2.5} />
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                    {metadata.serverTitle}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mic2Icon
                    className="w-3 h-3 text-cyan-500"
                    strokeWidth={2.5}
                  />
                  <div className="text-sm font-semibold text-cyan-300 leading-tight">
                    {metadata.currentSong}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Speaker Grill - Circular Pattern */}
          <div className="bg-gradient-to-br from-slate-900 to-black rounded-xl p-6 border-4 border-slate-800 shadow-inner">
            <div className="grid grid-cols-8 gap-2">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-full bg-gradient-to-br from-slate-800/60 to-slate-950/80 border border-slate-700/30"
                />
              ))}
            </div>
          </div>

          {/* Control Panel */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-xl p-5 border-4 border-slate-800 shadow-inner">
            <div className="flex items-center justify-center gap-4">
              {/* Play Button */}
              <button
                onClick={onTogglePlay}
                disabled={isLoading || !isServerOnline}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 hover:from-blue-500 hover:via-blue-600 hover:to-blue-800 active:from-blue-800 active:via-blue-900 active:to-black disabled:from-gray-700 disabled:to-gray-900 disabled:cursor-not-allowed shadow-xl border-4 border-blue-950 flex items-center justify-center transition-all transform hover:scale-105 active:scale-95"
                title={!isServerOnline ? "Server is offline" : ""}
              >
                {isLoading ? (
                  <div className="w-10 h-10 border-4 border-blue-300/30 border-t-blue-100 rounded-full animate-spin" />
                ) : isPlaying ? (
                  <Pause
                    className="w-12 h-12 text-blue-100"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ) : (
                  <Play
                    className="w-12 h-12 ml-1 text-blue-100"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                )}
              </button>

              {/* Volume Control */}
              {/* <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
                    Volume
                  </span>
                  <span className="text-sm font-black text-cyan-300">
                    {isMuted ? 0 : Math.round(volume * 100)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full h-3 bg-slate-900 rounded-full appearance-none cursor-pointer border-2 border-slate-700"
                  style={{
                    background: `linear-gradient(to right, #06b6d4 0%, #06b6d4 ${(isMuted ? 0 : volume) * 100}%, #0f172a ${(isMuted ? 0 : volume) * 100}%, #0f172a 100%)`,
                  }}
                />
                <button
                  onClick={onToggleMute}
                  className="w-full px-3 py-2 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 hover:from-slate-600 hover:to-slate-800 active:from-slate-900 active:to-black border-2 border-slate-700 shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  {isMuted ? (
                    <VolumeX
                      className="w-4 h-4 text-cyan-400"
                      strokeWidth={2.5}
                    />
                  ) : (
                    <Volume2
                      className="w-4 h-4 text-cyan-400"
                      strokeWidth={2.5}
                    />
                  )}
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
                    {isMuted ? "Unmute" : "Mute"}
                  </span>
                </button>
              </div> */}

              {/* Status Indicator */}
              {/* <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-16 h-16 rounded-full border-4 flex items-center justify-center ${
                    isServerOnline
                      ? "bg-green-900/50 border-green-500"
                      : "bg-red-900/50 border-red-500"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full ${isServerOnline ? "bg-green-400 animate-pulse" : "bg-red-400"}`}
                  />
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wide ${isServerOnline ? "text-green-400" : "text-red-400"}`}
                >
                  {isServerOnline ? "On Air" : "Off Air"}
                </span>
              </div> */}
            </div>
          </div>

          {/* Stats Display */}
          <div className="bg-gradient-to-br from-slate-900 to-black rounded-xl p-3 border-4 border-slate-800 shadow-inner">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-slate-800/50 rounded-lg p-2 border-2 border-slate-700">
                <Users
                  className="w-5 h-5 mx-auto mb-1 text-cyan-400"
                  strokeWidth={2.5}
                />
                <div className="text-base font-black text-cyan-300">
                  {metadata.listeners}
                </div>
                <div className="text-[9px] text-cyan-500 font-bold uppercase tracking-wide">
                  Listeners
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-2 border-2 border-slate-700">
                <Activity
                  className="w-5 h-5 mx-auto mb-1 text-cyan-400"
                  strokeWidth={2.5}
                />
                <div className="text-base font-black text-cyan-300">
                  {metadata.bitrate}
                </div>
                <div className="text-[9px] text-cyan-500 font-bold uppercase tracking-wide">
                  Kbps
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-2 border-2 border-slate-700">
                <Radio
                  className="w-5 h-5 mx-auto mb-1 text-cyan-400"
                  strokeWidth={2.5}
                />
                <div className="text-base font-black text-cyan-300">
                  {(metadata.sampleRate / 1000).toFixed(1)}
                </div>
                <div className="text-[9px] text-cyan-500 font-bold uppercase tracking-wide">
                  kHz
                </div>
              </div>
            </div>
          </div>

          {/* Brand Label */}
          <div className="text-center pt-2">
            <div className="inline-block px-5 py-1.5 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-full border-2 border-slate-500 shadow-lg">
              <div className="text-xs font-black text-cyan-300 uppercase tracking-widest">
                Retro Radio
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
