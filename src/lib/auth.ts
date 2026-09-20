import { compare } from 'bcryptjs';
import { cookies } from 'next/headers';
import { env } from './env';
import {
  ADMIN_COOKIE_NAME,
  ADMIN_TOKEN_TTL_SECONDS,
  signAdminToken,
  verifyAdminToken,
} from './auth-token';

export async function verifyPassword(password: string): Promise<boolean> {
  return compare(password, env.ADMIN_PASSWORD_HASH);
}

export async function createToken(): Promise<string> {
  return signAdminToken(env.JWT_SECRET, env.ADMIN_PASSWORD_HASH);
}

export async function verifyToken(token: string): Promise<boolean> {
  return verifyAdminToken(token, env.JWT_SECRET, env.ADMIN_PASSWORD_HASH);
}

export const cookieConfig = {
  name: ADMIN_COOKIE_NAME,
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
  maxAge: ADMIN_TOKEN_TTL_SECONDS,
};

export async function getTokenFromCookies(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_COOKIE_NAME)?.value;
}
