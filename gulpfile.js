'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  babel = require('gulp-babel'),
  webpack = require('gulp-webpack'),
  browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  gulp.src('./app/src/*.scss')
    .pipe(sass({
      sourcemap: true
    }).on('error', sass.logError))
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

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
    gulp.watch(['app/*.html','app/*.js']).on('change', browserSync.reload);
});

gulp.task('default', ['sass:watch', 'react:watch', 'webpack','browser-sync']);
