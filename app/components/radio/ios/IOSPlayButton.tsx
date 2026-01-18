import { Play, Square } from "lucide-react";

interface IOSPlayButtonProps {
  isPlaying: boolean;
  isLoading: boolean;
  isDisabled: boolean;
  onToggle: () => void;
}

export function IOSPlayButton({
  isPlaying,
  isLoading,
  isDisabled,
  onToggle,
}: IOSPlayButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onToggle}
        disabled={isLoading || isDisabled}
        className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-400 text-white transition-all duration-200 active:scale-95 disabled:cursor-not-allowed flex items-center justify-center touch-manipulation shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40"
        title={isDisabled ? "Server is offline" : ""}
      >
        {isLoading ? (
          <div className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin" />
        ) : isPlaying ? (
          <Square className="w-8 h-8" fill="currentColor" strokeWidth={0} />
        ) : (
          <Play
            className="w-8 h-8 ml-0.5"
            fill="currentColor"
            strokeWidth={0}
          />
        )}
      </button>
    </div>
  );
}
