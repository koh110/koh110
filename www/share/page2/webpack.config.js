const webpack = require('webpack')

const APP_ROOT = __dirname
const DIST_DIRECTORY = `${APP_ROOT}/dist`

module.exports = {
  entry: {
    vendor: [
      `${APP_ROOT}/vendor.js`
    ],
    app: [
      `${APP_ROOT}/index.js`
    ]
  },
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    path: DIST_DIRECTORY,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      'node_modules',
      APP_ROOT
    ],
    extensions: ['.js']
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
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      }]
    }, {
      test: /\.(jpg|jpeg|png|gif|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
          publicPath: '/'
        }
      }]
    }, {
      test: /\.s?css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader',
        options: {
          includePaths: [
            APP_ROOT
          ]
        }
      }, {
        loader: 'postcss-loader',
        options: {
          config: {
            ctx: {
              cssnext: {},
              cssnano: {},
              autoprefixer: {

              }
            }
          },
          plugins: (loader) => {
            require('autoprefixer')({
              browsers: [
                'last 1 versions',
                'ie >= 11',
                'safari >= 9',
                'ios >= 9',
                'android >= 5'
              ]
            })
          }
        }
      }]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
