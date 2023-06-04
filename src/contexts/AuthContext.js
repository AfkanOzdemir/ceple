// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1eili7sMgraqLvPFhOcvmXRrKSvK0NQU",
    authDomain: "rentgo-8cc9f.firebaseapp.com",
    projectId: "rentgo-8cc9f",
    storageBucket: "rentgo-8cc9f.appspot.com",
    messagingSenderId: "243247133514",
    appId: "1:243247133514:web:40a374d26f8a87217b87b3",
    measurementId: "G-FXQD4L1WK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);