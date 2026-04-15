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
  transpilePackages: ['@lifi/widget', '@lifi/wallet-management', '@lifi/sdk'],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('./src')
    }
    return config
  }
}

module.exports = nextConfig

