import { Volume2, VolumeX } from "lucide-react";

interface VolumeControlProps {
  volume: number;
  isMuted: boolean;
  onVolumeChange: (volume: number) => void;
  onToggleMute: () => void;
}

export function VolumeControl({
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute,
}: VolumeControlProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onVolumeChange(parseFloat(e.target.value));
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMute}
          className="text-base-content/60 hover:text-base-content transition-colors p-2 -ml-2 touch-manipulation"
          aria-label="Toggle mute"
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-5 h-5" strokeWidth={2} />
          ) : (
            <Volume2 className="w-5 h-5" strokeWidth={2} />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleChange}
          className="range range-primary range-xs"
        />
        <span className="text-base-content/60 text-sm font-medium w-10 text-right">
          {isMuted ? "0" : Math.round(volume * 100)}%
        </span>
      </div>
    </div>
  );
}
