/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare compatibility for Next.js 15+
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
