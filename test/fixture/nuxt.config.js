const { resolve } = require('path')

require('dotenv').config()

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    {
      handler: require('../../'),
      options: {
        dev: true,
        hsts: {
          maxAge: 15552000,
          includeSubDomains: true,
          preload: true
        },
        csp: {
          directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            connectSrc: ["'self'"],
            imgSrc: ["'self'"],
            styleSrc: ["'self'"]
          },
          loose: false,
          reportOnly: false,
          setAllHeaders: false,
          disableAndroid: false,
          browserSniff: true
        },
        referer: 'same-origin',
        features: {
          notifications: ["'none'"]
        },
        securityFile: {
          contacts: [
            'mailto:security@example.com',
            'https://example.com/security'
          ],
          canonical: 'https://example.com/.well-know/security.txt',
          preferredLanguages: ['fr', 'en'],
          encryptions: ['https://example.com/pgp-key.txt'],
          acknowledgments: ['https://example.com/hall-of-fame.html'],
          policies: ['https://example.com/policy.html'],
          hirings: ['https://example.com/jobs.html']
        },
        additionalHeaders: true
      }
    }
  ],
  buildModules: ['@nuxtjs/dotenv']
}
