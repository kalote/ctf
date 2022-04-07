# MD5 is bad - Don't look at the source code

## Local install

`npm install`
`npm start`

## Docker install

```bash
docker build -t ctf_md5 .
docker run --name ctf_md5 -d -p 8080:8080 -t ctf_md5:latest
```

## Endpoint

http://localhost:8080/
http://localhost:8080/?pass=yourpassword

## Hint

```javascript
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
```
