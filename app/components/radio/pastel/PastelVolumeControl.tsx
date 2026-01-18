import { Volume2, VolumeX, Sparkles } from "lucide-react";

interface PastelVolumeControlProps {
  volume: number;
  isMuted: boolean;
  onVolumeChange: (volume: number) => void;
  onToggleMute: () => void;
}

export function PastelVolumeControl({
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute,
}: PastelVolumeControlProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onVolumeChange(parseFloat(e.target.value));
  };

  const volumeLevel = isMuted ? 0 : volume;

  return (
    <div className="space-y-4 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-blue-950/20 rounded-3xl p-5 border-4 border-pink-200 dark:border-pink-800 shadow-lg">
      <div className="flex items-center gap-2 justify-center">
        <span className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
          Volume
        </span>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleMute}
          className={`p-3 rounded-full transition-all transform hover:scale-110 active:scale-95 border-2 ${
            isMuted || volume === 0
              ? "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 border-gray-300 dark:border-gray-600"
              : "bg-gradient-to-br from-pink-300 to-purple-300 dark:from-pink-700 dark:to-purple-700 text-white border-pink-400 dark:border-pink-600 shadow-lg shadow-pink-300/50 dark:shadow-pink-900/30"
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
            className="w-full h-3 bg-pink-200 dark:bg-pink-900 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, 
                rgb(249, 168, 212) 0%, 
                rgb(216, 180, 254) ${volumeLevel * 50}%, 
                rgb(147, 197, 253) ${volumeLevel * 100}%, 
                rgb(251, 207, 232) ${volumeLevel * 100}%, 
                rgb(251, 207, 232) 100%)`,
            }}
          />
        </div>
        <div className="text-base font-bold w-12 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          {Math.round(volumeLevel * 100)}
        </div>
      </div>
    </div>
  );
}
