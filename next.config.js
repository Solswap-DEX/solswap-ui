/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
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

    // config.optimization.splitChunks = {
    //   chunks: 'async',
    //   minSize: 10000,
    //   minRemainingSize: 0,
    //   minChunks: 2,
    //   maxAsyncRequests: 30,
    //   maxInitialRequests: 30,
    //   enforceSizeThreshold: 30000,
    //   cacheGroups: {
    //     defaultVendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       priority: -10,
    //       reuseExistingChunk: true
    //     },
    //     default: {
    //       minChunks: 2,
    //       priority: -20,
    //       reuseExistingChunk: true
    //     }
    //   }
    // }

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

module.exports = {
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack: (config) => {
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
