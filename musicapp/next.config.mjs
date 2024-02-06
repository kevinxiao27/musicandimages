/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  env: {
    LASTFM_API_KEY: process.env.LASTFM_API_KEY,
    UNSPLASH_API_KEY: process.env.UNSPLASH_API_KEY,
  },
};

export default nextConfig;
