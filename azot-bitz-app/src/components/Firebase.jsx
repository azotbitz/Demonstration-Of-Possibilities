import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyApSiNWOCgRObPMCOe8G03HB_Vzlo-YmhI",
    authDomain: "azot-bitz-app.firebaseapp.com",
    databaseURL: "https://azot-bitz-app-default-rtdb.firebaseio.com",
    projectId: "azot-bitz-app",
    storageBucket: "azot-bitz-app.appspot.com",
    messagingSenderId: "92180241050",
    appId: "1:92180241050:web:314efc303169fbe196dd23"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

export const db = firebaseDB.database().ref();
export const auth = firebase.auth();