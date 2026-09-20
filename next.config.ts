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
  `connect-src 'self' https://api.coingecko.com https://vercel.live${isDev ? ' ws: wss:' : ''}`,
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
      {
        source: '/meetups-events',
        destination: '/events',
        permanent: true,
      },
      {
        // Legacy Squarespace form page; membership registration lives on Webling.
        source: '/membership-form',
        destination: '/membership/private-individuals/register',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's2.coinmarketcap.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.coingecko.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'static4.businessinsider.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dezentralshop.ch',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'staging.dezentralshop.ch',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
