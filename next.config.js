/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["v0.blob.com"],
  },
  // Since we're deploying to auradevelopment5m.github.io directly
  // we don't need basePath or assetPrefix
  trailingSlash: true,
}

module.exports = nextConfig

