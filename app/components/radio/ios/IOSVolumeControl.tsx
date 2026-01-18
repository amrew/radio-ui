import { Volume2, VolumeX } from "lucide-react";

interface IOSVolumeControlProps {
  volume: number;
  isMuted: boolean;
  onVolumeChange: (volume: number) => void;
  onToggleMute: () => void;
}

export function IOSVolumeControl({
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute,
}: IOSVolumeControlProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onVolumeChange(parseFloat(e.target.value));
  };

  const volumeLevel = isMuted ? 0 : volume;

  return (
    <div className="space-y-3 bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex items-center gap-2 justify-center mb-2">
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          Volume
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMute}
          className={`p-2.5 rounded-full transition-all ${
            isMuted || volume === 0
              ? "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500"
              : "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
          }`}
          aria-label="Toggle mute"
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-5 h-5" strokeWidth={2} />
          ) : (
            <Volume2 className="w-5 h-5" strokeWidth={2} />
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
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, rgb(59, 130, 246) 0%, rgb(79, 70, 229) ${volumeLevel * 100}%, rgb(229, 231, 235) ${volumeLevel * 100}%, rgb(229, 231, 235) 100%)`,
            }}
          />
        </div>
        <div className="text-sm font-semibold w-10 text-center text-gray-700 dark:text-gray-300">
          {Math.round(volumeLevel * 100)}
        </div>
      </div>
    </div>
  );
}
