export function LoadingFallback() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
    </div>
  );
}

export function HeaderLoadingFallback() {
  return (
    <div className="px-6 py-6 text-center animate-pulse">
      <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl mx-auto mb-3"></div>
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mx-auto"></div>
    </div>
  );
}

export function PlayButtonLoadingFallback() {
  return (
    <div className="flex justify-center">
      <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
    </div>
  );
}

export function VolumeControlLoadingFallback() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mx-auto"></div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  );
}

export function StatusInfoLoadingFallback() {
  return (
    <div className="grid grid-cols-3 gap-3 animate-pulse">
      <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
    </div>
  );
}
