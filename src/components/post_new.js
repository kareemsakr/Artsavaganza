import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import ImageUpload from './my_image_uploader.js';
import _ from 'lodash';
import {Container, Row, Col} from 'reactstrap';
import NewPostForm from './forms/form_post_new.js';

class NewPost extends Component {
    constructor(props) {
        super(props);

        //this.state = {images: {}};
    }

  addPost(){
    this.props.creatPost({
        "title": "first post",
        "author": {
            "name" : "gabito"
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

   submit = (values) => {
    values['author'] = this.props.user;
    values['date'] = new Date();
    var post = _.pick(values,['title','author','description', 'tags','date']);
    this.props.creatPost(post, values.images);
    

  }
    
  render() {
    return (
        <Container>
            <Row>
                <Col xs="6">
                    <NewPostForm onSubmit={this.submit}/>
                </Col>
            </Row>
        </Container>
      
    );
  }
}


export default connect(({user})=>{return {user}}, actions)(NewPost);


