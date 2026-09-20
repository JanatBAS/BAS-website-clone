/**
 * Returns the URL if it is safe to place in an href/src attribute, otherwise
 * undefined. Accepts absolute http(s) URLs and site-relative paths ("/x").
 * Rejects javascript:, data:, vbscript:, protocol-relative ("//evil") and
 * anything that does not parse.
 */
export function safeHttpUrl(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > 2048) return undefined;

  // Site-relative path (but not protocol-relative "//host").
  if (trimmed.startsWith('/')) {
    return trimmed.startsWith('//') ? undefined : trimmed;
  }

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return undefined;
    return parsed.toString();
  } catch {
    return undefined;
  }
}

/** True when the value is empty/undefined or a safe http(s)/relative URL. */
export function isOptionalSafeUrl(value: unknown): boolean {
  if (value === undefined || value === null) return true;
  if (typeof value !== 'string') return false;
  if (!value.trim()) return true;
  return safeHttpUrl(value) !== undefined;
}
