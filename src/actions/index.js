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
    FETCH_POST,
    LOGIN_SUCCESS,
    LOGOUT
} from './types'

var config = {
  //apiKey: "<API_KEY>",
  //authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://artsvaganza.firebaseio.com/",
  storageBucket: "artsvaganza.appspot.com",
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


export function creatPost(post,attachments){
  return dispatch => {
      var myNewPostRef = firebase.database().ref('/posts/' ).push(post);
      //myNewRef.name() gets the Uid of the newly created post (cuz it was created by push)
      //loop over attachments, create a new reference for each image, then upload (one by one or all at once)

      var storageRef = firebase.storage().ref();
      var postsRef = storageRef.child('posts');
      var thisPostRef = postsRef.child(myNewPostRef.key);
      attachments.forEach((attachment) => {
          var spaceRef = thisPostRef.child(attachment.name);
          spaceRef.put(attachment).then(function(snapshot) {
            console.log('Uploaded a blob or file!');
            });
        });
    
  };
}

export function deletePost(key) {
  return dispatch => firebase.database().ref('/posts/' ).child(key).remove();
}





export function login(data){
    //if login is successful
    if(true){
        const user = {
            "id":"1234",
            "email":"author1@gmail.com",
            "name" : "gabito",
            "posts" : {
                "id1" : {
                    "title" : "first Post",
                    "thumbnail": "first image thumbnail"
                }
            }
        }
        return {
            type: LOGIN_SUCCESS,
            payload: {user}
        };
    }
    
}

// triggered to logout the user
export function logout(){
    return {
        type: LOGOUT
    };
}