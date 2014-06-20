/*!
 * threejs-boilerplate - gulpfile.js
 * Description: Generates dist folder for deployment
 *
 * How to use:
 * Run: gulp
 */
'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');

// Generate dist folder for production
gulp.task('default', function() {
  console.log('\nGenerating minified project in: dist/\n');
  gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});
