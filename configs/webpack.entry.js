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
    entries = []

  for (i = 0; i < len; i += 1) {
    let entry = {}
    entry[config.entryNames[i]] = path.resolve(__dirname, config.entryNames[i])
  }

  return entries
}

module.exports = {
  // ...getEntries(AppConfig)

  entry: {
    index: path.resolve(__dirname, '../src/pages/index/index.js'),
    mypage: path.resolve(__dirname, '../src/pages/mypage/index.js')
  }
}
