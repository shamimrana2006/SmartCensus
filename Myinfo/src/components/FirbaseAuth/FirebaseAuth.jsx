// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQV5qnLvrBdVrdYVlEGFozbLyu9NpUyZE",
  authDomain: "smartcensus-7f855.firebaseapp.com",
  projectId: "smartcensus-7f855",
  storageBucket: "smartcensus-7f855.firebasestorage.app",
  messagingSenderId: "126224861956",
  appId: "1:126224861956:web:8afaeecc10180940239e51",
  measurementId: "G-P79T789HLT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export let auth = getAuth(app);
