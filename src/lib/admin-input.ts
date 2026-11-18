import { NextResponse } from 'next/server';
import { AdminDataConflictError } from './blob-store';
import { isValidDateISO } from './event-dates';
import { safeHttpUrl } from './safe-url';
import { slugify } from './utils';

/**
 * Input helpers shared by the admin API routes. Request bodies are untrusted
 * JSON, so every field is checked for its type before it is used.
 */

/** Zero-width and bidi control characters, which `trim()` keeps and which render as nothing. */
const INVISIBLE_CHARACTERS = /[\u200b-\u200f\u202a-\u202e\u2060-\u2064\u2066-\u2069]/g;

/** Trimmed text, or null when it is missing, empty or made only of invisible characters. */
export function requiredString(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed && trimmed.replace(INVISIBLE_CHARACTERS, '').trim() ? trimmed : null;
}

/** An error message when `value` is longer than `max` characters. */
export function lengthError(label: string, value: string | undefined, max: number): string | undefined {
  return value && value.length > max ? `${label} is too long (at most ${max} characters).` : undefined;
}

/**
 * A real YYYY-MM-DD date in 2000-2100. The range refuses typos such as
 * 0202-05-01, which would also make a recurring series expand from year 202.
 */
export function isAdminDateISO(value: string): boolean {
  return isValidDateISO(value) && value >= '2000-01-01' && value <= '2100-12-31';
}

/** URL slug for a new record: the title without accents ("für" -> "fur"), then a unique suffix. */
export function recordSlug(title: string, fallback: string, uniqueSuffix: string): string {
  const base = slugify(title.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')) || fallback;
  return `${base}-${uniqueSuffix}`;
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

/** The request body when it is a JSON object, otherwise null (answered with a 400). */
export async function readJsonObject<T>(request: Request): Promise<T | null> {
  try {
    const body: unknown = await request.json();
    return body !== null && typeof body === 'object' && !Array.isArray(body) ? (body as T) : null;
  } catch {
    return null;
  }
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
