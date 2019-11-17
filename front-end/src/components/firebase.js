import app from 'firebase/app';
import 'firebase/auth';

var firebase = require("firebase/app");

const config = firebase.initializeApp({
    apiKey: "AIzaSyCdMHdeSrRPTpglk_LoGsmABz1XQa9SSj4",
    authDomain: "petquest-5fa8a.firebaseapp.com",
    databaseURL: "https://petquest-5fa8a.firebaseio.com",
    projectId: "petquest-5fa8a",
    storageBucket: "petquest-5fa8a.appspot.com",
    messagingSenderId: "1013230897429",
    appId: "1:1013230897429:web:97f411c727394a97d6811c",
    measurementId: "G-62FDVDPCFV"
});

export default config;
