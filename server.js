const express = require('express');
const path = require('path');
const { createSession  } = require('net-ping');

const app = express();
const port = process.env.PORT || 1990;

// Serve static assets from the "public" directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle requests to the root route ("/")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const session = createSession();

// Define a route for the ping endpoint
app.get('/ping', (req, res) => {
  // Get the IP address from the "ip" query parameter, if provided
  const ipToPing = req.query.ip || '8.8.8.8'; // Default to Google's DNS server if no IP provided

  // Perform the ping
  session.pingHost(ipToPing, (error, target) => {
    if (!error) {
      // If the IP is pingable, return true
      res.json({ pingable: true });
    } else {
      // If the IP is not pingable, return false
      res.json({ pingable: false });
    }
  });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
