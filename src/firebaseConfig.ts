// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAEPVqkmqhAtNr8GbOMkAUo4hp5UgnWCo",
  authDomain: "customer-management-f9c42.firebaseapp.com",
  projectId: "customer-management-f9c42",
  storageBucket: "customer-management-f9c42.appspot.com",
  messagingSenderId: "208283396362",
  appId: "1:208283396362:web:a83317c3c04045ca03f2f3",
  measurementId: "G-K667YXK8YT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
