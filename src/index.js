import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVoIphR20Ielh51LhnMwcjlmUuefyyGN8",
  authDomain: "cart-549ea.firebaseapp.com",
  projectId: "cart-549ea",
  storageBucket: "cart-549ea.appspot.com",
  messagingSenderId: "555819174460",
  appId: "1:555819174460:web:4a482c32dee6d6f64c1139"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default db;