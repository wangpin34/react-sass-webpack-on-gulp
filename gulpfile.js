'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel');

gulp.task('sass', function () {
  gulp.src('./app/src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/dist/'));
});

gulp.task('react', function () {
    gulp.src('./app/src/*.jsx')
        .pipe(babel({
            presents:['react']
        }))
        .pipe(gulp.dest('./app/dist/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/src/*.scss', ['sass']);
});

gulp.task('react:watch', function () {
  gulp.watch('./app/src/*.jsx', ['react']);
});


gulp.task('default', ['sass:watch','react:watch']);
