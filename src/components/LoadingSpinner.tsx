export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center p-4" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading...</span>
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-transparent" />
    </div>
  );
};


