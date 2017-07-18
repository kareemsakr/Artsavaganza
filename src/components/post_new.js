import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class NewPost extends Component {
  addPost(){
    this.props.creatPost({
        "title": "first post",
        "author": {
            "1" : "gabito"
        },
        "images":{
                "photo title 1": "image data 1",
                "photo title 2": "image data 2"
            },
        "description":"blah balh",
        "tags":[
            "abstract",
            "futuristic"
        ],
        "date":"sysdate"
    });
  }
  render() {
    return (
      <div><button 
        onClick={this.addPost.bind(this)} 
        className="btn btn-primary"
        >Add Post</button>
        </div>
    );
  }
}


export default connect(null, actions)(NewPost);
