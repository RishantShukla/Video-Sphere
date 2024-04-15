// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0CsHsduo48dRXFFcrdlwSvPml4Kr9wao",
  authDomain: "video-sphere.firebaseapp.com",
  projectId: "video-sphere",
  storageBucket: "video-sphere.appspot.com",
  messagingSenderId: "1052897343167",
  appId: "1:1052897343167:web:a23ce81121939cdcb0780a",
  measurementId: "G-JLJ65VVN40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
