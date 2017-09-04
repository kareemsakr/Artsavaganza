//when we dont include a specific file name it will default to index
import {
  LOGIN_SUCCESS,
  LOGOUT
} from '../actions/types'


import _ from 'lodash';

export default function (state = null, action){
  if(!action) return state;
  
  switch(action.type){
    case LOGIN_SUCCESS:
      return action.payload.user;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}