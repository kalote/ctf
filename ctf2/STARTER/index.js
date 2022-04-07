require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || 8080;

app.use(express.static(path.join(__dirname, 'static')));

app.get('/_meta/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/the/hid/den/path/to/a/new/flag', (req, res) => {
  res.send(`Congrats, you find the flag: ${process.env.FLAG}`);
});

app.listen(port, () => {
  console.log(`Server listenning on port 8080`);
});
