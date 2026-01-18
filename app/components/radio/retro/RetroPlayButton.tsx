import { Play, Square } from "lucide-react";

interface RetroPlayButtonProps {
  isPlaying: boolean;
  isLoading: boolean;
  isDisabled: boolean;
  onToggle: () => void;
}

export function RetroPlayButton({
  isPlaying,
  isLoading,
  isDisabled,
  onToggle,
}: RetroPlayButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onToggle}
        disabled={isLoading || isDisabled}
        className="relative w-28 h-28 bg-gradient-to-b from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 disabled:from-gray-500 disabled:to-gray-700 text-white transition-all duration-200 active:scale-95 disabled:cursor-not-allowed flex items-center justify-center touch-manipulation border-4 border-red-900 dark:border-red-950 shadow-[6px_6px_0px_0px_rgba(127,29,29,1)] hover:shadow-[4px_4px_0px_0px_rgba(127,29,29,1)] active:shadow-[2px_2px_0px_0px_rgba(127,29,29,1)] active:translate-x-1 active:translate-y-1"
        style={{
          clipPath:
            "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)",
        }}
        title={isDisabled ? "Server is offline" : ""}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
          style={{
            clipPath:
              "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)",
          }}
        />
        {isLoading ? (
          <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-sm animate-spin" />
        ) : isPlaying ? (
          <Square
            className="w-12 h-12 relative z-10"
            fill="currentColor"
            strokeWidth={0}
          />
        ) : (
          <Play
            className="w-12 h-12 ml-1 relative z-10"
            fill="currentColor"
            strokeWidth={0}
          />
        )}
      </button>
    </div>
  );
}
