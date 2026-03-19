import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAFCaKi_-AIEPjneYyVAP1YTLTJsCZ1wvQ",
  authDomain: "campus-fdb87.firebaseapp.com",
  projectId: "campus-fdb87",
  storageBucket: "campus-fdb87.firebasestorage.app",
  messagingSenderId: "580962580065",
  appId: "1:580962580065:web:a5f2dd942ae2685e901c20",
  measurementId: "G-QWW258FNBV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
