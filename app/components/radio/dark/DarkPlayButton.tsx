import { Play, Square } from "lucide-react";

interface DarkPlayButtonProps {
  isPlaying: boolean;
  isLoading: boolean;
  isDisabled: boolean;
  onToggle: () => void;
}

export function DarkPlayButton({
  isPlaying,
  isLoading,
  isDisabled,
  onToggle,
}: DarkPlayButtonProps) {
  return (
    <div className="flex justify-center">
      <div className="relative">
        {isPlaying && !isLoading && (
          <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-20" />
        )}
        <button
          onClick={onToggle}
          disabled={isLoading || isDisabled}
          className="relative w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-gray-700 disabled:to-gray-800 text-white transition-all duration-300 active:scale-95 disabled:cursor-not-allowed flex items-center justify-center touch-manipulation shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/60 ring-2 ring-cyan-500/30 hover:ring-cyan-400/50"
          title={isDisabled ? "Server is offline" : ""}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20" />
          {isLoading ? (
            <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          ) : isPlaying ? (
            <Square
              className="w-10 h-10 relative z-10"
              fill="currentColor"
              strokeWidth={0}
            />
          ) : (
            <Play
              className="w-10 h-10 ml-1 relative z-10"
              fill="currentColor"
              strokeWidth={0}
            />
          )}
        </button>
      </div>
    </div>
  );
}
