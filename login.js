// login.js

import { auth, db } from './firebaseConfig.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Selecting elements
const signInButton = document.querySelector('button');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const stayLoggedInCheckbox = document.querySelector('input[type="checkbox"]');

// Event listener for the Sign In button
signInButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    handleLogin();
});

async function handleLogin() {
    const email = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    try {
        // Sign in with Firebase Authentication
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Check if user exists in Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
            alert("Login successful!");

            // Save session if 'Stay Logged In' is checked
            if (stayLoggedInCheckbox.checked) {
                localStorage.setItem("userEmail", email);
                localStorage.setItem("stayLoggedIn", "true");
            } else {
                sessionStorage.setItem("userEmail", email);
            }

            // Redirect to the dashboard
            window.location.href = "dashboard.html";
        } else {
            // User is not registered in Firestore
            alert("User is not registered. Please sign up first.");
            await auth.signOut(); // Sign out the user from Firebase Auth
        }
    } catch (error) {
        // Handle errors
        alert("Error: " + error.message);
    }
}

// Auto-fill fields if 'Stay Logged In' is selected and the user has logged in before
window.addEventListener('load', () => {
    const savedEmail = localStorage.getItem("userEmail");
    const stayLoggedIn = localStorage.getItem("stayLoggedIn");

    if (stayLoggedIn === "true" && savedEmail) {
        usernameInput.value = savedEmail;
        stayLoggedInCheckbox.checked = true;
    }
});
