import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import './mystyles.css';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';






import {Home, Header, ArtistDetail, ArtistList, PostDetail, PostList, UserHome, PostNew} from './components/index';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise,reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      <Header />
        <Switch>
          <Route path="/user/:id" component={UserHome} />
          <Route path="/artists/:id" component={ArtistDetail} />
          <Route path="/artists" component={ArtistList} />
          <Route path="/posts/new" component={PostNew} />
          <Route path="/posts/:id" component={PostDetail} />
          <Route path="/posts" component={PostList} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider> 
  , document.getElementById('root'));
