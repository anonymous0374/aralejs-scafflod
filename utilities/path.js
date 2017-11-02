/*
 * filename: path.js
 * purpose: resolve path related problems, base on application level
 *   configurations(app.config.js)
 * author: j-sparrow
 */

const path = require('path')

// get output path of .html pages from entry path of .hbs files
function calculateHtmlOutpath(inpath) {
  let outpath = ''
  outpath = path.resolve(__dirname, `${inpath.replace('../src', '../dist').replace('.hbs', '.html').replace('/pages', '')}`)

  return outpath
}

module.exports = {
  calculateHtmlOutpath: calculateHtmlOutpath
}
