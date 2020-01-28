const hsts = require('hsts')
const csp = require('helmet-csp')
const refererPolicy = require('referrer-policy')
const featurePolicy = require('feature-policy')
const consola = require('consola')

const logger = consola.withScope('nuxt:csp')

module.exports = function(moduleOptions) {
  const defaults = {
    dev: process.env.CSP_DEV || false,
    hsts: null,
    csp: null,
    referer: null,
    features: null,
    additionalHeaders: false
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

  const configureReferer = options => {
    return refererPolicy({
      policy: options
    })
  }

  const configureFeatures = options => {
    return featurePolicy({
      features: options
    })
  }

  const configureAddtionnalHeaders = () => {
    return function hsts(req, res, next) {
      res.setHeader('X-Frame-Options', 'SAMEORIGIN')
      res.setHeader('X-Xss-Protection', '1; mode=block')
      res.setHeader('X-Content-Type-Options', 'nosniff')

      next()
    }
  }

  if (options.hsts) {
    this.addServerMiddleware(configureHsts(options.hsts))
  }

  if (options.csp) {
    this.addServerMiddleware(configureCsp(options.csp))
  }

  if (options.referer) {
    this.addServerMiddleware(configureReferer(options.referer))
  }

  if (options.features) {
    this.addServerMiddleware(configureFeatures(options.features))
  }

  if (options.additionalHeaders) {
    this.addServerMiddleware(configureAddtionnalHeaders())
  }
}

module.exports.meta = require('../package.json')
