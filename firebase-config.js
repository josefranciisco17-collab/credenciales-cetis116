import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAjIg8dgOYfSDbAp0Ic05D2fIRhKZxW3nU",
  authDomain: "credencialescetis116.firebaseapp.com",
  projectId: "credencialescetis116",
  storageBucket: "credencialescetis116.firebasestorage.app",
  messagingSenderId: "672069389213",
  appId: "1:672069389213:web:0590d40aada81736fafd74"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, doc, deleteDoc, getDoc, updateDoc };
