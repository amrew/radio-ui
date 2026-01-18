import { Music2, Sparkles } from "lucide-react";

interface PastelNowPlayingProps {
  currentSong: string;
}

export function PastelNowPlaying({ currentSong }: PastelNowPlayingProps) {
  return (
    <div className="px-6 py-5 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-blue-950/20 border-b-4 border-purple-200 dark:border-purple-800">
      <div className="text-center space-y-2">
        <p className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
          Now Playing
        </p>
        <p className="text-base font-semibold text-gray-800 dark:text-gray-200 leading-snug px-4">
          {currentSong}
        </p>
      </div>
    </div>
  );
}
