// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDk2QZZ6OpwFWqnTCaC1IwJXCJHTH5vO88",
    authDomain: "mernpractice-8d3d9.firebaseapp.com",
    projectId: "mernpractice-8d3d9",
    storageBucket: "mernpractice-8d3d9.appspot.com",
    messagingSenderId: "675773845823",
    appId: "1:675773845823:web:a30c26085d5a5e1c0cc38a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
