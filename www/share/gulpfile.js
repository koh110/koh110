'use strict';

const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');
const webpack = require('webpack');
const browserSync = require('browser-sync');
const notifier = require('node-notifier');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

// アプリケーションの配置ディレクトリ
const APP_ROOT = `${path.resolve(__dirname)}`;

// 設定
const config = {
  dist: {
    directory: `${APP_ROOT}/public/dist`
  },
  server: {
    port: 8282,
    server: {
      baseDir: `${APP_ROOT}/public`,
      index: 'index.html'
    }
  },
  vendor: {
    js: {
      output: {
        filename: 'vendor.js'
      },
      files: [
        'node_modules/react/dist/react.min.js',
        'node_modules/react-dom/dist/react-dom.min.js'
      ]
    },
    style: {
      output: {
        filename: 'vendor.css'
      },
      files: [
        'node_modules/sanitize.css/sanitize.css'
      ]
    }
  },
  scripts: {
    files: [
      `${APP_ROOT}/components/**/*.js`,
      `${APP_ROOT}/components/**/*.jsx`
    ]
  },
  webpack: {
    entry: `${APP_ROOT}/components/app.js`,
    devtool: '#source-map',
    output: {
      path: `${APP_ROOT}/public/dist`,
      filename: 'app.js',
      publicPath: (process.env.NODE_ENV === 'local') ? 'http://localhost:8282/dist' : '/dist'
    },
    externals: {
      jquery: '$',
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    resolve: {
      root: `${APP_ROOT}/components`,
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        },
        {
          test: /\.(jpg|jpeg|png|gif|svg)$/,
          loader: 'file?name=/images/[name].[ext]'
        },
        {
          test: /\.css$/,
          loaders: [
            'style-loader',
            'css-loader?sourceMap',
            'postcss-loader?sourceMap'
          ]
        },
        {
          test: /\.scss$/,
          loaders: [
            'style-loader',
            'css-loader?sourceMap',
            'postcss-loader?sourceMap'
          ]
        }
      ]
    },
    postcss: () => {
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
};

const plumberNotifier = (taskName) => {
  return {
    errorHandler: (error) => {
      const title = `[task]${taskName} ${error.plugin}`;
      const errorMsg = `error: ${error.message}`;
      /* eslint-disable no-console */
      console.error(`${title}\n${error}`);
      /* eslint-enable no-console */
      notifier.notify({
        title: title,
        message: errorMsg,
        time: 3000
      });
    }
  };
};

gulp.task('server', () => {
  browserSync(config.server);
});

gulp.task('reloadServer', () => {
  browserSync.reload();
});

gulp.task('vendor-js', () => {
  return gulp.src(config.vendor.js.files)
  .pipe(plumber(plumberNotifier('vendor-js')))
  .pipe(concat(config.vendor.js.output.filename))
  .pipe(plumber.stop())
  .pipe(gulp.dest(config.dist.directory));
});
gulp.task('vendor-css', () => {
  return gulp.src(config.vendor.style.files)
  .pipe(plumber(plumberNotifier('vendor-css')))
  .pipe(concat(config.vendor.style.output.filename))
  .pipe(plumber.stop())
  .pipe(gulp.dest(config.dist.directory));
});
gulp.task('vendor', ['vendor-js', 'vendor-css']);

const webpackBuild = (conf, cb) => {
  webpack(conf, (err) => {
    if (err) {
      /* eslint-disable no-console */
      console.error(err);
      /* eslint-enable no-console */
      throw err;
    }
    if (!cb.called) {
      cb.called = true;
      return cb();
    }
  });
};
gulp.task('webpack', ['lint'], (cb) => {
  const conf = config.webpack;
  webpackBuild(conf, cb);
});
gulp.task('watch-webpack', ['lint'], (cb) => {
  const conf = Object.assign(config.webpack, { watch: true });
  webpackBuild(conf, cb);
});
gulp.task('lint', () => {
  return gulp.src(config.scripts.files)
  .pipe(plumber(plumberNotifier('lint')))
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failOnError())
  .pipe(plumber.stop());
});
gulp.task('build', ['vendor', 'webpack'], () => {});
gulp.task('watch', ['watch-webpack'], () => {
  gulp.watch([
    `${APP_ROOT}/public/index.html`,
    `${config.webpack.output.path}/${config.webpack.output.filename}`
  ], ['reloadServer']);
});
gulp.task('default', ['build', 'watch', 'server']);
