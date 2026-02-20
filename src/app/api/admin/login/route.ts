import { NextResponse } from 'next/server';
import { verifyPassword, createToken, cookieConfig } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json({ error: 'Password is required' }, { status: 400 });
    }

    const valid = await verifyPassword(password);
    if (!valid) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    const token = await createToken();
    const response = NextResponse.json({ success: true });
    response.cookies.set({
      ...cookieConfig,
      value: token,
    });

    return response;
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
