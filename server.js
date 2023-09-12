const express = require('express');
const path = require('path');
const cors = require('cors'); // Import the cors package
const ping = require('ping');
// const { createSession } = require('net-ping');

const app = express();
const port = process.env.PORT || 1990;

// Enable CORS for all routes
app.use(cors());

// Serve static assets from the "public" directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle requests to the root route ("/")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Define a route for the ping endpoint
app.get('/ping', (req, res) => {
    console.log('Received a ping request'); // Log the request
    // Get the IP address from the "ip" query parameter, if provided
    const ipToPing = req.query.ip || '8.8.8.8'; // Default to Google's DNS server if no IP provided
    // Perform the ping
    ping.sys.probe(ipToPing, (isAlive) => {
        const pingable = isAlive ? true : false;
        console.log(`${ipToPing} is ${pingable}`);
        res.json({ pingable });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
