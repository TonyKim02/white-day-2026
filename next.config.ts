import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', // Add this line
  basePath: '/white-day-2026',
  images: {
    unoptimized: true, // Necessary if you're using <Image /> tags on GitHub Pages
  },
};

export default nextConfig;
