import { Volume2, VolumeX } from "lucide-react";

interface DarkVolumeControlProps {
  volume: number;
  isMuted: boolean;
  onVolumeChange: (volume: number) => void;
  onToggleMute: () => void;
}

export function DarkVolumeControl({
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute,
}: DarkVolumeControlProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onVolumeChange(parseFloat(e.target.value));
  };

  const volumeLevel = isMuted ? 0 : volume;

  return (
    <div className="space-y-3 bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 border border-gray-800 shadow-inner">
      <div className="flex items-center gap-2 justify-center mb-2">
        <div className="w-1 h-1 bg-cyan-500 rounded-full" />
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Volume
        </span>
        <div className="w-1 h-1 bg-cyan-500 rounded-full" />
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMute}
          className={`p-3 rounded-lg transition-all transform hover:scale-110 active:scale-95 ${
            isMuted || volume === 0
              ? "bg-gray-800 text-gray-600 hover:bg-gray-700"
              : "bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
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
            className="range range-sm w-full"
            style={{
              background: `linear-gradient(to right, rgb(6, 182, 212) 0%, rgb(37, 99, 235) ${volumeLevel * 100}%, rgb(31, 41, 55) ${volumeLevel * 100}%, rgb(31, 41, 55) 100%)`,
            }}
          />
          <div className="flex gap-0.5 mt-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-1 rounded-full transition-all ${
                  i < volumeLevel * 20
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600"
                    : "bg-gray-800"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="text-sm font-bold w-12 text-center px-2 py-1.5 rounded-lg bg-black border border-gray-800 text-cyan-400 shadow-inner">
          {Math.round(volumeLevel * 100)}
        </div>
      </div>
    </div>
  );
}
