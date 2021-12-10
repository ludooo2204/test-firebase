import React from 'react';

import logo from './logo.svg';
import './App.css';
// Import FirebaseAuth and firebase.
import SignInScreen from './components/SignIn'

<<<<<<< HEAD
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword} from "firebase/auth";

const provider = new GoogleAuthProvider();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7Op3GsZJePjR6msXDwwn0X6uNqEQQk9c",
  authDomain: "testfirebase-20be9.firebaseapp.com",
  projectId: "testfirebase-20be9",
  storageBucket: "testfirebase-20be9.appspot.com",
  messagingSenderId: "496784973940",
  appId: "1:496784973940:web:9c827f7f8f04af9aad7121"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize the FirebaseUI Widget using Firebase.


const auth = getAuth();
createUserWithEmailAndPassword(auth, "vachon.ludovic@gmail.com", "123")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    console.log("salut "+user.displayName)
    console.log(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential)
    // ...
  });


=======

>>>>>>> aa85e0b596d9b38b3057d56c79239e43d4d7840a
function App() {
  return (
  <SignInScreen />
  );
}

export default App
