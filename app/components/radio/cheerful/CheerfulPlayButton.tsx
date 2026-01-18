import { Play, Square, Zap } from "lucide-react";

interface CheerfulPlayButtonProps {
  isPlaying: boolean;
  isLoading: boolean;
  isDisabled: boolean;
  onToggle: () => void;
}

export function CheerfulPlayButton({
  isPlaying,
  isLoading,
  isDisabled,
  onToggle,
}: CheerfulPlayButtonProps) {
  return (
    <div className="flex justify-center">
      <div className="relative">
        {isPlaying && !isLoading && (
          <>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-ping opacity-75" />
            <Zap
              className="absolute -top-2 -right-2 w-6 h-6 text-cyan-400 animate-bounce"
              fill="currentColor"
            />
          </>
        )}
        <button
          onClick={onToggle}
          disabled={isLoading || isDisabled}
          className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 disabled:from-gray-300 disabled:via-gray-400 disabled:to-gray-500 text-white transition-all duration-300 active:scale-95 disabled:cursor-not-allowed flex items-center justify-center touch-manipulation shadow-2xl hover:shadow-blue-500/50 transform hover:scale-110"
          title={isDisabled ? "Server is offline" : ""}
        >
          {isLoading ? (
            <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          ) : isPlaying ? (
            <Square className="w-10 h-10" fill="currentColor" strokeWidth={0} />
          ) : (
            <Play
              className="w-10 h-10 ml-1"
              fill="currentColor"
              strokeWidth={0}
            />
          )}
        </button>
      </div>
    </div>
  );
}
