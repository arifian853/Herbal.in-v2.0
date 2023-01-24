import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoVDuUksHFWkxpsJyVTeGHLW6BJVpO4EQ",
  authDomain: "herbal-in-v2.firebaseapp.com",
  projectId: "herbal-in-v2",
  storageBucket: "herbal-in-v2.appspot.com",
  messagingSenderId: "573611116010",
  appId: "1:573611116010:web:852383c4140c1296089e93",
  measurementId: "G-DCK50J5FE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export default app;
