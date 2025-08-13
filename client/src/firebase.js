// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-mern-54bf0.firebaseapp.com",
  projectId: "real-estate-mern-54bf0",
  storageBucket: "real-estate-mern-54bf0.firebasestorage.app",
  messagingSenderId: "676392794408",
  appId: "1:676392794408:web:4eaa90443ca274baa8b81d",
  measurementId: "G-1CBYGKFHYF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
