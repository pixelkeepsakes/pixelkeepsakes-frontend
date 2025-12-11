import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    qualities: [75, 90],
  },
};

export default config;