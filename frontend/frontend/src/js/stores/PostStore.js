/**
 * Created by bladron on 07/04/16.
 */
const Reflux = require('reflux');
const PostActions = require("../actions/PostActions");
const { PostApi } = require("../api/Api");


var PostStore = Reflux.createStore({
    init() {
        this.listenTo(PostActions.getMorePost, this.onGetMorePost);

        this.posts = [];
    },

    initPosts(posts) {
        if(posts) {
            this.posts = posts;
        } else {
            // If server rendering is disabled, we must get post from API
            this._getPosts();
        }
    },

    onGetMorePost(from) {
        // Get more posts from server
        this._getPosts(from);
    },

    _getPosts(from = 0) {
        PostApi.getPosts(from).done( (posts) => {
            this.posts = this.posts.concat(posts);
            this.trigger();
        });
    }

});

module.exports = PostStore;