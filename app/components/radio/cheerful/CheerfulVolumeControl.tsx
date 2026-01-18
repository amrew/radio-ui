import { Volume2, VolumeX, Speaker, X } from "lucide-react";

interface CheerfulVolumeControlProps {
  volume: number;
  isMuted: boolean;
  onVolumeChange: (volume: number) => void;
  onToggleMute: () => void;
}

export function CheerfulVolumeControl({
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute,
}: CheerfulVolumeControlProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onVolumeChange(parseFloat(e.target.value));
  };

  const volumeLevel = isMuted ? 0 : volume;
  const volumeColor =
    volumeLevel > 0.7
      ? "from-green-400 to-emerald-500"
      : volumeLevel > 0.3
        ? "from-cyan-400 to-blue-500"
        : "from-blue-400 to-purple-500";

  return (
    <div className="space-y-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-4 border-2 border-purple-200 dark:border-purple-800">
      <div className="flex items-center gap-2 justify-center mb-2">
        <Speaker className="w-4 h-4 text-purple-500" />
        <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
          Volume
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMute}
          className={`p-3 rounded-full transition-all transform hover:scale-110 active:scale-95 ${
            isMuted || volume === 0
              ? "bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
              : `bg-gradient-to-br ${volumeColor} text-white shadow-lg`
          }`}
          aria-label="Toggle mute"
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-5 h-5" strokeWidth={2.5} />
          ) : (
            <Volume2 className="w-5 h-5" strokeWidth={2.5} />
          )}
        </button>
        <div className="flex-1 relative">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleChange}
            className="range range-sm w-full"
            style={{
              background: `linear-gradient(to right, rgb(59, 130, 246) 0%, rgb(168, 85, 247) ${volumeLevel * 100}%, rgb(229, 231, 235) ${volumeLevel * 100}%, rgb(229, 231, 235) 100%)`,
            }}
          />
        </div>
        <div
          className={`text-sm font-black w-12 text-center px-2 py-1 rounded-lg bg-gradient-to-br ${volumeColor} text-white shadow-md`}
        >
          {isMuted ? (
            <X className="w-5 h-5 inline" />
          ) : (
            Math.round(volume * 100)
          )}
        </div>
      </div>
    </div>
  );
}
