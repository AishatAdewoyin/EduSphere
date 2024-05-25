
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArVuBGAr83SUhMxrKN42uYI6_boBnKZxA",
  authDomain: "edusphere-e6dff.firebaseapp.com",
  projectId: "edusphere-e6dff",
  storageBucket: "edusphere-e6dff.appspot.com",
  messagingSenderId: "736364881793",
  appId: "1:736364881793:web:79aa17e6778de7fabb6a80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
