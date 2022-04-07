# AXA CTF2

## Challenges

- Starter (20 points): Look around to find the flag.
- Starter 2 (30 points): Some info are not for humans ...
- MD5 (80 points): Using MD5 is not very secure ... 
- No sequel (50 points): If I use NoSQL, I'm protected against injection, right? RIGHT?
- No sequel 2 (80 points): Ok, this time, i won't make the same error twice. I'll check the password!
- JWT (80 points): With JWT, I'm sure that my admin rights are safe.
- JWT 3 (50 points): Using public/private key should ensure that no one can crack it.
- Files (50 points): A program to read files, but only in 1 directory.
- Kubernetes (80 points): Using the "files" challenge, and knowing that the challenges are running in openshift, try to access another project and get the secret there.

## Fun

- FUN: crypto with a famous cypher
- FUN 2: crypto with axa
- FUN 3: Follow the guide 

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

## Fun info

### Fun

challenge:
- String: bblntx{hi1w_rfy_1fj3ox3o_d0mwhi1rr_lw3k0af}
- Hint: What is the last name of the REAL inventor of this famous "unbreakable" cipher (among the top 3 cipher)?

### Fun 2

challenge: 
- String: aaxxxxaxaaaaxxxxaaxxxxaxaaxxxaaxaaaxaxxxaaxxaaxxaaaaxaaxaaxxxaaxaaaxxaxxaaaaxxaxaaaxxxxxaaaxaxxxxaaxxxxxaxaaaaaxxaaxxxaxaaaxxaaxaxaaaaaxaaxxaaxxaaaxaxaxaaxaaaxxaxaaaaaxaaxxxxaxaaxaaaxxaaxxaxxxaxaaaaaxaaxaaaxxxaaxxxxxaaaxaxxxaxaaaaaxaaxxxaaxaaxaaaaxaaxaaxaxaaaxxxxxaaxaaxxxaaxaxxaxaaxxxaaxxaaxaxxxaaaxaxxxaaxxaxaxaaxxaxxxaaaaaxa

### Fun 3

challenge:
- Follow the guide by calling the http endpoint and providing the requested info.
