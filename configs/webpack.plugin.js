/*
 * filename: webpack.plugin.js
 * purpose: generate entries depending on app.config.js
 * author: j-sparrow
 *
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AppConfig = require('./app.config.js')
const MyPath = require('../utilities/path.js')

// generate plugins depending on AppConfig
function generatePlugins(config) {
  var i = 0,
    len = AppConfig.entryPaths.length,
    plugins = []

  for (i = 0; i < len; i += 1) {
    let template = AppConfig.entryPaths[i]
    let len = template.length
    console.log(`entry: ${template}`)
    console.log(`output: ${MyPath.calculateHtmlOutpath(template)}`)
    plugins.push(new HtmlWebpackPlugin({
      template: path.resolve(__dirname, template),
      filename: `${MyPath.calculateHtmlOutpath(template)}` // remove .hbs postfix
    }))
  }

  return plugins
}

/*
function calculateHtmlOutpath(inpath) {
  let outpath = ''
  outpath = path.resolve(__dirname, `${inpath.replace('../src', '../dist').replace('.hbs', '.html').replace('/pages', '')}`)

  return outpath
}*/

module.exports = {
  plugins: [
    /*
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, AppConfig.entries[0])
      }),*/
    ...generatePlugins(AppConfig) //,
    /*
        new webpack.optimize.CommonsChunkPlugin({
          name: 'common' // name the bundle for common modules across different bundles
        }),*/
  ]
};
