import { Users, Activity, Radio } from "lucide-react";

interface IOSStatusInfoProps {
  isOnline: boolean;
  listeners: number;
  maxListeners: number;
  bitrate: number;
  sampleRate: number;
}

export function IOSStatusInfo({
  isOnline,
  listeners,
  maxListeners,
  bitrate,
  sampleRate,
}: IOSStatusInfoProps) {
  return (
    <div className="pt-4 space-y-4">
      <div className="flex items-center justify-center gap-3">
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            isOnline
              ? "bg-green-100 dark:bg-green-900/30"
              : "bg-red-100 dark:bg-red-900/30"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              isOnline ? "bg-green-500 animate-pulse" : "bg-red-500"
            }`}
          />
          <span
            className={`text-sm font-semibold ${
              isOnline
                ? "text-green-700 dark:text-green-400"
                : "text-red-700 dark:text-red-400"
            }`}
          >
            {isOnline ? "Live" : "Offline"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 text-center border border-gray-200/50 dark:border-gray-700/50">
          <Users
            className="w-5 h-5 mx-auto mb-1 text-blue-500"
            strokeWidth={2}
          />
          <div className="text-xs font-semibold text-gray-900 dark:text-white">
            {listeners}
          </div>
          <div className="text-[10px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
            Listeners
          </div>
        </div>

        <div className="bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 text-center border border-gray-200/50 dark:border-gray-700/50">
          <Activity
            className="w-5 h-5 mx-auto mb-1 text-blue-500"
            strokeWidth={2}
          />
          <div className="text-xs font-semibold text-gray-900 dark:text-white">
            {bitrate}
          </div>
          <div className="text-[10px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
            kbps
          </div>
        </div>

        <div className="bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 text-center border border-gray-200/50 dark:border-gray-700/50">
          <Radio
            className="w-5 h-5 mx-auto mb-1 text-blue-500"
            strokeWidth={2}
          />
          <div className="text-xs font-semibold text-gray-900 dark:text-white">
            {(sampleRate / 1000).toFixed(1)}
          </div>
          <div className="text-[10px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
            kHz
          </div>
        </div>
      </div>
    </div>
  );
}
