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

  // Site-relative path (but not protocol-relative "//host"). Browsers read a
  // backslash as "/" and drop tabs and newlines, so "/\host" and "/\t/host"
  // would also leave the site.
  if (trimmed.startsWith('/')) {
    return trimmed.startsWith('//') || /[\\\u0000-\u001f\u007f]/.test(trimmed) ? undefined : trimmed;
  }

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return undefined;
    return parsed.toString();
  } catch {
    return undefined;
  }
}

