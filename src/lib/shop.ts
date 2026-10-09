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
    return products as ShopProduct[];
  } catch (error) {
    if (process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD) throw error;
    console.warn('[shop] could not load products during the build:', error instanceof Error ? error.message : error);
    return null;
  }
}
