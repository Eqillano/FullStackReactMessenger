import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNAxeo1uar7Ugsh8JF430_rjzd8_GvI5Q",
    authDomain: "facebook-mess-463cd.firebaseapp.com",
    databaseURL: "https://facebook-mess-463cd.firebaseio.com",
    projectId: "facebook-mess-463cd",
    storageBucket: "facebook-mess-463cd.appspot.com",
    messagingSenderId: "378574906687",
    appId: "1:378574906687:web:9b66322e074f3303cadf8a"
  });

  const db = firebaseApp.firestore()

  export default db;