import { NextResponse } from 'next/server';
import { verifyPassword, createToken, cookieConfig } from '@/lib/auth';
import { checkRateLimit, clearRateLimit, recordRateLimitHit } from '@/lib/rate-limit';

export const dynamic = 'force-dynamic';

// Per client IP: 5 failed attempts per 15 minutes.
const PER_IP_LIMIT = { limit: 5, windowMs: 15 * 60 * 1000 };
// Across all clients: 30 failed attempts per 15 minutes (slows distributed guessing).
const GLOBAL_LIMIT = { limit: 30, windowMs: 15 * 60 * 1000 };
const GLOBAL_KEY = 'login:global';
const MAX_PASSWORD_LENGTH = 200;
const MIN_RESPONSE_MS = 500;

function clientKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
  return `login:ip:${ip}`;
}

function tooManyAttempts(retryAfterSeconds: number): NextResponse {
  return NextResponse.json(
    { error: 'Too many login attempts. Please try again later.' },
    { status: 429, headers: { 'Retry-After': String(retryAfterSeconds) } },
  );
}

async function padResponseTime(startTime: number): Promise<void> {
  const elapsed = Date.now() - startTime;
  if (elapsed < MIN_RESPONSE_MS) {
    await new Promise((r) => setTimeout(r, MIN_RESPONSE_MS - elapsed));
  }
}

export async function POST(request: Request) {
  const startTime = Date.now();
  const ipKey = clientKey(request);

  const ipStatus = checkRateLimit(ipKey, PER_IP_LIMIT);
  const globalStatus = checkRateLimit(GLOBAL_KEY, GLOBAL_LIMIT);
  if (!ipStatus.allowed || !globalStatus.allowed) {
    return tooManyAttempts(Math.max(ipStatus.retryAfterSeconds, globalStatus.retryAfterSeconds));
  }

  try {
    let password: unknown;
    try {
      ({ password } = await request.json());
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    if (typeof password !== 'string' || !password) {
      return NextResponse.json({ error: 'Password is required' }, { status: 400 });
    }
    if (password.length > MAX_PASSWORD_LENGTH) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    const valid = await verifyPassword(password);

    if (!valid) {
      recordRateLimitHit(ipKey, PER_IP_LIMIT);
      recordRateLimitHit(GLOBAL_KEY, GLOBAL_LIMIT);
      // Extra delay on failure to slow brute-force attempts
      await new Promise((r) => setTimeout(r, 1000));
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    clearRateLimit(ipKey);

    const token = await createToken();
    const response = NextResponse.json({ success: true });
    response.cookies.set({
      ...cookieConfig,
      value: token,
    });

    await padResponseTime(startTime);
    return response;
  } catch (error) {
    // Log server-side only; never expose internals to the client.
    console.error('[admin-login] failed', error instanceof Error ? error.message : error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
