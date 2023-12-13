// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWIQqiIvY3ICJ1dM13X0zQNAGeLE9lqKA",
  authDomain: "edusphere-6b877.firebaseapp.com",
  projectId: "edusphere-6b877",
  storageBucket: "edusphere-6b877.appspot.com",
  messagingSenderId: "440603910034",
  appId: "1:440603910034:web:dd98071795df41e8c4eb4b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const ref = firebaseApp.storage().ref();
const app = initializeApp(firebaseConfig);


export { auth, db, storage, ref ,app};