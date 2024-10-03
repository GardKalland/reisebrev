// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVRQv9qm1vqGPA9laIHANoVFJi9H2Jrz0",
  authDomain: "reisebrev-fe31f.firebaseapp.com",
  projectId: "reisebrev-fe31f",
  storageBucket: "reisebrev-fe31f.appspot.com",
  messagingSenderId: "807703212444",
  appId: "1:807703212444:web:0e3169855d5b4c9b1d9859",
  measurementId: "G-SF4Q1S8SQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);