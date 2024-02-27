import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC90oujKUV96GosZU6W-ZZkOO-7CQP-exA",
  authDomain: "crud-496ec.firebaseapp.com",
  projectId: "crud-496ec",
  storageBucket: "crud-496ec.appspot.com",
  messagingSenderId: "61445932104",
  appId: "1:61445932104:web:c8c48a7f74902c2e4e447d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)