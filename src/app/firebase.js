
import { initializeApp } from "firebase/app";
import 'firebase/auth'

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

const app = initializeApp(firebaseConfig);

export {app};


