require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.port || 8080;

app.use(require('body-parser').urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/_meta/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/', (req, res) => {
  const filesFolder = path.join(__dirname, 'files');
  let lof = []

  fs.readdirSync(filesFolder).forEach(file => {
    lof.push(file);
  });
  res.render('index', {
    lof: lof
  });
});

app.post('/get_file', (req,res) => {
  // Remove ../ in filename to avoid local file inclusion
  file = req.body.filename.replace(/\.\.\//g, '');
  if (fs.existsSync(path.join(__dirname, 'files', file))) {
    res.sendFile(path.join(__dirname, 'files', file));
  } else {
    res.render('error');
  }
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
});
