#	Nginx - Http Smuggling [CVE-2019-20372]

##	Composition

Nginx 1.17.6



##	Usage

Only for CTF do not use in production!

###	build

```bash
docker-compose up -d
```

The nginx server will start on the port 9015.



###	check

```bash
$ chmod +x check.sh;./check.sh|grep HTTP
HTTP/1.1 302 Moved Temporarily
```

1 HTTP code 302 means everything is fine. 

Enjoy!

### Some help
Read carefully this site https://portswigger.net/web-security/request-smuggling and finish the tutorial to undertand the vulnerability 
