const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Endpoint handler
app.post('/calculate', (req, res) => {
  const { isUserADude, yearOfBirth, monthOfBirth } = req.body;

  // Perform your calculation here
  const result = isUserADude ? yearOfBirth + monthOfBirth : yearOfBirth - monthOfBirth;

  // Return the result as JSON
  res.json(result);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
