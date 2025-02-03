/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Remove assetPrefix and basePath
  trailingSlash: true,
}

module.exports = nextConfig

