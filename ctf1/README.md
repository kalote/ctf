# AXA CTF 1

First AXA Life Japan CTF repository. We used OWASP juice-shop as the base challenge and CTFd as the central platform for all teams.
We decided to deploy 8 instance of the vulnerable juice-shop image on openpaas and the CTFd central platform on an ec2 instance.

## Installation

**Create vulnerable webapp**

- `oc create -f is.yaml`
- `oc create -f juice-shop.yaml`

Then, you can create as much instances as you have teams
- `oc process -p NAME=grey juice-shop-app | oc create -f -`

**Create CTFd interface**

- `git clone https://github.com/CTFd/CTFd`
- change the CTF_KEY in docker-compose.yaml file
- `docker-compose up`

**Generate the challenges for juice-shop in CTFd**

- `npm install -g juice-shop-ctf-cli`
- `juice-shop-ctf` and then answer the question

Based on the tutorial / information provided here [OWASP juice-shop](https://bkimminich.gitbooks.io/pwning-owasp-juice-shop/content/part1/ctf.html)
