import { SignJWT, jwtVerify } from 'jose';

/**
 * JWT helpers with no Next.js-specific imports so they can be used from both
 * route handlers and proxy.ts.
 */

export const ADMIN_COOKIE_NAME = 'admin-token';
export const ADMIN_TOKEN_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

const JWT_ALGORITHM = 'HS256';
const JWT_ISSUER = 'bas-admin';
const JWT_AUDIENCE = 'bas-admin';

function encodeSecret(secret: string): Uint8Array {
  return new TextEncoder().encode(secret);
}

/**
 * Short fingerprint of the current admin password hash. It is embedded in every
 * token so that rotating the admin password (or the JWT secret) invalidates all
 * previously issued tokens without needing any server-side session storage.
 */
async function passwordBinding(passwordHash: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(passwordHash));
  return Array.from(new Uint8Array(digest).slice(0, 12))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function signAdminToken(jwtSecret: string, passwordHash: string): Promise<string> {
  return new SignJWT({ role: 'admin', pv: await passwordBinding(passwordHash) })
    .setProtectedHeader({ alg: JWT_ALGORITHM })
    .setIssuer(JWT_ISSUER)
    .setAudience(JWT_AUDIENCE)
    .setIssuedAt()
    .setExpirationTime(`${ADMIN_TOKEN_TTL_SECONDS}s`)
    .sign(encodeSecret(jwtSecret));
}

export async function verifyAdminToken(
  token: string,
  jwtSecret: string,
  passwordHash: string,
): Promise<boolean> {
  try {
    const { payload } = await jwtVerify(token, encodeSecret(jwtSecret), {
      algorithms: [JWT_ALGORITHM],
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE,
    });
    if (payload.role !== 'admin') return false;
    return payload.pv === (await passwordBinding(passwordHash));
  } catch {
    return false;
  }
}
