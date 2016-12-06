const ReactBoot = require('./utils/ReactBoot');
const PostList = require('./pages/post/PostList');
const PostStore = require('./stores/PostStore');

// Get loaded post from backend and put it into the Store
PostStore.initPosts(window._react_post_list_data);

ReactBoot.tryBoot(PostList, "post-list"); // Inject React app in a <div> with this particular id