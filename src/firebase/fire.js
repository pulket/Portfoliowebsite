// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLzFTm2nkYdGCvihhx2D87BHhXoXJcfxM",
  authDomain: "pulketsite.firebaseapp.com",
  projectId: "pulketsite",
  storageBucket: "pulketsite.appspot.com",
  messagingSenderId: "378574925474",
  appId: "1:378574925474:web:80e9d73532b23ab04631fb",
  measurementId: "G-2CGY5T6Z6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);