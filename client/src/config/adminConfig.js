import firebase from "firebase/app";
import 'firebase/auth';

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB7rZGY1JaTk_WFxAzTuY9TLDU5FUFz7XQ",
    authDomain: "admin-amazingpetgrooming.firebaseapp.com",
    databaseURL: "https://admin-amazingpetgrooming.firebaseio.com",
    projectId: "admin-amazingpetgrooming",
    storageBucket: "admin-amazingpetgrooming.appspot.com",
    messagingSenderId: "864580981123"
  };

  var fireAdmin = firebase.initializeApp(firebaseConfig, "auth");
  export default fireAdmin;
