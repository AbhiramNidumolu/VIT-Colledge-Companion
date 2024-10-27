// Selecting elements
const signInButton = document.querySelector('button');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const stayLoggedInCheckbox = document.querySelector('input[type="checkbox"]');

// Event listener for the Sign In button
signInButton.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent form submission for demo purposes
    handleLogin();
});

function handleLogin() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation
    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Mock login functionality (replace this with actual authentication logic)
    if (username === "student" && password === "password123") {
        alert("Login successful!");
        // If Stay Logged In is checked, save to localStorage
        if (stayLoggedInCheckbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("stayLoggedIn", "true");
        } else {
            sessionStorage.setItem("username", username);
        }
        // Redirect to another page (e.g., dashboard)
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Auto-fill fields if Stay Logged In is selected and the user has logged in before
window.addEventListener('load', () => {
    const savedUsername = localStorage.getItem("username");
    const stayLoggedIn = localStorage.getItem("stayLoggedIn");

    if (stayLoggedIn === "true" && savedUsername) {
        usernameInput.value = savedUsername;
        stayLoggedInCheckbox.checked = true;
    }
});
