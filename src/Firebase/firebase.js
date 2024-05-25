import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// const firebaseConfig = {
//   apiKey: "AIzaSyArVuBGAr83SUhMxrKN42uYI6_boBnKZxA",
//   authDomain: "edusphere-e6dff.firebaseapp.com",
//   projectId: "edusphere-e6dff",
//   storageBucket: "edusphere-e6dff.appspot.com",
//   messagingSenderId: "736364881793",
//   appId: "1:736364881793:web:79aa17e6778de7fabb6a80"
// };

const firebaseConfig = {
  apiKey: 'AIzaSyCNud7bK9waPXBHtSC8o1BawA4mQ_ITBP0',
  authDomain: 'edusphere-1fdc2.firebaseapp.com',
  projectId: 'edusphere-1fdc2',
  storageBucket: 'edusphere-1fdc2.appspot.com',
  messagingSenderId: '233862817439',
  appId: '1:233862817439:web:6fccffb923622b5d18e4aa',
  measurementId: 'G-E0M58TG3CH',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const ref = firebaseApp.storage().ref();
const app = initializeApp(firebaseConfig);

export { auth, db, storage, ref, app };
