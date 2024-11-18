const http = require('http');
const url = require('url');

const PORT = 3000;

// In-memory data store for the timetable and credits
let timetable = [];
let totalCredits = 0;

// Helper function to update total credits
const updateTotalCredits = () => {
    totalCredits = timetable.reduce((sum, course) => sum + course.credits, 0);
};

// Helper function to parse request data
const parseRequestData = (req, callback) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        try {
            const data = JSON.parse(body);
            callback(null, data);
        } catch (error) {
            callback(error);
        }
    });
};

// Create HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;

    // Set headers
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests for CORS
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (pathname === '/api/viewTimetable' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify(timetable));
    }
    else if (pathname === '/api/addCourse' && req.method === 'POST') {
        parseRequestData(req, (error, data) => {
            if (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ message: 'Invalid JSON format' }));
                return;
            }

            const { courseId, courseName, day, startTime, endTime, credits } = data;
            if (!courseId || !courseName || !day || !startTime || !endTime || !credits) {
                res.writeHead(400);
                res.end(JSON.stringify({ message: 'All fields are required' }));
                return;
            }

            // Check for duplicate courseId
            if (timetable.find(course => course.courseId === courseId)) {
                res.writeHead(400);
                res.end(JSON.stringify({ message: 'Course ID already exists' }));
                return;
            }

            const newCourse = { courseId, courseName, day, startTime, endTime, credits };
            timetable.push(newCourse);
            updateTotalCredits();

            res.writeHead(201);
            res.end(JSON.stringify({ message: 'Course added successfully' }));
        });
    }
    else if (pathname.startsWith('/api/removeCourse/') && req.method === 'DELETE') {
        const courseId = pathname.split('/').pop();
        timetable = timetable.filter(course => course.courseId !== courseId);
        updateTotalCredits();

        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Course removed successfully' }));
    }
    else if (pathname === '/api/resetTimetable' && req.method === 'POST') {
        timetable = [];
        totalCredits = 0;
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Timetable reset successfully' }));
    }
    else if (pathname === '/api/totalCredits' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({ totalCredits }));
    }
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
