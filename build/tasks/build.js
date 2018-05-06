'use strict';

const gulp          = require('gulp');
const runSequence   = require('run-sequence').use(gulp);

gulp.task('build',cb => runSequence('clean', 'sass', 'bundleJS', 'serve', 'watch'));

gulp.task('default', ['build']);
