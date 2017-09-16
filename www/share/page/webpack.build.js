const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const APP_ROOT = __dirname
const DIST_DIRECTORY = `${APP_ROOT}/dist`

module.exports = {
  entry: {
    app: [
      `${APP_ROOT}/components/app.js`
    ]
  },
  output: {
    path: DIST_DIRECTORY,
    filename: '[name].js'
  },
  resolve: webpackConfig.resolve,
  module: webpackConfig.module,
  plugins: [
    new CleanWebpackPlugin([DIST_DIRECTORY]),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      minimize: true,
      compress: {
        drop_debugger: true,
        drop_console: true,
        warnings: false
      }
    }),
    new CopyWebpackPlugin([
      { from: `${APP_ROOT}/index.html` },
      { from: `${APP_ROOT}/font-awesome`, to: 'font-awesome' }
    ])
  ]
}
