import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBSOL_tOeI51sMejRcLIi2ARR0bH_qE5KM",
    authDomain: "munchmuch-394cb.firebaseapp.com",
    databaseURL: "https://munchmuch-394cb.firebaseio.com",
    projectId: "munchmuch-394cb",
    storageBucket: "munchmuch-394cb.appspot.com",
    messagingSenderId: "867663704787",
    appId: "1:867663704787:web:5d190827868b1c791e1a26",
    measurementId: "G-DKNFETZVHQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase