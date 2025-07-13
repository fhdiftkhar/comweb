import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  webpack: (config, { isServer }) => {
    // Exclude the turborepo directory from the build
    config.watchOptions = {
      ignored: ['**/my-turborepo/**'],
    };
    return config;
  },
  // Optimize for Vercel
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

export default nextConfig;
