const React = require("react");


class LatestPosts extends React.Component {

    constructor(props) {
        super(props);
    }

    renderPost = (post) => (
        <div key={post.id}>
            <div>{ post.title }</div>
        </div>
    );

    render = () => (
        <div>
            { this.props.posts.map( (post) => this.renderPost(post)) }
        </div>
    );
}

LatestPosts.defaultProps = {
    posts: []
};

module.exports = LatestPosts;