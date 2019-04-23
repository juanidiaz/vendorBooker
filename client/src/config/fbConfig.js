import firebase from 'firebase/app';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyBl4LH1flUCZR1mD8HjRdJdC3066qm1Ehw",
    authDomain: "amazingpetgrooming-525b7.firebaseapp.com"
  };
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase; 