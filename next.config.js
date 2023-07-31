const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPWA({
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [
      "mpf-public-data.s3.ap-south-1.amazonaws.com",
      "mpf-public-data.s3-ap-south-1.amazonaws.com",
      "images.unsplash.com",
    ],
    deviceSizes: [450, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
});

module.exports = nextConfig;
