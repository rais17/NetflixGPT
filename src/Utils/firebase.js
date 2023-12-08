import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgPUJEz_H2QHfIvcTc8Js_BhZ5VliYSjc",
  authDomain: "netflixgpt-3f04a.firebaseapp.com",
  projectId: "netflixgpt-3f04a",
  storageBucket: "netflixgpt-3f04a.appspot.com",
  messagingSenderId: "165595879888",
  appId: "1:165595879888:web:738927adde5f3d6b6241d5",
  measurementId: "G-YEL4ZE9GL8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
