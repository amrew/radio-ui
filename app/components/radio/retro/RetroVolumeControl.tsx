import { Volume2, VolumeX } from "lucide-react";

interface RetroVolumeControlProps {
  volume: number;
  isMuted: boolean;
  onVolumeChange: (volume: number) => void;
  onToggleMute: () => void;
}

export function RetroVolumeControl({
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute,
}: RetroVolumeControlProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onVolumeChange(parseFloat(e.target.value));
  };

  const volumeLevel = isMuted ? 0 : volume;
  const bars = Math.ceil(volumeLevel * 10);

  return (
    <div className="space-y-3 bg-amber-100 dark:bg-amber-950 border-4 border-amber-800 dark:border-amber-600 p-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
      <div className="flex items-center gap-2 justify-center mb-3">
        <div className="w-2 h-2 bg-amber-800 dark:bg-amber-600" />
        <span
          className="text-xs font-black text-amber-900 dark:text-amber-100 uppercase tracking-widest"
          style={{ fontFamily: "monospace" }}
        >
          VOLUME
        </span>
        <div className="w-2 h-2 bg-amber-800 dark:bg-amber-600" />
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMute}
          className="p-2 bg-amber-800 dark:bg-amber-700 hover:bg-amber-700 dark:hover:bg-amber-600 text-amber-100 border-2 border-amber-900 shadow-[2px_2px_0px_0px_rgba(120,53,15,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all"
          aria-label="Toggle mute"
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-5 h-5" strokeWidth={2.5} />
          ) : (
            <Volume2 className="w-5 h-5" strokeWidth={2.5} />
          )}
        </button>

        <div className="flex-1">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleChange}
            className="w-full h-3 bg-amber-800 dark:bg-amber-900 appearance-none cursor-pointer border-2 border-amber-900"
            style={{
              background: `linear-gradient(to right, #92400e 0%, #92400e ${volumeLevel * 100}%, #451a03 ${volumeLevel * 100}%, #451a03 100%)`,
            }}
          />

          <div className="flex gap-1 mt-2 justify-center">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`w-2 transition-all ${
                  i < bars
                    ? "bg-green-500 h-3 shadow-[0_0_4px_rgba(34,197,94,0.8)]"
                    : "bg-amber-800/30 dark:bg-amber-900/30 h-2"
                }`}
                style={{
                  height: i < bars ? `${(i + 1) * 3}px` : "8px",
                }}
              />
            ))}
          </div>
        </div>

        <div
          className="text-sm font-black w-12 text-center px-2 py-1 bg-black border-2 border-amber-800 text-green-400"
          style={{
            fontFamily: "monospace",
            textShadow: "0 0 8px rgba(34, 197, 94, 0.6)",
          }}
        >
          {Math.round(volumeLevel * 100)}
        </div>
      </div>
    </div>
  );
}
