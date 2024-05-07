// Create web server with Express.js
// Use the following command to run this server
// node comments.js
// To test the server, open a web browser and access http://localhost:3000/comments

// Import the express module
const express = require('express');

// Create a new express application
const app = express();

// Create a comments array
const comments = [
  { username: 'Alice', content: 'I am a cat' },
  { username: 'Bob', content: 'I am a dog' },
  { username: 'Charlie', content: 'I am a bird' }
];

// Create a route to handle GET requests
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
