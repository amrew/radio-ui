import { Users, Activity, Radio } from "lucide-react";

interface VinylStatusInfoProps {
  isOnline: boolean;
  listeners: number;
  maxListeners: number;
  bitrate: number;
  sampleRate: number;
}

export function VinylStatusInfo({
  isOnline,
  listeners,
  maxListeners,
  bitrate,
  sampleRate,
}: VinylStatusInfoProps) {
  return (
    <div className="pt-4 space-y-4">
      <div className="flex items-center justify-center gap-3">
        <div
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 ${
            isOnline
              ? "bg-gradient-to-r from-green-900 to-green-950 border-green-700"
              : "bg-gradient-to-r from-red-900 to-red-950 border-red-700"
          }`}
        >
          <div
            className={`w-2.5 h-2.5 rounded-full ${
              isOnline
                ? "bg-green-500 animate-pulse shadow-lg shadow-green-500/50"
                : "bg-red-500"
            }`}
          />
          <span
            className={`text-sm font-bold uppercase tracking-wider ${
              isOnline ? "text-green-400" : "text-red-400"
            }`}
            style={{ fontFamily: "serif" }}
          >
            {isOnline ? "Live" : "Offline"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg p-4 text-center border border-yellow-600/30 shadow-lg transform hover:scale-105 transition-transform">
          <Users
            className="w-6 h-6 mx-auto mb-2 text-yellow-600"
            strokeWidth={1.5}
          />
          <div
            className="text-sm font-bold text-yellow-100"
            style={{ fontFamily: "serif" }}
          >
            {listeners}/{maxListeners}
          </div>
          <div
            className="text-xs text-yellow-700 font-semibold uppercase tracking-wide"
            style={{ fontFamily: "serif" }}
          >
            Listeners
          </div>
        </div>

        <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg p-4 text-center border border-yellow-600/30 shadow-lg transform hover:scale-105 transition-transform">
          <Activity
            className="w-6 h-6 mx-auto mb-2 text-yellow-600"
            strokeWidth={1.5}
          />
          <div
            className="text-sm font-bold text-yellow-100"
            style={{ fontFamily: "serif" }}
          >
            {bitrate}
          </div>
          <div
            className="text-xs text-yellow-700 font-semibold uppercase tracking-wide"
            style={{ fontFamily: "serif" }}
          >
            kbps
          </div>
        </div>

        <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg p-4 text-center border border-yellow-600/30 shadow-lg transform hover:scale-105 transition-transform">
          <Radio
            className="w-6 h-6 mx-auto mb-2 text-yellow-600"
            strokeWidth={1.5}
          />
          <div
            className="text-sm font-bold text-yellow-100"
            style={{ fontFamily: "serif" }}
          >
            {(sampleRate / 1000).toFixed(1)}
          </div>
          <div
            className="text-xs text-yellow-700 font-semibold uppercase tracking-wide"
            style={{ fontFamily: "serif" }}
          >
            kHz
          </div>
        </div>
      </div>
    </div>
  );
}
