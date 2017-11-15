'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var requireDir = require('require-dir');
requireDir('./gulp-tasks');

gulp.task('default', ['sass'], function() {
	gulp.watch('sass/*.scss', ['sass']);
});
