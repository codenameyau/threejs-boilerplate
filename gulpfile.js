/*!
 * threejs-boilerplate - gulpfile.js
 * Description: Generates dist folder for deployment
 *
 * Run: gulp
 */
'use strict';

// Import node packages
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var rimraf = require('rimraf');


// Configure paths
var PATHS = {

  // Order: lib -> plugin -> main
  scripts : [
    'assets/js/lib/*.js',
    'assets/js/lib/**/*.js',
    'assets/js/*.js'
  ],

  // CSS files in assets
  stylesheets : 'assets/css/*.css'

};


// Remove last generated dist folder
gulp.task('clean', function(cb) {
  rimraf('dist/', cb);
});


// Concat and minify scripts
gulp.task('vendor', function() {
  return gulp.src(PATHS.vendor)
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/vendor.js'));
});


// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});


// Generate dist folder for production
gulp.task('default', ['clean']);
