import { NextResponse } from 'next/server';
import { cookieConfig } from '@/lib/auth';

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set({ ...cookieConfig, value: '', maxAge: 0 });
  return response;
}
