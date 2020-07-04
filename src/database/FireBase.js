import firebase from 'firebase'; 
import firestore from 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBAZ76hI3biJ-ykPHCqUa6XI3yTskwPnbw",
    authDomain: "projetoteste-a3d98.firebaseapp.com",
    databaseURL: "https://projetoteste-a3d98.firebaseio.com",
    projectId: "projetoteste-a3d98",
    storageBucket: "projetoteste-a3d98.appspot.com",
    messagingSenderId: "409894047076",
    appId: "1:409894047076:web:67bee0e0b26d5c59f73e71",
    measurementId: "G-GPCY9K1NMS"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;