import { Mic2Icon } from "lucide-react";

interface IOSNowPlayingProps {
  currentSong: string;
}

export function IOSNowPlaying({ currentSong }: IOSNowPlayingProps) {
  return (
    <div className="px-6 py-5 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <Mic2Icon className="w-4 h-4 text-blue-500" strokeWidth={2} />
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Now Playing
          </span>
        </div>
        <p className="text-base font-medium text-gray-900 dark:text-white leading-snug px-4">
          {currentSong}
        </p>
      </div>
    </div>
  );
}
