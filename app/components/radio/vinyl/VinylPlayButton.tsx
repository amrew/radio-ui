import { Play, Square, Disc3 } from "lucide-react";

interface VinylPlayButtonProps {
  isPlaying: boolean;
  isLoading: boolean;
  isDisabled: boolean;
  onToggle: () => void;
}

export function VinylPlayButton({
  isPlaying,
  isLoading,
  isDisabled,
  onToggle,
}: VinylPlayButtonProps) {
  return (
    <div className="flex justify-center relative">
      {/* Vinyl Record */}
      <div className="relative">
        <button
          onClick={onToggle}
          disabled={isLoading || isDisabled}
          className="relative w-32 h-32 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 hover:from-gray-800 hover:via-black hover:to-gray-700 disabled:from-gray-700 disabled:to-gray-600 text-yellow-600 transition-all duration-300 active:scale-95 disabled:cursor-not-allowed flex items-center justify-center shadow-2xl border-4 border-yellow-600/40"
          title={isDisabled ? "Server is offline" : ""}
          style={{
            background:
              "radial-gradient(circle at center, #1a1a1a 0%, #000000 30%, #1a1a1a 60%, #000000 100%)",
          }}
        >
          {/* Vinyl grooves effect */}
          <div
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background:
                "repeating-radial-gradient(circle at center, transparent 0px, transparent 3px, rgba(255,215,0,0.2) 3px, rgba(255,215,0,0.2) 4px)",
            }}
          />

          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-700 via-yellow-600 to-yellow-800 border-2 border-yellow-500 flex items-center justify-center">
              {isLoading ? (
                <div className="w-8 h-8 border-3 border-yellow-900/30 border-t-yellow-900 rounded-full animate-spin" />
              ) : isPlaying ? (
                <Square
                  className="w-7 h-7 text-black"
                  fill="currentColor"
                  strokeWidth={0}
                />
              ) : (
                <Play
                  className="w-7 h-7 ml-0.5 text-black"
                  fill="currentColor"
                  strokeWidth={0}
                />
              )}
            </div>
          </div>

          {/* Spinning indicator */}
          {isPlaying && (
            <Disc3
              className="absolute inset-0 w-full h-full text-yellow-600/20 animate-spin"
              style={{ animationDuration: "3s" }}
              strokeWidth={0.5}
            />
          )}
        </button>
      </div>
    </div>
  );
}
