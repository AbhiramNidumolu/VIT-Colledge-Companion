// Function to change theme
function changeTheme() {
    const themeSelect = document.getElementById("theme");
    const selectedTheme = themeSelect.value;

    if (selectedTheme === "dark") {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
    } else {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
    }
}

// Initialize theme on load
document.addEventListener("DOMContentLoaded", () => {
    changeTheme();
    displayStoredCGPA(); // Display CGPA from localStorage on load
});

// Grade point values based on VIT grading scale
const gradePoints = {
    "S": 10,
    "A": 9,
    "B": 8,
    "C": 7,
    "D": 6,
    "E": 5,
    "F": 0
};

// Function to calculate CGPA
function calculateCGPA() {
    const gradeElements = document.querySelectorAll(".grade");
    const creditElements = document.querySelectorAll(".credits");

    let totalGradePoints = 0;
    let totalCredits = 0;

    gradeElements.forEach((gradeElement, index) => {
        const grade = gradeElement.value;
        const credits = parseFloat(creditElements[index].value);

        if (grade in gradePoints && !isNaN(credits)) {
            totalGradePoints += gradePoints[grade] * credits;
            totalCredits += credits;
        }
    });

    // Calculate CGPA
    const cgpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;

    // Display CGPA in the cgpaResult paragraph
    const cgpaResultElement = document.getElementById("cgpaResult");
    cgpaResultElement.textContent = "Your CGPA is  " + cgpa;

    // Store CGPA in localStorage
    localStorage.setItem("cgpa", cgpa);
}

// Function to add a new course row
function addCourseRow() {
    const form = document.getElementById("courseForm");

    // Create a new div for the form-group
    const formGroup = document.createElement("div");
    formGroup.classList.add("form-group");

    // Create and append new elements
    const label = document.createElement("label");
    label.textContent = "Course";

    const gradeSelect = document.createElement("select");
    gradeSelect.classList.add("grade");
    ["S", "A", "B", "C", "D", "E", "F"].forEach(grade => {
        const option = document.createElement("option");
        option.value = grade;
        option.textContent = grade;
        gradeSelect.appendChild(option);
    });

    const creditInput = document.createElement("input");
    creditInput.type = "text";
    creditInput.placeholder = "Credits";
    creditInput.classList.add("credits");

    // Append elements to form-group
    formGroup.appendChild(label);
    formGroup.appendChild(gradeSelect);
    formGroup.appendChild(creditInput);

    // Insert the new form-group before the Add Course button
    const addCourseBtn = document.getElementById("addCourseBtn");
    form.insertBefore(formGroup, addCourseBtn);
}

// Function to display stored CGPA from localStorage
function displayStoredCGPA() {
    const storedCGPA = localStorage.getItem("cgpa");
    if (storedCGPA) {
        const cgpaResultElement = document.getElementById("cgpaResult");
        cgpaResultElement.textContent = "Your last calculated CGPA was: " + storedCGPA;
    }
}

// Add event listener to Add Course button
document.getElementById("addCourseBtn").addEventListener("click", addCourseRow);

// Add event listener to form submit button
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateCGPA();
});
