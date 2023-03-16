// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" //auth
import { getFirestore } from "firebase/firestore/lite" //DB
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEUXZZlCcc-W2V0HTskkUy5H28kefletw",
  authDomain: "react-journalapp-c914e.firebaseapp.com",
  projectId: "react-journalapp-c914e",
  storageBucket: "react-journalapp-c914e.appspot.com",
  messagingSenderId: "28390085575",
  appId: "1:28390085575:web:cb05e6c057c03efeb0ffe2",
  measurementId: "G-E30QD6FRQD"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
// const analytics = getAnalytics(FirebaseApp);
