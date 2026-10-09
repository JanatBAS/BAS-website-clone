import { NextResponse } from 'next/server';
import { AdminDataConflictError } from './blob-store';
import { safeHttpUrl } from './safe-url';

/**
 * Input helpers shared by the admin API routes. Request bodies are untrusted
 * JSON, so every field is checked for its type before it is used.
 */

/** Trimmed text, or null when it is missing, empty or longer than `max`. */
export function requiredString(value: unknown, max = Infinity): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed && trimmed.length <= max ? trimmed : null;
}

/** Trimmed text cut to `max` characters, or undefined when it is missing or empty. */
export function optionalString(value: unknown, max = Infinity): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, max) : undefined;
}

/** Optional URL field: empty is fine, otherwise it must be an http(s) URL or a site-relative path. */
export function optionalUrl(value: unknown, label: string): { url?: string; error?: string } {
  const input = optionalString(value);
  if (!input) return {};
  const url = safeHttpUrl(input);
  return url ? { url } : { error: `${label} must be an http(s) URL.` };
}

/** The `id` query parameter of a PUT or DELETE request. */
export function idParam(request: Request): string | null {
  return new URL(request.url).searchParams.get('id');
}

export function missingId(): NextResponse {
  return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
}

export function invalidInput(error: string): NextResponse {
  return NextResponse.json({ error }, { status: 400 });
}

/** 409 when another save changed the same list first, otherwise a generic 500. */
export function saveFailed(error: unknown, message: string): NextResponse {
  if (error instanceof AdminDataConflictError) {
    return NextResponse.json({ error: error.message }, { status: 409 });
  }
  return NextResponse.json({ error: message }, { status: 500 });
}
