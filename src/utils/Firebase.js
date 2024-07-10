// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDO1O5gKZ4n2b1EjZAy63NCDtYpSfJ8pM",
  authDomain: "netflixgpt-478ff.firebaseapp.com",
  projectId: "netflixgpt-478ff",
  storageBucket: "netflixgpt-478ff.appspot.com",
  messagingSenderId: "413410162399",
  appId: "1:413410162399:web:055ccd69717d0eb2cd5b6a",
  measurementId: "G-BP1E8SX56X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();