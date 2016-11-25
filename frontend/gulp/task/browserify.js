var connect = require('gulp-connect'),
    gulp = require('gulp'),
    wrap = require('gulp-wrap'),
    handleErrors = require('../utils/handleErrors'),
    browserify   = require('browserify'),
    babelify     = require('babelify'),
    watchify     = require('watchify'),
    uglify       = require('gulp-uglify'),
    gulpif       = require('gulp-if'),
    streamify    = require('gulp-streamify'),
    bundleLogger = require('../utils/bundleLogger'),
    source       = require('vinyl-source-stream'),
    runSequence = require('run-sequence');


var runBrowserifyTask = function (options) {

    var appConfigFile = options.appConfigFile;
    var compress = options.compress;
    var debug = options.debug;
    var outputFile = options.outputFile || 'main.js';
    // this option avoid to have local path in final js build (ex: /Users/romain/build...)
    var fullPaths = options.fullPaths ? options.fullPaths : false;

    var bundleMethod = browserify({
        // Specify the entry point of your app
        entries: options.entries,
        extensions: ['.jsx'],
        global: true,
        debug: debug,
        cache: {}, packageCache: {}, fullPaths: fullPaths
    })
    .transform("babelify")
    .require([{file:appConfigFile, expose:'AppConfig'}]);

    var bundler = options.watch ? watchify(bundleMethod) : bundleMethod;

    var bundle = function() {
        // Log when bundling starts
        bundleLogger.start();

        return bundler

            .bundle()
            // Report compile errors
            .on('error', handleErrors)
            // Use vinyl-source-stream to make the
            // stream gulp compatible. Specify the
            // desired output filename here.
            .pipe(source(outputFile))
            // Trick to force usage of the browserify's require function instead of Wort requirejs's function
            .pipe(gulpif(options.avoidRequireJs, wrap('(function () { var define = undefined; var require = undefined; <%=contents%> })();')))
            .pipe(gulpif(compress, streamify(uglify())))
            // Specify the output destination
            .pipe(gulp.dest(global.target[options.target].js))
            // Refresh browser(s)
            //.pipe(browserSync.reload({stream:true}))
            .pipe(connect.reload())
            // Log when bundling completes!
            .on('end', bundleLogger.end);
    };

    if(options.watch) {
        // Re bundle with watchify on changes.
        bundler.on('update', bundle);
    }

    return bundle();
};


var runBrowserifyServerComponentsTask = function (options) {

    var compress = options.compress;
    // this option avoid to have local path in final js build (ex: /Users/romain/build...)
    var fullPaths = options.fullPaths ? options.fullPaths : false;

    var bundleMethod = browserify({
        // Specify the entry point of your app
        entries: [options.entries],
        extensions: ['.coffee', '.jsx'],
        standalone: options.standalone,
        fullPaths: fullPaths
    })
    .transform("babelify");

    var bundler = options.watch ? watchify(bundleMethod) : bundleMethod;

    var bundle = function() {
        // Log when bundling starts
        bundleLogger.start();

        return bundler

            .bundle()
            // Report compile errors
            .on('error', handleErrors)
            // Use vinyl-source-stream to make the
            // stream gulp compatible. Specify the
            // desired output filename here.
            .pipe(source(options.outputFile))
            // Trick to force usage of the browserify's require function instead of Wort requirejs's function
            .pipe(gulpif(options.avoidRequireJs, wrap('(function () { var define = undefined; var require = undefined; <%=contents%> })();')))
            .pipe(gulpif(compress, streamify(uglify())))
            // Specify the output destination
            .pipe(gulp.dest(global.target[options.target].js))
            // Refresh browser(s)
            //.pipe(browserSync.reload({stream:true}))
            .pipe(connect.reload())
            // Log when bundling completes!
            .on('end', bundleLogger.end);
    };

    return bundle();
};


gulp.task('watchify-frontend-serverjs', ['config'], function() {
    return runBrowserifyServerComponentsTask({
        entries: ['./frontend/src/js/server_build.js'],
        outputFile: 'app-frontend-server.js',
        standalone: 'app',
        avoidRequireJs: true,
        debug:true,
        compress:false,
        target:'local',
        fullPaths: true
    });
});

gulp.task('watchify-frontend-appjs', ['config'], function() {
    return runBrowserifyTask({
        appConfigFile:'./local-conf.js',
        entries: ['./frontend/src/js/app.js'],
        outputFile: 'app-frontend.js',
        avoidRequireJs: true,
        debug:true,
        compress:false,
        watch:true,
        target:'local',
        fullPaths: true
    });
});


gulp.task('watchify-frontend', ['config'], function(cb) {
    runSequence(
        ['watchify-frontend-appjs', 'watchify-frontend-serverjs'],
        cb
    )
});
