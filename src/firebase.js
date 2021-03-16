import "firebase";
import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC9sMmhMMRfo165ZaYMyxYNHuGSlwP6ogo",
    authDomain: "fir-store-67734.firebaseapp.com",
    databaseURL: "https://fir-store-67734-default-rtdb.firebaseio.com",
    projectId: "fir-store-67734",
    storageBucket: "fir-store-67734.appspot.com",
    messagingSenderId: "400813115596",
    appId: "1:400813115596:web:0075b26965ad7a99ab9a69"
  };



  firebase.initializeApp(firebaseConfig);


  export default firebase;
