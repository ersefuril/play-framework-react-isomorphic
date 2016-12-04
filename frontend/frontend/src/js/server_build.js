var React = require("react");
var ReactDOM = require("react-dom/server"); // Include react-dom for server rendering

var LatestPosts = require('./pages/post/LatestPosts');

function renderPostList(elements) {
    return ReactDOM.renderToString(<LatestPosts posts={elements} onClickMore={noop}/>);
}

function noop() {
    return false;
}

module.exports = {
    renderPostList: renderPostList
};