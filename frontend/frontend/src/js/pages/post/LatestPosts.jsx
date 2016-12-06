const React = require("react");


class LatestPosts extends React.Component {

    constructor(props) {
        super(props);
    }

    renderPost = (post, idx) => (
        <div key={idx} className="post">
            <img src={ post.pictureUri } className="post__picture"/>
            <h4 className="post__title">{ post.title }</h4>
        </div>
    );

    render = () => (
        <div>
            { this.props.posts.map( (post, idx) => this.renderPost(post, idx)) }
            <button onClick={this.props.onClickMore}>More posts !</button>
        </div>
    );
}

LatestPosts.defaultProps = {
    posts: []
};

LatestPosts.propTypes = {
    posts               : React.PropTypes.array.isRequired,
    webHost             : React.PropTypes.string,
    canShowMore         : React.PropTypes.bool,
    onClickMore         : React.PropTypes.func
};

module.exports = LatestPosts;