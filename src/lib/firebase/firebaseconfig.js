// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfPkHnAmW4Il8c62fVsr36jI39VCaRsNw",
  authDomain: "svelte-auth-92f89.firebaseapp.com",
  projectId: "svelte-auth-92f89",
  storageBucket: "svelte-auth-92f89.appspot.com",
  messagingSenderId: "151775179254",
  appId: "1:151775179254:web:6aa5157b4847d7b789d7d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {app,auth}