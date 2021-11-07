import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

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
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// Initialize Firebase
const app = initializeApp(firebaseConfig);
function App() {
  const liste=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","w","y","z"]
  console.log( app)
  const roulette=()=>{
    return liste[Math.ceil(Math.random()*26)-1]
  }
 
    return (
    <div style={{fontSize:90,display:"flex",justifyContent:'center',alignItems:'center'}}>
    <br/>
    <br/>
    <br/>
 {roulette().toUpperCase()}
    </div>
  );
}

export default App;
