const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 1990;

// Serve static assets from the "public" directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle requests to the root route ("/")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
