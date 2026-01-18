import { Music } from "lucide-react";

interface RetroNowPlayingProps {
  currentSong: string;
}

export function RetroNowPlaying({ currentSong }: RetroNowPlayingProps) {
  return (
    <div className="px-6 py-5 bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 border-b-4 border-amber-800 dark:border-amber-600">
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-6 h-6 bg-red-600 rounded-full animate-pulse shadow-lg shadow-red-600/50" />
          <span
            className="text-amber-900 dark:text-amber-100 text-xs font-black uppercase tracking-widest"
            style={{ fontFamily: "monospace" }}
          >
            ● ON AIR ●
          </span>
          <div className="w-6 h-6 bg-red-600 rounded-full animate-pulse shadow-lg shadow-red-600/50" />
        </div>
        <div className="bg-black/90 border-4 border-amber-800 dark:border-amber-600 p-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 justify-center mb-1">
            <Music className="w-4 h-4 text-green-500" strokeWidth={3} />
            <span
              className="text-green-500 text-[10px] font-bold uppercase tracking-wider"
              style={{ fontFamily: "monospace" }}
            >
              NOW PLAYING
            </span>
          </div>
          <p
            className="text-green-400 font-bold text-base leading-tight"
            style={{
              fontFamily: "monospace",
              textShadow: "0 0 10px rgba(34, 197, 94, 0.5)",
            }}
          >
            {currentSong}
          </p>
        </div>
      </div>
    </div>
  );
}
