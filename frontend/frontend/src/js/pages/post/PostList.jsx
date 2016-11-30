const React = require("react");
const { RefluxComponent } = require("react-commons");
const LatestPosts = require("./LatestPosts");
const PostActions = require("../../actions/PostActions");
const PostStore = require("../../stores/PostStore");


class PostList extends RefluxComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.listenToStore(PostStore, this.onPostStoreChange);
    }

    onPostStoreChange = () => this.forceUpdate();  // Re-render the post list of PostStore has changed

    onClickMore = () => PostActions.getMorePost(PostStore.posts.length);

    render = () => {
        console.log('loaded post in frontend : ', PostStore.posts);

        return <LatestPosts posts={PostStore.posts} onClickMore={this.onClickMore}/>;
    }
}

module.exports = PostList;