import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC90oujKUV96GosZU6W-ZZkOO-7CQP-exA",
  authDomain: "crud-496ec.firebaseapp.com",
  projectId: "crud-496ec",
  storageBucket: "crud-496ec.appspot.com",
  messagingSenderId: "61445932104",
  appId: "1:61445932104:web:c8c48a7f74902c2e4e447d"
};

// Inicializa la aplicación Firebase
const app = initializeApp(firebaseConfig);

// Obtiene una instancia de la base de datos Firestore
const db = getFirestore(app);

// Obtiene una instancia del servicio de autenticación de Firebase
const auth = getAuth(app);

export { app, db, auth };