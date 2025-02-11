'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src('resources/assets/sass/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
});
