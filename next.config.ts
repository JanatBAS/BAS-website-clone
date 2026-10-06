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
