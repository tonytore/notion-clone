import { initializeApp,getApps,getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_YVskgz5T6Yjpij9k5ce1PEEzSc3BAis",
  authDomain: "tonytor-notion-clone.firebaseapp.com",
  projectId: "tonytor-notion-clone",
  storageBucket: "tonytor-notion-clone.firebasestorage.app",
  messagingSenderId: "727298682723",
  appId: "1:727298682723:web:65847f6b8f94fe2960ed56"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp() ;
const db = getFirestore(app)

export {db}