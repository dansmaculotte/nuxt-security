module.exports = function (options, fileContents, nuxtInstance) {
  // render .well-know/security.txt via SSR
  nuxtInstance.addServerMiddleware({
    path: options.wellKnowDir + '/' + options.fileName,
    handler(req, res) {
      res.setHeader('Content-Type', 'text/plain')
      res.end(fileContents)
    }
  })
}
