const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Set a timeout to prevent long-running requests
  const timeout = setTimeout(() => {
    res.status(504).send('Request timed out');
  }, 10000); // Timeout after 10 seconds

  // Simulate an asynchronous operation
  setTimeout(() => {
    clearTimeout(timeout); // Clear the timeout if the request completes successfully
    res.send('Hello from Node.js!');
  }, 5000); // Simulate a 5-second delay
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});