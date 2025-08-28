import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Optimize for modern browsers
    browsersListForSwc: true,
  },
  // Modern JavaScript output
  swcMinify: true,
};

export default nextConfig;
