const React = require("react");
const { RefluxComponent } = require("react-commons");
const LatestPosts = require("./LatestPosts");
//const PostActions = require("../../actions/PostActions");
//const PostStore = require("../../stores/PostStore");


class PostList extends RefluxComponent {
    initialState = () => ({
        postCount: 5,
        noMoreData: false
    });

    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.posts = [
            { id: 1, title: "Post 1"},
            { id: 2, title: "Post 2"},
            { id: 3, title: "Post 3"}
        ]
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
        <LatestPosts posts={this.posts}/>
    );
}

module.exports = PostList;