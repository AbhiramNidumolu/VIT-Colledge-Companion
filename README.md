Campus Companion
Campus Companion is a web application designed to help students at VIT-AP with essential university-related tools, such as faculty ranking, CGPA calculation, and timetable building. The app offers both light and dark themes for an enhanced user experience and seamless navigation.

Table of Contents
Features
Tech Stack
Getting Started
Installation
Project Structure
Usage
Contributors
License
Features
User Authentication: Secure sign-up and login with unique email verification.
Faculty Ranker: Rate and view rankings of university faculty.
CGPA Calculator: Calculate and save semester-wise CGPA records.
Timetable Builder: Create and save weekly timetables.
Light & Dark Theme: Choose between light and dark themes with seamless transitions.
Tech Stack
Frontend: HTML, CSS, JavaScript, [React/Angular/Vue (choose based on your choice)]
Backend: Node.js, Express.js
Database: MongoDB / MySQL
Java Integration: Java API for CGPA calculation
Authentication: JWT or Passport.js for secure login
Hosting: [Hosting Platform] (e.g., Heroku, Netlify)
Getting Started
Prerequisites
Node.js
MongoDB or MySQL for database
Java SDK
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/campus-companion.git
cd campus-companion
Install Dependencies

bash
Copy code
npm install
Configure Environment Variables

Create a .env file in the root directory with the following:
plaintext
Copy code
DATABASE_URL=your-database-url
JWT_SECRET=your-jwt-secret
JAVA_API_URL=http://localhost:your-java-api-port
Run the Java Backend (CGPA Calculator)

Navigate to the Java backend directory and run:
bash
Copy code
mvn spring-boot:run
Run the Node Server

bash
Copy code
npm start
Run Frontend Development Server

bash
Copy code
npm run start:frontend
Project Structure
plaintext
Copy code
campus-companion/
├── backend/               # Node.js backend server
│   ├── controllers/       # API controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
├── frontend/              # Frontend application (React/Vue/Angular)
│   ├── src/               # Source code
│   └── public/            # Public assets
├── java-backend/          # Java code for CGPA Calculator
│   ├── src/main/java/     # Java source code
├── .env                   # Environment variables
└── README.md              # Project documentation
Usage
Sign Up: Create a new account to access the tools.
Faculty Ranker: Rate faculty members and view the current rankings.
CGPA Calculator: Enter your grades and credits to calculate CGPA.
Timetable Builder: Customize your weekly timetable and save it for reference.
Contributors
Contributor A - Frontend Developer
Contributor B - Backend Developer
Contributor C - Database Administrator
Contributor D - Faculty Ranker Specialist
Contributor E - CGPA Calculator and Timetable Specialist
License
This project is licensed under the MIT License - see the LICENSE file for details.
