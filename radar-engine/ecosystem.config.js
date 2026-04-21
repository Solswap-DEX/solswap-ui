module.exports = {
  apps: [{
    name: 'radar-engine',
    script: './dist/index.js',
    env: { NODE_ENV: 'production' }
  }]
}