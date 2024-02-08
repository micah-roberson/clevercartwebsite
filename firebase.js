// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjSSCOpWwBgu2fmVT0lxD6VmXB_ZbwU4c",
  authDomain: "cleverwebsite-d95ab.firebaseapp.com",
  databaseURL: "https://cleverwebsite-d95ab-default-rtdb.firebaseio.com",
  projectId: "cleverwebsite-d95ab",
  storageBucket: "cleverwebsite-d95ab.appspot.com",
  messagingSenderId: "102930930143",
  appId: "1:102930930143:web:cb861d202ade0f9dc44c6a",
  measurementId: "G-LCDYZ9ZYCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);