const AppConfig = require('AppConfig');
const { CallAjax } = require("react-commons");

class PostApi {
    static getPosts = (from) => CallAjax.get("http://localhost:9010/api/posts?from=" + from);
}

module.exports = {
    PostApi
};
