// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD6ms4RIraAn4e16g5lJJXqunsvKdyAoA",
  authDomain: "netflixgpt-513f4.firebaseapp.com",
  projectId: "netflixgpt-513f4",
  storageBucket: "netflixgpt-513f4.appspot.com",
  messagingSenderId: "200722585864",
  appId: "1:200722585864:web:d89018330c7ed1f7ccb4bd",
  measurementId: "G-N0GX9YJQEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();