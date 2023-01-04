// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-jLovormi4c2x39sIqMAI0a0CBbGyqVU",
  authDomain: "task-manager-8b118.firebaseapp.com",
  projectId: "task-manager-8b118",
  storageBucket: "task-manager-8b118.appspot.com",
  messagingSenderId: "571658982186",
  appId: "1:571658982186:web:7a24983d3157122e4f0453"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}