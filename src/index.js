// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhXnb0aVtDItLPEWiEHnWJVudnmScpVlk",
  authDomain: "start-f8d08.firebaseapp.com",
  projectId: "start-f8d08",
  storageBucket: "start-f8d08.appspot.com",
  messagingSenderId: "872685566021",
  appId: "1:872685566021:web:895adc3240a788ae728b2c",
  measurementId: "G-CH3ZVSE6FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)