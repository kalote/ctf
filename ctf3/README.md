# AXA CTF3 - Software Engineering Summit

## Challenges

- Starter (20 points): Look around to find the flag.
- Starter 2 (30 points): Some info are not for humans ...
- MD5 (80 points): Using MD5 is not very secure ... 
- No sequel (50 points): If I use NoSQL, I'm protected against injection, right? RIGHT?
- No sequel 2 (80 points): Ok, this time, i won't make the same error twice. I'll check the password!
- JWT (80 points): With JWT, I'm sure that my admin rights are safe.
- JWT 3 (50 points): Using public/private key should ensure that no one can crack it.
- Files (50 points): A program to read files, but only in 1 directory.
- AWS S3 (20 points): Nothing can beat my S3 auth challenge, not even the police!
- RSA (30 points): Really Secure Algorithm
- UXUI (20 points): Try to go through this worst UXUI practices to get the flag
- SQL1 (20 points): How to login when you don't have the password?
- SQL2 (50 points): ... But, how can you retrieve the password?
- SQL3 (80 points): ... But, ... How? I cannot see anything!
- eXtremely Messed up Lad (80 points): What to do with an eXtreme and eXtensive Element?
- HTTP_REQUEST_SMUGGLING_NGINX (50 points): Can you find al capones hidden request?
- HTTP_REQUEST_SMUGGLING_websocket(80 points): What lays behind the iron curtain? Can you slip through and enter the hidden login area to grab the flag?
- SSRF: Secure Stored Resource Files (20 points for basic and 80 points if connected to a cloud security challenge)- Let the server tell his secrets 
- Status: Blind ... totally blind =/

## Fun

- FUN: crypto with a famous cypher
- FUN 2: crypto with axa
- FUN 3: Follow the guide 
- UXUI: Try to finish this awful registration process

Total: 820 points (740 without k8s)

## Challenges info

### Starter 1 & 2

- Same website
- Basic app in nodeJS / html

### MD5

- nodejs app
- single endpoint

### JWT

- nodejs app + website
- cookie check

### JWT 3

- nodejs app
- 3 endpoints (/key.pem, /get_token, /verify_token?token=)

### Files

- nodejs app + website (ejs)

### No sequel 1 & 2

- nodejs app
- 2 endpoints (/login && /hard-login)

### SQL 1 / 2 / 3

- php application
- info in the readme
- docker + docker-compose

## Fun info

### Fun

challenge:
- String: bblntx{hi1w_rfy_1fj3ox3o_d0mwhi1rr_lw3k0af}
- Hint: What is the last name of the REAL inventor of this famous "unbreakable" cipher (among the top 3 cipher)?

### Fun 2

challenge: 
- String: aaxxxxaxaaaaxxxxaaxxxxaxaaxxxaaxaaaxaxxxaaxxaaxxaaaaxaaxaaaxxaaxxaaxaaaxxaaxaxxxaaaxxaxxxaaxaaaxxaaxxxaxaaxaaaxxaaxxaaaxaxaaaaaxaaxxxaaxaaaxxaxxaaaaxxaxaaaxxxxxaaaxaxxxxaaxxxxxaxaaaaaxxaaxxxaxxaaxxxxxxaaxxxaxaxaaaaaxaaaxaaaxxaaxxxaxxaaxaaaxaaxaxxxxaxaaaaaxaaxaaxaxaaaxaxaxaaxaaxxxxaaxaaaxxaaxxxaxaaaxxxxxaaxaaxxxxaaxxaaxaxaaaaaxaaaxxaaxaaaxaxxxxaaxxaaxaaaxxxxxaaaxxaaxaaaaaxa

### Fun 3

challenge:
- Follow the guide by calling the http endpoint and providing the requested info.

### UXUI

challenge:
- try to finish the registration process when the designer was totally drunk.


### HTTP_REQUEST_SMUGGLING_nginx
- Nginx in a docker container and a funky configuration

### HTTP_REQUEST_SMUGGLING_websocket
- Varnish web cache
- Apache Webserver 
- Python/Flask application (ugly but might be polished up later)

### SSRF 
challenge:
- Access the flag under `/etc/flag.txt` by playing around with a broken webhook 

### Status
- golang tcp application
- return the exit status code of a command
