/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ddragon.leagueoflegends.com"],
  },
  experimental: { appDir: true },
  basePath: "/src",
};

module.exports = nextConfig;
