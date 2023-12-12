// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWIQqiIvY3ICJ1dM13X0zQNAGeLE9lqKA",
  authDomain: "edusphere-6b877.firebaseapp.com",
  projectId: "edusphere-6b877",
  storageBucket: "edusphere-6b877.appspot.com",
  messagingSenderId: "440603910034",
  appId: "1:440603910034:web:dd98071795df41e8c4eb4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
