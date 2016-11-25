/**
 * Exit current process according to a boolean condition
 * @param exit true, will exit the process, otherwise do nothing
 * @returns {Function}
 */
module.exports = function(exit) {
    return function() {
        if(exit) {
            process.exit(1);
        }
    }
};