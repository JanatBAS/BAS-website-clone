import type { MetadataRoute } from 'next';
import { getCategories, getSortedPosts, getTags, categoryHref, tagHref } from '@/data/blog-posts';
import { candidateProfiles } from '@/data/candidates';
import { getEventPages } from '@/data/events';
import { SITE_URL } from '@/lib/site';

/**
 * Standalone pages. Blog posts, events, candidates and listing pages come
 * from their data modules below. Admin-created posts are left out on purpose:
 * listing them would read Vercel Blob during the build.
 */
const STATIC_PATHS = [
  '/',
  '/start-here',
  '/about-1',
  '/board',
  '/finances',
  '/statutes',
  '/media-kit',
  '/contact-1',
  '/events',
  '/calendar',
  '/most-recent-events',
  '/roadshow-2025',
  '/education',
  '/live',
  '/shop',
  '/tzbtc',
  '/bitcoin-association-switzerland',
  '/archive',
  '/bitcoin-association-ga-board-expansion',
  '/membership/private-individuals',
  '/membership/private-individuals/register',
  '/membership/corporations',
  '/membership/corporations/register',
  '/our-corporate-members',
  '/general-assembly',
  '/candidates',
  '/new-candidates',
  '/faq',
  '/timeline',
  '/how-to-vote',
  '/remotevoting',
  '/presidential-election-announcement',
  '/presidential-election-2025-candidates',
  '/privacy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set([
    ...STATIC_PATHS,
    ...getSortedPosts().map((post) => post.href).filter((href) => href.startsWith('/')),
    ...getCategories().map(categoryHref),
    ...getTags().map(tagHref),
    ...getEventPages().map((event) => event.href),
    ...candidateProfiles.map((profile) => `/${profile.slug}`),
  ]);

  // Static posts are not edited after publication, so their date is their lastmod.
  const postDates = new Map(
    getSortedPosts().map((post) => [post.href, new Date(post.timestamp).toISOString()]),
  );

  return [...paths].map((path) => ({
    url: `${SITE_URL}${path}`,
    ...(postDates.has(path) && { lastModified: postDates.get(path) }),
  }));
}
