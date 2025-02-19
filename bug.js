const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    res.send('Hello from Node.js!');
  }, 5000); // Simulate a 5-second delay
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});