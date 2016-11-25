// Include gulp
var gulp = require('gulp');

gulp.task('config', function(cb){

    global.target = {
        local: {
            js: '../backend/public/javascripts/',
            css: '../backend/public/stylesheets/'
        }
    };

    // Bootstrap path configuration
    //global.bootstrapPath = 'node_modules/bootstrap-sass/assets/';

    // Font-Awesome path configuration
    //global.fontawesomePath = 'node_modules/font-awesome/';

    // Syntax is either :
    // 1) {file:'module_name_or_path'} (relative to node_modules folder) => will means require('module_name_or_path')
    // 2) {file:'path_to_module/module_name', expose:'module_alias'} (relative to node_modules folder) => will means require('module_alias')
    // ie :
    // 1) {file:'react-router'}
    // 2) {file:'reflux/dist/reflux', expose:'reflux'}
    //global.externalDeps = [
        //{file:'bootstrap-sass'},
        //{file:'classnames'},
        //{file:'es6-promise'},
        //{file:'history'},
        //{file:'immutable'},
        //{file:'lodash'},
        //{file:'moment'},
        //{file:'react-router'},
        //{file:'reflux'},
        //{file:'validator'},
        //{file:'aggregation/es6'}
        //{file:'react-dom'}, // All of theses commented dependencies use react-dom and generate conflicts by creating multiple instance of react-dom...
        //{file:'react-select'},
        //{file:'react-bootstrap'},
        //{file:'react-bootstrap-datetimepicker'},
    //];

    cb();
});


