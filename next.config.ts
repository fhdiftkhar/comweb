import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
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
};

export default nextConfig;
