import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2gPo9fZBNVohRdSoYhdSXRYT8CgCb5Y4",
  authDomain: "earn123-ec50b.firebaseapp.com",
  projectId: "earn123-ec50b",
  storageBucket: "earn123-ec50b.appspot.com",
  messagingSenderId: "149960690997",
  appId: "1:149960690997:web:31fc0c1f5f954e3359d07c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)