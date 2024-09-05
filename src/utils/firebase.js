// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwGLAP3n1NM8-M8LbZuFwDOPDjvEYKSck",
  authDomain: "watchingo.firebaseapp.com",
  projectId: "watchingo",
  storageBucket: "watchingo.appspot.com",
  messagingSenderId: "718546551384",
  appId: "1:718546551384:web:109b7dc80045de0e43c02d",
  measurementId: "G-Z8KZWY1FF0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
