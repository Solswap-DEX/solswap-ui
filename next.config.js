/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  // Required so Next.js can handle global CSS imported by @lifi/widget
  transpilePackages: ['@lifi/widget'],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('./src'),
      '@mysten/dapp-kit': false,
      '@mysten/sui': false
    }
    return config
  }
}

module.exports = nextConfig

