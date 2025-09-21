import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Help with HMR stability
    optimizePackageImports: ['aos'],
  },
  // Improve development experience
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Improve HMR for development
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
