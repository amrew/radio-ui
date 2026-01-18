import { Radio } from "lucide-react";

interface IOSHeaderProps {
  serverTitle: string;
  genre?: string;
}

export function IOSHeader({ serverTitle, genre }: IOSHeaderProps) {
  return (
    <div className="px-6 py-6 text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-3 shadow-lg shadow-blue-500/30">
        <Radio className="w-8 h-8 text-white" strokeWidth={2} />
      </div>
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
        {serverTitle}
      </h1>
    </div>
  );
}
