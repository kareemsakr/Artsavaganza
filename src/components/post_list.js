import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';


class PostList extends Component {
  componentDidMount(){
        this.props.fetchPosts();
    }
  render() {
    return (
      <div>postList</div>
    );
  }
}


export default connect(null, actions)(PostList);
