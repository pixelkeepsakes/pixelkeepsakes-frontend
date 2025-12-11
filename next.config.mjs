/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;