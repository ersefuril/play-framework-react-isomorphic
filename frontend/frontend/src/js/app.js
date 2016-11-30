const ReactBoot = require('./utils/ReactBoot');
const PostList = require('./pages/post/PostList');
const PostStore = require('./stores/PostStore');

console.log('Loading posts from frontend...');
PostStore.posts = window._react_post_list_data; // Get loaded post from backend and put it into the Store
ReactBoot.tryBoot(PostList, "post-list"); // Inject React app in a <div> with this particular id
