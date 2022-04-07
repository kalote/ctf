require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  if (req.headers['user-agent'] != 'AxaBrowser') {
    return res.send(`We stole your flag!
To get it back, you need to follow our instructions.
First you must use the [AxaBrowser]! Other web browser will be denied!`);
  }

  if (req.method == 'GET') {
    return res.send('We will only answer if you gives us some data.');
  }

});

app.post('/', (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  
  if (!req.headers['content-type'] || req.headers['content-type'] != 'application/json') {
    return res.send('Good call, but we will only answer if you send JSON');
  } else {
    if (!Object.keys(req.body).length) {
      return res.send('You have to provide some data ...');
    } else {
      if (!req.headers['x-forwarded-for'] || req.headers['x-forwarded-for'].split('.')[0] === '10') {
        return res.send(`We change our mind! We will only answer if you come at our home to discuss!
Tips: Find a "X-" header that can help us define from where you call us.
`);
      } else if (req.headers['x-forwarded-for'].indexOf('localhost') > -1) {
        return res.send('Give us numbers!');
      } else if (req.headers['x-forwarded-for'].indexOf('127.0.0.1') > -1) {
        if (req.body.amount == '1000000' && req.body.currency == 'dollar') {
          return res.send(`Thanks. It's a pleasure doing business with you!
Here is your flag: ${process.env.FLAG}
`);
        } else {
          return res.send(`Ok, now we can talk.
Here's what we want:
- amount: 1000000
- currency: dollar
We want a clean object, that we can convert in other currencies if we want.
You will receive your flag once the deal is made.
`);
        }
      } else {
        return res.send(`Oops ... there's an issue here =/`);
      }
    }
  }
});

app.put('/', (req, res) => {
  res.send('We will NOT update out terms. Send us DATA !');
});

app.get('/_meta/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
