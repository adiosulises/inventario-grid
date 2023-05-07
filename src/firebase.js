// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA__9ojYPZEWFWcoKDuKbOf_Ov8iCyyS_A",
    authDomain: "inventarioboulder-fae7b.firebaseapp.com",
    projectId: "inventarioboulder-fae7b",
    storageBucket: "inventarioboulder-fae7b.appspot.com",
    messagingSenderId: "783565788371",
    appId: "1:783565788371:web:3f453d6cbdf7d1cb623026",
    measurementId: "G-H718TR4SY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;