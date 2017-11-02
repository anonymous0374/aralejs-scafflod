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
    len = config.entries.length,
    entries = []

  for (i = 0; i < len; i += 1) {
    entries.push({
      entry: path.resolve(__dirname, config.entries[i])
    })
  }

  return entries
}

module.exports = {
  // ...getEntries(AppConfig)
  entry: {
    app: path.resolve(__dirname, '../src/pages/index/index.js')
  }
}
