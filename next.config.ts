/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    domains: ['v0.blob.com'],
  },
  basePath: '/aura-network-portfolio', // Replace with your repo name
}

module.exports = nextConfig