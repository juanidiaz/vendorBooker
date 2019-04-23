import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBl4LH1flUCZR1mD8HjRdJdC3066qm1Ehw",
    authDomain: "amazingpetgrooming-525b7.firebaseapp.com"
  };
firebase.initializeApp(config);

export default firebase; 