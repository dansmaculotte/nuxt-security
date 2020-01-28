const hsts = require('hsts')
const csp = require('helmet-csp')
const consola = require('consola')

const logger = consola.withScope('nuxt:csp')

module.exports = function(moduleOptions) {
  const defaults = {
    dev: process.env.CSP_DEV || false,
    hsts: null,
    csp: null
  }
  const options = {
    ...defaults,
    ...this.options['nuxt-csp'],
    ...moduleOptions
  }

  if (!this.nuxt.options.dev || options.dev) {
    logger.info('Configuring module')
  }

  const configureHsts = options => {
    return hsts(options)
  }

  const configureCsp = options => {
    return csp(options)
  }

  if (options.hsts) {
    this.addServerMiddleware(configureHsts(options.hsts))
  }

  if (options.csp) {
    this.addServerMiddleware(configureCsp(options.csp))
  }
}

module.exports.meta = require('../package.json')
