import { Radio } from "lucide-react";

interface DarkHeaderProps {
  serverTitle: string;
  genre?: string;
}

export function DarkHeader({ serverTitle, genre }: DarkHeaderProps) {
  return (
    <div className="px-6 py-8 text-center bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 mb-4 shadow-2xl shadow-cyan-500/20 ring-2 ring-cyan-500/30">
        <Radio className="w-10 h-10 text-cyan-400" strokeWidth={2} />
      </div>
      <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">
        {serverTitle}
      </h1>
    </div>
  );
}
