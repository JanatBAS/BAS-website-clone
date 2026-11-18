import type { Metadata } from 'next';

/** Origin of the public site, for absolute URLs (metadata, sitemap, calendar files). */
export const SITE_URL = 'https://www.bitcoinassociation.ch';

/**
 * Open Graph fields shared by every page. The root layout sets these without
 * a url, title or description, so each page's og:title and og:description
 * fall back to its own title and description. A page that sets its own
 * `openGraph` replaces this object, so it spreads it back in.
 */
export const SITE_OPEN_GRAPH = {
  siteName: 'Bitcoin Association Switzerland',
  locale: 'en_GB',
  type: 'website',
  images: [
    {
      url: '/images/branding/logo-with-name.png',
      width: 227,
      height: 238,
      alt: 'Bitcoin Association Switzerland Logo',
    },
  ],
} satisfies NonNullable<Metadata['openGraph']>;
