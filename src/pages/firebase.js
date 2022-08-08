// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_D6mpTP13HF3dvRu2Kqd0-Ly6MztVGvc",
  authDomain: "tiktok-clone-8d882.firebaseapp.com",
  projectId: "tiktok-clone-8d882",
  storageBucket: "tiktok-clone-8d882.appspot.com",
  messagingSenderId: "193817260983",
  appId: "1:193817260983:web:964b69529ffd0c85aeae32",
  measurementId: "G-BFK43XY6HB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
  
export default db;