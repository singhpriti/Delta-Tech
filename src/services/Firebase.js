import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA6KHPNXJ45TKPmz98X4yOPWA5CyLF0xNw",
    authDomain: "crud-bb1dd.firebaseapp.com",
    projectId: "crud-bb1dd",
    storageBucket: "crud-bb1dd.appspot.com",
    messagingSenderId: "375029055610",
    appId: "1:375029055610:web:759c4575ea57e5d354bbc3",
    measurementId: "G-XPGC07DDR9"
};

const Firebase = firebase.initializeApp(firebaseConfig);
const db = Firebase.firestore();
const auth = Firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, db };

export default Firebase;