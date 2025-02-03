/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Remove trailing slash as it can cause issues
  trailingSlash: false,
  // Remove basePath and assetPrefix - let's handle paths directly
}

module.exports = nextConfig

