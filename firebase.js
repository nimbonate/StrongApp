// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { Firestore, getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDvfIxgmkONiF14TQeSmEv3jqFs4ajdRVw",
    authDomain: "strongapp-6b2d2.firebaseapp.com",
    projectId: "strongapp-6b2d2",
    storageBucket: "strongapp-6b2d2.appspot.com",
    messagingSenderId: "119587549371",
    appId: "1:119587549371:web:b1d87a251d60b77069799e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const authentication = getAuth(app)

export const db = getFirestore(app);





