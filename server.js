const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('hello, world!');
});

app.get('/*.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
