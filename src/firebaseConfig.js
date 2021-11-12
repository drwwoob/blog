// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNk7St3sf3l61Rhiao-zZ8pjOHoQDKL6I",
  authDomain: "blog-817af.firebaseapp.com",
  databaseURL: "https://blog-817af-default-rtdb.firebaseio.com",
  projectId: "blog-817af",
  storageBucket: "blog-817af.appspot.com",
  messagingSenderId: "43243525777",
  appId: "1:43243525777:web:0641417fb18ce21e1f9130",
  measurementId: "G-5XJGXQ2Y97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);