const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// In-memory data store for the timetable and credits
let timetable = [];
let totalCredits = 0;

// Helper function to update total credits
const updateTotalCredits = () => {
    totalCredits = timetable.reduce((sum, course) => sum + course.credits, 0);
};

// Route to view the timetable
app.get('/api/viewTimetable', (req, res) => {
    res.json(timetable);
});

// Route to add a course
app.post('/api/addCourse', (req, res) => {
    const { courseId, courseName, day, startTime, endTime, credits } = req.body;

    if (!courseId || !courseName || !day || !startTime || !endTime || !credits) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check for duplicate courseId
    if (timetable.find(course => course.courseId === courseId)) {
        return res.status(400).json({ message: 'Course ID already exists' });
    }

    const newCourse = { courseId, courseName, day, startTime, endTime, credits };
    timetable.push(newCourse);
    updateTotalCredits();

    res.status(201).json({ message: 'Course added successfully' });
});

// Route to remove a course by courseId
app.delete('/api/removeCourse/:courseId', (req, res) => {
    const { courseId } = req.params;
    timetable = timetable.filter(course => course.courseId !== courseId);
    updateTotalCredits();

    res.json({ message: 'Course removed successfully' });
});

// Route to reset the timetable
app.post('/api/resetTimetable', (req, res) => {
    timetable = [];
    totalCredits = 0;
    res.json({ message: 'Timetable reset successfully' });
});

// Route to get the total credits
app.get('/api/totalCredits', (req, res) => {
    res.json({ totalCredits });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
