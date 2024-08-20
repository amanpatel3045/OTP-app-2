import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {

    //FIREBASE CONFIGURATION KEYS
    apiKey: "AIzaSyArP1P5NyCqXshTBso8wlI1xmdM6ZOpb68",
    authDomain: "next-otp-work.firebaseapp.com",
    projectId: "next-otp-work",
    storageBucket: "next-otp-work.appspot.com",
    messagingSenderId: "349914313803",
    appId: "1:349914313803:web:85f0d48b1f234a8db349ce",
    measurementId: "G-GBMYKCR9XE"
     

};

firebase.initializeApp(firebaseConfig);

export default firebase;








// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
 
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);