import firebase from 'firebase';
require("@firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBmM9kElNYGyBT9XyijQ-8RflHHwrBISLs",
    authDomain: "project-71-85ef6.firebaseapp.com",
    projectId: "project-71-85ef6",
    storageBucket: "project-71-85ef6.appspot.com",
    messagingSenderId: "78037772704",
    appId: "1:78037772704:web:ce801fd4c3ce131db65cc5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();