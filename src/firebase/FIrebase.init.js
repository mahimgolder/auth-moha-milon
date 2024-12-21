// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC62weY8P0Oaxe4c1_dU4YYBUlPm7Q8ulE",
  authDomain: "auth-moha-milon-7ece2.firebaseapp.com",
  projectId: "auth-moha-milon-7ece2",
  storageBucket: "auth-moha-milon-7ece2.firebasestorage.app",
  messagingSenderId: "999447262877",
  appId: "1:999447262877:web:0beb2bdd827c77bb4fc674"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);