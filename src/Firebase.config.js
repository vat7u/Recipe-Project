import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtnZ7m7JpH3f8GOiLm-1ljXs9wUD32Jp0",
  authDomain: "recip-app-6ad20.firebaseapp.com",
  projectId: "recip-app-6ad20",
  storageBucket: "recip-app-6ad20.appspot.com",
  messagingSenderId: "227904552256",
  appId: "1:227904552256:web:b0d1fa83d9aecf46ee4ea5"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

