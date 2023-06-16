import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider,sendPasswordResetEmail } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyChLbmPv4McKAvnc27HVMCnOGc0AVmNbnk",
  authDomain: "fir-tuto-4ccd4.firebaseapp.com",
  projectId: "fir-tuto-4ccd4",
  storageBucket: "fir-tuto-4ccd4.appspot.com",
  messagingSenderId: "696924110922",
  appId: "1:696924110922:web:1dbd1f7cc82ce38099a6b3",
  measurementId: "G-E393KDDKND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();



