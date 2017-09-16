const webpack = require('webpack')

const APP_ROOT = __dirname
const DIST_DIRECTORY = `${APP_ROOT}/dist`

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?/',
      'webpack/hot/only-dev-server',
      `${APP_ROOT}/index.js`
    ]
  },
  devtool: 'eval-source-map',
  output: {
    path: DIST_DIRECTORY,
    filename: 'app.js',
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
    host: '0.0.0.0'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', ['es2015']],
          plugins: ['transform-object-rest-spread']
        }
      }]
    }, {
      test: /\.(jpg|jpeg|png|gif|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
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
