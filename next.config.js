/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "./",
  basePath: "",
  distDir: "out",
}

module.exports = nextConfig

