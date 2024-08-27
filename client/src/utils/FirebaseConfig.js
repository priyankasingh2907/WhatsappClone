// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClfv3KUS7LhtOHu2FRZGqIgpQ4fDmY934",
  authDomain: "whatsapp-clone-ab8ad.firebaseapp.com",
  projectId: "whatsapp-clone-ab8ad",
  storageBucket: "whatsapp-clone-ab8ad.appspot.com",
  messagingSenderId: "61683209424",
  appId: "1:61683209424:web:26dd43b54e880a42d23ad5",
  measurementId: "G-8JFZCPG9M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const firebaseAuth = getAuth(app);
 