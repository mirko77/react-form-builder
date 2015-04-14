/*global require */
'use strict';
var gulp = require('gulp');


var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function () {
    return browserify('./source/js/app.js').bundle()
        .pipe(source('react-form-builder.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('default', function() {
    console.log('I am about to build an awesome form builder with React.js');
});
