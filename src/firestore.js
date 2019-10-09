import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC3A7IoH7E-xJeYsE5XcbpXC5aFREXpWXE",
    authDomain: "org-interview.firebaseapp.com",
    databaseURL: "https://org-interview.firebaseio.com",
    projectId: "org-interview",
    storageBucket: "org-interview.appspot.com",
    messagingSenderId: "910384903479",
    appId: "1:910384903479:web:aee92f9807b1f6e9acd6b2",
    measurementId: "G-59KZ8V5D48"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
