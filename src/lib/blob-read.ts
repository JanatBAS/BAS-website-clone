/**
 * Fresh reads of JSON files in the public Vercel Blob store.
 *
 * The SDK's `get(..., { useCache: false })` is not used: @vercel/blob 2.3.0
 * adds `?cache=0`, which public stores reject with HTTP 400. A plain request
 * with a unique query parameter skips the CDN copy instead (an overwritten
 * public blob can otherwise be served stale for up to 60 seconds). Each read
 * is one simple Blob operation.
 */

export interface PublicBlobJson {
  data: unknown;
  /** ETag of the stored blob, usable with `put(..., { ifMatch })`. */
  etag?: string;
}

/** Public URL of `pathname`, or null when no Blob store is configured (local builds, CI). */
function publicBlobUrl(pathname: string): string | null {
  // Read-write tokens look like vercel_blob_rw_<storeId>_<secret>.
  const storeId = process.env.BLOB_READ_WRITE_TOKEN?.split('_')[3]?.toLowerCase();
  return storeId ? `https://${storeId}.public.blob.vercel-storage.com/${pathname}` : null;
}

/**
 * Returns the parsed JSON, or null when the blob does not exist or no store is
 * configured. Any other failure throws.
 */
export async function readPublicBlobJson(pathname: string): Promise<PublicBlobJson | null> {
  const url = publicBlobUrl(pathname);
  if (!url) return null;

  const fresh = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
  const response = await fetch(`${url}?v=${fresh}`, {
    cache: 'no-store',
    // A compressed response carries a weak ETag (W/"..."), which conditional
    // writes reject; the uncompressed response carries the blob's own ETag.
    headers: { 'Accept-Encoding': 'identity' },
  });
  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`Blob read failed with HTTP ${response.status} for ${pathname}`);
  }

  return {
    data: await response.json(),
    etag: response.headers.get('etag')?.replace(/^W\//, '') ?? undefined,
  };
}
