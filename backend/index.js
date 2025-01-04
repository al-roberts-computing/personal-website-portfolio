const express = require('express');
const cors = require('cors');
const db = require('./db.js');
const morgan = require('morgan');

const app = express(); // Initialize express application
// CORS configuration
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'PUT'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Enable passing cookies across origins
}));
app.use(express.json()); // Middleware to parse JSON requests
app.use(morgan('dev')); // HTTP request logger
const PORT = process.env.PORT || 5000; // Set the port from environment variables or default to 5000
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log that the server is running
});

app.get('/db-table', async (req, res) => {
  let connection;
  try {
    connection = await db.getConnection();
    const [rows] = await db.query('SELECT * FROM Person');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});