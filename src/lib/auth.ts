import { compare } from 'bcryptjs';
import { env } from './env';
import {
  ADMIN_COOKIE_NAME,
  ADMIN_TOKEN_TTL_SECONDS,
  signAdminToken,
} from './auth-token';

export async function verifyPassword(password: string): Promise<boolean> {
  return compare(password, env.ADMIN_PASSWORD_HASH);
}

export async function createToken(): Promise<string> {
  return signAdminToken(env.JWT_SECRET, env.ADMIN_PASSWORD_HASH);
}

export const cookieConfig = {
  name: ADMIN_COOKIE_NAME,
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
  maxAge: ADMIN_TOKEN_TTL_SECONDS,
};
