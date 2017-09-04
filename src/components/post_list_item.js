import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class PostListItem extends Component {
  render() {
    return (
      <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBlock>
          <CardTitle>{this.props.post.title}</CardTitle>
          <CardSubtitle>{this.props.post.author.name}</CardSubtitle>
          <CardText>{this.props.post.description}</CardText>
        </CardBlock>
      </Card>
    </div>
    );
  }
}
