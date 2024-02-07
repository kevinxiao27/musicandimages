/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  env: {
    UNSPLASH_API_KEY: process.env.UNSPLASH_API_KEY,
  },
};

export default nextConfig;
