// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVN74EZPe7I1cqkkoqBpaQrTOeFflDGkc",
  authDomain: "thebookstop-5a3f2.firebaseapp.com",
  projectId: "thebookstop-5a3f2",
  storageBucket: "thebookstop-5a3f2.firebasestorage.app",
  messagingSenderId: "126807385315",
  appId: "1:126807385315:web:1f5cd208a0a95406a051d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);