'use strict';

const gulp          = require('gulp');
const runSequence   = require('run-sequence').use(gulp);

gulp.task('build',cb => runSequence('clean', 'sass', 'bundleJS', 'serve'));

gulp.task('default', cb => runSequence('build', 'watch'));
