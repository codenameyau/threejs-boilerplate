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
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');

// Configure paths
var PATHS = {

  // Order: lib, plugins, main
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
gulp.task('scripts', ['clean'], function() {
  return gulp.src(PATHS.scripts)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

// Copy main.css into dist
gulp.task('css', ['clean'], function() {
  gulp.src(PATHS.stylesheets)
    .pipe(gulp.dest('dist/css/'));
})

// Replace build tags in index.html
gulp.task('usemin', ['clean'], function(){
  gulp.src('index.html')
    .pipe(usemin({
      js: [uglify()]
    }))
    .pipe(gulp.dest('dist/'));
});

// Generate dist folder for production
gulp.task('default', ['scripts', 'css', 'usemin']);
