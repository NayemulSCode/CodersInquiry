
import React from 'react';
import { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';

const GoogleLogIn = () => {
   
    const [loggedInUser, setLoggedInUser] = useState();
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
        }



    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
           firebase.auth()
           .signInWithPopup(provider)
           .then((result) => {
          
           const {displayName, email} = result.user;
           const signInUser = {name: displayName, email}
           var credential = result.credential;
           var token = credential.accessToken;
           var user = result.user;
           setLoggedInUser(signInUser);
     })
     .catch((error) => {
      
       var errorCode = error.code;
       var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      
     });
       }


    return (
        <div>
            <button onClick={handleGoogleSignIn}><i class="fa fa-google" aria-hidden="true"></i>Google </button>
        </div>
    );
};

export default GoogleLogIn;