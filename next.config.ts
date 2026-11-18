import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development';

/**
 * Content-Security-Policy.
 *
 * Next.js emits inline scripts for hydration, so 'unsafe-inline' is required
 * for script-src unless every page becomes dynamically rendered with a nonce.
 * Making pages dynamic would multiply Vercel Blob reads, so a static policy is
 * used instead. The remaining directives (frame-ancestors, object-src,
 * base-uri, form-action, connect-src, frame-src) still close off the most
 * common abuse paths.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://vercel.live`,
  "style-src 'self' 'unsafe-inline'",
  // Admin-created events/posts and Meetup events may reference images on any https host.
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  `connect-src 'self' https://vercel.live${isDev ? ' ws: wss:' : ''}`,
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com https://vercel.live",
  "media-src 'self' https:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  // Pin HTTPS for two years (this host only: other subdomains of the domain
  // are not ours to pin). The CSP already upgrades insecure requests; this
  // also covers the first plaintext request. Ignored over plain HTTP.
  { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

const LEGACY_AUTHOR_SLUGS: Record<string, string> = {
  kronrod: '59025f1030454480d862303f',
  'phil-lojacono': '672bdb3ae0672c1501f39ce8',
  'roger-darin': '54edd73ae4b04709779918e4',
  'luzius-meisser': '5a9907f3e4966b72996b9c31',
};

// Past-event pages live under dated paths; the old index linked the bare slug.
const LEGACY_EVENT_PATHS: Record<string, string> = {
  'regular-meetups': '/most-recent-events/2022/4/1/regular-meetups',
  'lightning-meetup-with-elizabeth-stark-ceo-lightning-labs': '/most-recent-events/2020/1/13/lightning-meetup-with-elizabeth-stark-ceo-lightning-labs',
  'bitcoin-christmas-meetup-zurich': '/most-recent-events/2020/2/4/bitcoin-christmas-meetup-zurich',
  'who-needs-the-internet-anyway-taking-bitcoin-transactions-offline': '/most-recent-events/2019/10/15/who-needs-the-internet-anyway-taking-bitcoin-transactions-offline',
  'andreas-m-antonopoulos-thoughts-on-the-future-of-programmable-money': '/most-recent-events/2019/6/23/andreas-m-antonopoulos-thoughts-on-the-future-of-programmable-money',
  'sidechains-on-btc-drivechain-and-blind-merged-mining-paul-sztorc': '/most-recent-events/2019/6/6/sidechains-on-btc-drivechain-and-blind-merged-mining-paul-sztorc',
  'annual-general-assembly-of-the-bitcoin-association-switzerland-2019': '/most-recent-events/2019/5/22/annual-general-assembly-of-the-bitcoin-association-switzerland-2019',
  'on-chain-defense-in-depth-dr-bob-mcelrath': '/most-recent-events/2019/1/25/on-chain-defense-in-depth-dr-bob-mcelrath',
  '10-years-bitcoin-bitcoin-association-in-davos-during-wef': '/most-recent-events/2019/1/22/10-years-bitcoin-bitcoin-association-in-davos-during-wef',
  'bas-members-meetup-swiss-bitcoin-conference': '/most-recent-events/2026/4/25/bas-members-meetup-swiss-bitcoin-conference',
};

/**
 * Other URLs of the old sites (Squarespace and the earlier static site) that
 * the Wayback Machine has captured and that still have a clear destination.
 * Sources match case-insensitively, so a source must never equal its own
 * destination in another casing. '+' and '(' are escaped for path-to-regexp.
 */
const LEGACY_PATHS: Record<string, string> = {
  '/membership': '/membership/private-individuals',
  '/about': '/about-1',
  '/about.html': '/about-1',
  '/board.html': '/board',
  '/join.html': '/membership/private-individuals',
  '/join-old': '/membership/private-individuals',
  '/corporate-membership': '/membership/corporations',
  '/corporate-members': '/our-corporate-members',
  '/activities.html': '/events',
  '/meetups': '/events',
  '/TokenizedBitcoin': '/tzbtc',
  // Yearly past-event indexes of the old site.
  '/events-:year(201213|2014|2015|2016|2017ff|2018)': '/most-recent-events',
  // Old event pages whose event is covered by a News post.
  '/events-2014/2014/2/23/1st-swiss-bitcoin-association-general-assembly': '/bitcoin-association-switzerland/2014/02/17/general-assembly-2014',
  '/events-2017ff/2017/9/13/tone-vays': '/bitcoin-association-switzerland/2017/9/13/tone-vays-meetup-in-zurich-september-2017',
  '/events-2018/2018/5/16/annual-general-assembly-of-the-bitcoin-association-switzerland-2018': '/bitcoin-association-switzerland/2018/5/17/bitcoin-association-switzerland-2018-general-assembly',
  // The pre-2015 site's blog. Other /blog/* paths are admin-created posts.
  '/blog': '/bitcoin-association-switzerland',
  '/blog/board': '/board',
  '/blog/federal-council-report-no-special-regulation-needed': '/bitcoin-association-switzerland/2014/06/25/federal-council-report-no-special-regulation-needed',
  // A hyphenated copy of the News path that circulates in external links.
  '/bitcoin-associa-tion-switzerland/:path*': '/bitcoin-association-switzerland/:path*',
  // Squarespace's generated slug of a post that was renamed later.
  '/bitcoin-association-switzerland/2021/6/23/01ts1e8cggntafbag86wvwbztvudvh': '/bitcoin-association-switzerland/2021/6/23/comments-on-draft-revised-vasp-guidance',
  '/bitcoin-association-switzerland/announcing-tzbtc-tokenized-bitcoin': '/tzbtc',
  // Squarespace category and tag URLs ('+' for spaces, or encoded spaces).
  '/bitcoin-association-switzerland/category/Ask\\+Me\\+Anything\\+\\(AMA\\)': '/bitcoin-association-switzerland/category/Ask-Me-Anything',
  '/bitcoin-association-switzerland/category/Ask%20Me%20Anything%20\\(AMA\\)':'/bitcoin-association-switzerland/category/Ask-Me-Anything',
  '/bitcoin-association-switzerland/category/Technical\\+Analysis': '/bitcoin-association-switzerland/category/Technical-Analysis',
  '/bitcoin-association-switzerland/category/Technical%20Analysis':'/bitcoin-association-switzerland/category/Technical-Analysis',
  '/bitcoin-association-switzerland/tag/Announcement': '/bitcoin-association-switzerland/category/Announcement',
  '/bitcoin-association-switzerland/tag/tzBTC': '/tzbtc',
  '/bitcoin-association-switzerland/tag/Tokenized\\+Bitcoin': '/tzbtc',
  '/bitcoin-association-switzerland/tag/Tokenized%20Bitcoin':'/tzbtc',
};

