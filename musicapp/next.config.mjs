/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  env: {
    UNSPLASH_API_KEY: process.env.UNSPLASH_API_KEY,
  },
  async rewrites() {
    return [
      {
        source: "/unsplash/:path*",
        destination: "https://api.unsplash.com/:path*",
      },
      {
        source: "/deezer/:path*",
        destination: "https://api.deezer.com/:path*",
      },
    ];
  },
};

export default nextConfig;
