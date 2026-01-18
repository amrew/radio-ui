import { Users } from "lucide-react";

interface StatusInfoProps {
  isOnline: boolean;
  listeners: number;
  maxListeners: number;
  bitrate: number;
  sampleRate: number;
}

export function StatusInfo({
  isOnline,
  listeners,
  maxListeners,
  bitrate,
  sampleRate,
}: StatusInfoProps) {
  return (
    <div className="pt-4 border-t border-base-300 space-y-3">
      <div className="flex items-center justify-center gap-2">
        <div
          className={`w-2 h-2 rounded-full ${
            isOnline ? "bg-success animate-pulse" : "bg-error"
          }`}
        />
        <span className="text-base-content/60 text-sm">
          {isOnline ? "Live" : "Offline"}
        </span>
      </div>

      <div className="flex items-center justify-center gap-4 text-xs text-base-content/50">
        <div className="flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5" strokeWidth={2} />
          <span>{listeners}</span>
        </div>
        <div className="w-px h-3 bg-base-content/20" />
        <span>{bitrate}kbps</span>
        <div className="w-px h-3 bg-base-content/20" />
        <span>{(sampleRate / 1000).toFixed(1)}kHz</span>
      </div>
    </div>
  );
}
