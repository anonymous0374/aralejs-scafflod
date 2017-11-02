/*
 * filename: webpack.entry.js
 * purpose: generate entries depending on app.config.js
 * author: j-sparrow
 *
 */
const path = require('path')
const AppConfig = require('./app.config.js')

function getEntries(config) {
  var i = 0,
    len = config.entryPaths.length,
    entries = {}

  for (i = 0; i < len; i += 1) {
    entries[config.entryNames[i]] = path.resolve(__dirname, config.entryPaths[i])
  }

  return entries
}

module.exports = {
  entry: getEntries(AppConfig)

}
