'use strict';

const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const pleeease = require('gulp-pleeease');
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');
const webpack = require('webpack');
const browserSync = require('browser-sync');
const notifier = require('node-notifier');

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
        'node_modules/jquery/dist/jquery.min.js'
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
  js: {
    files: [
      `${APP_ROOT}/js/**/*.js`
    ],
  },
  webpack: {
    entry: `${APP_ROOT}/js/app.js`,
    devtool: '#source-map',
    output: {
      path: `${APP_ROOT}/public/dist`,
      filename: 'app.js'
    },
    externals: {
      document: 'document',
      jquery: '$'
    },
    resolve: {
      root: `${APP_ROOT}/js`,
      extensions: ['', '.js']
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
  },
  style: {
    output: {
      filename: 'style.css'
    },
    files: [
      `${APP_ROOT}/styles/**/*.scss`
    ],
    prefixer: [
      'last 1 versions',
      'ie >= 11',
      'safari >= 9',
      'ios >= 9',
      'android >= 5'
    ]
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
  }
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

gulp.task('styles', () => {
  return gulp.src(config.style.files)
  .pipe(plumber(plumberNotifier('styles')))
  .pipe(pleeease({
    autoprefixer: {
      browsers: config.style.prefixer
    },
    sass: true,
    minifier: false,
    out: config.style.output.filename
  }))
  .pipe(plumber.stop())
  .pipe(gulp.dest(config.dist.directory));
});
gulp.task('watch-styles', () => {
  gulp.watch(config.style.files, ['styles']);
});

// js系処理
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
  return gulp.src(config.js.files)
  .pipe(plumber(plumberNotifier('lint')))
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failOnError())
  .pipe(plumber.stop());
});
gulp.task('build', ['vendor', 'webpack', 'styles'], () => {});
gulp.task('watch', ['watch-webpack', 'watch-styles'], () => {
  gulp.watch([
    `${APP_ROOT}/index.html`,
    `${config.webpack.output.path}/${config.webpack.output.filename}`,
    `${config.dist.directory}/${config.style.output.filename}`
  ], ['reloadServer']);
});
gulp.task('default', ['build', 'watch', 'server']);
