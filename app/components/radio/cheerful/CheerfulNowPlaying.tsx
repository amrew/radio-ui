import { Mic2Icon, Heart } from "lucide-react";

interface CheerfulNowPlayingProps {
  currentSong: string;
}

export function CheerfulNowPlaying({ currentSong }: CheerfulNowPlayingProps) {
  return (
    <div className="px-6 py-6 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-indigo-950/20 border-y-2 border-dashed border-purple-300 dark:border-purple-700">
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Mic2Icon className="w-5 h-5 text-blue-500" strokeWidth={2.5} />
          <span className="text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-widest">
            Now Playing
          </span>
        </div>
        <p className="text-base-content font-bold text-lg leading-snug px-4 drop-shadow-sm">
          {currentSong}
        </p>
      </div>
    </div>
  );
}
