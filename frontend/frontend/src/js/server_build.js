var React = require("react");
var ReactDOM = require("react-dom/server");

var LatestPosts = require('./pages/post/LatestPosts');

function renderPostList(elements, webHost) {
    return ReactDOM.renderToString(<LatestPosts elements={elements} webHost={webHost} canShowMore={true} onClickMore={noop}/>);
}

function noop() {
    return false;
}

module.exports = {
    renderPostList: renderPostList
};