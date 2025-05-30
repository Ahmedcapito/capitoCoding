import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwc9oEu3ojyhVTD0FdmYVkvw_8xWT38mE",
  authDomain: "capitocoding.firebaseapp.com",
  projectId: "capitocoding",
  storageBucket: "capitocoding.appspot.com",
  messagingSenderId: "389440116284",
  appId: "1:389440116284:web:126154f091dbb5b8145539",
  measurementId: "G-ZEP50NV2ZJ"
};

const app = initializeApp(firebaseConfig);

// ✅ auth & Google Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
