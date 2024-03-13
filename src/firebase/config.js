import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxw2UCzPn5ke_DMoFtj3aDb_8cHrhgnjU",
  authDomain: "ecommerce-react-c9465.firebaseapp.com",
  projectId: "ecommerce-react-c9465",
  storageBucket: "ecommerce-react-c9465.appspot.com",
  messagingSenderId: "712128801280",
  appId: "1:712128801280:web:ce954cd21772869a02c6e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
