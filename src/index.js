import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


firebase.initializeApp({
    apiKey: "AIzaSyDMG8Bpsq54_Qrj2ciSqaFV0TEy-mxGBxQ",
    authDomain: "pseudogram-78c43.firebaseapp.com",
    databaseURL: "https://pseudogram-78c43.firebaseio.com",
    projectId: "pseudogram-78c43",
    storageBucket: "gs://pseudogram-78c43.appspot.com",
    messagingSenderId: "526832818394",
    appId: "1:526832818394:web:8ec09999e0522db2"
});
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
