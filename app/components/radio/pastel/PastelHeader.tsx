import { Radio, Heart } from "lucide-react";

interface PastelHeaderProps {
  serverTitle: string;
  genre?: string;
}

export function PastelHeader({ serverTitle, genre }: PastelHeaderProps) {
  return (
    <div className="px-6 py-6 text-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-pink-950/30 dark:via-purple-950/30 dark:to-blue-950/30 border-b-4 border-pink-200 dark:border-pink-800">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 dark:from-pink-800 dark:via-purple-800 dark:to-blue-800 mb-3 shadow-lg relative">
        <Radio
          className="w-9 h-9 text-pink-600 dark:text-pink-300"
          strokeWidth={2.5}
        />
      </div>
      <h1 className="text-2xl font-bold bg-pink-500 bg-clip-text text-transparent mb-1">
        {serverTitle}
      </h1>
    </div>
  );
}
