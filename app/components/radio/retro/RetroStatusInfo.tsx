import { Users, Activity, Signal } from "lucide-react";

interface RetroStatusInfoProps {
  isOnline: boolean;
  listeners: number;
  maxListeners: number;
  bitrate: number;
  sampleRate: number;
}

export function RetroStatusInfo({
  isOnline,
  listeners,
  maxListeners,
  bitrate,
  sampleRate,
}: RetroStatusInfoProps) {
  return (
    <div className="pt-4 space-y-4">
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center gap-2 px-4 py-2 bg-black border-4 border-amber-800 dark:border-amber-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
          <Signal
            className={`w-4 h-4 ${isOnline ? "text-green-500" : "text-red-500"}`}
            strokeWidth={3}
          />
          <span
            className={`text-sm font-black uppercase tracking-wider ${
              isOnline ? "text-green-400" : "text-red-400"
            }`}
            style={{
              fontFamily: "monospace",
              textShadow: isOnline
                ? "0 0 10px rgba(34, 197, 94, 0.6)"
                : "0 0 10px rgba(239, 68, 68, 0.6)",
            }}
          >
            {isOnline ? "LIVE" : "OFF AIR"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-amber-100 dark:bg-amber-950 border-4 border-amber-800 dark:border-amber-600 p-3 text-center shadow-[2px_2px_0px_0px_rgba(120,53,15,0.5)]">
          <Users
            className="w-5 h-5 mx-auto mb-1 text-amber-900 dark:text-amber-100"
            strokeWidth={3}
          />
          <div
            className="text-xs font-black text-amber-900 dark:text-amber-100"
            style={{ fontFamily: "monospace" }}
          >
            {listeners}
          </div>
          <div
            className="text-[9px] text-amber-800 dark:text-amber-300 font-bold uppercase tracking-wide"
            style={{ fontFamily: "monospace" }}
          >
            LISTENERS
          </div>
        </div>

        <div className="bg-amber-100 dark:bg-amber-950 border-4 border-amber-800 dark:border-amber-600 p-3 text-center shadow-[2px_2px_0px_0px_rgba(120,53,15,0.5)]">
          <Activity
            className="w-5 h-5 mx-auto mb-1 text-amber-900 dark:text-amber-100"
            strokeWidth={3}
          />
          <div
            className="text-xs font-black text-amber-900 dark:text-amber-100"
            style={{ fontFamily: "monospace" }}
          >
            {bitrate}
          </div>
          <div
            className="text-[9px] text-amber-800 dark:text-amber-300 font-bold uppercase tracking-wide"
            style={{ fontFamily: "monospace" }}
          >
            KBPS
          </div>
        </div>

        <div className="bg-amber-100 dark:bg-amber-950 border-4 border-amber-800 dark:border-amber-600 p-3 text-center shadow-[2px_2px_0px_0px_rgba(120,53,15,0.5)]">
          <Signal
            className="w-5 h-5 mx-auto mb-1 text-amber-900 dark:text-amber-100"
            strokeWidth={3}
          />
          <div
            className="text-xs font-black text-amber-900 dark:text-amber-100"
            style={{ fontFamily: "monospace" }}
          >
            {(sampleRate / 1000).toFixed(1)}
          </div>
          <div
            className="text-[9px] text-amber-800 dark:text-amber-300 font-bold uppercase tracking-wide"
            style={{ fontFamily: "monospace" }}
          >
            KHZ
          </div>
        </div>
      </div>
    </div>
  );
}
