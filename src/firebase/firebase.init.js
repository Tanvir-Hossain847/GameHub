// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh05Y4PrQiRnJUNEWYUMAutdNxosXnhmw",
  authDomain: "gamehub-6f431.firebaseapp.com",
  projectId: "gamehub-6f431",
  storageBucket: "gamehub-6f431.firebasestorage.app",
  messagingSenderId: "822617193499",
  appId: "1:822617193499:web:cc6885cd1d422598cd4cbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);