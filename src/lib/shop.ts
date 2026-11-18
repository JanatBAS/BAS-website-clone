import { PHASE_PRODUCTION_BUILD } from 'next/constants';

/** Product feed of the BAS shop on dezentralshop.ch. */
const SHOP_ENDPOINT = 'https://dezentralshop.ch/embed/BAS.json/';
const SHOP_FETCH_TIMEOUT_MS = 8000;

export interface ShopProduct {
  id: number;
  name: string;
  short_description: string;
  image_url: string;
  product_url: string;
  price: string;
  price_formatted: string;
  checkout_url: string;
  type: 'simple' | 'variable';
}

function str(value: unknown): string {
  return typeof value === 'string' ? value : typeof value === 'number' ? String(value) : '';
}

/**
 * Product images are rendered with next/image, which throws for hosts that
 * are not listed in `images.remotePatterns` (next.config.ts). Images from any
 * other host are dropped, so the card shows its placeholder instead.
 */
function allowedImageUrl(value: unknown): string {
  if (typeof value !== 'string' || !value) return '';
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && url.hostname === 'dezentralshop.ch' ? url.toString() : '';
  } catch {
    return '';
  }
}

/** One feed entry as a ShopProduct, or null when it has no id or name. */
function toShopProduct(entry: unknown): ShopProduct | null {
  if (typeof entry !== 'object' || entry === null) return null;
  const raw = entry as Record<string, unknown>;
  const id =
    typeof raw.id === 'number' ? raw.id : typeof raw.id === 'string' && raw.id.trim() ? Number(raw.id) : NaN;
  const name = str(raw.name).trim();
  if (!Number.isFinite(id) || !name) return null;
  return {
    id,
    name,
    short_description: str(raw.short_description),
    image_url: allowedImageUrl(raw.image_url),
    product_url: str(raw.product_url),
    price: str(raw.price),
    price_formatted: str(raw.price_formatted),
    checkout_url: str(raw.checkout_url),
    type: raw.type === 'variable' ? 'variable' : 'simple',
  };
}

/**
 * The shop's products, read when the /shop page is (re)generated.
 *
 * A failure during the build returns null, so the page shows a link to the
 * shop instead of failing the deploy. A failure while regenerating the page
 * later throws, which keeps the last good page until the next attempt.
 */
export async function getShopProducts(): Promise<ShopProduct[] | null> {
  try {
    const response = await fetch(SHOP_ENDPOINT, { signal: AbortSignal.timeout(SHOP_FETCH_TIMEOUT_MS) });
    if (!response.ok) throw new Error(`Shop feed returned HTTP ${response.status}`);

    const feed: unknown = await response.json();
    const products = (feed as { products?: unknown } | null)?.products;
    if (!Array.isArray(products)) throw new Error('Shop feed has no product list');

    const valid = products.map(toShopProduct).filter((p): p is ShopProduct => p !== null);
    if (products.length > 0 && valid.length === 0) throw new Error('Shop feed has no usable products');
    // Duplicate ids would collide as React keys.
    const seen = new Set<number>();
    return valid.filter((p) => !seen.has(p.id) && Boolean(seen.add(p.id)));
  } catch (error) {
    if (process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD) throw error;
    console.warn('[shop] could not load products during the build:', error instanceof Error ? error.message : error);
    return null;
  }
}
