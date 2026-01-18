import { Play, Square } from "lucide-react";

interface PlayButtonProps {
  isPlaying: boolean;
  isLoading: boolean;
  isDisabled: boolean;
  onToggle: () => void;
}

export function PlayButton({
  isPlaying,
  isLoading,
  isDisabled,
  onToggle,
}: PlayButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onToggle}
        disabled={isLoading || isDisabled}
        className="w-20 h-20 rounded-full bg-primary hover:bg-primary-focus disabled:bg-base-300 text-primary-content transition-all duration-200 active:scale-95 disabled:cursor-not-allowed flex items-center justify-center touch-manipulation"
        title={isDisabled ? "Server is offline" : ""}
      >
        {isLoading ? (
          <div className="w-8 h-8 border-3 border-primary-content/20 border-t-primary-content rounded-full animate-spin" />
        ) : isPlaying ? (
          <Square className="w-8 h-8" fill="currentColor" />
        ) : (
          <Play className="w-8 h-8 ml-0.5" fill="currentColor" />
        )}
      </button>
    </div>
  );
}
