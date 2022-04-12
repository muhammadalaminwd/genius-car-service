// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8KizlCaFB7aV_yU2Uq2oexj1HQl_ATP4",
  authDomain: "genius-car-services-bd8ce.firebaseapp.com",
  projectId: "genius-car-services-bd8ce",
  storageBucket: "genius-car-services-bd8ce.appspot.com",
  messagingSenderId: "135023553414",
  appId: "1:135023553414:web:3cc4e99b7cc88340459a07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;