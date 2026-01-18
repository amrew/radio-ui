import { Users, Activity, Radio, Heart, Star } from "lucide-react";

interface PastelStatusInfoProps {
  isOnline: boolean;
  listeners: number;
  maxListeners: number;
  bitrate: number;
  sampleRate: number;
}

export function PastelStatusInfo({
  isOnline,
  listeners,
  maxListeners,
  bitrate,
  sampleRate,
}: PastelStatusInfoProps) {
  return (
    <div className="pt-4 space-y-4">
      <div className="flex items-center justify-center gap-3">
        <div
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 ${
            isOnline
              ? "bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700"
              : "bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-950/30 dark:to-pink-950/30 border-red-300 dark:border-red-700"
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
            className={`text-sm font-bold ${
              isOnline
                ? "text-green-700 dark:text-green-400"
                : "text-red-700 dark:text-red-400"
            }`}
          >
            {isOnline ? "Live" : "Offline"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-950/30 dark:to-pink-900/20 rounded-2xl p-4 text-center border-2 border-pink-200 dark:border-pink-800 shadow-lg transform hover:scale-105 transition-transform">
          <div className="relative inline-block mb-2">
            <Users
              className="w-6 h-6 mx-auto text-pink-600 dark:text-pink-400"
              strokeWidth={2.5}
            />
          </div>
          <div className="text-sm font-bold text-pink-700 dark:text-pink-300">
            {listeners}
          </div>
          <div className="text-xs text-pink-600 dark:text-pink-400 font-semibold uppercase tracking-wide">
            Listeners
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-950/30 dark:to-purple-900/20 rounded-2xl p-4 text-center border-2 border-purple-200 dark:border-purple-800 shadow-lg transform hover:scale-105 transition-transform">
          <div className="relative inline-block mb-2">
            <Activity
              className="w-6 h-6 mx-auto text-purple-600 dark:text-purple-400"
              strokeWidth={2.5}
            />
          </div>
          <div className="text-sm font-bold text-purple-700 dark:text-purple-300">
            {bitrate}
          </div>
          <div className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wide">
            kbps
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950/30 dark:to-blue-900/20 rounded-2xl p-4 text-center border-2 border-blue-200 dark:border-blue-800 shadow-lg transform hover:scale-105 transition-transform">
          <div className="relative inline-block mb-2">
            <Radio
              className="w-6 h-6 mx-auto text-blue-600 dark:text-blue-400"
              strokeWidth={2.5}
            />
          </div>
          <div className="text-sm font-bold text-blue-700 dark:text-blue-300">
            {(sampleRate / 1000).toFixed(1)}
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wide">
            kHz
          </div>
        </div>
      </div>
    </div>
  );
}
