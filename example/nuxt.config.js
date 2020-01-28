const { resolve } = require('path')

require('dotenv').config()

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    {
      handler: require('../'),
      options: {
        hsts: {
          maxAge: 15552000,
          includeSubDomains: true,
          preload: true
        }
      }
    }
  ],
  buildModules: ['@nuxtjs/dotenv']
}
