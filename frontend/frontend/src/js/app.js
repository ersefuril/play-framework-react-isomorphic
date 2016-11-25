require("babel-polyfill");
const ReactBoot = require('./utils/ReactBoot');
const PostList = require('./pages/post/PostList');

// PostStore.posts = window._react_post_list_data;
ReactBoot.tryBoot(PostList, "post-list");