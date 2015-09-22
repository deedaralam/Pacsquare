var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee');
	
var coffeeSources = ['components/coffee/tagline.coffee'];

gulp.task('coffee', function(){
	gulp.src(coffeeSources)
		.pipe(coffee({bare:true}))
		.pipe(gulp.dest('components/scripts'))
});