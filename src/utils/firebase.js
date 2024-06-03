
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3CQZ3wqa78FdABC0iFozLe0hkeKp-F5w",
  authDomain: "netflixclone-8dbb3.firebaseapp.com",
  projectId: "netflixclone-8dbb3",
  storageBucket: "netflixclone-8dbb3.appspot.com",
  messagingSenderId: "1010015917840",
  appId: "1:1010015917840:web:0d0e89bc424e36e8767795",
  measurementId: "G-Y66TMNWWYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth=getAuth()