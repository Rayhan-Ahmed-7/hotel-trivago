// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnCaWbrZNSvPETY4hm9B5dmcZMmsPa97w",
  authDomain: "hotel-trivago.firebaseapp.com",
  projectId: "hotel-trivago",
  storageBucket: "hotel-trivago.appspot.com",
  messagingSenderId: "655678921544",
  appId: "1:655678921544:web:4279f0e17eee6c444ef17d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;