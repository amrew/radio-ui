import { Mic2Icon } from "lucide-react";

interface NowPlayingProps {
  currentSong: string;
}

export function NowPlaying({ currentSong }: NowPlayingProps) {
  return (
    <div className="px-6 py-6 border-b border-base-300">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 text-base-content/50 text-xs uppercase tracking-wider">
          <Mic2Icon className="w-3.5 h-3.5" strokeWidth={2} />
          <span>Now Playing</span>
        </div>
        <p className="text-base-content font-medium text-base leading-snug px-4">
          {currentSong}
        </p>
      </div>
    </div>
  );
}
