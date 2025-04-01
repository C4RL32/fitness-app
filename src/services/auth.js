import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCMsof8QDHtd8qVqPOKOrcGmmcEXHeLOyE",
    authDomain: "fitnessapp-auth-d3004.firebaseapp.com",
    projectId: "fitnessapp-auth-d3004",
    storageBucket: "fitnessapp-auth-d3004.firebasestorage.app",
    messagingSenderId: "309275468305",
    appId: "1:309275468305:web:2aaf4df396c3a3ddd707b0",
    measurementId: "G-EPF82YTP68"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Funciones para login y registro
export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const register = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};