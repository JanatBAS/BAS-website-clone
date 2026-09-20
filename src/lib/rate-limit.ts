/**
 * Small in-memory sliding-window rate limiter.
 *
 * It deliberately uses no external storage (no Blob, no database) so it adds
 * zero cost. On serverless hosting the counter is per warm instance, so it is a
 * first line of defense rather than a hard guarantee. Pair it with a
 * platform-level rate-limit rule (e.g. Vercel Firewall) for full coverage.
 */

interface Bucket {
  timestamps: number[];
}

const buckets = new Map<string, Bucket>();
const MAX_TRACKED_KEYS = 5000;

export interface RateLimitOptions {
  /** Maximum number of hits allowed inside the window. */
  limit: number;
  /** Window length in milliseconds. */
  windowMs: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

function prune(bucket: Bucket, now: number, windowMs: number): void {
  const cutoff = now - windowMs;
  while (bucket.timestamps.length > 0 && bucket.timestamps[0] <= cutoff) {
    bucket.timestamps.shift();
  }
}

/** Check whether `key` is currently over its limit, without recording a hit. */
export function checkRateLimit(key: string, options: RateLimitOptions): RateLimitResult {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket) {
    return { allowed: true, remaining: options.limit, retryAfterSeconds: 0 };
  }

  prune(bucket, now, options.windowMs);
  const remaining = Math.max(0, options.limit - bucket.timestamps.length);
  if (remaining > 0) {
    return { allowed: true, remaining, retryAfterSeconds: 0 };
  }

  const oldest = bucket.timestamps[0];
  const retryAfterSeconds = Math.max(1, Math.ceil((oldest + options.windowMs - now) / 1000));
  return { allowed: false, remaining: 0, retryAfterSeconds };
}

/** Record one hit for `key`. */
export function recordRateLimitHit(key: string, options: RateLimitOptions): void {
  const now = Date.now();
  let bucket = buckets.get(key);

  if (!bucket) {
    if (buckets.size >= MAX_TRACKED_KEYS) {
      // Drop the oldest tracked key so memory stays bounded under abuse.
      const firstKey = buckets.keys().next().value;
      if (firstKey !== undefined) buckets.delete(firstKey);
    }
    bucket = { timestamps: [] };
    buckets.set(key, bucket);
  }

  prune(bucket, now, options.windowMs);
  bucket.timestamps.push(now);
}

/** Forget all hits for `key` (e.g. after a successful login). */
export function clearRateLimit(key: string): void {
  buckets.delete(key);
}
