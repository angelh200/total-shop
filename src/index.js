import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCumVnrUdQd85iWoCwIJX-uVCSUJrKAaJ4",
    authDomain: "coderhouse-totalshop.firebaseapp.com",
    projectId: "coderhouse-totalshop",
    storageBucket: "coderhouse-totalshop.appspot.com",
    messagingSenderId: "1092828833683",
    appId: "1:1092828833683:web:cd5bb8dbf72b2d347dea66"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
