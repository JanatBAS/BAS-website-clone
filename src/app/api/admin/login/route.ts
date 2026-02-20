import { NextResponse } from 'next/server';
import { verifyPassword, createToken, cookieConfig } from '@/lib/auth';

export async function POST(request: Request) {
  const startTime = Date.now();

  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json({ error: 'Password is required' }, { status: 400 });
    }

    const valid = await verifyPassword(password);

    if (!valid) {
      // Extra delay on failure to slow brute-force attempts
      await new Promise((r) => setTimeout(r, 1000));
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    const token = await createToken();
    const response = NextResponse.json({ success: true });
    response.cookies.set({
      ...cookieConfig,
      value: token,
    });

    // Minimum 500ms response time to prevent timing attacks
    const elapsed = Date.now() - startTime;
    if (elapsed < 500) {
      await new Promise((r) => setTimeout(r, 500 - elapsed));
    }

    return response;
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
