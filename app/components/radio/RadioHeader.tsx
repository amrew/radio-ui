import { Radio } from "lucide-react";

interface RadioHeaderProps {
  serverTitle: string;
  genre?: string;
}

export function RadioHeader({ serverTitle, genre }: RadioHeaderProps) {
  return (
    <div className="px-6 py-8 text-center border-b border-base-300">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
        <Radio className="w-8 h-8 text-primary" strokeWidth={1.5} />
      </div>
      <h1 className="text-xl font-semibold text-base-content mb-1 tracking-tight">
        {serverTitle}
      </h1>
      {genre && <p className="text-base-content/60 text-sm">{genre}</p>}
    </div>
  );
}
