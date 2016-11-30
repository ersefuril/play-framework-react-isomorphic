/**
 * Created by bladron on 07/04/16.
 */
const Reflux = require('reflux');
const PostActions = require("../actions/PostActions");


var PostStore = Reflux.createStore({
    init() {
        this.listenTo(PostActions.getMorePost, this.onGetMorePost);

        this.posts = [];
        this.remainingPosts = 0;
    },

    initialize(posts){
        this.posts = posts;
    },

    onGetMorePost() {
        //let beforeDate = this.posts.length > 0 ? this.posts[this.posts.length - 1].publishedAt : DEFAULT_DATE;
        //PostActions.getPostBeforeDate(beforeDate, this.cityFilter, this.geolocation, this.geolocationDistance);
    },

    onGetPost(result) {
        //this.posts = this.posts.concat(result.teasers);
        //this.remainingPosts = result.total;
        //this.trigger();
    }

});

module.exports = PostStore;