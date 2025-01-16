import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';  //Import firestore

const firebaseConfig = {
  apiKey: "AIzaSyBOADusAa0p5RJKdQf94tG5lT_m0XB2SXE",
  authDomain: "e-commerse-fitnees.firebaseapp.com",
  projectId: "e-commerse-fitnees",
  storageBucket: "e-commerse-fitnees.firebasestorage.app",
  messagingSenderId: "295861975104",
  appId: "1:295861975104:web:a957d681598fa241c6c7a5"
 };



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);  //Obtener Firestore


export { auth, db };
