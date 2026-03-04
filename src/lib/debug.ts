export const isDebugMode =
  process.env.NEXT_PUBLIC_DEBUG_MODE === 'true' || process.env.NODE_ENV === 'development';

export function debug(...args: unknown[]): void {
  if (isDebugMode) console.log('[debug]', ...args);
}

export function debugWarn(...args: unknown[]): void {
  if (isDebugMode) console.warn('[debug]', ...args);
}
