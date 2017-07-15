import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import promise from 'redux-promise';

import {Home, Header, ArtistDetail, ArtistList, PostDetail, PostList, UserHome} from './components/index';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      <Header />
        <Switch>
          <Route path="/user/:id" component={UserHome} />
          <Route path="/artists/:id" component={ArtistDetail} />
          <Route path="/artists" component={ArtistList} />
          <Route path="/posts/:id" component={PostDetail} />
          <Route path="/posts" component={PostList} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider> 
  , document.getElementById('root'));
