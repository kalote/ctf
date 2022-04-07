# JWT Cookie

## Local install

`npm install`
`npm start`

## Docker install

```bash
docker build -t ctf_jwt .
docker run --name ctf_jwt -d -p 8080:8080 -t ctf_jwt:latest
```

## Endpoint

open your browser on http://localhost:3000

## Hint

```javascript
let secrets = [];

app.use((req, res, next) => {
	let cookie = req.cookies ? req.cookies.session : "";
	res.locals.flag = false;
	try {
		let sid = JSON.parse(Buffer.from(cookie.split(".")[1], 'base64').toString()).secretid;
		if (sid==undefined || sid>=secrets.length || sid<0) {
			throw "invalid sid";
		}
		let decoded = jwt.verify(cookie, secrets[sid]);
		if (decoded.perms == "admin") {
			res.locals.flag = true;
		}
		if (decoded.rolled == "yes") {
			res.locals.rolled = true;
		}
		if (res.locals.rolled) {
			req.cookies.session = ""; // generate new cookie
		}
	} catch (err) {
		req.cookies.session = "";
	}
	if (!req.cookies.session) {
		let secret = crypto.randomBytes(32);
		cookie = jwt.sign({
			perms: "user",
			secretid: secrets.length,
			rolled: res.locals.rolled ? "yes" : "no"
		}, secret, { algorithm: "HS256" });
		secrets.push(secret);
		res.cookie('session',cookie,{
			maxAge: 1000*60*10, 
			httpOnly: true
		});
		req.cookies.session = cookie;
		res.locals.flag = false;
	}
	next();
});
```
