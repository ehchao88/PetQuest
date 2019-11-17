import app from 'firebase/app';
import 'firebase/auth';

var firebase = require("firebase/app");

const config = firebase.initializeApp({
    apiKey: "AIzaSyCdMHdeSrRPTpglk_LoGsmABz1XQa9SSj4",
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
});

export default config;