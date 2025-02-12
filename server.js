const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "web" directory
app.use(express.static(path.join(__dirname, 'web')));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
