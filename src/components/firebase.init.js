// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3bWyhEf9ilG983TzNWGhxQxW0z4vPt4k",
    authDomain: "dental-care-bb52c.firebaseapp.com",
    projectId: "dental-care-bb52c",
    storageBucket: "dental-care-bb52c.appspot.com",
    messagingSenderId: "609285177162",
    appId: "1:609285177162:web:82659015429b10b0e28bb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;