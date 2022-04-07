# Read-a-file - Don't look at the source code

## Local install

`npm install`
`npm start`

## Docker install

```bash
docker build -t ctf_path .
docker run --name ctf_path -d -p 8080:8080 -t ctf_path:latest
```

## Endpoint

open your browser on http://localhost:8080

## Hint

```javascript
app.post('/get_file', (req,res) => {
  // Remove ../ in filename to avoid local file inclusion
  file = req.body.filename.replace(/\.\.\//g, '');
  if (fs.existsSync(path.join(__dirname, 'files', file))) {
    res.sendFile(path.join(__dirname, 'files', file));
  } else {
    res.render('error');
  }
});
```
