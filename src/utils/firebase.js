// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLaAKwZ7H6x7rf4VBB6V6SSDeVWWJKqOA",
  authDomain: "vr-ar-visualizator.firebaseapp.com",
  projectId: "vr-ar-visualizator",
  storageBucket: "vr-ar-visualizator.appspot.com",
  messagingSenderId: "875277050298",
  appId: "1:875277050298:web:ac311193bcf8a7ead47d83",
  measurementId: "G-THEC31JCCP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
