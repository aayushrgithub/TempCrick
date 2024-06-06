// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLmpxW8oGWEWVkjgz7inhneud6olhhXBs",
  authDomain: "cricketscorecard-102d8.firebaseapp.com",
  projectId: "cricketscorecard-102d8",
  storageBucket: "cricketscorecard-102d8.appspot.com",
  messagingSenderId: "712606041432",
  appId: "1:712606041432:web:0a915bcd9fc1de0602112d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

