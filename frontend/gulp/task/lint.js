var gulp                = require('gulp'),
    eslint              = require('gulp-eslint'),
    friendlyFormatter   = require('eslint-friendly-formatter'),
    ESLintConfiguration = require('../utils/ESLintConfiguration'),
    handleErrors        = require('../utils/handleErrors'),
    exitProcess         = require('../utils/exitProcess');

var lintTask = function(exit, folderPath) {
    return gulp.src([folderPath + '/**/*.js', folderPath + '/**/*.jsx', '!' + folderPath + '/app.js'])
        .pipe(eslint(ESLintConfiguration))
        .pipe(eslint.format(friendlyFormatter))
        .pipe(eslint.failAfterError())
        .on('error', handleErrors)
        .on('error', exitProcess(exit));
};

gulp.task('lint-frontend', function () {
    return lintTask(true, './frontend/src/js');
});

gulp.task('lint-editor', function () {
    return lintTask(true, './editor/src/js');
});

gulp.task('lint-commons', function () {
    return lintTask(true, './commons/src/js');
});

gulp.task('lint-local-frontend', function () {
    return lintTask(false, './frontend/src/js');
});

gulp.task('lint-local-editor', function () {
    return lintTask(false, './editor/src/js');
});

gulp.task('lint-local-commons', function () {
    return lintTask(false, './commons/src/js');
});
