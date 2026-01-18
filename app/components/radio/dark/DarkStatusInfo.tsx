import { Users, Activity, Radio } from "lucide-react";

interface DarkStatusInfoProps {
  isOnline: boolean;
  listeners: number;
  maxListeners: number;
  bitrate: number;
  sampleRate: number;
}

export function DarkStatusInfo({
  isOnline,
  listeners,
  maxListeners,
  bitrate,
  sampleRate,
}: DarkStatusInfoProps) {
  return (
    <div className="pt-4 space-y-4">
      <div className="flex items-center justify-center gap-3">
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
            isOnline
              ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30"
              : "bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              isOnline
                ? "bg-green-500 animate-pulse shadow-lg shadow-green-500/50"
                : "bg-red-500"
            }`}
          />
          <span
            className={`text-sm font-semibold ${
              isOnline ? "text-green-400" : "text-red-400"
            }`}
          >
            {isOnline ? "Live" : "Offline"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-3 text-center border border-gray-800 hover:border-gray-700 transition-colors">
          <Users
            className="w-5 h-5 mx-auto mb-1 text-cyan-400"
            strokeWidth={2}
          />
          <div className="text-xs font-bold text-white">{listeners}</div>
          <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide">
            Listeners
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-3 text-center border border-gray-800 hover:border-gray-700 transition-colors">
          <Activity
            className="w-5 h-5 mx-auto mb-1 text-cyan-400"
            strokeWidth={2}
          />
          <div className="text-xs font-bold text-white">{bitrate}</div>
          <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide">
            kbps
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-3 text-center border border-gray-800 hover:border-gray-700 transition-colors">
          <Radio
            className="w-5 h-5 mx-auto mb-1 text-cyan-400"
            strokeWidth={2}
          />
          <div className="text-xs font-bold text-white">
            {(sampleRate / 1000).toFixed(1)}
          </div>
          <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide">
            kHz
          </div>
        </div>
      </div>
    </div>
  );
}
