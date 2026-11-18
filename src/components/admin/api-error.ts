/** Shown when the admin session cookie has expired or is no longer valid. */
export const SESSION_EXPIRED_MESSAGE = 'Your session has expired. Sign in again, then retry.';

/**
 * The error message for a failed admin API response: the `error` field of a
 * JSON body (400 validation, 404, 409 conflict), or `fallback`.
 */
export async function apiErrorMessage(res: Response, fallback: string): Promise<string> {
  if (res.status === 401) return SESSION_EXPIRED_MESSAGE;
  try {
    const data = await res.json();
    if (typeof data?.error === 'string' && data.error) return data.error;
  } catch {
    // Ignore non-JSON error responses and use the fallback message.
  }
  return fallback;
}
