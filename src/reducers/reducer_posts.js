//when we dont include a specific file name it will default to index
import {
    FETCH_POSTS,
    FETCH_POST,
    DELETE_POST
} from '../actions/types'


import _ from 'lodash';


export default function(state = {}, action){
    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);
        case FETCH_POSTS:
            return action.payload;
        case FETCH_POST:
            return {...state, [action.payload.data.id]:action.payload.data};
        default:
            return state;
    }
    
}