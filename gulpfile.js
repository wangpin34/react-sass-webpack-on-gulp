'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  babel = require('gulp-babel'),
  webpack = require('gulp-webpack'),
  server = require('gulp-develop-server');

gulp.task('sass', function() {
  gulp.src('./app/src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/dist/'));
});

gulp.task('react', function() {
  gulp.src('./app/src/*.jsx')
    .pipe(babel({
      presets: ['react']
    }))
    .pipe(gulp.dest('./app/dist/'));
});

gulp.task('webpack', function() {
  gulp.src('./app/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('.'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./app/src/*.scss', ['sass']);
});

gulp.task('react:watch', function() {
  gulp.watch('./app/src/*.jsx', ['react']);
});

gulp.task('webpack:watch', function() {
  gulp.watch(['./app/dist/*', './app/src/*','./app/app.js'], ['webpack']);
});

gulp.task('server:start', function() {
  server.listen({
    path: './app/bundle.js',
    env: {
      PORT: 3000
    }
  }, function(err) {
    if (err) {
      console.log('Error happened....');
    }
  });
});

gulp.task('server:restart', function() {
  gulp.watch(['./app/bundle.js'], server.restart(function(err) {
    if (err) {
      console.log('Error happened....');
    }
  }));
});

gulp.task('default', ['sass:watch', 'react:watch', 'webpack:watch']);
