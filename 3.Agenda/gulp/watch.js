module.exports = function (gulp, config) {
	'use strict';

	return function (done) {
		gulp.watch(config.path.watch.js, ['build']);
		done();
		//.watch([config.watch.sass], ['sass'])
	};
};