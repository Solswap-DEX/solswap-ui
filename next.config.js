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
  // Transpile LI.FI packages so Next.js/webpack can handle their modern ESM syntax
  transpilePackages: [
    '@lifi/widget',
    '@lifi/wallet-management',
    '@lifi/sdk',
    '@bigmi/react',
    '@bigmi/client',
    '@mysten/dapp-kit',
  ],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('./src')
    }

    // Enable webpack 5 import attributes (import ... with { type: 'json' })
    config.module.exprContextCritical = false
    config.experiments = {
      ...config.experiments,
      // Required for modern ESM module attributes
      layers: true,
    }

    return config
  }
}

module.exports = nextConfig

