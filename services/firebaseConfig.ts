import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBYWoWB7ind2OIxZK-_-59qI5IrMUfHKK0",
    authDomain: "firstmobile2.firebaseapp.com",
    databaseURL: "https://firstmobile2-default-rtdb.firebaseio.com",
    projectId: "firstmobile2",
    storageBucket: "firstmobile2.firebasestorage.app",
    messagingSenderId: "622123612182",
    appId: "1:622123612182:web:6e198ce1f36967f3b7dd37"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export default app;
