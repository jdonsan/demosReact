var gulp = require('gulp');
var config = require('./gulp/config');

function getTask(task) {
	return require('./gulp/' + task)(gulp, config);
}

gulp.task('build', getTask('build'))
	.task('watch', getTask('watch'))
	.task('default', ['build', 'watch']);
