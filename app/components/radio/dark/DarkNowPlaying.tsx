import { Mic2Icon } from "lucide-react";

interface DarkNowPlayingProps {
  currentSong: string;
}

export function DarkNowPlaying({ currentSong }: DarkNowPlayingProps) {
  return (
    <div className="px-6 py-6 bg-black border-b border-gray-800">
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Mic2Icon
            className="w-5 h-5 text-cyan-400 animate-pulse"
            strokeWidth={2}
          />
          <span className="text-gray-500 text-xs font-semibold uppercase tracking-widest">
            Now Playing
          </span>
        </div>
        <p className="text-white font-semibold text-lg leading-snug px-4">
          {currentSong}
        </p>
      </div>
    </div>
  );
}
