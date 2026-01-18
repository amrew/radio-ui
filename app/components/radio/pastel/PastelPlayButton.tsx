import { Play, Square, Heart } from "lucide-react";

interface PastelPlayButtonProps {
  isPlaying: boolean;
  isLoading: boolean;
  isDisabled: boolean;
  onToggle: () => void;
}

export function PastelPlayButton({
  isPlaying,
  isLoading,
  isDisabled,
  onToggle,
}: PastelPlayButtonProps) {
  return (
    <div className="flex justify-center relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-pink-200/30 dark:bg-pink-800/20 animate-ping"></div>
      </div>
      <button
        onClick={onToggle}
        disabled={isLoading || isDisabled}
        className="relative w-24 h-24 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 hover:from-pink-400 hover:via-purple-400 hover:to-blue-400 dark:from-pink-700 dark:via-purple-700 dark:to-blue-700 dark:hover:from-pink-600 dark:hover:via-purple-600 dark:hover:to-blue-600 disabled:from-gray-300 disabled:to-gray-400 text-white transition-all duration-300 active:scale-95 disabled:cursor-not-allowed flex items-center justify-center shadow-2xl shadow-pink-300/50 dark:shadow-pink-900/50 border-4 border-white dark:border-gray-800"
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
        <Heart className="w-5 h-5 text-pink-100 dark:text-pink-300 absolute -top-1 -right-1 fill-current animate-pulse" />
      </button>
    </div>
  );
}
