import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Animated-Components',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
