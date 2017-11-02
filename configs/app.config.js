/*
 * filename: app.config.js
 * purpose: application level configurations
 * author: j-sparrow
 *
 */

const path = require('path')

module.exports = {
  srcPath: path.resolve(__dirname, '../src'),
  entryNames: ['index', 'mypage'],
  entryPaths: ['../src/pages/index/index.hbs', '../src/pages/mypage/index.hbs'], // note here, use .hbs as entry instead of .js
  outputRoot: path.resolve(__dirname, '../dist')
}
