// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMPAYhIyFP3B8paxrUo9K0YN_qfn5kv38",
  authDomain: "netflix-clone-9eaf0.firebaseapp.com",
  projectId: "etflix-clone-9eaf0",
  storageBucket: "netflix-clone-9eaf0.appspot.com",
  messagingSenderId: "1064773371284",
  appId: "1:1064773371284:web:53a63f575763727c0e3b81",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
