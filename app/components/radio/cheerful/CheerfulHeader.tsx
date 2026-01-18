import { Radio, Sparkles } from "lucide-react";

interface CheerfulHeaderProps {
  serverTitle: string;
  genre?: string;
}

export function CheerfulHeader({ serverTitle, genre }: CheerfulHeaderProps) {
  return (
    <div className="px-6 py-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10" />
      <div className="relative">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
          {serverTitle}
        </h1>
      </div>
    </div>
  );
}
