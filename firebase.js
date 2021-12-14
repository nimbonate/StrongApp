// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBHAAUMwHcPe4LEqEXCVYBjjAFaUyeY7A",
  authDomain: "strongfamily-4406e.firebaseapp.com",
  databaseURL: "https://strongfamily-4406e-default-rtdb.firebaseio.com",
  projectId: "strongfamily-4406e",
  storageBucket: "strongfamily-4406e.appspot.com",
  messagingSenderId: "37244805849",
  appId: "1:37244805849:web:a527a441ea7e013b5e14c8"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };