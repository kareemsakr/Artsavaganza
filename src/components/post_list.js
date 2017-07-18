import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';


class PostList extends Component {
  componentDidMount(){
        this.props.fetchPosts();
    }
  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      //return <PostItem key={key} post={post} id={key} />
      return(
        <div key={key}>{post.title}</div>
      );
    });
  }
  render() {
    if(!this.props.posts){
      return(
        <div>Loading ...</div>
      );
    }
    return (
      <div>{this.renderPosts()}</div>
    );
  }
}

function mapsStateToProps({posts}, ownProps){
    //console.log('this is the state at the moment', posts);
    //return {post: posts[ownProps.match.params.id]}
    return {posts};
}
export default connect(mapsStateToProps, actions)(PostList);
