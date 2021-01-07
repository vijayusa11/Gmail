import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBoWS7oGQs6ZjBpx7a03ofP--kY-5oLIus",
  authDomain: "fir-edc25.firebaseapp.com",
  projectId: "fir-edc25",
  storageBucket: "fir-edc25.appspot.com",
  messagingSenderId: "800808024892",
  appId: "1:800808024892:web:929d3293b412079e8b3c39",
  measurementId: "G-T2JXQHLV1B"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
