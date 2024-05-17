
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCpDb-LMMEIbhfkAncEXWp960okAT0TozA",
  authDomain: "cource-app-c4b04.firebaseapp.com",
  projectId: "cource-app-c4b04",
  storageBucket: "cource-app-c4b04.appspot.com",
  messagingSenderId: "475288354290",
  appId: "1:475288354290:web:a0f679108781f104243f6b"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };