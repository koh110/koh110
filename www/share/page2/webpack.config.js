const webpack = require('webpack')

const APP_ROOT = __dirname
const DIST_DIRECTORY = `${APP_ROOT}/dist`

module.exports = {
  entry: {
    vendor: [`${APP_ROOT}/vendor.js`],
    app: [`${APP_ROOT}/index.js`]
  },
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    path: DIST_DIRECTORY,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
    }
  },
  devServer: {
    contentBase: APP_ROOT,
    hot: true,
    inline: true,
    stats: 'errors-only',
    port: 8282,
    host: '0.0.0.0',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    exclude: ['transform-regenerator']
                  }
                ],
                '@babel/preset-react'
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
              publicPath: '/'
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
