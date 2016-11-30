const ReactBoot = require('./utils/ReactBoot');
const PostList = require('./pages/post/PostList');
const PostStore = require('./stores/PostStore');

PostStore.posts = window._react_post_list_data; // Take post loaded from backend
ReactBoot.tryBoot(PostList, "post-list");