import { Volume2, VolumeX } from "lucide-react";

interface VinylVolumeControlProps {
  volume: number;
  isMuted: boolean;
  onVolumeChange: (volume: number) => void;
  onToggleMute: () => void;
}

export function VinylVolumeControl({
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute,
}: VinylVolumeControlProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onVolumeChange(parseFloat(e.target.value));
  };

  const volumeLevel = isMuted ? 0 : volume;

  return (
    <div className="space-y-4 bg-gradient-to-b from-gray-900 to-black rounded-lg p-5 border border-yellow-600/30 shadow-xl">
      <div className="flex items-center gap-2 justify-center">
        <span
          className="text-sm font-bold text-yellow-600 uppercase tracking-widest"
          style={{ fontFamily: "serif" }}
        >
          Volume
        </span>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleMute}
          className={`p-3 rounded-full transition-all transform hover:scale-110 active:scale-95 border-2 ${
            isMuted || volume === 0
              ? "bg-gray-800 text-gray-500 border-gray-700"
              : "bg-gradient-to-br from-yellow-700 to-yellow-900 text-yellow-100 border-yellow-600 shadow-lg shadow-yellow-600/30"
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
            className="w-full h-2 bg-gray-800 rounded-full appearance-none cursor-pointer border border-yellow-600/30"
            style={{
              background: `linear-gradient(to right, 
                rgb(161, 98, 7) 0%, 
                rgb(202, 138, 4) ${volumeLevel * 100}%, 
                rgb(31, 41, 55) ${volumeLevel * 100}%, 
                rgb(31, 41, 55) 100%)`,
            }}
          />
        </div>
        <div
          className="text-base font-bold w-12 text-center text-yellow-600"
          style={{ fontFamily: "serif" }}
        >
          {Math.round(volumeLevel * 100)}
        </div>
      </div>
    </div>
  );
}
