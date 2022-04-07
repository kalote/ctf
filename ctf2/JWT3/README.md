# JWT - Don't look at the source code

## Local install

`npm install`
`npm start`

## Docker install

```bash
docker build -t ctf_jwt3 .
docker run --name ctf_jwt3 -d -p 8080:8080 -t ctf_jwt3:latest
```

## Endpoint

- http://localhost:8080/get_token
- http://localhost:8080/verify_token?token=<TOKEN>
- http://localhost:8080/key.pem

## Hint

```javascript
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
```

```json
{
  "name": "JWT3",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^8.0.0",
    "express": "^4.16.4",
    "jwt-simple": "0.5.1"
  }
}
```
