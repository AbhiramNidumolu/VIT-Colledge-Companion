// firebaseConfig.js

// Import the necessary functions from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9KZAZj-ggs-6PJTaGAcbRzqwrNhrwuBs",
  authDomain: "se-project-46caa.firebaseapp.com",
  projectId: "se-project-46caa",
  storageBucket: "se-project-46caa.firebasestorage.app",
  messagingSenderId: "89780226732",
  appId: "1:89780226732:web:2f7dcc6f095a2d47832d09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export auth and db for use in other files
export { auth, db };
