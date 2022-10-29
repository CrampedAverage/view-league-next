/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ddragon.leagueoflegends.com"],
  },
  experimental: { appDir: true },
};

module.exports = nextConfig;
