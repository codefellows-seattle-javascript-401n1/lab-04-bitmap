'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('test', function () {
  return gulp.src(['test/*.js'], {read: false})
      .pipe(mocha());
});

gulp.task('lint', function () {
  return gulp.src(['*.js', 'lib/*.js', 'test/*.js', '!node_modules/*js'])
          .pipe(eslint())
          .pipe(eslint.format());
});
