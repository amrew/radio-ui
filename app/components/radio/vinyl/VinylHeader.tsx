import { Disc3 } from "lucide-react";

interface VinylHeaderProps {
  serverTitle: string;
  genre?: string;
}

export function VinylHeader({ serverTitle, genre }: VinylHeaderProps) {
  return (
    <div className="px-6 py-6 text-center bg-gradient-to-b from-gray-900 to-black border-b border-yellow-600/30">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 via-black to-gray-900 mb-3 shadow-2xl border-2 border-yellow-600/50 relative overflow-hidden">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "repeating-radial-gradient(circle at center, transparent 0px, transparent 2px, rgba(255,215,0,0.1) 2px, rgba(255,215,0,0.1) 4px)",
          }}
        />
        <Disc3
          className="w-9 h-9 text-yellow-600 animate-spin"
          style={{ animationDuration: "8s" }}
          strokeWidth={1.5}
        />
      </div>
      <h1
        className="text-2xl font-bold text-yellow-600 mb-1 tracking-wide"
        style={{ fontFamily: "serif" }}
      >
        {serverTitle}
      </h1>
    </div>
  );
}
