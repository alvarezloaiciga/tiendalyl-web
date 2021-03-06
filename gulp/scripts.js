'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
  gulp.task('scripts', function () {
    return gulp.src([
      options.src + '/{app,components}/**/*.js',
      '!' + options.src + '/app/app.module.js',
      '!' + options.src + '/app/**/*.module.js',
    ])
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'))
      .pipe(browserSync.reload({ stream: true }))
      .pipe($.size());
  });
};
