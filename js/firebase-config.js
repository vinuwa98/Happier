// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARL20nPI4jlZqzahKNi0gSlot4ckkuiUI",
  authDomain: "happier-b7bea.firebaseapp.com",
  projectId: "happier-b7bea",
  storageBucket: "happier-b7bea.appspot.com",  // Corrected storageBucket URL
  messagingSenderId: "146767318870",
  appId: "1:146767318870:web:d151ade927ed56bf6c90f7",
  measurementId: "G-ZW46FPKKT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Authentication
const db = getFirestore(app);  // Firestore Database

// Export for other files
export { auth, db };
