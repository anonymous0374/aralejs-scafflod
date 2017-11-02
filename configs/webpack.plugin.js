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

// generate plugins depending on AppConfig
function generatePlugins(config) {
  var i = 0,
    len = AppConfig.entries.length,
    plugins = []

  for (i = 0; i < len; i += 1) {
    let template = AppConfig.entries[i]
    plugins.push(new HtmlWebpackPlugin({
      template: path.resolve(__dirname, template)
    }))
  }

  return plugins
}

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, AppConfig.entries[0])
    }),
    // ...generatePlugins(AppConfig),
    /*
        new webpack.optimize.CommonsChunkPlugin({
          name: 'common' // name the bundle for common modules across different bundles
        }),*/
  ]
};
