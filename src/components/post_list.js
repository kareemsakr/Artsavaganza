import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import PostListItem from './post_list_item';

import {  CardDeck} from 'reactstrap';

class PostList extends Component {
  componentDidMount(){
        this.props.fetchPosts();
    }
  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      //return <PostItem key={key} post={post} id={key} />
      return(
        <PostListItem key={key} post={post}></PostListItem>
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
      <CardDeck>{this.renderPosts()}</CardDeck>
    );
  }
}

function mapsStateToProps({posts}, ownProps){
    //console.log('this is the state at the moment', posts);
    //return {post: posts[ownProps.match.params.id]}
    return {posts};
}
export default connect(mapsStateToProps, actions)(PostList);
