// signup.js

import { auth, db } from './firebaseConfig.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Selecting elements
const signUpButton = document.querySelector('button');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

// Event listener for the Sign Up button
signUpButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    handleSignUp();
});

async function handleSignUp() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    try {
        // Create a new user with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save the user's details in Firestore
        await setDoc(doc(db, "users", user.uid), {
            email: email,
            createdAt: new Date()
        });

       // alert("Sign up successful! You can now log in.");
        window.location.href = "login.html"; // Redirect to login page after successful sign-up
    } catch (error) {
        // Handle errors
        alert("Error: " + error.message);
    }
}
