import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import { connect } from 'react-redux';

import * as actions from '../actions';



class Header extends Component {
  render() {
    //temp for testing
    this.props.login();
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <Container>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="navbar-brand" to="/">Artzavaganza</Link>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/posts">Art Posts</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/artists">Artists</Link>
                  </li>
                </ul>
                
              </div>
          </Container>
        </nav>
    );
  }
}



export default connect(null, actions)(Header);
