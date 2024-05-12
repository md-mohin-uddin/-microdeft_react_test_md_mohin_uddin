// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWjFk-JIibxmvhE8Jk8EoYkJZZ08naACU",
  authDomain: "react-task-beb7d.firebaseapp.com",
  projectId: "react-task-beb7d",
  storageBucket: "react-task-beb7d.appspot.com",
  messagingSenderId: "553562371064",
  appId: "1:553562371064:web:a6e859b9bf7686bde75c0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth();