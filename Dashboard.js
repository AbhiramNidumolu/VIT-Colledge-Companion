function openFacultyRanker() {
     loadContent("FacultyRanker.html");
     
 }

 function openTimetableDesigner() {
     loadContent("TM.html");
 }

 function openCgpaCalculator() {
     // Code to open CGPA Calculator page or modal
     loadContent("CgpaCalculator.html");
     
 }
 // Import necessary Firestore functions
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { db } from "./firebaseConfig.js"; // adjust path as needed

// Function to fetch usernames from Firestore
async function fetchUsernames() {
try {
// Specify the collection where usernames are stored
const usersCollection = collection(db, "users");

// Get all documents in the "users" collection
const userDocs = await getDocs(usersCollection);

// Extract usernames from each document
const usernames = userDocs.docs.map(doc => doc.data().username); // Assuming "username" field exists

// Display usernames on the dashboard
const dashboard = document.getElementById("dashboard"); // Assume you have a div with id="dashboard"
usernames.forEach(username => {
const userElement = document.createElement("p");
userElement.textContent = username;
dashboard.appendChild(userElement);
});
} catch (error) {
console.error("Error fetching usernames: ", error);
}
}

// Call the function when the dashboard loads
fetchUsernames();
