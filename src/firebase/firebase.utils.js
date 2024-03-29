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
  export const createUserProfileDocument = async (userAuth, additionalData)=>{
      if(!userAuth) return ;
    
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      console.log(snapShot) ;

      if(!snapShot.exists){
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          }catch(error){
            console.log('error creating user ', error.message);
          }
      }
      return userRef;
  }
  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
  export default firebase;