require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const mongoUri = process.env.MONGOURI || 'mongodb://localhost:27017/nosequel';
const User = require('./userSchema');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/_meta/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.post('/login', (req, res) => {
  const user = req.body.username;
  const pass = req.body.password;

  if (!user || !pass){
    return res.send("One or more fields were not provided.");
  }
  const query = {
    username: user,
    password: pass
  }

  User.findOne(query, function (err, user) {
    if (!user){
      res.send("Wrong username or password");
      return
    }

    res.send(process.env.FLAG);
  });
});

app.post('/hard-login', (req, res) => {
  const pass = req.body.password;

  if (!pass){
    return res.send("You need to provide the password.");
  }
  const query = {
    username: 'admin'
  }

  User.findOne(query, function (err, user) {
    if (!user){
      res.send("Wrong username or password");
      return
    }

    if (user.password === pass) {
      res.send(process.env.HARDFLAG);
    } else {
      res.send("Wrong password");
      return
    }
  });
});

app.listen('8080', () => {
  console.log("server listening on port 8080");
  mongoose.connect(mongoUri);
});
