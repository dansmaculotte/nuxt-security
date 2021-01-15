const { resolve } = require('path')
const { writeFileSync, existsSync, mkdirSync } = require('fs')

module.exports = function (options, fileContents, nuxtInstance) {
  const {
    rootDir,
    generate: { dir: generateDir }
  } = nuxtInstance.options

  const generateDirPath = resolve(rootDir, generateDir, options.wellKnowDir)
  const generateFilePath = resolve(generateDirPath, options.fileName)

  if (!existsSync(generateDirPath)) {
    mkdirSync(generateDirPath)
  }

  writeFileSync(generateFilePath, fileContents)
}
