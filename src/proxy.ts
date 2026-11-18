import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ADMIN_COOKIE_NAME, verifyAdminToken } from '@/lib/auth-token';

/**
 * Protects /admin/* and /api/admin/* (except the login page and login API).
 * Next.js 16 file convention: `proxy.ts` (formerly `middleware.ts`).
 */

function unauthorized(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/api/admin')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const loginUrl = new URL('/admin/login', request.url);
  loginUrl.searchParams.set('redirect', pathname);
  const response = NextResponse.redirect(loginUrl);
  // Drop an invalid/expired cookie so the browser stops sending it.
  if (request.cookies.has(ADMIN_COOKIE_NAME)) {
    response.cookies.set({ name: ADMIN_COOKIE_NAME, value: '', path: '/', maxAge: 0 });
  }
  return response;
}

const SAFE_METHODS = new Set(['GET', 'HEAD', 'OPTIONS']);

/**
 * Admin API writes come only from the admin pages on this origin. The
 * SameSite=Lax cookie already stays off cross-site requests; this also refuses
 * requests from other subdomains of the same site. Browsers send
 * Sec-Fetch-Site; Origin is the fallback for those that do not.
 */
function isCrossOriginWrite(request: NextRequest): boolean {
  if (SAFE_METHODS.has(request.method)) return false;
  const fetchSite = request.headers.get('sec-fetch-site');
  if (fetchSite) return fetchSite !== 'same-origin';
  const origin = request.headers.get('origin');
  if (!origin) return false;
  try {
    return new URL(origin).host !== request.headers.get('host');
  } catch {
    return true;
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/api/admin/') && isCrossOriginWrite(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  if (pathname === '/admin/login' || pathname === '/api/admin/login') {
    return NextResponse.next();
  }

  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const jwtSecret = process.env.JWT_SECRET;
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!token || !jwtSecret || !passwordHash) {
    return unauthorized(request);
  }

  const valid = await verifyAdminToken(token, jwtSecret, passwordHash);
  return valid ? NextResponse.next() : unauthorized(request);
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
