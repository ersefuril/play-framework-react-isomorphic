const AppConfig = require('AppConfig');
const { CallAjax } = require("react-commons");

class PostApi {
    static getPosts = () => CallAjax.get("http://localhost:9010/api/posts");
}

module.exports = {
    PostApi
};
