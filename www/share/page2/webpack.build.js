const webpackConfig = require('./webpack.config.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const APP_ROOT = __dirname
const DIST_DIRECTORY = `${APP_ROOT}/dist`

module.exports = {
  entry: webpackConfig.entry,
  output: {
    path: DIST_DIRECTORY,
    filename: '[name].js'
  },
  mode: 'production',
  resolve: webpackConfig.resolve,
  module: webpackConfig.module,
  plugins: [
    new CleanWebpackPlugin([DIST_DIRECTORY]),
    new CopyWebpackPlugin([
      { from: `${APP_ROOT}/index.html` },
      { from: `${APP_ROOT}/img/bg.jpg`, to: 'img' }
    ])
  ]
}
