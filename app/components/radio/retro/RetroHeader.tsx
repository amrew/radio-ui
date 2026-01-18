import { Radio } from "lucide-react";

interface RetroHeaderProps {
  serverTitle: string;
  genre?: string;
}

export function RetroHeader({ serverTitle, genre }: RetroHeaderProps) {
  return (
    <div className="px-6 py-6 text-center bg-amber-100 dark:bg-amber-950 border-b-4 border-amber-800 dark:border-amber-600 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)",
        }}
      />
      <div className="relative">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-amber-800 dark:bg-amber-700 mb-3 shadow-[4px_4px_0px_0px_rgba(120,53,15,0.5)] border-2 border-amber-900">
          <Radio className="w-8 h-8 text-amber-100" strokeWidth={2.5} />
        </div>
        <h1
          className="text-2xl font-black text-amber-900 dark:text-amber-100 mb-1 tracking-tight uppercase"
          style={{ fontFamily: "monospace" }}
        >
          {serverTitle}
        </h1>
      </div>
    </div>
  );
}
