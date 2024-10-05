const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route to serve API
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Example API route
app.post('/contact', (req, res) => {
  const { name, message } = req.body;
  console.log(`Message from ${name}: ${message}`);
  res.json({ status: 'Message received' });
});

// Start the backend server
app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});