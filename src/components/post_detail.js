import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';


class PostDetail extends Component {
  componentDidMount(){
    this.props.fetchPost('-Kp3yzW88yvCIwSO2hMJ');
  }
  render() {
    return (
      <div>Post detial</div>
    );
  }
}


export default connect(null, actions)(PostDetail);
