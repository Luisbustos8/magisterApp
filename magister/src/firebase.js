import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: process.env.REACT_API_KEY ,
    authDomain: "pruebamagister-61a87.firebaseapp.com",
    projectId: "pruebamagister-61a87",
    storageBucket: "pruebamagister-61a87.appspot.com",
    messagingSenderId: "241603116162",
    appId: "1:241603116162:web:0a83d46877a1caab9cc89b",
    measurementId: "G-J4ZMC9S5TN"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();
