// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQoKyd6R10tnYIXy2y8pOQmQ0Gqjvdv8U",
  authDomain: "prepsta-ca43d.firebaseapp.com",
  projectId: "prepsta-ca43d",
  storageBucket: "prepsta-ca43d.firebasestorage.app",
  messagingSenderId: "906699144242",
  appId: "1:906699144242:web:ecc8200eac22bfb318902b",
  measurementId: "G-4S1BF130KX"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);