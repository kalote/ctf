require('dotenv').config();
const fs = require('fs');
const express = require('express');
const jwtSimple = require('jwt-simple');

const app = express();
const port = process.env.port || 8080;

app.get('/', (req, res) => {  
  res.send('Not here');
});

app.get('/_meta/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/key.pem', (req, res) => {
  res.send(fs.readFileSync('key.pem'));
});

app.get('/get_token', (req, res) => {
  res.send(jwtSimple.encode({auth: 'user'}, fs.readFileSync('key'), 'RS256'));
})

app.get('/verify_token', (req, res) => {
  const token = req.query.token;
  try {
    const decoded = jwtSimple.decode(token, fs.readFileSync('key.pem'));
    
    if (decoded.auth == 'user') {
      res.send(decoded);
    }
    if (decoded.auth == 'admin') {
      res.send(`Well done: ${process.env.FLAG}`);
    }
  } catch (e) {
    console.log(e);
    res.send('Error');
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
