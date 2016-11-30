var React = require("react");
var ReactDOM = require("react-dom/server"); // Include react-dom for server rendering here

var LatestPosts = require('./pages/post/LatestPosts');

function renderPostList(elements, webHost) {
    return ReactDOM.renderToString(<LatestPosts posts={elements} webHost={webHost} canShowMore={true} onClickMore={noop}/>);
}

function noop() {
    return false;
}

module.exports = {
    renderPostList: renderPostList
};