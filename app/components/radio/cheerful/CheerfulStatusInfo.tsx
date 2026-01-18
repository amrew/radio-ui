import { Users, Activity, Mic2Icon } from "lucide-react";

interface CheerfulStatusInfoProps {
  isOnline: boolean;
  listeners: number;
  maxListeners: number;
  bitrate: number;
  sampleRate: number;
}

export function CheerfulStatusInfo({
  isOnline,
  listeners,
  maxListeners,
  bitrate,
  sampleRate,
}: CheerfulStatusInfoProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border-2 border-dashed border-purple-300 dark:border-purple-700">
          <div
            className={`w-3 h-3 rounded-full ${
              isOnline
                ? "bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse shadow-lg shadow-green-500/50"
                : "bg-gradient-to-r from-red-400 to-orange-500"
            }`}
          />
          <span
            className={`text-sm font-bold ${isOnline ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
          >
            {isOnline ? "Live!" : "Offline"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-3 text-center border-2 border-blue-300 dark:border-blue-700">
          <Users
            className="w-5 h-5 mx-auto mb-1 text-blue-600 dark:text-blue-400"
            strokeWidth={2.5}
          />
          <div className="text-xs font-bold text-blue-700 dark:text-blue-300">
            {listeners}
          </div>
          <div className="text-[10px] text-blue-600/70 dark:text-blue-400/70 font-semibold">
            Listeners
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-3 text-center border-2 border-purple-300 dark:border-purple-700">
          <Activity
            className="w-5 h-5 mx-auto mb-1 text-purple-600 dark:text-purple-400"
            strokeWidth={2.5}
          />
          <div className="text-xs font-bold text-purple-700 dark:text-purple-300">
            {bitrate}
          </div>
          <div className="text-[10px] text-purple-600/70 dark:text-purple-400/70 font-semibold">
            kbps
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-xl p-3 text-center border-2 border-indigo-300 dark:border-indigo-700">
          <Mic2Icon
            className="w-5 h-5 mx-auto mb-1 text-indigo-600 dark:text-indigo-400"
            strokeWidth={2.5}
          />
          <div className="text-xs font-bold text-indigo-700 dark:text-indigo-300">
            {(sampleRate / 1000).toFixed(1)}
          </div>
          <div className="text-[10px] text-indigo-600/70 dark:text-indigo-400/70 font-semibold">
            kHz
          </div>
        </div>
      </div>
    </div>
  );
}
