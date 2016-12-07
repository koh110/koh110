'use strict';

const path = require('path');
const webpack = require('webpack');

const APP_ROOT = `${path.resolve(__dirname)}`;

module.exports = {
  entry: `${APP_ROOT}/components/app.js`,
  devtool: '#source-map',
  output: {
    path: `${APP_ROOT}/public/dist`,
    filename: 'app.js',
    publicPath: '/dist/'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  resolve: {
    modules: [
      'node_modules',
      `${APP_ROOT}/components`
    ],
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', ['es2015', { 'modules': false }]]
        }
      }]
    }, {
      test: /\.(jpg|jpeg|png|gif|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'images/[hash].[ext]'
        }
      }]
    }, {
      test: /\.s?css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: () => {
            const autoprefixer = require('autoprefixer');
            const precss = require('precss');
            return {
              defaults: [autoprefixer, precss],
              cleaner: [autoprefixer({
                browsers: [
                  'last 1 versions',
                  'ie >= 11',
                  'safari >= 9',
                  'ios >= 9',
                  'android >= 5'
                ]
              })]
            };
          }
        }
      }]
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.js$/,
      minimize: true
    })
  ]
};
