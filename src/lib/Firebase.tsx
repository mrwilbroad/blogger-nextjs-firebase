import { initializeApp, type FirebaseOptions } from 'firebase/app'
import { getFirestore }  from "firebase/firestore";

const firebaseConfig : FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_apiKey,
    authDomain: process.env.NEXT_PUBLIC_authDomain,
    projectId: process.env.NEXT_PUBLIC_projectId,
    storageBucket: process.env.NEXT_PUBLIC_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_appId
}

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const Firebasedb = getFirestore();

export { Firebasedb , FirebaseApp}
