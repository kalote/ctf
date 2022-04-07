# NoSQL Injection - Don't look at the source code

## Local install

`npm install`
`npm start`

## Docker install

```bash
docker build -t ctf_nosql .
docker run --name ctf_nosql -d -p 8080:8080 -t ctf_nosql:latest
```

## Endpoint

You need to run mongoDB (default: mongodb://localhost:27017/nosequel). 
Overwrite: MONGOURI=mongodb://mymongodb/nosequel

http://localhost:8080/login
http://localhost:8080/hard-login

## Hint

- both endpoint use the same DB / data

```javascript
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
```
