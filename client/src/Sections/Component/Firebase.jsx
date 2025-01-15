// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import process from "process";

// console.log("API Key:", process.env.REACT_APP_FIREBASE_API_KEY);

// import dotenv from "dotenv";
// dotenv.config();
// import { env } from "process";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const myApiKey = process.env.API_KEY;

// import { env } from "process";
// console.log(env.API_KEY);
// console.log(process.env);
const firebaseConfig = {
  apiKey: "AIzaSyAXl8skpZ4drEKt2KL8mSEpNucUOrv9cfs",
  authDomain: "faithconnect-e9efd.firebaseapp.com",
  projectId: "faithconnect-e9efd",
  storageBucket: "faithconnect-e9efd.firebasestorage.app",
  messagingSenderId: "438854888956",
  appId: "1:438854888956:web:6105e336095ede02059679",
  measurementId: "G-PLGE19W23M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
