const consola = require('consola')
const hsts = require('hsts')
const csp = require('helmet-csp')
const refererPolicy = require('referrer-policy')
const featurePolicy = require('feature-policy')

const securityFileGenerator = require('./securityFile/generator')
const securityFileFactory = require('./securityFile/factory')
const securityFileMiddleware = require('./securityFile/middleware')

const logger = consola.withScope('nuxt:security')

module.exports = function(moduleOptions) {
  const defaults = {
    dev: process.env.SECURITY_DEV || false,
    hsts: null,
    csp: null,
    referrer: null,
    features: null,
    securityFile: null,
    additionalHeaders: false
  }

  const options = {
    ...defaults,
    ...this.options.security,
    ...moduleOptions
  }

  if (!this.nuxt.options.dev || !options.dev) {
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
    if (!this.nuxt.options.dev || !options.dev) {
      logger.info('Adding HSTS')
    }

    this.addServerMiddleware(configureHsts(options.hsts))
  }

  if (options.csp) {
    if (!this.nuxt.options.dev || !options.dev) {
      logger.info('Adding CSP')
    }

    this.addServerMiddleware(configureCsp(options.csp))
  }

  if (options.referrer) {
    if (!this.nuxt.options.dev || !options.dev) {
      logger.info('Adding Referrer Policy')
    }

    this.addServerMiddleware(configureReferer(options.referrer))
  }

  if (options.features) {
    if (!this.nuxt.options.dev || !options.dev) {
      logger.info('Adding Features Policy')
    }

    this.addServerMiddleware(configureFeatures(options.features))
  }

  if (options.additionalHeaders) {
    if (!this.nuxt.options.dev || !options.dev) {
      logger.info('Adding optional security headers')
    }

    this.addServerMiddleware(configureAddtionnalHeaders())
  }

  if (options.securityFile) {
    if (!this.nuxt.options.dev || !options.dev) {
      logger.info('Adding security file')
    }

    options.securityFile.wellKnowDir = '.well-known'
    options.securityFile.fileName = 'security.txt'

    const securityFileContents = securityFileFactory(options.securityFile)

    this.nuxt.hook('generate:done', () => {
      securityFileGenerator(options.securityFile, securityFileContents, this)
    })

    this.nuxt.hook('render:setupMiddleware', () => {
      securityFileMiddleware(options.securityFile, securityFileContents, this)
    })
  }
}

module.exports.meta = require('../package.json')
