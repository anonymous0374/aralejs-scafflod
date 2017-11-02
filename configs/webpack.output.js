/*
 * filename: webpack.output.js
 * purpose: generate output depending on app.config.js
 * author: j-sparrow
 *
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AppConfig = require('./app.config.js')

// generate plugins depending on AppConfig
function generateOutputs(config) {
  var i = 0,
    len = AppConfig.outputs.length,
    plugins = []

  for (i = 0; i < len; i += 1) {
    let template = AppConfig.entries[i]
    plugins.push(new HtmlWebpackPlugin({
      template: template
    }))
    plugins.push()
  }

  return plugins
}

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]/[name].js'
  }
}
