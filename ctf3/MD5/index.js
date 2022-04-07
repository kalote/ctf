require('dotenv').config();
const m = require('md5');
const express = require('express');

const app = express();
const port = process.env.port || 8080;

app.use(require('body-parser').urlencoded({extended: true}));

app.get('/_meta/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/', (req, res) => {
  const secret = process.env.SECRET;
  const pwd = req.query.pass;

  if (pwd) {
    if (parseInt(m(secret)) === parseInt(m(pwd))) {
      res.send(`Here is the flag: ${process.env.FLAG}`);
    } else {
      res.send('Nope!');
    }
  } else {
    res.send('Send me a password ("pass") query param!');
  }
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
});
