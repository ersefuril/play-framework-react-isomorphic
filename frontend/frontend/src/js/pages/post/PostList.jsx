const React = require("react");
const { RefluxComponent } = require("react-commons");
const LatestPosts = require("./LatestPosts");
const Api = require("../../api/Api");
//const PostActions = require("../../actions/PostActions");
//const PostStore = require("../../stores/PostStore");


class PostList extends RefluxComponent {
    initialState = () => ({
        posts: [],
        postCount: 5,
        noMoreData: false
    });

    constructor(props) {
        super(props);
        this.state = this.initialState();

        // Get posts from server
        Api.PostApi.getPosts().done( (posts) => {
            this.setState({ posts: posts });
        });
    }

    componentDidMount() {
        //this.listenToStore(PostStore, this.onPostStoreChange);
    }

    onPostStoreChange = () => this.forceUpdate();

    //_canShowMore = () => this.state.postCount < PostStore.posts.length;

    onClickMore = () => {
        //if(this.state.postCount < PostStore.posts.length)
        //    this.setState({postCount: this.state.postCount + 5}); //Allow the browser to show the next already loaded posts
        //
        //PostActions.getMorePost();
    };

    render = () => (
        <LatestPosts posts={this.state.posts}/>
    );
}

module.exports = PostList;