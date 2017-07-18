/*
samplePosts = {
    "id1" : {
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
    },
    "id2" : {
        "title": "2nd post",
        "author": {
            "2" : "mohamed author"
        },
        "images":{
                "photo title 1": "image data 1",
                "photo title 2": "image data 2"
            },
        "description":"blah balh",
        "tags":[
            "abstract",
            "colorful"
        ],
        "date":"sysdate"
    }
}

sampleUsers = {
    "author1@gmail.com": {
        "name" : "gabito",
        "posts" : {
            "id1" : {
                "title" : "first Post",
                "thumbnail": "first image thumbnail"
            }
        }
    },
    "author2@gmail.com": {
        "name" : "mashlaz",
        "posts" : {
            "id1" : {
                "title" : "first Post",
                "thumbnail": "first image thumbnail"
            }
        }
    }
}

*/

import * as firebase from 'firebase';
import {
    FETCH_POSTS,
    FETCH_POST
} from './types'

var config = {
  //apiKey: "<API_KEY>",
  //authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://artsvaganza.firebaseio.com/",
  //storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);

export function fetchPosts(){
      return dispatch => {
        var postsRef = firebase.database().ref('/posts/' );
        // postsRef.once('value').then(function(snapshot) {
        //     console.log(snapshot.val());
        //     dispatch({
        //         type: FETCH_POSTS,
        //         payload: snapshot.val()
        //     });
        // });
        postsRef.on('value',function(snapshot) {
            console.log(snapshot.val());
            dispatch({
                type: FETCH_POSTS,
                payload: snapshot.val()
            });
        },function(error){
            console.log(error);
        });
     };
}

export function fetchPost(id){
    return dispatch => {
        var postRef = firebase.database().ref('/posts/' + id);
          postRef.once('value').then(function(snapshot) {
            dispatch({
                type: FETCH_POST,
                payload: snapshot.val()
            });
        });


        // var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
        //     starCountRef.on('value', function(snapshot) {
        //     updateStarCount(postElement, snapshot.val());
        //     });

    };
}


export function creatPost(post){
  return dispatch => firebase.database().ref('/posts/' ).push(post);
}

export function deletePost(key) {
  return dispatch => firebase.database().ref('/posts/' ).child(key).remove();
}
