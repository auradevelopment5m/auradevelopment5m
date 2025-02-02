/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['v0.blob.com'],
  },
  // Remove basePath if this is your username.github.io repository
  // Keep it if this is a project repository
  // basePath: '/repository-name',
}

module.exports = nextConfig