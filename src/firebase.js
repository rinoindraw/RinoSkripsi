// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database"; // Import the necessary database functions

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "bottlecareskripsi.firebaseapp.com",
  databaseURL: "https://bottlecareskripsi-default-rtdb.firebaseio.com",
  projectId: "bottlecareskripsi",
  storageBucket: "bottlecareskripsi.appspot.com",
  messagingSenderId: "305508282878",
  appId: "1:305508282878:web:3ffec74c67ad173a0610af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); // Use getDatabase to access the Realtime Database
