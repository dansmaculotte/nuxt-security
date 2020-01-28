const hsts = require('hsts')

module.exports = function(moduleOptions) {
  const defaults = {
    hsts: null
  }
  const options = {
    ...defaults,
    ...this.options['nuxt-csp'],
    ...moduleOptions
  }

  const configureHsts = options => {
    return hsts(options)
  }

  if (options.hsts) {
    this.addServerMiddleware(configureHsts(options.hsts))
  }
}

module.exports.meta = require('../package.json')
