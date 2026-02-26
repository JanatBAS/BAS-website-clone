import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/meetups-events',
        destination: '/events',
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
