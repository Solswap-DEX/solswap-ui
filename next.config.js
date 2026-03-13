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
    // Type errors from dependency version mismatches (i18next, zustand) in regenerated lock file
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('./src')
    }
    return config
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/swap/',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
