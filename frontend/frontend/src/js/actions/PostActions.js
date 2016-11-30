/**
 * Created by bladron on 07/04/16.
 */
const Reflux = require('reflux');

var PostActions = {
    init: Reflux.createAction(),
    getMorePost: Reflux.createAction()
};


module.exports = PostActions;