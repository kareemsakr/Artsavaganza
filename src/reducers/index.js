import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import LoggedUserReducer from './reduer_logged_user';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  posts:PostsReducer,
  user:LoggedUserReducer
});

export default rootReducer;
