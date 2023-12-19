/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image123.azureedge.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "hillzimage.blob.core.windows.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
