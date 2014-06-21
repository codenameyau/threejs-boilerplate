/*!
 * threejs-boilerplate - gulpfile.js
 * Description: Generates dist folder for deployment
 *
 * Run: gulp
 */
'use strict';

// Import node packages
var gulp = require('gulp');
var rimraf = require('rimraf');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');

var PATHS = {
  images : 'assets/img/**',
};

// Remove last generated dist folder
gulp.task('clean', function(cb) {
  rimraf('dist/', cb);
});

// Replace build tags in index.html
gulp.task('usemin', ['clean'], function() {
  gulp.src('index.html')
    .pipe(usemin({
      css: [rev()],
      js: [uglify(), rev()],
    }))
    .pipe(gulp.dest('dist/'));
});

// Copy static images (todo: gulp-imagemin)
gulp.task('images', ['clean'], function() {
  gulp.src(PATHS.images)
    .pipe(gulp.dest('dist/img'));
});

// Generate dist folder for production
gulp.task('default', ['clean', 'usemin', 'images']);
