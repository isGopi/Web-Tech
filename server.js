const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "web" directory
app.use(express.static(path.join(__dirname, 'web')));

// Use the port provided by Heroku or default to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
