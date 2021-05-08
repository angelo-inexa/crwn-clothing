import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBHyWbsJn9cdIF5I6mxIdquv9tb6gwnvSg",
    authDomain: "crwn-db-add10.firebaseapp.com",
    projectId: "crwn-db-add10",
    storageBucket: "crwn-db-add10.appspot.com",
    messagingSenderId: "6306417363",
    appId: "1:6306417363:web:0e5a7cefac34ec41dae226"
  };

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
  export default firebase;