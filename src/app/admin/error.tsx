'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function AdminError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Keep details in logs for debugging, but do not expose internals in UI.
    console.error('[admin-error-boundary]', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-xl font-semibold text-red-400">Something went wrong</h2>
        <p className="text-gray-400 text-sm">
          An unexpected admin error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