// Squarespace filtered the News index by category with a query string.
const LEGACY_CATEGORY_QUERIES: Record<string, string> = {
  '(?<category>Announcement|Events|Opinion|Uncategorized)': ':category',
  'Ask Me Anything \\(AMA\\)': 'Ask-Me-Anything',
  'Technical Analysis': 'Technical-Analysis',
};

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        // Never cache admin pages or admin API responses in shared caches.
        source: '/(admin|api/admin)(.*)',
        headers: [{ key: 'Cache-Control', value: 'no-store' }],
      },
      {
        // Files in public/images keep their names when replaced, so browsers
        // keep them for a day only (they were sent with max-age=0).
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
    ];
  },
  async redirects() {
    return [
      // Old and duplicate URLs, kept working for external links and bookmarks.
      { source: '/meetups-events', destination: '/events', permanent: true },
      { source: '/meetups-events-copy', destination: '/events', permanent: true },
      // Legacy Squarespace form page; membership registration lives on Webling.
      { source: '/membership-form', destination: '/membership/private-individuals/register', permanent: true },
      { source: '/private', destination: '/membership/private-individuals', permanent: true },
      { source: '/join', destination: '/membership/private-individuals', permanent: true },
      { source: '/individual-membership', destination: '/membership/private-individuals', permanent: true },
      { source: '/renew-membership', destination: '/membership/private-individuals/register', permanent: true },
      { source: '/corporate', destination: '/membership/corporations', permanent: true },
      { source: '/board-1', destination: '/board', permanent: true },
      { source: '/candidate-:number(\\d+)', destination: '/candidates', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/home-updated', destination: '/', permanent: true },
      // Top-level copies of News posts.
      {
        source: '/press-release',
        destination: '/bitcoin-association-switzerland/2025/12/8/bitcoin-association-switzerland-appoints-new-board-sets-bold-vision-for-the-future',
        permanent: true,
      },
      {
        source: '/announcement-from-the-new-board',
        destination: '/bitcoin-association-switzerland/2025/12/8/announcement-from-the-board-of-the-bitcoin-association-switzerland',
        permanent: true,
      },
      {
        source: '/bas-welcomes-federal-councils-endorsement',
        destination: '/bitcoin-association-switzerland/2025/2/28/bitcoin-association-switzerland-welcomes-the-federal-councils-endorsement-of-enhanced-bitcoin-regulation',
        permanent: true,
      },
      {
        source: '/12-point-program',
        destination: '/bitcoin-association-switzerland/2025/12/8/statement-on-12-point-program',
        permanent: true,
      },
      ...Object.entries(LEGACY_EVENT_PATHS).map(([slug, destination]) => ({
        source: `/most-recent-events/${slug}`,
        destination,
        permanent: true,
      })),
      ...Object.entries(LEGACY_PATHS).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      ...Object.entries(LEGACY_CATEGORY_QUERIES).map(([value, category]) => ({
        source: '/bitcoin-association-switzerland',
        has: [{ type: 'query' as const, key: 'category', value }],
        destination: `/bitcoin-association-switzerland/category/${category}`,
        permanent: true,
      })),
      {
        // Squarespace's month filter; the archive lists posts by month.
        source: '/bitcoin-association-switzerland',
        has: [{ type: 'query', key: 'month', value: '(?<month>\\d{2})-(?<year>\\d{4})' }],
        destination: '/archive#:year-:month',
        permanent: true,
      },
      // Old listing pages linked a few authors by name instead of by id.
      ...Object.entries(LEGACY_AUTHOR_SLUGS).map(([slug, id]) => ({
        source: '/bitcoin-association-switzerland',
        has: [{ type: 'query' as const, key: 'author', value: slug }],
        destination: `/bitcoin-association-switzerland/author/${id}`,
        permanent: true,
      })),
      {
        // The News author filter moved from a query string to static pages.
        source: '/bitcoin-association-switzerland',
        has: [{ type: 'query', key: 'author', value: '(?<author>[A-Za-z0-9_-]+)' }],
        destination: '/bitcoin-association-switzerland/author/:author',
        permanent: true,
      },
    ];
  },
  images: {
    // Optimized images are kept for a week instead of 4 hours: fewer image
    // transformations on Vercel. A replaced image can show for up to a week.
    minimumCacheTTL: 604800,
    remotePatterns: [
      {
        // Shop product images
        protocol: 'https',
        hostname: 'dezentralshop.ch',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
