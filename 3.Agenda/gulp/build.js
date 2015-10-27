module.exports = function (gulp, config) {
	'use strict';

	var fs = require("fs");
	var browserify = require("browserify");
	var babelify = require("babelify");
	var source = require('vinyl-source-stream');

	return function (done) {
		browserify({
    		entries: config.path.js.init,
    		extensions: ['.jsx'],
    		debug: true
		})
		.transform(babelify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.path.js.dest));

		done();

		function errorBuild (err) {
			console.log("Error : " + err.message);
		}
	};
};
