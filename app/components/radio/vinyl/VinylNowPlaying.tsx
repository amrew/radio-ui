import { Mic2Icon } from "lucide-react";

interface VinylNowPlayingProps {
  currentSong: string;
}

export function VinylNowPlaying({ currentSong }: VinylNowPlayingProps) {
  return (
    <div className="px-6 py-5 bg-black border-b border-yellow-600/30">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <Mic2Icon className="w-4 h-4 text-yellow-600" strokeWidth={2} />
          <span
            className="text-xs font-bold text-yellow-700 uppercase tracking-widest"
            style={{ fontFamily: "serif" }}
          >
            Now Spinning
          </span>
        </div>
        <p
          className="text-base font-semibold text-yellow-100 leading-snug px-4"
          style={{ fontFamily: "serif" }}
        >
          {currentSong}
        </p>
      </div>
    </div>
  );
}
