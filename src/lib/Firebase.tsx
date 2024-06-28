import { initializeApp, type FirebaseOptions } from 'firebase/app'
import { getFirestore }  from "firebase/firestore";

const firebaseConfig : FirebaseOptions = {
    apiKey: "AIzaSyDzTP9QF6FvP7S4fnbK1h99s2aeqAI6Ju8",
    authDomain: "nextjs-blogger-7126f.firebaseapp.com",
    projectId: "nextjs-blogger-7126f",
    storageBucket: "nextjs-blogger-7126f.appspot.com",
    messagingSenderId: "1021736846471",
    appId: "1:1021736846471:web:2177c08d6134f5d82ce422"
}

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const Firebasedb = getFirestore();

export { Firebasedb , FirebaseApp}
