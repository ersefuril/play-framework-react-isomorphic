var connect     = require('gulp-connect'),
    del         = require('del'),
    gulp        = require('gulp'),
    runSequence = require('run-sequence');

require('./gulp/config');
require('./gulp/task/browserify');
require('./gulp/task/lint');

gulp.task('clean', function (cb) {
    del.sync(['../backend/public/javascripts/*'], {force: true});
    cb();
});

gulp.task('watch-frontend', ['watchify-frontend'], function(cb) {
    gulp.watch([
        './frontend/src/js/**/*.js',
        './frontend/src/js/**/*.jsx'
    ], ['lint-local-frontend']);
    cb();
});

gulp.task('default', function(cb){
    runSequence(
        'clean',
        ['lint-local-frontend', 'watch-frontend'],
        cb
    );
});

gulp.task('frontend', function(cb){
    runSequence(
        ['lint-local-frontend', 'watch-frontend'],
        cb
    );
});
